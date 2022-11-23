import $ from "./zepto";
import { delay } from "../common/utils";

import {
	webviewChannel
} from "../common/webviewChannel";

import {
	ChannelHandler,
	ChannelType, 
    NoteTarget, Line
} from "../common/message";

import htmlEncode from "./encoder";

declare var webviewApi : any;

const $keywordInput = $(".search-input input[name='keyword']");
const $regexCheckedBox = $(".search-input input[name='is_regex']");

let searchId: string = null;

let currentSearch: any = null;
let currentNote: any = null;

let handlers = new Map<string, ChannelHandler>();

let channel: ChannelType = webviewChannel(handlers);

function splitPartByKeyword(line: string, keyword: string) {
    let parts = [ ];

    let lastIndex = 0;

    while(lastIndex < line.length) {
        const index = line.indexOf(keyword, lastIndex);

        if (index == -1) {
            parts.push(line.substring(lastIndex));

            break;
        }

        parts.push(line.substring(lastIndex, index));
            
        const word = line.substring(index, lastIndex = index + keyword.length);
        
        parts.push({
            keyword: true,
            word
        });
    }

    return parts;
}

function splitePartByRegex(line: string, keyword: string) {
    const regex = new RegExp(keyword, "g");

    let parts = [ ];

    let match = null;
    let lastIndex = 0;

    while ((match = regex.exec(line)) !== null) {
        const index = match.index;
        const word = match[0];
        
        parts.push(line.substring(lastIndex, index));
        
        parts.push({
            keyword: true,
            word
        });
        
        lastIndex = index + word.length;
    }

    if (lastIndex != -1) {
        parts.push(line.substring(lastIndex));
    }

    return parts;
}

function matchLine(line: Line): string {
    const $line = $(`<div class="line" data-line="${line.lineNumber}"></div>`);

    const parts = currentSearch.isRegex?
        splitePartByRegex(line.lineContent, currentSearch.keyword):
        splitPartByKeyword(line.lineContent, currentSearch.keyword);

    //$(".error").append(`<div>${line.lineContent}, ${JSON.stringify(parts)}</div>`);

    parts.forEach((part) => {
        if (typeof(part) === "string") {
            const $span = $("<span></span>");
            $span.text(part);
            $line.append($span);
            return;
        }

        const $span = $("<span class='keyword'></span>");
        $span.text(part.word);
        $line.append($span);
    });

    return $line;
}

function createNoteBlock(target: NoteTarget) {
    let noteBlock = {
        noteId: target.noteId,
        target: target,
        $root: null,
        $lines: null,
        lastLineNumber: null,
        appendLine: null
    };

    noteBlock.$root = $(`
<div class="note">
    <h4>
        <a class="link" data-id="${target.noteId}" href="javascript:;">
            ${target.notebookName} > ${target.noteName}
        </a>
    </h4>
</div>`);

    $(".search-result").append(noteBlock.$root);

    noteBlock.$root.find("a.link").click(() => {
        channel("open", target.noteId);
    });

    noteBlock.appendLine = (line: Line) => {
        if (noteBlock.lastLineNumber != null && line.lineNumber == noteBlock.lastLineNumber + 1)
        {
            noteBlock.$lines.append(matchLine(line));
            noteBlock.lastLineNumber = line.lineNumber;
            return;
        }

        noteBlock.$root.append(`<li>line: ${line.lineNumber}</li>`);

        noteBlock.$lines = $("<pre></pre>");

        noteBlock.$root.append(noteBlock.$lines);

        noteBlock.$lines.append(matchLine(line));
        noteBlock.lastLineNumber = line.lineNumber;
    };

    return noteBlock;
}

handlers.set("finish", async () => {
    let tip = `search ${currentSearch.keyword} done.`;

    if (currentSearch.isRegex)
    {
        tip = `search /${currentSearch.keyword}/ done.`;
    }

    $(".search-tip").text(tip);
});

handlers.set("result", async (id, target: NoteTarget, lines: Line[]) => {
    if (searchId != id)
        return false;

    if (currentNote == null || currentNote.noteId != target.noteId)
    {
        currentNote = createNoteBlock(target);
    }

    lines.forEach((line) => {
        currentNote.appendLine(line);
    });

    return true;
});

handlers.set("status", async(target: NoteTarget, index: number, counter: number) => {
    let tip = `is searching ${currentSearch.keyword}. `;

    if (currentSearch.isRegex)
    {
        tip = `is searching /${currentSearch.keyword}/. `;
    }

    tip += `${target.notebookName} > ${target.noteName} ${index} / ${counter}`;

    $(".search-tip").text(tip);
});

async function search(keyword: string, isRegex: boolean) {
    keyword = keyword.trim();

    $(".search-tip").text("");
    $(".search-result").text("");

    if (keyword == "")
    {
        return;
    }

    let tip = `is searching ${keyword}...`;

    if (isRegex)
    {
        tip = `is searching /${keyword}/...`;
    }

    $(".search-tip").text(tip);

    searchId = String(Date.now());

    currentSearch = {
        searchId,
        keyword,
        isRegex
    };

    currentNote = null;

    channel("search", searchId, keyword, isRegex);
}

$regexCheckedBox.change(() => {
    let placeholder = "keyword for search";

    const isRegex = $regexCheckedBox.attr("checked");

    if (isRegex)
    {
        placeholder = "regex for search";
    }

    $keywordInput.attr("placeholder", placeholder);
});

$keywordInput.keyup(() => {
    delay($keywordInput, "onchange", 700, () => {
        search(
            $keywordInput.val(), $regexCheckedBox.attr("checked")
        );
    });
});
