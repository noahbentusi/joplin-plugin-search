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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./api/index.ts":
/*!**********************!*\
  !*** ./api/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = joplin;


/***/ }),

/***/ "./api/types.ts":
/*!**********************!*\
  !*** ./api/types.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// =================================================================
// Command API types
// =================================================================
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentScriptType = exports.SettingItemType = exports.ToolbarButtonLocation = exports.isContextMenuItemLocation = exports.MenuItemLocation = exports.ImportModuleOutputFormat = exports.FileSystemItem = void 0;
// =================================================================
// Interop API types
// =================================================================
var FileSystemItem;
(function (FileSystemItem) {
    FileSystemItem["File"] = "file";
    FileSystemItem["Directory"] = "directory";
})(FileSystemItem = exports.FileSystemItem || (exports.FileSystemItem = {}));
var ImportModuleOutputFormat;
(function (ImportModuleOutputFormat) {
    ImportModuleOutputFormat["Markdown"] = "md";
    ImportModuleOutputFormat["Html"] = "html";
})(ImportModuleOutputFormat = exports.ImportModuleOutputFormat || (exports.ImportModuleOutputFormat = {}));
var MenuItemLocation;
(function (MenuItemLocation) {
    MenuItemLocation["File"] = "file";
    MenuItemLocation["Edit"] = "edit";
    MenuItemLocation["View"] = "view";
    MenuItemLocation["Note"] = "note";
    MenuItemLocation["Tools"] = "tools";
    MenuItemLocation["Help"] = "help";
    /**
     * @deprecated Do not use - same as NoteListContextMenu
     */
    MenuItemLocation["Context"] = "context";
    // If adding an item here, don't forget to update isContextMenuItemLocation()
    /**
     * When a command is called from the note list context menu, the
     * command will receive the following arguments:
     *
     * - `noteIds:string[]`: IDs of the notes that were right-clicked on.
     */
    MenuItemLocation["NoteListContextMenu"] = "noteListContextMenu";
    MenuItemLocation["EditorContextMenu"] = "editorContextMenu";
    /**
     * When a command is called from a folder context menu, the
     * command will receive the following arguments:
     *
     * - `folderId:string`: ID of the folder that was right-clicked on
     */
    MenuItemLocation["FolderContextMenu"] = "folderContextMenu";
    /**
     * When a command is called from a tag context menu, the
     * command will receive the following arguments:
     *
     * - `tagId:string`: ID of the tag that was right-clicked on
     */
    MenuItemLocation["TagContextMenu"] = "tagContextMenu";
})(MenuItemLocation = exports.MenuItemLocation || (exports.MenuItemLocation = {}));
function isContextMenuItemLocation(location) {
    return [
        MenuItemLocation.Context,
        MenuItemLocation.NoteListContextMenu,
        MenuItemLocation.EditorContextMenu,
        MenuItemLocation.FolderContextMenu,
        MenuItemLocation.TagContextMenu,
    ].includes(location);
}
exports.isContextMenuItemLocation = isContextMenuItemLocation;
var ToolbarButtonLocation;
(function (ToolbarButtonLocation) {
    /**
     * This toolbar in the top right corner of the application. It applies to the note as a whole, including its metadata.
     */
    ToolbarButtonLocation["NoteToolbar"] = "noteToolbar";
    /**
     * This toolbar is right above the text editor. It applies to the note body only.
     */
    ToolbarButtonLocation["EditorToolbar"] = "editorToolbar";
})(ToolbarButtonLocation = exports.ToolbarButtonLocation || (exports.ToolbarButtonLocation = {}));
// =================================================================
// Settings types
// =================================================================
var SettingItemType;
(function (SettingItemType) {
    SettingItemType[SettingItemType["Int"] = 1] = "Int";
    SettingItemType[SettingItemType["String"] = 2] = "String";
    SettingItemType[SettingItemType["Bool"] = 3] = "Bool";
    SettingItemType[SettingItemType["Array"] = 4] = "Array";
    SettingItemType[SettingItemType["Object"] = 5] = "Object";
    SettingItemType[SettingItemType["Button"] = 6] = "Button";
})(SettingItemType = exports.SettingItemType || (exports.SettingItemType = {}));
var ContentScriptType;
(function (ContentScriptType) {
    /**
     * Registers a new Markdown-It plugin, which should follow the template
     * below.
     *
     * ```javascript
     * module.exports = {
     *     default: function(context) {
     *         return {
     *             plugin: function(markdownIt, options) {
     *                 // ...
     *             },
     *             assets: {
     *                 // ...
     *             },
     *         }
     *     }
     * }
     * ```
     * See [the
     * demo](https://github.com/laurent22/joplin/tree/dev/packages/app-cli/tests/support/plugins/content_script)
     * for a simple Markdown-it plugin example.
     *
     * ## Exported members
     *
     * - The `context` argument is currently unused but could be used later on
     *   to provide access to your own plugin so that the content script and
     *   plugin can communicate.
     *
     * - The **required** `plugin` key is the actual Markdown-It plugin - check
     *   the [official doc](https://github.com/markdown-it/markdown-it) for more
     *   information. The `options` parameter is of type
     *   [RuleOptions](https://github.com/laurent22/joplin/blob/dev/packages/renderer/MdToHtml.ts),
     *   which contains a number of options, mostly useful for Joplin's internal
     *   code.
     *
     * - Using the **optional** `assets` key you may specify assets such as JS
     *   or CSS that should be loaded in the rendered HTML document. Check for
     *   example the Joplin [Mermaid
     *   plugin](https://github.com/laurent22/joplin/blob/dev/packages/renderer/MdToHtml/rules/mermaid.ts)
     *   to see how the data should be structured.
     *
     * ## Posting messages from the content script to your plugin
     *
     * The application provides the following function to allow executing
     * commands from the rendered HTML code:
     *
     * ```javascript
     * const response = await webviewApi.postMessage(contentScriptId, message);
     * ```
     *
     * - `contentScriptId` is the ID you've defined when you registered the
     *   content script. You can retrieve it from the
     *   {@link ContentScriptContext | context}.
     * - `message` can be any basic JavaScript type (number, string, plain
     *   object), but it cannot be a function or class instance.
     *
     * When you post a message, the plugin can send back a `response` thus
     * allowing two-way communication:
     *
     * ```javascript
     * await joplin.contentScripts.onMessage(contentScriptId, (message) => {
     *     // Process message
     *     return response; // Can be any object, string or number
     * });
     * ```
     *
     * See {@link JoplinContentScripts.onMessage} for more details, as well as
     * the [postMessage
     * demo](https://github.com/laurent22/joplin/tree/dev/packages/app-cli/tests/support/plugins/post_messages).
     *
     * ## Registering an existing Markdown-it plugin
     *
     * To include a regular Markdown-It plugin, that doesn't make use of any
     * Joplin-specific features, you would simply create a file such as this:
     *
     * ```javascript
     * module.exports = {
     *     default: function(context) {
     *         return {
     *             plugin: require('markdown-it-toc-done-right');
     *         }
     *     }
     * }
     * ```
     */
    ContentScriptType["MarkdownItPlugin"] = "markdownItPlugin";
    /**
     * Registers a new CodeMirror plugin, which should follow the template
     * below.
     *
     * ```javascript
     * module.exports = {
     *     default: function(context) {
     *         return {
     *             plugin: function(CodeMirror) {
     *                 // ...
     *             },
     *             codeMirrorResources: [],
     *             codeMirrorOptions: {
     *                                  // ...
     *                       },
     *             assets: {
     *                 // ...
     *             },
     *         }
     *     }
     * }
     * ```
     *
     * - The `context` argument is currently unused but could be used later on
     *   to provide access to your own plugin so that the content script and
     *   plugin can communicate.
     *
     * - The `plugin` key is your CodeMirror plugin. This is where you can
     *   register new commands with CodeMirror or interact with the CodeMirror
     *   instance as needed.
     *
     * - The `codeMirrorResources` key is an array of CodeMirror resources that
     *   will be loaded and attached to the CodeMirror module. These are made up
     *   of addons, keymaps, and modes. For example, for a plugin that want's to
     *   enable clojure highlighting in code blocks. `codeMirrorResources` would
     *   be set to `['mode/clojure/clojure']`.
     *
     * - The `codeMirrorOptions` key contains all the
     *   [CodeMirror](https://codemirror.net/doc/manual.html#config) options
     *   that will be set or changed by this plugin. New options can alse be
     *   declared via
     *   [`CodeMirror.defineOption`](https://codemirror.net/doc/manual.html#defineOption),
     *   and then have their value set here. For example, a plugin that enables
     *   line numbers would set `codeMirrorOptions` to `{'lineNumbers': true}`.
     *
     * - Using the **optional** `assets` key you may specify **only** CSS assets
     *   that should be loaded in the rendered HTML document. Check for example
     *   the Joplin [Mermaid
     *   plugin](https://github.com/laurent22/joplin/blob/dev/packages/renderer/MdToHtml/rules/mermaid.ts)
     *   to see how the data should be structured.
     *
     * One of the `plugin`, `codeMirrorResources`, or `codeMirrorOptions` keys
     * must be provided for the plugin to be valid. Having multiple or all
     * provided is also okay.
     *
     * See also the [demo
     * plugin](https://github.com/laurent22/joplin/tree/dev/packages/app-cli/tests/support/plugins/codemirror_content_script)
     * for an example of all these keys being used in one plugin.
     *
     * ## Posting messages from the content script to your plugin
     *
     * In order to post messages to the plugin, you can use the postMessage
     * function passed to the {@link ContentScriptContext | context}.
     *
     * ```javascript
     * const response = await context.postMessage('messageFromCodeMirrorContentScript');
     * ```
     *
     * When you post a message, the plugin can send back a `response` thus
     * allowing two-way communication:
     *
     * ```javascript
     * await joplin.contentScripts.onMessage(contentScriptId, (message) => {
     *     // Process message
     *     return response; // Can be any object, string or number
     * });
     * ```
     *
     * See {@link JoplinContentScripts.onMessage} for more details, as well as
     * the [postMessage
     * demo](https://github.com/laurent22/joplin/tree/dev/packages/app-cli/tests/support/plugins/post_messages).
     *
     */
    ContentScriptType["CodeMirrorPlugin"] = "codeMirrorPlugin";
})(ContentScriptType = exports.ContentScriptType || (exports.ContentScriptType = {}));


/***/ }),

/***/ "./src/common/hostChannel.ts":
/*!***********************************!*\
  !*** ./src/common/hostChannel.ts ***!
  \***********************************/
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
exports.hostChannel = void 0;
const api_1 = __importDefault(__webpack_require__(/*! api */ "./api/index.ts"));
const message_1 = __webpack_require__(/*! ./message */ "./src/common/message.ts");
function hostChannel(panelId, handlers) {
    let local = {
        stubs: {}
    };
    api_1.default.views.panels.onMessage(panelId, (message) => __awaiter(this, void 0, void 0, function* () {
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
            api_1.default.views.panels.postMessage(panelId, {
                event: message_1.ChannelEvent.requestEvent,
                value: {
                    requestId,
                    name, args
                }
            });
        }));
    };
}
exports.hostChannel = hostChannel;


/***/ }),

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
    namespace[name] = setTimeout(func, timeout);
};
exports.timeout = function (timer) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), timer);
    });
};


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
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
const api_1 = __importDefault(__webpack_require__(/*! api */ "./api/index.ts"));
const types_1 = __webpack_require__(/*! api/types */ "./api/types.ts");
const types_2 = __webpack_require__(/*! api/types */ "./api/types.ts");
const joplin_data_api_1 = __importDefault(__webpack_require__(/*! ./joplin/joplin-data-api */ "./src/joplin/joplin-data-api.ts"));
const hostChannel_1 = __webpack_require__(/*! ./common/hostChannel */ "./src/common/hostChannel.ts");
const utils_1 = __webpack_require__(/*! ./common/utils */ "./src/common/utils.ts");
const html_js_1 = __importDefault(__webpack_require__(/*! ./webview/html.js */ "./src/webview/html.js"));
const SETTING_TOP_LINES = 'noah.search.top_lines';
const SETTING_BOTTOM_LINES = 'noah.search.bottom_lines';
let panelId = null;
let active = true;
let channel = null;
function initSettings() {
    return __awaiter(this, void 0, void 0, function* () {
        const SECTION = 'Search';
        yield api_1.default.settings.registerSection(SECTION, {
            description: 'Search Plugin Settings',
            label: 'Search',
            iconName: 'fas fa-search'
        });
        yield api_1.default.settings.registerSettings({
            [SETTING_TOP_LINES]: {
                public: true,
                section: SECTION,
                type: types_2.SettingItemType.Int,
                value: 3,
                label: "The lines's count shown above that search result.",
            },
            [SETTING_BOTTOM_LINES]: {
                public: true,
                section: SECTION,
                type: types_2.SettingItemType.Int,
                value: 3,
                label: "The lines's count shown after that search result.",
            }
        });
    });
}
function initPanel() {
    return __awaiter(this, void 0, void 0, function* () {
        panelId = yield api_1.default.views.panels.create("graph");
        yield api_1.default.views.panels.setHtml(panelId, html_js_1.default);
        api_1.default.views.panels.addScript(panelId, "./webview/jquery.min.js");
        api_1.default.views.panels.addScript(panelId, "./webview/webview.css");
        api_1.default.views.panels.addScript(panelId, "./webview/webview.js");
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
    });
}
function showPanel(show) {
    return __awaiter(this, void 0, void 0, function* () {
        if (show === null || show === undefined) {
            show = active;
        }
        else
            active = show;
        yield api_1.default.views.panels.show(panelId, active);
    });
}
function initCommands() {
    return __awaiter(this, void 0, void 0, function* () {
        api_1.default.commands.register({
            name: "toggleSearch",
            label: "toggle search view",
            iconName: "fas fa-search",
            execute: () => __awaiter(this, void 0, void 0, function* () {
                showPanel(!active);
            }),
        });
        api_1.default.views.toolbarButtons.create("toggleSearch", "toggleSearch", types_1.ToolbarButtonLocation.NoteToolbar);
    });
}
function initHandlers() {
    return __awaiter(this, void 0, void 0, function* () {
        const dataApi = joplin_data_api_1.default.instance();
        const maps = new Map();
        channel = hostChannel_1.hostChannel(panelId, maps);
        maps.set("open", (noteId) => __awaiter(this, void 0, void 0, function* () {
            api_1.default.commands.execute("openNote", noteId);
        }));
        maps.set("search", (searchId, keyword, isRegex) => __awaiter(this, void 0, void 0, function* () {
            let regex = null;
            if (isRegex)
                regex = new RegExp(keyword, "g");
            function matchLine(line) {
                if (!isRegex)
                    return line.indexOf(keyword) != -1;
                return Array.from(line.matchAll(regex)).length != 0;
            }
            const topLineNum = Number(yield api_1.default.settings.value(SETTING_TOP_LINES));
            const bottomLineNum = Number(yield api_1.default.settings.value(SETTING_BOTTOM_LINES));
            let toplines = [];
            const result = yield dataApi.getNotes({
                fields: ['id', 'parent_id', 'title', 'body']
            });
            for (let index = 0; index != result.results.length; ++index) {
                yield utils_1.timeout(0);
                const note = result.results[index];
                let notebook = null;
                if (note.parent_id != null) {
                    notebook = yield dataApi.getNoteBook({
                        fields: ['id', 'parent_id', 'title']
                    }, note.parent_id);
                }
                let target = {
                    notebookId: note.parent_id,
                    notebookName: notebook === null || notebook === void 0 ? void 0 : notebook.title,
                    noteId: note.id,
                    noteName: note.title
                };
                const lineDumps = [];
                const dumpResult = (line) => {
                    lineDumps.push(line);
                    console.log(line.lineNumber);
                };
                const flushDump = () => {
                    if (lineDumps.length == 0)
                        return;
                    channel("result", searchId, target, lineDumps);
                };
                const lines = note.body.split("\n");
                let lineNumber = 0;
                while (lineNumber < lines.length) {
                    yield utils_1.timeout(0);
                    let line = lines[lineNumber];
                    toplines.push({
                        lineNumber,
                        lineContent: line
                    });
                    while (toplines.length > topLineNum) {
                        toplines.shift();
                    }
                    if (matchLine(line)) {
                        toplines.forEach((line) => {
                            dumpResult(line);
                        });
                        toplines = [];
                        let bottom = bottomLineNum;
                        while (bottom--) {
                            ++lineNumber;
                            if (lineNumber >= lines.length)
                                break;
                            line = lines[lineNumber];
                            dumpResult({
                                lineNumber,
                                lineContent: line
                            });
                        }
                    }
                    ++lineNumber;
                }
                flushDump();
            }
            channel("finish", true);
        }));
    });
}
api_1.default.plugins.register({
    onStart: function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield initSettings();
            yield initCommands();
            yield initPanel();
            yield initHandlers();
            showPanel(active);
        });
    },
});


/***/ }),

/***/ "./src/joplin/joplin-data-api.ts":
/*!***************************************!*\
  !*** ./src/joplin/joplin-data-api.ts ***!
  \***************************************/
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
exports.Tag = void 0;
const api_1 = __importDefault(__webpack_require__(/*! api */ "./api/index.ts"));
class Tag {
    constructor(id, label) {
        this.id = id;
        this.label = label;
    }
}
exports.Tag = Tag;
class JoplinDataApi {
    static instance() {
        if (!this.api_) {
            this.api_ = new JoplinDataApi();
        }
        return this.api_;
    }
    //queryParams follows joplin query format so we just need to return it.
    buildQueryParams(queryParams) {
        return queryParams;
    }
    getSelectedNote() {
        return api_1.default.workspace.selectedNote();
    }
    getSelectedNoteIds() {
        return api_1.default.workspace.selectedNoteIds();
    }
    getTags() {
        return __awaiter(this, void 0, void 0, function* () {
            let tags = [];
            let page;
            let query = { fields: ["id", "title"] };
            do {
                page = yield api_1.default.data.get(['tags'], query);
                tags.push(...page.items.map((item) => {
                    return { id: item.id, label: item.title };
                }));
            } while (page.has_more);
            return tags;
        });
    }
    getNoteIdsForTag(tag) {
        return __awaiter(this, void 0, void 0, function* () {
            let noteIds = [];
            let page;
            let query = { fields: ["id"] };
            do {
                page = yield api_1.default.data.get(['tags', tag.id, 'notes'], query);
                noteIds.push(...page.items.map((item) => item.id));
            } while (page.has_more);
            return noteIds;
        });
    }
    /**
     * Get notes satisfying the query.
     * @param query : customize what data is retrieved.
     * @param pageSize : number of notes returned in one subquery.
     * @param max : max number of notes.
     * @returns a tuple : (notes : Map<string, Note>, truncated : boolean)
     * notes : all notes satisfying the query up to maxNote
     * truncated : true if we had to apply a cutoff
     */
    getNotes(query, max = Number.MAX_SAFE_INTEGER) {
        return __awaiter(this, void 0, void 0, function* () {
            let joplinNotes = [];
            let page;
            let pageNum = 1;
            let isLimitReached = () => joplinNotes.length > max;
            let truncated = false;
            do {
                query.page = pageNum;
                try {
                    page = yield api_1.default.data.get(['notes'], query);
                }
                catch (error) {
                    console.error(error);
                    return { results: [], truncated: true };
                }
                joplinNotes.push(...page.items);
                pageNum++;
                if (isLimitReached()) {
                    truncated = true;
                    break;
                }
            } while (page.has_more);
            if (isLimitReached()) {
                console.warn(`Max number of notes reached: ${max}. ` +
                    `Some notes may not be visible.`);
                joplinNotes = joplinNotes.slice(0, max);
            }
            const notes = yield Promise.all(joplinNotes.map((note) => __awaiter(this, void 0, void 0, function* () { return this.buildNote(note); })));
            return { results: notes, truncated: truncated };
        });
    }
    /**
     * Get all notes with given ids.
     * This method can get slow if we have to process a large number of ids since the api authorized only query by id at the time.
     * TODO best would be to add method to get batch of ids to [JoplinDataAPI](https://joplinapp.org/api/references/rest_api/).
     * @param ids list of note ids.
     * @param maxConcurrentRequests max number of concurrent requests to the joplin API. Can we useful we requesting large number of notes.
     * @returns list of notes.
     */
    getNotesByIds(query, ids, maxConcurrentRequests = 10) {
        return __awaiter(this, void 0, void 0, function* () {
            const joplinNotes = [];
            const idsNotFound = [];
            let promises;
            let requests;
            let start, end, chunk = maxConcurrentRequests;
            for (start = 0, end = ids.length; start < end; start += chunk) {
                requests = ids.slice(start, start + chunk);
                promises = requests.map(id => this.getNote(query, id));
                const results = yield Promise.all(promises.map((p, index) => __awaiter(this, void 0, void 0, function* () {
                    return p.catch(e => {
                        idsNotFound.push(requests[index]);
                        return undefined;
                    });
                })));
                const validResults = results.filter(result => !(result == undefined));
                joplinNotes.push(...validResults);
            }
            if (idsNotFound.length != 0) {
                console.warn(`joplin data api : not found error for : ${idsNotFound}`);
            }
            const notes = yield Promise.all(joplinNotes.map((note) => __awaiter(this, void 0, void 0, function* () { return this.buildNote(note); })));
            return { results: notes, idsNotFound: idsNotFound, truncated: false };
        });
    }
    getNoteUpdates(cursor) {
        return __awaiter(this, void 0, void 0, function* () {
            const updates = [];
            let response = null;
            do {
                response = (cursor) ?
                    yield api_1.default.data.get(['events'], { cursor })
                    : yield api_1.default.data.get(['events']);
                updates.push(...response.items);
                cursor = response.cursor;
            } while (response.has_more);
            return { updates, cursor };
        });
    }
    getNote(query, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const joplinNote = yield api_1.default.data.get(['notes', id], query);
            return this.buildNote(joplinNote);
        });
    }
    getNoteBook(query, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const joplinNote = yield api_1.default.data.get(['folders', id], query);
            return this.buildNote(joplinNote);
        });
    }
    buildNote(joplinNote) {
        return __awaiter(this, void 0, void 0, function* () {
            return joplinNote;
            /*const note = parseJoplinNote(joplinNote);
            const tags = await joplin.data.get(['notes', joplinNote.id, 'tags']);
            note.tags = (tags?.items) ? tags.items.map((tag: any) => tag.title) : [];
            return note;*/
        });
    }
}
exports.default = JoplinDataApi;


/***/ }),

/***/ "./src/webview/html.js":
/*!*****************************!*\
  !*** ./src/webview/html.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (`
<div class="search-panel clearfix">
    <div class="search-input text-center">
        <input type="text" name="keyword" placeholder="keyword for search"/>
        <input type="checkbox" name="is_regex"/> regex
    </div>

    <hr/>

    <div class="search-tip"></div>

    <div class="search-result"></div>

    <div class="error"></div>
</div>
`);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBpL2luZGV4LnRzIiwid2VicGFjazovLy8uL2FwaS90eXBlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2hvc3RDaGFubmVsLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vbWVzc2FnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3V0aWxzLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvam9wbGluL2pvcGxpbi1kYXRhLWFwaS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd2Vidmlldy9odG1sLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzlFQSxrQkFBZSxNQUFNLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FDSnRCLG9FQUFvRTtBQUNw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QUcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUMvRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDdEMsQ0FBQztLQUFBO0lBRVksV0FBVyxDQUFDLEtBQVUsRUFBRSxFQUFVOztZQUMzQyxNQUFNLFVBQVUsR0FBRyxNQUFNLGFBQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ2pFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN0QyxDQUFDO0tBQUE7SUFFYSxTQUFTLENBQUMsVUFBZTs7WUFDbkMsT0FBTyxVQUFVLENBQUM7WUFFbEI7OzswQkFHYztRQUNsQixDQUFDO0tBQUE7Q0FFSjtBQXRMRCxnQ0FzTEM7Ozs7Ozs7Ozs7Ozs7QUNqTkQ7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLENBQUMsRSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiaW1wb3J0IHR5cGUgSm9wbGluIGZyb20gJy4vSm9wbGluJztcblxuZGVjbGFyZSBjb25zdCBqb3BsaW46IEpvcGxpbjtcblxuZXhwb3J0IGRlZmF1bHQgam9wbGluO1xuIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIENvbW1hbmQgQVBJIHR5cGVzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbW1hbmQge1xuXHQvKipcblx0ICogTmFtZSBvZiBjb21tYW5kIC0gbXVzdCBiZSBnbG9iYWxseSB1bmlxdWVcblx0ICovXG5cdG5hbWU6IHN0cmluZztcblxuXHQvKipcblx0ICogTGFiZWwgdG8gYmUgZGlzcGxheWVkIG9uIG1lbnUgaXRlbXMgb3Iga2V5Ym9hcmQgc2hvcnRjdXQgZWRpdG9yIGZvciBleGFtcGxlLlxuXHQgKiBJZiBpdCBpcyBtaXNzaW5nLCBpdCdzIGFzc3VtZWQgaXQncyBhIHByaXZhdGUgY29tbWFuZCwgdG8gYmUgY2FsbGVkIHByb2dyYW1tYXRpY2FsbHkgb25seS5cblx0ICogSW4gdGhhdCBjYXNlIHRoZSBjb21tYW5kIHdpbGwgbm90IGFwcGVhciBpbiB0aGUgc2hvcnRjdXQgZWRpdG9yIG9yIGNvbW1hbmQgcGFuZWwsIGFuZCBsb2dpY2FsbHlcblx0ICogc2hvdWxkIG5vdCBiZSB1c2VkIGFzIGEgbWVudSBpdGVtLlxuXHQgKi9cblx0bGFiZWw/OiBzdHJpbmc7XG5cblx0LyoqXG5cdCAqIEljb24gdG8gYmUgdXNlZCBvbiB0b29sYmFyIGJ1dHRvbnMgZm9yIGV4YW1wbGVcblx0ICovXG5cdGljb25OYW1lPzogc3RyaW5nO1xuXG5cdC8qKlxuXHQgKiBDb2RlIHRvIGJlIHJhbiB3aGVuIHRoZSBjb21tYW5kIGlzIGV4ZWN1dGVkLiBJdCBtYXkgcmV0dXJuIGEgcmVzdWx0LlxuXHQgKi9cblx0ZXhlY3V0ZSguLi5hcmdzOiBhbnlbXSk6IFByb21pc2U8YW55IHwgdm9pZD47XG5cblx0LyoqXG5cdCAqIERlZmluZXMgd2hldGhlciB0aGUgY29tbWFuZCBzaG91bGQgYmUgZW5hYmxlZCBvciBkaXNhYmxlZCwgd2hpY2ggaW4gdHVybnNcblx0ICogYWZmZWN0cyB0aGUgZW5hYmxlZCBzdGF0ZSBvZiBhbnkgYXNzb2NpYXRlZCBidXR0b24gb3IgbWVudSBpdGVtLlxuXHQgKlxuXHQgKiBUaGUgY29uZGl0aW9uIHNob3VsZCBiZSBleHByZXNzZWQgYXMgYSBcIndoZW4tY2xhdXNlXCIgKGFzIGluIFZpc3VhbCBTdHVkaW9cblx0ICogQ29kZSkuIEl0J3MgYSBzaW1wbGUgYm9vbGVhbiBleHByZXNzaW9uIHRoYXQgZXZhbHVhdGVzIHRvIGB0cnVlYCBvclxuXHQgKiBgZmFsc2VgLiBJdCBzdXBwb3J0cyB0aGUgZm9sbG93aW5nIG9wZXJhdG9yczpcblx0ICpcblx0ICogT3BlcmF0b3IgfCBTeW1ib2wgfCBFeGFtcGxlXG5cdCAqIC0tIHwgLS0gfCAtLVxuXHQgKiBFcXVhbGl0eSB8ID09IHwgXCJlZGl0b3JUeXBlID09IG1hcmtkb3duXCJcblx0ICogSW5lcXVhbGl0eSB8ICE9IHwgXCJjdXJyZW50U2NyZWVuICE9IGNvbmZpZ1wiXG5cdCAqIE9yIHwgXFx8XFx8IHwgXCJub3RlSXNUb2RvIFxcfFxcfCBub3RlVG9kb0NvbXBsZXRlZFwiXG5cdCAqIEFuZCB8ICYmIHwgXCJvbmVOb3RlU2VsZWN0ZWQgJiYgIWluQ29uZmxpY3RGb2xkZXJcIlxuXHQgKlxuXHQgKiBKb3BsaW4sIHVubGlrZSBWU0NvZGUsIGFsc28gc3VwcG9ydHMgcGFyZW50aGVzaXMsIHdoaWNoIGFsbG93cyBjcmVhdGluZ1xuXHQgKiBtb3JlIGNvbXBsZXggZXhwcmVzc2lvbnMgc3VjaCBhcyBgY29uZDEgfHwgKGNvbmQyICYmIGNvbmQzKWAuIE9ubHkgb25lXG5cdCAqIGxldmVsIG9mIHBhcmVudGhlc2lzIGlzIHBvc3NpYmxlIChuZXN0ZWQgb25lcyBhcmVuJ3Qgc3VwcG9ydGVkKS5cblx0ICpcblx0ICogQ3VycmVudGx5IHRoZSBzdXBwb3J0ZWQgY29udGV4dCB2YXJpYWJsZXMgYXJlbid0IGRvY3VtZW50ZWQsIGJ1dCB5b3UgY2FuXG5cdCAqIGZpbmQgdGhlIGxpc3QgYmVsb3c6XG5cdCAqXG5cdCAqIC0gW0dsb2JhbCBXaGVuIENsYXVzZXNdKGh0dHBzOi8vZ2l0aHViLmNvbS9sYXVyZW50MjIvam9wbGluL2Jsb2IvZGV2L3BhY2thZ2VzL2xpYi9zZXJ2aWNlcy9jb21tYW5kcy9zdGF0ZVRvV2hlbkNsYXVzZUNvbnRleHQudHMpXG5cdCAqIC0gW0Rlc2t0b3AgYXBwIFdoZW4gQ2xhdXNlc10oaHR0cHM6Ly9naXRodWIuY29tL2xhdXJlbnQyMi9qb3BsaW4vYmxvYi9kZXYvcGFja2FnZXMvYXBwLWRlc2t0b3Avc2VydmljZXMvY29tbWFuZHMvc3RhdGVUb1doZW5DbGF1c2VDb250ZXh0LnRzKVxuXHQgKlxuXHQgKiBOb3RlOiBDb21tYW5kcyBhcmUgZW5hYmxlZCBieSBkZWZhdWx0IHVubGVzcyB5b3UgdXNlIHRoaXMgcHJvcGVydHkuXG5cdCAqL1xuXHRlbmFibGVkQ29uZGl0aW9uPzogc3RyaW5nO1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gSW50ZXJvcCBBUEkgdHlwZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBlbnVtIEZpbGVTeXN0ZW1JdGVtIHtcblx0RmlsZSA9ICdmaWxlJyxcblx0RGlyZWN0b3J5ID0gJ2RpcmVjdG9yeScsXG59XG5cbmV4cG9ydCBlbnVtIEltcG9ydE1vZHVsZU91dHB1dEZvcm1hdCB7XG5cdE1hcmtkb3duID0gJ21kJyxcblx0SHRtbCA9ICdodG1sJyxcbn1cblxuLyoqXG4gKiBVc2VkIHRvIGltcGxlbWVudCBhIG1vZHVsZSB0byBleHBvcnQgZGF0YSBmcm9tIEpvcGxpbi4gW1ZpZXcgdGhlIGRlbW8gcGx1Z2luXShodHRwczovL2dpdGh1Yi5jb20vbGF1cmVudDIyL2pvcGxpbi90cmVlL2Rldi9wYWNrYWdlcy9hcHAtY2xpL3Rlc3RzL3N1cHBvcnQvcGx1Z2lucy9qc29uX2V4cG9ydCkgZm9yIGFuIGV4YW1wbGUuXG4gKlxuICogSW4gZ2VuZXJhbCwgYWxsIHRoZSBldmVudCBoYW5kbGVycyB5b3UnbGwgbmVlZCB0byBpbXBsZW1lbnQgdGFrZSBhIGBjb250ZXh0YCBvYmplY3QgYXMgYSBmaXJzdCBhcmd1bWVudC4gVGhpcyBvYmplY3Qgd2lsbCBjb250YWluIHRoZSBleHBvcnQgb3IgaW1wb3J0IHBhdGggYXMgd2VsbCBhcyB2YXJpb3VzIG9wdGlvbmFsIHByb3BlcnRpZXMsIHN1Y2ggYXMgd2hpY2ggbm90ZXMgb3Igbm90ZWJvb2tzIG5lZWQgdG8gYmUgZXhwb3J0ZWQuXG4gKlxuICogVG8gZ2V0IGEgYmV0dGVyIHNlbnNlIG9mIHdoYXQgaXQgd2lsbCBjb250YWluIGl0IGNhbiBiZSB1c2VmdWwgdG8gcHJpbnQgaXQgdXNpbmcgYGNvbnNvbGUuaW5mbyhjb250ZXh0KWAuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRXhwb3J0TW9kdWxlIHtcblx0LyoqXG5cdCAqIFRoZSBmb3JtYXQgdG8gYmUgZXhwb3J0ZWQsIGVnIFwiZW5leFwiLCBcImpleFwiLCBcImpzb25cIiwgZXRjLlxuXHQgKi9cblx0Zm9ybWF0OiBzdHJpbmc7XG5cblx0LyoqXG5cdCAqIFRoZSBkZXNjcmlwdGlvbiB0aGF0IHdpbGwgYXBwZWFyIGluIHRoZSBVSSwgZm9yIGV4YW1wbGUgaW4gdGhlIG1lbnUgaXRlbS5cblx0ICovXG5cdGRlc2NyaXB0aW9uOiBzdHJpbmc7XG5cblx0LyoqXG5cdCAqIFdoZXRoZXIgdGhlIG1vZHVsZSB3aWxsIGV4cG9ydCBhIHNpbmdsZSBmaWxlIG9yIG11bHRpcGxlIGZpbGVzIGluIGEgZGlyZWN0b3J5LiBJdCBhZmZlY3RzIHRoZSBvcGVuIGRpYWxvZyB0aGF0IHdpbGwgYmUgcHJlc2VudGVkIHRvIHRoZSB1c2VyIHdoZW4gdXNpbmcgeW91ciBleHBvcnRlci5cblx0ICovXG5cdHRhcmdldDogRmlsZVN5c3RlbUl0ZW07XG5cblx0LyoqXG5cdCAqIE9ubHkgYXBwbGllcyB0byBzaW5nbGUgZmlsZSBleHBvcnRlcnMgb3IgaW1wb3J0ZXJzXG5cdCAqIEl0IHRlbGxzIHdoZXRoZXIgdGhlIGZvcm1hdCBjYW4gcGFja2FnZSBtdWx0aXBsZSBub3RlcyBpbnRvIG9uZSBmaWxlLlxuXHQgKiBGb3IgZXhhbXBsZSBKRVggb3IgRU5FWCBjYW4sIGJ1dCBIVE1MIGNhbm5vdC5cblx0ICovXG5cdGlzTm90ZUFyY2hpdmU6IGJvb2xlYW47XG5cblx0LyoqXG5cdCAqIFRoZSBleHRlbnNpb25zIG9mIHRoZSBmaWxlcyBleHBvcnRlZCBieSB5b3VyIG1vZHVsZS4gRm9yIGV4YW1wbGUsIGl0IGlzIGBbXCJodG1cIiwgXCJodG1sXCJdYCBmb3IgdGhlIEhUTUwgbW9kdWxlLCBhbmQganVzdCBgW1wiamV4XCJdYCBmb3IgdGhlIEpFWCBtb2R1bGUuXG5cdCAqL1xuXHRmaWxlRXh0ZW5zaW9ucz86IHN0cmluZ1tdO1xuXG5cdC8qKlxuXHQgKiBDYWxsZWQgd2hlbiB0aGUgZXhwb3J0IHByb2Nlc3Mgc3RhcnRzLlxuXHQgKi9cblx0b25Jbml0KGNvbnRleHQ6IEV4cG9ydENvbnRleHQpOiBQcm9taXNlPHZvaWQ+O1xuXG5cdC8qKlxuXHQgKiBDYWxsZWQgd2hlbiBhbiBpdGVtIG5lZWRzIHRvIGJlIHByb2Nlc3NlZC4gQW4gXCJpdGVtXCIgY2FuIGJlIGFueSBKb3BsaW4gb2JqZWN0LCBzdWNoIGFzIGEgbm90ZSwgYSBmb2xkZXIsIGEgbm90ZWJvb2ssIGV0Yy5cblx0ICovXG5cdG9uUHJvY2Vzc0l0ZW0oY29udGV4dDogRXhwb3J0Q29udGV4dCwgaXRlbVR5cGU6IG51bWJlciwgaXRlbTogYW55KTogUHJvbWlzZTx2b2lkPjtcblxuXHQvKipcblx0ICogQ2FsbGVkIHdoZW4gYSByZXNvdXJjZSBmaWxlIG5lZWRzIHRvIGJlIGV4cG9ydGVkLlxuXHQgKi9cblx0b25Qcm9jZXNzUmVzb3VyY2UoY29udGV4dDogRXhwb3J0Q29udGV4dCwgcmVzb3VyY2U6IGFueSwgZmlsZVBhdGg6IHN0cmluZyk6IFByb21pc2U8dm9pZD47XG5cblx0LyoqXG5cdCAqIENhbGxlZCB3aGVuIHRoZSBleHBvcnQgcHJvY2VzcyBpcyBkb25lLlxuXHQgKi9cblx0b25DbG9zZShjb250ZXh0OiBFeHBvcnRDb250ZXh0KTogUHJvbWlzZTx2b2lkPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJbXBvcnRNb2R1bGUge1xuXHQvKipcblx0ICogVGhlIGZvcm1hdCB0byBiZSBleHBvcnRlZCwgZWcgXCJlbmV4XCIsIFwiamV4XCIsIFwianNvblwiLCBldGMuXG5cdCAqL1xuXHRmb3JtYXQ6IHN0cmluZztcblxuXHQvKipcblx0ICogVGhlIGRlc2NyaXB0aW9uIHRoYXQgd2lsbCBhcHBlYXIgaW4gdGhlIFVJLCBmb3IgZXhhbXBsZSBpbiB0aGUgbWVudSBpdGVtLlxuXHQgKi9cblx0ZGVzY3JpcHRpb246IHN0cmluZztcblxuXHQvKipcblx0ICogT25seSBhcHBsaWVzIHRvIHNpbmdsZSBmaWxlIGV4cG9ydGVycyBvciBpbXBvcnRlcnNcblx0ICogSXQgdGVsbHMgd2hldGhlciB0aGUgZm9ybWF0IGNhbiBwYWNrYWdlIG11bHRpcGxlIG5vdGVzIGludG8gb25lIGZpbGUuXG5cdCAqIEZvciBleGFtcGxlIEpFWCBvciBFTkVYIGNhbiwgYnV0IEhUTUwgY2Fubm90LlxuXHQgKi9cblx0aXNOb3RlQXJjaGl2ZTogYm9vbGVhbjtcblxuXHQvKipcblx0ICogVGhlIHR5cGUgb2Ygc291cmNlcyB0aGF0IGFyZSBzdXBwb3J0ZWQgYnkgdGhlIG1vZHVsZS4gVGVsbHMgd2hldGhlciB0aGUgbW9kdWxlIGNhbiBpbXBvcnQgZmlsZXMgb3IgZGlyZWN0b3JpZXMgb3IgYm90aC5cblx0ICovXG5cdHNvdXJjZXM6IEZpbGVTeXN0ZW1JdGVtW107XG5cblx0LyoqXG5cdCAqIFRlbGxzIHRoZSBmaWxlIGV4dGVuc2lvbnMgb2YgdGhlIGV4cG9ydGVkIGZpbGVzLlxuXHQgKi9cblx0ZmlsZUV4dGVuc2lvbnM/OiBzdHJpbmdbXTtcblxuXHQvKipcblx0ICogVGVsbHMgdGhlIHR5cGUgb2Ygbm90ZXMgdGhhdCB3aWxsIGJlIGdlbmVyYXRlZCwgZWl0aGVyIEhUTUwgb3IgTWFya2Rvd24gKGRlZmF1bHQpLlxuXHQgKi9cblx0b3V0cHV0Rm9ybWF0PzogSW1wb3J0TW9kdWxlT3V0cHV0Rm9ybWF0O1xuXG5cdC8qKlxuXHQgKiBDYWxsZWQgd2hlbiB0aGUgaW1wb3J0IHByb2Nlc3Mgc3RhcnRzLiBUaGVyZSBpcyBvbmx5IG9uZSBldmVudCBoYW5kbGVyIHdpdGhpbiB3aGljaCB5b3Ugc2hvdWxkIGltcG9ydCB0aGUgY29tcGxldGUgZGF0YS5cblx0ICovXG5cdG9uRXhlYyhjb250ZXh0OiBJbXBvcnRDb250ZXh0KTogUHJvbWlzZTx2b2lkPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFeHBvcnRPcHRpb25zIHtcblx0Zm9ybWF0Pzogc3RyaW5nO1xuXHRwYXRoPzogc3RyaW5nO1xuXHRzb3VyY2VGb2xkZXJJZHM/OiBzdHJpbmdbXTtcblx0c291cmNlTm90ZUlkcz86IHN0cmluZ1tdO1xuXHQvLyBtb2R1bGVQYXRoPzogc3RyaW5nO1xuXHR0YXJnZXQ/OiBGaWxlU3lzdGVtSXRlbTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFeHBvcnRDb250ZXh0IHtcblx0ZGVzdFBhdGg6IHN0cmluZztcblx0b3B0aW9uczogRXhwb3J0T3B0aW9ucztcblxuXHQvKipcblx0ICogWW91IGNhbiBhdHRhY2ggeW91ciBvd24gY3VzdG9tIGRhdGEgdXNpbmcgdGhpcyBwcm9wZXJ5IC0gaXQgd2lsbCB0aGVuIGJlIHBhc3NlZCB0byBlYWNoIGV2ZW50IGhhbmRsZXIsIGFsbG93aW5nIHlvdSB0byBrZWVwIHN0YXRlIGZyb20gb25lIGV2ZW50IHRvIHRoZSBuZXh0LlxuXHQgKi9cblx0dXNlckRhdGE/OiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW1wb3J0Q29udGV4dCB7XG5cdHNvdXJjZVBhdGg6IHN0cmluZztcblx0b3B0aW9uczogYW55O1xuXHR3YXJuaW5nczogc3RyaW5nW107XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBNaXNjIHR5cGVzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgaW50ZXJmYWNlIFNjcmlwdCB7XG5cdG9uU3RhcnQ/KGV2ZW50OiBhbnkpOiBQcm9taXNlPHZvaWQ+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERpc3Bvc2FibGUge1xuXHQvLyBkaXNwb3NlKCk6dm9pZDtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE1lbnUgdHlwZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3JlYXRlTWVudUl0ZW1PcHRpb25zIHtcblx0YWNjZWxlcmF0b3I6IHN0cmluZztcbn1cblxuZXhwb3J0IGVudW0gTWVudUl0ZW1Mb2NhdGlvbiB7XG5cdEZpbGUgPSAnZmlsZScsXG5cdEVkaXQgPSAnZWRpdCcsXG5cdFZpZXcgPSAndmlldycsXG5cdE5vdGUgPSAnbm90ZScsXG5cdFRvb2xzID0gJ3Rvb2xzJyxcblx0SGVscCA9ICdoZWxwJyxcblxuXHQvKipcblx0ICogQGRlcHJlY2F0ZWQgRG8gbm90IHVzZSAtIHNhbWUgYXMgTm90ZUxpc3RDb250ZXh0TWVudVxuXHQgKi9cblx0Q29udGV4dCA9ICdjb250ZXh0JyxcblxuXHQvLyBJZiBhZGRpbmcgYW4gaXRlbSBoZXJlLCBkb24ndCBmb3JnZXQgdG8gdXBkYXRlIGlzQ29udGV4dE1lbnVJdGVtTG9jYXRpb24oKVxuXG5cdC8qKlxuXHQgKiBXaGVuIGEgY29tbWFuZCBpcyBjYWxsZWQgZnJvbSB0aGUgbm90ZSBsaXN0IGNvbnRleHQgbWVudSwgdGhlXG5cdCAqIGNvbW1hbmQgd2lsbCByZWNlaXZlIHRoZSBmb2xsb3dpbmcgYXJndW1lbnRzOlxuXHQgKlxuXHQgKiAtIGBub3RlSWRzOnN0cmluZ1tdYDogSURzIG9mIHRoZSBub3RlcyB0aGF0IHdlcmUgcmlnaHQtY2xpY2tlZCBvbi5cblx0ICovXG5cdE5vdGVMaXN0Q29udGV4dE1lbnUgPSAnbm90ZUxpc3RDb250ZXh0TWVudScsXG5cblx0RWRpdG9yQ29udGV4dE1lbnUgPSAnZWRpdG9yQ29udGV4dE1lbnUnLFxuXG5cdC8qKlxuXHQgKiBXaGVuIGEgY29tbWFuZCBpcyBjYWxsZWQgZnJvbSBhIGZvbGRlciBjb250ZXh0IG1lbnUsIHRoZVxuXHQgKiBjb21tYW5kIHdpbGwgcmVjZWl2ZSB0aGUgZm9sbG93aW5nIGFyZ3VtZW50czpcblx0ICpcblx0ICogLSBgZm9sZGVySWQ6c3RyaW5nYDogSUQgb2YgdGhlIGZvbGRlciB0aGF0IHdhcyByaWdodC1jbGlja2VkIG9uXG5cdCAqL1xuXHRGb2xkZXJDb250ZXh0TWVudSA9ICdmb2xkZXJDb250ZXh0TWVudScsXG5cblx0LyoqXG5cdCAqIFdoZW4gYSBjb21tYW5kIGlzIGNhbGxlZCBmcm9tIGEgdGFnIGNvbnRleHQgbWVudSwgdGhlXG5cdCAqIGNvbW1hbmQgd2lsbCByZWNlaXZlIHRoZSBmb2xsb3dpbmcgYXJndW1lbnRzOlxuXHQgKlxuXHQgKiAtIGB0YWdJZDpzdHJpbmdgOiBJRCBvZiB0aGUgdGFnIHRoYXQgd2FzIHJpZ2h0LWNsaWNrZWQgb25cblx0ICovXG5cdFRhZ0NvbnRleHRNZW51ID0gJ3RhZ0NvbnRleHRNZW51Jyxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQ29udGV4dE1lbnVJdGVtTG9jYXRpb24obG9jYXRpb246IE1lbnVJdGVtTG9jYXRpb24pOiBib29sZWFuIHtcblx0cmV0dXJuIFtcblx0XHRNZW51SXRlbUxvY2F0aW9uLkNvbnRleHQsXG5cdFx0TWVudUl0ZW1Mb2NhdGlvbi5Ob3RlTGlzdENvbnRleHRNZW51LFxuXHRcdE1lbnVJdGVtTG9jYXRpb24uRWRpdG9yQ29udGV4dE1lbnUsXG5cdFx0TWVudUl0ZW1Mb2NhdGlvbi5Gb2xkZXJDb250ZXh0TWVudSxcblx0XHRNZW51SXRlbUxvY2F0aW9uLlRhZ0NvbnRleHRNZW51LFxuXHRdLmluY2x1ZGVzKGxvY2F0aW9uKTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNZW51SXRlbSB7XG5cdC8qKlxuXHQgKiBDb21tYW5kIHRoYXQgc2hvdWxkIGJlIGFzc29jaWF0ZWQgd2l0aCB0aGUgbWVudSBpdGVtLiBBbGwgbWVudSBpdGVtIHNob3VsZFxuXHQgKiBoYXZlIGEgY29tbWFuZCBhc3NvY2lhdGVkIHdpdGggdGhlbSB1bmxlc3MgdGhleSBhcmUgYSBzdWItbWVudS5cblx0ICovXG5cdGNvbW1hbmROYW1lPzogc3RyaW5nO1xuXG5cdC8qKlxuXHQgKiBBY2NlbGVyYXRvciBhc3NvY2lhdGVkIHdpdGggdGhlIG1lbnUgaXRlbVxuXHQgKi9cblx0YWNjZWxlcmF0b3I/OiBzdHJpbmc7XG5cblx0LyoqXG5cdCAqIE1lbnUgaXRlbXMgdGhhdCBzaG91bGQgYXBwZWFyIGJlbG93IHRoaXMgbWVudSBpdGVtLiBBbGxvd3MgY3JlYXRpbmcgYSBtZW51IHRyZWUuXG5cdCAqL1xuXHRzdWJtZW51PzogTWVudUl0ZW1bXTtcblxuXHQvKipcblx0ICogTWVudSBpdGVtIGxhYmVsLiBJZiBub3Qgc3BlY2lmaWVkLCB0aGUgY29tbWFuZCBsYWJlbCB3aWxsIGJlIHVzZWQgaW5zdGVhZC5cblx0ICovXG5cdGxhYmVsPzogc3RyaW5nO1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gVmlldyBBUEkgdHlwZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBpbnRlcmZhY2UgQnV0dG9uU3BlYyB7XG5cdGlkOiBCdXR0b25JZDtcblx0dGl0bGU/OiBzdHJpbmc7XG5cdG9uQ2xpY2s/KCk6IHZvaWQ7XG59XG5cbmV4cG9ydCB0eXBlIEJ1dHRvbklkID0gc3RyaW5nO1xuXG5leHBvcnQgZW51bSBUb29sYmFyQnV0dG9uTG9jYXRpb24ge1xuXHQvKipcblx0ICogVGhpcyB0b29sYmFyIGluIHRoZSB0b3AgcmlnaHQgY29ybmVyIG9mIHRoZSBhcHBsaWNhdGlvbi4gSXQgYXBwbGllcyB0byB0aGUgbm90ZSBhcyBhIHdob2xlLCBpbmNsdWRpbmcgaXRzIG1ldGFkYXRhLlxuXHQgKi9cblx0Tm90ZVRvb2xiYXIgPSAnbm90ZVRvb2xiYXInLFxuXG5cdC8qKlxuXHQgKiBUaGlzIHRvb2xiYXIgaXMgcmlnaHQgYWJvdmUgdGhlIHRleHQgZWRpdG9yLiBJdCBhcHBsaWVzIHRvIHRoZSBub3RlIGJvZHkgb25seS5cblx0ICovXG5cdEVkaXRvclRvb2xiYXIgPSAnZWRpdG9yVG9vbGJhcicsXG59XG5cbmV4cG9ydCB0eXBlIFZpZXdIYW5kbGUgPSBzdHJpbmc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRWRpdG9yQ29tbWFuZCB7XG5cdG5hbWU6IHN0cmluZztcblx0dmFsdWU/OiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGlhbG9nUmVzdWx0IHtcblx0aWQ6IEJ1dHRvbklkO1xuXHRmb3JtRGF0YT86IGFueTtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFNldHRpbmdzIHR5cGVzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgZW51bSBTZXR0aW5nSXRlbVR5cGUge1xuXHRJbnQgPSAxLFxuXHRTdHJpbmcgPSAyLFxuXHRCb29sID0gMyxcblx0QXJyYXkgPSA0LFxuXHRPYmplY3QgPSA1LFxuXHRCdXR0b24gPSA2LFxufVxuXG4vLyBSZWRlZmluZSBhIHNpbXBsaWZpZWQgaW50ZXJmYWNlIHRvIG1hc2sgaW50ZXJuYWwgZGV0YWlsc1xuLy8gYW5kIHRvIHJlbW92ZSBmdW5jdGlvbiBjYWxscyBhcyB0aGV5IHdvdWxkIGhhdmUgdG8gYmUgYXN5bmMuXG5leHBvcnQgaW50ZXJmYWNlIFNldHRpbmdJdGVtIHtcblx0dmFsdWU6IGFueTtcblx0dHlwZTogU2V0dGluZ0l0ZW1UeXBlO1xuXG5cdGxhYmVsOiBzdHJpbmc7XG5cdGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuXG5cdC8qKlxuXHQgKiBBIHB1YmxpYyBzZXR0aW5nIHdpbGwgYXBwZWFyIGluIHRoZSBDb25maWd1cmF0aW9uIHNjcmVlbiBhbmQgd2lsbCBiZVxuXHQgKiBtb2RpZmlhYmxlIGJ5IHRoZSB1c2VyLiBBIHByaXZhdGUgc2V0dGluZyBob3dldmVyIHdpbGwgbm90IGFwcGVhciB0aGVyZSxcblx0ICogYW5kIGNhbiBvbmx5IGJlIGNoYW5nZWQgcHJvZ3JhbW1hdGljYWxseS4gWW91IG1heSB1c2UgdGhpcyB0byBzdG9yZSBzb21lXG5cdCAqIHZhbHVlcyB0aGF0IHlvdSBkbyBub3Qgd2FudCB0byBkaXJlY3RseSBleHBvc2UuXG5cdCAqL1xuXHRwdWJsaWM6IGJvb2xlYW47XG5cblx0LyoqXG5cdCAqIFlvdSB3b3VsZCB1c3VhbGx5IHNldCB0aGlzIHRvIGEgc2VjdGlvbiB5b3Ugd291bGQgaGF2ZSBjcmVhdGVkXG5cdCAqIHNwZWNpZmljYWxseSBmb3IgdGhlIHBsdWdpbi5cblx0ICovXG5cdHNlY3Rpb24/OiBzdHJpbmc7XG5cblx0LyoqXG5cdCAqIFRvIGNyZWF0ZSBhIHNldHRpbmcgd2l0aCBtdWx0aXBsZSBvcHRpb25zLCBzZXQgdGhpcyBwcm9wZXJ0eSB0byBgdHJ1ZWAuXG5cdCAqIFRoYXQgc2V0dGluZyB3aWxsIHJlbmRlciBhcyBhIGRyb3Bkb3duIGxpc3QgaW4gdGhlIGNvbmZpZ3VyYXRpb24gc2NyZWVuLlxuXHQgKi9cblx0aXNFbnVtPzogYm9vbGVhbjtcblxuXHQvKipcblx0ICogVGhpcyBwcm9wZXJ0eSBpcyByZXF1aXJlZCB3aGVuIGBpc0VudW1gIGlzIGB0cnVlYC4gSW4gd2hpY2ggY2FzZSwgaXRcblx0ICogc2hvdWxkIGNvbnRhaW4gYSBtYXAgb2YgdmFsdWUgPT4gbGFiZWwuXG5cdCAqL1xuXHRvcHRpb25zPzogUmVjb3JkPGFueSwgYW55PjtcblxuXHQvKipcblx0ICogUmVzZXJ2ZWQgcHJvcGVydHkuIE5vdCB1c2VkIGF0IHRoZSBtb21lbnQuXG5cdCAqL1xuXHRhcHBUeXBlcz86IHN0cmluZ1tdO1xuXG5cdC8qKlxuXHQgKiBTZXQgdGhpcyB0byBgdHJ1ZWAgdG8gc3RvcmUgc2VjdXJlIGRhdGEsIHN1Y2ggYXMgcGFzc3dvcmRzLiBBbnkgc3VjaFxuXHQgKiBzZXR0aW5nIHdpbGwgYmUgc3RvcmVkIGluIHRoZSBzeXN0ZW0ga2V5Y2hhaW4gaWYgb25lIGlzIGF2YWlsYWJsZS5cblx0ICovXG5cdHNlY3VyZT86IGJvb2xlYW47XG5cblx0LyoqXG5cdCAqIEFuIGFkdmFuY2VkIHNldHRpbmcgd2lsbCBiZSBtb3ZlZCB1bmRlciB0aGUgXCJBZHZhbmNlZFwiIGJ1dHRvbiBpbiB0aGVcblx0ICogY29uZmlnIHNjcmVlbi5cblx0ICovXG5cdGFkdmFuY2VkPzogYm9vbGVhbjtcblxuXHQvKipcblx0ICogU2V0IHRoZSBtaW4sIG1heCBhbmQgc3RlcCB2YWx1ZXMgaWYgeW91IHdhbnQgdG8gcmVzdHJpY3QgYW4gaW50IHNldHRpbmdcblx0ICogdG8gYSBwYXJ0aWN1bGFyIHJhbmdlLlxuXHQgKi9cblx0bWluaW11bT86IG51bWJlcjtcblx0bWF4aW11bT86IG51bWJlcjtcblx0c3RlcD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZXR0aW5nU2VjdGlvbiB7XG5cdGxhYmVsOiBzdHJpbmc7XG5cdGljb25OYW1lPzogc3RyaW5nO1xuXHRkZXNjcmlwdGlvbj86IHN0cmluZztcblx0bmFtZT86IHN0cmluZztcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERhdGEgQVBJIHR5cGVzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vKipcbiAqIEFuIGFycmF5IG9mIGF0IGxlYXN0IG9uZSBlbGVtZW50IGFuZCBhdCBtb3N0IHRocmVlIGVsZW1lbnRzLlxuICpcbiAqIC0gKipbMF0qKjogUmVzb3VyY2UgbmFtZSAoZWcuIFwibm90ZXNcIiwgXCJmb2xkZXJzXCIsIFwidGFnc1wiLCBldGMuKVxuICogLSAqKlsxXSoqOiAoT3B0aW9uYWwpIFJlc291cmNlIElELlxuICogLSAqKlsyXSoqOiAoT3B0aW9uYWwpIFJlc291cmNlIGxpbmsuXG4gKi9cbmV4cG9ydCB0eXBlIFBhdGggPSBzdHJpbmdbXTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIENvbnRlbnQgU2NyaXB0IHR5cGVzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgdHlwZSBQb3N0TWVzc2FnZUhhbmRsZXIgPSAoaWQ6IHN0cmluZywgbWVzc2FnZTogYW55KT0+IFByb21pc2U8YW55PjtcblxuLyoqXG4gKiBXaGVuIGEgY29udGVudCBzY3JpcHQgaXMgaW5pdGlhbGlzZWQsIGl0IHJlY2VpdmVzIGEgYGNvbnRleHRgIG9iamVjdC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDb250ZW50U2NyaXB0Q29udGV4dCB7XG5cdC8qKlxuXHQgKiBUaGUgcGx1Z2luIElEIHRoYXQgcmVnaXN0ZXJlZCB0aGlzIGNvbnRlbnQgc2NyaXB0XG5cdCAqL1xuXHRwbHVnaW5JZDogc3RyaW5nO1xuXG5cdC8qKlxuXHQgKiBUaGUgY29udGVudCBzY3JpcHQgSUQsIHdoaWNoIG1heSBiZSBuZWNlc3NhcnkgdG8gcG9zdCBtZXNzYWdlc1xuXHQgKi9cblx0Y29udGVudFNjcmlwdElkOiBzdHJpbmc7XG5cblx0LyoqXG5cdCAqIENhbiBiZSB1c2VkIGJ5IENvZGVNaXJyb3IgY29udGVudCBzY3JpcHRzIHRvIHBvc3QgYSBtZXNzYWdlIHRvIHRoZSBwbHVnaW5cblx0ICovXG5cdHBvc3RNZXNzYWdlOiBQb3N0TWVzc2FnZUhhbmRsZXI7XG59XG5cbmV4cG9ydCBlbnVtIENvbnRlbnRTY3JpcHRUeXBlIHtcblx0LyoqXG5cdCAqIFJlZ2lzdGVycyBhIG5ldyBNYXJrZG93bi1JdCBwbHVnaW4sIHdoaWNoIHNob3VsZCBmb2xsb3cgdGhlIHRlbXBsYXRlXG5cdCAqIGJlbG93LlxuXHQgKlxuXHQgKiBgYGBqYXZhc2NyaXB0XG5cdCAqIG1vZHVsZS5leHBvcnRzID0ge1xuXHQgKiAgICAgZGVmYXVsdDogZnVuY3Rpb24oY29udGV4dCkge1xuXHQgKiAgICAgICAgIHJldHVybiB7XG5cdCAqICAgICAgICAgICAgIHBsdWdpbjogZnVuY3Rpb24obWFya2Rvd25JdCwgb3B0aW9ucykge1xuXHQgKiAgICAgICAgICAgICAgICAgLy8gLi4uXG5cdCAqICAgICAgICAgICAgIH0sXG5cdCAqICAgICAgICAgICAgIGFzc2V0czoge1xuXHQgKiAgICAgICAgICAgICAgICAgLy8gLi4uXG5cdCAqICAgICAgICAgICAgIH0sXG5cdCAqICAgICAgICAgfVxuXHQgKiAgICAgfVxuXHQgKiB9XG5cdCAqIGBgYFxuXHQgKiBTZWUgW3RoZVxuXHQgKiBkZW1vXShodHRwczovL2dpdGh1Yi5jb20vbGF1cmVudDIyL2pvcGxpbi90cmVlL2Rldi9wYWNrYWdlcy9hcHAtY2xpL3Rlc3RzL3N1cHBvcnQvcGx1Z2lucy9jb250ZW50X3NjcmlwdClcblx0ICogZm9yIGEgc2ltcGxlIE1hcmtkb3duLWl0IHBsdWdpbiBleGFtcGxlLlxuXHQgKlxuXHQgKiAjIyBFeHBvcnRlZCBtZW1iZXJzXG5cdCAqXG5cdCAqIC0gVGhlIGBjb250ZXh0YCBhcmd1bWVudCBpcyBjdXJyZW50bHkgdW51c2VkIGJ1dCBjb3VsZCBiZSB1c2VkIGxhdGVyIG9uXG5cdCAqICAgdG8gcHJvdmlkZSBhY2Nlc3MgdG8geW91ciBvd24gcGx1Z2luIHNvIHRoYXQgdGhlIGNvbnRlbnQgc2NyaXB0IGFuZFxuXHQgKiAgIHBsdWdpbiBjYW4gY29tbXVuaWNhdGUuXG5cdCAqXG5cdCAqIC0gVGhlICoqcmVxdWlyZWQqKiBgcGx1Z2luYCBrZXkgaXMgdGhlIGFjdHVhbCBNYXJrZG93bi1JdCBwbHVnaW4gLSBjaGVja1xuXHQgKiAgIHRoZSBbb2ZmaWNpYWwgZG9jXShodHRwczovL2dpdGh1Yi5jb20vbWFya2Rvd24taXQvbWFya2Rvd24taXQpIGZvciBtb3JlXG5cdCAqICAgaW5mb3JtYXRpb24uIFRoZSBgb3B0aW9uc2AgcGFyYW1ldGVyIGlzIG9mIHR5cGVcblx0ICogICBbUnVsZU9wdGlvbnNdKGh0dHBzOi8vZ2l0aHViLmNvbS9sYXVyZW50MjIvam9wbGluL2Jsb2IvZGV2L3BhY2thZ2VzL3JlbmRlcmVyL01kVG9IdG1sLnRzKSxcblx0ICogICB3aGljaCBjb250YWlucyBhIG51bWJlciBvZiBvcHRpb25zLCBtb3N0bHkgdXNlZnVsIGZvciBKb3BsaW4ncyBpbnRlcm5hbFxuXHQgKiAgIGNvZGUuXG5cdCAqXG5cdCAqIC0gVXNpbmcgdGhlICoqb3B0aW9uYWwqKiBgYXNzZXRzYCBrZXkgeW91IG1heSBzcGVjaWZ5IGFzc2V0cyBzdWNoIGFzIEpTXG5cdCAqICAgb3IgQ1NTIHRoYXQgc2hvdWxkIGJlIGxvYWRlZCBpbiB0aGUgcmVuZGVyZWQgSFRNTCBkb2N1bWVudC4gQ2hlY2sgZm9yXG5cdCAqICAgZXhhbXBsZSB0aGUgSm9wbGluIFtNZXJtYWlkXG5cdCAqICAgcGx1Z2luXShodHRwczovL2dpdGh1Yi5jb20vbGF1cmVudDIyL2pvcGxpbi9ibG9iL2Rldi9wYWNrYWdlcy9yZW5kZXJlci9NZFRvSHRtbC9ydWxlcy9tZXJtYWlkLnRzKVxuXHQgKiAgIHRvIHNlZSBob3cgdGhlIGRhdGEgc2hvdWxkIGJlIHN0cnVjdHVyZWQuXG5cdCAqXG5cdCAqICMjIFBvc3RpbmcgbWVzc2FnZXMgZnJvbSB0aGUgY29udGVudCBzY3JpcHQgdG8geW91ciBwbHVnaW5cblx0ICpcblx0ICogVGhlIGFwcGxpY2F0aW9uIHByb3ZpZGVzIHRoZSBmb2xsb3dpbmcgZnVuY3Rpb24gdG8gYWxsb3cgZXhlY3V0aW5nXG5cdCAqIGNvbW1hbmRzIGZyb20gdGhlIHJlbmRlcmVkIEhUTUwgY29kZTpcblx0ICpcblx0ICogYGBgamF2YXNjcmlwdFxuXHQgKiBjb25zdCByZXNwb25zZSA9IGF3YWl0IHdlYnZpZXdBcGkucG9zdE1lc3NhZ2UoY29udGVudFNjcmlwdElkLCBtZXNzYWdlKTtcblx0ICogYGBgXG5cdCAqXG5cdCAqIC0gYGNvbnRlbnRTY3JpcHRJZGAgaXMgdGhlIElEIHlvdSd2ZSBkZWZpbmVkIHdoZW4geW91IHJlZ2lzdGVyZWQgdGhlXG5cdCAqICAgY29udGVudCBzY3JpcHQuIFlvdSBjYW4gcmV0cmlldmUgaXQgZnJvbSB0aGVcblx0ICogICB7QGxpbmsgQ29udGVudFNjcmlwdENvbnRleHQgfCBjb250ZXh0fS5cblx0ICogLSBgbWVzc2FnZWAgY2FuIGJlIGFueSBiYXNpYyBKYXZhU2NyaXB0IHR5cGUgKG51bWJlciwgc3RyaW5nLCBwbGFpblxuXHQgKiAgIG9iamVjdCksIGJ1dCBpdCBjYW5ub3QgYmUgYSBmdW5jdGlvbiBvciBjbGFzcyBpbnN0YW5jZS5cblx0ICpcblx0ICogV2hlbiB5b3UgcG9zdCBhIG1lc3NhZ2UsIHRoZSBwbHVnaW4gY2FuIHNlbmQgYmFjayBhIGByZXNwb25zZWAgdGh1c1xuXHQgKiBhbGxvd2luZyB0d28td2F5IGNvbW11bmljYXRpb246XG5cdCAqXG5cdCAqIGBgYGphdmFzY3JpcHRcblx0ICogYXdhaXQgam9wbGluLmNvbnRlbnRTY3JpcHRzLm9uTWVzc2FnZShjb250ZW50U2NyaXB0SWQsIChtZXNzYWdlKSA9PiB7XG5cdCAqICAgICAvLyBQcm9jZXNzIG1lc3NhZ2Vcblx0ICogICAgIHJldHVybiByZXNwb25zZTsgLy8gQ2FuIGJlIGFueSBvYmplY3QsIHN0cmluZyBvciBudW1iZXJcblx0ICogfSk7XG5cdCAqIGBgYFxuXHQgKlxuXHQgKiBTZWUge0BsaW5rIEpvcGxpbkNvbnRlbnRTY3JpcHRzLm9uTWVzc2FnZX0gZm9yIG1vcmUgZGV0YWlscywgYXMgd2VsbCBhc1xuXHQgKiB0aGUgW3Bvc3RNZXNzYWdlXG5cdCAqIGRlbW9dKGh0dHBzOi8vZ2l0aHViLmNvbS9sYXVyZW50MjIvam9wbGluL3RyZWUvZGV2L3BhY2thZ2VzL2FwcC1jbGkvdGVzdHMvc3VwcG9ydC9wbHVnaW5zL3Bvc3RfbWVzc2FnZXMpLlxuXHQgKlxuXHQgKiAjIyBSZWdpc3RlcmluZyBhbiBleGlzdGluZyBNYXJrZG93bi1pdCBwbHVnaW5cblx0ICpcblx0ICogVG8gaW5jbHVkZSBhIHJlZ3VsYXIgTWFya2Rvd24tSXQgcGx1Z2luLCB0aGF0IGRvZXNuJ3QgbWFrZSB1c2Ugb2YgYW55XG5cdCAqIEpvcGxpbi1zcGVjaWZpYyBmZWF0dXJlcywgeW91IHdvdWxkIHNpbXBseSBjcmVhdGUgYSBmaWxlIHN1Y2ggYXMgdGhpczpcblx0ICpcblx0ICogYGBgamF2YXNjcmlwdFxuXHQgKiBtb2R1bGUuZXhwb3J0cyA9IHtcblx0ICogICAgIGRlZmF1bHQ6IGZ1bmN0aW9uKGNvbnRleHQpIHtcblx0ICogICAgICAgICByZXR1cm4ge1xuXHQgKiAgICAgICAgICAgICBwbHVnaW46IHJlcXVpcmUoJ21hcmtkb3duLWl0LXRvYy1kb25lLXJpZ2h0Jyk7XG5cdCAqICAgICAgICAgfVxuXHQgKiAgICAgfVxuXHQgKiB9XG5cdCAqIGBgYFxuXHQgKi9cblx0TWFya2Rvd25JdFBsdWdpbiA9ICdtYXJrZG93bkl0UGx1Z2luJyxcblxuXHQvKipcblx0ICogUmVnaXN0ZXJzIGEgbmV3IENvZGVNaXJyb3IgcGx1Z2luLCB3aGljaCBzaG91bGQgZm9sbG93IHRoZSB0ZW1wbGF0ZVxuXHQgKiBiZWxvdy5cblx0ICpcblx0ICogYGBgamF2YXNjcmlwdFxuXHQgKiBtb2R1bGUuZXhwb3J0cyA9IHtcblx0ICogICAgIGRlZmF1bHQ6IGZ1bmN0aW9uKGNvbnRleHQpIHtcblx0ICogICAgICAgICByZXR1cm4ge1xuXHQgKiAgICAgICAgICAgICBwbHVnaW46IGZ1bmN0aW9uKENvZGVNaXJyb3IpIHtcblx0ICogICAgICAgICAgICAgICAgIC8vIC4uLlxuXHQgKiAgICAgICAgICAgICB9LFxuXHQgKiAgICAgICAgICAgICBjb2RlTWlycm9yUmVzb3VyY2VzOiBbXSxcblx0ICogICAgICAgICAgICAgY29kZU1pcnJvck9wdGlvbnM6IHtcblx0ICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gLi4uXG5cdCAqICAgICAgICAgICAgICAgICAgICAgICB9LFxuXHQgKiAgICAgICAgICAgICBhc3NldHM6IHtcblx0ICogICAgICAgICAgICAgICAgIC8vIC4uLlxuXHQgKiAgICAgICAgICAgICB9LFxuXHQgKiAgICAgICAgIH1cblx0ICogICAgIH1cblx0ICogfVxuXHQgKiBgYGBcblx0ICpcblx0ICogLSBUaGUgYGNvbnRleHRgIGFyZ3VtZW50IGlzIGN1cnJlbnRseSB1bnVzZWQgYnV0IGNvdWxkIGJlIHVzZWQgbGF0ZXIgb25cblx0ICogICB0byBwcm92aWRlIGFjY2VzcyB0byB5b3VyIG93biBwbHVnaW4gc28gdGhhdCB0aGUgY29udGVudCBzY3JpcHQgYW5kXG5cdCAqICAgcGx1Z2luIGNhbiBjb21tdW5pY2F0ZS5cblx0ICpcblx0ICogLSBUaGUgYHBsdWdpbmAga2V5IGlzIHlvdXIgQ29kZU1pcnJvciBwbHVnaW4uIFRoaXMgaXMgd2hlcmUgeW91IGNhblxuXHQgKiAgIHJlZ2lzdGVyIG5ldyBjb21tYW5kcyB3aXRoIENvZGVNaXJyb3Igb3IgaW50ZXJhY3Qgd2l0aCB0aGUgQ29kZU1pcnJvclxuXHQgKiAgIGluc3RhbmNlIGFzIG5lZWRlZC5cblx0ICpcblx0ICogLSBUaGUgYGNvZGVNaXJyb3JSZXNvdXJjZXNgIGtleSBpcyBhbiBhcnJheSBvZiBDb2RlTWlycm9yIHJlc291cmNlcyB0aGF0XG5cdCAqICAgd2lsbCBiZSBsb2FkZWQgYW5kIGF0dGFjaGVkIHRvIHRoZSBDb2RlTWlycm9yIG1vZHVsZS4gVGhlc2UgYXJlIG1hZGUgdXBcblx0ICogICBvZiBhZGRvbnMsIGtleW1hcHMsIGFuZCBtb2Rlcy4gRm9yIGV4YW1wbGUsIGZvciBhIHBsdWdpbiB0aGF0IHdhbnQncyB0b1xuXHQgKiAgIGVuYWJsZSBjbG9qdXJlIGhpZ2hsaWdodGluZyBpbiBjb2RlIGJsb2Nrcy4gYGNvZGVNaXJyb3JSZXNvdXJjZXNgIHdvdWxkXG5cdCAqICAgYmUgc2V0IHRvIGBbJ21vZGUvY2xvanVyZS9jbG9qdXJlJ11gLlxuXHQgKlxuXHQgKiAtIFRoZSBgY29kZU1pcnJvck9wdGlvbnNgIGtleSBjb250YWlucyBhbGwgdGhlXG5cdCAqICAgW0NvZGVNaXJyb3JdKGh0dHBzOi8vY29kZW1pcnJvci5uZXQvZG9jL21hbnVhbC5odG1sI2NvbmZpZykgb3B0aW9uc1xuXHQgKiAgIHRoYXQgd2lsbCBiZSBzZXQgb3IgY2hhbmdlZCBieSB0aGlzIHBsdWdpbi4gTmV3IG9wdGlvbnMgY2FuIGFsc2UgYmVcblx0ICogICBkZWNsYXJlZCB2aWFcblx0ICogICBbYENvZGVNaXJyb3IuZGVmaW5lT3B0aW9uYF0oaHR0cHM6Ly9jb2RlbWlycm9yLm5ldC9kb2MvbWFudWFsLmh0bWwjZGVmaW5lT3B0aW9uKSxcblx0ICogICBhbmQgdGhlbiBoYXZlIHRoZWlyIHZhbHVlIHNldCBoZXJlLiBGb3IgZXhhbXBsZSwgYSBwbHVnaW4gdGhhdCBlbmFibGVzXG5cdCAqICAgbGluZSBudW1iZXJzIHdvdWxkIHNldCBgY29kZU1pcnJvck9wdGlvbnNgIHRvIGB7J2xpbmVOdW1iZXJzJzogdHJ1ZX1gLlxuXHQgKlxuXHQgKiAtIFVzaW5nIHRoZSAqKm9wdGlvbmFsKiogYGFzc2V0c2Aga2V5IHlvdSBtYXkgc3BlY2lmeSAqKm9ubHkqKiBDU1MgYXNzZXRzXG5cdCAqICAgdGhhdCBzaG91bGQgYmUgbG9hZGVkIGluIHRoZSByZW5kZXJlZCBIVE1MIGRvY3VtZW50LiBDaGVjayBmb3IgZXhhbXBsZVxuXHQgKiAgIHRoZSBKb3BsaW4gW01lcm1haWRcblx0ICogICBwbHVnaW5dKGh0dHBzOi8vZ2l0aHViLmNvbS9sYXVyZW50MjIvam9wbGluL2Jsb2IvZGV2L3BhY2thZ2VzL3JlbmRlcmVyL01kVG9IdG1sL3J1bGVzL21lcm1haWQudHMpXG5cdCAqICAgdG8gc2VlIGhvdyB0aGUgZGF0YSBzaG91bGQgYmUgc3RydWN0dXJlZC5cblx0ICpcblx0ICogT25lIG9mIHRoZSBgcGx1Z2luYCwgYGNvZGVNaXJyb3JSZXNvdXJjZXNgLCBvciBgY29kZU1pcnJvck9wdGlvbnNgIGtleXNcblx0ICogbXVzdCBiZSBwcm92aWRlZCBmb3IgdGhlIHBsdWdpbiB0byBiZSB2YWxpZC4gSGF2aW5nIG11bHRpcGxlIG9yIGFsbFxuXHQgKiBwcm92aWRlZCBpcyBhbHNvIG9rYXkuXG5cdCAqXG5cdCAqIFNlZSBhbHNvIHRoZSBbZGVtb1xuXHQgKiBwbHVnaW5dKGh0dHBzOi8vZ2l0aHViLmNvbS9sYXVyZW50MjIvam9wbGluL3RyZWUvZGV2L3BhY2thZ2VzL2FwcC1jbGkvdGVzdHMvc3VwcG9ydC9wbHVnaW5zL2NvZGVtaXJyb3JfY29udGVudF9zY3JpcHQpXG5cdCAqIGZvciBhbiBleGFtcGxlIG9mIGFsbCB0aGVzZSBrZXlzIGJlaW5nIHVzZWQgaW4gb25lIHBsdWdpbi5cblx0ICpcblx0ICogIyMgUG9zdGluZyBtZXNzYWdlcyBmcm9tIHRoZSBjb250ZW50IHNjcmlwdCB0byB5b3VyIHBsdWdpblxuXHQgKlxuXHQgKiBJbiBvcmRlciB0byBwb3N0IG1lc3NhZ2VzIHRvIHRoZSBwbHVnaW4sIHlvdSBjYW4gdXNlIHRoZSBwb3N0TWVzc2FnZVxuXHQgKiBmdW5jdGlvbiBwYXNzZWQgdG8gdGhlIHtAbGluayBDb250ZW50U2NyaXB0Q29udGV4dCB8IGNvbnRleHR9LlxuXHQgKlxuXHQgKiBgYGBqYXZhc2NyaXB0XG5cdCAqIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgY29udGV4dC5wb3N0TWVzc2FnZSgnbWVzc2FnZUZyb21Db2RlTWlycm9yQ29udGVudFNjcmlwdCcpO1xuXHQgKiBgYGBcblx0ICpcblx0ICogV2hlbiB5b3UgcG9zdCBhIG1lc3NhZ2UsIHRoZSBwbHVnaW4gY2FuIHNlbmQgYmFjayBhIGByZXNwb25zZWAgdGh1c1xuXHQgKiBhbGxvd2luZyB0d28td2F5IGNvbW11bmljYXRpb246XG5cdCAqXG5cdCAqIGBgYGphdmFzY3JpcHRcblx0ICogYXdhaXQgam9wbGluLmNvbnRlbnRTY3JpcHRzLm9uTWVzc2FnZShjb250ZW50U2NyaXB0SWQsIChtZXNzYWdlKSA9PiB7XG5cdCAqICAgICAvLyBQcm9jZXNzIG1lc3NhZ2Vcblx0ICogICAgIHJldHVybiByZXNwb25zZTsgLy8gQ2FuIGJlIGFueSBvYmplY3QsIHN0cmluZyBvciBudW1iZXJcblx0ICogfSk7XG5cdCAqIGBgYFxuXHQgKlxuXHQgKiBTZWUge0BsaW5rIEpvcGxpbkNvbnRlbnRTY3JpcHRzLm9uTWVzc2FnZX0gZm9yIG1vcmUgZGV0YWlscywgYXMgd2VsbCBhc1xuXHQgKiB0aGUgW3Bvc3RNZXNzYWdlXG5cdCAqIGRlbW9dKGh0dHBzOi8vZ2l0aHViLmNvbS9sYXVyZW50MjIvam9wbGluL3RyZWUvZGV2L3BhY2thZ2VzL2FwcC1jbGkvdGVzdHMvc3VwcG9ydC9wbHVnaW5zL3Bvc3RfbWVzc2FnZXMpLlxuXHQgKlxuXHQgKi9cblx0Q29kZU1pcnJvclBsdWdpbiA9ICdjb2RlTWlycm9yUGx1Z2luJyxcbn1cbiIsImltcG9ydCBqb3BsaW4gZnJvbSAnYXBpJztcblxuaW1wb3J0IHsgXG4gICAgV2ViVmlld01lc3NhZ2UsXG4gICAgQ2hhbm5lbEV2ZW50LFxuICAgIENoYW5uZWxUeXBlLFxuICAgIENoYW5uZWxIYW5kbGVyLFxuXG4gICAgQ2hhbm5lbFJlcXVlc3QsXG4gICAgQ2hhbm5lbFJlc3BvbnNlXG59IGZyb20gXCIuL21lc3NhZ2VcIjtcblxuaW1wb3J0IHsgdGltZW91dCB9IGZyb20gXCIuL3V0aWxzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBob3N0Q2hhbm5lbChwYW5lbElkOiBzdHJpbmcsIGhhbmRsZXJzOiBNYXA8c3RyaW5nLCBDaGFubmVsSGFuZGxlcj4pOiBDaGFubmVsVHlwZSB7XG4gICAgbGV0IGxvY2FsID0ge1xuICAgICAgICBzdHViczogeyB9XG4gICAgfTtcblxuICAgIGpvcGxpbi52aWV3cy5wYW5lbHMub25NZXNzYWdlKHBhbmVsSWQsIGFzeW5jIChtZXNzYWdlOiBXZWJWaWV3TWVzc2FnZSk6IFByb21pc2U8YW55PiA9PiAge1xuICAgICAgICBpZiAobWVzc2FnZS5ldmVudCA9PSBDaGFubmVsRXZlbnQucmVzcG9uc2VFdmVudCkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2U6IENoYW5uZWxSZXNwb25zZSA9IG1lc3NhZ2UudmFsdWU7XG5cbiAgICAgICAgICAgIGNvbnN0IHN0dWIgPSBsb2NhbC5zdHVic1tyZXNwb25zZS5yZXF1ZXN0SWRdO1xuICAgICAgICAgICAgaWYgKHN0dWIgPT0gbnVsbClcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5pc0V4Y2VwdGlvbj9cbiAgICAgICAgICAgICAgICBzdHViLnJlamVjdChyZXNwb25zZS52YWx1ZSk6XG4gICAgICAgICAgICAgICAgc3R1Yi5yZXNvbHZlKHJlc3BvbnNlLnZhbHVlKTtcbiAgICAgICAgfSBlbHNlXG4gICAgICAgIGlmIChtZXNzYWdlLmV2ZW50ID09IENoYW5uZWxFdmVudC5yZXF1ZXN0RXZlbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3Q6IENoYW5uZWxSZXF1ZXN0ID0gbWVzc2FnZS52YWx1ZTtcblxuICAgICAgICAgICAgY29uc3QgaGFuZGxlciA9IGhhbmRsZXJzLmdldChyZXF1ZXN0Lm5hbWUpO1xuICAgICAgICAgICAgaWYgKGhhbmRsZXIgPT0gbnVsbClcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKFwibm8gdGhhdCBoYW5kbGVyXCIpKTtcblxuICAgICAgICAgICAgcmV0dXJuIGhhbmRsZXIuYXBwbHkobnVsbCwgcmVxdWVzdC5hcmdzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodHJ1ZSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gKG5hbWU6IHN0cmluZywgLi4uYXJnczogYW55KTogUHJvbWlzZTxhbnk+ID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPGFueT4oYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVxdWVzdElkID0gYCR7bmFtZX0tJHtEYXRlLm5vdygpfWA7XG5cbiAgICAgICAgICAgIGxvY2FsLnN0dWJzW3JlcXVlc3RJZF0gPSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSwgcmVqZWN0XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBqb3BsaW4udmlld3MucGFuZWxzLnBvc3RNZXNzYWdlKHBhbmVsSWQsIHtcbiAgICAgICAgICAgICAgICBldmVudDogQ2hhbm5lbEV2ZW50LnJlcXVlc3RFdmVudCxcbiAgICAgICAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0SWQsXG4gICAgICAgICAgICAgICAgICAgIG5hbWUsIGFyZ3NcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbn1cblxuZXhwb3J0IHR5cGUge1xuICAgIENoYW5uZWxUeXBlLFxuICAgIENoYW5uZWxIYW5kbGVyXG59IiwiZXhwb3J0IGludGVyZmFjZSBXZWJWaWV3TWVzc2FnZSB7XG4gICAgZXZlbnQ6IHN0cmluZztcbiAgICB2YWx1ZT86IGFueTtcbn1cblxuZXhwb3J0IHR5cGUgQ2hhbm5lbEhhbmRsZXIgPSAoLi4uYXJnczogYW55KSA9PiBQcm9taXNlPGFueT47XG5cbmV4cG9ydCB0eXBlIENoYW5uZWxUeXBlID1cbiAgICAobmFtZTogc3RyaW5nLCAuLi5hcmdzOiBhbnkpID0+IFByb21pc2U8YW55PjtcblxuZXhwb3J0IHR5cGUgQ2hhbm5lbFJlcXVlc3QgPSB7XG4gICAgcmVxdWVzdElkOiBzdHJpbmcsXG4gICAgbmFtZTogc3RyaW5nLFxuICAgIGFyZ3M6IGFueVtdXG59O1xuXG5leHBvcnQgdHlwZSBDaGFubmVsUmVzcG9uc2UgPSB7XG4gICAgcmVxdWVzdElkOiBzdHJpbmcsXG4gICAgaXNFeGNlcHRpb246IGJvb2xlYW4sXG4gICAgdmFsdWU6IGFueVxufTtcblxuZXhwb3J0IHR5cGUgTm90ZVRhcmdldCA9IHtcbiAgICBub3RlYm9va0lkOiBzdHJpbmcsXG4gICAgbm90ZWJvb2tOYW1lOiBzdHJpbmcsXG5cbiAgICBub3RlSWQ6IHN0cmluZyxcbiAgICBub3RlTmFtZTogc3RyaW5nXG59O1xuXG5leHBvcnQgdHlwZSBMaW5lID0ge1xuICAgIGxpbmVOdW1iZXI6IG51bWJlcixcbiAgICBsaW5lQ29udGVudDogc3RyaW5nXG59O1xuXG5leHBvcnQgZW51bSBDaGFubmVsRXZlbnQge1xuICAgIHJlcXVlc3RFdmVudCA9IFwicmVxdWVzdFwiLFxuICAgIHJlc3BvbnNlRXZlbnQgPSBcInJlc3BvbnNlXCJcbn1cbiIsImV4cG9ydCBjb25zdCBkZWxheSA9IGZ1bmN0aW9uKG5hbWVzcGFjZTogYW55LCBuYW1lOiBzdHJpbmcsIHRpbWVvdXQ6IG51bWJlciwgZnVuYzogYW55KSB7XG4gICAgaWYgKG5hbWVzcGFjZVtuYW1lXSAhPSBudWxsKVxuICAgICAgICBjbGVhclRpbWVvdXQobmFtZXNwYWNlW25hbWVdKTtcbiAgICBcbiAgICBuYW1lc3BhY2VbbmFtZV0gPSBzZXRUaW1lb3V0KGZ1bmMsIHRpbWVvdXQpO1xuICB9O1xuXG5leHBvcnQgY29uc3QgdGltZW91dCA9IGZ1bmN0aW9uKHRpbWVyOiBudW1iZXIpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmU6IEZ1bmN0aW9uKSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gcmVzb2x2ZSgpLCB0aW1lcik7XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgam9wbGluIGZyb20gJ2FwaSc7XG5pbXBvcnQgeyBUb29sYmFyQnV0dG9uTG9jYXRpb24gfSBmcm9tICdhcGkvdHlwZXMnO1xuaW1wb3J0IHsgU2V0dGluZ0l0ZW1UeXBlIH0gZnJvbSAnYXBpL3R5cGVzJztcblxuaW1wb3J0IEpvcGxpbkRhdGFBcGkgZnJvbSBcIi4vam9wbGluL2pvcGxpbi1kYXRhLWFwaVwiO1xuXG5pbXBvcnQge1xuXHRob3N0Q2hhbm5lbFxufSBmcm9tIFwiLi9jb21tb24vaG9zdENoYW5uZWxcIjtcblxuaW1wb3J0IHtcblx0Q2hhbm5lbEhhbmRsZXIsXG5cdENoYW5uZWxUeXBlLFxuXHRMaW5lLFxuXHROb3RlVGFyZ2V0XG59IGZyb20gXCIuL2NvbW1vbi9tZXNzYWdlXCI7XG5cbmltcG9ydCB7IHRpbWVvdXQgfSBmcm9tICcuL2NvbW1vbi91dGlscyc7XG5cbmltcG9ydCBodG1sIGZyb20gXCIuL3dlYnZpZXcvaHRtbC5qc1wiO1xuXG5jb25zdCBTRVRUSU5HX1RPUF9MSU5FUyA9ICdub2FoLnNlYXJjaC50b3BfbGluZXMnO1xuY29uc3QgU0VUVElOR19CT1RUT01fTElORVMgPSAnbm9haC5zZWFyY2guYm90dG9tX2xpbmVzJztcblxubGV0IHBhbmVsSWQ6IHN0cmluZyA9IG51bGw7XG5sZXQgYWN0aXZlOiBib29sZWFuID0gdHJ1ZTtcbmxldCBjaGFubmVsOiBDaGFubmVsVHlwZSA9IG51bGw7XG5cbmFzeW5jIGZ1bmN0aW9uIGluaXRTZXR0aW5ncygpIHtcblx0Y29uc3QgU0VDVElPTiA9ICdTZWFyY2gnO1xuXG5cdGF3YWl0IGpvcGxpbi5zZXR0aW5ncy5yZWdpc3RlclNlY3Rpb24oU0VDVElPTiwge1xuXHRcdGRlc2NyaXB0aW9uOiAnU2VhcmNoIFBsdWdpbiBTZXR0aW5ncycsXG5cdFx0bGFiZWw6ICdTZWFyY2gnLFxuXHRcdGljb25OYW1lOiAnZmFzIGZhLXNlYXJjaCdcblx0fSk7XG5cblx0YXdhaXQgam9wbGluLnNldHRpbmdzLnJlZ2lzdGVyU2V0dGluZ3Moe1xuXHRcdFtTRVRUSU5HX1RPUF9MSU5FU106IHsgXG5cdFx0XHRwdWJsaWM6IHRydWUsXG5cdFx0XHRzZWN0aW9uOiBTRUNUSU9OLFxuXHRcdFx0dHlwZTogU2V0dGluZ0l0ZW1UeXBlLkludCxcblx0XHRcdHZhbHVlOiAzLFxuXHRcdFx0bGFiZWw6IFwiVGhlIGxpbmVzJ3MgY291bnQgc2hvd24gYWJvdmUgdGhhdCBzZWFyY2ggcmVzdWx0LlwiLFxuXHRcdH0sXG5cdFx0W1NFVFRJTkdfQk9UVE9NX0xJTkVTXToge1xuXHRcdFx0cHVibGljOiB0cnVlLFxuXHRcdFx0c2VjdGlvbjogU0VDVElPTixcblx0XHRcdHR5cGU6IFNldHRpbmdJdGVtVHlwZS5JbnQsXG5cdFx0XHR2YWx1ZTogMyxcblx0XHRcdGxhYmVsOiBcIlRoZSBsaW5lcydzIGNvdW50IHNob3duIGFmdGVyIHRoYXQgc2VhcmNoIHJlc3VsdC5cIixcblx0XHR9XG5cdH0pO1xufVxuXG5hc3luYyBmdW5jdGlvbiBpbml0UGFuZWwoKSB7XG5cdHBhbmVsSWQgPSBhd2FpdCBqb3BsaW4udmlld3MucGFuZWxzLmNyZWF0ZShcImdyYXBoXCIpO1xuXG5cdGF3YWl0IGpvcGxpbi52aWV3cy5wYW5lbHMuc2V0SHRtbChcblx0XHRwYW5lbElkLCBodG1sXG5cdCk7XG5cblx0am9wbGluLnZpZXdzLnBhbmVscy5hZGRTY3JpcHQocGFuZWxJZCwgXCIuL3dlYnZpZXcvanF1ZXJ5Lm1pbi5qc1wiKTtcblx0am9wbGluLnZpZXdzLnBhbmVscy5hZGRTY3JpcHQocGFuZWxJZCwgXCIuL3dlYnZpZXcvd2Vidmlldy5jc3NcIik7XG5cdGpvcGxpbi52aWV3cy5wYW5lbHMuYWRkU2NyaXB0KHBhbmVsSWQsIFwiLi93ZWJ2aWV3L3dlYnZpZXcuanNcIik7XG5cblx0Lypqb3BsaW4udmlld3MucGFuZWxzLm9uTWVzc2FnZShwYW5lbElkLCBhc3luYyAobWVzc2FnZTogV2ViVmlld01lc3NhZ2UpOiBQcm9taXNlPGFueT4gPT4ge1xuXHRcdFxuXG5cdFx0cmV0dXJuIG51bGw7XG5cdH0pO1xuXG5cdGFsZXJ0KFwic3RhcnQ/P1wiKTtcblxuXHR0cnlcblx0e1xuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IGpvcGxpbi52aWV3cy5wYW5lbHMucG9zdE1lc3NhZ2UocGFuZWxJZCwge1xuXHRcdFx0ZXZlbnQ6IFwidGVzdFwiLFxuXHRcdFx0dmFsdWU6IFwiaGVsbG8gd29ybGRcIlxuXHRcdH0pO1xuXG5cdFx0YWxlcnQocmVzKTtcblx0fSBjYXRjaChlcnIpXG5cdHtcblx0XHRhbGVydChTdHJpbmcoZXJyKSk7XG5cdH0qL1xufVxuXG5hc3luYyBmdW5jdGlvbiBzaG93UGFuZWwoc2hvdzogYm9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWQpIHtcblx0aWYgKHNob3cgPT09IG51bGwgfHwgc2hvdyA9PT0gdW5kZWZpbmVkKVxuXHR7XG5cdFx0c2hvdyA9IGFjdGl2ZTtcblx0fSBlbHNlXG5cdGFjdGl2ZSA9IHNob3c7XG5cblx0YXdhaXQgam9wbGluLnZpZXdzLnBhbmVscy5zaG93KHBhbmVsSWQsIGFjdGl2ZSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGluaXRDb21tYW5kcygpIHtcblx0am9wbGluLmNvbW1hbmRzLnJlZ2lzdGVyKHtcblx0XHRuYW1lOiBcInRvZ2dsZVNlYXJjaFwiLFxuXHRcdGxhYmVsOiBcInRvZ2dsZSBzZWFyY2ggdmlld1wiLFxuXHRcdGljb25OYW1lOiBcImZhcyBmYS1zZWFyY2hcIixcblx0XHRleGVjdXRlOiBhc3luYyAoKSA9PiB7XG5cdFx0XHRzaG93UGFuZWwoIWFjdGl2ZSk7XG5cdFx0fSxcblx0fSk7XG5cblx0am9wbGluLnZpZXdzLnRvb2xiYXJCdXR0b25zLmNyZWF0ZShcblx0XHRcInRvZ2dsZVNlYXJjaFwiLFxuXHRcdFwidG9nZ2xlU2VhcmNoXCIsXG5cdFx0VG9vbGJhckJ1dHRvbkxvY2F0aW9uLk5vdGVUb29sYmFyXG5cdCk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGluaXRIYW5kbGVycygpIHtcblx0Y29uc3QgZGF0YUFwaSA9IEpvcGxpbkRhdGFBcGkuaW5zdGFuY2UoKTtcblxuXHRjb25zdCBtYXBzID0gbmV3IE1hcDxzdHJpbmcsIENoYW5uZWxIYW5kbGVyPigpO1xuXG5cdGNoYW5uZWwgPSBob3N0Q2hhbm5lbChwYW5lbElkLCBtYXBzKTtcblxuXHRtYXBzLnNldChcIm9wZW5cIiwgYXN5bmMgKG5vdGVJZDogc3RyaW5nKSA9PiB7XG5cdFx0am9wbGluLmNvbW1hbmRzLmV4ZWN1dGUoXCJvcGVuTm90ZVwiLCBub3RlSWQpO1xuXHR9KTtcblxuXHRtYXBzLnNldChcInNlYXJjaFwiLCBhc3luYyAoc2VhcmNoSWQsIGtleXdvcmQsIGlzUmVnZXgpID0+IHtcblx0XHRsZXQgcmVnZXggPSBudWxsO1xuXHRcdGlmIChpc1JlZ2V4KVxuXHRcdFx0cmVnZXggPSBuZXcgUmVnRXhwKGtleXdvcmQsIFwiZ1wiKTtcblxuXHRcdGZ1bmN0aW9uIG1hdGNoTGluZShsaW5lOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRcdGlmICghaXNSZWdleClcblx0XHRcdFx0cmV0dXJuIGxpbmUuaW5kZXhPZihrZXl3b3JkKSAhPSAtMTtcblxuXHRcdFx0cmV0dXJuIEFycmF5LmZyb20obGluZS5tYXRjaEFsbChyZWdleCkpLmxlbmd0aCAhPSAwO1xuXHRcdH1cblxuXHRcdGNvbnN0IHRvcExpbmVOdW0gPSBOdW1iZXIoYXdhaXQgam9wbGluLnNldHRpbmdzLnZhbHVlKFNFVFRJTkdfVE9QX0xJTkVTKSk7XG5cdFx0Y29uc3QgYm90dG9tTGluZU51bSA9IE51bWJlcihhd2FpdCBqb3BsaW4uc2V0dGluZ3MudmFsdWUoU0VUVElOR19CT1RUT01fTElORVMpKTtcblxuXHRcdGxldCB0b3BsaW5lcyA9IFtdO1xuXG5cdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgZGF0YUFwaS5nZXROb3Rlcyh7XG5cdFx0XHRmaWVsZHM6IFsgJ2lkJywgJ3BhcmVudF9pZCcsICd0aXRsZScsICdib2R5JyBdXG5cdFx0fSk7XG5cblx0XHRmb3IobGV0IGluZGV4ID0gMDsgaW5kZXggIT0gcmVzdWx0LnJlc3VsdHMubGVuZ3RoOyArK2luZGV4KVxuXHRcdHtcblx0XHRcdGF3YWl0IHRpbWVvdXQoMCk7XG5cblx0XHRcdGNvbnN0IG5vdGUgPSByZXN1bHQucmVzdWx0c1tpbmRleF07XG5cdFx0XHRsZXQgbm90ZWJvb2sgPSBudWxsO1xuXG5cdFx0XHRpZiAobm90ZS5wYXJlbnRfaWQgIT0gbnVsbClcblx0XHRcdHtcblx0XHRcdFx0bm90ZWJvb2sgPSBhd2FpdCBkYXRhQXBpLmdldE5vdGVCb29rKHtcblx0XHRcdFx0XHRmaWVsZHM6IFsgJ2lkJywgJ3BhcmVudF9pZCcsICd0aXRsZScgXVxuXHRcdFx0XHR9LCBub3RlLnBhcmVudF9pZCk7XG5cdFx0XHR9XG5cblx0XHRcdGxldCB0YXJnZXQ6IE5vdGVUYXJnZXQgPSB7XG5cdFx0XHRcdG5vdGVib29rSWQ6IG5vdGUucGFyZW50X2lkLFxuXHRcdFx0XHRub3RlYm9va05hbWU6IG5vdGVib29rPy50aXRsZSxcblxuXHRcdFx0XHRub3RlSWQ6IG5vdGUuaWQsXG5cdFx0XHRcdG5vdGVOYW1lOiBub3RlLnRpdGxlXG5cdFx0XHR9O1xuXG5cdFx0XHRjb25zdCBsaW5lRHVtcHM6IExpbmVbXSA9IFtdO1xuXG5cdFx0XHRjb25zdCBkdW1wUmVzdWx0ID0gKGxpbmU6IExpbmUpID0+IHtcblx0XHRcdFx0bGluZUR1bXBzLnB1c2gobGluZSk7XG5cblx0XHRcdFx0Y29uc29sZS5sb2cobGluZS5saW5lTnVtYmVyKTtcblx0XHRcdH07XG5cblx0XHRcdGNvbnN0IGZsdXNoRHVtcCA9ICgpID0+IHtcblx0XHRcdFx0aWYgKGxpbmVEdW1wcy5sZW5ndGggPT0gMClcblx0XHRcdFx0XHRyZXR1cm47XG5cblx0XHRcdFx0Y2hhbm5lbChcInJlc3VsdFwiLCBzZWFyY2hJZCwgdGFyZ2V0LCBsaW5lRHVtcHMpO1xuXHRcdFx0fTtcblxuXHRcdFx0Y29uc3QgbGluZXMgPSBub3RlLmJvZHkuc3BsaXQoXCJcXG5cIik7XG5cdFx0XHRsZXQgbGluZU51bWJlciA9IDA7XG5cblx0XHRcdHdoaWxlKGxpbmVOdW1iZXIgPCBsaW5lcy5sZW5ndGgpXG5cdFx0XHR7XG5cdFx0XHRcdGF3YWl0IHRpbWVvdXQoMCk7XG5cblx0XHRcdFx0bGV0IGxpbmUgPSBsaW5lc1tsaW5lTnVtYmVyXTtcblxuXHRcdFx0XHR0b3BsaW5lcy5wdXNoKHtcblx0XHRcdFx0XHRsaW5lTnVtYmVyLFxuXHRcdFx0XHRcdGxpbmVDb250ZW50OiBsaW5lXG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdHdoaWxlKHRvcGxpbmVzLmxlbmd0aCA+IHRvcExpbmVOdW0pXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0b3BsaW5lcy5zaGlmdCgpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKG1hdGNoTGluZShsaW5lKSlcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRvcGxpbmVzLmZvckVhY2goKGxpbmUpID0+IHtcblx0XHRcdFx0XHRcdGR1bXBSZXN1bHQobGluZSk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0dG9wbGluZXMgPSBbXTtcblxuXHRcdFx0XHRcdGxldCBib3R0b20gPSBib3R0b21MaW5lTnVtO1xuXHRcdFx0XHRcdHdoaWxlKGJvdHRvbS0tKSB7XG5cdFx0XHRcdFx0XHQrK2xpbmVOdW1iZXI7XG5cblx0XHRcdFx0XHRcdGlmIChsaW5lTnVtYmVyID49IGxpbmVzLmxlbmd0aClcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0XHRcdGxpbmUgPSBsaW5lc1tsaW5lTnVtYmVyXTtcblxuXHRcdFx0XHRcdFx0ZHVtcFJlc3VsdCh7XG5cdFx0XHRcdFx0XHRcdGxpbmVOdW1iZXIsXG5cdFx0XHRcdFx0XHRcdGxpbmVDb250ZW50OiBsaW5lXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQrK2xpbmVOdW1iZXI7XG5cdFx0XHR9XG5cblx0XHRcdGZsdXNoRHVtcCgpO1xuXHRcdH1cblxuXHRcdGNoYW5uZWwoXCJmaW5pc2hcIiwgdHJ1ZSk7XG5cdH0pO1xufVxuXG5qb3BsaW4ucGx1Z2lucy5yZWdpc3Rlcih7XG5cdG9uU3RhcnQ6IGFzeW5jIGZ1bmN0aW9uKCkge1xuXHRcdGF3YWl0IGluaXRTZXR0aW5ncygpO1xuXG5cdFx0YXdhaXQgaW5pdENvbW1hbmRzKCk7XG5cdFx0YXdhaXQgaW5pdFBhbmVsKCk7XG5cdFx0YXdhaXQgaW5pdEhhbmRsZXJzKCk7XG5cblx0XHRzaG93UGFuZWwoYWN0aXZlKTtcblx0fSxcbn0pO1xuIiwiaW1wb3J0IGpvcGxpbiBmcm9tICdhcGknO1xuaW1wb3J0IE5vdGUsIHsgcGFyc2VKb3BsaW5Ob3RlLCBOb3RlQm9vayB9IGZyb20gXCIuL25vdGVcIjtcbmltcG9ydCB7IElEIH0gZnJvbSBcIi4vbm90ZS1saW5rXCI7XG5cbmV4cG9ydCBjbGFzcyBUYWcge1xuICAgIGlkOiBJRDtcbiAgICBsYWJlbDogc3RyaW5nO1xuICAgIG5vZGVJZHM/OiBJRFtdO1xuXG4gICAgY29uc3RydWN0b3IoaWQgOiBJRCwgbGFiZWw6IHN0cmluZykge1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMubGFiZWwgPSBsYWJlbDtcbiAgICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUXVlcnlQYXJhbXMge1xuICAgIGZpZWxkcz86IEFycmF5PHN0cmluZz4sXG4gICAgb3JkZXJfZGlyPzogc3RyaW5nXG4gICAgbGltaXQ/OiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOb3RlUXVlcnlSZXN1bHRzIHtcbiAgICByZXN1bHRzOiBBcnJheTxOb3RlPixcbiAgICBpZHNOb3RGb3VuZD86IEFycmF5PHN0cmluZz4sXG4gICAgdHJ1bmNhdGVkPzogYm9vbGVhblxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKb3BsaW5EYXRhQXBpIHtcblxuICAgIHByaXZhdGUgc3RhdGljIGFwaV8gOiBKb3BsaW5EYXRhQXBpO1xuXG4gICAgc3RhdGljIGluc3RhbmNlKCkgOiBKb3BsaW5EYXRhQXBpIHtcbiAgICAgICAgaWYoIXRoaXMuYXBpXykge1xuICAgICAgICAgICAgdGhpcy5hcGlfID0gbmV3IEpvcGxpbkRhdGFBcGkoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5hcGlfO1xuICAgIH1cblxuICAgIC8vcXVlcnlQYXJhbXMgZm9sbG93cyBqb3BsaW4gcXVlcnkgZm9ybWF0IHNvIHdlIGp1c3QgbmVlZCB0byByZXR1cm4gaXQuXG4gICAgcHVibGljIGJ1aWxkUXVlcnlQYXJhbXMocXVlcnlQYXJhbXMgOiBRdWVyeVBhcmFtcykgOiBhbnkge1xuICAgICAgICByZXR1cm4gcXVlcnlQYXJhbXM7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFNlbGVjdGVkTm90ZSgpIDogYW55IHtcbiAgICAgICAgcmV0dXJuIGpvcGxpbi53b3Jrc3BhY2Uuc2VsZWN0ZWROb3RlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFNlbGVjdGVkTm90ZUlkcygpIDogUHJvbWlzZTxBcnJheTxzdHJpbmc+PiB7XG4gICAgICAgIHJldHVybiBqb3BsaW4ud29ya3NwYWNlLnNlbGVjdGVkTm90ZUlkcygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBnZXRUYWdzKCkgOiBQcm9taXNlPFRhZ1tdPiB7XG4gICAgICAgIGxldCB0YWdzID0gW107XG4gICAgICAgIGxldCBwYWdlIDogYW55O1xuICAgICAgICBsZXQgcXVlcnkgPSB7ZmllbGRzOiBbXCJpZFwiLCBcInRpdGxlXCJdfTtcbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgcGFnZSA9IGF3YWl0IGpvcGxpbi5kYXRhLmdldChbJ3RhZ3MnXSwgcXVlcnkpO1xuICAgICAgICAgICAgdGFncy5wdXNoKC4uLnBhZ2UuaXRlbXMubWFwKCAoaXRlbSA6IGFueSkgPT4geyBcbiAgICAgICAgICAgICAgICByZXR1cm4ge2lkOiBpdGVtLmlkLCBsYWJlbDogaXRlbS50aXRsZSB9IFxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICAgIHdoaWxlIChwYWdlLmhhc19tb3JlKVxuXG4gICAgICAgIHJldHVybiB0YWdzO1xuICAgIH1cblxuICAgIHB1YmxpYyAgYXN5bmMgZ2V0Tm90ZUlkc0ZvclRhZyh0YWc6IGFueSkgOiBQcm9taXNlPHN0cmluZ1tdPiB7XG4gICAgICAgIGxldCBub3RlSWRzID0gW107XG4gICAgICAgIGxldCBwYWdlIDogYW55O1xuICAgICAgICBsZXQgcXVlcnkgPSB7ZmllbGRzOiBbXCJpZFwiXX07XG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIHBhZ2UgPSBhd2FpdCBqb3BsaW4uZGF0YS5nZXQoWyd0YWdzJywgdGFnLmlkLCAnbm90ZXMnXSwgcXVlcnkpO1xuICAgICAgICAgICAgbm90ZUlkcy5wdXNoKC4uLnBhZ2UuaXRlbXMubWFwKChpdGVtIDogYW55KSA9PiBpdGVtLmlkKSk7XG4gICAgICAgIH1cbiAgICAgICAgd2hpbGUgKHBhZ2UuaGFzX21vcmUpXG5cbiAgICAgICAgcmV0dXJuIG5vdGVJZHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IG5vdGVzIHNhdGlzZnlpbmcgdGhlIHF1ZXJ5LlxuICAgICAqIEBwYXJhbSBxdWVyeSA6IGN1c3RvbWl6ZSB3aGF0IGRhdGEgaXMgcmV0cmlldmVkLlxuICAgICAqIEBwYXJhbSBwYWdlU2l6ZSA6IG51bWJlciBvZiBub3RlcyByZXR1cm5lZCBpbiBvbmUgc3VicXVlcnkuXG4gICAgICogQHBhcmFtIG1heCA6IG1heCBudW1iZXIgb2Ygbm90ZXMuXG4gICAgICogQHJldHVybnMgYSB0dXBsZSA6IChub3RlcyA6IE1hcDxzdHJpbmcsIE5vdGU+LCB0cnVuY2F0ZWQgOiBib29sZWFuKVxuICAgICAqIG5vdGVzIDogYWxsIG5vdGVzIHNhdGlzZnlpbmcgdGhlIHF1ZXJ5IHVwIHRvIG1heE5vdGVcbiAgICAgKiB0cnVuY2F0ZWQgOiB0cnVlIGlmIHdlIGhhZCB0byBhcHBseSBhIGN1dG9mZlxuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYyBnZXROb3RlcyhxdWVyeTogYW55LCBtYXg6IG51bWJlciA9IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSKSA6IFByb21pc2U8Tm90ZVF1ZXJ5UmVzdWx0cz4ge1xuICAgICAgICBcbiAgICAgICAgbGV0IGpvcGxpbk5vdGVzID0gW107XG4gICAgICAgIGxldCBwYWdlIDogYW55O1xuICAgICAgICBsZXQgcGFnZU51bSA9IDE7XG4gICAgICAgIGxldCBpc0xpbWl0UmVhY2hlZCA9ICgpID0+IGpvcGxpbk5vdGVzLmxlbmd0aCA+IG1heDtcbiAgICAgICAgbGV0IHRydW5jYXRlZCA9IGZhbHNlO1xuXG4gICAgICAgIGRvIHtcbiAgICAgICAgICBxdWVyeS5wYWdlID0gcGFnZU51bTtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBwYWdlID0gYXdhaXQgam9wbGluLmRhdGEuZ2V0KFsnbm90ZXMnXSwgcXVlcnkpO1xuICAgICAgICAgIH0gY2F0Y2goZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIHsgcmVzdWx0czogW10sIHRydW5jYXRlZDp0cnVlIH07XG4gICAgICAgICAgfSBcblxuICAgICAgICAgIGpvcGxpbk5vdGVzLnB1c2goLi4ucGFnZS5pdGVtcyk7XG4gICAgICAgICAgcGFnZU51bSsrO1xuXG4gICAgICAgICAgaWYoaXNMaW1pdFJlYWNoZWQoKSkge1xuICAgICAgICAgICAgICB0cnVuY2F0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICB9XG5cbiAgICAgICAgfSB3aGlsZSAocGFnZS5oYXNfbW9yZSlcblxuICAgICAgICBpZihpc0xpbWl0UmVhY2hlZCgpKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYE1heCBudW1iZXIgb2Ygbm90ZXMgcmVhY2hlZDogJHttYXh9LiBgICsgXG4gICAgICAgICAgICBgU29tZSBub3RlcyBtYXkgbm90IGJlIHZpc2libGUuYCk7XG4gICAgICAgICAgICBqb3BsaW5Ob3RlcyA9IGpvcGxpbk5vdGVzLnNsaWNlKDAsbWF4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG5vdGVzID0gYXdhaXQgUHJvbWlzZS5hbGwoam9wbGluTm90ZXMubWFwKCBhc3luYyAobm90ZSkgPT4gdGhpcy5idWlsZE5vdGUobm90ZSkpKTtcblxuICAgICAgICByZXR1cm4geyByZXN1bHRzOiBub3RlcywgdHJ1bmNhdGVkOiB0cnVuY2F0ZWQgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgYWxsIG5vdGVzIHdpdGggZ2l2ZW4gaWRzLlxuICAgICAqIFRoaXMgbWV0aG9kIGNhbiBnZXQgc2xvdyBpZiB3ZSBoYXZlIHRvIHByb2Nlc3MgYSBsYXJnZSBudW1iZXIgb2YgaWRzIHNpbmNlIHRoZSBhcGkgYXV0aG9yaXplZCBvbmx5IHF1ZXJ5IGJ5IGlkIGF0IHRoZSB0aW1lLlxuICAgICAqIFRPRE8gYmVzdCB3b3VsZCBiZSB0byBhZGQgbWV0aG9kIHRvIGdldCBiYXRjaCBvZiBpZHMgdG8gW0pvcGxpbkRhdGFBUEldKGh0dHBzOi8vam9wbGluYXBwLm9yZy9hcGkvcmVmZXJlbmNlcy9yZXN0X2FwaS8pLlxuICAgICAqIEBwYXJhbSBpZHMgbGlzdCBvZiBub3RlIGlkcy5cbiAgICAgKiBAcGFyYW0gbWF4Q29uY3VycmVudFJlcXVlc3RzIG1heCBudW1iZXIgb2YgY29uY3VycmVudCByZXF1ZXN0cyB0byB0aGUgam9wbGluIEFQSS4gQ2FuIHdlIHVzZWZ1bCB3ZSByZXF1ZXN0aW5nIGxhcmdlIG51bWJlciBvZiBub3Rlcy5cbiAgICAgKiBAcmV0dXJucyBsaXN0IG9mIG5vdGVzLlxuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYyBnZXROb3Rlc0J5SWRzKHF1ZXJ5IDogYW55LCBpZHM6IHN0cmluZ1tdLCBtYXhDb25jdXJyZW50UmVxdWVzdHM6IG51bWJlciA9IDEwKSA6IFByb21pc2U8Tm90ZVF1ZXJ5UmVzdWx0cz4ge1xuXG4gICAgICAgIGNvbnN0IGpvcGxpbk5vdGVzID0gW107XG4gICAgICAgIGNvbnN0IGlkc05vdEZvdW5kID0gW107XG4gICAgICAgIFxuICAgICAgICBsZXQgcHJvbWlzZXMgOiBQcm9taXNlPGFueT5bXTtcbiAgICAgICAgbGV0IHJlcXVlc3RzIDogc3RyaW5nW107XG4gICAgICAgIGxldCBzdGFydCA6IG51bWJlciwgZW5kOiBudW1iZXIsIGNodW5rIDogbnVtYmVyID0gbWF4Q29uY3VycmVudFJlcXVlc3RzO1xuICAgICAgICBcbiAgICAgICAgZm9yIChzdGFydCA9IDAsIGVuZCA9IGlkcy5sZW5ndGg7IHN0YXJ0IDwgZW5kOyBzdGFydCArPSBjaHVuaykge1xuICAgICAgICAgICAgcmVxdWVzdHMgPSBpZHMuc2xpY2Uoc3RhcnQsIHN0YXJ0ICsgY2h1bmspO1xuICAgICAgICAgICAgcHJvbWlzZXMgPSByZXF1ZXN0cy5tYXAoIGlkID0+XG4gICAgICAgICAgICAgICAgdGhpcy5nZXROb3RlKHF1ZXJ5LCBpZClcbiAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzLm1hcCggYXN5bmMgKHAsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHAuY2F0Y2goZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlkc05vdEZvdW5kLnB1c2gocmVxdWVzdHNbaW5kZXhdKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9ICk7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICBjb25zdCB2YWxpZFJlc3VsdHMgPSByZXN1bHRzLmZpbHRlcihyZXN1bHQgPT4gIShyZXN1bHQgPT0gdW5kZWZpbmVkKSk7XG4gICAgICAgICAgICBqb3BsaW5Ob3Rlcy5wdXNoKC4uLnZhbGlkUmVzdWx0cyk7ICBcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGlkc05vdEZvdW5kLmxlbmd0aCAhPSAwKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYGpvcGxpbiBkYXRhIGFwaSA6IG5vdCBmb3VuZCBlcnJvciBmb3IgOiAke2lkc05vdEZvdW5kfWApOyAgICAgICAgICAgXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBub3RlcyA9IGF3YWl0IFByb21pc2UuYWxsKGpvcGxpbk5vdGVzLm1hcCggYXN5bmMgKG5vdGUpID0+IHRoaXMuYnVpbGROb3RlKG5vdGUpKSk7XG5cbiAgICAgICAgcmV0dXJuIHtyZXN1bHRzOiBub3RlcywgaWRzTm90Rm91bmQ6IGlkc05vdEZvdW5kLCB0cnVuY2F0ZWQ6IGZhbHNlfTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgZ2V0Tm90ZVVwZGF0ZXMoY3Vyc29yPyA6IHN0cmluZykgOiBcbiAgICBQcm9taXNlIDx7XG4gICAgICAgICAgICAgIHVwZGF0ZXM6IGFueVtdO1xuICAgICAgICAgICAgICBjdXJzb3I6IHN0cmluZztcbiAgICAgICAgICAgICB9PiBcbiAgICB7XG4gICAgICAgIGNvbnN0IHVwZGF0ZXMgPSBbXTsgXG4gICAgICAgIGxldCByZXNwb25zZSA9IG51bGw7XG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIHJlc3BvbnNlID0gKGN1cnNvcikgPyBcbiAgICAgICAgICAgICAgICBhd2FpdCBqb3BsaW4uZGF0YS5nZXQoWydldmVudHMnXSwge2N1cnNvcn0gKVxuICAgICAgICAgICAgICAgIDogYXdhaXQgam9wbGluLmRhdGEuZ2V0KFsnZXZlbnRzJ10pO1xuXG4gICAgICAgICAgICB1cGRhdGVzLnB1c2goLi4ucmVzcG9uc2UuaXRlbXMpO1xuICAgICAgICAgICAgY3Vyc29yID0gcmVzcG9uc2UuY3Vyc29yO1xuICAgICAgICB9XG4gICAgICAgIHdoaWxlKHJlc3BvbnNlLmhhc19tb3JlKTtcblxuICAgICAgICByZXR1cm4geyB1cGRhdGVzLCBjdXJzb3IgfTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgZ2V0Tm90ZShxdWVyeTogYW55LCBpZDogc3RyaW5nKSA6IFByb21pc2U8Tm90ZT4ge1xuICAgICAgICBjb25zdCBqb3BsaW5Ob3RlID0gYXdhaXQgam9wbGluLmRhdGEuZ2V0KFsnbm90ZXMnLCBpZF0sIHF1ZXJ5KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuYnVpbGROb3RlKGpvcGxpbk5vdGUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBnZXROb3RlQm9vayhxdWVyeTogYW55LCBpZDogc3RyaW5nKSA6IFByb21pc2U8Tm90ZUJvb2s+IHtcbiAgICAgICAgY29uc3Qgam9wbGluTm90ZSA9IGF3YWl0IGpvcGxpbi5kYXRhLmdldChbJ2ZvbGRlcnMnLCBpZF0sIHF1ZXJ5KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuYnVpbGROb3RlKGpvcGxpbk5vdGUpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgYnVpbGROb3RlKGpvcGxpbk5vdGU6IGFueSkgOiBQcm9taXNlPE5vdGU+IHtcbiAgICAgICAgcmV0dXJuIGpvcGxpbk5vdGU7XG5cbiAgICAgICAgLypjb25zdCBub3RlID0gcGFyc2VKb3BsaW5Ob3RlKGpvcGxpbk5vdGUpO1xuICAgICAgICBjb25zdCB0YWdzID0gYXdhaXQgam9wbGluLmRhdGEuZ2V0KFsnbm90ZXMnLCBqb3BsaW5Ob3RlLmlkLCAndGFncyddKTtcbiAgICAgICAgbm90ZS50YWdzID0gKHRhZ3M/Lml0ZW1zKSA/IHRhZ3MuaXRlbXMubWFwKCh0YWc6IGFueSkgPT4gdGFnLnRpdGxlKSA6IFtdO1xuICAgICAgICByZXR1cm4gbm90ZTsqL1xuICAgIH1cblxufVxuIiwiZXhwb3J0IGRlZmF1bHQgYFxuPGRpdiBjbGFzcz1cInNlYXJjaC1wYW5lbCBjbGVhcmZpeFwiPlxuICAgIDxkaXYgY2xhc3M9XCJzZWFyY2gtaW5wdXQgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImtleXdvcmRcIiBwbGFjZWhvbGRlcj1cImtleXdvcmQgZm9yIHNlYXJjaFwiLz5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJpc19yZWdleFwiLz4gcmVnZXhcbiAgICA8L2Rpdj5cblxuICAgIDxoci8+XG5cbiAgICA8ZGl2IGNsYXNzPVwic2VhcmNoLXRpcFwiPjwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cInNlYXJjaC1yZXN1bHRcIj48L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJlcnJvclwiPjwvZGl2PlxuPC9kaXY+XG5gOyJdLCJzb3VyY2VSb290IjoiIn0=