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

function splitPartByRegex(line: string, keyword: string) {
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
    const $line = $(`<div class="line" data-line="${line.lineNumber + 1}"></div>`);

    const parts = currentSearch.isRegex?
        splitPartByRegex(line.lineContent, currentSearch.keyword):
        splitPartByKeyword(line.lineContent, currentSearch.keyword);

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

    if (currentSearch.noteBooks[target.notebookId] == null) 
    {
        currentSearch.noteBooks[target.notebookId] = {
            notebookId: target.notebookId,
            notebookName: target.notebookName,
            notes: {
                [target.noteId]: noteBlock
            }
        }
    } else
    {
        currentSearch.noteBooks[target.notebookId].notes[target.noteId] = noteBlock;
    }

    currentSearch.notes[target.noteId] = noteBlock;

    noteBlock.$root = $(`
<div class="note"
    data-note="${target.noteId}"
    data-notebook="${target.notebookId}">
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

        noteBlock.$root.append(`<li>line: ${line.lineNumber + 1}</li>`);

        noteBlock.$lines = $("<pre></pre>");

        noteBlock.$root.append(noteBlock.$lines);

        noteBlock.$lines.append(matchLine(line));
        noteBlock.lastLineNumber = line.lineNumber;
    };

    return noteBlock;
}

handlers.set("finish", async () => {
    let tip = `'${currentSearch.keyword}' result: `;

    if (currentSearch.isRegex)
    {
        tip = `/${currentSearch.keyword}/ result: `;
    }

    tip += "<select class='notebooks'></select> > <select class='notes'></select>";

    $(".search-tip").html(tip);

    const $notebooks = $(".search-tip .notebooks");
    const $notes = $(".search-tip .notes");

    const local = {
        notebookSelector: "-1",
        noteSelector: "-1"
    };

    $notebooks.append(`<option value="-1">All</option>`);

    Object.values(currentSearch.noteBooks).sort((left: any, right: any) => {
        return left.notebookName.localeCompare(right.notebookName);
    }).forEach((notebook: any, index) => {
        $notebooks.append(`<option value="${notebook.notebookId}">${notebook.notebookName}</option>`);
    })

    $notes.append(`<option value="-1">All</option>`);

    Object.values(currentSearch.notes).sort((left: any, right: any) => {
        return left.target.noteName.localeCompare(right.target.noteName);
    }).forEach((note: any) => {
        $notes.append(`<option value="${note.target.noteId}">${note.target.noteName}</option>`);
    });

    function filter() {
        //alert($(".search-result").html());
        //const html = $(".search-result").html();

        //$(".search-result").text(html);
        if (local.noteSelector != "-1")
        {
            $(`.search-result .note`).hide();
            $(`.search-result .note[data-note='${local.noteSelector}']`).show();

            //$(".search-result").text(`.search-result .note[data-note='${local.noteSelector}']`);
        } else
        if (local.notebookSelector != "-1")
        {
            $(`.search-result .note`).hide();
            $(`.search-result .note[data-notebook='${local.notebookSelector}']`).show();

            //$(".search-result").text(`.search-result .note[data-notebook='${local.notebookSelector}']`);
        } else
        {
            $(`.search-result .note`).show();
        }
    }

    $notebooks.change(function() {
        local.notebookSelector = $(this).val();

        local.noteSelector = "-1";
        $notes.html(`<option value="-1">All</option>`);

        if (local.notebookSelector != "-1")
        {
            const notebook = currentSearch.noteBooks[local.notebookSelector];

            if (notebook != null)
            {
                Object.values(notebook.notes).sort((left: any, right: any) => {
                    return left.target.noteName.localeCompare(right.target.noteName);
                }).forEach((note: any) => {
                    $notes.append(`<option value="${note.target.noteId}">${note.target.noteName}</option>`);
                });
            }
        } else
        {
            Object.values(currentSearch.notes).sort((left: any, right: any) => {
                return left.target.noteName.localeCompare(right.target.noteName);
            }).forEach((note: any) => {
                $notes.append(`<option value="${note.target.noteId}">${note.target.noteName}</option>`);
            });
        }

        filter();
    });

    $notes.change(function() {
        local.noteSelector = $(this).val();

        filter();
    });
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
        isRegex,

        noteBooks: { },
        notes: { }
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
    const keyword = $keywordInput.val().trim();
    if (keyword == "")
    {
        delay($keywordInput, "onchange", -1, null);

        return search(keyword, false);
    }

    delay($keywordInput, "onchange", 700, () => {
        search(
            keyword, $regexCheckedBox.attr("checked")
        );
    });
});
