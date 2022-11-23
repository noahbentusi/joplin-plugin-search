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

declare var webviewApi : any;

//$(".error").text("ready!");
//$(".error").text(String($(".search-panel").parent().parent().html()));

const $keywordInput = $(".search-input input[name='keyword']");
const $regexCheckedBox = $(".search-input input[name='is_regex']");

let searchId: string = null;
let handlers = new Map<string, ChannelHandler>();

let channel: ChannelType = webviewChannel(handlers);

handlers.set("result", async (id, note: NoteTarget, line: Line) => {
    if (searchId != id)
        return false;

    return true;
});

async function search(keyword: string, isRegex: boolean) {
    keyword = keyword.trim();

    $(".search-tip").text("");
    $(".search-result").text("");

    if (keyword == "")
    {
        return;
    }

    let tip = `${keyword} is searching...`;

    if (isRegex)
    {
        tip = `/${keyword}/ is searching...`;
    }

    $(".search-tip").text(tip);

    searchId = String(Date.now());

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
    delay($keywordInput, "onchange", 300, () => {
        search(
            $keywordInput.val(), $regexCheckedBox.attr("checked")
        );
    });
});