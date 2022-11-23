import $ from "./zepto";
import { delay } from "../common/utils";

declare var webviewApi : any;

$(".error").text("ready!");

$(".error").text(String($(".search-panel").parent().parent().html()));

const $keywordInput = $(".search-input input[name='keyword']");
const $regexCheckedBox = $(".search-input input[name='is_regex']");

let searchId = null;

webviewApi.onMessage(({ message }) => {
    alert("onMessage" + JSON.stringify(message));

    return 99;
});

async function search(keyword: string, isRegex: boolean) {
    keyword = keyword.trim();

    if (keyword == "")
    {
        $(".search-tip").text("");
        $(".search-result").text("");

        return;
    }

    let tip = `${keyword} is searching...`;

    if (isRegex)
    {
        tip = `/${keyword}/ is searching...`;
    }

    $(".search-tip").text(tip);

    searchId = Date.now();

    webviewApi.postMessage({
        event: "search_request",
        value: {
            searchId,
            keyword,
            isRegex
        }
    });
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