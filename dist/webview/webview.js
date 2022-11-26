/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/webview/webview.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/common/message.ts":
/*!*******************************!*\
  !*** ./src/common/message.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelEvent = void 0;
var ChannelEvent;
(function (ChannelEvent) {
    ChannelEvent["requestEvent"] = "request";
    ChannelEvent["responseEvent"] = "response";
})(ChannelEvent = exports.ChannelEvent || (exports.ChannelEvent = {}));


/***/ }),

/***/ "./src/common/utils.ts":
/*!*****************************!*\
  !*** ./src/common/utils.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.timeout = exports.delay = void 0;
exports.delay = function (namespace, name, timeout, func) {
    if (namespace[name] != null)
        clearTimeout(namespace[name]);
    if (func != null)
        namespace[name] = setTimeout(func, timeout);
};
exports.timeout = function (timer) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), timer);
    });
};


/***/ }),

/***/ "./src/common/webviewChannel.ts":
/*!**************************************!*\
  !*** ./src/common/webviewChannel.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.webviewChannel = void 0;
const message_1 = __webpack_require__(/*! ./message */ "./src/common/message.ts");
function webviewChannel(handlers) {
    let local = {
        stubs: {}
    };
    webviewApi.onMessage(({ message }) => __awaiter(this, void 0, void 0, function* () {
        //$(".error").append(`<div>${JSON.stringify(message)}</div>`);
        if (message.event == message_1.ChannelEvent.responseEvent) {
            const response = message.value;
            const stub = local.stubs[response.requestId];
            if (stub == null)
                return;
            return response.isException ?
                stub.reject(response.value) :
                stub.resolve(response.value);
        }
        else if (message.event == message_1.ChannelEvent.requestEvent) {
            const request = message.value;
            const handler = handlers.get(request.name);
            if (handler == null)
                return Promise.reject(new Error("no that handler"));
            return handler.apply(null, request.args);
        }
        return Promise.resolve(true);
    }));
    return (name, ...args) => {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            const requestId = `${name}-${Date.now()}`;
            local.stubs[requestId] = {
                resolve, reject
            };
            webviewApi.postMessage({
                event: message_1.ChannelEvent.requestEvent,
                value: {
                    requestId,
                    name, args
                }
            });
        }));
    };
}
exports.webviewChannel = webviewChannel;


/***/ }),

/***/ "./src/webview/webview.ts":
/*!********************************!*\
  !*** ./src/webview/webview.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zepto_1 = __importDefault(__webpack_require__(/*! ./zepto */ "./src/webview/zepto.js"));
const utils_1 = __webpack_require__(/*! ../common/utils */ "./src/common/utils.ts");
const webviewChannel_1 = __webpack_require__(/*! ../common/webviewChannel */ "./src/common/webviewChannel.ts");
const $keywordInput = zepto_1.default(".search-input input[name='keyword']");
const $regexCheckedBox = zepto_1.default(".search-input input[name='is_regex']");
let searchId = null;
let currentSearch = null;
let currentNote = null;
let handlers = new Map();
let channel = webviewChannel_1.webviewChannel(handlers);
function splitPartByKeyword(line, keyword) {
    let parts = [];
    let lastIndex = 0;
    while (lastIndex < line.length) {
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
function splitPartByRegex(line, keyword) {
    const regex = new RegExp(keyword, "g");
    let parts = [];
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
function matchLine(line) {
    const $line = zepto_1.default(`<div class="line" data-line="${line.lineNumber + 1}"></div>`);
    const parts = currentSearch.isRegex ?
        splitPartByRegex(line.lineContent, currentSearch.keyword) :
        splitPartByKeyword(line.lineContent, currentSearch.keyword);
    parts.forEach((part) => {
        if (typeof (part) === "string") {
            const $span = zepto_1.default("<span></span>");
            $span.text(part);
            $line.append($span);
            return;
        }
        const $span = zepto_1.default("<span class='keyword'></span>");
        $span.text(part.word);
        $line.append($span);
    });
    return $line;
}
function createNoteBlock(target) {
    let noteBlock = {
        noteId: target.noteId,
        target: target,
        $root: null,
        $lines: null,
        lastLineNumber: null,
        appendLine: null
    };
    if (currentSearch.noteBooks[target.notebookId] == null) {
        currentSearch.noteBooks[target.notebookId] = {
            notebookId: target.notebookId,
            notebookName: target.notebookName,
            notes: {
                [target.noteId]: noteBlock
            }
        };
    }
    else {
        currentSearch.noteBooks[target.notebookId].notes[target.noteId] = noteBlock;
    }
    currentSearch.notes[target.noteId] = noteBlock;
    noteBlock.$root = zepto_1.default(`
<div class="note"
    data-note="${target.noteId}"
    data-notebook="${target.notebookId}">
    <h4>
        <a class="link" data-id="${target.noteId}" href="javascript:;">
            ${target.notebookName} > ${target.noteName}
        </a>
    </h4>
</div>`);
    zepto_1.default(".search-result").append(noteBlock.$root);
    noteBlock.$root.find("a.link").click(() => {
        channel("open", target.noteId);
    });
    noteBlock.appendLine = (line) => {
        if (noteBlock.lastLineNumber != null && line.lineNumber == noteBlock.lastLineNumber + 1) {
            noteBlock.$lines.append(matchLine(line));
            noteBlock.lastLineNumber = line.lineNumber;
            return;
        }
        noteBlock.$root.append(`<li>line: ${line.lineNumber + 1}</li>`);
        noteBlock.$lines = zepto_1.default("<pre></pre>");
        noteBlock.$root.append(noteBlock.$lines);
        noteBlock.$lines.append(matchLine(line));
        noteBlock.lastLineNumber = line.lineNumber;
    };
    return noteBlock;
}
handlers.set("finish", () => __awaiter(void 0, void 0, void 0, function* () {
    let tip = `'${currentSearch.keyword}' result: `;
    if (currentSearch.isRegex) {
        tip = `/${currentSearch.keyword}/ result: `;
    }
    tip += "<select class='notebooks'></select> > <select class='notes'></select>";
    zepto_1.default(".search-tip").html(tip);
    const $notebooks = zepto_1.default(".search-tip .notebooks");
    const $notes = zepto_1.default(".search-tip .notes");
    const local = {
        notebookSelector: "-1",
        noteSelector: "-1"
    };
    $notebooks.append(`<option value="-1">All</option>`);
    Object.values(currentSearch.noteBooks).sort((left, right) => {
        return left.notebookName.localeCompare(right.notebookName);
    }).forEach((notebook, index) => {
        $notebooks.append(`<option value="${notebook.notebookId}">${notebook.notebookName}</option>`);
    });
    $notes.append(`<option value="-1">All</option>`);
    Object.values(currentSearch.notes).sort((left, right) => {
        return left.target.noteName.localeCompare(right.target.noteName);
    }).forEach((note) => {
        $notes.append(`<option value="${note.target.noteId}">${note.target.noteName}</option>`);
    });
    function filter() {
        //alert($(".search-result").html());
        //const html = $(".search-result").html();
        //$(".search-result").text(html);
        if (local.noteSelector != "-1") {
            zepto_1.default(`.search-result .note`).hide();
            zepto_1.default(`.search-result .note[data-note='${local.noteSelector}']`).show();
            //$(".search-result").text(`.search-result .note[data-note='${local.noteSelector}']`);
        }
        else if (local.notebookSelector != "-1") {
            zepto_1.default(`.search-result .note`).hide();
            zepto_1.default(`.search-result .note[data-notebook='${local.notebookSelector}']`).show();
            //$(".search-result").text(`.search-result .note[data-notebook='${local.notebookSelector}']`);
        }
        else {
            zepto_1.default(`.search-result .note`).show();
        }
    }
    $notebooks.change(function () {
        local.notebookSelector = zepto_1.default(this).val();
        local.noteSelector = "-1";
        $notes.html(`<option value="-1">All</option>`);
        if (local.notebookSelector != "-1") {
            const notebook = currentSearch.noteBooks[local.notebookSelector];
            if (notebook != null) {
                Object.values(notebook.notes).sort((left, right) => {
                    return left.target.noteName.localeCompare(right.target.noteName);
                }).forEach((note) => {
                    $notes.append(`<option value="${note.target.noteId}">${note.target.noteName}</option>`);
                });
            }
        }
        else {
            Object.values(currentSearch.notes).sort((left, right) => {
                return left.target.noteName.localeCompare(right.target.noteName);
            }).forEach((note) => {
                $notes.append(`<option value="${note.target.noteId}">${note.target.noteName}</option>`);
            });
        }
        filter();
    });
    $notes.change(function () {
        local.noteSelector = zepto_1.default(this).val();
        filter();
    });
}));
handlers.set("result", (id, target, lines) => __awaiter(void 0, void 0, void 0, function* () {
    if (searchId != id)
        return false;
    if (currentNote == null || currentNote.noteId != target.noteId) {
        currentNote = createNoteBlock(target);
    }
    lines.forEach((line) => {
        currentNote.appendLine(line);
    });
    return true;
}));
handlers.set("status", (target, index, counter) => __awaiter(void 0, void 0, void 0, function* () {
    let tip = `is searching ${currentSearch.keyword}. `;
    if (currentSearch.isRegex) {
        tip = `is searching /${currentSearch.keyword}/. `;
    }
    tip += `${target.notebookName} > ${target.noteName} ${index} / ${counter}`;
    zepto_1.default(".search-tip").text(tip);
}));
function search(keyword, isRegex) {
    return __awaiter(this, void 0, void 0, function* () {
        keyword = keyword.trim();
        zepto_1.default(".search-tip").text("");
        zepto_1.default(".search-result").text("");
        if (keyword == "") {
            return;
        }
        let tip = `is searching ${keyword}...`;
        if (isRegex) {
            tip = `is searching /${keyword}/...`;
        }
        zepto_1.default(".search-tip").text(tip);
        searchId = String(Date.now());
        currentSearch = {
            searchId,
            keyword,
            isRegex,
            noteBooks: {},
            notes: {}
        };
        currentNote = null;
        channel("search", searchId, keyword, isRegex);
    });
}
$regexCheckedBox.change(() => {
    let placeholder = "keyword for search";
    const isRegex = $regexCheckedBox.attr("checked");
    if (isRegex) {
        placeholder = "regex for search";
    }
    $keywordInput.attr("placeholder", placeholder);
});
$keywordInput.keyup(() => {
    const keyword = $keywordInput.val().trim();
    if (keyword == "") {
        utils_1.delay($keywordInput, "onchange", -1, null);
        return search(keyword, false);
    }
    utils_1.delay($keywordInput, "onchange", 700, () => {
        search(keyword, $regexCheckedBox.attr("checked"));
    });
});


/***/ }),

/***/ "./src/webview/zepto.js":
/*!******************************!*\
  !*** ./src/webview/zepto.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Zepto v1.1.4 - zepto event ajax form ie - zeptojs.com/license */

var Zepto = (function() {
  var undefined, key, $, classList, emptyArray = [], slice = emptyArray.slice, filter = emptyArray.filter,
    document = window.document,
    elementDisplay = {}, classCache = {},
    cssNumber = { 'column-count': 1, 'columns': 1, 'font-weight': 1, 'line-height': 1,'opacity': 1, 'z-index': 1, 'zoom': 1 },
    fragmentRE = /^\s*<(\w+|!)[^>]*>/,
    singleTagRE = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    tagExpanderRE = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
    rootNodeRE = /^(?:body|html)$/i,
    capitalRE = /([A-Z])/g,

    // special attributes that should be get/set via method calls
    methodAttributes = ['val', 'css', 'html', 'text', 'data', 'width', 'height', 'offset'],

    adjacencyOperators = [ 'after', 'prepend', 'before', 'append' ],
    table = document.createElement('table'),
    tableRow = document.createElement('tr'),
    containers = {
      'tr': document.createElement('tbody'),
      'tbody': table, 'thead': table, 'tfoot': table,
      'td': tableRow, 'th': tableRow,
      '*': document.createElement('div')
    },
    readyRE = /complete|loaded|interactive/,
    simpleSelectorRE = /^[\w-]*$/,
    class2type = {},
    toString = class2type.toString,
    zepto = {},
    camelize, uniq,
    tempParent = document.createElement('div'),
    propMap = {
      'tabindex': 'tabIndex',
      'readonly': 'readOnly',
      'for': 'htmlFor',
      'class': 'className',
      'maxlength': 'maxLength',
      'cellspacing': 'cellSpacing',
      'cellpadding': 'cellPadding',
      'rowspan': 'rowSpan',
      'colspan': 'colSpan',
      'usemap': 'useMap',
      'frameborder': 'frameBorder',
      'contenteditable': 'contentEditable'
    },
    isArray = Array.isArray ||
      function(object){ return object instanceof Array }

  zepto.matches = function(element, selector) {
    if (!selector || !element || element.nodeType !== 1) return false
    var matchesSelector = element.webkitMatchesSelector || element.mozMatchesSelector ||
                          element.oMatchesSelector || element.matchesSelector
    if (matchesSelector) return matchesSelector.call(element, selector)
    // fall back to performing a selector:
    var match, parent = element.parentNode, temp = !parent
    if (temp) (parent = tempParent).appendChild(element)
    match = ~zepto.qsa(parent, selector).indexOf(element)
    temp && tempParent.removeChild(element)
    return match
  }

  function type(obj) {
    return obj == null ? String(obj) :
      class2type[toString.call(obj)] || "object"
  }

  function isFunction(value) { return type(value) == "function" }
  function isWindow(obj)     { return obj != null && obj == obj.window }
  function isDocument(obj)   { return obj != null && obj.nodeType == obj.DOCUMENT_NODE }
  function isObject(obj)     { return type(obj) == "object" }
  function isPlainObject(obj) {
    return isObject(obj) && !isWindow(obj) && Object.getPrototypeOf(obj) == Object.prototype
  }
  function likeArray(obj) { return typeof obj.length == 'number' }

  function compact(array) { return filter.call(array, function(item){ return item != null }) }
  function flatten(array) { return array.length > 0 ? $.fn.concat.apply([], array) : array }
  camelize = function(str){ return str.replace(/-+(.)?/g, function(match, chr){ return chr ? chr.toUpperCase() : '' }) }
  function dasherize(str) {
    return str.replace(/::/g, '/')
           .replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2')
           .replace(/([a-z\d])([A-Z])/g, '$1_$2')
           .replace(/_/g, '-')
           .toLowerCase()
  }
  uniq = function(array){ return filter.call(array, function(item, idx){ return array.indexOf(item) == idx }) }

  function classRE(name) {
    return name in classCache ?
      classCache[name] : (classCache[name] = new RegExp('(^|\\s)' + name + '(\\s|$)'))
  }

  function maybeAddPx(name, value) {
    return (typeof value == "number" && !cssNumber[dasherize(name)]) ? value + "px" : value
  }

  function defaultDisplay(nodeName) {
    var element, display
    if (!elementDisplay[nodeName]) {
      element = document.createElement(nodeName)
      document.body.appendChild(element)
      display = getComputedStyle(element, '').getPropertyValue("display")
      element.parentNode.removeChild(element)
      display == "none" && (display = "block")
      elementDisplay[nodeName] = display
    }
    return elementDisplay[nodeName]
  }

  function children(element) {
    return 'children' in element ?
      slice.call(element.children) :
      $.map(element.childNodes, function(node){ if (node.nodeType == 1) return node })
  }

  // `$.zepto.fragment` takes a html string and an optional tag name
  // to generate DOM nodes nodes from the given html string.
  // The generated DOM nodes are returned as an array.
  // This function can be overriden in plugins for example to make
  // it compatible with browsers that don't support the DOM fully.
  zepto.fragment = function(html, name, properties) {
    var dom, nodes, container

    // A special case optimization for a single tag
    if (singleTagRE.test(html)) dom = $(document.createElement(RegExp.$1))

    if (!dom) {
      if (html.replace) html = html.replace(tagExpanderRE, "<$1></$2>")
      if (name === undefined) name = fragmentRE.test(html) && RegExp.$1
      if (!(name in containers)) name = '*'

      container = containers[name]
      container.innerHTML = '' + html
      dom = $.each(slice.call(container.childNodes), function(){
        container.removeChild(this)
      })
    }

    if (isPlainObject(properties)) {
      nodes = $(dom)
      $.each(properties, function(key, value) {
        if (methodAttributes.indexOf(key) > -1) nodes[key](value)
        else nodes.attr(key, value)
      })
    }

    return dom
  }

  // `$.zepto.Z` swaps out the prototype of the given `dom` array
  // of nodes with `$.fn` and thus supplying all the Zepto functions
  // to the array. Note that `__proto__` is not supported on Internet
  // Explorer. This method can be overriden in plugins.
  zepto.Z = function(dom, selector) {
    dom = dom || []
    dom.__proto__ = $.fn
    dom.selector = selector || ''
    return dom
  }

  // `$.zepto.isZ` should return `true` if the given object is a Zepto
  // collection. This method can be overriden in plugins.
  zepto.isZ = function(object) {
    return object instanceof zepto.Z
  }

  // `$.zepto.init` is Zepto's counterpart to jQuery's `$.fn.init` and
  // takes a CSS selector and an optional context (and handles various
  // special cases).
  // This method can be overriden in plugins.
  zepto.init = function(selector, context) {
    var dom
    // If nothing given, return an empty Zepto collection
    if (!selector) return zepto.Z()
    // Optimize for string selectors
    else if (typeof selector == 'string') {
      selector = selector.trim()
      // If it's a html fragment, create nodes from it
      // Note: In both Chrome 21 and Firefox 15, DOM error 12
      // is thrown if the fragment doesn't begin with <
      if (selector[0] == '<' && fragmentRE.test(selector))
        dom = zepto.fragment(selector, RegExp.$1, context), selector = null
      // If there's a context, create a collection on that context first, and select
      // nodes from there
      else if (context !== undefined) return $(context).find(selector)
      // If it's a CSS selector, use it to select nodes.
      else dom = zepto.qsa(document, selector)
    }
    // If a function is given, call it when the DOM is ready
    else if (isFunction(selector)) return $(document).ready(selector)
    // If a Zepto collection is given, just return it
    else if (zepto.isZ(selector)) return selector
    else {
      // normalize array if an array of nodes is given
      if (isArray(selector)) dom = compact(selector)
      // Wrap DOM nodes.
      else if (isObject(selector))
        dom = [selector], selector = null
      // If it's a html fragment, create nodes from it
      else if (fragmentRE.test(selector))
        dom = zepto.fragment(selector.trim(), RegExp.$1, context), selector = null
      // If there's a context, create a collection on that context first, and select
      // nodes from there
      else if (context !== undefined) return $(context).find(selector)
      // And last but no least, if it's a CSS selector, use it to select nodes.
      else dom = zepto.qsa(document, selector)
    }
    // create a new Zepto collection from the nodes found
    return zepto.Z(dom, selector)
  }

  // `$` will be the base `Zepto` object. When calling this
  // function just call `$.zepto.init, which makes the implementation
  // details of selecting nodes and creating Zepto collections
  // patchable in plugins.
  $ = function(selector, context){
    return zepto.init(selector, context)
  }

  function extend(target, source, deep) {
    for (key in source)
      if (deep && (isPlainObject(source[key]) || isArray(source[key]))) {
        if (isPlainObject(source[key]) && !isPlainObject(target[key]))
          target[key] = {}
        if (isArray(source[key]) && !isArray(target[key]))
          target[key] = []
        extend(target[key], source[key], deep)
      }
      else if (source[key] !== undefined) target[key] = source[key]
  }

  // Copy all but undefined properties from one or more
  // objects to the `target` object.
  $.extend = function(target){
    var deep, args = slice.call(arguments, 1)
    if (typeof target == 'boolean') {
      deep = target
      target = args.shift()
    }
    args.forEach(function(arg){ extend(target, arg, deep) })
    return target
  }

  // `$.zepto.qsa` is Zepto's CSS selector implementation which
  // uses `document.querySelectorAll` and optimizes for some special cases, like `#id`.
  // This method can be overriden in plugins.
  zepto.qsa = function(element, selector){
    var found,
        maybeID = selector[0] == '#',
        maybeClass = !maybeID && selector[0] == '.',
        nameOnly = maybeID || maybeClass ? selector.slice(1) : selector, // Ensure that a 1 char tag name still gets checked
        isSimple = simpleSelectorRE.test(nameOnly)
    return (isDocument(element) && isSimple && maybeID) ?
      ( (found = element.getElementById(nameOnly)) ? [found] : [] ) :
      (element.nodeType !== 1 && element.nodeType !== 9) ? [] :
      slice.call(
        isSimple && !maybeID ?
          maybeClass ? element.getElementsByClassName(nameOnly) : // If it's simple, it could be a class
          element.getElementsByTagName(selector) : // Or a tag
          element.querySelectorAll(selector) // Or it's not simple, and we need to query all
      )
  }

  function filtered(nodes, selector) {
    return selector == null ? $(nodes) : $(nodes).filter(selector)
  }

  $.contains = document.documentElement.contains ?
    function(parent, node) {
      return parent !== node && parent.contains(node)
    } :
    function(parent, node) {
      while (node && (node = node.parentNode))
        if (node === parent) return true
      return false
    }

  function funcArg(context, arg, idx, payload) {
    return isFunction(arg) ? arg.call(context, idx, payload) : arg
  }

  function setAttribute(node, name, value) {
    value == null ? node.removeAttribute(name) : node.setAttribute(name, value)
  }

  // access className property while respecting SVGAnimatedString
  function className(node, value){
    var klass = node.className,
        svg   = klass && klass.baseVal !== undefined

    if (value === undefined) return svg ? klass.baseVal : klass
    svg ? (klass.baseVal = value) : (node.className = value)
  }

  // "true"  => true
  // "false" => false
  // "null"  => null
  // "42"    => 42
  // "42.5"  => 42.5
  // "08"    => "08"
  // JSON    => parse if valid
  // String  => self
  function deserializeValue(value) {
    var num
    try {
      return value ?
        value == "true" ||
        ( value == "false" ? false :
          value == "null" ? null :
          !/^0/.test(value) && !isNaN(num = Number(value)) ? num :
          /^[\[\{]/.test(value) ? $.parseJSON(value) :
          value )
        : value
    } catch(e) {
      return value
    }
  }

  $.type = type
  $.isFunction = isFunction
  $.isWindow = isWindow
  $.isArray = isArray
  $.isPlainObject = isPlainObject

  $.isEmptyObject = function(obj) {
    var name
    for (name in obj) return false
    return true
  }

  $.inArray = function(elem, array, i){
    return emptyArray.indexOf.call(array, elem, i)
  }

  $.camelCase = camelize
  $.trim = function(str) {
    return str == null ? "" : String.prototype.trim.call(str)
  }

  // plugin compatibility
  $.uuid = 0
  $.support = { }
  $.expr = { }

  $.map = function(elements, callback){
    var value, values = [], i, key
    if (likeArray(elements))
      for (i = 0; i < elements.length; i++) {
        value = callback(elements[i], i)
        if (value != null) values.push(value)
      }
    else
      for (key in elements) {
        value = callback(elements[key], key)
        if (value != null) values.push(value)
      }
    return flatten(values)
  }

  $.each = function(elements, callback){
    var i, key
    if (likeArray(elements)) {
      for (i = 0; i < elements.length; i++)
        if (callback.call(elements[i], i, elements[i]) === false) return elements
    } else {
      for (key in elements)
        if (callback.call(elements[key], key, elements[key]) === false) return elements
    }

    return elements
  }

  $.grep = function(elements, callback){
    return filter.call(elements, callback)
  }

  if (window.JSON) $.parseJSON = JSON.parse

  // Populate the class2type map
  $.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
    class2type[ "[object " + name + "]" ] = name.toLowerCase()
  })

  // Define methods that will be available on all
  // Zepto collections
  $.fn = {
    // Because a collection acts like an array
    // copy over these useful array functions.
    forEach: emptyArray.forEach,
    reduce: emptyArray.reduce,
    push: emptyArray.push,
    sort: emptyArray.sort,
    indexOf: emptyArray.indexOf,
    concat: emptyArray.concat,

    // `map` and `slice` in the jQuery API work differently
    // from their array counterparts
    map: function(fn){
      return $($.map(this, function(el, i){ return fn.call(el, i, el) }))
    },
    slice: function(){
      return $(slice.apply(this, arguments))
    },

    ready: function(callback){
      // need to check if document.body exists for IE as that browser reports
      // document ready when it hasn't yet created the body element
      if (readyRE.test(document.readyState) && document.body) callback($)
      else document.addEventListener('DOMContentLoaded', function(){ callback($) }, false)
      return this
    },
    get: function(idx){
      return idx === undefined ? slice.call(this) : this[idx >= 0 ? idx : idx + this.length]
    },
    toArray: function(){ return this.get() },
    size: function(){
      return this.length
    },
    remove: function(){
      return this.each(function(){
        if (this.parentNode != null)
          this.parentNode.removeChild(this)
      })
    },
    each: function(callback){
      emptyArray.every.call(this, function(el, idx){
        return callback.call(el, idx, el) !== false
      })
      return this
    },
    filter: function(selector){
      if (isFunction(selector)) return this.not(this.not(selector))
      return $(filter.call(this, function(element){
        return zepto.matches(element, selector)
      }))
    },
    add: function(selector,context){
      return $(uniq(this.concat($(selector,context))))
    },
    is: function(selector){
      return this.length > 0 && zepto.matches(this[0], selector)
    },
    not: function(selector){
      var nodes=[]
      if (isFunction(selector) && selector.call !== undefined)
        this.each(function(idx){
          if (!selector.call(this,idx)) nodes.push(this)
        })
      else {
        var excludes = typeof selector == 'string' ? this.filter(selector) :
          (likeArray(selector) && isFunction(selector.item)) ? slice.call(selector) : $(selector)
        this.forEach(function(el){
          if (excludes.indexOf(el) < 0) nodes.push(el)
        })
      }
      return $(nodes)
    },
    has: function(selector){
      return this.filter(function(){
        return isObject(selector) ?
          $.contains(this, selector) :
          $(this).find(selector).size()
      })
    },
    eq: function(idx){
      return idx === -1 ? this.slice(idx) : this.slice(idx, + idx + 1)
    },
    first: function(){
      var el = this[0]
      return el && !isObject(el) ? el : $(el)
    },
    last: function(){
      var el = this[this.length - 1]
      return el && !isObject(el) ? el : $(el)
    },
    find: function(selector){
      var result, $this = this
      if (!selector) result = []
      else if (typeof selector == 'object')
        result = $(selector).filter(function(){
          var node = this
          return emptyArray.some.call($this, function(parent){
            return $.contains(parent, node)
          })
        })
      else if (this.length == 1) result = $(zepto.qsa(this[0], selector))
      else result = this.map(function(){ return zepto.qsa(this, selector) })
      return result
    },
    closest: function(selector, context){
      var node = this[0], collection = false
      if (typeof selector == 'object') collection = $(selector)
      while (node && !(collection ? collection.indexOf(node) >= 0 : zepto.matches(node, selector)))
        node = node !== context && !isDocument(node) && node.parentNode
      return $(node)
    },
    parents: function(selector){
      var ancestors = [], nodes = this
      while (nodes.length > 0)
        nodes = $.map(nodes, function(node){
          if ((node = node.parentNode) && !isDocument(node) && ancestors.indexOf(node) < 0) {
            ancestors.push(node)
            return node
          }
        })
      return filtered(ancestors, selector)
    },
    parent: function(selector){
      return filtered(uniq(this.pluck('parentNode')), selector)
    },
    children: function(selector){
      return filtered(this.map(function(){ return children(this) }), selector)
    },
    contents: function() {
      return this.map(function() { return slice.call(this.childNodes) })
    },
    siblings: function(selector){
      return filtered(this.map(function(i, el){
        return filter.call(children(el.parentNode), function(child){ return child!==el })
      }), selector)
    },
    empty: function(){
      return this.each(function(){ this.innerHTML = '' })
    },
    // `pluck` is borrowed from Prototype.js
    pluck: function(property){
      return $.map(this, function(el){ return el[property] })
    },
    show: function(){
      return this.each(function(){
        this.style.display == "none" && (this.style.display = '')
        if (getComputedStyle(this, '').getPropertyValue("display") == "none")
          this.style.display = defaultDisplay(this.nodeName)
      })
    },
    replaceWith: function(newContent){
      return this.before(newContent).remove()
    },
    wrap: function(structure){
      var func = isFunction(structure)
      if (this[0] && !func)
        var dom   = $(structure).get(0),
            clone = dom.parentNode || this.length > 1

      return this.each(function(index){
        $(this).wrapAll(
          func ? structure.call(this, index) :
            clone ? dom.cloneNode(true) : dom
        )
      })
    },
    wrapAll: function(structure){
      if (this[0]) {
        $(this[0]).before(structure = $(structure))
        var children
        // drill down to the inmost element
        while ((children = structure.children()).length) structure = children.first()
        $(structure).append(this)
      }
      return this
    },
    wrapInner: function(structure){
      var func = isFunction(structure)
      return this.each(function(index){
        var self = $(this), contents = self.contents(),
            dom  = func ? structure.call(this, index) : structure
        contents.length ? contents.wrapAll(dom) : self.append(dom)
      })
    },
    unwrap: function(){
      this.parent().each(function(){
        $(this).replaceWith($(this).children())
      })
      return this
    },
    clone: function(){
      return this.map(function(){ return this.cloneNode(true) })
    },
    hide: function(){
      return this.css("display", "none")
    },
    toggle: function(setting){
      return this.each(function(){
        var el = $(this)
        ;(setting === undefined ? el.css("display") == "none" : setting) ? el.show() : el.hide()
      })
    },
    prev: function(selector){ return $(this.pluck('previousElementSibling')).filter(selector || '*') },
    next: function(selector){ return $(this.pluck('nextElementSibling')).filter(selector || '*') },
    html: function(html){
      return 0 in arguments ?
        this.each(function(idx){
          var originHtml = this.innerHTML
          $(this).empty().append( funcArg(this, html, idx, originHtml) )
        }) :
        (0 in this ? this[0].innerHTML : null)
    },
    text: function(text){
      return 0 in arguments ?
        this.each(function(idx){
          var newText = funcArg(this, text, idx, this.textContent)
          this.textContent = newText == null ? '' : ''+newText
        }) :
        (0 in this ? this[0].textContent : null)
    },
    attr: function(name, value){
      var result
      return (typeof name == 'string' && !(1 in arguments)) ?
        (!this.length || this[0].nodeType !== 1 ? undefined :
          (!(result = this[0].getAttribute(name)) && name in this[0]) ? this[0][name] : result
        ) :
        this.each(function(idx){
          if (this.nodeType !== 1) return
          if (isObject(name)) for (key in name) setAttribute(this, key, name[key])
          else setAttribute(this, name, funcArg(this, value, idx, this.getAttribute(name)))
        })
    },
    removeAttr: function(name){
      return this.each(function(){ this.nodeType === 1 && setAttribute(this, name) })
    },
    prop: function(name, value){
      name = propMap[name] || name
      return (1 in arguments) ?
        this.each(function(idx){
          this[name] = funcArg(this, value, idx, this[name])
        }) :
        (this[0] && this[0][name])
    },
    data: function(name, value){
      var attrName = 'data-' + name.replace(capitalRE, '-$1').toLowerCase()

      var data = (1 in arguments) ?
        this.attr(attrName, value) :
        this.attr(attrName)

      return data !== null ? deserializeValue(data) : undefined
    },
    val: function(value){
      return 0 in arguments ?
        this.each(function(idx){
          this.value = funcArg(this, value, idx, this.value)
        }) :
        (this[0] && (this[0].multiple ?
           $(this[0]).find('option').filter(function(){ return this.selected }).pluck('value') :
           this[0].value)
        )
    },
    offset: function(coordinates){
      if (coordinates) return this.each(function(index){
        var $this = $(this),
            coords = funcArg(this, coordinates, index, $this.offset()),
            parentOffset = $this.offsetParent().offset(),
            props = {
              top:  coords.top  - parentOffset.top,
              left: coords.left - parentOffset.left
            }

        if ($this.css('position') == 'static') props['position'] = 'relative'
        $this.css(props)
      })
      if (!this.length) return null
      var obj = this[0].getBoundingClientRect()
      return {
        left: obj.left + window.pageXOffset,
        top: obj.top + window.pageYOffset,
        width: Math.round(obj.width),
        height: Math.round(obj.height)
      }
    },
    css: function(property, value){
      if (arguments.length < 2) {
        var element = this[0], computedStyle = getComputedStyle(element, '')
        if(!element) return
        if (typeof property == 'string')
          return element.style[camelize(property)] || computedStyle.getPropertyValue(property)
        else if (isArray(property)) {
          var props = {}
          $.each(isArray(property) ? property: [property], function(_, prop){
            props[prop] = (element.style[camelize(prop)] || computedStyle.getPropertyValue(prop))
          })
          return props
        }
      }

      var css = ''
      if (type(property) == 'string') {
        if (!value && value !== 0)
          this.each(function(){ this.style.removeProperty(dasherize(property)) })
        else
          css = dasherize(property) + ":" + maybeAddPx(property, value)
      } else {
        for (key in property)
          if (!property[key] && property[key] !== 0)
            this.each(function(){ this.style.removeProperty(dasherize(key)) })
          else
            css += dasherize(key) + ':' + maybeAddPx(key, property[key]) + ';'
      }

      return this.each(function(){ this.style.cssText += ';' + css })
    },
    index: function(element){
      return element ? this.indexOf($(element)[0]) : this.parent().children().indexOf(this[0])
    },
    hasClass: function(name){
      if (!name) return false
      return emptyArray.some.call(this, function(el){
        return this.test(className(el))
      }, classRE(name))
    },
    addClass: function(name){
      if (!name) return this
      return this.each(function(idx){
        classList = []
        var cls = className(this), newName = funcArg(this, name, idx, cls)
        newName.split(/\s+/g).forEach(function(klass){
          if (!$(this).hasClass(klass)) classList.push(klass)
        }, this)
        classList.length && className(this, cls + (cls ? " " : "") + classList.join(" "))
      })
    },
    removeClass: function(name){
      return this.each(function(idx){
        if (name === undefined) return className(this, '')
        classList = className(this)
        funcArg(this, name, idx, classList).split(/\s+/g).forEach(function(klass){
          classList = classList.replace(classRE(klass), " ")
        })
        className(this, classList.trim())
      })
    },
    toggleClass: function(name, when){
      if (!name) return this
      return this.each(function(idx){
        var $this = $(this), names = funcArg(this, name, idx, className(this))
        names.split(/\s+/g).forEach(function(klass){
          (when === undefined ? !$this.hasClass(klass) : when) ?
            $this.addClass(klass) : $this.removeClass(klass)
        })
      })
    },
    scrollTop: function(value){
      if (!this.length) return
      var hasScrollTop = 'scrollTop' in this[0]
      if (value === undefined) return hasScrollTop ? this[0].scrollTop : this[0].pageYOffset
      return this.each(hasScrollTop ?
        function(){ this.scrollTop = value } :
        function(){ this.scrollTo(this.scrollX, value) })
    },
    scrollLeft: function(value){
      if (!this.length) return
      var hasScrollLeft = 'scrollLeft' in this[0]
      if (value === undefined) return hasScrollLeft ? this[0].scrollLeft : this[0].pageXOffset
      return this.each(hasScrollLeft ?
        function(){ this.scrollLeft = value } :
        function(){ this.scrollTo(value, this.scrollY) })
    },
    position: function() {
      if (!this.length) return

      var elem = this[0],
        // Get *real* offsetParent
        offsetParent = this.offsetParent(),
        // Get correct offsets
        offset       = this.offset(),
        parentOffset = rootNodeRE.test(offsetParent[0].nodeName) ? { top: 0, left: 0 } : offsetParent.offset()

      // Subtract element margins
      // note: when an element has margin: auto the offsetLeft and marginLeft
      // are the same in Safari causing offset.left to incorrectly be 0
      offset.top  -= parseFloat( $(elem).css('margin-top') ) || 0
      offset.left -= parseFloat( $(elem).css('margin-left') ) || 0

      // Add offsetParent borders
      parentOffset.top  += parseFloat( $(offsetParent[0]).css('border-top-width') ) || 0
      parentOffset.left += parseFloat( $(offsetParent[0]).css('border-left-width') ) || 0

      // Subtract the two offsets
      return {
        top:  offset.top  - parentOffset.top,
        left: offset.left - parentOffset.left
      }
    },
    offsetParent: function() {
      return this.map(function(){
        var parent = this.offsetParent || document.body
        while (parent && !rootNodeRE.test(parent.nodeName) && $(parent).css("position") == "static")
          parent = parent.offsetParent
        return parent
      })
    }
  }

  // for now
  $.fn.detach = $.fn.remove

  // Generate the `width` and `height` functions
  ;['width', 'height'].forEach(function(dimension){
    var dimensionProperty =
      dimension.replace(/./, function(m){ return m[0].toUpperCase() })

    $.fn[dimension] = function(value){
      var offset, el = this[0]
      if (value === undefined) return isWindow(el) ? el['inner' + dimensionProperty] :
        isDocument(el) ? el.documentElement['scroll' + dimensionProperty] :
        (offset = this.offset()) && offset[dimension]
      else return this.each(function(idx){
        el = $(this)
        el.css(dimension, funcArg(this, value, idx, el[dimension]()))
      })
    }
  })

  function traverseNode(node, fun) {
    fun(node)
    for (var i = 0, len = node.childNodes.length; i < len; i++)
      traverseNode(node.childNodes[i], fun)
  }

  // Generate the `after`, `prepend`, `before`, `append`,
  // `insertAfter`, `insertBefore`, `appendTo`, and `prependTo` methods.
  adjacencyOperators.forEach(function(operator, operatorIndex) {
    var inside = operatorIndex % 2 //=> prepend, append

    $.fn[operator] = function(){
      // arguments can be nodes, arrays of nodes, Zepto objects and HTML strings
      var argType, nodes = $.map(arguments, function(arg) {
            argType = type(arg)
            return argType == "object" || argType == "array" || arg == null ?
              arg : zepto.fragment(arg)
          }),
          parent, copyByClone = this.length > 1
      if (nodes.length < 1) return this

      return this.each(function(_, target){
        parent = inside ? target : target.parentNode

        // convert all methods to a "before" operation
        target = operatorIndex == 0 ? target.nextSibling :
                 operatorIndex == 1 ? target.firstChild :
                 operatorIndex == 2 ? target :
                 null

        var parentInDocument = $.contains(document.documentElement, parent)

        nodes.forEach(function(node){
          if (copyByClone) node = node.cloneNode(true)
          else if (!parent) return $(node).remove()

          parent.insertBefore(node, target)
          if (parentInDocument) traverseNode(node, function(el){
            if (el.nodeName != null && el.nodeName.toUpperCase() === 'SCRIPT' &&
               (!el.type || el.type === 'text/javascript') && !el.src)
              window['eval'].call(window, el.innerHTML)
          })
        })
      })
    }

    // after    => insertAfter
    // prepend  => prependTo
    // before   => insertBefore
    // append   => appendTo
    $.fn[inside ? operator+'To' : 'insert'+(operatorIndex ? 'Before' : 'After')] = function(html){
      $(html)[operator](this)
      return this
    }
  })

  zepto.Z.prototype = $.fn

  // Export internal API functions in the `$.zepto` namespace
  zepto.uniq = uniq
  zepto.deserializeValue = deserializeValue
  $.zepto = zepto

  return $
})()

module.exports = Zepto

;(function($){
  var _zid = 1, undefined,
      slice = Array.prototype.slice,
      isFunction = $.isFunction,
      isString = function(obj){ return typeof obj == 'string' },
      handlers = {},
      specialEvents={},
      focusinSupported = 'onfocusin' in window,
      focus = { focus: 'focusin', blur: 'focusout' },
      hover = { mouseenter: 'mouseover', mouseleave: 'mouseout' }

  specialEvents.click = specialEvents.mousedown = specialEvents.mouseup = specialEvents.mousemove = 'MouseEvents'

  function zid(element) {
    return element._zid || (element._zid = _zid++)
  }
  function findHandlers(element, event, fn, selector) {
    event = parse(event)
    if (event.ns) var matcher = matcherFor(event.ns)
    return (handlers[zid(element)] || []).filter(function(handler) {
      return handler
        && (!event.e  || handler.e == event.e)
        && (!event.ns || matcher.test(handler.ns))
        && (!fn       || zid(handler.fn) === zid(fn))
        && (!selector || handler.sel == selector)
    })
  }
  function parse(event) {
    var parts = ('' + event).split('.')
    return {e: parts[0], ns: parts.slice(1).sort().join(' ')}
  }
  function matcherFor(ns) {
    return new RegExp('(?:^| )' + ns.replace(' ', ' .* ?') + '(?: |$)')
  }

  function eventCapture(handler, captureSetting) {
    return handler.del &&
      (!focusinSupported && (handler.e in focus)) ||
      !!captureSetting
  }

  function realEvent(type) {
    return hover[type] || (focusinSupported && focus[type]) || type
  }

  function add(element, events, fn, data, selector, delegator, capture){
    var id = zid(element), set = (handlers[id] || (handlers[id] = []))
    events.split(/\s/).forEach(function(event){
      if (event == 'ready') return $(document).ready(fn)
      var handler   = parse(event)
      handler.fn    = fn
      handler.sel   = selector
      // emulate mouseenter, mouseleave
      if (handler.e in hover) fn = function(e){
        var related = e.relatedTarget
        if (!related || (related !== this && !$.contains(this, related)))
          return handler.fn.apply(this, arguments)
      }
      handler.del   = delegator
      var callback  = delegator || fn
      handler.proxy = function(e){
        e = compatible(e)
        if (e.isImmediatePropagationStopped()) return
        e.data = data
        var result = callback.apply(element, e._args == undefined ? [e] : [e].concat(e._args))
        if (result === false) e.preventDefault(), e.stopPropagation()
        return result
      }
      handler.i = set.length
      set.push(handler)
      if ('addEventListener' in element)
        element.addEventListener(realEvent(handler.e), handler.proxy, eventCapture(handler, capture))
    })
  }
  function remove(element, events, fn, selector, capture){
    var id = zid(element)
    ;(events || '').split(/\s/).forEach(function(event){
      findHandlers(element, event, fn, selector).forEach(function(handler){
        delete handlers[id][handler.i]
      if ('removeEventListener' in element)
        element.removeEventListener(realEvent(handler.e), handler.proxy, eventCapture(handler, capture))
      })
    })
  }

  $.event = { add: add, remove: remove }

  $.proxy = function(fn, context) {
    var args = (2 in arguments) && slice.call(arguments, 2)
    if (isFunction(fn)) {
      var proxyFn = function(){ return fn.apply(context, args ? args.concat(slice.call(arguments)) : arguments) }
      proxyFn._zid = zid(fn)
      return proxyFn
    } else if (isString(context)) {
      if (args) {
        args.unshift(fn[context], fn)
        return $.proxy.apply(null, args)
      } else {
        return $.proxy(fn[context], fn)
      }
    } else {
      throw new TypeError("expected function")
    }
  }

  $.fn.bind = function(event, data, callback){
    return this.on(event, data, callback)
  }
  $.fn.unbind = function(event, callback){
    return this.off(event, callback)
  }
  $.fn.one = function(event, selector, data, callback){
    return this.on(event, selector, data, callback, 1)
  }

  var returnTrue = function(){return true},
      returnFalse = function(){return false},
      ignoreProperties = /^([A-Z]|returnValue$|layer[XY]$)/,
      eventMethods = {
        preventDefault: 'isDefaultPrevented',
        stopImmediatePropagation: 'isImmediatePropagationStopped',
        stopPropagation: 'isPropagationStopped'
      }

  function compatible(event, source) {
    if (source || !event.isDefaultPrevented) {
      source || (source = event)

      $.each(eventMethods, function(name, predicate) {
        var sourceMethod = source[name]
        event[name] = function(){
          this[predicate] = returnTrue
          return sourceMethod && sourceMethod.apply(source, arguments)
        }
        event[predicate] = returnFalse
      })

      if (source.defaultPrevented !== undefined ? source.defaultPrevented :
          'returnValue' in source ? source.returnValue === false :
          source.getPreventDefault && source.getPreventDefault())
        event.isDefaultPrevented = returnTrue
    }
    return event
  }

  function createProxy(event) {
    var key, proxy = { originalEvent: event }
    for (key in event)
      if (!ignoreProperties.test(key) && event[key] !== undefined) proxy[key] = event[key]

    return compatible(proxy, event)
  }

  $.fn.delegate = function(selector, event, callback){
    return this.on(event, selector, callback)
  }
  $.fn.undelegate = function(selector, event, callback){
    return this.off(event, selector, callback)
  }

  $.fn.live = function(event, callback){
    $(document.body).delegate(this.selector, event, callback)
    return this
  }
  $.fn.die = function(event, callback){
    $(document.body).undelegate(this.selector, event, callback)
    return this
  }

  $.fn.on = function(event, selector, data, callback, one){
    var autoRemove, delegator, $this = this
    if (event && !isString(event)) {
      $.each(event, function(type, fn){
        $this.on(type, selector, data, fn, one)
      })
      return $this
    }

    if (!isString(selector) && !isFunction(callback) && callback !== false)
      callback = data, data = selector, selector = undefined
    if (isFunction(data) || data === false)
      callback = data, data = undefined

    if (callback === false) callback = returnFalse

    return $this.each(function(_, element){
      if (one) autoRemove = function(e){
        remove(element, e.type, callback)
        return callback.apply(this, arguments)
      }

      if (selector) delegator = function(e){
        var evt, match = $(e.target).closest(selector, element).get(0)
        if (match && match !== element) {
          evt = $.extend(createProxy(e), {currentTarget: match, liveFired: element})
          return (autoRemove || callback).apply(match, [evt].concat(slice.call(arguments, 1)))
        }
      }

      add(element, event, callback, data, selector, delegator || autoRemove)
    })
  }
  $.fn.off = function(event, selector, callback){
    var $this = this
    if (event && !isString(event)) {
      $.each(event, function(type, fn){
        $this.off(type, selector, fn)
      })
      return $this
    }

    if (!isString(selector) && !isFunction(callback) && callback !== false)
      callback = selector, selector = undefined

    if (callback === false) callback = returnFalse

    return $this.each(function(){
      remove(this, event, callback, selector)
    })
  }

  $.fn.trigger = function(event, args){
    event = (isString(event) || $.isPlainObject(event)) ? $.Event(event) : compatible(event)
    event._args = args
    return this.each(function(){
      // items in the collection might not be DOM elements
      if('dispatchEvent' in this) this.dispatchEvent(event)
      else $(this).triggerHandler(event, args)
    })
  }

  // triggers event handlers on current element just as if an event occurred,
  // doesn't trigger an actual event, doesn't bubble
  $.fn.triggerHandler = function(event, args){
    var e, result
    this.each(function(i, element){
      e = createProxy(isString(event) ? $.Event(event) : event)
      e._args = args
      e.target = element
      $.each(findHandlers(element, event.type || event), function(i, handler){
        result = handler.proxy(e)
        if (e.isImmediatePropagationStopped()) return false
      })
    })
    return result
  }

  // shortcut methods for `.bind(event, fn)` for each event type
  ;('focusin focusout load resize scroll unload click dblclick '+
  'mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave '+
  'change select keydown keypress keyup error').split(' ').forEach(function(event) {
    $.fn[event] = function(callback) {
      return callback ?
        this.bind(event, callback) :
        this.trigger(event)
    }
  })

  ;['focus', 'blur'].forEach(function(name) {
    $.fn[name] = function(callback) {
      if (callback) this.bind(name, callback)
      else this.each(function(){
        try { this[name]() }
        catch(e) {}
      })
      return this
    }
  })

  $.Event = function(type, props) {
    if (!isString(type)) props = type, type = props.type
    var event = document.createEvent(specialEvents[type] || 'Events'), bubbles = true
    if (props) for (var name in props) (name == 'bubbles') ? (bubbles = !!props[name]) : (event[name] = props[name])
    event.initEvent(type, bubbles, true)
    return compatible(event)
  }

})(Zepto)

;(function($){
  var jsonpID = 0,
      document = window.document,
      key,
      name,
      rscript = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
      scriptTypeRE = /^(?:text|application)\/javascript/i,
      xmlTypeRE = /^(?:text|application)\/xml/i,
      jsonType = 'application/json',
      htmlType = 'text/html',
      blankRE = /^\s*$/

  // trigger a custom event and return false if it was cancelled
  function triggerAndReturn(context, eventName, data) {
    var event = $.Event(eventName)
    $(context).trigger(event, data)
    return !event.isDefaultPrevented()
  }

  // trigger an Ajax "global" event
  function triggerGlobal(settings, context, eventName, data) {
    if (settings.global) return triggerAndReturn(context || document, eventName, data)
  }

  // Number of active Ajax requests
  $.active = 0

  function ajaxStart(settings) {
    if (settings.global && $.active++ === 0) triggerGlobal(settings, null, 'ajaxStart')
  }
  function ajaxStop(settings) {
    if (settings.global && !(--$.active)) triggerGlobal(settings, null, 'ajaxStop')
  }

  // triggers an extra global event "ajaxBeforeSend" that's like "ajaxSend" but cancelable
  function ajaxBeforeSend(xhr, settings) {
    var context = settings.context
    if (settings.beforeSend.call(context, xhr, settings) === false ||
        triggerGlobal(settings, context, 'ajaxBeforeSend', [xhr, settings]) === false)
      return false

    triggerGlobal(settings, context, 'ajaxSend', [xhr, settings])
  }
  function ajaxSuccess(data, xhr, settings, deferred) {
    var context = settings.context, status = 'success'
    settings.success.call(context, data, status, xhr)
    if (deferred) deferred.resolveWith(context, [data, status, xhr])
    triggerGlobal(settings, context, 'ajaxSuccess', [xhr, settings, data])
    ajaxComplete(status, xhr, settings)
  }
  // type: "timeout", "error", "abort", "parsererror"
  function ajaxError(error, type, xhr, settings, deferred) {
    var context = settings.context
    settings.error.call(context, xhr, type, error)
    if (deferred) deferred.rejectWith(context, [xhr, type, error])
    triggerGlobal(settings, context, 'ajaxError', [xhr, settings, error || type])
    ajaxComplete(type, xhr, settings)
  }
  // status: "success", "notmodified", "error", "timeout", "abort", "parsererror"
  function ajaxComplete(status, xhr, settings) {
    var context = settings.context
    settings.complete.call(context, xhr, status)
    triggerGlobal(settings, context, 'ajaxComplete', [xhr, settings])
    ajaxStop(settings)
  }

  // Empty function, used as default callback
  function empty() {}

  $.ajaxJSONP = function(options, deferred){
    if (!('type' in options)) return $.ajax(options)

    var _callbackName = options.jsonpCallback,
      callbackName = ($.isFunction(_callbackName) ?
        _callbackName() : _callbackName) || ('jsonp' + (++jsonpID)),
      script = document.createElement('script'),
      originalCallback = window[callbackName],
      responseData,
      abort = function(errorType) {
        $(script).triggerHandler('error', errorType || 'abort')
      },
      xhr = { abort: abort }, abortTimeout

    if (deferred) deferred.promise(xhr)

    $(script).on('load error', function(e, errorType){
      clearTimeout(abortTimeout)
      $(script).off().remove()

      if (e.type == 'error' || !responseData) {
        ajaxError(null, errorType || 'error', xhr, options, deferred)
      } else {
        ajaxSuccess(responseData[0], xhr, options, deferred)
      }

      window[callbackName] = originalCallback
      if (responseData && $.isFunction(originalCallback))
        originalCallback(responseData[0])

      originalCallback = responseData = undefined
    })

    if (ajaxBeforeSend(xhr, options) === false) {
      abort('abort')
      return xhr
    }

    window[callbackName] = function(){
      responseData = arguments
    }

    script.src = options.url.replace(/\?(.+)=\?/, '?$1=' + callbackName)
    document.head.appendChild(script)

    if (options.timeout > 0) abortTimeout = setTimeout(function(){
      abort('timeout')
    }, options.timeout)

    return xhr
  }

  $.ajaxSettings = {
    // Default type of request
    type: 'GET',
    // Callback that is executed before request
    beforeSend: empty,
    // Callback that is executed if the request succeeds
    success: empty,
    // Callback that is executed the the server drops error
    error: empty,
    // Callback that is executed on request complete (both: error and success)
    complete: empty,
    // The context for the callbacks
    context: null,
    // Whether to trigger "global" Ajax events
    global: true,
    // Transport
    xhr: function () {
      return new window.XMLHttpRequest()
    },
    // MIME types mapping
    // IIS returns Javascript as "application/x-javascript"
    accepts: {
      script: 'text/javascript, application/javascript, application/x-javascript',
      json:   jsonType,
      xml:    'application/xml, text/xml',
      html:   htmlType,
      text:   'text/plain'
    },
    // Whether the request is to another domain
    crossDomain: false,
    // Default timeout
    timeout: 0,
    // Whether data should be serialized to string
    processData: true,
    // Whether the browser should be allowed to cache GET responses
    cache: true
  }

  function mimeToDataType(mime) {
    if (mime) mime = mime.split(';', 2)[0]
    return mime && ( mime == htmlType ? 'html' :
      mime == jsonType ? 'json' :
      scriptTypeRE.test(mime) ? 'script' :
      xmlTypeRE.test(mime) && 'xml' ) || 'text'
  }

  function appendQuery(url, query) {
    if (query == '') return url
    return (url + '&' + query).replace(/[&?]{1,2}/, '?')
  }

  // serialize payload and append it to the URL for GET requests
  function serializeData(options) {
    if (options.processData && options.data && $.type(options.data) != "string")
      options.data = $.param(options.data, options.traditional)
    if (options.data && (!options.type || options.type.toUpperCase() == 'GET'))
      options.url = appendQuery(options.url, options.data), options.data = undefined
  }

  $.ajax = function(options){
    var settings = $.extend({}, options || {}),
        deferred = $.Deferred && $.Deferred()
    for (key in $.ajaxSettings) if (settings[key] === undefined) settings[key] = $.ajaxSettings[key]

    ajaxStart(settings)

    if (!settings.crossDomain) settings.crossDomain = /^([\w-]+:)?\/\/([^\/]+)/.test(settings.url) &&
      RegExp.$2 != window.location.host

    if (!settings.url) settings.url = window.location.toString()
    serializeData(settings)

    var dataType = settings.dataType, hasPlaceholder = /\?.+=\?/.test(settings.url)
    if (hasPlaceholder) dataType = 'jsonp'

    if (settings.cache === false || (
         (!options || options.cache !== true) &&
         ('script' == dataType || 'jsonp' == dataType)
        ))
      settings.url = appendQuery(settings.url, '_=' + Date.now())

    if ('jsonp' == dataType) {
      if (!hasPlaceholder)
        settings.url = appendQuery(settings.url,
          settings.jsonp ? (settings.jsonp + '=?') : settings.jsonp === false ? '' : 'callback=?')
      return $.ajaxJSONP(settings, deferred)
    }

    var mime = settings.accepts[dataType],
        headers = { },
        setHeader = function(name, value) { headers[name.toLowerCase()] = [name, value] },
        protocol = /^([\w-]+:)\/\//.test(settings.url) ? RegExp.$1 : window.location.protocol,
        xhr = settings.xhr(),
        nativeSetHeader = xhr.setRequestHeader,
        abortTimeout

    if (deferred) deferred.promise(xhr)

    if (!settings.crossDomain) setHeader('X-Requested-With', 'XMLHttpRequest')
    setHeader('Accept', mime || '*/*')
    if (mime = settings.mimeType || mime) {
      if (mime.indexOf(',') > -1) mime = mime.split(',', 2)[0]
      xhr.overrideMimeType && xhr.overrideMimeType(mime)
    }
    if (settings.contentType || (settings.contentType !== false && settings.data && settings.type.toUpperCase() != 'GET'))
      setHeader('Content-Type', settings.contentType || 'application/x-www-form-urlencoded')

    if (settings.headers) for (name in settings.headers) setHeader(name, settings.headers[name])
    xhr.setRequestHeader = setHeader

    xhr.onreadystatechange = function(){
      if (xhr.readyState == 4) {
        xhr.onreadystatechange = empty
        clearTimeout(abortTimeout)
        var result, error = false
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304 || (xhr.status == 0 && protocol == 'file:')) {
          dataType = dataType || mimeToDataType(settings.mimeType || xhr.getResponseHeader('content-type'))
          result = xhr.responseText

          try {
            // http://perfectionkills.com/global-eval-what-are-the-options/
            if (dataType == 'script')    (1,eval)(result)
            else if (dataType == 'xml')  result = xhr.responseXML
            else if (dataType == 'json') result = blankRE.test(result) ? null : $.parseJSON(result)
          } catch (e) { error = e }

          if (error) ajaxError(error, 'parsererror', xhr, settings, deferred)
          else ajaxSuccess(result, xhr, settings, deferred)
        } else {
          ajaxError(xhr.statusText || null, xhr.status ? 'error' : 'abort', xhr, settings, deferred)
        }
      }
    }

    if (ajaxBeforeSend(xhr, settings) === false) {
      xhr.abort()
      ajaxError(null, 'abort', xhr, settings, deferred)
      return xhr
    }

    if (settings.xhrFields) for (name in settings.xhrFields) xhr[name] = settings.xhrFields[name]

    var async = 'async' in settings ? settings.async : true
    xhr.open(settings.type, settings.url, async, settings.username, settings.password)

    for (name in headers) nativeSetHeader.apply(xhr, headers[name])

    if (settings.timeout > 0) abortTimeout = setTimeout(function(){
        xhr.onreadystatechange = empty
        xhr.abort()
        ajaxError(null, 'timeout', xhr, settings, deferred)
      }, settings.timeout)

    // avoid sending empty string (#319)
    xhr.send(settings.data ? settings.data : null)
    return xhr
  }

  // handle optional data/success arguments
  function parseArguments(url, data, success, dataType) {
    if ($.isFunction(data)) dataType = success, success = data, data = undefined
    if (!$.isFunction(success)) dataType = success, success = undefined
    return {
      url: url
    , data: data
    , success: success
    , dataType: dataType
    }
  }

  $.get = function(/* url, data, success, dataType */){
    return $.ajax(parseArguments.apply(null, arguments))
  }

  $.post = function(/* url, data, success, dataType */){
    var options = parseArguments.apply(null, arguments)
    options.type = 'POST'
    return $.ajax(options)
  }

  $.getJSON = function(/* url, data, success */){
    var options = parseArguments.apply(null, arguments)
    options.dataType = 'json'
    return $.ajax(options)
  }

  $.fn.load = function(url, data, success){
    if (!this.length) return this
    var self = this, parts = url.split(/\s/), selector,
        options = parseArguments(url, data, success),
        callback = options.success
    if (parts.length > 1) options.url = parts[0], selector = parts[1]
    options.success = function(response){
      self.html(selector ?
        $('<div>').html(response.replace(rscript, "")).find(selector)
        : response)
      callback && callback.apply(self, arguments)
    }
    $.ajax(options)
    return this
  }

  var escape = encodeURIComponent

  function serialize(params, obj, traditional, scope){
    var type, array = $.isArray(obj), hash = $.isPlainObject(obj)
    $.each(obj, function(key, value) {
      type = $.type(value)
      if (scope) key = traditional ? scope :
        scope + '[' + (hash || type == 'object' || type == 'array' ? key : '') + ']'
      // handle data in serializeArray() format
      if (!scope && array) params.add(value.name, value.value)
      // recurse into nested objects
      else if (type == "array" || (!traditional && type == "object"))
        serialize(params, value, traditional, key)
      else params.add(key, value)
    })
  }

  $.param = function(obj, traditional){
    var params = []
    params.add = function(k, v){ this.push(escape(k) + '=' + escape(v)) }
    serialize(params, obj, traditional)
    return params.join('&').replace(/%20/g, '+')
  }
})(Zepto)

;(function($){
  $.fn.serializeArray = function() {
    var result = [], el
    $([].slice.call(this.get(0).elements)).each(function(){
      el = $(this)
      var type = el.attr('type')
      if (this.nodeName.toLowerCase() != 'fieldset' &&
        !this.disabled && type != 'submit' && type != 'reset' && type != 'button' &&
        ((type != 'radio' && type != 'checkbox') || this.checked))
        result.push({
          name: el.attr('name'),
          value: el.val()
        })
    })
    return result
  }

  $.fn.serialize = function(){
    var result = []
    this.serializeArray().forEach(function(elm){
      result.push(encodeURIComponent(elm.name) + '=' + encodeURIComponent(elm.value))
    })
    return result.join('&')
  }

  $.fn.submit = function(callback) {
    if (callback) this.bind('submit', callback)
    else if (this.length) {
      var event = $.Event('submit')
      this.eq(0).trigger(event)
      if (!event.isDefaultPrevented()) this.get(0).submit()
    }
    return this
  }

})(Zepto)

;(function($){
  // __proto__ doesn't exist on IE<11, so redefine
  // the Z function to use object extension instead
  if (!('__proto__' in {})) {
    $.extend($.zepto, {
      Z: function(dom, selector){
        dom = dom || []
        $.extend(dom, $.fn)
        dom.selector = selector || ''
        dom.__Z = true
        return dom
      },
      // this is a kludge but works
      isZ: function(object){
        return $.type(object) === 'array' && '__Z' in object
      }
    })
  }

  // getComputedStyle shouldn't freak out when called
  // without a valid element as argument
  try {
    getComputedStyle(undefined)
  } catch(e) {
    var nativeGetComputedStyle = getComputedStyle;
    window.getComputedStyle = function(element){
      try {
        return nativeGetComputedStyle(element)
      } catch(e) {
        return null
      }
    }
  }
})(Zepto);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9tZXNzYWdlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi93ZWJ2aWV3Q2hhbm5lbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd2Vidmlldy93ZWJ2aWV3LnRzIiwid2VicGFjazovLy8uL3NyYy93ZWJ2aWV3L3plcHRvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQ0EsSUFBWSxZQUdYO0FBSEQsV0FBWSxZQUFZO0lBQ3BCLHdDQUF3QjtJQUN4QiwwQ0FBMEI7QUFDOUIsQ0FBQyxFQUhXLFlBQVksR0FBWixvQkFBWSxLQUFaLG9CQUFZLFFBR3ZCOzs7Ozs7Ozs7Ozs7Ozs7O0FDdENZLGFBQUssR0FBRyxV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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQiw0QkFBNEI7QUFDM0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZTtBQUNmLFlBQVk7O0FBRVo7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHFCQUFxQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIscUJBQXFCO0FBQ3RDO0FB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Q0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVILEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQzs7QUFFRCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsYUFBYSxlQUFlOztBQUU1Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkNBQTZDLElBQUk7QUFDakQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEIsZUFBZTtBQUM3QztBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLEVBQUU7QUFDckIsMkNBQTJDLDhDQUE4QztBQUN6RjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxZQUFZOztBQUV2QjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7O0FBRUQsQ0FBQztBQUNEO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwiZmlsZSI6IndlYnZpZXcvd2Vidmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3dlYnZpZXcvd2Vidmlldy50c1wiKTtcbiIsImV4cG9ydCBpbnRlcmZhY2UgV2ViVmlld01lc3NhZ2Uge1xuICAgIGV2ZW50OiBzdHJpbmc7XG4gICAgdmFsdWU/OiBhbnk7XG59XG5cbmV4cG9ydCB0eXBlIENoYW5uZWxIYW5kbGVyID0gKC4uLmFyZ3M6IGFueSkgPT4gUHJvbWlzZTxhbnk+O1xuXG5leHBvcnQgdHlwZSBDaGFubmVsVHlwZSA9XG4gICAgKG5hbWU6IHN0cmluZywgLi4uYXJnczogYW55KSA9PiBQcm9taXNlPGFueT47XG5cbmV4cG9ydCB0eXBlIENoYW5uZWxSZXF1ZXN0ID0ge1xuICAgIHJlcXVlc3RJZDogc3RyaW5nLFxuICAgIG5hbWU6IHN0cmluZyxcbiAgICBhcmdzOiBhbnlbXVxufTtcblxuZXhwb3J0IHR5cGUgQ2hhbm5lbFJlc3BvbnNlID0ge1xuICAgIHJlcXVlc3RJZDogc3RyaW5nLFxuICAgIGlzRXhjZXB0aW9uOiBib29sZWFuLFxuICAgIHZhbHVlOiBhbnlcbn07XG5cbmV4cG9ydCB0eXBlIE5vdGVUYXJnZXQgPSB7XG4gICAgbm90ZWJvb2tJZDogc3RyaW5nLFxuICAgIG5vdGVib29rTmFtZTogc3RyaW5nLFxuXG4gICAgbm90ZUlkOiBzdHJpbmcsXG4gICAgbm90ZU5hbWU6IHN0cmluZ1xufTtcblxuZXhwb3J0IHR5cGUgTGluZSA9IHtcbiAgICBsaW5lTnVtYmVyOiBudW1iZXIsXG4gICAgbGluZUNvbnRlbnQ6IHN0cmluZ1xufTtcblxuZXhwb3J0IGVudW0gQ2hhbm5lbEV2ZW50IHtcbiAgICByZXF1ZXN0RXZlbnQgPSBcInJlcXVlc3RcIixcbiAgICByZXNwb25zZUV2ZW50ID0gXCJyZXNwb25zZVwiXG59XG4iLCJleHBvcnQgY29uc3QgZGVsYXkgPSBmdW5jdGlvbihuYW1lc3BhY2U6IGFueSwgbmFtZTogc3RyaW5nLCB0aW1lb3V0OiBudW1iZXIsIGZ1bmM6IGFueSkge1xuICAgIGlmIChuYW1lc3BhY2VbbmFtZV0gIT0gbnVsbClcbiAgICAgICAgY2xlYXJUaW1lb3V0KG5hbWVzcGFjZVtuYW1lXSk7XG4gICAgXG4gICAgaWYgKGZ1bmMgIT0gbnVsbClcbiAgICAgICAgbmFtZXNwYWNlW25hbWVdID0gc2V0VGltZW91dChmdW5jLCB0aW1lb3V0KTtcbiAgfTtcblxuZXhwb3J0IGNvbnN0IHRpbWVvdXQgPSBmdW5jdGlvbih0aW1lcjogbnVtYmVyKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlOiBGdW5jdGlvbikgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHJlc29sdmUoKSwgdGltZXIpO1xuICAgIH0pO1xufVxuIiwiaW1wb3J0ICQgZnJvbSBcIi4uL3dlYnZpZXcvemVwdG9cIjtcblxuZGVjbGFyZSB2YXIgd2Vidmlld0FwaSA6IGFueTtcblxuaW1wb3J0IHsgXG4gICAgV2ViVmlld01lc3NhZ2UsXG4gICAgQ2hhbm5lbEV2ZW50LFxuICAgIENoYW5uZWxUeXBlLFxuICAgIENoYW5uZWxIYW5kbGVyLFxuXG4gICAgQ2hhbm5lbFJlcXVlc3QsXG4gICAgQ2hhbm5lbFJlc3BvbnNlXG59IGZyb20gXCIuL21lc3NhZ2VcIjtcblxuaW1wb3J0IHsgdGltZW91dCB9IGZyb20gXCIuL3V0aWxzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB3ZWJ2aWV3Q2hhbm5lbChoYW5kbGVyczogTWFwPHN0cmluZywgQ2hhbm5lbEhhbmRsZXI+KTogQ2hhbm5lbFR5cGUge1xuICAgIGxldCBsb2NhbCA9IHtcbiAgICAgICAgc3R1YnM6IHsgfVxuICAgIH07XG5cbiAgICB3ZWJ2aWV3QXBpLm9uTWVzc2FnZShhc3luYyAoeyBtZXNzYWdlIH0pOiBQcm9taXNlPGFueT4gPT4gIHtcbiAgICAgICAgLy8kKFwiLmVycm9yXCIpLmFwcGVuZChgPGRpdj4ke0pTT04uc3RyaW5naWZ5KG1lc3NhZ2UpfTwvZGl2PmApO1xuXG4gICAgICAgIGlmIChtZXNzYWdlLmV2ZW50ID09IENoYW5uZWxFdmVudC5yZXNwb25zZUV2ZW50KSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZTogQ2hhbm5lbFJlc3BvbnNlID0gbWVzc2FnZS52YWx1ZTtcblxuICAgICAgICAgICAgY29uc3Qgc3R1YiA9IGxvY2FsLnN0dWJzW3Jlc3BvbnNlLnJlcXVlc3RJZF07XG4gICAgICAgICAgICBpZiAoc3R1YiA9PSBudWxsKVxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmlzRXhjZXB0aW9uP1xuICAgICAgICAgICAgICAgIHN0dWIucmVqZWN0KHJlc3BvbnNlLnZhbHVlKTpcbiAgICAgICAgICAgICAgICBzdHViLnJlc29sdmUocmVzcG9uc2UudmFsdWUpO1xuICAgICAgICB9IGVsc2VcbiAgICAgICAgaWYgKG1lc3NhZ2UuZXZlbnQgPT0gQ2hhbm5lbEV2ZW50LnJlcXVlc3RFdmVudCkge1xuICAgICAgICAgICAgY29uc3QgcmVxdWVzdDogQ2hhbm5lbFJlcXVlc3QgPSBtZXNzYWdlLnZhbHVlO1xuXG4gICAgICAgICAgICBjb25zdCBoYW5kbGVyID0gaGFuZGxlcnMuZ2V0KHJlcXVlc3QubmFtZSk7XG4gICAgICAgICAgICBpZiAoaGFuZGxlciA9PSBudWxsKVxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJubyB0aGF0IGhhbmRsZXJcIikpO1xuXG4gICAgICAgICAgICByZXR1cm4gaGFuZGxlci5hcHBseShudWxsLCByZXF1ZXN0LmFyZ3MpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0cnVlKTtcbiAgICB9KTtcblxuICAgIHJldHVybiAobmFtZTogc3RyaW5nLCAuLi5hcmdzOiBhbnkpOiBQcm9taXNlPGFueT4gPT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8YW55Pihhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0SWQgPSBgJHtuYW1lfS0ke0RhdGUubm93KCl9YDtcblxuICAgICAgICAgICAgbG9jYWwuc3R1YnNbcmVxdWVzdElkXSA9IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlLCByZWplY3RcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHdlYnZpZXdBcGkucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgIGV2ZW50OiBDaGFubmVsRXZlbnQucmVxdWVzdEV2ZW50LFxuICAgICAgICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3RJZCxcbiAgICAgICAgICAgICAgICAgICAgbmFtZSwgYXJnc1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xufVxuXG5leHBvcnQgdHlwZSB7XG4gICAgQ2hhbm5lbFR5cGUsXG4gICAgQ2hhbm5lbEhhbmRsZXJcbn0iLCJpbXBvcnQgJCBmcm9tIFwiLi96ZXB0b1wiO1xuaW1wb3J0IHsgZGVsYXkgfSBmcm9tIFwiLi4vY29tbW9uL3V0aWxzXCI7XG5cbmltcG9ydCB7XG5cdHdlYnZpZXdDaGFubmVsXG59IGZyb20gXCIuLi9jb21tb24vd2Vidmlld0NoYW5uZWxcIjtcblxuaW1wb3J0IHtcblx0Q2hhbm5lbEhhbmRsZXIsXG5cdENoYW5uZWxUeXBlLCBcbiAgICBOb3RlVGFyZ2V0LCBMaW5lXG59IGZyb20gXCIuLi9jb21tb24vbWVzc2FnZVwiO1xuXG5pbXBvcnQgaHRtbEVuY29kZSBmcm9tIFwiLi9lbmNvZGVyXCI7XG5cbmRlY2xhcmUgdmFyIHdlYnZpZXdBcGkgOiBhbnk7XG5cbmNvbnN0ICRrZXl3b3JkSW5wdXQgPSAkKFwiLnNlYXJjaC1pbnB1dCBpbnB1dFtuYW1lPSdrZXl3b3JkJ11cIik7XG5jb25zdCAkcmVnZXhDaGVja2VkQm94ID0gJChcIi5zZWFyY2gtaW5wdXQgaW5wdXRbbmFtZT0naXNfcmVnZXgnXVwiKTtcblxubGV0IHNlYXJjaElkOiBzdHJpbmcgPSBudWxsO1xuXG5sZXQgY3VycmVudFNlYXJjaDogYW55ID0gbnVsbDtcbmxldCBjdXJyZW50Tm90ZTogYW55ID0gbnVsbDtcblxubGV0IGhhbmRsZXJzID0gbmV3IE1hcDxzdHJpbmcsIENoYW5uZWxIYW5kbGVyPigpO1xuXG5sZXQgY2hhbm5lbDogQ2hhbm5lbFR5cGUgPSB3ZWJ2aWV3Q2hhbm5lbChoYW5kbGVycyk7XG5cbmZ1bmN0aW9uIHNwbGl0UGFydEJ5S2V5d29yZChsaW5lOiBzdHJpbmcsIGtleXdvcmQ6IHN0cmluZykge1xuICAgIGxldCBwYXJ0cyA9IFsgXTtcblxuICAgIGxldCBsYXN0SW5kZXggPSAwO1xuXG4gICAgd2hpbGUobGFzdEluZGV4IDwgbGluZS5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBsaW5lLmluZGV4T2Yoa2V5d29yZCwgbGFzdEluZGV4KTtcblxuICAgICAgICBpZiAoaW5kZXggPT0gLTEpIHtcbiAgICAgICAgICAgIHBhcnRzLnB1c2gobGluZS5zdWJzdHJpbmcobGFzdEluZGV4KSk7XG5cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgcGFydHMucHVzaChsaW5lLnN1YnN0cmluZyhsYXN0SW5kZXgsIGluZGV4KSk7XG4gICAgICAgICAgICBcbiAgICAgICAgY29uc3Qgd29yZCA9IGxpbmUuc3Vic3RyaW5nKGluZGV4LCBsYXN0SW5kZXggPSBpbmRleCArIGtleXdvcmQubGVuZ3RoKTtcbiAgICAgICAgXG4gICAgICAgIHBhcnRzLnB1c2goe1xuICAgICAgICAgICAga2V5d29yZDogdHJ1ZSxcbiAgICAgICAgICAgIHdvcmRcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnRzO1xufVxuXG5mdW5jdGlvbiBzcGxpdFBhcnRCeVJlZ2V4KGxpbmU6IHN0cmluZywga2V5d29yZDogc3RyaW5nKSB7XG4gICAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKGtleXdvcmQsIFwiZ1wiKTtcblxuICAgIGxldCBwYXJ0cyA9IFsgXTtcblxuICAgIGxldCBtYXRjaCA9IG51bGw7XG4gICAgbGV0IGxhc3RJbmRleCA9IDA7XG5cbiAgICB3aGlsZSAoKG1hdGNoID0gcmVnZXguZXhlYyhsaW5lKSkgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBtYXRjaC5pbmRleDtcbiAgICAgICAgY29uc3Qgd29yZCA9IG1hdGNoWzBdO1xuICAgICAgICBcbiAgICAgICAgcGFydHMucHVzaChsaW5lLnN1YnN0cmluZyhsYXN0SW5kZXgsIGluZGV4KSk7XG4gICAgICAgIFxuICAgICAgICBwYXJ0cy5wdXNoKHtcbiAgICAgICAgICAgIGtleXdvcmQ6IHRydWUsXG4gICAgICAgICAgICB3b3JkXG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgbGFzdEluZGV4ID0gaW5kZXggKyB3b3JkLmxlbmd0aDtcbiAgICB9XG5cbiAgICBpZiAobGFzdEluZGV4ICE9IC0xKSB7XG4gICAgICAgIHBhcnRzLnB1c2gobGluZS5zdWJzdHJpbmcobGFzdEluZGV4KSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnRzO1xufVxuXG5mdW5jdGlvbiBtYXRjaExpbmUobGluZTogTGluZSk6IHN0cmluZyB7XG4gICAgY29uc3QgJGxpbmUgPSAkKGA8ZGl2IGNsYXNzPVwibGluZVwiIGRhdGEtbGluZT1cIiR7bGluZS5saW5lTnVtYmVyICsgMX1cIj48L2Rpdj5gKTtcblxuICAgIGNvbnN0IHBhcnRzID0gY3VycmVudFNlYXJjaC5pc1JlZ2V4P1xuICAgICAgICBzcGxpdFBhcnRCeVJlZ2V4KGxpbmUubGluZUNvbnRlbnQsIGN1cnJlbnRTZWFyY2gua2V5d29yZCk6XG4gICAgICAgIHNwbGl0UGFydEJ5S2V5d29yZChsaW5lLmxpbmVDb250ZW50LCBjdXJyZW50U2VhcmNoLmtleXdvcmQpO1xuXG4gICAgcGFydHMuZm9yRWFjaCgocGFydCkgPT4ge1xuICAgICAgICBpZiAodHlwZW9mKHBhcnQpID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBjb25zdCAkc3BhbiA9ICQoXCI8c3Bhbj48L3NwYW4+XCIpO1xuICAgICAgICAgICAgJHNwYW4udGV4dChwYXJ0KTtcbiAgICAgICAgICAgICRsaW5lLmFwcGVuZCgkc3Bhbik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCAkc3BhbiA9ICQoXCI8c3BhbiBjbGFzcz0na2V5d29yZCc+PC9zcGFuPlwiKTtcbiAgICAgICAgJHNwYW4udGV4dChwYXJ0LndvcmQpO1xuICAgICAgICAkbGluZS5hcHBlbmQoJHNwYW4pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuICRsaW5lO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVOb3RlQmxvY2sodGFyZ2V0OiBOb3RlVGFyZ2V0KSB7XG4gICAgbGV0IG5vdGVCbG9jayA9IHtcbiAgICAgICAgbm90ZUlkOiB0YXJnZXQubm90ZUlkLFxuICAgICAgICB0YXJnZXQ6IHRhcmdldCxcbiAgICAgICAgJHJvb3Q6IG51bGwsXG4gICAgICAgICRsaW5lczogbnVsbCxcbiAgICAgICAgbGFzdExpbmVOdW1iZXI6IG51bGwsXG4gICAgICAgIGFwcGVuZExpbmU6IG51bGxcbiAgICB9O1xuXG4gICAgaWYgKGN1cnJlbnRTZWFyY2gubm90ZUJvb2tzW3RhcmdldC5ub3RlYm9va0lkXSA9PSBudWxsKSBcbiAgICB7XG4gICAgICAgIGN1cnJlbnRTZWFyY2gubm90ZUJvb2tzW3RhcmdldC5ub3RlYm9va0lkXSA9IHtcbiAgICAgICAgICAgIG5vdGVib29rSWQ6IHRhcmdldC5ub3RlYm9va0lkLFxuICAgICAgICAgICAgbm90ZWJvb2tOYW1lOiB0YXJnZXQubm90ZWJvb2tOYW1lLFxuICAgICAgICAgICAgbm90ZXM6IHtcbiAgICAgICAgICAgICAgICBbdGFyZ2V0Lm5vdGVJZF06IG5vdGVCbG9ja1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBlbHNlXG4gICAge1xuICAgICAgICBjdXJyZW50U2VhcmNoLm5vdGVCb29rc1t0YXJnZXQubm90ZWJvb2tJZF0ubm90ZXNbdGFyZ2V0Lm5vdGVJZF0gPSBub3RlQmxvY2s7XG4gICAgfVxuXG4gICAgY3VycmVudFNlYXJjaC5ub3Rlc1t0YXJnZXQubm90ZUlkXSA9IG5vdGVCbG9jaztcblxuICAgIG5vdGVCbG9jay4kcm9vdCA9ICQoYFxuPGRpdiBjbGFzcz1cIm5vdGVcIlxuICAgIGRhdGEtbm90ZT1cIiR7dGFyZ2V0Lm5vdGVJZH1cIlxuICAgIGRhdGEtbm90ZWJvb2s9XCIke3RhcmdldC5ub3RlYm9va0lkfVwiPlxuICAgIDxoND5cbiAgICAgICAgPGEgY2xhc3M9XCJsaW5rXCIgZGF0YS1pZD1cIiR7dGFyZ2V0Lm5vdGVJZH1cIiBocmVmPVwiamF2YXNjcmlwdDo7XCI+XG4gICAgICAgICAgICAke3RhcmdldC5ub3RlYm9va05hbWV9ID4gJHt0YXJnZXQubm90ZU5hbWV9XG4gICAgICAgIDwvYT5cbiAgICA8L2g0PlxuPC9kaXY+YCk7XG5cbiAgICAkKFwiLnNlYXJjaC1yZXN1bHRcIikuYXBwZW5kKG5vdGVCbG9jay4kcm9vdCk7XG5cbiAgICBub3RlQmxvY2suJHJvb3QuZmluZChcImEubGlua1wiKS5jbGljaygoKSA9PiB7XG4gICAgICAgIGNoYW5uZWwoXCJvcGVuXCIsIHRhcmdldC5ub3RlSWQpO1xuICAgIH0pO1xuXG4gICAgbm90ZUJsb2NrLmFwcGVuZExpbmUgPSAobGluZTogTGluZSkgPT4ge1xuICAgICAgICBpZiAobm90ZUJsb2NrLmxhc3RMaW5lTnVtYmVyICE9IG51bGwgJiYgbGluZS5saW5lTnVtYmVyID09IG5vdGVCbG9jay5sYXN0TGluZU51bWJlciArIDEpXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5vdGVCbG9jay4kbGluZXMuYXBwZW5kKG1hdGNoTGluZShsaW5lKSk7XG4gICAgICAgICAgICBub3RlQmxvY2subGFzdExpbmVOdW1iZXIgPSBsaW5lLmxpbmVOdW1iZXI7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBub3RlQmxvY2suJHJvb3QuYXBwZW5kKGA8bGk+bGluZTogJHtsaW5lLmxpbmVOdW1iZXIgKyAxfTwvbGk+YCk7XG5cbiAgICAgICAgbm90ZUJsb2NrLiRsaW5lcyA9ICQoXCI8cHJlPjwvcHJlPlwiKTtcblxuICAgICAgICBub3RlQmxvY2suJHJvb3QuYXBwZW5kKG5vdGVCbG9jay4kbGluZXMpO1xuXG4gICAgICAgIG5vdGVCbG9jay4kbGluZXMuYXBwZW5kKG1hdGNoTGluZShsaW5lKSk7XG4gICAgICAgIG5vdGVCbG9jay5sYXN0TGluZU51bWJlciA9IGxpbmUubGluZU51bWJlcjtcbiAgICB9O1xuXG4gICAgcmV0dXJuIG5vdGVCbG9jaztcbn1cblxuaGFuZGxlcnMuc2V0KFwiZmluaXNoXCIsIGFzeW5jICgpID0+IHtcbiAgICBsZXQgdGlwID0gYCcke2N1cnJlbnRTZWFyY2gua2V5d29yZH0nIHJlc3VsdDogYDtcblxuICAgIGlmIChjdXJyZW50U2VhcmNoLmlzUmVnZXgpXG4gICAge1xuICAgICAgICB0aXAgPSBgLyR7Y3VycmVudFNlYXJjaC5rZXl3b3JkfS8gcmVzdWx0OiBgO1xuICAgIH1cblxuICAgIHRpcCArPSBcIjxzZWxlY3QgY2xhc3M9J25vdGVib29rcyc+PC9zZWxlY3Q+ID4gPHNlbGVjdCBjbGFzcz0nbm90ZXMnPjwvc2VsZWN0PlwiO1xuXG4gICAgJChcIi5zZWFyY2gtdGlwXCIpLmh0bWwodGlwKTtcblxuICAgIGNvbnN0ICRub3RlYm9va3MgPSAkKFwiLnNlYXJjaC10aXAgLm5vdGVib29rc1wiKTtcbiAgICBjb25zdCAkbm90ZXMgPSAkKFwiLnNlYXJjaC10aXAgLm5vdGVzXCIpO1xuXG4gICAgY29uc3QgbG9jYWwgPSB7XG4gICAgICAgIG5vdGVib29rU2VsZWN0b3I6IFwiLTFcIixcbiAgICAgICAgbm90ZVNlbGVjdG9yOiBcIi0xXCJcbiAgICB9O1xuXG4gICAgJG5vdGVib29rcy5hcHBlbmQoYDxvcHRpb24gdmFsdWU9XCItMVwiPkFsbDwvb3B0aW9uPmApO1xuXG4gICAgT2JqZWN0LnZhbHVlcyhjdXJyZW50U2VhcmNoLm5vdGVCb29rcykuc29ydCgobGVmdDogYW55LCByaWdodDogYW55KSA9PiB7XG4gICAgICAgIHJldHVybiBsZWZ0Lm5vdGVib29rTmFtZS5sb2NhbGVDb21wYXJlKHJpZ2h0Lm5vdGVib29rTmFtZSk7XG4gICAgfSkuZm9yRWFjaCgobm90ZWJvb2s6IGFueSwgaW5kZXgpID0+IHtcbiAgICAgICAgJG5vdGVib29rcy5hcHBlbmQoYDxvcHRpb24gdmFsdWU9XCIke25vdGVib29rLm5vdGVib29rSWR9XCI+JHtub3RlYm9vay5ub3RlYm9va05hbWV9PC9vcHRpb24+YCk7XG4gICAgfSlcblxuICAgICRub3Rlcy5hcHBlbmQoYDxvcHRpb24gdmFsdWU9XCItMVwiPkFsbDwvb3B0aW9uPmApO1xuXG4gICAgT2JqZWN0LnZhbHVlcyhjdXJyZW50U2VhcmNoLm5vdGVzKS5zb3J0KChsZWZ0OiBhbnksIHJpZ2h0OiBhbnkpID0+IHtcbiAgICAgICAgcmV0dXJuIGxlZnQudGFyZ2V0Lm5vdGVOYW1lLmxvY2FsZUNvbXBhcmUocmlnaHQudGFyZ2V0Lm5vdGVOYW1lKTtcbiAgICB9KS5mb3JFYWNoKChub3RlOiBhbnkpID0+IHtcbiAgICAgICAgJG5vdGVzLmFwcGVuZChgPG9wdGlvbiB2YWx1ZT1cIiR7bm90ZS50YXJnZXQubm90ZUlkfVwiPiR7bm90ZS50YXJnZXQubm90ZU5hbWV9PC9vcHRpb24+YCk7XG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBmaWx0ZXIoKSB7XG4gICAgICAgIC8vYWxlcnQoJChcIi5zZWFyY2gtcmVzdWx0XCIpLmh0bWwoKSk7XG4gICAgICAgIC8vY29uc3QgaHRtbCA9ICQoXCIuc2VhcmNoLXJlc3VsdFwiKS5odG1sKCk7XG5cbiAgICAgICAgLy8kKFwiLnNlYXJjaC1yZXN1bHRcIikudGV4dChodG1sKTtcbiAgICAgICAgaWYgKGxvY2FsLm5vdGVTZWxlY3RvciAhPSBcIi0xXCIpXG4gICAgICAgIHtcbiAgICAgICAgICAgICQoYC5zZWFyY2gtcmVzdWx0IC5ub3RlYCkuaGlkZSgpO1xuICAgICAgICAgICAgJChgLnNlYXJjaC1yZXN1bHQgLm5vdGVbZGF0YS1ub3RlPScke2xvY2FsLm5vdGVTZWxlY3Rvcn0nXWApLnNob3coKTtcblxuICAgICAgICAgICAgLy8kKFwiLnNlYXJjaC1yZXN1bHRcIikudGV4dChgLnNlYXJjaC1yZXN1bHQgLm5vdGVbZGF0YS1ub3RlPScke2xvY2FsLm5vdGVTZWxlY3Rvcn0nXWApO1xuICAgICAgICB9IGVsc2VcbiAgICAgICAgaWYgKGxvY2FsLm5vdGVib29rU2VsZWN0b3IgIT0gXCItMVwiKVxuICAgICAgICB7XG4gICAgICAgICAgICAkKGAuc2VhcmNoLXJlc3VsdCAubm90ZWApLmhpZGUoKTtcbiAgICAgICAgICAgICQoYC5zZWFyY2gtcmVzdWx0IC5ub3RlW2RhdGEtbm90ZWJvb2s9JyR7bG9jYWwubm90ZWJvb2tTZWxlY3Rvcn0nXWApLnNob3coKTtcblxuICAgICAgICAgICAgLy8kKFwiLnNlYXJjaC1yZXN1bHRcIikudGV4dChgLnNlYXJjaC1yZXN1bHQgLm5vdGVbZGF0YS1ub3RlYm9vaz0nJHtsb2NhbC5ub3RlYm9va1NlbGVjdG9yfSddYCk7XG4gICAgICAgIH0gZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICAkKGAuc2VhcmNoLXJlc3VsdCAubm90ZWApLnNob3coKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICRub3RlYm9va3MuY2hhbmdlKGZ1bmN0aW9uKCkge1xuICAgICAgICBsb2NhbC5ub3RlYm9va1NlbGVjdG9yID0gJCh0aGlzKS52YWwoKTtcblxuICAgICAgICBsb2NhbC5ub3RlU2VsZWN0b3IgPSBcIi0xXCI7XG4gICAgICAgICRub3Rlcy5odG1sKGA8b3B0aW9uIHZhbHVlPVwiLTFcIj5BbGw8L29wdGlvbj5gKTtcblxuICAgICAgICBpZiAobG9jYWwubm90ZWJvb2tTZWxlY3RvciAhPSBcIi0xXCIpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IG5vdGVib29rID0gY3VycmVudFNlYXJjaC5ub3RlQm9va3NbbG9jYWwubm90ZWJvb2tTZWxlY3Rvcl07XG5cbiAgICAgICAgICAgIGlmIChub3RlYm9vayAhPSBudWxsKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIE9iamVjdC52YWx1ZXMobm90ZWJvb2subm90ZXMpLnNvcnQoKGxlZnQ6IGFueSwgcmlnaHQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbGVmdC50YXJnZXQubm90ZU5hbWUubG9jYWxlQ29tcGFyZShyaWdodC50YXJnZXQubm90ZU5hbWUpO1xuICAgICAgICAgICAgICAgIH0pLmZvckVhY2goKG5vdGU6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAkbm90ZXMuYXBwZW5kKGA8b3B0aW9uIHZhbHVlPVwiJHtub3RlLnRhcmdldC5ub3RlSWR9XCI+JHtub3RlLnRhcmdldC5ub3RlTmFtZX08L29wdGlvbj5gKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIE9iamVjdC52YWx1ZXMoY3VycmVudFNlYXJjaC5ub3Rlcykuc29ydCgobGVmdDogYW55LCByaWdodDogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxlZnQudGFyZ2V0Lm5vdGVOYW1lLmxvY2FsZUNvbXBhcmUocmlnaHQudGFyZ2V0Lm5vdGVOYW1lKTtcbiAgICAgICAgICAgIH0pLmZvckVhY2goKG5vdGU6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICRub3Rlcy5hcHBlbmQoYDxvcHRpb24gdmFsdWU9XCIke25vdGUudGFyZ2V0Lm5vdGVJZH1cIj4ke25vdGUudGFyZ2V0Lm5vdGVOYW1lfTwvb3B0aW9uPmApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBmaWx0ZXIoKTtcbiAgICB9KTtcblxuICAgICRub3Rlcy5jaGFuZ2UoZnVuY3Rpb24oKSB7XG4gICAgICAgIGxvY2FsLm5vdGVTZWxlY3RvciA9ICQodGhpcykudmFsKCk7XG5cbiAgICAgICAgZmlsdGVyKCk7XG4gICAgfSk7XG59KTtcblxuaGFuZGxlcnMuc2V0KFwicmVzdWx0XCIsIGFzeW5jIChpZCwgdGFyZ2V0OiBOb3RlVGFyZ2V0LCBsaW5lczogTGluZVtdKSA9PiB7XG4gICAgaWYgKHNlYXJjaElkICE9IGlkKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICBpZiAoY3VycmVudE5vdGUgPT0gbnVsbCB8fCBjdXJyZW50Tm90ZS5ub3RlSWQgIT0gdGFyZ2V0Lm5vdGVJZClcbiAgICB7XG4gICAgICAgIGN1cnJlbnROb3RlID0gY3JlYXRlTm90ZUJsb2NrKHRhcmdldCk7XG4gICAgfVxuXG4gICAgbGluZXMuZm9yRWFjaCgobGluZSkgPT4ge1xuICAgICAgICBjdXJyZW50Tm90ZS5hcHBlbmRMaW5lKGxpbmUpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRydWU7XG59KTtcblxuaGFuZGxlcnMuc2V0KFwic3RhdHVzXCIsIGFzeW5jKHRhcmdldDogTm90ZVRhcmdldCwgaW5kZXg6IG51bWJlciwgY291bnRlcjogbnVtYmVyKSA9PiB7XG4gICAgbGV0IHRpcCA9IGBpcyBzZWFyY2hpbmcgJHtjdXJyZW50U2VhcmNoLmtleXdvcmR9LiBgO1xuXG4gICAgaWYgKGN1cnJlbnRTZWFyY2guaXNSZWdleClcbiAgICB7XG4gICAgICAgIHRpcCA9IGBpcyBzZWFyY2hpbmcgLyR7Y3VycmVudFNlYXJjaC5rZXl3b3JkfS8uIGA7XG4gICAgfVxuXG4gICAgdGlwICs9IGAke3RhcmdldC5ub3RlYm9va05hbWV9ID4gJHt0YXJnZXQubm90ZU5hbWV9ICR7aW5kZXh9IC8gJHtjb3VudGVyfWA7XG5cbiAgICAkKFwiLnNlYXJjaC10aXBcIikudGV4dCh0aXApO1xufSk7XG5cbmFzeW5jIGZ1bmN0aW9uIHNlYXJjaChrZXl3b3JkOiBzdHJpbmcsIGlzUmVnZXg6IGJvb2xlYW4pIHtcbiAgICBrZXl3b3JkID0ga2V5d29yZC50cmltKCk7XG5cbiAgICAkKFwiLnNlYXJjaC10aXBcIikudGV4dChcIlwiKTtcbiAgICAkKFwiLnNlYXJjaC1yZXN1bHRcIikudGV4dChcIlwiKTtcblxuICAgIGlmIChrZXl3b3JkID09IFwiXCIpXG4gICAge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHRpcCA9IGBpcyBzZWFyY2hpbmcgJHtrZXl3b3JkfS4uLmA7XG5cbiAgICBpZiAoaXNSZWdleClcbiAgICB7XG4gICAgICAgIHRpcCA9IGBpcyBzZWFyY2hpbmcgLyR7a2V5d29yZH0vLi4uYDtcbiAgICB9XG5cbiAgICAkKFwiLnNlYXJjaC10aXBcIikudGV4dCh0aXApO1xuXG4gICAgc2VhcmNoSWQgPSBTdHJpbmcoRGF0ZS5ub3coKSk7XG5cbiAgICBjdXJyZW50U2VhcmNoID0ge1xuICAgICAgICBzZWFyY2hJZCxcbiAgICAgICAga2V5d29yZCxcbiAgICAgICAgaXNSZWdleCxcblxuICAgICAgICBub3RlQm9va3M6IHsgfSxcbiAgICAgICAgbm90ZXM6IHsgfVxuICAgIH07XG5cbiAgICBjdXJyZW50Tm90ZSA9IG51bGw7XG5cbiAgICBjaGFubmVsKFwic2VhcmNoXCIsIHNlYXJjaElkLCBrZXl3b3JkLCBpc1JlZ2V4KTtcbn1cblxuJHJlZ2V4Q2hlY2tlZEJveC5jaGFuZ2UoKCkgPT4ge1xuICAgIGxldCBwbGFjZWhvbGRlciA9IFwia2V5d29yZCBmb3Igc2VhcmNoXCI7XG5cbiAgICBjb25zdCBpc1JlZ2V4ID0gJHJlZ2V4Q2hlY2tlZEJveC5hdHRyKFwiY2hlY2tlZFwiKTtcblxuICAgIGlmIChpc1JlZ2V4KVxuICAgIHtcbiAgICAgICAgcGxhY2Vob2xkZXIgPSBcInJlZ2V4IGZvciBzZWFyY2hcIjtcbiAgICB9XG5cbiAgICAka2V5d29yZElucHV0LmF0dHIoXCJwbGFjZWhvbGRlclwiLCBwbGFjZWhvbGRlcik7XG59KTtcblxuJGtleXdvcmRJbnB1dC5rZXl1cCgoKSA9PiB7XG4gICAgY29uc3Qga2V5d29yZCA9ICRrZXl3b3JkSW5wdXQudmFsKCkudHJpbSgpO1xuICAgIGlmIChrZXl3b3JkID09IFwiXCIpXG4gICAge1xuICAgICAgICBkZWxheSgka2V5d29yZElucHV0LCBcIm9uY2hhbmdlXCIsIC0xLCBudWxsKTtcblxuICAgICAgICByZXR1cm4gc2VhcmNoKGtleXdvcmQsIGZhbHNlKTtcbiAgICB9XG5cbiAgICBkZWxheSgka2V5d29yZElucHV0LCBcIm9uY2hhbmdlXCIsIDcwMCwgKCkgPT4ge1xuICAgICAgICBzZWFyY2goXG4gICAgICAgICAgICBrZXl3b3JkLCAkcmVnZXhDaGVja2VkQm94LmF0dHIoXCJjaGVja2VkXCIpXG4gICAgICAgICk7XG4gICAgfSk7XG59KTtcbiIsIi8qIFplcHRvIHYxLjEuNCAtIHplcHRvIGV2ZW50IGFqYXggZm9ybSBpZSAtIHplcHRvanMuY29tL2xpY2Vuc2UgKi9cblxudmFyIFplcHRvID0gKGZ1bmN0aW9uKCkge1xuICB2YXIgdW5kZWZpbmVkLCBrZXksICQsIGNsYXNzTGlzdCwgZW1wdHlBcnJheSA9IFtdLCBzbGljZSA9IGVtcHR5QXJyYXkuc2xpY2UsIGZpbHRlciA9IGVtcHR5QXJyYXkuZmlsdGVyLFxuICAgIGRvY3VtZW50ID0gd2luZG93LmRvY3VtZW50LFxuICAgIGVsZW1lbnREaXNwbGF5ID0ge30sIGNsYXNzQ2FjaGUgPSB7fSxcbiAgICBjc3NOdW1iZXIgPSB7ICdjb2x1bW4tY291bnQnOiAxLCAnY29sdW1ucyc6IDEsICdmb250LXdlaWdodCc6IDEsICdsaW5lLWhlaWdodCc6IDEsJ29wYWNpdHknOiAxLCAnei1pbmRleCc6IDEsICd6b29tJzogMSB9LFxuICAgIGZyYWdtZW50UkUgPSAvXlxccyo8KFxcdyt8ISlbXj5dKj4vLFxuICAgIHNpbmdsZVRhZ1JFID0gL148KFxcdyspXFxzKlxcLz8+KD86PFxcL1xcMT58KSQvLFxuICAgIHRhZ0V4cGFuZGVyUkUgPSAvPCg/IWFyZWF8YnJ8Y29sfGVtYmVkfGhyfGltZ3xpbnB1dHxsaW5rfG1ldGF8cGFyYW0pKChbXFx3Ol0rKVtePl0qKVxcLz4vaWcsXG4gICAgcm9vdE5vZGVSRSA9IC9eKD86Ym9keXxodG1sKSQvaSxcbiAgICBjYXBpdGFsUkUgPSAvKFtBLVpdKS9nLFxuXG4gICAgLy8gc3BlY2lhbCBhdHRyaWJ1dGVzIHRoYXQgc2hvdWxkIGJlIGdldC9zZXQgdmlhIG1ldGhvZCBjYWxsc1xuICAgIG1ldGhvZEF0dHJpYnV0ZXMgPSBbJ3ZhbCcsICdjc3MnLCAnaHRtbCcsICd0ZXh0JywgJ2RhdGEnLCAnd2lkdGgnLCAnaGVpZ2h0JywgJ29mZnNldCddLFxuXG4gICAgYWRqYWNlbmN5T3BlcmF0b3JzID0gWyAnYWZ0ZXInLCAncHJlcGVuZCcsICdiZWZvcmUnLCAnYXBwZW5kJyBdLFxuICAgIHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKSxcbiAgICB0YWJsZVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyksXG4gICAgY29udGFpbmVycyA9IHtcbiAgICAgICd0cic6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Rib2R5JyksXG4gICAgICAndGJvZHknOiB0YWJsZSwgJ3RoZWFkJzogdGFibGUsICd0Zm9vdCc6IHRhYmxlLFxuICAgICAgJ3RkJzogdGFibGVSb3csICd0aCc6IHRhYmxlUm93LFxuICAgICAgJyonOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIH0sXG4gICAgcmVhZHlSRSA9IC9jb21wbGV0ZXxsb2FkZWR8aW50ZXJhY3RpdmUvLFxuICAgIHNpbXBsZVNlbGVjdG9yUkUgPSAvXltcXHctXSokLyxcbiAgICBjbGFzczJ0eXBlID0ge30sXG4gICAgdG9TdHJpbmcgPSBjbGFzczJ0eXBlLnRvU3RyaW5nLFxuICAgIHplcHRvID0ge30sXG4gICAgY2FtZWxpemUsIHVuaXEsXG4gICAgdGVtcFBhcmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuICAgIHByb3BNYXAgPSB7XG4gICAgICAndGFiaW5kZXgnOiAndGFiSW5kZXgnLFxuICAgICAgJ3JlYWRvbmx5JzogJ3JlYWRPbmx5JyxcbiAgICAgICdmb3InOiAnaHRtbEZvcicsXG4gICAgICAnY2xhc3MnOiAnY2xhc3NOYW1lJyxcbiAgICAgICdtYXhsZW5ndGgnOiAnbWF4TGVuZ3RoJyxcbiAgICAgICdjZWxsc3BhY2luZyc6ICdjZWxsU3BhY2luZycsXG4gICAgICAnY2VsbHBhZGRpbmcnOiAnY2VsbFBhZGRpbmcnLFxuICAgICAgJ3Jvd3NwYW4nOiAncm93U3BhbicsXG4gICAgICAnY29sc3Bhbic6ICdjb2xTcGFuJyxcbiAgICAgICd1c2VtYXAnOiAndXNlTWFwJyxcbiAgICAgICdmcmFtZWJvcmRlcic6ICdmcmFtZUJvcmRlcicsXG4gICAgICAnY29udGVudGVkaXRhYmxlJzogJ2NvbnRlbnRFZGl0YWJsZSdcbiAgICB9LFxuICAgIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5IHx8XG4gICAgICBmdW5jdGlvbihvYmplY3QpeyByZXR1cm4gb2JqZWN0IGluc3RhbmNlb2YgQXJyYXkgfVxuXG4gIHplcHRvLm1hdGNoZXMgPSBmdW5jdGlvbihlbGVtZW50LCBzZWxlY3Rvcikge1xuICAgIGlmICghc2VsZWN0b3IgfHwgIWVsZW1lbnQgfHwgZWxlbWVudC5ub2RlVHlwZSAhPT0gMSkgcmV0dXJuIGZhbHNlXG4gICAgdmFyIG1hdGNoZXNTZWxlY3RvciA9IGVsZW1lbnQud2Via2l0TWF0Y2hlc1NlbGVjdG9yIHx8IGVsZW1lbnQubW96TWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQub01hdGNoZXNTZWxlY3RvciB8fCBlbGVtZW50Lm1hdGNoZXNTZWxlY3RvclxuICAgIGlmIChtYXRjaGVzU2VsZWN0b3IpIHJldHVybiBtYXRjaGVzU2VsZWN0b3IuY2FsbChlbGVtZW50LCBzZWxlY3RvcilcbiAgICAvLyBmYWxsIGJhY2sgdG8gcGVyZm9ybWluZyBhIHNlbGVjdG9yOlxuICAgIHZhciBtYXRjaCwgcGFyZW50ID0gZWxlbWVudC5wYXJlbnROb2RlLCB0ZW1wID0gIXBhcmVudFxuICAgIGlmICh0ZW1wKSAocGFyZW50ID0gdGVtcFBhcmVudCkuYXBwZW5kQ2hpbGQoZWxlbWVudClcbiAgICBtYXRjaCA9IH56ZXB0by5xc2EocGFyZW50LCBzZWxlY3RvcikuaW5kZXhPZihlbGVtZW50KVxuICAgIHRlbXAgJiYgdGVtcFBhcmVudC5yZW1vdmVDaGlsZChlbGVtZW50KVxuICAgIHJldHVybiBtYXRjaFxuICB9XG5cbiAgZnVuY3Rpb24gdHlwZShvYmopIHtcbiAgICByZXR1cm4gb2JqID09IG51bGwgPyBTdHJpbmcob2JqKSA6XG4gICAgICBjbGFzczJ0eXBlW3RvU3RyaW5nLmNhbGwob2JqKV0gfHwgXCJvYmplY3RcIlxuICB9XG5cbiAgZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdHlwZSh2YWx1ZSkgPT0gXCJmdW5jdGlvblwiIH1cbiAgZnVuY3Rpb24gaXNXaW5kb3cob2JqKSAgICAgeyByZXR1cm4gb2JqICE9IG51bGwgJiYgb2JqID09IG9iai53aW5kb3cgfVxuICBmdW5jdGlvbiBpc0RvY3VtZW50KG9iaikgICB7IHJldHVybiBvYmogIT0gbnVsbCAmJiBvYmoubm9kZVR5cGUgPT0gb2JqLkRPQ1VNRU5UX05PREUgfVxuICBmdW5jdGlvbiBpc09iamVjdChvYmopICAgICB7IHJldHVybiB0eXBlKG9iaikgPT0gXCJvYmplY3RcIiB9XG4gIGZ1bmN0aW9uIGlzUGxhaW5PYmplY3Qob2JqKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KG9iaikgJiYgIWlzV2luZG93KG9iaikgJiYgT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iaikgPT0gT2JqZWN0LnByb3RvdHlwZVxuICB9XG4gIGZ1bmN0aW9uIGxpa2VBcnJheShvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmoubGVuZ3RoID09ICdudW1iZXInIH1cblxuICBmdW5jdGlvbiBjb21wYWN0KGFycmF5KSB7IHJldHVybiBmaWx0ZXIuY2FsbChhcnJheSwgZnVuY3Rpb24oaXRlbSl7IHJldHVybiBpdGVtICE9IG51bGwgfSkgfVxuICBmdW5jdGlvbiBmbGF0dGVuKGFycmF5KSB7IHJldHVybiBhcnJheS5sZW5ndGggPiAwID8gJC5mbi5jb25jYXQuYXBwbHkoW10sIGFycmF5KSA6IGFycmF5IH1cbiAgY2FtZWxpemUgPSBmdW5jdGlvbihzdHIpeyByZXR1cm4gc3RyLnJlcGxhY2UoLy0rKC4pPy9nLCBmdW5jdGlvbihtYXRjaCwgY2hyKXsgcmV0dXJuIGNociA/IGNoci50b1VwcGVyQ2FzZSgpIDogJycgfSkgfVxuICBmdW5jdGlvbiBkYXNoZXJpemUoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC86Oi9nLCAnLycpXG4gICAgICAgICAgIC5yZXBsYWNlKC8oW0EtWl0rKShbQS1aXVthLXpdKS9nLCAnJDFfJDInKVxuICAgICAgICAgICAucmVwbGFjZSgvKFthLXpcXGRdKShbQS1aXSkvZywgJyQxXyQyJylcbiAgICAgICAgICAgLnJlcGxhY2UoL18vZywgJy0nKVxuICAgICAgICAgICAudG9Mb3dlckNhc2UoKVxuICB9XG4gIHVuaXEgPSBmdW5jdGlvbihhcnJheSl7IHJldHVybiBmaWx0ZXIuY2FsbChhcnJheSwgZnVuY3Rpb24oaXRlbSwgaWR4KXsgcmV0dXJuIGFycmF5LmluZGV4T2YoaXRlbSkgPT0gaWR4IH0pIH1cblxuICBmdW5jdGlvbiBjbGFzc1JFKG5hbWUpIHtcbiAgICByZXR1cm4gbmFtZSBpbiBjbGFzc0NhY2hlID9cbiAgICAgIGNsYXNzQ2FjaGVbbmFtZV0gOiAoY2xhc3NDYWNoZVtuYW1lXSA9IG5ldyBSZWdFeHAoJyhefFxcXFxzKScgKyBuYW1lICsgJyhcXFxcc3wkKScpKVxuICB9XG5cbiAgZnVuY3Rpb24gbWF5YmVBZGRQeChuYW1lLCB2YWx1ZSkge1xuICAgIHJldHVybiAodHlwZW9mIHZhbHVlID09IFwibnVtYmVyXCIgJiYgIWNzc051bWJlcltkYXNoZXJpemUobmFtZSldKSA/IHZhbHVlICsgXCJweFwiIDogdmFsdWVcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlZmF1bHREaXNwbGF5KG5vZGVOYW1lKSB7XG4gICAgdmFyIGVsZW1lbnQsIGRpc3BsYXlcbiAgICBpZiAoIWVsZW1lbnREaXNwbGF5W25vZGVOYW1lXSkge1xuICAgICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobm9kZU5hbWUpXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsZW1lbnQpXG4gICAgICBkaXNwbGF5ID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50LCAnJykuZ2V0UHJvcGVydHlWYWx1ZShcImRpc3BsYXlcIilcbiAgICAgIGVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtZW50KVxuICAgICAgZGlzcGxheSA9PSBcIm5vbmVcIiAmJiAoZGlzcGxheSA9IFwiYmxvY2tcIilcbiAgICAgIGVsZW1lbnREaXNwbGF5W25vZGVOYW1lXSA9IGRpc3BsYXlcbiAgICB9XG4gICAgcmV0dXJuIGVsZW1lbnREaXNwbGF5W25vZGVOYW1lXVxuICB9XG5cbiAgZnVuY3Rpb24gY2hpbGRyZW4oZWxlbWVudCkge1xuICAgIHJldHVybiAnY2hpbGRyZW4nIGluIGVsZW1lbnQgP1xuICAgICAgc2xpY2UuY2FsbChlbGVtZW50LmNoaWxkcmVuKSA6XG4gICAgICAkLm1hcChlbGVtZW50LmNoaWxkTm9kZXMsIGZ1bmN0aW9uKG5vZGUpeyBpZiAobm9kZS5ub2RlVHlwZSA9PSAxKSByZXR1cm4gbm9kZSB9KVxuICB9XG5cbiAgLy8gYCQuemVwdG8uZnJhZ21lbnRgIHRha2VzIGEgaHRtbCBzdHJpbmcgYW5kIGFuIG9wdGlvbmFsIHRhZyBuYW1lXG4gIC8vIHRvIGdlbmVyYXRlIERPTSBub2RlcyBub2RlcyBmcm9tIHRoZSBnaXZlbiBodG1sIHN0cmluZy5cbiAgLy8gVGhlIGdlbmVyYXRlZCBET00gbm9kZXMgYXJlIHJldHVybmVkIGFzIGFuIGFycmF5LlxuICAvLyBUaGlzIGZ1bmN0aW9uIGNhbiBiZSBvdmVycmlkZW4gaW4gcGx1Z2lucyBmb3IgZXhhbXBsZSB0byBtYWtlXG4gIC8vIGl0IGNvbXBhdGlibGUgd2l0aCBicm93c2VycyB0aGF0IGRvbid0IHN1cHBvcnQgdGhlIERPTSBmdWxseS5cbiAgemVwdG8uZnJhZ21lbnQgPSBmdW5jdGlvbihodG1sLCBuYW1lLCBwcm9wZXJ0aWVzKSB7XG4gICAgdmFyIGRvbSwgbm9kZXMsIGNvbnRhaW5lclxuXG4gICAgLy8gQSBzcGVjaWFsIGNhc2Ugb3B0aW1pemF0aW9uIGZvciBhIHNpbmdsZSB0YWdcbiAgICBpZiAoc2luZ2xlVGFnUkUudGVzdChodG1sKSkgZG9tID0gJChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFJlZ0V4cC4kMSkpXG5cbiAgICBpZiAoIWRvbSkge1xuICAgICAgaWYgKGh0bWwucmVwbGFjZSkgaHRtbCA9IGh0bWwucmVwbGFjZSh0YWdFeHBhbmRlclJFLCBcIjwkMT48LyQyPlwiKVxuICAgICAgaWYgKG5hbWUgPT09IHVuZGVmaW5lZCkgbmFtZSA9IGZyYWdtZW50UkUudGVzdChodG1sKSAmJiBSZWdFeHAuJDFcbiAgICAgIGlmICghKG5hbWUgaW4gY29udGFpbmVycykpIG5hbWUgPSAnKidcblxuICAgICAgY29udGFpbmVyID0gY29udGFpbmVyc1tuYW1lXVxuICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnICsgaHRtbFxuICAgICAgZG9tID0gJC5lYWNoKHNsaWNlLmNhbGwoY29udGFpbmVyLmNoaWxkTm9kZXMpLCBmdW5jdGlvbigpe1xuICAgICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcylcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKGlzUGxhaW5PYmplY3QocHJvcGVydGllcykpIHtcbiAgICAgIG5vZGVzID0gJChkb20pXG4gICAgICAkLmVhY2gocHJvcGVydGllcywgZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuICAgICAgICBpZiAobWV0aG9kQXR0cmlidXRlcy5pbmRleE9mKGtleSkgPiAtMSkgbm9kZXNba2V5XSh2YWx1ZSlcbiAgICAgICAgZWxzZSBub2Rlcy5hdHRyKGtleSwgdmFsdWUpXG4gICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiBkb21cbiAgfVxuXG4gIC8vIGAkLnplcHRvLlpgIHN3YXBzIG91dCB0aGUgcHJvdG90eXBlIG9mIHRoZSBnaXZlbiBgZG9tYCBhcnJheVxuICAvLyBvZiBub2RlcyB3aXRoIGAkLmZuYCBhbmQgdGh1cyBzdXBwbHlpbmcgYWxsIHRoZSBaZXB0byBmdW5jdGlvbnNcbiAgLy8gdG8gdGhlIGFycmF5LiBOb3RlIHRoYXQgYF9fcHJvdG9fX2AgaXMgbm90IHN1cHBvcnRlZCBvbiBJbnRlcm5ldFxuICAvLyBFeHBsb3Jlci4gVGhpcyBtZXRob2QgY2FuIGJlIG92ZXJyaWRlbiBpbiBwbHVnaW5zLlxuICB6ZXB0by5aID0gZnVuY3Rpb24oZG9tLCBzZWxlY3Rvcikge1xuICAgIGRvbSA9IGRvbSB8fCBbXVxuICAgIGRvbS5fX3Byb3RvX18gPSAkLmZuXG4gICAgZG9tLnNlbGVjdG9yID0gc2VsZWN0b3IgfHwgJydcbiAgICByZXR1cm4gZG9tXG4gIH1cblxuICAvLyBgJC56ZXB0by5pc1pgIHNob3VsZCByZXR1cm4gYHRydWVgIGlmIHRoZSBnaXZlbiBvYmplY3QgaXMgYSBaZXB0b1xuICAvLyBjb2xsZWN0aW9uLiBUaGlzIG1ldGhvZCBjYW4gYmUgb3ZlcnJpZGVuIGluIHBsdWdpbnMuXG4gIHplcHRvLmlzWiA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHJldHVybiBvYmplY3QgaW5zdGFuY2VvZiB6ZXB0by5aXG4gIH1cblxuICAvLyBgJC56ZXB0by5pbml0YCBpcyBaZXB0bydzIGNvdW50ZXJwYXJ0IHRvIGpRdWVyeSdzIGAkLmZuLmluaXRgIGFuZFxuICAvLyB0YWtlcyBhIENTUyBzZWxlY3RvciBhbmQgYW4gb3B0aW9uYWwgY29udGV4dCAoYW5kIGhhbmRsZXMgdmFyaW91c1xuICAvLyBzcGVjaWFsIGNhc2VzKS5cbiAgLy8gVGhpcyBtZXRob2QgY2FuIGJlIG92ZXJyaWRlbiBpbiBwbHVnaW5zLlxuICB6ZXB0by5pbml0ID0gZnVuY3Rpb24oc2VsZWN0b3IsIGNvbnRleHQpIHtcbiAgICB2YXIgZG9tXG4gICAgLy8gSWYgbm90aGluZyBnaXZlbiwgcmV0dXJuIGFuIGVtcHR5IFplcHRvIGNvbGxlY3Rpb25cbiAgICBpZiAoIXNlbGVjdG9yKSByZXR1cm4gemVwdG8uWigpXG4gICAgLy8gT3B0aW1pemUgZm9yIHN0cmluZyBzZWxlY3RvcnNcbiAgICBlbHNlIGlmICh0eXBlb2Ygc2VsZWN0b3IgPT0gJ3N0cmluZycpIHtcbiAgICAgIHNlbGVjdG9yID0gc2VsZWN0b3IudHJpbSgpXG4gICAgICAvLyBJZiBpdCdzIGEgaHRtbCBmcmFnbWVudCwgY3JlYXRlIG5vZGVzIGZyb20gaXRcbiAgICAgIC8vIE5vdGU6IEluIGJvdGggQ2hyb21lIDIxIGFuZCBGaXJlZm94IDE1LCBET00gZXJyb3IgMTJcbiAgICAgIC8vIGlzIHRocm93biBpZiB0aGUgZnJhZ21lbnQgZG9lc24ndCBiZWdpbiB3aXRoIDxcbiAgICAgIGlmIChzZWxlY3RvclswXSA9PSAnPCcgJiYgZnJhZ21lbnRSRS50ZXN0KHNlbGVjdG9yKSlcbiAgICAgICAgZG9tID0gemVwdG8uZnJhZ21lbnQoc2VsZWN0b3IsIFJlZ0V4cC4kMSwgY29udGV4dCksIHNlbGVjdG9yID0gbnVsbFxuICAgICAgLy8gSWYgdGhlcmUncyBhIGNvbnRleHQsIGNyZWF0ZSBhIGNvbGxlY3Rpb24gb24gdGhhdCBjb250ZXh0IGZpcnN0LCBhbmQgc2VsZWN0XG4gICAgICAvLyBub2RlcyBmcm9tIHRoZXJlXG4gICAgICBlbHNlIGlmIChjb250ZXh0ICE9PSB1bmRlZmluZWQpIHJldHVybiAkKGNvbnRleHQpLmZpbmQoc2VsZWN0b3IpXG4gICAgICAvLyBJZiBpdCdzIGEgQ1NTIHNlbGVjdG9yLCB1c2UgaXQgdG8gc2VsZWN0IG5vZGVzLlxuICAgICAgZWxzZSBkb20gPSB6ZXB0by5xc2EoZG9jdW1lbnQsIHNlbGVjdG9yKVxuICAgIH1cbiAgICAvLyBJZiBhIGZ1bmN0aW9uIGlzIGdpdmVuLCBjYWxsIGl0IHdoZW4gdGhlIERPTSBpcyByZWFkeVxuICAgIGVsc2UgaWYgKGlzRnVuY3Rpb24oc2VsZWN0b3IpKSByZXR1cm4gJChkb2N1bWVudCkucmVhZHkoc2VsZWN0b3IpXG4gICAgLy8gSWYgYSBaZXB0byBjb2xsZWN0aW9uIGlzIGdpdmVuLCBqdXN0IHJldHVybiBpdFxuICAgIGVsc2UgaWYgKHplcHRvLmlzWihzZWxlY3RvcikpIHJldHVybiBzZWxlY3RvclxuICAgIGVsc2Uge1xuICAgICAgLy8gbm9ybWFsaXplIGFycmF5IGlmIGFuIGFycmF5IG9mIG5vZGVzIGlzIGdpdmVuXG4gICAgICBpZiAoaXNBcnJheShzZWxlY3RvcikpIGRvbSA9IGNvbXBhY3Qoc2VsZWN0b3IpXG4gICAgICAvLyBXcmFwIERPTSBub2Rlcy5cbiAgICAgIGVsc2UgaWYgKGlzT2JqZWN0KHNlbGVjdG9yKSlcbiAgICAgICAgZG9tID0gW3NlbGVjdG9yXSwgc2VsZWN0b3IgPSBudWxsXG4gICAgICAvLyBJZiBpdCdzIGEgaHRtbCBmcmFnbWVudCwgY3JlYXRlIG5vZGVzIGZyb20gaXRcbiAgICAgIGVsc2UgaWYgKGZyYWdtZW50UkUudGVzdChzZWxlY3RvcikpXG4gICAgICAgIGRvbSA9IHplcHRvLmZyYWdtZW50KHNlbGVjdG9yLnRyaW0oKSwgUmVnRXhwLiQxLCBjb250ZXh0KSwgc2VsZWN0b3IgPSBudWxsXG4gICAgICAvLyBJZiB0aGVyZSdzIGEgY29udGV4dCwgY3JlYXRlIGEgY29sbGVjdGlvbiBvbiB0aGF0IGNvbnRleHQgZmlyc3QsIGFuZCBzZWxlY3RcbiAgICAgIC8vIG5vZGVzIGZyb20gdGhlcmVcbiAgICAgIGVsc2UgaWYgKGNvbnRleHQgIT09IHVuZGVmaW5lZCkgcmV0dXJuICQoY29udGV4dCkuZmluZChzZWxlY3RvcilcbiAgICAgIC8vIEFuZCBsYXN0IGJ1dCBubyBsZWFzdCwgaWYgaXQncyBhIENTUyBzZWxlY3RvciwgdXNlIGl0IHRvIHNlbGVjdCBub2Rlcy5cbiAgICAgIGVsc2UgZG9tID0gemVwdG8ucXNhKGRvY3VtZW50LCBzZWxlY3RvcilcbiAgICB9XG4gICAgLy8gY3JlYXRlIGEgbmV3IFplcHRvIGNvbGxlY3Rpb24gZnJvbSB0aGUgbm9kZXMgZm91bmRcbiAgICByZXR1cm4gemVwdG8uWihkb20sIHNlbGVjdG9yKVxuICB9XG5cbiAgLy8gYCRgIHdpbGwgYmUgdGhlIGJhc2UgYFplcHRvYCBvYmplY3QuIFdoZW4gY2FsbGluZyB0aGlzXG4gIC8vIGZ1bmN0aW9uIGp1c3QgY2FsbCBgJC56ZXB0by5pbml0LCB3aGljaCBtYWtlcyB0aGUgaW1wbGVtZW50YXRpb25cbiAgLy8gZGV0YWlscyBvZiBzZWxlY3Rpbmcgbm9kZXMgYW5kIGNyZWF0aW5nIFplcHRvIGNvbGxlY3Rpb25zXG4gIC8vIHBhdGNoYWJsZSBpbiBwbHVnaW5zLlxuICAkID0gZnVuY3Rpb24oc2VsZWN0b3IsIGNvbnRleHQpe1xuICAgIHJldHVybiB6ZXB0by5pbml0KHNlbGVjdG9yLCBjb250ZXh0KVxuICB9XG5cbiAgZnVuY3Rpb24gZXh0ZW5kKHRhcmdldCwgc291cmNlLCBkZWVwKSB7XG4gICAgZm9yIChrZXkgaW4gc291cmNlKVxuICAgICAgaWYgKGRlZXAgJiYgKGlzUGxhaW5PYmplY3Qoc291cmNlW2tleV0pIHx8IGlzQXJyYXkoc291cmNlW2tleV0pKSkge1xuICAgICAgICBpZiAoaXNQbGFpbk9iamVjdChzb3VyY2Vba2V5XSkgJiYgIWlzUGxhaW5PYmplY3QodGFyZ2V0W2tleV0pKVxuICAgICAgICAgIHRhcmdldFtrZXldID0ge31cbiAgICAgICAgaWYgKGlzQXJyYXkoc291cmNlW2tleV0pICYmICFpc0FycmF5KHRhcmdldFtrZXldKSlcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IFtdXG4gICAgICAgIGV4dGVuZCh0YXJnZXRba2V5XSwgc291cmNlW2tleV0sIGRlZXApXG4gICAgICB9XG4gICAgICBlbHNlIGlmIChzb3VyY2Vba2V5XSAhPT0gdW5kZWZpbmVkKSB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldXG4gIH1cblxuICAvLyBDb3B5IGFsbCBidXQgdW5kZWZpbmVkIHByb3BlcnRpZXMgZnJvbSBvbmUgb3IgbW9yZVxuICAvLyBvYmplY3RzIHRvIHRoZSBgdGFyZ2V0YCBvYmplY3QuXG4gICQuZXh0ZW5kID0gZnVuY3Rpb24odGFyZ2V0KXtcbiAgICB2YXIgZGVlcCwgYXJncyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKVxuICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09ICdib29sZWFuJykge1xuICAgICAgZGVlcCA9IHRhcmdldFxuICAgICAgdGFyZ2V0ID0gYXJncy5zaGlmdCgpXG4gICAgfVxuICAgIGFyZ3MuZm9yRWFjaChmdW5jdGlvbihhcmcpeyBleHRlbmQodGFyZ2V0LCBhcmcsIGRlZXApIH0pXG4gICAgcmV0dXJuIHRhcmdldFxuICB9XG5cbiAgLy8gYCQuemVwdG8ucXNhYCBpcyBaZXB0bydzIENTUyBzZWxlY3RvciBpbXBsZW1lbnRhdGlvbiB3aGljaFxuICAvLyB1c2VzIGBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsYCBhbmQgb3B0aW1pemVzIGZvciBzb21lIHNwZWNpYWwgY2FzZXMsIGxpa2UgYCNpZGAuXG4gIC8vIFRoaXMgbWV0aG9kIGNhbiBiZSBvdmVycmlkZW4gaW4gcGx1Z2lucy5cbiAgemVwdG8ucXNhID0gZnVuY3Rpb24oZWxlbWVudCwgc2VsZWN0b3Ipe1xuICAgIHZhciBmb3VuZCxcbiAgICAgICAgbWF5YmVJRCA9IHNlbGVjdG9yWzBdID09ICcjJyxcbiAgICAgICAgbWF5YmVDbGFzcyA9ICFtYXliZUlEICYmIHNlbGVjdG9yWzBdID09ICcuJyxcbiAgICAgICAgbmFtZU9ubHkgPSBtYXliZUlEIHx8IG1heWJlQ2xhc3MgPyBzZWxlY3Rvci5zbGljZSgxKSA6IHNlbGVjdG9yLCAvLyBFbnN1cmUgdGhhdCBhIDEgY2hhciB0YWcgbmFtZSBzdGlsbCBnZXRzIGNoZWNrZWRcbiAgICAgICAgaXNTaW1wbGUgPSBzaW1wbGVTZWxlY3RvclJFLnRlc3QobmFtZU9ubHkpXG4gICAgcmV0dXJuIChpc0RvY3VtZW50KGVsZW1lbnQpICYmIGlzU2ltcGxlICYmIG1heWJlSUQpID9cbiAgICAgICggKGZvdW5kID0gZWxlbWVudC5nZXRFbGVtZW50QnlJZChuYW1lT25seSkpID8gW2ZvdW5kXSA6IFtdICkgOlxuICAgICAgKGVsZW1lbnQubm9kZVR5cGUgIT09IDEgJiYgZWxlbWVudC5ub2RlVHlwZSAhPT0gOSkgPyBbXSA6XG4gICAgICBzbGljZS5jYWxsKFxuICAgICAgICBpc1NpbXBsZSAmJiAhbWF5YmVJRCA/XG4gICAgICAgICAgbWF5YmVDbGFzcyA/IGVsZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShuYW1lT25seSkgOiAvLyBJZiBpdCdzIHNpbXBsZSwgaXQgY291bGQgYmUgYSBjbGFzc1xuICAgICAgICAgIGVsZW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoc2VsZWN0b3IpIDogLy8gT3IgYSB0YWdcbiAgICAgICAgICBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpIC8vIE9yIGl0J3Mgbm90IHNpbXBsZSwgYW5kIHdlIG5lZWQgdG8gcXVlcnkgYWxsXG4gICAgICApXG4gIH1cblxuICBmdW5jdGlvbiBmaWx0ZXJlZChub2Rlcywgc2VsZWN0b3IpIHtcbiAgICByZXR1cm4gc2VsZWN0b3IgPT0gbnVsbCA/ICQobm9kZXMpIDogJChub2RlcykuZmlsdGVyKHNlbGVjdG9yKVxuICB9XG5cbiAgJC5jb250YWlucyA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jb250YWlucyA/XG4gICAgZnVuY3Rpb24ocGFyZW50LCBub2RlKSB7XG4gICAgICByZXR1cm4gcGFyZW50ICE9PSBub2RlICYmIHBhcmVudC5jb250YWlucyhub2RlKVxuICAgIH0gOlxuICAgIGZ1bmN0aW9uKHBhcmVudCwgbm9kZSkge1xuICAgICAgd2hpbGUgKG5vZGUgJiYgKG5vZGUgPSBub2RlLnBhcmVudE5vZGUpKVxuICAgICAgICBpZiAobm9kZSA9PT0gcGFyZW50KSByZXR1cm4gdHJ1ZVxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gIGZ1bmN0aW9uIGZ1bmNBcmcoY29udGV4dCwgYXJnLCBpZHgsIHBheWxvYWQpIHtcbiAgICByZXR1cm4gaXNGdW5jdGlvbihhcmcpID8gYXJnLmNhbGwoY29udGV4dCwgaWR4LCBwYXlsb2FkKSA6IGFyZ1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0QXR0cmlidXRlKG5vZGUsIG5hbWUsIHZhbHVlKSB7XG4gICAgdmFsdWUgPT0gbnVsbCA/IG5vZGUucmVtb3ZlQXR0cmlidXRlKG5hbWUpIDogbm9kZS5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpXG4gIH1cblxuICAvLyBhY2Nlc3MgY2xhc3NOYW1lIHByb3BlcnR5IHdoaWxlIHJlc3BlY3RpbmcgU1ZHQW5pbWF0ZWRTdHJpbmdcbiAgZnVuY3Rpb24gY2xhc3NOYW1lKG5vZGUsIHZhbHVlKXtcbiAgICB2YXIga2xhc3MgPSBub2RlLmNsYXNzTmFtZSxcbiAgICAgICAgc3ZnICAgPSBrbGFzcyAmJiBrbGFzcy5iYXNlVmFsICE9PSB1bmRlZmluZWRcblxuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gc3ZnID8ga2xhc3MuYmFzZVZhbCA6IGtsYXNzXG4gICAgc3ZnID8gKGtsYXNzLmJhc2VWYWwgPSB2YWx1ZSkgOiAobm9kZS5jbGFzc05hbWUgPSB2YWx1ZSlcbiAgfVxuXG4gIC8vIFwidHJ1ZVwiICA9PiB0cnVlXG4gIC8vIFwiZmFsc2VcIiA9PiBmYWxzZVxuICAvLyBcIm51bGxcIiAgPT4gbnVsbFxuICAvLyBcIjQyXCIgICAgPT4gNDJcbiAgLy8gXCI0Mi41XCIgID0+IDQyLjVcbiAgLy8gXCIwOFwiICAgID0+IFwiMDhcIlxuICAvLyBKU09OICAgID0+IHBhcnNlIGlmIHZhbGlkXG4gIC8vIFN0cmluZyAgPT4gc2VsZlxuICBmdW5jdGlvbiBkZXNlcmlhbGl6ZVZhbHVlKHZhbHVlKSB7XG4gICAgdmFyIG51bVxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gdmFsdWUgP1xuICAgICAgICB2YWx1ZSA9PSBcInRydWVcIiB8fFxuICAgICAgICAoIHZhbHVlID09IFwiZmFsc2VcIiA/IGZhbHNlIDpcbiAgICAgICAgICB2YWx1ZSA9PSBcIm51bGxcIiA/IG51bGwgOlxuICAgICAgICAgICEvXjAvLnRlc3QodmFsdWUpICYmICFpc05hTihudW0gPSBOdW1iZXIodmFsdWUpKSA/IG51bSA6XG4gICAgICAgICAgL15bXFxbXFx7XS8udGVzdCh2YWx1ZSkgPyAkLnBhcnNlSlNPTih2YWx1ZSkgOlxuICAgICAgICAgIHZhbHVlIClcbiAgICAgICAgOiB2YWx1ZVxuICAgIH0gY2F0Y2goZSkge1xuICAgICAgcmV0dXJuIHZhbHVlXG4gICAgfVxuICB9XG5cbiAgJC50eXBlID0gdHlwZVxuICAkLmlzRnVuY3Rpb24gPSBpc0Z1bmN0aW9uXG4gICQuaXNXaW5kb3cgPSBpc1dpbmRvd1xuICAkLmlzQXJyYXkgPSBpc0FycmF5XG4gICQuaXNQbGFpbk9iamVjdCA9IGlzUGxhaW5PYmplY3RcblxuICAkLmlzRW1wdHlPYmplY3QgPSBmdW5jdGlvbihvYmopIHtcbiAgICB2YXIgbmFtZVxuICAgIGZvciAobmFtZSBpbiBvYmopIHJldHVybiBmYWxzZVxuICAgIHJldHVybiB0cnVlXG4gIH1cblxuICAkLmluQXJyYXkgPSBmdW5jdGlvbihlbGVtLCBhcnJheSwgaSl7XG4gICAgcmV0dXJuIGVtcHR5QXJyYXkuaW5kZXhPZi5jYWxsKGFycmF5LCBlbGVtLCBpKVxuICB9XG5cbiAgJC5jYW1lbENhc2UgPSBjYW1lbGl6ZVxuICAkLnRyaW0gPSBmdW5jdGlvbihzdHIpIHtcbiAgICByZXR1cm4gc3RyID09IG51bGwgPyBcIlwiIDogU3RyaW5nLnByb3RvdHlwZS50cmltLmNhbGwoc3RyKVxuICB9XG5cbiAgLy8gcGx1Z2luIGNvbXBhdGliaWxpdHlcbiAgJC51dWlkID0gMFxuICAkLnN1cHBvcnQgPSB7IH1cbiAgJC5leHByID0geyB9XG5cbiAgJC5tYXAgPSBmdW5jdGlvbihlbGVtZW50cywgY2FsbGJhY2spe1xuICAgIHZhciB2YWx1ZSwgdmFsdWVzID0gW10sIGksIGtleVxuICAgIGlmIChsaWtlQXJyYXkoZWxlbWVudHMpKVxuICAgICAgZm9yIChpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhbHVlID0gY2FsbGJhY2soZWxlbWVudHNbaV0sIGkpXG4gICAgICAgIGlmICh2YWx1ZSAhPSBudWxsKSB2YWx1ZXMucHVzaCh2YWx1ZSlcbiAgICAgIH1cbiAgICBlbHNlXG4gICAgICBmb3IgKGtleSBpbiBlbGVtZW50cykge1xuICAgICAgICB2YWx1ZSA9IGNhbGxiYWNrKGVsZW1lbnRzW2tleV0sIGtleSlcbiAgICAgICAgaWYgKHZhbHVlICE9IG51bGwpIHZhbHVlcy5wdXNoKHZhbHVlKVxuICAgICAgfVxuICAgIHJldHVybiBmbGF0dGVuKHZhbHVlcylcbiAgfVxuXG4gICQuZWFjaCA9IGZ1bmN0aW9uKGVsZW1lbnRzLCBjYWxsYmFjayl7XG4gICAgdmFyIGksIGtleVxuICAgIGlmIChsaWtlQXJyYXkoZWxlbWVudHMpKSB7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspXG4gICAgICAgIGlmIChjYWxsYmFjay5jYWxsKGVsZW1lbnRzW2ldLCBpLCBlbGVtZW50c1tpXSkgPT09IGZhbHNlKSByZXR1cm4gZWxlbWVudHNcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChrZXkgaW4gZWxlbWVudHMpXG4gICAgICAgIGlmIChjYWxsYmFjay5jYWxsKGVsZW1lbnRzW2tleV0sIGtleSwgZWxlbWVudHNba2V5XSkgPT09IGZhbHNlKSByZXR1cm4gZWxlbWVudHNcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudHNcbiAgfVxuXG4gICQuZ3JlcCA9IGZ1bmN0aW9uKGVsZW1lbnRzLCBjYWxsYmFjayl7XG4gICAgcmV0dXJuIGZpbHRlci5jYWxsKGVsZW1lbnRzLCBjYWxsYmFjaylcbiAgfVxuXG4gIGlmICh3aW5kb3cuSlNPTikgJC5wYXJzZUpTT04gPSBKU09OLnBhcnNlXG5cbiAgLy8gUG9wdWxhdGUgdGhlIGNsYXNzMnR5cGUgbWFwXG4gICQuZWFjaChcIkJvb2xlYW4gTnVtYmVyIFN0cmluZyBGdW5jdGlvbiBBcnJheSBEYXRlIFJlZ0V4cCBPYmplY3QgRXJyb3JcIi5zcGxpdChcIiBcIiksIGZ1bmN0aW9uKGksIG5hbWUpIHtcbiAgICBjbGFzczJ0eXBlWyBcIltvYmplY3QgXCIgKyBuYW1lICsgXCJdXCIgXSA9IG5hbWUudG9Mb3dlckNhc2UoKVxuICB9KVxuXG4gIC8vIERlZmluZSBtZXRob2RzIHRoYXQgd2lsbCBiZSBhdmFpbGFibGUgb24gYWxsXG4gIC8vIFplcHRvIGNvbGxlY3Rpb25zXG4gICQuZm4gPSB7XG4gICAgLy8gQmVjYXVzZSBhIGNvbGxlY3Rpb24gYWN0cyBsaWtlIGFuIGFycmF5XG4gICAgLy8gY29weSBvdmVyIHRoZXNlIHVzZWZ1bCBhcnJheSBmdW5jdGlvbnMuXG4gICAgZm9yRWFjaDogZW1wdHlBcnJheS5mb3JFYWNoLFxuICAgIHJlZHVjZTogZW1wdHlBcnJheS5yZWR1Y2UsXG4gICAgcHVzaDogZW1wdHlBcnJheS5wdXNoLFxuICAgIHNvcnQ6IGVtcHR5QXJyYXkuc29ydCxcbiAgICBpbmRleE9mOiBlbXB0eUFycmF5LmluZGV4T2YsXG4gICAgY29uY2F0OiBlbXB0eUFycmF5LmNvbmNhdCxcblxuICAgIC8vIGBtYXBgIGFuZCBgc2xpY2VgIGluIHRoZSBqUXVlcnkgQVBJIHdvcmsgZGlmZmVyZW50bHlcbiAgICAvLyBmcm9tIHRoZWlyIGFycmF5IGNvdW50ZXJwYXJ0c1xuICAgIG1hcDogZnVuY3Rpb24oZm4pe1xuICAgICAgcmV0dXJuICQoJC5tYXAodGhpcywgZnVuY3Rpb24oZWwsIGkpeyByZXR1cm4gZm4uY2FsbChlbCwgaSwgZWwpIH0pKVxuICAgIH0sXG4gICAgc2xpY2U6IGZ1bmN0aW9uKCl7XG4gICAgICByZXR1cm4gJChzbGljZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKVxuICAgIH0sXG5cbiAgICByZWFkeTogZnVuY3Rpb24oY2FsbGJhY2spe1xuICAgICAgLy8gbmVlZCB0byBjaGVjayBpZiBkb2N1bWVudC5ib2R5IGV4aXN0cyBmb3IgSUUgYXMgdGhhdCBicm93c2VyIHJlcG9ydHNcbiAgICAgIC8vIGRvY3VtZW50IHJlYWR5IHdoZW4gaXQgaGFzbid0IHlldCBjcmVhdGVkIHRoZSBib2R5IGVsZW1lbnRcbiAgICAgIGlmIChyZWFkeVJFLnRlc3QoZG9jdW1lbnQucmVhZHlTdGF0ZSkgJiYgZG9jdW1lbnQuYm9keSkgY2FsbGJhY2soJClcbiAgICAgIGVsc2UgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCl7IGNhbGxiYWNrKCQpIH0sIGZhbHNlKVxuICAgICAgcmV0dXJuIHRoaXNcbiAgICB9LFxuICAgIGdldDogZnVuY3Rpb24oaWR4KXtcbiAgICAgIHJldHVybiBpZHggPT09IHVuZGVmaW5lZCA/IHNsaWNlLmNhbGwodGhpcykgOiB0aGlzW2lkeCA+PSAwID8gaWR4IDogaWR4ICsgdGhpcy5sZW5ndGhdXG4gICAgfSxcbiAgICB0b0FycmF5OiBmdW5jdGlvbigpeyByZXR1cm4gdGhpcy5nZXQoKSB9LFxuICAgIHNpemU6IGZ1bmN0aW9uKCl7XG4gICAgICByZXR1cm4gdGhpcy5sZW5ndGhcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24oKXtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgaWYgKHRoaXMucGFyZW50Tm9kZSAhPSBudWxsKVxuICAgICAgICAgIHRoaXMucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzKVxuICAgICAgfSlcbiAgICB9LFxuICAgIGVhY2g6IGZ1bmN0aW9uKGNhbGxiYWNrKXtcbiAgICAgIGVtcHR5QXJyYXkuZXZlcnkuY2FsbCh0aGlzLCBmdW5jdGlvbihlbCwgaWR4KXtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrLmNhbGwoZWwsIGlkeCwgZWwpICE9PSBmYWxzZVxuICAgICAgfSlcbiAgICAgIHJldHVybiB0aGlzXG4gICAgfSxcbiAgICBmaWx0ZXI6IGZ1bmN0aW9uKHNlbGVjdG9yKXtcbiAgICAgIGlmIChpc0Z1bmN0aW9uKHNlbGVjdG9yKSkgcmV0dXJuIHRoaXMubm90KHRoaXMubm90KHNlbGVjdG9yKSlcbiAgICAgIHJldHVybiAkKGZpbHRlci5jYWxsKHRoaXMsIGZ1bmN0aW9uKGVsZW1lbnQpe1xuICAgICAgICByZXR1cm4gemVwdG8ubWF0Y2hlcyhlbGVtZW50LCBzZWxlY3RvcilcbiAgICAgIH0pKVxuICAgIH0sXG4gICAgYWRkOiBmdW5jdGlvbihzZWxlY3Rvcixjb250ZXh0KXtcbiAgICAgIHJldHVybiAkKHVuaXEodGhpcy5jb25jYXQoJChzZWxlY3Rvcixjb250ZXh0KSkpKVxuICAgIH0sXG4gICAgaXM6IGZ1bmN0aW9uKHNlbGVjdG9yKXtcbiAgICAgIHJldHVybiB0aGlzLmxlbmd0aCA+IDAgJiYgemVwdG8ubWF0Y2hlcyh0aGlzWzBdLCBzZWxlY3RvcilcbiAgICB9LFxuICAgIG5vdDogZnVuY3Rpb24oc2VsZWN0b3Ipe1xuICAgICAgdmFyIG5vZGVzPVtdXG4gICAgICBpZiAoaXNGdW5jdGlvbihzZWxlY3RvcikgJiYgc2VsZWN0b3IuY2FsbCAhPT0gdW5kZWZpbmVkKVxuICAgICAgICB0aGlzLmVhY2goZnVuY3Rpb24oaWR4KXtcbiAgICAgICAgICBpZiAoIXNlbGVjdG9yLmNhbGwodGhpcyxpZHgpKSBub2Rlcy5wdXNoKHRoaXMpXG4gICAgICAgIH0pXG4gICAgICBlbHNlIHtcbiAgICAgICAgdmFyIGV4Y2x1ZGVzID0gdHlwZW9mIHNlbGVjdG9yID09ICdzdHJpbmcnID8gdGhpcy5maWx0ZXIoc2VsZWN0b3IpIDpcbiAgICAgICAgICAobGlrZUFycmF5KHNlbGVjdG9yKSAmJiBpc0Z1bmN0aW9uKHNlbGVjdG9yLml0ZW0pKSA/IHNsaWNlLmNhbGwoc2VsZWN0b3IpIDogJChzZWxlY3RvcilcbiAgICAgICAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKGVsKXtcbiAgICAgICAgICBpZiAoZXhjbHVkZXMuaW5kZXhPZihlbCkgPCAwKSBub2Rlcy5wdXNoKGVsKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgcmV0dXJuICQobm9kZXMpXG4gICAgfSxcbiAgICBoYXM6IGZ1bmN0aW9uKHNlbGVjdG9yKXtcbiAgICAgIHJldHVybiB0aGlzLmZpbHRlcihmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gaXNPYmplY3Qoc2VsZWN0b3IpID9cbiAgICAgICAgICAkLmNvbnRhaW5zKHRoaXMsIHNlbGVjdG9yKSA6XG4gICAgICAgICAgJCh0aGlzKS5maW5kKHNlbGVjdG9yKS5zaXplKClcbiAgICAgIH0pXG4gICAgfSxcbiAgICBlcTogZnVuY3Rpb24oaWR4KXtcbiAgICAgIHJldHVybiBpZHggPT09IC0xID8gdGhpcy5zbGljZShpZHgpIDogdGhpcy5zbGljZShpZHgsICsgaWR4ICsgMSlcbiAgICB9LFxuICAgIGZpcnN0OiBmdW5jdGlvbigpe1xuICAgICAgdmFyIGVsID0gdGhpc1swXVxuICAgICAgcmV0dXJuIGVsICYmICFpc09iamVjdChlbCkgPyBlbCA6ICQoZWwpXG4gICAgfSxcbiAgICBsYXN0OiBmdW5jdGlvbigpe1xuICAgICAgdmFyIGVsID0gdGhpc1t0aGlzLmxlbmd0aCAtIDFdXG4gICAgICByZXR1cm4gZWwgJiYgIWlzT2JqZWN0KGVsKSA/IGVsIDogJChlbClcbiAgICB9LFxuICAgIGZpbmQ6IGZ1bmN0aW9uKHNlbGVjdG9yKXtcbiAgICAgIHZhciByZXN1bHQsICR0aGlzID0gdGhpc1xuICAgICAgaWYgKCFzZWxlY3RvcikgcmVzdWx0ID0gW11cbiAgICAgIGVsc2UgaWYgKHR5cGVvZiBzZWxlY3RvciA9PSAnb2JqZWN0JylcbiAgICAgICAgcmVzdWx0ID0gJChzZWxlY3RvcikuZmlsdGVyKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgdmFyIG5vZGUgPSB0aGlzXG4gICAgICAgICAgcmV0dXJuIGVtcHR5QXJyYXkuc29tZS5jYWxsKCR0aGlzLCBmdW5jdGlvbihwYXJlbnQpe1xuICAgICAgICAgICAgcmV0dXJuICQuY29udGFpbnMocGFyZW50LCBub2RlKVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICBlbHNlIGlmICh0aGlzLmxlbmd0aCA9PSAxKSByZXN1bHQgPSAkKHplcHRvLnFzYSh0aGlzWzBdLCBzZWxlY3RvcikpXG4gICAgICBlbHNlIHJlc3VsdCA9IHRoaXMubWFwKGZ1bmN0aW9uKCl7IHJldHVybiB6ZXB0by5xc2EodGhpcywgc2VsZWN0b3IpIH0pXG4gICAgICByZXR1cm4gcmVzdWx0XG4gICAgfSxcbiAgICBjbG9zZXN0OiBmdW5jdGlvbihzZWxlY3RvciwgY29udGV4dCl7XG4gICAgICB2YXIgbm9kZSA9IHRoaXNbMF0sIGNvbGxlY3Rpb24gPSBmYWxzZVxuICAgICAgaWYgKHR5cGVvZiBzZWxlY3RvciA9PSAnb2JqZWN0JykgY29sbGVjdGlvbiA9ICQoc2VsZWN0b3IpXG4gICAgICB3aGlsZSAobm9kZSAmJiAhKGNvbGxlY3Rpb24gPyBjb2xsZWN0aW9uLmluZGV4T2Yobm9kZSkgPj0gMCA6IHplcHRvLm1hdGNoZXMobm9kZSwgc2VsZWN0b3IpKSlcbiAgICAgICAgbm9kZSA9IG5vZGUgIT09IGNvbnRleHQgJiYgIWlzRG9jdW1lbnQobm9kZSkgJiYgbm9kZS5wYXJlbnROb2RlXG4gICAgICByZXR1cm4gJChub2RlKVxuICAgIH0sXG4gICAgcGFyZW50czogZnVuY3Rpb24oc2VsZWN0b3Ipe1xuICAgICAgdmFyIGFuY2VzdG9ycyA9IFtdLCBub2RlcyA9IHRoaXNcbiAgICAgIHdoaWxlIChub2Rlcy5sZW5ndGggPiAwKVxuICAgICAgICBub2RlcyA9ICQubWFwKG5vZGVzLCBmdW5jdGlvbihub2RlKXtcbiAgICAgICAgICBpZiAoKG5vZGUgPSBub2RlLnBhcmVudE5vZGUpICYmICFpc0RvY3VtZW50KG5vZGUpICYmIGFuY2VzdG9ycy5pbmRleE9mKG5vZGUpIDwgMCkge1xuICAgICAgICAgICAgYW5jZXN0b3JzLnB1c2gobm9kZSlcbiAgICAgICAgICAgIHJldHVybiBub2RlXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgcmV0dXJuIGZpbHRlcmVkKGFuY2VzdG9ycywgc2VsZWN0b3IpXG4gICAgfSxcbiAgICBwYXJlbnQ6IGZ1bmN0aW9uKHNlbGVjdG9yKXtcbiAgICAgIHJldHVybiBmaWx0ZXJlZCh1bmlxKHRoaXMucGx1Y2soJ3BhcmVudE5vZGUnKSksIHNlbGVjdG9yKVxuICAgIH0sXG4gICAgY2hpbGRyZW46IGZ1bmN0aW9uKHNlbGVjdG9yKXtcbiAgICAgIHJldHVybiBmaWx0ZXJlZCh0aGlzLm1hcChmdW5jdGlvbigpeyByZXR1cm4gY2hpbGRyZW4odGhpcykgfSksIHNlbGVjdG9yKVxuICAgIH0sXG4gICAgY29udGVudHM6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKCkgeyByZXR1cm4gc2xpY2UuY2FsbCh0aGlzLmNoaWxkTm9kZXMpIH0pXG4gICAgfSxcbiAgICBzaWJsaW5nczogZnVuY3Rpb24oc2VsZWN0b3Ipe1xuICAgICAgcmV0dXJuIGZpbHRlcmVkKHRoaXMubWFwKGZ1bmN0aW9uKGksIGVsKXtcbiAgICAgICAgcmV0dXJuIGZpbHRlci5jYWxsKGNoaWxkcmVuKGVsLnBhcmVudE5vZGUpLCBmdW5jdGlvbihjaGlsZCl7IHJldHVybiBjaGlsZCE9PWVsIH0pXG4gICAgICB9KSwgc2VsZWN0b3IpXG4gICAgfSxcbiAgICBlbXB0eTogZnVuY3Rpb24oKXtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXsgdGhpcy5pbm5lckhUTUwgPSAnJyB9KVxuICAgIH0sXG4gICAgLy8gYHBsdWNrYCBpcyBib3Jyb3dlZCBmcm9tIFByb3RvdHlwZS5qc1xuICAgIHBsdWNrOiBmdW5jdGlvbihwcm9wZXJ0eSl7XG4gICAgICByZXR1cm4gJC5tYXAodGhpcywgZnVuY3Rpb24oZWwpeyByZXR1cm4gZWxbcHJvcGVydHldIH0pXG4gICAgfSxcbiAgICBzaG93OiBmdW5jdGlvbigpe1xuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICB0aGlzLnN0eWxlLmRpc3BsYXkgPT0gXCJub25lXCIgJiYgKHRoaXMuc3R5bGUuZGlzcGxheSA9ICcnKVxuICAgICAgICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLCAnJykuZ2V0UHJvcGVydHlWYWx1ZShcImRpc3BsYXlcIikgPT0gXCJub25lXCIpXG4gICAgICAgICAgdGhpcy5zdHlsZS5kaXNwbGF5ID0gZGVmYXVsdERpc3BsYXkodGhpcy5ub2RlTmFtZSlcbiAgICAgIH0pXG4gICAgfSxcbiAgICByZXBsYWNlV2l0aDogZnVuY3Rpb24obmV3Q29udGVudCl7XG4gICAgICByZXR1cm4gdGhpcy5iZWZvcmUobmV3Q29udGVudCkucmVtb3ZlKClcbiAgICB9LFxuICAgIHdyYXA6IGZ1bmN0aW9uKHN0cnVjdHVyZSl7XG4gICAgICB2YXIgZnVuYyA9IGlzRnVuY3Rpb24oc3RydWN0dXJlKVxuICAgICAgaWYgKHRoaXNbMF0gJiYgIWZ1bmMpXG4gICAgICAgIHZhciBkb20gICA9ICQoc3RydWN0dXJlKS5nZXQoMCksXG4gICAgICAgICAgICBjbG9uZSA9IGRvbS5wYXJlbnROb2RlIHx8IHRoaXMubGVuZ3RoID4gMVxuXG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGluZGV4KXtcbiAgICAgICAgJCh0aGlzKS53cmFwQWxsKFxuICAgICAgICAgIGZ1bmMgPyBzdHJ1Y3R1cmUuY2FsbCh0aGlzLCBpbmRleCkgOlxuICAgICAgICAgICAgY2xvbmUgPyBkb20uY2xvbmVOb2RlKHRydWUpIDogZG9tXG4gICAgICAgIClcbiAgICAgIH0pXG4gICAgfSxcbiAgICB3cmFwQWxsOiBmdW5jdGlvbihzdHJ1Y3R1cmUpe1xuICAgICAgaWYgKHRoaXNbMF0pIHtcbiAgICAgICAgJCh0aGlzWzBdKS5iZWZvcmUoc3RydWN0dXJlID0gJChzdHJ1Y3R1cmUpKVxuICAgICAgICB2YXIgY2hpbGRyZW5cbiAgICAgICAgLy8gZHJpbGwgZG93biB0byB0aGUgaW5tb3N0IGVsZW1lbnRcbiAgICAgICAgd2hpbGUgKChjaGlsZHJlbiA9IHN0cnVjdHVyZS5jaGlsZHJlbigpKS5sZW5ndGgpIHN0cnVjdHVyZSA9IGNoaWxkcmVuLmZpcnN0KClcbiAgICAgICAgJChzdHJ1Y3R1cmUpLmFwcGVuZCh0aGlzKVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXNcbiAgICB9LFxuICAgIHdyYXBJbm5lcjogZnVuY3Rpb24oc3RydWN0dXJlKXtcbiAgICAgIHZhciBmdW5jID0gaXNGdW5jdGlvbihzdHJ1Y3R1cmUpXG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGluZGV4KXtcbiAgICAgICAgdmFyIHNlbGYgPSAkKHRoaXMpLCBjb250ZW50cyA9IHNlbGYuY29udGVudHMoKSxcbiAgICAgICAgICAgIGRvbSAgPSBmdW5jID8gc3RydWN0dXJlLmNhbGwodGhpcywgaW5kZXgpIDogc3RydWN0dXJlXG4gICAgICAgIGNvbnRlbnRzLmxlbmd0aCA/IGNvbnRlbnRzLndyYXBBbGwoZG9tKSA6IHNlbGYuYXBwZW5kKGRvbSlcbiAgICAgIH0pXG4gICAgfSxcbiAgICB1bndyYXA6IGZ1bmN0aW9uKCl7XG4gICAgICB0aGlzLnBhcmVudCgpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgJCh0aGlzKS5yZXBsYWNlV2l0aCgkKHRoaXMpLmNoaWxkcmVuKCkpXG4gICAgICB9KVxuICAgICAgcmV0dXJuIHRoaXNcbiAgICB9LFxuICAgIGNsb25lOiBmdW5jdGlvbigpe1xuICAgICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzLmNsb25lTm9kZSh0cnVlKSB9KVxuICAgIH0sXG4gICAgaGlkZTogZnVuY3Rpb24oKXtcbiAgICAgIHJldHVybiB0aGlzLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpXG4gICAgfSxcbiAgICB0b2dnbGU6IGZ1bmN0aW9uKHNldHRpbmcpe1xuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICB2YXIgZWwgPSAkKHRoaXMpXG4gICAgICAgIDsoc2V0dGluZyA9PT0gdW5kZWZpbmVkID8gZWwuY3NzKFwiZGlzcGxheVwiKSA9PSBcIm5vbmVcIiA6IHNldHRpbmcpID8gZWwuc2hvdygpIDogZWwuaGlkZSgpXG4gICAgICB9KVxuICAgIH0sXG4gICAgcHJldjogZnVuY3Rpb24oc2VsZWN0b3IpeyByZXR1cm4gJCh0aGlzLnBsdWNrKCdwcmV2aW91c0VsZW1lbnRTaWJsaW5nJykpLmZpbHRlcihzZWxlY3RvciB8fCAnKicpIH0sXG4gICAgbmV4dDogZnVuY3Rpb24oc2VsZWN0b3IpeyByZXR1cm4gJCh0aGlzLnBsdWNrKCduZXh0RWxlbWVudFNpYmxpbmcnKSkuZmlsdGVyKHNlbGVjdG9yIHx8ICcqJykgfSxcbiAgICBodG1sOiBmdW5jdGlvbihodG1sKXtcbiAgICAgIHJldHVybiAwIGluIGFyZ3VtZW50cyA/XG4gICAgICAgIHRoaXMuZWFjaChmdW5jdGlvbihpZHgpe1xuICAgICAgICAgIHZhciBvcmlnaW5IdG1sID0gdGhpcy5pbm5lckhUTUxcbiAgICAgICAgICAkKHRoaXMpLmVtcHR5KCkuYXBwZW5kKCBmdW5jQXJnKHRoaXMsIGh0bWwsIGlkeCwgb3JpZ2luSHRtbCkgKVxuICAgICAgICB9KSA6XG4gICAgICAgICgwIGluIHRoaXMgPyB0aGlzWzBdLmlubmVySFRNTCA6IG51bGwpXG4gICAgfSxcbiAgICB0ZXh0OiBmdW5jdGlvbih0ZXh0KXtcbiAgICAgIHJldHVybiAwIGluIGFyZ3VtZW50cyA/XG4gICAgICAgIHRoaXMuZWFjaChmdW5jdGlvbihpZHgpe1xuICAgICAgICAgIHZhciBuZXdUZXh0ID0gZnVuY0FyZyh0aGlzLCB0ZXh0LCBpZHgsIHRoaXMudGV4dENvbnRlbnQpXG4gICAgICAgICAgdGhpcy50ZXh0Q29udGVudCA9IG5ld1RleHQgPT0gbnVsbCA/ICcnIDogJycrbmV3VGV4dFxuICAgICAgICB9KSA6XG4gICAgICAgICgwIGluIHRoaXMgPyB0aGlzWzBdLnRleHRDb250ZW50IDogbnVsbClcbiAgICB9LFxuICAgIGF0dHI6IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKXtcbiAgICAgIHZhciByZXN1bHRcbiAgICAgIHJldHVybiAodHlwZW9mIG5hbWUgPT0gJ3N0cmluZycgJiYgISgxIGluIGFyZ3VtZW50cykpID9cbiAgICAgICAgKCF0aGlzLmxlbmd0aCB8fCB0aGlzWzBdLm5vZGVUeXBlICE9PSAxID8gdW5kZWZpbmVkIDpcbiAgICAgICAgICAoIShyZXN1bHQgPSB0aGlzWzBdLmdldEF0dHJpYnV0ZShuYW1lKSkgJiYgbmFtZSBpbiB0aGlzWzBdKSA/IHRoaXNbMF1bbmFtZV0gOiByZXN1bHRcbiAgICAgICAgKSA6XG4gICAgICAgIHRoaXMuZWFjaChmdW5jdGlvbihpZHgpe1xuICAgICAgICAgIGlmICh0aGlzLm5vZGVUeXBlICE9PSAxKSByZXR1cm5cbiAgICAgICAgICBpZiAoaXNPYmplY3QobmFtZSkpIGZvciAoa2V5IGluIG5hbWUpIHNldEF0dHJpYnV0ZSh0aGlzLCBrZXksIG5hbWVba2V5XSlcbiAgICAgICAgICBlbHNlIHNldEF0dHJpYnV0ZSh0aGlzLCBuYW1lLCBmdW5jQXJnKHRoaXMsIHZhbHVlLCBpZHgsIHRoaXMuZ2V0QXR0cmlidXRlKG5hbWUpKSlcbiAgICAgICAgfSlcbiAgICB9LFxuICAgIHJlbW92ZUF0dHI6IGZ1bmN0aW9uKG5hbWUpe1xuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpeyB0aGlzLm5vZGVUeXBlID09PSAxICYmIHNldEF0dHJpYnV0ZSh0aGlzLCBuYW1lKSB9KVxuICAgIH0sXG4gICAgcHJvcDogZnVuY3Rpb24obmFtZSwgdmFsdWUpe1xuICAgICAgbmFtZSA9IHByb3BNYXBbbmFtZV0gfHwgbmFtZVxuICAgICAgcmV0dXJuICgxIGluIGFyZ3VtZW50cykgP1xuICAgICAgICB0aGlzLmVhY2goZnVuY3Rpb24oaWR4KXtcbiAgICAgICAgICB0aGlzW25hbWVdID0gZnVuY0FyZyh0aGlzLCB2YWx1ZSwgaWR4LCB0aGlzW25hbWVdKVxuICAgICAgICB9KSA6XG4gICAgICAgICh0aGlzWzBdICYmIHRoaXNbMF1bbmFtZV0pXG4gICAgfSxcbiAgICBkYXRhOiBmdW5jdGlvbihuYW1lLCB2YWx1ZSl7XG4gICAgICB2YXIgYXR0ck5hbWUgPSAnZGF0YS0nICsgbmFtZS5yZXBsYWNlKGNhcGl0YWxSRSwgJy0kMScpLnRvTG93ZXJDYXNlKClcblxuICAgICAgdmFyIGRhdGEgPSAoMSBpbiBhcmd1bWVudHMpID9cbiAgICAgICAgdGhpcy5hdHRyKGF0dHJOYW1lLCB2YWx1ZSkgOlxuICAgICAgICB0aGlzLmF0dHIoYXR0ck5hbWUpXG5cbiAgICAgIHJldHVybiBkYXRhICE9PSBudWxsID8gZGVzZXJpYWxpemVWYWx1ZShkYXRhKSA6IHVuZGVmaW5lZFxuICAgIH0sXG4gICAgdmFsOiBmdW5jdGlvbih2YWx1ZSl7XG4gICAgICByZXR1cm4gMCBpbiBhcmd1bWVudHMgP1xuICAgICAgICB0aGlzLmVhY2goZnVuY3Rpb24oaWR4KXtcbiAgICAgICAgICB0aGlzLnZhbHVlID0gZnVuY0FyZyh0aGlzLCB2YWx1ZSwgaWR4LCB0aGlzLnZhbHVlKVxuICAgICAgICB9KSA6XG4gICAgICAgICh0aGlzWzBdICYmICh0aGlzWzBdLm11bHRpcGxlID9cbiAgICAgICAgICAgJCh0aGlzWzBdKS5maW5kKCdvcHRpb24nKS5maWx0ZXIoZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXMuc2VsZWN0ZWQgfSkucGx1Y2soJ3ZhbHVlJykgOlxuICAgICAgICAgICB0aGlzWzBdLnZhbHVlKVxuICAgICAgICApXG4gICAgfSxcbiAgICBvZmZzZXQ6IGZ1bmN0aW9uKGNvb3JkaW5hdGVzKXtcbiAgICAgIGlmIChjb29yZGluYXRlcykgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihpbmRleCl7XG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyksXG4gICAgICAgICAgICBjb29yZHMgPSBmdW5jQXJnKHRoaXMsIGNvb3JkaW5hdGVzLCBpbmRleCwgJHRoaXMub2Zmc2V0KCkpLFxuICAgICAgICAgICAgcGFyZW50T2Zmc2V0ID0gJHRoaXMub2Zmc2V0UGFyZW50KCkub2Zmc2V0KCksXG4gICAgICAgICAgICBwcm9wcyA9IHtcbiAgICAgICAgICAgICAgdG9wOiAgY29vcmRzLnRvcCAgLSBwYXJlbnRPZmZzZXQudG9wLFxuICAgICAgICAgICAgICBsZWZ0OiBjb29yZHMubGVmdCAtIHBhcmVudE9mZnNldC5sZWZ0XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgaWYgKCR0aGlzLmNzcygncG9zaXRpb24nKSA9PSAnc3RhdGljJykgcHJvcHNbJ3Bvc2l0aW9uJ10gPSAncmVsYXRpdmUnXG4gICAgICAgICR0aGlzLmNzcyhwcm9wcylcbiAgICAgIH0pXG4gICAgICBpZiAoIXRoaXMubGVuZ3RoKSByZXR1cm4gbnVsbFxuICAgICAgdmFyIG9iaiA9IHRoaXNbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxlZnQ6IG9iai5sZWZ0ICsgd2luZG93LnBhZ2VYT2Zmc2V0LFxuICAgICAgICB0b3A6IG9iai50b3AgKyB3aW5kb3cucGFnZVlPZmZzZXQsXG4gICAgICAgIHdpZHRoOiBNYXRoLnJvdW5kKG9iai53aWR0aCksXG4gICAgICAgIGhlaWdodDogTWF0aC5yb3VuZChvYmouaGVpZ2h0KVxuICAgICAgfVxuICAgIH0sXG4gICAgY3NzOiBmdW5jdGlvbihwcm9wZXJ0eSwgdmFsdWUpe1xuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gdGhpc1swXSwgY29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCwgJycpXG4gICAgICAgIGlmKCFlbGVtZW50KSByZXR1cm5cbiAgICAgICAgaWYgKHR5cGVvZiBwcm9wZXJ0eSA9PSAnc3RyaW5nJylcbiAgICAgICAgICByZXR1cm4gZWxlbWVudC5zdHlsZVtjYW1lbGl6ZShwcm9wZXJ0eSldIHx8IGNvbXB1dGVkU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShwcm9wZXJ0eSlcbiAgICAgICAgZWxzZSBpZiAoaXNBcnJheShwcm9wZXJ0eSkpIHtcbiAgICAgICAgICB2YXIgcHJvcHMgPSB7fVxuICAgICAgICAgICQuZWFjaChpc0FycmF5KHByb3BlcnR5KSA/IHByb3BlcnR5OiBbcHJvcGVydHldLCBmdW5jdGlvbihfLCBwcm9wKXtcbiAgICAgICAgICAgIHByb3BzW3Byb3BdID0gKGVsZW1lbnQuc3R5bGVbY2FtZWxpemUocHJvcCldIHx8IGNvbXB1dGVkU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShwcm9wKSlcbiAgICAgICAgICB9KVxuICAgICAgICAgIHJldHVybiBwcm9wc1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBjc3MgPSAnJ1xuICAgICAgaWYgKHR5cGUocHJvcGVydHkpID09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmICghdmFsdWUgJiYgdmFsdWUgIT09IDApXG4gICAgICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uKCl7IHRoaXMuc3R5bGUucmVtb3ZlUHJvcGVydHkoZGFzaGVyaXplKHByb3BlcnR5KSkgfSlcbiAgICAgICAgZWxzZVxuICAgICAgICAgIGNzcyA9IGRhc2hlcml6ZShwcm9wZXJ0eSkgKyBcIjpcIiArIG1heWJlQWRkUHgocHJvcGVydHksIHZhbHVlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChrZXkgaW4gcHJvcGVydHkpXG4gICAgICAgICAgaWYgKCFwcm9wZXJ0eVtrZXldICYmIHByb3BlcnR5W2tleV0gIT09IDApXG4gICAgICAgICAgICB0aGlzLmVhY2goZnVuY3Rpb24oKXsgdGhpcy5zdHlsZS5yZW1vdmVQcm9wZXJ0eShkYXNoZXJpemUoa2V5KSkgfSlcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICBjc3MgKz0gZGFzaGVyaXplKGtleSkgKyAnOicgKyBtYXliZUFkZFB4KGtleSwgcHJvcGVydHlba2V5XSkgKyAnOydcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpeyB0aGlzLnN0eWxlLmNzc1RleHQgKz0gJzsnICsgY3NzIH0pXG4gICAgfSxcbiAgICBpbmRleDogZnVuY3Rpb24oZWxlbWVudCl7XG4gICAgICByZXR1cm4gZWxlbWVudCA/IHRoaXMuaW5kZXhPZigkKGVsZW1lbnQpWzBdKSA6IHRoaXMucGFyZW50KCkuY2hpbGRyZW4oKS5pbmRleE9mKHRoaXNbMF0pXG4gICAgfSxcbiAgICBoYXNDbGFzczogZnVuY3Rpb24obmFtZSl7XG4gICAgICBpZiAoIW5hbWUpIHJldHVybiBmYWxzZVxuICAgICAgcmV0dXJuIGVtcHR5QXJyYXkuc29tZS5jYWxsKHRoaXMsIGZ1bmN0aW9uKGVsKXtcbiAgICAgICAgcmV0dXJuIHRoaXMudGVzdChjbGFzc05hbWUoZWwpKVxuICAgICAgfSwgY2xhc3NSRShuYW1lKSlcbiAgICB9LFxuICAgIGFkZENsYXNzOiBmdW5jdGlvbihuYW1lKXtcbiAgICAgIGlmICghbmFtZSkgcmV0dXJuIHRoaXNcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oaWR4KXtcbiAgICAgICAgY2xhc3NMaXN0ID0gW11cbiAgICAgICAgdmFyIGNscyA9IGNsYXNzTmFtZSh0aGlzKSwgbmV3TmFtZSA9IGZ1bmNBcmcodGhpcywgbmFtZSwgaWR4LCBjbHMpXG4gICAgICAgIG5ld05hbWUuc3BsaXQoL1xccysvZykuZm9yRWFjaChmdW5jdGlvbihrbGFzcyl7XG4gICAgICAgICAgaWYgKCEkKHRoaXMpLmhhc0NsYXNzKGtsYXNzKSkgY2xhc3NMaXN0LnB1c2goa2xhc3MpXG4gICAgICAgIH0sIHRoaXMpXG4gICAgICAgIGNsYXNzTGlzdC5sZW5ndGggJiYgY2xhc3NOYW1lKHRoaXMsIGNscyArIChjbHMgPyBcIiBcIiA6IFwiXCIpICsgY2xhc3NMaXN0LmpvaW4oXCIgXCIpKVxuICAgICAgfSlcbiAgICB9LFxuICAgIHJlbW92ZUNsYXNzOiBmdW5jdGlvbihuYW1lKXtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oaWR4KXtcbiAgICAgICAgaWYgKG5hbWUgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGNsYXNzTmFtZSh0aGlzLCAnJylcbiAgICAgICAgY2xhc3NMaXN0ID0gY2xhc3NOYW1lKHRoaXMpXG4gICAgICAgIGZ1bmNBcmcodGhpcywgbmFtZSwgaWR4LCBjbGFzc0xpc3QpLnNwbGl0KC9cXHMrL2cpLmZvckVhY2goZnVuY3Rpb24oa2xhc3Mpe1xuICAgICAgICAgIGNsYXNzTGlzdCA9IGNsYXNzTGlzdC5yZXBsYWNlKGNsYXNzUkUoa2xhc3MpLCBcIiBcIilcbiAgICAgICAgfSlcbiAgICAgICAgY2xhc3NOYW1lKHRoaXMsIGNsYXNzTGlzdC50cmltKCkpXG4gICAgICB9KVxuICAgIH0sXG4gICAgdG9nZ2xlQ2xhc3M6IGZ1bmN0aW9uKG5hbWUsIHdoZW4pe1xuICAgICAgaWYgKCFuYW1lKSByZXR1cm4gdGhpc1xuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihpZHgpe1xuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpLCBuYW1lcyA9IGZ1bmNBcmcodGhpcywgbmFtZSwgaWR4LCBjbGFzc05hbWUodGhpcykpXG4gICAgICAgIG5hbWVzLnNwbGl0KC9cXHMrL2cpLmZvckVhY2goZnVuY3Rpb24oa2xhc3Mpe1xuICAgICAgICAgICh3aGVuID09PSB1bmRlZmluZWQgPyAhJHRoaXMuaGFzQ2xhc3Moa2xhc3MpIDogd2hlbikgP1xuICAgICAgICAgICAgJHRoaXMuYWRkQ2xhc3Moa2xhc3MpIDogJHRoaXMucmVtb3ZlQ2xhc3Moa2xhc3MpXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH0sXG4gICAgc2Nyb2xsVG9wOiBmdW5jdGlvbih2YWx1ZSl7XG4gICAgICBpZiAoIXRoaXMubGVuZ3RoKSByZXR1cm5cbiAgICAgIHZhciBoYXNTY3JvbGxUb3AgPSAnc2Nyb2xsVG9wJyBpbiB0aGlzWzBdXG4gICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGhhc1Njcm9sbFRvcCA/IHRoaXNbMF0uc2Nyb2xsVG9wIDogdGhpc1swXS5wYWdlWU9mZnNldFxuICAgICAgcmV0dXJuIHRoaXMuZWFjaChoYXNTY3JvbGxUb3AgP1xuICAgICAgICBmdW5jdGlvbigpeyB0aGlzLnNjcm9sbFRvcCA9IHZhbHVlIH0gOlxuICAgICAgICBmdW5jdGlvbigpeyB0aGlzLnNjcm9sbFRvKHRoaXMuc2Nyb2xsWCwgdmFsdWUpIH0pXG4gICAgfSxcbiAgICBzY3JvbGxMZWZ0OiBmdW5jdGlvbih2YWx1ZSl7XG4gICAgICBpZiAoIXRoaXMubGVuZ3RoKSByZXR1cm5cbiAgICAgIHZhciBoYXNTY3JvbGxMZWZ0ID0gJ3Njcm9sbExlZnQnIGluIHRoaXNbMF1cbiAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gaGFzU2Nyb2xsTGVmdCA/IHRoaXNbMF0uc2Nyb2xsTGVmdCA6IHRoaXNbMF0ucGFnZVhPZmZzZXRcbiAgICAgIHJldHVybiB0aGlzLmVhY2goaGFzU2Nyb2xsTGVmdCA/XG4gICAgICAgIGZ1bmN0aW9uKCl7IHRoaXMuc2Nyb2xsTGVmdCA9IHZhbHVlIH0gOlxuICAgICAgICBmdW5jdGlvbigpeyB0aGlzLnNjcm9sbFRvKHZhbHVlLCB0aGlzLnNjcm9sbFkpIH0pXG4gICAgfSxcbiAgICBwb3NpdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoIXRoaXMubGVuZ3RoKSByZXR1cm5cblxuICAgICAgdmFyIGVsZW0gPSB0aGlzWzBdLFxuICAgICAgICAvLyBHZXQgKnJlYWwqIG9mZnNldFBhcmVudFxuICAgICAgICBvZmZzZXRQYXJlbnQgPSB0aGlzLm9mZnNldFBhcmVudCgpLFxuICAgICAgICAvLyBHZXQgY29ycmVjdCBvZmZzZXRzXG4gICAgICAgIG9mZnNldCAgICAgICA9IHRoaXMub2Zmc2V0KCksXG4gICAgICAgIHBhcmVudE9mZnNldCA9IHJvb3ROb2RlUkUudGVzdChvZmZzZXRQYXJlbnRbMF0ubm9kZU5hbWUpID8geyB0b3A6IDAsIGxlZnQ6IDAgfSA6IG9mZnNldFBhcmVudC5vZmZzZXQoKVxuXG4gICAgICAvLyBTdWJ0cmFjdCBlbGVtZW50IG1hcmdpbnNcbiAgICAgIC8vIG5vdGU6IHdoZW4gYW4gZWxlbWVudCBoYXMgbWFyZ2luOiBhdXRvIHRoZSBvZmZzZXRMZWZ0IGFuZCBtYXJnaW5MZWZ0XG4gICAgICAvLyBhcmUgdGhlIHNhbWUgaW4gU2FmYXJpIGNhdXNpbmcgb2Zmc2V0LmxlZnQgdG8gaW5jb3JyZWN0bHkgYmUgMFxuICAgICAgb2Zmc2V0LnRvcCAgLT0gcGFyc2VGbG9hdCggJChlbGVtKS5jc3MoJ21hcmdpbi10b3AnKSApIHx8IDBcbiAgICAgIG9mZnNldC5sZWZ0IC09IHBhcnNlRmxvYXQoICQoZWxlbSkuY3NzKCdtYXJnaW4tbGVmdCcpICkgfHwgMFxuXG4gICAgICAvLyBBZGQgb2Zmc2V0UGFyZW50IGJvcmRlcnNcbiAgICAgIHBhcmVudE9mZnNldC50b3AgICs9IHBhcnNlRmxvYXQoICQob2Zmc2V0UGFyZW50WzBdKS5jc3MoJ2JvcmRlci10b3Atd2lkdGgnKSApIHx8IDBcbiAgICAgIHBhcmVudE9mZnNldC5sZWZ0ICs9IHBhcnNlRmxvYXQoICQob2Zmc2V0UGFyZW50WzBdKS5jc3MoJ2JvcmRlci1sZWZ0LXdpZHRoJykgKSB8fCAwXG5cbiAgICAgIC8vIFN1YnRyYWN0IHRoZSB0d28gb2Zmc2V0c1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdG9wOiAgb2Zmc2V0LnRvcCAgLSBwYXJlbnRPZmZzZXQudG9wLFxuICAgICAgICBsZWZ0OiBvZmZzZXQubGVmdCAtIHBhcmVudE9mZnNldC5sZWZ0XG4gICAgICB9XG4gICAgfSxcbiAgICBvZmZzZXRQYXJlbnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciBwYXJlbnQgPSB0aGlzLm9mZnNldFBhcmVudCB8fCBkb2N1bWVudC5ib2R5XG4gICAgICAgIHdoaWxlIChwYXJlbnQgJiYgIXJvb3ROb2RlUkUudGVzdChwYXJlbnQubm9kZU5hbWUpICYmICQocGFyZW50KS5jc3MoXCJwb3NpdGlvblwiKSA9PSBcInN0YXRpY1wiKVxuICAgICAgICAgIHBhcmVudCA9IHBhcmVudC5vZmZzZXRQYXJlbnRcbiAgICAgICAgcmV0dXJuIHBhcmVudFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICAvLyBmb3Igbm93XG4gICQuZm4uZGV0YWNoID0gJC5mbi5yZW1vdmVcblxuICAvLyBHZW5lcmF0ZSB0aGUgYHdpZHRoYCBhbmQgYGhlaWdodGAgZnVuY3Rpb25zXG4gIDtbJ3dpZHRoJywgJ2hlaWdodCddLmZvckVhY2goZnVuY3Rpb24oZGltZW5zaW9uKXtcbiAgICB2YXIgZGltZW5zaW9uUHJvcGVydHkgPVxuICAgICAgZGltZW5zaW9uLnJlcGxhY2UoLy4vLCBmdW5jdGlvbihtKXsgcmV0dXJuIG1bMF0udG9VcHBlckNhc2UoKSB9KVxuXG4gICAgJC5mbltkaW1lbnNpb25dID0gZnVuY3Rpb24odmFsdWUpe1xuICAgICAgdmFyIG9mZnNldCwgZWwgPSB0aGlzWzBdXG4gICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGlzV2luZG93KGVsKSA/IGVsWydpbm5lcicgKyBkaW1lbnNpb25Qcm9wZXJ0eV0gOlxuICAgICAgICBpc0RvY3VtZW50KGVsKSA/IGVsLmRvY3VtZW50RWxlbWVudFsnc2Nyb2xsJyArIGRpbWVuc2lvblByb3BlcnR5XSA6XG4gICAgICAgIChvZmZzZXQgPSB0aGlzLm9mZnNldCgpKSAmJiBvZmZzZXRbZGltZW5zaW9uXVxuICAgICAgZWxzZSByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGlkeCl7XG4gICAgICAgIGVsID0gJCh0aGlzKVxuICAgICAgICBlbC5jc3MoZGltZW5zaW9uLCBmdW5jQXJnKHRoaXMsIHZhbHVlLCBpZHgsIGVsW2RpbWVuc2lvbl0oKSkpXG4gICAgICB9KVxuICAgIH1cbiAgfSlcblxuICBmdW5jdGlvbiB0cmF2ZXJzZU5vZGUobm9kZSwgZnVuKSB7XG4gICAgZnVuKG5vZGUpXG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IG5vZGUuY2hpbGROb2Rlcy5sZW5ndGg7IGkgPCBsZW47IGkrKylcbiAgICAgIHRyYXZlcnNlTm9kZShub2RlLmNoaWxkTm9kZXNbaV0sIGZ1bilcbiAgfVxuXG4gIC8vIEdlbmVyYXRlIHRoZSBgYWZ0ZXJgLCBgcHJlcGVuZGAsIGBiZWZvcmVgLCBgYXBwZW5kYCxcbiAgLy8gYGluc2VydEFmdGVyYCwgYGluc2VydEJlZm9yZWAsIGBhcHBlbmRUb2AsIGFuZCBgcHJlcGVuZFRvYCBtZXRob2RzLlxuICBhZGphY2VuY3lPcGVyYXRvcnMuZm9yRWFjaChmdW5jdGlvbihvcGVyYXRvciwgb3BlcmF0b3JJbmRleCkge1xuICAgIHZhciBpbnNpZGUgPSBvcGVyYXRvckluZGV4ICUgMiAvLz0+IHByZXBlbmQsIGFwcGVuZFxuXG4gICAgJC5mbltvcGVyYXRvcl0gPSBmdW5jdGlvbigpe1xuICAgICAgLy8gYXJndW1lbnRzIGNhbiBiZSBub2RlcywgYXJyYXlzIG9mIG5vZGVzLCBaZXB0byBvYmplY3RzIGFuZCBIVE1MIHN0cmluZ3NcbiAgICAgIHZhciBhcmdUeXBlLCBub2RlcyA9ICQubWFwKGFyZ3VtZW50cywgZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgICAgICBhcmdUeXBlID0gdHlwZShhcmcpXG4gICAgICAgICAgICByZXR1cm4gYXJnVHlwZSA9PSBcIm9iamVjdFwiIHx8IGFyZ1R5cGUgPT0gXCJhcnJheVwiIHx8IGFyZyA9PSBudWxsID9cbiAgICAgICAgICAgICAgYXJnIDogemVwdG8uZnJhZ21lbnQoYXJnKVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIHBhcmVudCwgY29weUJ5Q2xvbmUgPSB0aGlzLmxlbmd0aCA+IDFcbiAgICAgIGlmIChub2Rlcy5sZW5ndGggPCAxKSByZXR1cm4gdGhpc1xuXG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKF8sIHRhcmdldCl7XG4gICAgICAgIHBhcmVudCA9IGluc2lkZSA/IHRhcmdldCA6IHRhcmdldC5wYXJlbnROb2RlXG5cbiAgICAgICAgLy8gY29udmVydCBhbGwgbWV0aG9kcyB0byBhIFwiYmVmb3JlXCIgb3BlcmF0aW9uXG4gICAgICAgIHRhcmdldCA9IG9wZXJhdG9ySW5kZXggPT0gMCA/IHRhcmdldC5uZXh0U2libGluZyA6XG4gICAgICAgICAgICAgICAgIG9wZXJhdG9ySW5kZXggPT0gMSA/IHRhcmdldC5maXJzdENoaWxkIDpcbiAgICAgICAgICAgICAgICAgb3BlcmF0b3JJbmRleCA9PSAyID8gdGFyZ2V0IDpcbiAgICAgICAgICAgICAgICAgbnVsbFxuXG4gICAgICAgIHZhciBwYXJlbnRJbkRvY3VtZW50ID0gJC5jb250YWlucyhkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIHBhcmVudClcblxuICAgICAgICBub2Rlcy5mb3JFYWNoKGZ1bmN0aW9uKG5vZGUpe1xuICAgICAgICAgIGlmIChjb3B5QnlDbG9uZSkgbm9kZSA9IG5vZGUuY2xvbmVOb2RlKHRydWUpXG4gICAgICAgICAgZWxzZSBpZiAoIXBhcmVudCkgcmV0dXJuICQobm9kZSkucmVtb3ZlKClcblxuICAgICAgICAgIHBhcmVudC5pbnNlcnRCZWZvcmUobm9kZSwgdGFyZ2V0KVxuICAgICAgICAgIGlmIChwYXJlbnRJbkRvY3VtZW50KSB0cmF2ZXJzZU5vZGUobm9kZSwgZnVuY3Rpb24oZWwpe1xuICAgICAgICAgICAgaWYgKGVsLm5vZGVOYW1lICE9IG51bGwgJiYgZWwubm9kZU5hbWUudG9VcHBlckNhc2UoKSA9PT0gJ1NDUklQVCcgJiZcbiAgICAgICAgICAgICAgICghZWwudHlwZSB8fCBlbC50eXBlID09PSAndGV4dC9qYXZhc2NyaXB0JykgJiYgIWVsLnNyYylcbiAgICAgICAgICAgICAgd2luZG93WydldmFsJ10uY2FsbCh3aW5kb3csIGVsLmlubmVySFRNTClcbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBhZnRlciAgICA9PiBpbnNlcnRBZnRlclxuICAgIC8vIHByZXBlbmQgID0+IHByZXBlbmRUb1xuICAgIC8vIGJlZm9yZSAgID0+IGluc2VydEJlZm9yZVxuICAgIC8vIGFwcGVuZCAgID0+IGFwcGVuZFRvXG4gICAgJC5mbltpbnNpZGUgPyBvcGVyYXRvcisnVG8nIDogJ2luc2VydCcrKG9wZXJhdG9ySW5kZXggPyAnQmVmb3JlJyA6ICdBZnRlcicpXSA9IGZ1bmN0aW9uKGh0bWwpe1xuICAgICAgJChodG1sKVtvcGVyYXRvcl0odGhpcylcbiAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuICB9KVxuXG4gIHplcHRvLloucHJvdG90eXBlID0gJC5mblxuXG4gIC8vIEV4cG9ydCBpbnRlcm5hbCBBUEkgZnVuY3Rpb25zIGluIHRoZSBgJC56ZXB0b2AgbmFtZXNwYWNlXG4gIHplcHRvLnVuaXEgPSB1bmlxXG4gIHplcHRvLmRlc2VyaWFsaXplVmFsdWUgPSBkZXNlcmlhbGl6ZVZhbHVlXG4gICQuemVwdG8gPSB6ZXB0b1xuXG4gIHJldHVybiAkXG59KSgpXG5cbm1vZHVsZS5leHBvcnRzID0gWmVwdG9cblxuOyhmdW5jdGlvbigkKXtcbiAgdmFyIF96aWQgPSAxLCB1bmRlZmluZWQsXG4gICAgICBzbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZSxcbiAgICAgIGlzRnVuY3Rpb24gPSAkLmlzRnVuY3Rpb24sXG4gICAgICBpc1N0cmluZyA9IGZ1bmN0aW9uKG9iail7IHJldHVybiB0eXBlb2Ygb2JqID09ICdzdHJpbmcnIH0sXG4gICAgICBoYW5kbGVycyA9IHt9LFxuICAgICAgc3BlY2lhbEV2ZW50cz17fSxcbiAgICAgIGZvY3VzaW5TdXBwb3J0ZWQgPSAnb25mb2N1c2luJyBpbiB3aW5kb3csXG4gICAgICBmb2N1cyA9IHsgZm9jdXM6ICdmb2N1c2luJywgYmx1cjogJ2ZvY3Vzb3V0JyB9LFxuICAgICAgaG92ZXIgPSB7IG1vdXNlZW50ZXI6ICdtb3VzZW92ZXInLCBtb3VzZWxlYXZlOiAnbW91c2VvdXQnIH1cblxuICBzcGVjaWFsRXZlbnRzLmNsaWNrID0gc3BlY2lhbEV2ZW50cy5tb3VzZWRvd24gPSBzcGVjaWFsRXZlbnRzLm1vdXNldXAgPSBzcGVjaWFsRXZlbnRzLm1vdXNlbW92ZSA9ICdNb3VzZUV2ZW50cydcblxuICBmdW5jdGlvbiB6aWQoZWxlbWVudCkge1xuICAgIHJldHVybiBlbGVtZW50Ll96aWQgfHwgKGVsZW1lbnQuX3ppZCA9IF96aWQrKylcbiAgfVxuICBmdW5jdGlvbiBmaW5kSGFuZGxlcnMoZWxlbWVudCwgZXZlbnQsIGZuLCBzZWxlY3Rvcikge1xuICAgIGV2ZW50ID0gcGFyc2UoZXZlbnQpXG4gICAgaWYgKGV2ZW50Lm5zKSB2YXIgbWF0Y2hlciA9IG1hdGNoZXJGb3IoZXZlbnQubnMpXG4gICAgcmV0dXJuIChoYW5kbGVyc1t6aWQoZWxlbWVudCldIHx8IFtdKS5maWx0ZXIoZnVuY3Rpb24oaGFuZGxlcikge1xuICAgICAgcmV0dXJuIGhhbmRsZXJcbiAgICAgICAgJiYgKCFldmVudC5lICB8fCBoYW5kbGVyLmUgPT0gZXZlbnQuZSlcbiAgICAgICAgJiYgKCFldmVudC5ucyB8fCBtYXRjaGVyLnRlc3QoaGFuZGxlci5ucykpXG4gICAgICAgICYmICghZm4gICAgICAgfHwgemlkKGhhbmRsZXIuZm4pID09PSB6aWQoZm4pKVxuICAgICAgICAmJiAoIXNlbGVjdG9yIHx8IGhhbmRsZXIuc2VsID09IHNlbGVjdG9yKVxuICAgIH0pXG4gIH1cbiAgZnVuY3Rpb24gcGFyc2UoZXZlbnQpIHtcbiAgICB2YXIgcGFydHMgPSAoJycgKyBldmVudCkuc3BsaXQoJy4nKVxuICAgIHJldHVybiB7ZTogcGFydHNbMF0sIG5zOiBwYXJ0cy5zbGljZSgxKS5zb3J0KCkuam9pbignICcpfVxuICB9XG4gIGZ1bmN0aW9uIG1hdGNoZXJGb3IobnMpIHtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cCgnKD86XnwgKScgKyBucy5yZXBsYWNlKCcgJywgJyAuKiA/JykgKyAnKD86IHwkKScpXG4gIH1cblxuICBmdW5jdGlvbiBldmVudENhcHR1cmUoaGFuZGxlciwgY2FwdHVyZVNldHRpbmcpIHtcbiAgICByZXR1cm4gaGFuZGxlci5kZWwgJiZcbiAgICAgICghZm9jdXNpblN1cHBvcnRlZCAmJiAoaGFuZGxlci5lIGluIGZvY3VzKSkgfHxcbiAgICAgICEhY2FwdHVyZVNldHRpbmdcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlYWxFdmVudCh0eXBlKSB7XG4gICAgcmV0dXJuIGhvdmVyW3R5cGVdIHx8IChmb2N1c2luU3VwcG9ydGVkICYmIGZvY3VzW3R5cGVdKSB8fCB0eXBlXG4gIH1cblxuICBmdW5jdGlvbiBhZGQoZWxlbWVudCwgZXZlbnRzLCBmbiwgZGF0YSwgc2VsZWN0b3IsIGRlbGVnYXRvciwgY2FwdHVyZSl7XG4gICAgdmFyIGlkID0gemlkKGVsZW1lbnQpLCBzZXQgPSAoaGFuZGxlcnNbaWRdIHx8IChoYW5kbGVyc1tpZF0gPSBbXSkpXG4gICAgZXZlbnRzLnNwbGl0KC9cXHMvKS5mb3JFYWNoKGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgIGlmIChldmVudCA9PSAncmVhZHknKSByZXR1cm4gJChkb2N1bWVudCkucmVhZHkoZm4pXG4gICAgICB2YXIgaGFuZGxlciAgID0gcGFyc2UoZXZlbnQpXG4gICAgICBoYW5kbGVyLmZuICAgID0gZm5cbiAgICAgIGhhbmRsZXIuc2VsICAgPSBzZWxlY3RvclxuICAgICAgLy8gZW11bGF0ZSBtb3VzZWVudGVyLCBtb3VzZWxlYXZlXG4gICAgICBpZiAoaGFuZGxlci5lIGluIGhvdmVyKSBmbiA9IGZ1bmN0aW9uKGUpe1xuICAgICAgICB2YXIgcmVsYXRlZCA9IGUucmVsYXRlZFRhcmdldFxuICAgICAgICBpZiAoIXJlbGF0ZWQgfHwgKHJlbGF0ZWQgIT09IHRoaXMgJiYgISQuY29udGFpbnModGhpcywgcmVsYXRlZCkpKVxuICAgICAgICAgIHJldHVybiBoYW5kbGVyLmZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcbiAgICAgIH1cbiAgICAgIGhhbmRsZXIuZGVsICAgPSBkZWxlZ2F0b3JcbiAgICAgIHZhciBjYWxsYmFjayAgPSBkZWxlZ2F0b3IgfHwgZm5cbiAgICAgIGhhbmRsZXIucHJveHkgPSBmdW5jdGlvbihlKXtcbiAgICAgICAgZSA9IGNvbXBhdGlibGUoZSlcbiAgICAgICAgaWYgKGUuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQoKSkgcmV0dXJuXG4gICAgICAgIGUuZGF0YSA9IGRhdGFcbiAgICAgICAgdmFyIHJlc3VsdCA9IGNhbGxiYWNrLmFwcGx5KGVsZW1lbnQsIGUuX2FyZ3MgPT0gdW5kZWZpbmVkID8gW2VdIDogW2VdLmNvbmNhdChlLl9hcmdzKSlcbiAgICAgICAgaWYgKHJlc3VsdCA9PT0gZmFsc2UpIGUucHJldmVudERlZmF1bHQoKSwgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgICB9XG4gICAgICBoYW5kbGVyLmkgPSBzZXQubGVuZ3RoXG4gICAgICBzZXQucHVzaChoYW5kbGVyKVxuICAgICAgaWYgKCdhZGRFdmVudExpc3RlbmVyJyBpbiBlbGVtZW50KVxuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIocmVhbEV2ZW50KGhhbmRsZXIuZSksIGhhbmRsZXIucHJveHksIGV2ZW50Q2FwdHVyZShoYW5kbGVyLCBjYXB0dXJlKSlcbiAgICB9KVxuICB9XG4gIGZ1bmN0aW9uIHJlbW92ZShlbGVtZW50LCBldmVudHMsIGZuLCBzZWxlY3RvciwgY2FwdHVyZSl7XG4gICAgdmFyIGlkID0gemlkKGVsZW1lbnQpXG4gICAgOyhldmVudHMgfHwgJycpLnNwbGl0KC9cXHMvKS5mb3JFYWNoKGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgIGZpbmRIYW5kbGVycyhlbGVtZW50LCBldmVudCwgZm4sIHNlbGVjdG9yKS5mb3JFYWNoKGZ1bmN0aW9uKGhhbmRsZXIpe1xuICAgICAgICBkZWxldGUgaGFuZGxlcnNbaWRdW2hhbmRsZXIuaV1cbiAgICAgIGlmICgncmVtb3ZlRXZlbnRMaXN0ZW5lcicgaW4gZWxlbWVudClcbiAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHJlYWxFdmVudChoYW5kbGVyLmUpLCBoYW5kbGVyLnByb3h5LCBldmVudENhcHR1cmUoaGFuZGxlciwgY2FwdHVyZSkpXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICAkLmV2ZW50ID0geyBhZGQ6IGFkZCwgcmVtb3ZlOiByZW1vdmUgfVxuXG4gICQucHJveHkgPSBmdW5jdGlvbihmbiwgY29udGV4dCkge1xuICAgIHZhciBhcmdzID0gKDIgaW4gYXJndW1lbnRzKSAmJiBzbGljZS5jYWxsKGFyZ3VtZW50cywgMilcbiAgICBpZiAoaXNGdW5jdGlvbihmbikpIHtcbiAgICAgIHZhciBwcm94eUZuID0gZnVuY3Rpb24oKXsgcmV0dXJuIGZuLmFwcGx5KGNvbnRleHQsIGFyZ3MgPyBhcmdzLmNvbmNhdChzbGljZS5jYWxsKGFyZ3VtZW50cykpIDogYXJndW1lbnRzKSB9XG4gICAgICBwcm94eUZuLl96aWQgPSB6aWQoZm4pXG4gICAgICByZXR1cm4gcHJveHlGblxuICAgIH0gZWxzZSBpZiAoaXNTdHJpbmcoY29udGV4dCkpIHtcbiAgICAgIGlmIChhcmdzKSB7XG4gICAgICAgIGFyZ3MudW5zaGlmdChmbltjb250ZXh0XSwgZm4pXG4gICAgICAgIHJldHVybiAkLnByb3h5LmFwcGx5KG51bGwsIGFyZ3MpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gJC5wcm94eShmbltjb250ZXh0XSwgZm4pXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJleHBlY3RlZCBmdW5jdGlvblwiKVxuICAgIH1cbiAgfVxuXG4gICQuZm4uYmluZCA9IGZ1bmN0aW9uKGV2ZW50LCBkYXRhLCBjYWxsYmFjayl7XG4gICAgcmV0dXJuIHRoaXMub24oZXZlbnQsIGRhdGEsIGNhbGxiYWNrKVxuICB9XG4gICQuZm4udW5iaW5kID0gZnVuY3Rpb24oZXZlbnQsIGNhbGxiYWNrKXtcbiAgICByZXR1cm4gdGhpcy5vZmYoZXZlbnQsIGNhbGxiYWNrKVxuICB9XG4gICQuZm4ub25lID0gZnVuY3Rpb24oZXZlbnQsIHNlbGVjdG9yLCBkYXRhLCBjYWxsYmFjayl7XG4gICAgcmV0dXJuIHRoaXMub24oZXZlbnQsIHNlbGVjdG9yLCBkYXRhLCBjYWxsYmFjaywgMSlcbiAgfVxuXG4gIHZhciByZXR1cm5UcnVlID0gZnVuY3Rpb24oKXtyZXR1cm4gdHJ1ZX0sXG4gICAgICByZXR1cm5GYWxzZSA9IGZ1bmN0aW9uKCl7cmV0dXJuIGZhbHNlfSxcbiAgICAgIGlnbm9yZVByb3BlcnRpZXMgPSAvXihbQS1aXXxyZXR1cm5WYWx1ZSR8bGF5ZXJbWFldJCkvLFxuICAgICAgZXZlbnRNZXRob2RzID0ge1xuICAgICAgICBwcmV2ZW50RGVmYXVsdDogJ2lzRGVmYXVsdFByZXZlbnRlZCcsXG4gICAgICAgIHN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbjogJ2lzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkJyxcbiAgICAgICAgc3RvcFByb3BhZ2F0aW9uOiAnaXNQcm9wYWdhdGlvblN0b3BwZWQnXG4gICAgICB9XG5cbiAgZnVuY3Rpb24gY29tcGF0aWJsZShldmVudCwgc291cmNlKSB7XG4gICAgaWYgKHNvdXJjZSB8fCAhZXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICBzb3VyY2UgfHwgKHNvdXJjZSA9IGV2ZW50KVxuXG4gICAgICAkLmVhY2goZXZlbnRNZXRob2RzLCBmdW5jdGlvbihuYW1lLCBwcmVkaWNhdGUpIHtcbiAgICAgICAgdmFyIHNvdXJjZU1ldGhvZCA9IHNvdXJjZVtuYW1lXVxuICAgICAgICBldmVudFtuYW1lXSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgdGhpc1twcmVkaWNhdGVdID0gcmV0dXJuVHJ1ZVxuICAgICAgICAgIHJldHVybiBzb3VyY2VNZXRob2QgJiYgc291cmNlTWV0aG9kLmFwcGx5KHNvdXJjZSwgYXJndW1lbnRzKVxuICAgICAgICB9XG4gICAgICAgIGV2ZW50W3ByZWRpY2F0ZV0gPSByZXR1cm5GYWxzZVxuICAgICAgfSlcblxuICAgICAgaWYgKHNvdXJjZS5kZWZhdWx0UHJldmVudGVkICE9PSB1bmRlZmluZWQgPyBzb3VyY2UuZGVmYXVsdFByZXZlbnRlZCA6XG4gICAgICAgICAgJ3JldHVyblZhbHVlJyBpbiBzb3VyY2UgPyBzb3VyY2UucmV0dXJuVmFsdWUgPT09IGZhbHNlIDpcbiAgICAgICAgICBzb3VyY2UuZ2V0UHJldmVudERlZmF1bHQgJiYgc291cmNlLmdldFByZXZlbnREZWZhdWx0KCkpXG4gICAgICAgIGV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCA9IHJldHVyblRydWVcbiAgICB9XG4gICAgcmV0dXJuIGV2ZW50XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVQcm94eShldmVudCkge1xuICAgIHZhciBrZXksIHByb3h5ID0geyBvcmlnaW5hbEV2ZW50OiBldmVudCB9XG4gICAgZm9yIChrZXkgaW4gZXZlbnQpXG4gICAgICBpZiAoIWlnbm9yZVByb3BlcnRpZXMudGVzdChrZXkpICYmIGV2ZW50W2tleV0gIT09IHVuZGVmaW5lZCkgcHJveHlba2V5XSA9IGV2ZW50W2tleV1cblxuICAgIHJldHVybiBjb21wYXRpYmxlKHByb3h5LCBldmVudClcbiAgfVxuXG4gICQuZm4uZGVsZWdhdGUgPSBmdW5jdGlvbihzZWxlY3RvciwgZXZlbnQsIGNhbGxiYWNrKXtcbiAgICByZXR1cm4gdGhpcy5vbihldmVudCwgc2VsZWN0b3IsIGNhbGxiYWNrKVxuICB9XG4gICQuZm4udW5kZWxlZ2F0ZSA9IGZ1bmN0aW9uKHNlbGVjdG9yLCBldmVudCwgY2FsbGJhY2spe1xuICAgIHJldHVybiB0aGlzLm9mZihldmVudCwgc2VsZWN0b3IsIGNhbGxiYWNrKVxuICB9XG5cbiAgJC5mbi5saXZlID0gZnVuY3Rpb24oZXZlbnQsIGNhbGxiYWNrKXtcbiAgICAkKGRvY3VtZW50LmJvZHkpLmRlbGVnYXRlKHRoaXMuc2VsZWN0b3IsIGV2ZW50LCBjYWxsYmFjaylcbiAgICByZXR1cm4gdGhpc1xuICB9XG4gICQuZm4uZGllID0gZnVuY3Rpb24oZXZlbnQsIGNhbGxiYWNrKXtcbiAgICAkKGRvY3VtZW50LmJvZHkpLnVuZGVsZWdhdGUodGhpcy5zZWxlY3RvciwgZXZlbnQsIGNhbGxiYWNrKVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICAkLmZuLm9uID0gZnVuY3Rpb24oZXZlbnQsIHNlbGVjdG9yLCBkYXRhLCBjYWxsYmFjaywgb25lKXtcbiAgICB2YXIgYXV0b1JlbW92ZSwgZGVsZWdhdG9yLCAkdGhpcyA9IHRoaXNcbiAgICBpZiAoZXZlbnQgJiYgIWlzU3RyaW5nKGV2ZW50KSkge1xuICAgICAgJC5lYWNoKGV2ZW50LCBmdW5jdGlvbih0eXBlLCBmbil7XG4gICAgICAgICR0aGlzLm9uKHR5cGUsIHNlbGVjdG9yLCBkYXRhLCBmbiwgb25lKVxuICAgICAgfSlcbiAgICAgIHJldHVybiAkdGhpc1xuICAgIH1cblxuICAgIGlmICghaXNTdHJpbmcoc2VsZWN0b3IpICYmICFpc0Z1bmN0aW9uKGNhbGxiYWNrKSAmJiBjYWxsYmFjayAhPT0gZmFsc2UpXG4gICAgICBjYWxsYmFjayA9IGRhdGEsIGRhdGEgPSBzZWxlY3Rvciwgc2VsZWN0b3IgPSB1bmRlZmluZWRcbiAgICBpZiAoaXNGdW5jdGlvbihkYXRhKSB8fCBkYXRhID09PSBmYWxzZSlcbiAgICAgIGNhbGxiYWNrID0gZGF0YSwgZGF0YSA9IHVuZGVmaW5lZFxuXG4gICAgaWYgKGNhbGxiYWNrID09PSBmYWxzZSkgY2FsbGJhY2sgPSByZXR1cm5GYWxzZVxuXG4gICAgcmV0dXJuICR0aGlzLmVhY2goZnVuY3Rpb24oXywgZWxlbWVudCl7XG4gICAgICBpZiAob25lKSBhdXRvUmVtb3ZlID0gZnVuY3Rpb24oZSl7XG4gICAgICAgIHJlbW92ZShlbGVtZW50LCBlLnR5cGUsIGNhbGxiYWNrKVxuICAgICAgICByZXR1cm4gY2FsbGJhY2suYXBwbHkodGhpcywgYXJndW1lbnRzKVxuICAgICAgfVxuXG4gICAgICBpZiAoc2VsZWN0b3IpIGRlbGVnYXRvciA9IGZ1bmN0aW9uKGUpe1xuICAgICAgICB2YXIgZXZ0LCBtYXRjaCA9ICQoZS50YXJnZXQpLmNsb3Nlc3Qoc2VsZWN0b3IsIGVsZW1lbnQpLmdldCgwKVxuICAgICAgICBpZiAobWF0Y2ggJiYgbWF0Y2ggIT09IGVsZW1lbnQpIHtcbiAgICAgICAgICBldnQgPSAkLmV4dGVuZChjcmVhdGVQcm94eShlKSwge2N1cnJlbnRUYXJnZXQ6IG1hdGNoLCBsaXZlRmlyZWQ6IGVsZW1lbnR9KVxuICAgICAgICAgIHJldHVybiAoYXV0b1JlbW92ZSB8fCBjYWxsYmFjaykuYXBwbHkobWF0Y2gsIFtldnRdLmNvbmNhdChzbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGFkZChlbGVtZW50LCBldmVudCwgY2FsbGJhY2ssIGRhdGEsIHNlbGVjdG9yLCBkZWxlZ2F0b3IgfHwgYXV0b1JlbW92ZSlcbiAgICB9KVxuICB9XG4gICQuZm4ub2ZmID0gZnVuY3Rpb24oZXZlbnQsIHNlbGVjdG9yLCBjYWxsYmFjayl7XG4gICAgdmFyICR0aGlzID0gdGhpc1xuICAgIGlmIChldmVudCAmJiAhaXNTdHJpbmcoZXZlbnQpKSB7XG4gICAgICAkLmVhY2goZXZlbnQsIGZ1bmN0aW9uKHR5cGUsIGZuKXtcbiAgICAgICAgJHRoaXMub2ZmKHR5cGUsIHNlbGVjdG9yLCBmbilcbiAgICAgIH0pXG4gICAgICByZXR1cm4gJHRoaXNcbiAgICB9XG5cbiAgICBpZiAoIWlzU3RyaW5nKHNlbGVjdG9yKSAmJiAhaXNGdW5jdGlvbihjYWxsYmFjaykgJiYgY2FsbGJhY2sgIT09IGZhbHNlKVxuICAgICAgY2FsbGJhY2sgPSBzZWxlY3Rvciwgc2VsZWN0b3IgPSB1bmRlZmluZWRcblxuICAgIGlmIChjYWxsYmFjayA9PT0gZmFsc2UpIGNhbGxiYWNrID0gcmV0dXJuRmFsc2VcblxuICAgIHJldHVybiAkdGhpcy5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICByZW1vdmUodGhpcywgZXZlbnQsIGNhbGxiYWNrLCBzZWxlY3RvcilcbiAgICB9KVxuICB9XG5cbiAgJC5mbi50cmlnZ2VyID0gZnVuY3Rpb24oZXZlbnQsIGFyZ3Mpe1xuICAgIGV2ZW50ID0gKGlzU3RyaW5nKGV2ZW50KSB8fCAkLmlzUGxhaW5PYmplY3QoZXZlbnQpKSA/ICQuRXZlbnQoZXZlbnQpIDogY29tcGF0aWJsZShldmVudClcbiAgICBldmVudC5fYXJncyA9IGFyZ3NcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAvLyBpdGVtcyBpbiB0aGUgY29sbGVjdGlvbiBtaWdodCBub3QgYmUgRE9NIGVsZW1lbnRzXG4gICAgICBpZignZGlzcGF0Y2hFdmVudCcgaW4gdGhpcykgdGhpcy5kaXNwYXRjaEV2ZW50KGV2ZW50KVxuICAgICAgZWxzZSAkKHRoaXMpLnRyaWdnZXJIYW5kbGVyKGV2ZW50LCBhcmdzKVxuICAgIH0pXG4gIH1cblxuICAvLyB0cmlnZ2VycyBldmVudCBoYW5kbGVycyBvbiBjdXJyZW50IGVsZW1lbnQganVzdCBhcyBpZiBhbiBldmVudCBvY2N1cnJlZCxcbiAgLy8gZG9lc24ndCB0cmlnZ2VyIGFuIGFjdHVhbCBldmVudCwgZG9lc24ndCBidWJibGVcbiAgJC5mbi50cmlnZ2VySGFuZGxlciA9IGZ1bmN0aW9uKGV2ZW50LCBhcmdzKXtcbiAgICB2YXIgZSwgcmVzdWx0XG4gICAgdGhpcy5lYWNoKGZ1bmN0aW9uKGksIGVsZW1lbnQpe1xuICAgICAgZSA9IGNyZWF0ZVByb3h5KGlzU3RyaW5nKGV2ZW50KSA/ICQuRXZlbnQoZXZlbnQpIDogZXZlbnQpXG4gICAgICBlLl9hcmdzID0gYXJnc1xuICAgICAgZS50YXJnZXQgPSBlbGVtZW50XG4gICAgICAkLmVhY2goZmluZEhhbmRsZXJzKGVsZW1lbnQsIGV2ZW50LnR5cGUgfHwgZXZlbnQpLCBmdW5jdGlvbihpLCBoYW5kbGVyKXtcbiAgICAgICAgcmVzdWx0ID0gaGFuZGxlci5wcm94eShlKVxuICAgICAgICBpZiAoZS5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCgpKSByZXR1cm4gZmFsc2VcbiAgICAgIH0pXG4gICAgfSlcbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cblxuICAvLyBzaG9ydGN1dCBtZXRob2RzIGZvciBgLmJpbmQoZXZlbnQsIGZuKWAgZm9yIGVhY2ggZXZlbnQgdHlwZVxuICA7KCdmb2N1c2luIGZvY3Vzb3V0IGxvYWQgcmVzaXplIHNjcm9sbCB1bmxvYWQgY2xpY2sgZGJsY2xpY2sgJytcbiAgJ21vdXNlZG93biBtb3VzZXVwIG1vdXNlbW92ZSBtb3VzZW92ZXIgbW91c2VvdXQgbW91c2VlbnRlciBtb3VzZWxlYXZlICcrXG4gICdjaGFuZ2Ugc2VsZWN0IGtleWRvd24ga2V5cHJlc3Mga2V5dXAgZXJyb3InKS5zcGxpdCgnICcpLmZvckVhY2goZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAkLmZuW2V2ZW50XSA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgICByZXR1cm4gY2FsbGJhY2sgP1xuICAgICAgICB0aGlzLmJpbmQoZXZlbnQsIGNhbGxiYWNrKSA6XG4gICAgICAgIHRoaXMudHJpZ2dlcihldmVudClcbiAgICB9XG4gIH0pXG5cbiAgO1snZm9jdXMnLCAnYmx1ciddLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xuICAgICQuZm5bbmFtZV0gPSBmdW5jdGlvbihjYWxsYmFjaykge1xuICAgICAgaWYgKGNhbGxiYWNrKSB0aGlzLmJpbmQobmFtZSwgY2FsbGJhY2spXG4gICAgICBlbHNlIHRoaXMuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICB0cnkgeyB0aGlzW25hbWVdKCkgfVxuICAgICAgICBjYXRjaChlKSB7fVxuICAgICAgfSlcbiAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuICB9KVxuXG4gICQuRXZlbnQgPSBmdW5jdGlvbih0eXBlLCBwcm9wcykge1xuICAgIGlmICghaXNTdHJpbmcodHlwZSkpIHByb3BzID0gdHlwZSwgdHlwZSA9IHByb3BzLnR5cGVcbiAgICB2YXIgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudChzcGVjaWFsRXZlbnRzW3R5cGVdIHx8ICdFdmVudHMnKSwgYnViYmxlcyA9IHRydWVcbiAgICBpZiAocHJvcHMpIGZvciAodmFyIG5hbWUgaW4gcHJvcHMpIChuYW1lID09ICdidWJibGVzJykgPyAoYnViYmxlcyA9ICEhcHJvcHNbbmFtZV0pIDogKGV2ZW50W25hbWVdID0gcHJvcHNbbmFtZV0pXG4gICAgZXZlbnQuaW5pdEV2ZW50KHR5cGUsIGJ1YmJsZXMsIHRydWUpXG4gICAgcmV0dXJuIGNvbXBhdGlibGUoZXZlbnQpXG4gIH1cblxufSkoWmVwdG8pXG5cbjsoZnVuY3Rpb24oJCl7XG4gIHZhciBqc29ucElEID0gMCxcbiAgICAgIGRvY3VtZW50ID0gd2luZG93LmRvY3VtZW50LFxuICAgICAga2V5LFxuICAgICAgbmFtZSxcbiAgICAgIHJzY3JpcHQgPSAvPHNjcmlwdFxcYltePF0qKD86KD8hPFxcL3NjcmlwdD4pPFtePF0qKSo8XFwvc2NyaXB0Pi9naSxcbiAgICAgIHNjcmlwdFR5cGVSRSA9IC9eKD86dGV4dHxhcHBsaWNhdGlvbilcXC9qYXZhc2NyaXB0L2ksXG4gICAgICB4bWxUeXBlUkUgPSAvXig/OnRleHR8YXBwbGljYXRpb24pXFwveG1sL2ksXG4gICAgICBqc29uVHlwZSA9ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIGh0bWxUeXBlID0gJ3RleHQvaHRtbCcsXG4gICAgICBibGFua1JFID0gL15cXHMqJC9cblxuICAvLyB0cmlnZ2VyIGEgY3VzdG9tIGV2ZW50IGFuZCByZXR1cm4gZmFsc2UgaWYgaXQgd2FzIGNhbmNlbGxlZFxuICBmdW5jdGlvbiB0cmlnZ2VyQW5kUmV0dXJuKGNvbnRleHQsIGV2ZW50TmFtZSwgZGF0YSkge1xuICAgIHZhciBldmVudCA9ICQuRXZlbnQoZXZlbnROYW1lKVxuICAgICQoY29udGV4dCkudHJpZ2dlcihldmVudCwgZGF0YSlcbiAgICByZXR1cm4gIWV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpXG4gIH1cblxuICAvLyB0cmlnZ2VyIGFuIEFqYXggXCJnbG9iYWxcIiBldmVudFxuICBmdW5jdGlvbiB0cmlnZ2VyR2xvYmFsKHNldHRpbmdzLCBjb250ZXh0LCBldmVudE5hbWUsIGRhdGEpIHtcbiAgICBpZiAoc2V0dGluZ3MuZ2xvYmFsKSByZXR1cm4gdHJpZ2dlckFuZFJldHVybihjb250ZXh0IHx8IGRvY3VtZW50LCBldmVudE5hbWUsIGRhdGEpXG4gIH1cblxuICAvLyBOdW1iZXIgb2YgYWN0aXZlIEFqYXggcmVxdWVzdHNcbiAgJC5hY3RpdmUgPSAwXG5cbiAgZnVuY3Rpb24gYWpheFN0YXJ0KHNldHRpbmdzKSB7XG4gICAgaWYgKHNldHRpbmdzLmdsb2JhbCAmJiAkLmFjdGl2ZSsrID09PSAwKSB0cmlnZ2VyR2xvYmFsKHNldHRpbmdzLCBudWxsLCAnYWpheFN0YXJ0JylcbiAgfVxuICBmdW5jdGlvbiBhamF4U3RvcChzZXR0aW5ncykge1xuICAgIGlmIChzZXR0aW5ncy5nbG9iYWwgJiYgISgtLSQuYWN0aXZlKSkgdHJpZ2dlckdsb2JhbChzZXR0aW5ncywgbnVsbCwgJ2FqYXhTdG9wJylcbiAgfVxuXG4gIC8vIHRyaWdnZXJzIGFuIGV4dHJhIGdsb2JhbCBldmVudCBcImFqYXhCZWZvcmVTZW5kXCIgdGhhdCdzIGxpa2UgXCJhamF4U2VuZFwiIGJ1dCBjYW5jZWxhYmxlXG4gIGZ1bmN0aW9uIGFqYXhCZWZvcmVTZW5kKHhociwgc2V0dGluZ3MpIHtcbiAgICB2YXIgY29udGV4dCA9IHNldHRpbmdzLmNvbnRleHRcbiAgICBpZiAoc2V0dGluZ3MuYmVmb3JlU2VuZC5jYWxsKGNvbnRleHQsIHhociwgc2V0dGluZ3MpID09PSBmYWxzZSB8fFxuICAgICAgICB0cmlnZ2VyR2xvYmFsKHNldHRpbmdzLCBjb250ZXh0LCAnYWpheEJlZm9yZVNlbmQnLCBbeGhyLCBzZXR0aW5nc10pID09PSBmYWxzZSlcbiAgICAgIHJldHVybiBmYWxzZVxuXG4gICAgdHJpZ2dlckdsb2JhbChzZXR0aW5ncywgY29udGV4dCwgJ2FqYXhTZW5kJywgW3hociwgc2V0dGluZ3NdKVxuICB9XG4gIGZ1bmN0aW9uIGFqYXhTdWNjZXNzKGRhdGEsIHhociwgc2V0dGluZ3MsIGRlZmVycmVkKSB7XG4gICAgdmFyIGNvbnRleHQgPSBzZXR0aW5ncy5jb250ZXh0LCBzdGF0dXMgPSAnc3VjY2VzcydcbiAgICBzZXR0aW5ncy5zdWNjZXNzLmNhbGwoY29udGV4dCwgZGF0YSwgc3RhdHVzLCB4aHIpXG4gICAgaWYgKGRlZmVycmVkKSBkZWZlcnJlZC5yZXNvbHZlV2l0aChjb250ZXh0LCBbZGF0YSwgc3RhdHVzLCB4aHJdKVxuICAgIHRyaWdnZXJHbG9iYWwoc2V0dGluZ3MsIGNvbnRleHQsICdhamF4U3VjY2VzcycsIFt4aHIsIHNldHRpbmdzLCBkYXRhXSlcbiAgICBhamF4Q29tcGxldGUoc3RhdHVzLCB4aHIsIHNldHRpbmdzKVxuICB9XG4gIC8vIHR5cGU6IFwidGltZW91dFwiLCBcImVycm9yXCIsIFwiYWJvcnRcIiwgXCJwYXJzZXJlcnJvclwiXG4gIGZ1bmN0aW9uIGFqYXhFcnJvcihlcnJvciwgdHlwZSwgeGhyLCBzZXR0aW5ncywgZGVmZXJyZWQpIHtcbiAgICB2YXIgY29udGV4dCA9IHNldHRpbmdzLmNvbnRleHRcbiAgICBzZXR0aW5ncy5lcnJvci5jYWxsKGNvbnRleHQsIHhociwgdHlwZSwgZXJyb3IpXG4gICAgaWYgKGRlZmVycmVkKSBkZWZlcnJlZC5yZWplY3RXaXRoKGNvbnRleHQsIFt4aHIsIHR5cGUsIGVycm9yXSlcbiAgICB0cmlnZ2VyR2xvYmFsKHNldHRpbmdzLCBjb250ZXh0LCAnYWpheEVycm9yJywgW3hociwgc2V0dGluZ3MsIGVycm9yIHx8IHR5cGVdKVxuICAgIGFqYXhDb21wbGV0ZSh0eXBlLCB4aHIsIHNldHRpbmdzKVxuICB9XG4gIC8vIHN0YXR1czogXCJzdWNjZXNzXCIsIFwibm90bW9kaWZpZWRcIiwgXCJlcnJvclwiLCBcInRpbWVvdXRcIiwgXCJhYm9ydFwiLCBcInBhcnNlcmVycm9yXCJcbiAgZnVuY3Rpb24gYWpheENvbXBsZXRlKHN0YXR1cywgeGhyLCBzZXR0aW5ncykge1xuICAgIHZhciBjb250ZXh0ID0gc2V0dGluZ3MuY29udGV4dFxuICAgIHNldHRpbmdzLmNvbXBsZXRlLmNhbGwoY29udGV4dCwgeGhyLCBzdGF0dXMpXG4gICAgdHJpZ2dlckdsb2JhbChzZXR0aW5ncywgY29udGV4dCwgJ2FqYXhDb21wbGV0ZScsIFt4aHIsIHNldHRpbmdzXSlcbiAgICBhamF4U3RvcChzZXR0aW5ncylcbiAgfVxuXG4gIC8vIEVtcHR5IGZ1bmN0aW9uLCB1c2VkIGFzIGRlZmF1bHQgY2FsbGJhY2tcbiAgZnVuY3Rpb24gZW1wdHkoKSB7fVxuXG4gICQuYWpheEpTT05QID0gZnVuY3Rpb24ob3B0aW9ucywgZGVmZXJyZWQpe1xuICAgIGlmICghKCd0eXBlJyBpbiBvcHRpb25zKSkgcmV0dXJuICQuYWpheChvcHRpb25zKVxuXG4gICAgdmFyIF9jYWxsYmFja05hbWUgPSBvcHRpb25zLmpzb25wQ2FsbGJhY2ssXG4gICAgICBjYWxsYmFja05hbWUgPSAoJC5pc0Z1bmN0aW9uKF9jYWxsYmFja05hbWUpID9cbiAgICAgICAgX2NhbGxiYWNrTmFtZSgpIDogX2NhbGxiYWNrTmFtZSkgfHwgKCdqc29ucCcgKyAoKytqc29ucElEKSksXG4gICAgICBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKSxcbiAgICAgIG9yaWdpbmFsQ2FsbGJhY2sgPSB3aW5kb3dbY2FsbGJhY2tOYW1lXSxcbiAgICAgIHJlc3BvbnNlRGF0YSxcbiAgICAgIGFib3J0ID0gZnVuY3Rpb24oZXJyb3JUeXBlKSB7XG4gICAgICAgICQoc2NyaXB0KS50cmlnZ2VySGFuZGxlcignZXJyb3InLCBlcnJvclR5cGUgfHwgJ2Fib3J0JylcbiAgICAgIH0sXG4gICAgICB4aHIgPSB7IGFib3J0OiBhYm9ydCB9LCBhYm9ydFRpbWVvdXRcblxuICAgIGlmIChkZWZlcnJlZCkgZGVmZXJyZWQucHJvbWlzZSh4aHIpXG5cbiAgICAkKHNjcmlwdCkub24oJ2xvYWQgZXJyb3InLCBmdW5jdGlvbihlLCBlcnJvclR5cGUpe1xuICAgICAgY2xlYXJUaW1lb3V0KGFib3J0VGltZW91dClcbiAgICAgICQoc2NyaXB0KS5vZmYoKS5yZW1vdmUoKVxuXG4gICAgICBpZiAoZS50eXBlID09ICdlcnJvcicgfHwgIXJlc3BvbnNlRGF0YSkge1xuICAgICAgICBhamF4RXJyb3IobnVsbCwgZXJyb3JUeXBlIHx8ICdlcnJvcicsIHhociwgb3B0aW9ucywgZGVmZXJyZWQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhamF4U3VjY2VzcyhyZXNwb25zZURhdGFbMF0sIHhociwgb3B0aW9ucywgZGVmZXJyZWQpXG4gICAgICB9XG5cbiAgICAgIHdpbmRvd1tjYWxsYmFja05hbWVdID0gb3JpZ2luYWxDYWxsYmFja1xuICAgICAgaWYgKHJlc3BvbnNlRGF0YSAmJiAkLmlzRnVuY3Rpb24ob3JpZ2luYWxDYWxsYmFjaykpXG4gICAgICAgIG9yaWdpbmFsQ2FsbGJhY2socmVzcG9uc2VEYXRhWzBdKVxuXG4gICAgICBvcmlnaW5hbENhbGxiYWNrID0gcmVzcG9uc2VEYXRhID0gdW5kZWZpbmVkXG4gICAgfSlcblxuICAgIGlmIChhamF4QmVmb3JlU2VuZCh4aHIsIG9wdGlvbnMpID09PSBmYWxzZSkge1xuICAgICAgYWJvcnQoJ2Fib3J0JylcbiAgICAgIHJldHVybiB4aHJcbiAgICB9XG5cbiAgICB3aW5kb3dbY2FsbGJhY2tOYW1lXSA9IGZ1bmN0aW9uKCl7XG4gICAgICByZXNwb25zZURhdGEgPSBhcmd1bWVudHNcbiAgICB9XG5cbiAgICBzY3JpcHQuc3JjID0gb3B0aW9ucy51cmwucmVwbGFjZSgvXFw/KC4rKT1cXD8vLCAnPyQxPScgKyBjYWxsYmFja05hbWUpXG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpXG5cbiAgICBpZiAob3B0aW9ucy50aW1lb3V0ID4gMCkgYWJvcnRUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgYWJvcnQoJ3RpbWVvdXQnKVxuICAgIH0sIG9wdGlvbnMudGltZW91dClcblxuICAgIHJldHVybiB4aHJcbiAgfVxuXG4gICQuYWpheFNldHRpbmdzID0ge1xuICAgIC8vIERlZmF1bHQgdHlwZSBvZiByZXF1ZXN0XG4gICAgdHlwZTogJ0dFVCcsXG4gICAgLy8gQ2FsbGJhY2sgdGhhdCBpcyBleGVjdXRlZCBiZWZvcmUgcmVxdWVzdFxuICAgIGJlZm9yZVNlbmQ6IGVtcHR5LFxuICAgIC8vIENhbGxiYWNrIHRoYXQgaXMgZXhlY3V0ZWQgaWYgdGhlIHJlcXVlc3Qgc3VjY2VlZHNcbiAgICBzdWNjZXNzOiBlbXB0eSxcbiAgICAvLyBDYWxsYmFjayB0aGF0IGlzIGV4ZWN1dGVkIHRoZSB0aGUgc2VydmVyIGRyb3BzIGVycm9yXG4gICAgZXJyb3I6IGVtcHR5LFxuICAgIC8vIENhbGxiYWNrIHRoYXQgaXMgZXhlY3V0ZWQgb24gcmVxdWVzdCBjb21wbGV0ZSAoYm90aDogZXJyb3IgYW5kIHN1Y2Nlc3MpXG4gICAgY29tcGxldGU6IGVtcHR5LFxuICAgIC8vIFRoZSBjb250ZXh0IGZvciB0aGUgY2FsbGJhY2tzXG4gICAgY29udGV4dDogbnVsbCxcbiAgICAvLyBXaGV0aGVyIHRvIHRyaWdnZXIgXCJnbG9iYWxcIiBBamF4IGV2ZW50c1xuICAgIGdsb2JhbDogdHJ1ZSxcbiAgICAvLyBUcmFuc3BvcnRcbiAgICB4aHI6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBuZXcgd2luZG93LlhNTEh0dHBSZXF1ZXN0KClcbiAgICB9LFxuICAgIC8vIE1JTUUgdHlwZXMgbWFwcGluZ1xuICAgIC8vIElJUyByZXR1cm5zIEphdmFzY3JpcHQgYXMgXCJhcHBsaWNhdGlvbi94LWphdmFzY3JpcHRcIlxuICAgIGFjY2VwdHM6IHtcbiAgICAgIHNjcmlwdDogJ3RleHQvamF2YXNjcmlwdCwgYXBwbGljYXRpb24vamF2YXNjcmlwdCwgYXBwbGljYXRpb24veC1qYXZhc2NyaXB0JyxcbiAgICAgIGpzb246ICAganNvblR5cGUsXG4gICAgICB4bWw6ICAgICdhcHBsaWNhdGlvbi94bWwsIHRleHQveG1sJyxcbiAgICAgIGh0bWw6ICAgaHRtbFR5cGUsXG4gICAgICB0ZXh0OiAgICd0ZXh0L3BsYWluJ1xuICAgIH0sXG4gICAgLy8gV2hldGhlciB0aGUgcmVxdWVzdCBpcyB0byBhbm90aGVyIGRvbWFpblxuICAgIGNyb3NzRG9tYWluOiBmYWxzZSxcbiAgICAvLyBEZWZhdWx0IHRpbWVvdXRcbiAgICB0aW1lb3V0OiAwLFxuICAgIC8vIFdoZXRoZXIgZGF0YSBzaG91bGQgYmUgc2VyaWFsaXplZCB0byBzdHJpbmdcbiAgICBwcm9jZXNzRGF0YTogdHJ1ZSxcbiAgICAvLyBXaGV0aGVyIHRoZSBicm93c2VyIHNob3VsZCBiZSBhbGxvd2VkIHRvIGNhY2hlIEdFVCByZXNwb25zZXNcbiAgICBjYWNoZTogdHJ1ZVxuICB9XG5cbiAgZnVuY3Rpb24gbWltZVRvRGF0YVR5cGUobWltZSkge1xuICAgIGlmIChtaW1lKSBtaW1lID0gbWltZS5zcGxpdCgnOycsIDIpWzBdXG4gICAgcmV0dXJuIG1pbWUgJiYgKCBtaW1lID09IGh0bWxUeXBlID8gJ2h0bWwnIDpcbiAgICAgIG1pbWUgPT0ganNvblR5cGUgPyAnanNvbicgOlxuICAgICAgc2NyaXB0VHlwZVJFLnRlc3QobWltZSkgPyAnc2NyaXB0JyA6XG4gICAgICB4bWxUeXBlUkUudGVzdChtaW1lKSAmJiAneG1sJyApIHx8ICd0ZXh0J1xuICB9XG5cbiAgZnVuY3Rpb24gYXBwZW5kUXVlcnkodXJsLCBxdWVyeSkge1xuICAgIGlmIChxdWVyeSA9PSAnJykgcmV0dXJuIHVybFxuICAgIHJldHVybiAodXJsICsgJyYnICsgcXVlcnkpLnJlcGxhY2UoL1smP117MSwyfS8sICc/JylcbiAgfVxuXG4gIC8vIHNlcmlhbGl6ZSBwYXlsb2FkIGFuZCBhcHBlbmQgaXQgdG8gdGhlIFVSTCBmb3IgR0VUIHJlcXVlc3RzXG4gIGZ1bmN0aW9uIHNlcmlhbGl6ZURhdGEob3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zLnByb2Nlc3NEYXRhICYmIG9wdGlvbnMuZGF0YSAmJiAkLnR5cGUob3B0aW9ucy5kYXRhKSAhPSBcInN0cmluZ1wiKVxuICAgICAgb3B0aW9ucy5kYXRhID0gJC5wYXJhbShvcHRpb25zLmRhdGEsIG9wdGlvbnMudHJhZGl0aW9uYWwpXG4gICAgaWYgKG9wdGlvbnMuZGF0YSAmJiAoIW9wdGlvbnMudHlwZSB8fCBvcHRpb25zLnR5cGUudG9VcHBlckNhc2UoKSA9PSAnR0VUJykpXG4gICAgICBvcHRpb25zLnVybCA9IGFwcGVuZFF1ZXJ5KG9wdGlvbnMudXJsLCBvcHRpb25zLmRhdGEpLCBvcHRpb25zLmRhdGEgPSB1bmRlZmluZWRcbiAgfVxuXG4gICQuYWpheCA9IGZ1bmN0aW9uKG9wdGlvbnMpe1xuICAgIHZhciBzZXR0aW5ncyA9ICQuZXh0ZW5kKHt9LCBvcHRpb25zIHx8IHt9KSxcbiAgICAgICAgZGVmZXJyZWQgPSAkLkRlZmVycmVkICYmICQuRGVmZXJyZWQoKVxuICAgIGZvciAoa2V5IGluICQuYWpheFNldHRpbmdzKSBpZiAoc2V0dGluZ3Nba2V5XSA9PT0gdW5kZWZpbmVkKSBzZXR0aW5nc1trZXldID0gJC5hamF4U2V0dGluZ3Nba2V5XVxuXG4gICAgYWpheFN0YXJ0KHNldHRpbmdzKVxuXG4gICAgaWYgKCFzZXR0aW5ncy5jcm9zc0RvbWFpbikgc2V0dGluZ3MuY3Jvc3NEb21haW4gPSAvXihbXFx3LV0rOik/XFwvXFwvKFteXFwvXSspLy50ZXN0KHNldHRpbmdzLnVybCkgJiZcbiAgICAgIFJlZ0V4cC4kMiAhPSB3aW5kb3cubG9jYXRpb24uaG9zdFxuXG4gICAgaWYgKCFzZXR0aW5ncy51cmwpIHNldHRpbmdzLnVybCA9IHdpbmRvdy5sb2NhdGlvbi50b1N0cmluZygpXG4gICAgc2VyaWFsaXplRGF0YShzZXR0aW5ncylcblxuICAgIHZhciBkYXRhVHlwZSA9IHNldHRpbmdzLmRhdGFUeXBlLCBoYXNQbGFjZWhvbGRlciA9IC9cXD8uKz1cXD8vLnRlc3Qoc2V0dGluZ3MudXJsKVxuICAgIGlmIChoYXNQbGFjZWhvbGRlcikgZGF0YVR5cGUgPSAnanNvbnAnXG5cbiAgICBpZiAoc2V0dGluZ3MuY2FjaGUgPT09IGZhbHNlIHx8IChcbiAgICAgICAgICghb3B0aW9ucyB8fCBvcHRpb25zLmNhY2hlICE9PSB0cnVlKSAmJlxuICAgICAgICAgKCdzY3JpcHQnID09IGRhdGFUeXBlIHx8ICdqc29ucCcgPT0gZGF0YVR5cGUpXG4gICAgICAgICkpXG4gICAgICBzZXR0aW5ncy51cmwgPSBhcHBlbmRRdWVyeShzZXR0aW5ncy51cmwsICdfPScgKyBEYXRlLm5vdygpKVxuXG4gICAgaWYgKCdqc29ucCcgPT0gZGF0YVR5cGUpIHtcbiAgICAgIGlmICghaGFzUGxhY2Vob2xkZXIpXG4gICAgICAgIHNldHRpbmdzLnVybCA9IGFwcGVuZFF1ZXJ5KHNldHRpbmdzLnVybCxcbiAgICAgICAgICBzZXR0aW5ncy5qc29ucCA/IChzZXR0aW5ncy5qc29ucCArICc9PycpIDogc2V0dGluZ3MuanNvbnAgPT09IGZhbHNlID8gJycgOiAnY2FsbGJhY2s9PycpXG4gICAgICByZXR1cm4gJC5hamF4SlNPTlAoc2V0dGluZ3MsIGRlZmVycmVkKVxuICAgIH1cblxuICAgIHZhciBtaW1lID0gc2V0dGluZ3MuYWNjZXB0c1tkYXRhVHlwZV0sXG4gICAgICAgIGhlYWRlcnMgPSB7IH0sXG4gICAgICAgIHNldEhlYWRlciA9IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7IGhlYWRlcnNbbmFtZS50b0xvd2VyQ2FzZSgpXSA9IFtuYW1lLCB2YWx1ZV0gfSxcbiAgICAgICAgcHJvdG9jb2wgPSAvXihbXFx3LV0rOilcXC9cXC8vLnRlc3Qoc2V0dGluZ3MudXJsKSA/IFJlZ0V4cC4kMSA6IHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCxcbiAgICAgICAgeGhyID0gc2V0dGluZ3MueGhyKCksXG4gICAgICAgIG5hdGl2ZVNldEhlYWRlciA9IHhoci5zZXRSZXF1ZXN0SGVhZGVyLFxuICAgICAgICBhYm9ydFRpbWVvdXRcblxuICAgIGlmIChkZWZlcnJlZCkgZGVmZXJyZWQucHJvbWlzZSh4aHIpXG5cbiAgICBpZiAoIXNldHRpbmdzLmNyb3NzRG9tYWluKSBzZXRIZWFkZXIoJ1gtUmVxdWVzdGVkLVdpdGgnLCAnWE1MSHR0cFJlcXVlc3QnKVxuICAgIHNldEhlYWRlcignQWNjZXB0JywgbWltZSB8fCAnKi8qJylcbiAgICBpZiAobWltZSA9IHNldHRpbmdzLm1pbWVUeXBlIHx8IG1pbWUpIHtcbiAgICAgIGlmIChtaW1lLmluZGV4T2YoJywnKSA+IC0xKSBtaW1lID0gbWltZS5zcGxpdCgnLCcsIDIpWzBdXG4gICAgICB4aHIub3ZlcnJpZGVNaW1lVHlwZSAmJiB4aHIub3ZlcnJpZGVNaW1lVHlwZShtaW1lKVxuICAgIH1cbiAgICBpZiAoc2V0dGluZ3MuY29udGVudFR5cGUgfHwgKHNldHRpbmdzLmNvbnRlbnRUeXBlICE9PSBmYWxzZSAmJiBzZXR0aW5ncy5kYXRhICYmIHNldHRpbmdzLnR5cGUudG9VcHBlckNhc2UoKSAhPSAnR0VUJykpXG4gICAgICBzZXRIZWFkZXIoJ0NvbnRlbnQtVHlwZScsIHNldHRpbmdzLmNvbnRlbnRUeXBlIHx8ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKVxuXG4gICAgaWYgKHNldHRpbmdzLmhlYWRlcnMpIGZvciAobmFtZSBpbiBzZXR0aW5ncy5oZWFkZXJzKSBzZXRIZWFkZXIobmFtZSwgc2V0dGluZ3MuaGVhZGVyc1tuYW1lXSlcbiAgICB4aHIuc2V0UmVxdWVzdEhlYWRlciA9IHNldEhlYWRlclxuXG4gICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCl7XG4gICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT0gNCkge1xuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZW1wdHlcbiAgICAgICAgY2xlYXJUaW1lb3V0KGFib3J0VGltZW91dClcbiAgICAgICAgdmFyIHJlc3VsdCwgZXJyb3IgPSBmYWxzZVxuICAgICAgICBpZiAoKHhoci5zdGF0dXMgPj0gMjAwICYmIHhoci5zdGF0dXMgPCAzMDApIHx8IHhoci5zdGF0dXMgPT0gMzA0IHx8ICh4aHIuc3RhdHVzID09IDAgJiYgcHJvdG9jb2wgPT0gJ2ZpbGU6JykpIHtcbiAgICAgICAgICBkYXRhVHlwZSA9IGRhdGFUeXBlIHx8IG1pbWVUb0RhdGFUeXBlKHNldHRpbmdzLm1pbWVUeXBlIHx8IHhoci5nZXRSZXNwb25zZUhlYWRlcignY29udGVudC10eXBlJykpXG4gICAgICAgICAgcmVzdWx0ID0geGhyLnJlc3BvbnNlVGV4dFxuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIGh0dHA6Ly9wZXJmZWN0aW9ua2lsbHMuY29tL2dsb2JhbC1ldmFsLXdoYXQtYXJlLXRoZS1vcHRpb25zL1xuICAgICAgICAgICAgaWYgKGRhdGFUeXBlID09ICdzY3JpcHQnKSAgICAoMSxldmFsKShyZXN1bHQpXG4gICAgICAgICAgICBlbHNlIGlmIChkYXRhVHlwZSA9PSAneG1sJykgIHJlc3VsdCA9IHhoci5yZXNwb25zZVhNTFxuICAgICAgICAgICAgZWxzZSBpZiAoZGF0YVR5cGUgPT0gJ2pzb24nKSByZXN1bHQgPSBibGFua1JFLnRlc3QocmVzdWx0KSA/IG51bGwgOiAkLnBhcnNlSlNPTihyZXN1bHQpXG4gICAgICAgICAgfSBjYXRjaCAoZSkgeyBlcnJvciA9IGUgfVxuXG4gICAgICAgICAgaWYgKGVycm9yKSBhamF4RXJyb3IoZXJyb3IsICdwYXJzZXJlcnJvcicsIHhociwgc2V0dGluZ3MsIGRlZmVycmVkKVxuICAgICAgICAgIGVsc2UgYWpheFN1Y2Nlc3MocmVzdWx0LCB4aHIsIHNldHRpbmdzLCBkZWZlcnJlZClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhamF4RXJyb3IoeGhyLnN0YXR1c1RleHQgfHwgbnVsbCwgeGhyLnN0YXR1cyA/ICdlcnJvcicgOiAnYWJvcnQnLCB4aHIsIHNldHRpbmdzLCBkZWZlcnJlZClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChhamF4QmVmb3JlU2VuZCh4aHIsIHNldHRpbmdzKSA9PT0gZmFsc2UpIHtcbiAgICAgIHhoci5hYm9ydCgpXG4gICAgICBhamF4RXJyb3IobnVsbCwgJ2Fib3J0JywgeGhyLCBzZXR0aW5ncywgZGVmZXJyZWQpXG4gICAgICByZXR1cm4geGhyXG4gICAgfVxuXG4gICAgaWYgKHNldHRpbmdzLnhockZpZWxkcykgZm9yIChuYW1lIGluIHNldHRpbmdzLnhockZpZWxkcykgeGhyW25hbWVdID0gc2V0dGluZ3MueGhyRmllbGRzW25hbWVdXG5cbiAgICB2YXIgYXN5bmMgPSAnYXN5bmMnIGluIHNldHRpbmdzID8gc2V0dGluZ3MuYXN5bmMgOiB0cnVlXG4gICAgeGhyLm9wZW4oc2V0dGluZ3MudHlwZSwgc2V0dGluZ3MudXJsLCBhc3luYywgc2V0dGluZ3MudXNlcm5hbWUsIHNldHRpbmdzLnBhc3N3b3JkKVxuXG4gICAgZm9yIChuYW1lIGluIGhlYWRlcnMpIG5hdGl2ZVNldEhlYWRlci5hcHBseSh4aHIsIGhlYWRlcnNbbmFtZV0pXG5cbiAgICBpZiAoc2V0dGluZ3MudGltZW91dCA+IDApIGFib3J0VGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGVtcHR5XG4gICAgICAgIHhoci5hYm9ydCgpXG4gICAgICAgIGFqYXhFcnJvcihudWxsLCAndGltZW91dCcsIHhociwgc2V0dGluZ3MsIGRlZmVycmVkKVxuICAgICAgfSwgc2V0dGluZ3MudGltZW91dClcblxuICAgIC8vIGF2b2lkIHNlbmRpbmcgZW1wdHkgc3RyaW5nICgjMzE5KVxuICAgIHhoci5zZW5kKHNldHRpbmdzLmRhdGEgPyBzZXR0aW5ncy5kYXRhIDogbnVsbClcbiAgICByZXR1cm4geGhyXG4gIH1cblxuICAvLyBoYW5kbGUgb3B0aW9uYWwgZGF0YS9zdWNjZXNzIGFyZ3VtZW50c1xuICBmdW5jdGlvbiBwYXJzZUFyZ3VtZW50cyh1cmwsIGRhdGEsIHN1Y2Nlc3MsIGRhdGFUeXBlKSB7XG4gICAgaWYgKCQuaXNGdW5jdGlvbihkYXRhKSkgZGF0YVR5cGUgPSBzdWNjZXNzLCBzdWNjZXNzID0gZGF0YSwgZGF0YSA9IHVuZGVmaW5lZFxuICAgIGlmICghJC5pc0Z1bmN0aW9uKHN1Y2Nlc3MpKSBkYXRhVHlwZSA9IHN1Y2Nlc3MsIHN1Y2Nlc3MgPSB1bmRlZmluZWRcbiAgICByZXR1cm4ge1xuICAgICAgdXJsOiB1cmxcbiAgICAsIGRhdGE6IGRhdGFcbiAgICAsIHN1Y2Nlc3M6IHN1Y2Nlc3NcbiAgICAsIGRhdGFUeXBlOiBkYXRhVHlwZVxuICAgIH1cbiAgfVxuXG4gICQuZ2V0ID0gZnVuY3Rpb24oLyogdXJsLCBkYXRhLCBzdWNjZXNzLCBkYXRhVHlwZSAqLyl7XG4gICAgcmV0dXJuICQuYWpheChwYXJzZUFyZ3VtZW50cy5hcHBseShudWxsLCBhcmd1bWVudHMpKVxuICB9XG5cbiAgJC5wb3N0ID0gZnVuY3Rpb24oLyogdXJsLCBkYXRhLCBzdWNjZXNzLCBkYXRhVHlwZSAqLyl7XG4gICAgdmFyIG9wdGlvbnMgPSBwYXJzZUFyZ3VtZW50cy5hcHBseShudWxsLCBhcmd1bWVudHMpXG4gICAgb3B0aW9ucy50eXBlID0gJ1BPU1QnXG4gICAgcmV0dXJuICQuYWpheChvcHRpb25zKVxuICB9XG5cbiAgJC5nZXRKU09OID0gZnVuY3Rpb24oLyogdXJsLCBkYXRhLCBzdWNjZXNzICovKXtcbiAgICB2YXIgb3B0aW9ucyA9IHBhcnNlQXJndW1lbnRzLmFwcGx5KG51bGwsIGFyZ3VtZW50cylcbiAgICBvcHRpb25zLmRhdGFUeXBlID0gJ2pzb24nXG4gICAgcmV0dXJuICQuYWpheChvcHRpb25zKVxuICB9XG5cbiAgJC5mbi5sb2FkID0gZnVuY3Rpb24odXJsLCBkYXRhLCBzdWNjZXNzKXtcbiAgICBpZiAoIXRoaXMubGVuZ3RoKSByZXR1cm4gdGhpc1xuICAgIHZhciBzZWxmID0gdGhpcywgcGFydHMgPSB1cmwuc3BsaXQoL1xccy8pLCBzZWxlY3RvcixcbiAgICAgICAgb3B0aW9ucyA9IHBhcnNlQXJndW1lbnRzKHVybCwgZGF0YSwgc3VjY2VzcyksXG4gICAgICAgIGNhbGxiYWNrID0gb3B0aW9ucy5zdWNjZXNzXG4gICAgaWYgKHBhcnRzLmxlbmd0aCA+IDEpIG9wdGlvbnMudXJsID0gcGFydHNbMF0sIHNlbGVjdG9yID0gcGFydHNbMV1cbiAgICBvcHRpb25zLnN1Y2Nlc3MgPSBmdW5jdGlvbihyZXNwb25zZSl7XG4gICAgICBzZWxmLmh0bWwoc2VsZWN0b3IgP1xuICAgICAgICAkKCc8ZGl2PicpLmh0bWwocmVzcG9uc2UucmVwbGFjZShyc2NyaXB0LCBcIlwiKSkuZmluZChzZWxlY3RvcilcbiAgICAgICAgOiByZXNwb25zZSlcbiAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrLmFwcGx5KHNlbGYsIGFyZ3VtZW50cylcbiAgICB9XG4gICAgJC5hamF4KG9wdGlvbnMpXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHZhciBlc2NhcGUgPSBlbmNvZGVVUklDb21wb25lbnRcblxuICBmdW5jdGlvbiBzZXJpYWxpemUocGFyYW1zLCBvYmosIHRyYWRpdGlvbmFsLCBzY29wZSl7XG4gICAgdmFyIHR5cGUsIGFycmF5ID0gJC5pc0FycmF5KG9iaiksIGhhc2ggPSAkLmlzUGxhaW5PYmplY3Qob2JqKVxuICAgICQuZWFjaChvYmosIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcbiAgICAgIHR5cGUgPSAkLnR5cGUodmFsdWUpXG4gICAgICBpZiAoc2NvcGUpIGtleSA9IHRyYWRpdGlvbmFsID8gc2NvcGUgOlxuICAgICAgICBzY29wZSArICdbJyArIChoYXNoIHx8IHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnYXJyYXknID8ga2V5IDogJycpICsgJ10nXG4gICAgICAvLyBoYW5kbGUgZGF0YSBpbiBzZXJpYWxpemVBcnJheSgpIGZvcm1hdFxuICAgICAgaWYgKCFzY29wZSAmJiBhcnJheSkgcGFyYW1zLmFkZCh2YWx1ZS5uYW1lLCB2YWx1ZS52YWx1ZSlcbiAgICAgIC8vIHJlY3Vyc2UgaW50byBuZXN0ZWQgb2JqZWN0c1xuICAgICAgZWxzZSBpZiAodHlwZSA9PSBcImFycmF5XCIgfHwgKCF0cmFkaXRpb25hbCAmJiB0eXBlID09IFwib2JqZWN0XCIpKVxuICAgICAgICBzZXJpYWxpemUocGFyYW1zLCB2YWx1ZSwgdHJhZGl0aW9uYWwsIGtleSlcbiAgICAgIGVsc2UgcGFyYW1zLmFkZChrZXksIHZhbHVlKVxuICAgIH0pXG4gIH1cblxuICAkLnBhcmFtID0gZnVuY3Rpb24ob2JqLCB0cmFkaXRpb25hbCl7XG4gICAgdmFyIHBhcmFtcyA9IFtdXG4gICAgcGFyYW1zLmFkZCA9IGZ1bmN0aW9uKGssIHYpeyB0aGlzLnB1c2goZXNjYXBlKGspICsgJz0nICsgZXNjYXBlKHYpKSB9XG4gICAgc2VyaWFsaXplKHBhcmFtcywgb2JqLCB0cmFkaXRpb25hbClcbiAgICByZXR1cm4gcGFyYW1zLmpvaW4oJyYnKS5yZXBsYWNlKC8lMjAvZywgJysnKVxuICB9XG59KShaZXB0bylcblxuOyhmdW5jdGlvbigkKXtcbiAgJC5mbi5zZXJpYWxpemVBcnJheSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciByZXN1bHQgPSBbXSwgZWxcbiAgICAkKFtdLnNsaWNlLmNhbGwodGhpcy5nZXQoMCkuZWxlbWVudHMpKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICBlbCA9ICQodGhpcylcbiAgICAgIHZhciB0eXBlID0gZWwuYXR0cigndHlwZScpXG4gICAgICBpZiAodGhpcy5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpICE9ICdmaWVsZHNldCcgJiZcbiAgICAgICAgIXRoaXMuZGlzYWJsZWQgJiYgdHlwZSAhPSAnc3VibWl0JyAmJiB0eXBlICE9ICdyZXNldCcgJiYgdHlwZSAhPSAnYnV0dG9uJyAmJlxuICAgICAgICAoKHR5cGUgIT0gJ3JhZGlvJyAmJiB0eXBlICE9ICdjaGVja2JveCcpIHx8IHRoaXMuY2hlY2tlZCkpXG4gICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICBuYW1lOiBlbC5hdHRyKCduYW1lJyksXG4gICAgICAgICAgdmFsdWU6IGVsLnZhbCgpXG4gICAgICAgIH0pXG4gICAgfSlcbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cblxuICAkLmZuLnNlcmlhbGl6ZSA9IGZ1bmN0aW9uKCl7XG4gICAgdmFyIHJlc3VsdCA9IFtdXG4gICAgdGhpcy5zZXJpYWxpemVBcnJheSgpLmZvckVhY2goZnVuY3Rpb24oZWxtKXtcbiAgICAgIHJlc3VsdC5wdXNoKGVuY29kZVVSSUNvbXBvbmVudChlbG0ubmFtZSkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQoZWxtLnZhbHVlKSlcbiAgICB9KVxuICAgIHJldHVybiByZXN1bHQuam9pbignJicpXG4gIH1cblxuICAkLmZuLnN1Ym1pdCA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgaWYgKGNhbGxiYWNrKSB0aGlzLmJpbmQoJ3N1Ym1pdCcsIGNhbGxiYWNrKVxuICAgIGVsc2UgaWYgKHRoaXMubGVuZ3RoKSB7XG4gICAgICB2YXIgZXZlbnQgPSAkLkV2ZW50KCdzdWJtaXQnKVxuICAgICAgdGhpcy5lcSgwKS50cmlnZ2VyKGV2ZW50KVxuICAgICAgaWYgKCFldmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkgdGhpcy5nZXQoMCkuc3VibWl0KClcbiAgICB9XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG59KShaZXB0bylcblxuOyhmdW5jdGlvbigkKXtcbiAgLy8gX19wcm90b19fIGRvZXNuJ3QgZXhpc3Qgb24gSUU8MTEsIHNvIHJlZGVmaW5lXG4gIC8vIHRoZSBaIGZ1bmN0aW9uIHRvIHVzZSBvYmplY3QgZXh0ZW5zaW9uIGluc3RlYWRcbiAgaWYgKCEoJ19fcHJvdG9fXycgaW4ge30pKSB7XG4gICAgJC5leHRlbmQoJC56ZXB0bywge1xuICAgICAgWjogZnVuY3Rpb24oZG9tLCBzZWxlY3Rvcil7XG4gICAgICAgIGRvbSA9IGRvbSB8fCBbXVxuICAgICAgICAkLmV4dGVuZChkb20sICQuZm4pXG4gICAgICAgIGRvbS5zZWxlY3RvciA9IHNlbGVjdG9yIHx8ICcnXG4gICAgICAgIGRvbS5fX1ogPSB0cnVlXG4gICAgICAgIHJldHVybiBkb21cbiAgICAgIH0sXG4gICAgICAvLyB0aGlzIGlzIGEga2x1ZGdlIGJ1dCB3b3Jrc1xuICAgICAgaXNaOiBmdW5jdGlvbihvYmplY3Qpe1xuICAgICAgICByZXR1cm4gJC50eXBlKG9iamVjdCkgPT09ICdhcnJheScgJiYgJ19fWicgaW4gb2JqZWN0XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIC8vIGdldENvbXB1dGVkU3R5bGUgc2hvdWxkbid0IGZyZWFrIG91dCB3aGVuIGNhbGxlZFxuICAvLyB3aXRob3V0IGEgdmFsaWQgZWxlbWVudCBhcyBhcmd1bWVudFxuICB0cnkge1xuICAgIGdldENvbXB1dGVkU3R5bGUodW5kZWZpbmVkKVxuICB9IGNhdGNoKGUpIHtcbiAgICB2YXIgbmF0aXZlR2V0Q29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGU7XG4gICAgd2luZG93LmdldENvbXB1dGVkU3R5bGUgPSBmdW5jdGlvbihlbGVtZW50KXtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBuYXRpdmVHZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpXG4gICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0pKFplcHRvKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=