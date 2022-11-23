import joplin from 'api';
import { ToolbarButtonLocation } from 'api/types';
import { SettingItemType } from 'api/types';

import JoplinDataApi from "./joplin/joplin-data-api";

import {
	hostChannel
} from "./common/hostChannel";

import {
	ChannelHandler,
	ChannelType,
	Line,
	NoteTarget
} from "./common/message";

import { timeout } from './common/utils';

import html from "./webview/html.js";

const SETTING_TOP_LINES = 'noah.search.top_lines';
const SETTING_BOTTOM_LINES = 'noah.search.bottom_lines';

let panelId: string = null;
let active: boolean = true;
let channel: ChannelType = null;

async function initSettings() {
	const SECTION = 'Search';

	await joplin.settings.registerSection(SECTION, {
		description: 'Search Plugin Settings',
		label: 'Search',
		iconName: 'fas fa-search'
	});

	await joplin.settings.registerSettings({
		[SETTING_TOP_LINES]: { 
			public: true,
			section: SECTION,
			type: SettingItemType.Int,
			value: 3,
			label: "The lines's count shown above that search result.",
		},
		[SETTING_BOTTOM_LINES]: {
			public: true,
			section: SECTION,
			type: SettingItemType.Int,
			value: 3,
			label: "The lines's count shown after that search result.",
		}
	});
}

async function initPanel() {
	panelId = await joplin.views.panels.create("graph");

	await joplin.views.panels.setHtml(
		panelId, html
	);

	joplin.views.panels.addScript(panelId, "./webview/jquery.min.js");
	joplin.views.panels.addScript(panelId, "./webview/webview.css");
	joplin.views.panels.addScript(panelId, "./webview/webview.js");

	/*joplin.views.panels.onMessage(panelId, async (message: WebViewMessage): Promise<any> => {
		

		return null;
	});

	alert("start??");

	try
	{
		const res = await joplin.views.panels.postMessage(panelId, {
			event: "test",
			value: "hello world"
		});

		alert(res);
	} catch(err)
	{
		alert(String(err));
	}*/
}

async function showPanel(show: boolean | null | undefined) {
	if (show === null || show === undefined)
	{
		show = active;
	} else
	active = show;

	await joplin.views.panels.show(panelId, active);
}

async function initCommands() {
	joplin.commands.register({
		name: "toggleSearch",
		label: "toggle search view",
		iconName: "fas fa-search",
		execute: async () => {
			showPanel(!active);
		},
	});

	joplin.views.toolbarButtons.create(
		"toggleSearch",
		"toggleSearch",
		ToolbarButtonLocation.NoteToolbar
	);
}

async function initHandlers() {
	const dataApi = JoplinDataApi.instance();

	const maps = new Map<string, ChannelHandler>();

	channel = hostChannel(panelId, maps);

	maps.set("search", async (searchId, keyword, isRegex) => {
		const topLineNum = Number(await joplin.settings.value(SETTING_TOP_LINES));
		const bottomLineNum = Number(await joplin.settings.value(SETTING_BOTTOM_LINES));

		let toplines = [];

		const dumpResult = (target: NoteTarget, line: Line) => {
			channel("result", searchId, target, line);			
		};

		const result = await dataApi.getNotes({
			fields: [ 'id', 'parent_id', 'title', 'body' ]
		});

		for(let index = 0; index != 1; ++index)
		{
			await timeout(0);

			const note = result.results[index];
			let notebook = null;

			if (note.parent_id != null)
			{
				notebook = await dataApi.getNoteBook({
					fields: [ 'id', 'parent_id', 'title' ]
				}, note.parent_id);
			}

			let target: NoteTarget = {
				notebookId: note.parent_id,
				notebookName: notebook?.title,

				noteId: note.id,
				noteName: note.title
			};

			let regex = null;
			if (isRegex)
				regex = new RegExp(keyword);

			const lines = note.body.split("\n");
			for(let lineNumber = 0; lineNumber < lines.length; ++lineNumber)
			{
				await timeout(0);

				let line = lines[lineNumber];

				toplines.push({
					lineNumber,
					lineContent: line
				});

				while(toplines.length > topLineNum)
				{
					toplines.shift();
				}

				if (isRegex? line.match(regex): line.indexOf(keyword) != -1)
				{
					toplines.forEach((line) => {
						dumpResult(target, line);
					});

					let bottom = bottomLineNum;
					while(bottom--) {
						++lineNumber;

						if (lineNumber >= lines.length)
							break;

						line = lines[lineNumber];

						dumpResult(target, {
							lineNumber,
							lineContent: line
						});
					}
				}
			}
		}
	});
}

joplin.plugins.register({
	onStart: async function() {
		await initSettings();

		await initCommands();
		await initPanel();
		await initHandlers();

		showPanel(active);
	},
});
