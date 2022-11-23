import joplin from 'api';
import { ToolbarButtonLocation } from 'api/types';
import { SettingItemType } from 'api/types';


import {
	WebViewMessage
} from "./common/message";

const SETTING_TOP_LINES = 'noah.search.top_lines';
const SETTING_BOTTOM_LINES = 'noah.search.bottom_lines';

let panelId: string = null;
let active: boolean = true;

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
		panelId,
		`
<div class="container">
	Test for demo
	<button>this is button</button>
</div>
		`
	);

	joplin.views.panels.addScript(panelId, "./webview/jquery.min.js");
	joplin.views.panels.addScript(panelId, "./webview/webview.js");

	joplin.views.panels.onMessage(panelId, async (message: WebViewMessage): Promise<any> => {
		

		return null;
	});
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

joplin.plugins.register({
	onStart: async function() {
		await initSettings();

		await initCommands();
		await initPanel();

		showPanel(active);
	},
});
