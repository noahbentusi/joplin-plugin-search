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
let active = false;
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
        /*try
        {
            const baseDir = await joplin.plugins.installationDir();
            //console.log(await joplin.plugins.installationDir());
    
            const worker = new Worker(`${baseDir}/webview/work.js`);
    
    
        } catch(err)
        {
            alert(err);
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
            /**/
            const baseDir = yield api_1.default.plugins.installationDir();
            const workerJs = `${baseDir}/webview/worker.js`;
            const workerMap = new Map();
            const topLineNum = Number(yield api_1.default.settings.value(SETTING_TOP_LINES));
            const bottomLineNum = Number(yield api_1.default.settings.value(SETTING_BOTTOM_LINES));
            const result = yield dataApi.getNotes({
                fields: ['id', 'parent_id', 'title', 'body']
            });
            for (let index = 0; index != result.results.length; ++index) {
                yield utils_1.timeout(0);
                (function () {
                    return __awaiter(this, void 0, void 0, function* () {
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
                        channel("status", target, index, result.results.length);
                        const lineDumps = [];
                        const dumpResult = (line) => {
                            lineDumps.push(line);
                            console.log(line.lineNumber);
                        };
                        const flushDump = () => {
                            if (lineDumps.length != 0) {
                                channel("result", searchId, target, lineDumps);
                            }
                            const worker = workerMap.get(target.noteId);
                            worker.terminate();
                            workerMap.delete(target.noteId);
                            if (workerMap.size == 0) {
                                channel("finish", true);
                            }
                        };
                        const worker = new Worker(workerJs);
                        worker.onmessage = (event) => {
                            const message = event.data;
                            if (message.event == "result") {
                                dumpResult(message.line);
                                return;
                            }
                            else if (message.event == "finish") {
                                flushDump();
                            }
                        };
                        worker.postMessage({
                            event: "start",
                            keyword,
                            isRegex,
                            body: note.body,
                            topLineNum,
                            bottomLineNum
                        });
                        workerMap.set(target.noteId, worker);
                    });
                })();
            }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBpL2luZGV4LnRzIiwid2VicGFjazovLy8uL2FwaS90eXBlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2hvc3RDaGFubmVsLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vbWVzc2FnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3V0aWxzLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvam9wbGluL2pvcGxpbi1kYXRhLWFwaS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd2Vidmlldy9odG1sLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzlFQSxrQkFBZSxNQUFNLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FDSnRCLG9FQUFvRTtBQUNw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LElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDakUsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3RDLENBQUM7S0FBQTtJQUVhLFNBQVMsQ0FBQyxVQUFlOztZQUNuQyxPQUFPLFVBQVUsQ0FBQztZQUVsQjs7OzBCQUdjO1FBQ2xCLENBQUM7S0FBQTtDQUVKO0FBdExELGdDQXNMQzs7Ozs7Ozs7Ozs7OztBQ2pORDtBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxFIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJpbXBvcnQgdHlwZSBKb3BsaW4gZnJvbSAnLi9Kb3BsaW4nO1xuXG5kZWNsYXJlIGNvbnN0IGpvcGxpbjogSm9wbGluO1xuXG5leHBvcnQgZGVmYXVsdCBqb3BsaW47XG4iLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQ29tbWFuZCBBUEkgdHlwZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29tbWFuZCB7XG5cdC8qKlxuXHQgKiBOYW1lIG9mIGNvbW1hbmQgLSBtdXN0IGJlIGdsb2JhbGx5IHVuaXF1ZVxuXHQgKi9cblx0bmFtZTogc3RyaW5nO1xuXG5cdC8qKlxuXHQgKiBMYWJlbCB0byBiZSBkaXNwbGF5ZWQgb24gbWVudSBpdGVtcyBvciBrZXlib2FyZCBzaG9ydGN1dCBlZGl0b3IgZm9yIGV4YW1wbGUuXG5cdCAqIElmIGl0IGlzIG1pc3NpbmcsIGl0J3MgYXNzdW1lZCBpdCdzIGEgcHJpdmF0ZSBjb21tYW5kLCB0byBiZSBjYWxsZWQgcHJvZ3JhbW1hdGljYWxseSBvbmx5LlxuXHQgKiBJbiB0aGF0IGNhc2UgdGhlIGNvbW1hbmQgd2lsbCBub3QgYXBwZWFyIGluIHRoZSBzaG9ydGN1dCBlZGl0b3Igb3IgY29tbWFuZCBwYW5lbCwgYW5kIGxvZ2ljYWxseVxuXHQgKiBzaG91bGQgbm90IGJlIHVzZWQgYXMgYSBtZW51IGl0ZW0uXG5cdCAqL1xuXHRsYWJlbD86IHN0cmluZztcblxuXHQvKipcblx0ICogSWNvbiB0byBiZSB1c2VkIG9uIHRvb2xiYXIgYnV0dG9ucyBmb3IgZXhhbXBsZVxuXHQgKi9cblx0aWNvbk5hbWU/OiBzdHJpbmc7XG5cblx0LyoqXG5cdCAqIENvZGUgdG8gYmUgcmFuIHdoZW4gdGhlIGNvbW1hbmQgaXMgZXhlY3V0ZWQuIEl0IG1heSByZXR1cm4gYSByZXN1bHQuXG5cdCAqL1xuXHRleGVjdXRlKC4uLmFyZ3M6IGFueVtdKTogUHJvbWlzZTxhbnkgfCB2b2lkPjtcblxuXHQvKipcblx0ICogRGVmaW5lcyB3aGV0aGVyIHRoZSBjb21tYW5kIHNob3VsZCBiZSBlbmFibGVkIG9yIGRpc2FibGVkLCB3aGljaCBpbiB0dXJuc1xuXHQgKiBhZmZlY3RzIHRoZSBlbmFibGVkIHN0YXRlIG9mIGFueSBhc3NvY2lhdGVkIGJ1dHRvbiBvciBtZW51IGl0ZW0uXG5cdCAqXG5cdCAqIFRoZSBjb25kaXRpb24gc2hvdWxkIGJlIGV4cHJlc3NlZCBhcyBhIFwid2hlbi1jbGF1c2VcIiAoYXMgaW4gVmlzdWFsIFN0dWRpb1xuXHQgKiBDb2RlKS4gSXQncyBhIHNpbXBsZSBib29sZWFuIGV4cHJlc3Npb24gdGhhdCBldmFsdWF0ZXMgdG8gYHRydWVgIG9yXG5cdCAqIGBmYWxzZWAuIEl0IHN1cHBvcnRzIHRoZSBmb2xsb3dpbmcgb3BlcmF0b3JzOlxuXHQgKlxuXHQgKiBPcGVyYXRvciB8IFN5bWJvbCB8IEV4YW1wbGVcblx0ICogLS0gfCAtLSB8IC0tXG5cdCAqIEVxdWFsaXR5IHwgPT0gfCBcImVkaXRvclR5cGUgPT0gbWFya2Rvd25cIlxuXHQgKiBJbmVxdWFsaXR5IHwgIT0gfCBcImN1cnJlbnRTY3JlZW4gIT0gY29uZmlnXCJcblx0ICogT3IgfCBcXHxcXHwgfCBcIm5vdGVJc1RvZG8gXFx8XFx8IG5vdGVUb2RvQ29tcGxldGVkXCJcblx0ICogQW5kIHwgJiYgfCBcIm9uZU5vdGVTZWxlY3RlZCAmJiAhaW5Db25mbGljdEZvbGRlclwiXG5cdCAqXG5cdCAqIEpvcGxpbiwgdW5saWtlIFZTQ29kZSwgYWxzbyBzdXBwb3J0cyBwYXJlbnRoZXNpcywgd2hpY2ggYWxsb3dzIGNyZWF0aW5nXG5cdCAqIG1vcmUgY29tcGxleCBleHByZXNzaW9ucyBzdWNoIGFzIGBjb25kMSB8fCAoY29uZDIgJiYgY29uZDMpYC4gT25seSBvbmVcblx0ICogbGV2ZWwgb2YgcGFyZW50aGVzaXMgaXMgcG9zc2libGUgKG5lc3RlZCBvbmVzIGFyZW4ndCBzdXBwb3J0ZWQpLlxuXHQgKlxuXHQgKiBDdXJyZW50bHkgdGhlIHN1cHBvcnRlZCBjb250ZXh0IHZhcmlhYmxlcyBhcmVuJ3QgZG9jdW1lbnRlZCwgYnV0IHlvdSBjYW5cblx0ICogZmluZCB0aGUgbGlzdCBiZWxvdzpcblx0ICpcblx0ICogLSBbR2xvYmFsIFdoZW4gQ2xhdXNlc10oaHR0cHM6Ly9naXRodWIuY29tL2xhdXJlbnQyMi9qb3BsaW4vYmxvYi9kZXYvcGFja2FnZXMvbGliL3NlcnZpY2VzL2NvbW1hbmRzL3N0YXRlVG9XaGVuQ2xhdXNlQ29udGV4dC50cylcblx0ICogLSBbRGVza3RvcCBhcHAgV2hlbiBDbGF1c2VzXShodHRwczovL2dpdGh1Yi5jb20vbGF1cmVudDIyL2pvcGxpbi9ibG9iL2Rldi9wYWNrYWdlcy9hcHAtZGVza3RvcC9zZXJ2aWNlcy9jb21tYW5kcy9zdGF0ZVRvV2hlbkNsYXVzZUNvbnRleHQudHMpXG5cdCAqXG5cdCAqIE5vdGU6IENvbW1hbmRzIGFyZSBlbmFibGVkIGJ5IGRlZmF1bHQgdW5sZXNzIHlvdSB1c2UgdGhpcyBwcm9wZXJ0eS5cblx0ICovXG5cdGVuYWJsZWRDb25kaXRpb24/OiBzdHJpbmc7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBJbnRlcm9wIEFQSSB0eXBlc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IGVudW0gRmlsZVN5c3RlbUl0ZW0ge1xuXHRGaWxlID0gJ2ZpbGUnLFxuXHREaXJlY3RvcnkgPSAnZGlyZWN0b3J5Jyxcbn1cblxuZXhwb3J0IGVudW0gSW1wb3J0TW9kdWxlT3V0cHV0Rm9ybWF0IHtcblx0TWFya2Rvd24gPSAnbWQnLFxuXHRIdG1sID0gJ2h0bWwnLFxufVxuXG4vKipcbiAqIFVzZWQgdG8gaW1wbGVtZW50IGEgbW9kdWxlIHRvIGV4cG9ydCBkYXRhIGZyb20gSm9wbGluLiBbVmlldyB0aGUgZGVtbyBwbHVnaW5dKGh0dHBzOi8vZ2l0aHViLmNvbS9sYXVyZW50MjIvam9wbGluL3RyZWUvZGV2L3BhY2thZ2VzL2FwcC1jbGkvdGVzdHMvc3VwcG9ydC9wbHVnaW5zL2pzb25fZXhwb3J0KSBmb3IgYW4gZXhhbXBsZS5cbiAqXG4gKiBJbiBnZW5lcmFsLCBhbGwgdGhlIGV2ZW50IGhhbmRsZXJzIHlvdSdsbCBuZWVkIHRvIGltcGxlbWVudCB0YWtlIGEgYGNvbnRleHRgIG9iamVjdCBhcyBhIGZpcnN0IGFyZ3VtZW50LiBUaGlzIG9iamVjdCB3aWxsIGNvbnRhaW4gdGhlIGV4cG9ydCBvciBpbXBvcnQgcGF0aCBhcyB3ZWxsIGFzIHZhcmlvdXMgb3B0aW9uYWwgcHJvcGVydGllcywgc3VjaCBhcyB3aGljaCBub3RlcyBvciBub3RlYm9va3MgbmVlZCB0byBiZSBleHBvcnRlZC5cbiAqXG4gKiBUbyBnZXQgYSBiZXR0ZXIgc2Vuc2Ugb2Ygd2hhdCBpdCB3aWxsIGNvbnRhaW4gaXQgY2FuIGJlIHVzZWZ1bCB0byBwcmludCBpdCB1c2luZyBgY29uc29sZS5pbmZvKGNvbnRleHQpYC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBFeHBvcnRNb2R1bGUge1xuXHQvKipcblx0ICogVGhlIGZvcm1hdCB0byBiZSBleHBvcnRlZCwgZWcgXCJlbmV4XCIsIFwiamV4XCIsIFwianNvblwiLCBldGMuXG5cdCAqL1xuXHRmb3JtYXQ6IHN0cmluZztcblxuXHQvKipcblx0ICogVGhlIGRlc2NyaXB0aW9uIHRoYXQgd2lsbCBhcHBlYXIgaW4gdGhlIFVJLCBmb3IgZXhhbXBsZSBpbiB0aGUgbWVudSBpdGVtLlxuXHQgKi9cblx0ZGVzY3JpcHRpb246IHN0cmluZztcblxuXHQvKipcblx0ICogV2hldGhlciB0aGUgbW9kdWxlIHdpbGwgZXhwb3J0IGEgc2luZ2xlIGZpbGUgb3IgbXVsdGlwbGUgZmlsZXMgaW4gYSBkaXJlY3RvcnkuIEl0IGFmZmVjdHMgdGhlIG9wZW4gZGlhbG9nIHRoYXQgd2lsbCBiZSBwcmVzZW50ZWQgdG8gdGhlIHVzZXIgd2hlbiB1c2luZyB5b3VyIGV4cG9ydGVyLlxuXHQgKi9cblx0dGFyZ2V0OiBGaWxlU3lzdGVtSXRlbTtcblxuXHQvKipcblx0ICogT25seSBhcHBsaWVzIHRvIHNpbmdsZSBmaWxlIGV4cG9ydGVycyBvciBpbXBvcnRlcnNcblx0ICogSXQgdGVsbHMgd2hldGhlciB0aGUgZm9ybWF0IGNhbiBwYWNrYWdlIG11bHRpcGxlIG5vdGVzIGludG8gb25lIGZpbGUuXG5cdCAqIEZvciBleGFtcGxlIEpFWCBvciBFTkVYIGNhbiwgYnV0IEhUTUwgY2Fubm90LlxuXHQgKi9cblx0aXNOb3RlQXJjaGl2ZTogYm9vbGVhbjtcblxuXHQvKipcblx0ICogVGhlIGV4dGVuc2lvbnMgb2YgdGhlIGZpbGVzIGV4cG9ydGVkIGJ5IHlvdXIgbW9kdWxlLiBGb3IgZXhhbXBsZSwgaXQgaXMgYFtcImh0bVwiLCBcImh0bWxcIl1gIGZvciB0aGUgSFRNTCBtb2R1bGUsIGFuZCBqdXN0IGBbXCJqZXhcIl1gIGZvciB0aGUgSkVYIG1vZHVsZS5cblx0ICovXG5cdGZpbGVFeHRlbnNpb25zPzogc3RyaW5nW107XG5cblx0LyoqXG5cdCAqIENhbGxlZCB3aGVuIHRoZSBleHBvcnQgcHJvY2VzcyBzdGFydHMuXG5cdCAqL1xuXHRvbkluaXQoY29udGV4dDogRXhwb3J0Q29udGV4dCk6IFByb21pc2U8dm9pZD47XG5cblx0LyoqXG5cdCAqIENhbGxlZCB3aGVuIGFuIGl0ZW0gbmVlZHMgdG8gYmUgcHJvY2Vzc2VkLiBBbiBcIml0ZW1cIiBjYW4gYmUgYW55IEpvcGxpbiBvYmplY3QsIHN1Y2ggYXMgYSBub3RlLCBhIGZvbGRlciwgYSBub3RlYm9vaywgZXRjLlxuXHQgKi9cblx0b25Qcm9jZXNzSXRlbShjb250ZXh0OiBFeHBvcnRDb250ZXh0LCBpdGVtVHlwZTogbnVtYmVyLCBpdGVtOiBhbnkpOiBQcm9taXNlPHZvaWQ+O1xuXG5cdC8qKlxuXHQgKiBDYWxsZWQgd2hlbiBhIHJlc291cmNlIGZpbGUgbmVlZHMgdG8gYmUgZXhwb3J0ZWQuXG5cdCAqL1xuXHRvblByb2Nlc3NSZXNvdXJjZShjb250ZXh0OiBFeHBvcnRDb250ZXh0LCByZXNvdXJjZTogYW55LCBmaWxlUGF0aDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPjtcblxuXHQvKipcblx0ICogQ2FsbGVkIHdoZW4gdGhlIGV4cG9ydCBwcm9jZXNzIGlzIGRvbmUuXG5cdCAqL1xuXHRvbkNsb3NlKGNvbnRleHQ6IEV4cG9ydENvbnRleHQpOiBQcm9taXNlPHZvaWQ+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEltcG9ydE1vZHVsZSB7XG5cdC8qKlxuXHQgKiBUaGUgZm9ybWF0IHRvIGJlIGV4cG9ydGVkLCBlZyBcImVuZXhcIiwgXCJqZXhcIiwgXCJqc29uXCIsIGV0Yy5cblx0ICovXG5cdGZvcm1hdDogc3RyaW5nO1xuXG5cdC8qKlxuXHQgKiBUaGUgZGVzY3JpcHRpb24gdGhhdCB3aWxsIGFwcGVhciBpbiB0aGUgVUksIGZvciBleGFtcGxlIGluIHRoZSBtZW51IGl0ZW0uXG5cdCAqL1xuXHRkZXNjcmlwdGlvbjogc3RyaW5nO1xuXG5cdC8qKlxuXHQgKiBPbmx5IGFwcGxpZXMgdG8gc2luZ2xlIGZpbGUgZXhwb3J0ZXJzIG9yIGltcG9ydGVyc1xuXHQgKiBJdCB0ZWxscyB3aGV0aGVyIHRoZSBmb3JtYXQgY2FuIHBhY2thZ2UgbXVsdGlwbGUgbm90ZXMgaW50byBvbmUgZmlsZS5cblx0ICogRm9yIGV4YW1wbGUgSkVYIG9yIEVORVggY2FuLCBidXQgSFRNTCBjYW5ub3QuXG5cdCAqL1xuXHRpc05vdGVBcmNoaXZlOiBib29sZWFuO1xuXG5cdC8qKlxuXHQgKiBUaGUgdHlwZSBvZiBzb3VyY2VzIHRoYXQgYXJlIHN1cHBvcnRlZCBieSB0aGUgbW9kdWxlLiBUZWxscyB3aGV0aGVyIHRoZSBtb2R1bGUgY2FuIGltcG9ydCBmaWxlcyBvciBkaXJlY3RvcmllcyBvciBib3RoLlxuXHQgKi9cblx0c291cmNlczogRmlsZVN5c3RlbUl0ZW1bXTtcblxuXHQvKipcblx0ICogVGVsbHMgdGhlIGZpbGUgZXh0ZW5zaW9ucyBvZiB0aGUgZXhwb3J0ZWQgZmlsZXMuXG5cdCAqL1xuXHRmaWxlRXh0ZW5zaW9ucz86IHN0cmluZ1tdO1xuXG5cdC8qKlxuXHQgKiBUZWxscyB0aGUgdHlwZSBvZiBub3RlcyB0aGF0IHdpbGwgYmUgZ2VuZXJhdGVkLCBlaXRoZXIgSFRNTCBvciBNYXJrZG93biAoZGVmYXVsdCkuXG5cdCAqL1xuXHRvdXRwdXRGb3JtYXQ/OiBJbXBvcnRNb2R1bGVPdXRwdXRGb3JtYXQ7XG5cblx0LyoqXG5cdCAqIENhbGxlZCB3aGVuIHRoZSBpbXBvcnQgcHJvY2VzcyBzdGFydHMuIFRoZXJlIGlzIG9ubHkgb25lIGV2ZW50IGhhbmRsZXIgd2l0aGluIHdoaWNoIHlvdSBzaG91bGQgaW1wb3J0IHRoZSBjb21wbGV0ZSBkYXRhLlxuXHQgKi9cblx0b25FeGVjKGNvbnRleHQ6IEltcG9ydENvbnRleHQpOiBQcm9taXNlPHZvaWQ+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEV4cG9ydE9wdGlvbnMge1xuXHRmb3JtYXQ/OiBzdHJpbmc7XG5cdHBhdGg/OiBzdHJpbmc7XG5cdHNvdXJjZUZvbGRlcklkcz86IHN0cmluZ1tdO1xuXHRzb3VyY2VOb3RlSWRzPzogc3RyaW5nW107XG5cdC8vIG1vZHVsZVBhdGg/OiBzdHJpbmc7XG5cdHRhcmdldD86IEZpbGVTeXN0ZW1JdGVtO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEV4cG9ydENvbnRleHQge1xuXHRkZXN0UGF0aDogc3RyaW5nO1xuXHRvcHRpb25zOiBFeHBvcnRPcHRpb25zO1xuXG5cdC8qKlxuXHQgKiBZb3UgY2FuIGF0dGFjaCB5b3VyIG93biBjdXN0b20gZGF0YSB1c2luZyB0aGlzIHByb3BlcnkgLSBpdCB3aWxsIHRoZW4gYmUgcGFzc2VkIHRvIGVhY2ggZXZlbnQgaGFuZGxlciwgYWxsb3dpbmcgeW91IHRvIGtlZXAgc3RhdGUgZnJvbSBvbmUgZXZlbnQgdG8gdGhlIG5leHQuXG5cdCAqL1xuXHR1c2VyRGF0YT86IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJbXBvcnRDb250ZXh0IHtcblx0c291cmNlUGF0aDogc3RyaW5nO1xuXHRvcHRpb25zOiBhbnk7XG5cdHdhcm5pbmdzOiBzdHJpbmdbXTtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE1pc2MgdHlwZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2NyaXB0IHtcblx0b25TdGFydD8oZXZlbnQ6IGFueSk6IFByb21pc2U8dm9pZD47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGlzcG9zYWJsZSB7XG5cdC8vIGRpc3Bvc2UoKTp2b2lkO1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTWVudSB0eXBlc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IGludGVyZmFjZSBDcmVhdGVNZW51SXRlbU9wdGlvbnMge1xuXHRhY2NlbGVyYXRvcjogc3RyaW5nO1xufVxuXG5leHBvcnQgZW51bSBNZW51SXRlbUxvY2F0aW9uIHtcblx0RmlsZSA9ICdmaWxlJyxcblx0RWRpdCA9ICdlZGl0Jyxcblx0VmlldyA9ICd2aWV3Jyxcblx0Tm90ZSA9ICdub3RlJyxcblx0VG9vbHMgPSAndG9vbHMnLFxuXHRIZWxwID0gJ2hlbHAnLFxuXG5cdC8qKlxuXHQgKiBAZGVwcmVjYXRlZCBEbyBub3QgdXNlIC0gc2FtZSBhcyBOb3RlTGlzdENvbnRleHRNZW51XG5cdCAqL1xuXHRDb250ZXh0ID0gJ2NvbnRleHQnLFxuXG5cdC8vIElmIGFkZGluZyBhbiBpdGVtIGhlcmUsIGRvbid0IGZvcmdldCB0byB1cGRhdGUgaXNDb250ZXh0TWVudUl0ZW1Mb2NhdGlvbigpXG5cblx0LyoqXG5cdCAqIFdoZW4gYSBjb21tYW5kIGlzIGNhbGxlZCBmcm9tIHRoZSBub3RlIGxpc3QgY29udGV4dCBtZW51LCB0aGVcblx0ICogY29tbWFuZCB3aWxsIHJlY2VpdmUgdGhlIGZvbGxvd2luZyBhcmd1bWVudHM6XG5cdCAqXG5cdCAqIC0gYG5vdGVJZHM6c3RyaW5nW11gOiBJRHMgb2YgdGhlIG5vdGVzIHRoYXQgd2VyZSByaWdodC1jbGlja2VkIG9uLlxuXHQgKi9cblx0Tm90ZUxpc3RDb250ZXh0TWVudSA9ICdub3RlTGlzdENvbnRleHRNZW51JyxcblxuXHRFZGl0b3JDb250ZXh0TWVudSA9ICdlZGl0b3JDb250ZXh0TWVudScsXG5cblx0LyoqXG5cdCAqIFdoZW4gYSBjb21tYW5kIGlzIGNhbGxlZCBmcm9tIGEgZm9sZGVyIGNvbnRleHQgbWVudSwgdGhlXG5cdCAqIGNvbW1hbmQgd2lsbCByZWNlaXZlIHRoZSBmb2xsb3dpbmcgYXJndW1lbnRzOlxuXHQgKlxuXHQgKiAtIGBmb2xkZXJJZDpzdHJpbmdgOiBJRCBvZiB0aGUgZm9sZGVyIHRoYXQgd2FzIHJpZ2h0LWNsaWNrZWQgb25cblx0ICovXG5cdEZvbGRlckNvbnRleHRNZW51ID0gJ2ZvbGRlckNvbnRleHRNZW51JyxcblxuXHQvKipcblx0ICogV2hlbiBhIGNvbW1hbmQgaXMgY2FsbGVkIGZyb20gYSB0YWcgY29udGV4dCBtZW51LCB0aGVcblx0ICogY29tbWFuZCB3aWxsIHJlY2VpdmUgdGhlIGZvbGxvd2luZyBhcmd1bWVudHM6XG5cdCAqXG5cdCAqIC0gYHRhZ0lkOnN0cmluZ2A6IElEIG9mIHRoZSB0YWcgdGhhdCB3YXMgcmlnaHQtY2xpY2tlZCBvblxuXHQgKi9cblx0VGFnQ29udGV4dE1lbnUgPSAndGFnQ29udGV4dE1lbnUnLFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNDb250ZXh0TWVudUl0ZW1Mb2NhdGlvbihsb2NhdGlvbjogTWVudUl0ZW1Mb2NhdGlvbik6IGJvb2xlYW4ge1xuXHRyZXR1cm4gW1xuXHRcdE1lbnVJdGVtTG9jYXRpb24uQ29udGV4dCxcblx0XHRNZW51SXRlbUxvY2F0aW9uLk5vdGVMaXN0Q29udGV4dE1lbnUsXG5cdFx0TWVudUl0ZW1Mb2NhdGlvbi5FZGl0b3JDb250ZXh0TWVudSxcblx0XHRNZW51SXRlbUxvY2F0aW9uLkZvbGRlckNvbnRleHRNZW51LFxuXHRcdE1lbnVJdGVtTG9jYXRpb24uVGFnQ29udGV4dE1lbnUsXG5cdF0uaW5jbHVkZXMobG9jYXRpb24pO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1lbnVJdGVtIHtcblx0LyoqXG5cdCAqIENvbW1hbmQgdGhhdCBzaG91bGQgYmUgYXNzb2NpYXRlZCB3aXRoIHRoZSBtZW51IGl0ZW0uIEFsbCBtZW51IGl0ZW0gc2hvdWxkXG5cdCAqIGhhdmUgYSBjb21tYW5kIGFzc29jaWF0ZWQgd2l0aCB0aGVtIHVubGVzcyB0aGV5IGFyZSBhIHN1Yi1tZW51LlxuXHQgKi9cblx0Y29tbWFuZE5hbWU/OiBzdHJpbmc7XG5cblx0LyoqXG5cdCAqIEFjY2VsZXJhdG9yIGFzc29jaWF0ZWQgd2l0aCB0aGUgbWVudSBpdGVtXG5cdCAqL1xuXHRhY2NlbGVyYXRvcj86IHN0cmluZztcblxuXHQvKipcblx0ICogTWVudSBpdGVtcyB0aGF0IHNob3VsZCBhcHBlYXIgYmVsb3cgdGhpcyBtZW51IGl0ZW0uIEFsbG93cyBjcmVhdGluZyBhIG1lbnUgdHJlZS5cblx0ICovXG5cdHN1Ym1lbnU/OiBNZW51SXRlbVtdO1xuXG5cdC8qKlxuXHQgKiBNZW51IGl0ZW0gbGFiZWwuIElmIG5vdCBzcGVjaWZpZWQsIHRoZSBjb21tYW5kIGxhYmVsIHdpbGwgYmUgdXNlZCBpbnN0ZWFkLlxuXHQgKi9cblx0bGFiZWw/OiBzdHJpbmc7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBWaWV3IEFQSSB0eXBlc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IGludGVyZmFjZSBCdXR0b25TcGVjIHtcblx0aWQ6IEJ1dHRvbklkO1xuXHR0aXRsZT86IHN0cmluZztcblx0b25DbGljaz8oKTogdm9pZDtcbn1cblxuZXhwb3J0IHR5cGUgQnV0dG9uSWQgPSBzdHJpbmc7XG5cbmV4cG9ydCBlbnVtIFRvb2xiYXJCdXR0b25Mb2NhdGlvbiB7XG5cdC8qKlxuXHQgKiBUaGlzIHRvb2xiYXIgaW4gdGhlIHRvcCByaWdodCBjb3JuZXIgb2YgdGhlIGFwcGxpY2F0aW9uLiBJdCBhcHBsaWVzIHRvIHRoZSBub3RlIGFzIGEgd2hvbGUsIGluY2x1ZGluZyBpdHMgbWV0YWRhdGEuXG5cdCAqL1xuXHROb3RlVG9vbGJhciA9ICdub3RlVG9vbGJhcicsXG5cblx0LyoqXG5cdCAqIFRoaXMgdG9vbGJhciBpcyByaWdodCBhYm92ZSB0aGUgdGV4dCBlZGl0b3IuIEl0IGFwcGxpZXMgdG8gdGhlIG5vdGUgYm9keSBvbmx5LlxuXHQgKi9cblx0RWRpdG9yVG9vbGJhciA9ICdlZGl0b3JUb29sYmFyJyxcbn1cblxuZXhwb3J0IHR5cGUgVmlld0hhbmRsZSA9IHN0cmluZztcblxuZXhwb3J0IGludGVyZmFjZSBFZGl0b3JDb21tYW5kIHtcblx0bmFtZTogc3RyaW5nO1xuXHR2YWx1ZT86IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEaWFsb2dSZXN1bHQge1xuXHRpZDogQnV0dG9uSWQ7XG5cdGZvcm1EYXRhPzogYW55O1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gU2V0dGluZ3MgdHlwZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBlbnVtIFNldHRpbmdJdGVtVHlwZSB7XG5cdEludCA9IDEsXG5cdFN0cmluZyA9IDIsXG5cdEJvb2wgPSAzLFxuXHRBcnJheSA9IDQsXG5cdE9iamVjdCA9IDUsXG5cdEJ1dHRvbiA9IDYsXG59XG5cbi8vIFJlZGVmaW5lIGEgc2ltcGxpZmllZCBpbnRlcmZhY2UgdG8gbWFzayBpbnRlcm5hbCBkZXRhaWxzXG4vLyBhbmQgdG8gcmVtb3ZlIGZ1bmN0aW9uIGNhbGxzIGFzIHRoZXkgd291bGQgaGF2ZSB0byBiZSBhc3luYy5cbmV4cG9ydCBpbnRlcmZhY2UgU2V0dGluZ0l0ZW0ge1xuXHR2YWx1ZTogYW55O1xuXHR0eXBlOiBTZXR0aW5nSXRlbVR5cGU7XG5cblx0bGFiZWw6IHN0cmluZztcblx0ZGVzY3JpcHRpb24/OiBzdHJpbmc7XG5cblx0LyoqXG5cdCAqIEEgcHVibGljIHNldHRpbmcgd2lsbCBhcHBlYXIgaW4gdGhlIENvbmZpZ3VyYXRpb24gc2NyZWVuIGFuZCB3aWxsIGJlXG5cdCAqIG1vZGlmaWFibGUgYnkgdGhlIHVzZXIuIEEgcHJpdmF0ZSBzZXR0aW5nIGhvd2V2ZXIgd2lsbCBub3QgYXBwZWFyIHRoZXJlLFxuXHQgKiBhbmQgY2FuIG9ubHkgYmUgY2hhbmdlZCBwcm9ncmFtbWF0aWNhbGx5LiBZb3UgbWF5IHVzZSB0aGlzIHRvIHN0b3JlIHNvbWVcblx0ICogdmFsdWVzIHRoYXQgeW91IGRvIG5vdCB3YW50IHRvIGRpcmVjdGx5IGV4cG9zZS5cblx0ICovXG5cdHB1YmxpYzogYm9vbGVhbjtcblxuXHQvKipcblx0ICogWW91IHdvdWxkIHVzdWFsbHkgc2V0IHRoaXMgdG8gYSBzZWN0aW9uIHlvdSB3b3VsZCBoYXZlIGNyZWF0ZWRcblx0ICogc3BlY2lmaWNhbGx5IGZvciB0aGUgcGx1Z2luLlxuXHQgKi9cblx0c2VjdGlvbj86IHN0cmluZztcblxuXHQvKipcblx0ICogVG8gY3JlYXRlIGEgc2V0dGluZyB3aXRoIG11bHRpcGxlIG9wdGlvbnMsIHNldCB0aGlzIHByb3BlcnR5IHRvIGB0cnVlYC5cblx0ICogVGhhdCBzZXR0aW5nIHdpbGwgcmVuZGVyIGFzIGEgZHJvcGRvd24gbGlzdCBpbiB0aGUgY29uZmlndXJhdGlvbiBzY3JlZW4uXG5cdCAqL1xuXHRpc0VudW0/OiBib29sZWFuO1xuXG5cdC8qKlxuXHQgKiBUaGlzIHByb3BlcnR5IGlzIHJlcXVpcmVkIHdoZW4gYGlzRW51bWAgaXMgYHRydWVgLiBJbiB3aGljaCBjYXNlLCBpdFxuXHQgKiBzaG91bGQgY29udGFpbiBhIG1hcCBvZiB2YWx1ZSA9PiBsYWJlbC5cblx0ICovXG5cdG9wdGlvbnM/OiBSZWNvcmQ8YW55LCBhbnk+O1xuXG5cdC8qKlxuXHQgKiBSZXNlcnZlZCBwcm9wZXJ0eS4gTm90IHVzZWQgYXQgdGhlIG1vbWVudC5cblx0ICovXG5cdGFwcFR5cGVzPzogc3RyaW5nW107XG5cblx0LyoqXG5cdCAqIFNldCB0aGlzIHRvIGB0cnVlYCB0byBzdG9yZSBzZWN1cmUgZGF0YSwgc3VjaCBhcyBwYXNzd29yZHMuIEFueSBzdWNoXG5cdCAqIHNldHRpbmcgd2lsbCBiZSBzdG9yZWQgaW4gdGhlIHN5c3RlbSBrZXljaGFpbiBpZiBvbmUgaXMgYXZhaWxhYmxlLlxuXHQgKi9cblx0c2VjdXJlPzogYm9vbGVhbjtcblxuXHQvKipcblx0ICogQW4gYWR2YW5jZWQgc2V0dGluZyB3aWxsIGJlIG1vdmVkIHVuZGVyIHRoZSBcIkFkdmFuY2VkXCIgYnV0dG9uIGluIHRoZVxuXHQgKiBjb25maWcgc2NyZWVuLlxuXHQgKi9cblx0YWR2YW5jZWQ/OiBib29sZWFuO1xuXG5cdC8qKlxuXHQgKiBTZXQgdGhlIG1pbiwgbWF4IGFuZCBzdGVwIHZhbHVlcyBpZiB5b3Ugd2FudCB0byByZXN0cmljdCBhbiBpbnQgc2V0dGluZ1xuXHQgKiB0byBhIHBhcnRpY3VsYXIgcmFuZ2UuXG5cdCAqL1xuXHRtaW5pbXVtPzogbnVtYmVyO1xuXHRtYXhpbXVtPzogbnVtYmVyO1xuXHRzdGVwPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNldHRpbmdTZWN0aW9uIHtcblx0bGFiZWw6IHN0cmluZztcblx0aWNvbk5hbWU/OiBzdHJpbmc7XG5cdGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuXHRuYW1lPzogc3RyaW5nO1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRGF0YSBBUEkgdHlwZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8qKlxuICogQW4gYXJyYXkgb2YgYXQgbGVhc3Qgb25lIGVsZW1lbnQgYW5kIGF0IG1vc3QgdGhyZWUgZWxlbWVudHMuXG4gKlxuICogLSAqKlswXSoqOiBSZXNvdXJjZSBuYW1lIChlZy4gXCJub3Rlc1wiLCBcImZvbGRlcnNcIiwgXCJ0YWdzXCIsIGV0Yy4pXG4gKiAtICoqWzFdKio6IChPcHRpb25hbCkgUmVzb3VyY2UgSUQuXG4gKiAtICoqWzJdKio6IChPcHRpb25hbCkgUmVzb3VyY2UgbGluay5cbiAqL1xuZXhwb3J0IHR5cGUgUGF0aCA9IHN0cmluZ1tdO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQ29udGVudCBTY3JpcHQgdHlwZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCB0eXBlIFBvc3RNZXNzYWdlSGFuZGxlciA9IChpZDogc3RyaW5nLCBtZXNzYWdlOiBhbnkpPT4gUHJvbWlzZTxhbnk+O1xuXG4vKipcbiAqIFdoZW4gYSBjb250ZW50IHNjcmlwdCBpcyBpbml0aWFsaXNlZCwgaXQgcmVjZWl2ZXMgYSBgY29udGV4dGAgb2JqZWN0LlxuICovXG5leHBvcnQgaW50ZXJmYWNlIENvbnRlbnRTY3JpcHRDb250ZXh0IHtcblx0LyoqXG5cdCAqIFRoZSBwbHVnaW4gSUQgdGhhdCByZWdpc3RlcmVkIHRoaXMgY29udGVudCBzY3JpcHRcblx0ICovXG5cdHBsdWdpbklkOiBzdHJpbmc7XG5cblx0LyoqXG5cdCAqIFRoZSBjb250ZW50IHNjcmlwdCBJRCwgd2hpY2ggbWF5IGJlIG5lY2Vzc2FyeSB0byBwb3N0IG1lc3NhZ2VzXG5cdCAqL1xuXHRjb250ZW50U2NyaXB0SWQ6IHN0cmluZztcblxuXHQvKipcblx0ICogQ2FuIGJlIHVzZWQgYnkgQ29kZU1pcnJvciBjb250ZW50IHNjcmlwdHMgdG8gcG9zdCBhIG1lc3NhZ2UgdG8gdGhlIHBsdWdpblxuXHQgKi9cblx0cG9zdE1lc3NhZ2U6IFBvc3RNZXNzYWdlSGFuZGxlcjtcbn1cblxuZXhwb3J0IGVudW0gQ29udGVudFNjcmlwdFR5cGUge1xuXHQvKipcblx0ICogUmVnaXN0ZXJzIGEgbmV3IE1hcmtkb3duLUl0IHBsdWdpbiwgd2hpY2ggc2hvdWxkIGZvbGxvdyB0aGUgdGVtcGxhdGVcblx0ICogYmVsb3cuXG5cdCAqXG5cdCAqIGBgYGphdmFzY3JpcHRcblx0ICogbW9kdWxlLmV4cG9ydHMgPSB7XG5cdCAqICAgICBkZWZhdWx0OiBmdW5jdGlvbihjb250ZXh0KSB7XG5cdCAqICAgICAgICAgcmV0dXJuIHtcblx0ICogICAgICAgICAgICAgcGx1Z2luOiBmdW5jdGlvbihtYXJrZG93bkl0LCBvcHRpb25zKSB7XG5cdCAqICAgICAgICAgICAgICAgICAvLyAuLi5cblx0ICogICAgICAgICAgICAgfSxcblx0ICogICAgICAgICAgICAgYXNzZXRzOiB7XG5cdCAqICAgICAgICAgICAgICAgICAvLyAuLi5cblx0ICogICAgICAgICAgICAgfSxcblx0ICogICAgICAgICB9XG5cdCAqICAgICB9XG5cdCAqIH1cblx0ICogYGBgXG5cdCAqIFNlZSBbdGhlXG5cdCAqIGRlbW9dKGh0dHBzOi8vZ2l0aHViLmNvbS9sYXVyZW50MjIvam9wbGluL3RyZWUvZGV2L3BhY2thZ2VzL2FwcC1jbGkvdGVzdHMvc3VwcG9ydC9wbHVnaW5zL2NvbnRlbnRfc2NyaXB0KVxuXHQgKiBmb3IgYSBzaW1wbGUgTWFya2Rvd24taXQgcGx1Z2luIGV4YW1wbGUuXG5cdCAqXG5cdCAqICMjIEV4cG9ydGVkIG1lbWJlcnNcblx0ICpcblx0ICogLSBUaGUgYGNvbnRleHRgIGFyZ3VtZW50IGlzIGN1cnJlbnRseSB1bnVzZWQgYnV0IGNvdWxkIGJlIHVzZWQgbGF0ZXIgb25cblx0ICogICB0byBwcm92aWRlIGFjY2VzcyB0byB5b3VyIG93biBwbHVnaW4gc28gdGhhdCB0aGUgY29udGVudCBzY3JpcHQgYW5kXG5cdCAqICAgcGx1Z2luIGNhbiBjb21tdW5pY2F0ZS5cblx0ICpcblx0ICogLSBUaGUgKipyZXF1aXJlZCoqIGBwbHVnaW5gIGtleSBpcyB0aGUgYWN0dWFsIE1hcmtkb3duLUl0IHBsdWdpbiAtIGNoZWNrXG5cdCAqICAgdGhlIFtvZmZpY2lhbCBkb2NdKGh0dHBzOi8vZ2l0aHViLmNvbS9tYXJrZG93bi1pdC9tYXJrZG93bi1pdCkgZm9yIG1vcmVcblx0ICogICBpbmZvcm1hdGlvbi4gVGhlIGBvcHRpb25zYCBwYXJhbWV0ZXIgaXMgb2YgdHlwZVxuXHQgKiAgIFtSdWxlT3B0aW9uc10oaHR0cHM6Ly9naXRodWIuY29tL2xhdXJlbnQyMi9qb3BsaW4vYmxvYi9kZXYvcGFja2FnZXMvcmVuZGVyZXIvTWRUb0h0bWwudHMpLFxuXHQgKiAgIHdoaWNoIGNvbnRhaW5zIGEgbnVtYmVyIG9mIG9wdGlvbnMsIG1vc3RseSB1c2VmdWwgZm9yIEpvcGxpbidzIGludGVybmFsXG5cdCAqICAgY29kZS5cblx0ICpcblx0ICogLSBVc2luZyB0aGUgKipvcHRpb25hbCoqIGBhc3NldHNgIGtleSB5b3UgbWF5IHNwZWNpZnkgYXNzZXRzIHN1Y2ggYXMgSlNcblx0ICogICBvciBDU1MgdGhhdCBzaG91bGQgYmUgbG9hZGVkIGluIHRoZSByZW5kZXJlZCBIVE1MIGRvY3VtZW50LiBDaGVjayBmb3Jcblx0ICogICBleGFtcGxlIHRoZSBKb3BsaW4gW01lcm1haWRcblx0ICogICBwbHVnaW5dKGh0dHBzOi8vZ2l0aHViLmNvbS9sYXVyZW50MjIvam9wbGluL2Jsb2IvZGV2L3BhY2thZ2VzL3JlbmRlcmVyL01kVG9IdG1sL3J1bGVzL21lcm1haWQudHMpXG5cdCAqICAgdG8gc2VlIGhvdyB0aGUgZGF0YSBzaG91bGQgYmUgc3RydWN0dXJlZC5cblx0ICpcblx0ICogIyMgUG9zdGluZyBtZXNzYWdlcyBmcm9tIHRoZSBjb250ZW50IHNjcmlwdCB0byB5b3VyIHBsdWdpblxuXHQgKlxuXHQgKiBUaGUgYXBwbGljYXRpb24gcHJvdmlkZXMgdGhlIGZvbGxvd2luZyBmdW5jdGlvbiB0byBhbGxvdyBleGVjdXRpbmdcblx0ICogY29tbWFuZHMgZnJvbSB0aGUgcmVuZGVyZWQgSFRNTCBjb2RlOlxuXHQgKlxuXHQgKiBgYGBqYXZhc2NyaXB0XG5cdCAqIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgd2Vidmlld0FwaS5wb3N0TWVzc2FnZShjb250ZW50U2NyaXB0SWQsIG1lc3NhZ2UpO1xuXHQgKiBgYGBcblx0ICpcblx0ICogLSBgY29udGVudFNjcmlwdElkYCBpcyB0aGUgSUQgeW91J3ZlIGRlZmluZWQgd2hlbiB5b3UgcmVnaXN0ZXJlZCB0aGVcblx0ICogICBjb250ZW50IHNjcmlwdC4gWW91IGNhbiByZXRyaWV2ZSBpdCBmcm9tIHRoZVxuXHQgKiAgIHtAbGluayBDb250ZW50U2NyaXB0Q29udGV4dCB8IGNvbnRleHR9LlxuXHQgKiAtIGBtZXNzYWdlYCBjYW4gYmUgYW55IGJhc2ljIEphdmFTY3JpcHQgdHlwZSAobnVtYmVyLCBzdHJpbmcsIHBsYWluXG5cdCAqICAgb2JqZWN0KSwgYnV0IGl0IGNhbm5vdCBiZSBhIGZ1bmN0aW9uIG9yIGNsYXNzIGluc3RhbmNlLlxuXHQgKlxuXHQgKiBXaGVuIHlvdSBwb3N0IGEgbWVzc2FnZSwgdGhlIHBsdWdpbiBjYW4gc2VuZCBiYWNrIGEgYHJlc3BvbnNlYCB0aHVzXG5cdCAqIGFsbG93aW5nIHR3by13YXkgY29tbXVuaWNhdGlvbjpcblx0ICpcblx0ICogYGBgamF2YXNjcmlwdFxuXHQgKiBhd2FpdCBqb3BsaW4uY29udGVudFNjcmlwdHMub25NZXNzYWdlKGNvbnRlbnRTY3JpcHRJZCwgKG1lc3NhZ2UpID0+IHtcblx0ICogICAgIC8vIFByb2Nlc3MgbWVzc2FnZVxuXHQgKiAgICAgcmV0dXJuIHJlc3BvbnNlOyAvLyBDYW4gYmUgYW55IG9iamVjdCwgc3RyaW5nIG9yIG51bWJlclxuXHQgKiB9KTtcblx0ICogYGBgXG5cdCAqXG5cdCAqIFNlZSB7QGxpbmsgSm9wbGluQ29udGVudFNjcmlwdHMub25NZXNzYWdlfSBmb3IgbW9yZSBkZXRhaWxzLCBhcyB3ZWxsIGFzXG5cdCAqIHRoZSBbcG9zdE1lc3NhZ2Vcblx0ICogZGVtb10oaHR0cHM6Ly9naXRodWIuY29tL2xhdXJlbnQyMi9qb3BsaW4vdHJlZS9kZXYvcGFja2FnZXMvYXBwLWNsaS90ZXN0cy9zdXBwb3J0L3BsdWdpbnMvcG9zdF9tZXNzYWdlcykuXG5cdCAqXG5cdCAqICMjIFJlZ2lzdGVyaW5nIGFuIGV4aXN0aW5nIE1hcmtkb3duLWl0IHBsdWdpblxuXHQgKlxuXHQgKiBUbyBpbmNsdWRlIGEgcmVndWxhciBNYXJrZG93bi1JdCBwbHVnaW4sIHRoYXQgZG9lc24ndCBtYWtlIHVzZSBvZiBhbnlcblx0ICogSm9wbGluLXNwZWNpZmljIGZlYXR1cmVzLCB5b3Ugd291bGQgc2ltcGx5IGNyZWF0ZSBhIGZpbGUgc3VjaCBhcyB0aGlzOlxuXHQgKlxuXHQgKiBgYGBqYXZhc2NyaXB0XG5cdCAqIG1vZHVsZS5leHBvcnRzID0ge1xuXHQgKiAgICAgZGVmYXVsdDogZnVuY3Rpb24oY29udGV4dCkge1xuXHQgKiAgICAgICAgIHJldHVybiB7XG5cdCAqICAgICAgICAgICAgIHBsdWdpbjogcmVxdWlyZSgnbWFya2Rvd24taXQtdG9jLWRvbmUtcmlnaHQnKTtcblx0ICogICAgICAgICB9XG5cdCAqICAgICB9XG5cdCAqIH1cblx0ICogYGBgXG5cdCAqL1xuXHRNYXJrZG93bkl0UGx1Z2luID0gJ21hcmtkb3duSXRQbHVnaW4nLFxuXG5cdC8qKlxuXHQgKiBSZWdpc3RlcnMgYSBuZXcgQ29kZU1pcnJvciBwbHVnaW4sIHdoaWNoIHNob3VsZCBmb2xsb3cgdGhlIHRlbXBsYXRlXG5cdCAqIGJlbG93LlxuXHQgKlxuXHQgKiBgYGBqYXZhc2NyaXB0XG5cdCAqIG1vZHVsZS5leHBvcnRzID0ge1xuXHQgKiAgICAgZGVmYXVsdDogZnVuY3Rpb24oY29udGV4dCkge1xuXHQgKiAgICAgICAgIHJldHVybiB7XG5cdCAqICAgICAgICAgICAgIHBsdWdpbjogZnVuY3Rpb24oQ29kZU1pcnJvcikge1xuXHQgKiAgICAgICAgICAgICAgICAgLy8gLi4uXG5cdCAqICAgICAgICAgICAgIH0sXG5cdCAqICAgICAgICAgICAgIGNvZGVNaXJyb3JSZXNvdXJjZXM6IFtdLFxuXHQgKiAgICAgICAgICAgICBjb2RlTWlycm9yT3B0aW9uczoge1xuXHQgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAuLi5cblx0ICogICAgICAgICAgICAgICAgICAgICAgIH0sXG5cdCAqICAgICAgICAgICAgIGFzc2V0czoge1xuXHQgKiAgICAgICAgICAgICAgICAgLy8gLi4uXG5cdCAqICAgICAgICAgICAgIH0sXG5cdCAqICAgICAgICAgfVxuXHQgKiAgICAgfVxuXHQgKiB9XG5cdCAqIGBgYFxuXHQgKlxuXHQgKiAtIFRoZSBgY29udGV4dGAgYXJndW1lbnQgaXMgY3VycmVudGx5IHVudXNlZCBidXQgY291bGQgYmUgdXNlZCBsYXRlciBvblxuXHQgKiAgIHRvIHByb3ZpZGUgYWNjZXNzIHRvIHlvdXIgb3duIHBsdWdpbiBzbyB0aGF0IHRoZSBjb250ZW50IHNjcmlwdCBhbmRcblx0ICogICBwbHVnaW4gY2FuIGNvbW11bmljYXRlLlxuXHQgKlxuXHQgKiAtIFRoZSBgcGx1Z2luYCBrZXkgaXMgeW91ciBDb2RlTWlycm9yIHBsdWdpbi4gVGhpcyBpcyB3aGVyZSB5b3UgY2FuXG5cdCAqICAgcmVnaXN0ZXIgbmV3IGNvbW1hbmRzIHdpdGggQ29kZU1pcnJvciBvciBpbnRlcmFjdCB3aXRoIHRoZSBDb2RlTWlycm9yXG5cdCAqICAgaW5zdGFuY2UgYXMgbmVlZGVkLlxuXHQgKlxuXHQgKiAtIFRoZSBgY29kZU1pcnJvclJlc291cmNlc2Aga2V5IGlzIGFuIGFycmF5IG9mIENvZGVNaXJyb3IgcmVzb3VyY2VzIHRoYXRcblx0ICogICB3aWxsIGJlIGxvYWRlZCBhbmQgYXR0YWNoZWQgdG8gdGhlIENvZGVNaXJyb3IgbW9kdWxlLiBUaGVzZSBhcmUgbWFkZSB1cFxuXHQgKiAgIG9mIGFkZG9ucywga2V5bWFwcywgYW5kIG1vZGVzLiBGb3IgZXhhbXBsZSwgZm9yIGEgcGx1Z2luIHRoYXQgd2FudCdzIHRvXG5cdCAqICAgZW5hYmxlIGNsb2p1cmUgaGlnaGxpZ2h0aW5nIGluIGNvZGUgYmxvY2tzLiBgY29kZU1pcnJvclJlc291cmNlc2Agd291bGRcblx0ICogICBiZSBzZXQgdG8gYFsnbW9kZS9jbG9qdXJlL2Nsb2p1cmUnXWAuXG5cdCAqXG5cdCAqIC0gVGhlIGBjb2RlTWlycm9yT3B0aW9uc2Aga2V5IGNvbnRhaW5zIGFsbCB0aGVcblx0ICogICBbQ29kZU1pcnJvcl0oaHR0cHM6Ly9jb2RlbWlycm9yLm5ldC9kb2MvbWFudWFsLmh0bWwjY29uZmlnKSBvcHRpb25zXG5cdCAqICAgdGhhdCB3aWxsIGJlIHNldCBvciBjaGFuZ2VkIGJ5IHRoaXMgcGx1Z2luLiBOZXcgb3B0aW9ucyBjYW4gYWxzZSBiZVxuXHQgKiAgIGRlY2xhcmVkIHZpYVxuXHQgKiAgIFtgQ29kZU1pcnJvci5kZWZpbmVPcHRpb25gXShodHRwczovL2NvZGVtaXJyb3IubmV0L2RvYy9tYW51YWwuaHRtbCNkZWZpbmVPcHRpb24pLFxuXHQgKiAgIGFuZCB0aGVuIGhhdmUgdGhlaXIgdmFsdWUgc2V0IGhlcmUuIEZvciBleGFtcGxlLCBhIHBsdWdpbiB0aGF0IGVuYWJsZXNcblx0ICogICBsaW5lIG51bWJlcnMgd291bGQgc2V0IGBjb2RlTWlycm9yT3B0aW9uc2AgdG8gYHsnbGluZU51bWJlcnMnOiB0cnVlfWAuXG5cdCAqXG5cdCAqIC0gVXNpbmcgdGhlICoqb3B0aW9uYWwqKiBgYXNzZXRzYCBrZXkgeW91IG1heSBzcGVjaWZ5ICoqb25seSoqIENTUyBhc3NldHNcblx0ICogICB0aGF0IHNob3VsZCBiZSBsb2FkZWQgaW4gdGhlIHJlbmRlcmVkIEhUTUwgZG9jdW1lbnQuIENoZWNrIGZvciBleGFtcGxlXG5cdCAqICAgdGhlIEpvcGxpbiBbTWVybWFpZFxuXHQgKiAgIHBsdWdpbl0oaHR0cHM6Ly9naXRodWIuY29tL2xhdXJlbnQyMi9qb3BsaW4vYmxvYi9kZXYvcGFja2FnZXMvcmVuZGVyZXIvTWRUb0h0bWwvcnVsZXMvbWVybWFpZC50cylcblx0ICogICB0byBzZWUgaG93IHRoZSBkYXRhIHNob3VsZCBiZSBzdHJ1Y3R1cmVkLlxuXHQgKlxuXHQgKiBPbmUgb2YgdGhlIGBwbHVnaW5gLCBgY29kZU1pcnJvclJlc291cmNlc2AsIG9yIGBjb2RlTWlycm9yT3B0aW9uc2Aga2V5c1xuXHQgKiBtdXN0IGJlIHByb3ZpZGVkIGZvciB0aGUgcGx1Z2luIHRvIGJlIHZhbGlkLiBIYXZpbmcgbXVsdGlwbGUgb3IgYWxsXG5cdCAqIHByb3ZpZGVkIGlzIGFsc28gb2theS5cblx0ICpcblx0ICogU2VlIGFsc28gdGhlIFtkZW1vXG5cdCAqIHBsdWdpbl0oaHR0cHM6Ly9naXRodWIuY29tL2xhdXJlbnQyMi9qb3BsaW4vdHJlZS9kZXYvcGFja2FnZXMvYXBwLWNsaS90ZXN0cy9zdXBwb3J0L3BsdWdpbnMvY29kZW1pcnJvcl9jb250ZW50X3NjcmlwdClcblx0ICogZm9yIGFuIGV4YW1wbGUgb2YgYWxsIHRoZXNlIGtleXMgYmVpbmcgdXNlZCBpbiBvbmUgcGx1Z2luLlxuXHQgKlxuXHQgKiAjIyBQb3N0aW5nIG1lc3NhZ2VzIGZyb20gdGhlIGNvbnRlbnQgc2NyaXB0IHRvIHlvdXIgcGx1Z2luXG5cdCAqXG5cdCAqIEluIG9yZGVyIHRvIHBvc3QgbWVzc2FnZXMgdG8gdGhlIHBsdWdpbiwgeW91IGNhbiB1c2UgdGhlIHBvc3RNZXNzYWdlXG5cdCAqIGZ1bmN0aW9uIHBhc3NlZCB0byB0aGUge0BsaW5rIENvbnRlbnRTY3JpcHRDb250ZXh0IHwgY29udGV4dH0uXG5cdCAqXG5cdCAqIGBgYGphdmFzY3JpcHRcblx0ICogY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBjb250ZXh0LnBvc3RNZXNzYWdlKCdtZXNzYWdlRnJvbUNvZGVNaXJyb3JDb250ZW50U2NyaXB0Jyk7XG5cdCAqIGBgYFxuXHQgKlxuXHQgKiBXaGVuIHlvdSBwb3N0IGEgbWVzc2FnZSwgdGhlIHBsdWdpbiBjYW4gc2VuZCBiYWNrIGEgYHJlc3BvbnNlYCB0aHVzXG5cdCAqIGFsbG93aW5nIHR3by13YXkgY29tbXVuaWNhdGlvbjpcblx0ICpcblx0ICogYGBgamF2YXNjcmlwdFxuXHQgKiBhd2FpdCBqb3BsaW4uY29udGVudFNjcmlwdHMub25NZXNzYWdlKGNvbnRlbnRTY3JpcHRJZCwgKG1lc3NhZ2UpID0+IHtcblx0ICogICAgIC8vIFByb2Nlc3MgbWVzc2FnZVxuXHQgKiAgICAgcmV0dXJuIHJlc3BvbnNlOyAvLyBDYW4gYmUgYW55IG9iamVjdCwgc3RyaW5nIG9yIG51bWJlclxuXHQgKiB9KTtcblx0ICogYGBgXG5cdCAqXG5cdCAqIFNlZSB7QGxpbmsgSm9wbGluQ29udGVudFNjcmlwdHMub25NZXNzYWdlfSBmb3IgbW9yZSBkZXRhaWxzLCBhcyB3ZWxsIGFzXG5cdCAqIHRoZSBbcG9zdE1lc3NhZ2Vcblx0ICogZGVtb10oaHR0cHM6Ly9naXRodWIuY29tL2xhdXJlbnQyMi9qb3BsaW4vdHJlZS9kZXYvcGFja2FnZXMvYXBwLWNsaS90ZXN0cy9zdXBwb3J0L3BsdWdpbnMvcG9zdF9tZXNzYWdlcykuXG5cdCAqXG5cdCAqL1xuXHRDb2RlTWlycm9yUGx1Z2luID0gJ2NvZGVNaXJyb3JQbHVnaW4nLFxufVxuIiwiaW1wb3J0IGpvcGxpbiBmcm9tICdhcGknO1xuXG5pbXBvcnQgeyBcbiAgICBXZWJWaWV3TWVzc2FnZSxcbiAgICBDaGFubmVsRXZlbnQsXG4gICAgQ2hhbm5lbFR5cGUsXG4gICAgQ2hhbm5lbEhhbmRsZXIsXG5cbiAgICBDaGFubmVsUmVxdWVzdCxcbiAgICBDaGFubmVsUmVzcG9uc2Vcbn0gZnJvbSBcIi4vbWVzc2FnZVwiO1xuXG5pbXBvcnQgeyB0aW1lb3V0IH0gZnJvbSBcIi4vdXRpbHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGhvc3RDaGFubmVsKHBhbmVsSWQ6IHN0cmluZywgaGFuZGxlcnM6IE1hcDxzdHJpbmcsIENoYW5uZWxIYW5kbGVyPik6IENoYW5uZWxUeXBlIHtcbiAgICBsZXQgbG9jYWwgPSB7XG4gICAgICAgIHN0dWJzOiB7IH1cbiAgICB9O1xuXG4gICAgam9wbGluLnZpZXdzLnBhbmVscy5vbk1lc3NhZ2UocGFuZWxJZCwgYXN5bmMgKG1lc3NhZ2U6IFdlYlZpZXdNZXNzYWdlKTogUHJvbWlzZTxhbnk+ID0+ICB7XG4gICAgICAgIGlmIChtZXNzYWdlLmV2ZW50ID09IENoYW5uZWxFdmVudC5yZXNwb25zZUV2ZW50KSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZTogQ2hhbm5lbFJlc3BvbnNlID0gbWVzc2FnZS52YWx1ZTtcblxuICAgICAgICAgICAgY29uc3Qgc3R1YiA9IGxvY2FsLnN0dWJzW3Jlc3BvbnNlLnJlcXVlc3RJZF07XG4gICAgICAgICAgICBpZiAoc3R1YiA9PSBudWxsKVxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmlzRXhjZXB0aW9uP1xuICAgICAgICAgICAgICAgIHN0dWIucmVqZWN0KHJlc3BvbnNlLnZhbHVlKTpcbiAgICAgICAgICAgICAgICBzdHViLnJlc29sdmUocmVzcG9uc2UudmFsdWUpO1xuICAgICAgICB9IGVsc2VcbiAgICAgICAgaWYgKG1lc3NhZ2UuZXZlbnQgPT0gQ2hhbm5lbEV2ZW50LnJlcXVlc3RFdmVudCkge1xuICAgICAgICAgICAgY29uc3QgcmVxdWVzdDogQ2hhbm5lbFJlcXVlc3QgPSBtZXNzYWdlLnZhbHVlO1xuXG4gICAgICAgICAgICBjb25zdCBoYW5kbGVyID0gaGFuZGxlcnMuZ2V0KHJlcXVlc3QubmFtZSk7XG4gICAgICAgICAgICBpZiAoaGFuZGxlciA9PSBudWxsKVxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJubyB0aGF0IGhhbmRsZXJcIikpO1xuXG4gICAgICAgICAgICByZXR1cm4gaGFuZGxlci5hcHBseShudWxsLCByZXF1ZXN0LmFyZ3MpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0cnVlKTtcbiAgICB9KTtcblxuICAgIHJldHVybiAobmFtZTogc3RyaW5nLCAuLi5hcmdzOiBhbnkpOiBQcm9taXNlPGFueT4gPT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8YW55Pihhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0SWQgPSBgJHtuYW1lfS0ke0RhdGUubm93KCl9YDtcblxuICAgICAgICAgICAgbG9jYWwuc3R1YnNbcmVxdWVzdElkXSA9IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlLCByZWplY3RcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGpvcGxpbi52aWV3cy5wYW5lbHMucG9zdE1lc3NhZ2UocGFuZWxJZCwge1xuICAgICAgICAgICAgICAgIGV2ZW50OiBDaGFubmVsRXZlbnQucmVxdWVzdEV2ZW50LFxuICAgICAgICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3RJZCxcbiAgICAgICAgICAgICAgICAgICAgbmFtZSwgYXJnc1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xufVxuXG5leHBvcnQgdHlwZSB7XG4gICAgQ2hhbm5lbFR5cGUsXG4gICAgQ2hhbm5lbEhhbmRsZXJcbn0iLCJleHBvcnQgaW50ZXJmYWNlIFdlYlZpZXdNZXNzYWdlIHtcbiAgICBldmVudDogc3RyaW5nO1xuICAgIHZhbHVlPzogYW55O1xufVxuXG5leHBvcnQgdHlwZSBDaGFubmVsSGFuZGxlciA9ICguLi5hcmdzOiBhbnkpID0+IFByb21pc2U8YW55PjtcblxuZXhwb3J0IHR5cGUgQ2hhbm5lbFR5cGUgPVxuICAgIChuYW1lOiBzdHJpbmcsIC4uLmFyZ3M6IGFueSkgPT4gUHJvbWlzZTxhbnk+O1xuXG5leHBvcnQgdHlwZSBDaGFubmVsUmVxdWVzdCA9IHtcbiAgICByZXF1ZXN0SWQ6IHN0cmluZyxcbiAgICBuYW1lOiBzdHJpbmcsXG4gICAgYXJnczogYW55W11cbn07XG5cbmV4cG9ydCB0eXBlIENoYW5uZWxSZXNwb25zZSA9IHtcbiAgICByZXF1ZXN0SWQ6IHN0cmluZyxcbiAgICBpc0V4Y2VwdGlvbjogYm9vbGVhbixcbiAgICB2YWx1ZTogYW55XG59O1xuXG5leHBvcnQgdHlwZSBOb3RlVGFyZ2V0ID0ge1xuICAgIG5vdGVib29rSWQ6IHN0cmluZyxcbiAgICBub3RlYm9va05hbWU6IHN0cmluZyxcblxuICAgIG5vdGVJZDogc3RyaW5nLFxuICAgIG5vdGVOYW1lOiBzdHJpbmdcbn07XG5cbmV4cG9ydCB0eXBlIExpbmUgPSB7XG4gICAgbGluZU51bWJlcjogbnVtYmVyLFxuICAgIGxpbmVDb250ZW50OiBzdHJpbmdcbn07XG5cbmV4cG9ydCBlbnVtIENoYW5uZWxFdmVudCB7XG4gICAgcmVxdWVzdEV2ZW50ID0gXCJyZXF1ZXN0XCIsXG4gICAgcmVzcG9uc2VFdmVudCA9IFwicmVzcG9uc2VcIlxufVxuIiwiZXhwb3J0IGNvbnN0IGRlbGF5ID0gZnVuY3Rpb24obmFtZXNwYWNlOiBhbnksIG5hbWU6IHN0cmluZywgdGltZW91dDogbnVtYmVyLCBmdW5jOiBhbnkpIHtcbiAgICBpZiAobmFtZXNwYWNlW25hbWVdICE9IG51bGwpXG4gICAgICAgIGNsZWFyVGltZW91dChuYW1lc3BhY2VbbmFtZV0pO1xuICAgIFxuICAgIG5hbWVzcGFjZVtuYW1lXSA9IHNldFRpbWVvdXQoZnVuYywgdGltZW91dCk7XG4gIH07XG5cbmV4cG9ydCBjb25zdCB0aW1lb3V0ID0gZnVuY3Rpb24odGltZXI6IG51bWJlcikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZTogRnVuY3Rpb24pID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiByZXNvbHZlKCksIHRpbWVyKTtcbiAgICB9KTtcbn1cbiIsImltcG9ydCBqb3BsaW4gZnJvbSAnYXBpJztcbmltcG9ydCB7IFRvb2xiYXJCdXR0b25Mb2NhdGlvbiB9IGZyb20gJ2FwaS90eXBlcyc7XG5pbXBvcnQgeyBTZXR0aW5nSXRlbVR5cGUgfSBmcm9tICdhcGkvdHlwZXMnO1xuXG5pbXBvcnQgSm9wbGluRGF0YUFwaSBmcm9tIFwiLi9qb3BsaW4vam9wbGluLWRhdGEtYXBpXCI7XG5cbmltcG9ydCB7XG5cdGhvc3RDaGFubmVsXG59IGZyb20gXCIuL2NvbW1vbi9ob3N0Q2hhbm5lbFwiO1xuXG5pbXBvcnQge1xuXHRDaGFubmVsSGFuZGxlcixcblx0Q2hhbm5lbFR5cGUsXG5cdExpbmUsXG5cdE5vdGVUYXJnZXRcbn0gZnJvbSBcIi4vY29tbW9uL21lc3NhZ2VcIjtcblxuaW1wb3J0IHsgdGltZW91dCB9IGZyb20gJy4vY29tbW9uL3V0aWxzJztcblxuaW1wb3J0IGh0bWwgZnJvbSBcIi4vd2Vidmlldy9odG1sLmpzXCI7XG5cbmNvbnN0IFNFVFRJTkdfVE9QX0xJTkVTID0gJ25vYWguc2VhcmNoLnRvcF9saW5lcyc7XG5jb25zdCBTRVRUSU5HX0JPVFRPTV9MSU5FUyA9ICdub2FoLnNlYXJjaC5ib3R0b21fbGluZXMnO1xuXG5sZXQgcGFuZWxJZDogc3RyaW5nID0gbnVsbDtcbmxldCBhY3RpdmU6IGJvb2xlYW4gPSBmYWxzZTtcbmxldCBjaGFubmVsOiBDaGFubmVsVHlwZSA9IG51bGw7XG5cbmFzeW5jIGZ1bmN0aW9uIGluaXRTZXR0aW5ncygpIHtcblx0Y29uc3QgU0VDVElPTiA9ICdTZWFyY2gnO1xuXG5cdGF3YWl0IGpvcGxpbi5zZXR0aW5ncy5yZWdpc3RlclNlY3Rpb24oU0VDVElPTiwge1xuXHRcdGRlc2NyaXB0aW9uOiAnU2VhcmNoIFBsdWdpbiBTZXR0aW5ncycsXG5cdFx0bGFiZWw6ICdTZWFyY2gnLFxuXHRcdGljb25OYW1lOiAnZmFzIGZhLXNlYXJjaCdcblx0fSk7XG5cblx0YXdhaXQgam9wbGluLnNldHRpbmdzLnJlZ2lzdGVyU2V0dGluZ3Moe1xuXHRcdFtTRVRUSU5HX1RPUF9MSU5FU106IHsgXG5cdFx0XHRwdWJsaWM6IHRydWUsXG5cdFx0XHRzZWN0aW9uOiBTRUNUSU9OLFxuXHRcdFx0dHlwZTogU2V0dGluZ0l0ZW1UeXBlLkludCxcblx0XHRcdHZhbHVlOiAzLFxuXHRcdFx0bGFiZWw6IFwiVGhlIGxpbmVzJ3MgY291bnQgc2hvd24gYWJvdmUgdGhhdCBzZWFyY2ggcmVzdWx0LlwiLFxuXHRcdH0sXG5cdFx0W1NFVFRJTkdfQk9UVE9NX0xJTkVTXToge1xuXHRcdFx0cHVibGljOiB0cnVlLFxuXHRcdFx0c2VjdGlvbjogU0VDVElPTixcblx0XHRcdHR5cGU6IFNldHRpbmdJdGVtVHlwZS5JbnQsXG5cdFx0XHR2YWx1ZTogMyxcblx0XHRcdGxhYmVsOiBcIlRoZSBsaW5lcydzIGNvdW50IHNob3duIGFmdGVyIHRoYXQgc2VhcmNoIHJlc3VsdC5cIixcblx0XHR9XG5cdH0pO1xufVxuXG5hc3luYyBmdW5jdGlvbiBpbml0UGFuZWwoKSB7XG5cdHBhbmVsSWQgPSBhd2FpdCBqb3BsaW4udmlld3MucGFuZWxzLmNyZWF0ZShcImdyYXBoXCIpO1xuXG5cdGF3YWl0IGpvcGxpbi52aWV3cy5wYW5lbHMuc2V0SHRtbChcblx0XHRwYW5lbElkLCBodG1sXG5cdCk7XG5cblx0am9wbGluLnZpZXdzLnBhbmVscy5hZGRTY3JpcHQocGFuZWxJZCwgXCIuL3dlYnZpZXcvanF1ZXJ5Lm1pbi5qc1wiKTtcblx0am9wbGluLnZpZXdzLnBhbmVscy5hZGRTY3JpcHQocGFuZWxJZCwgXCIuL3dlYnZpZXcvd2Vidmlldy5jc3NcIik7XG5cdGpvcGxpbi52aWV3cy5wYW5lbHMuYWRkU2NyaXB0KHBhbmVsSWQsIFwiLi93ZWJ2aWV3L3dlYnZpZXcuanNcIik7XG5cblxuXHQvKnRyeVxuXHR7XHRcdFxuXHRcdGNvbnN0IGJhc2VEaXIgPSBhd2FpdCBqb3BsaW4ucGx1Z2lucy5pbnN0YWxsYXRpb25EaXIoKTtcblx0XHQvL2NvbnNvbGUubG9nKGF3YWl0IGpvcGxpbi5wbHVnaW5zLmluc3RhbGxhdGlvbkRpcigpKTtcblxuXHRcdGNvbnN0IHdvcmtlciA9IG5ldyBXb3JrZXIoYCR7YmFzZURpcn0vd2Vidmlldy93b3JrLmpzYCk7XG5cblxuXHR9IGNhdGNoKGVycilcblx0e1xuXHRcdGFsZXJ0KGVycik7XG5cdH0qL1xufVxuXG5hc3luYyBmdW5jdGlvbiBzaG93UGFuZWwoc2hvdzogYm9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWQpIHtcblx0aWYgKHNob3cgPT09IG51bGwgfHwgc2hvdyA9PT0gdW5kZWZpbmVkKVxuXHR7XG5cdFx0c2hvdyA9IGFjdGl2ZTtcblx0fSBlbHNlXG5cdGFjdGl2ZSA9IHNob3c7XG5cblx0YXdhaXQgam9wbGluLnZpZXdzLnBhbmVscy5zaG93KHBhbmVsSWQsIGFjdGl2ZSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGluaXRDb21tYW5kcygpIHtcblx0am9wbGluLmNvbW1hbmRzLnJlZ2lzdGVyKHtcblx0XHRuYW1lOiBcInRvZ2dsZVNlYXJjaFwiLFxuXHRcdGxhYmVsOiBcInRvZ2dsZSBzZWFyY2ggdmlld1wiLFxuXHRcdGljb25OYW1lOiBcImZhcyBmYS1zZWFyY2hcIixcblx0XHRleGVjdXRlOiBhc3luYyAoKSA9PiB7XG5cdFx0XHRzaG93UGFuZWwoIWFjdGl2ZSk7XG5cdFx0fSxcblx0fSk7XG5cblx0am9wbGluLnZpZXdzLnRvb2xiYXJCdXR0b25zLmNyZWF0ZShcblx0XHRcInRvZ2dsZVNlYXJjaFwiLFxuXHRcdFwidG9nZ2xlU2VhcmNoXCIsXG5cdFx0VG9vbGJhckJ1dHRvbkxvY2F0aW9uLk5vdGVUb29sYmFyXG5cdCk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGluaXRIYW5kbGVycygpIHtcblx0Y29uc3QgZGF0YUFwaSA9IEpvcGxpbkRhdGFBcGkuaW5zdGFuY2UoKTtcblxuXHRjb25zdCBtYXBzID0gbmV3IE1hcDxzdHJpbmcsIENoYW5uZWxIYW5kbGVyPigpO1xuXG5cdGNoYW5uZWwgPSBob3N0Q2hhbm5lbChwYW5lbElkLCBtYXBzKTtcblxuXHRtYXBzLnNldChcIm9wZW5cIiwgYXN5bmMgKG5vdGVJZDogc3RyaW5nKSA9PiB7XG5cdFx0am9wbGluLmNvbW1hbmRzLmV4ZWN1dGUoXCJvcGVuTm90ZVwiLCBub3RlSWQpO1xuXHR9KTtcblxuXHRtYXBzLnNldChcInNlYXJjaFwiLCBhc3luYyAoc2VhcmNoSWQsIGtleXdvcmQsIGlzUmVnZXgpID0+IHtcblx0XHQvKiovXG5cblx0XHRjb25zdCBiYXNlRGlyID0gYXdhaXQgam9wbGluLnBsdWdpbnMuaW5zdGFsbGF0aW9uRGlyKCk7XG5cdFx0Y29uc3Qgd29ya2VySnMgPSBgJHtiYXNlRGlyfS93ZWJ2aWV3L3dvcmtlci5qc2A7XG5cblx0XHRjb25zdCB3b3JrZXJNYXAgPSBuZXcgTWFwPHN0cmluZywgV29ya2VyPigpO1xuXG5cdFx0Y29uc3QgdG9wTGluZU51bSA9IE51bWJlcihhd2FpdCBqb3BsaW4uc2V0dGluZ3MudmFsdWUoU0VUVElOR19UT1BfTElORVMpKTtcblx0XHRjb25zdCBib3R0b21MaW5lTnVtID0gTnVtYmVyKGF3YWl0IGpvcGxpbi5zZXR0aW5ncy52YWx1ZShTRVRUSU5HX0JPVFRPTV9MSU5FUykpO1xuXG5cdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgZGF0YUFwaS5nZXROb3Rlcyh7XG5cdFx0XHRmaWVsZHM6IFsgJ2lkJywgJ3BhcmVudF9pZCcsICd0aXRsZScsICdib2R5JyBdXG5cdFx0fSk7XG5cblx0XHRmb3IobGV0IGluZGV4ID0gMDsgaW5kZXggIT0gcmVzdWx0LnJlc3VsdHMubGVuZ3RoOyArK2luZGV4KVxuXHRcdHtcblx0XHRcdGF3YWl0IHRpbWVvdXQoMCk7XG5cblx0XHRcdChhc3luYyBmdW5jdGlvbigpIHtcblx0XHRcdFx0Y29uc3Qgbm90ZSA9IHJlc3VsdC5yZXN1bHRzW2luZGV4XTtcblx0XHRcdFx0bGV0IG5vdGVib29rID0gbnVsbDtcblxuXHRcdFx0XHRpZiAobm90ZS5wYXJlbnRfaWQgIT0gbnVsbClcblx0XHRcdFx0e1xuXHRcdFx0XHRcdG5vdGVib29rID0gYXdhaXQgZGF0YUFwaS5nZXROb3RlQm9vayh7XG5cdFx0XHRcdFx0XHRmaWVsZHM6IFsgJ2lkJywgJ3BhcmVudF9pZCcsICd0aXRsZScgXVxuXHRcdFx0XHRcdH0sIG5vdGUucGFyZW50X2lkKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGxldCB0YXJnZXQ6IE5vdGVUYXJnZXQgPSB7XG5cdFx0XHRcdFx0bm90ZWJvb2tJZDogbm90ZS5wYXJlbnRfaWQsXG5cdFx0XHRcdFx0bm90ZWJvb2tOYW1lOiBub3RlYm9vaz8udGl0bGUsXG5cblx0XHRcdFx0XHRub3RlSWQ6IG5vdGUuaWQsXG5cdFx0XHRcdFx0bm90ZU5hbWU6IG5vdGUudGl0bGVcblx0XHRcdFx0fTtcblxuXHRcdFx0XHRjaGFubmVsKFwic3RhdHVzXCIsIHRhcmdldCwgaW5kZXgsIHJlc3VsdC5yZXN1bHRzLmxlbmd0aCk7XG5cblx0XHRcdFx0Y29uc3QgbGluZUR1bXBzOiBMaW5lW10gPSBbXTtcblxuXHRcdFx0XHRjb25zdCBkdW1wUmVzdWx0ID0gKGxpbmU6IExpbmUpID0+IHtcblx0XHRcdFx0XHRsaW5lRHVtcHMucHVzaChsaW5lKTtcblxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGxpbmUubGluZU51bWJlcik7XG5cdFx0XHRcdH07XG5cblx0XHRcdFx0Y29uc3QgZmx1c2hEdW1wID0gKCkgPT4ge1xuXHRcdFx0XHRcdGlmIChsaW5lRHVtcHMubGVuZ3RoICE9IDApXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0Y2hhbm5lbChcInJlc3VsdFwiLCBzZWFyY2hJZCwgdGFyZ2V0LCBsaW5lRHVtcHMpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGNvbnN0IHdvcmtlciA9IHdvcmtlck1hcC5nZXQodGFyZ2V0Lm5vdGVJZCk7XG5cdFx0XHRcdFx0d29ya2VyLnRlcm1pbmF0ZSgpO1xuXG5cdFx0XHRcdFx0d29ya2VyTWFwLmRlbGV0ZSh0YXJnZXQubm90ZUlkKTtcblx0XHRcdFx0XHRpZiAod29ya2VyTWFwLnNpemUgPT0gMClcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRjaGFubmVsKFwiZmluaXNoXCIsIHRydWUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fTtcblxuXHRcdFx0XHRjb25zdCB3b3JrZXIgPSBuZXcgV29ya2VyKHdvcmtlckpzKTtcblxuXHRcdFx0XHR3b3JrZXIub25tZXNzYWdlID0gKGV2ZW50OiBhbnkpID0+IHtcblx0XHRcdFx0XHRjb25zdCBtZXNzYWdlID0gZXZlbnQuZGF0YTtcblxuXHRcdFx0XHRcdGlmIChtZXNzYWdlLmV2ZW50ID09IFwicmVzdWx0XCIpIHtcblx0XHRcdFx0XHRcdGR1bXBSZXN1bHQobWVzc2FnZS5saW5lKTtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9IGVsc2Vcblx0XHRcdFx0XHRpZiAobWVzc2FnZS5ldmVudCA9PSBcImZpbmlzaFwiKSB7XG5cdFx0XHRcdFx0XHRmbHVzaER1bXAoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH07XG5cblx0XHRcdFx0d29ya2VyLnBvc3RNZXNzYWdlKHtcblx0XHRcdFx0XHRldmVudDogXCJzdGFydFwiLFxuXHRcdFx0XHRcdGtleXdvcmQsXG5cdFx0XHRcdFx0aXNSZWdleCxcblx0XHRcdFx0XHRib2R5OiBub3RlLmJvZHksXG5cdFx0XHRcdFx0dG9wTGluZU51bSxcblx0XHRcdFx0XHRib3R0b21MaW5lTnVtXG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdHdvcmtlck1hcC5zZXQodGFyZ2V0Lm5vdGVJZCwgd29ya2VyKTtcblx0XHRcdH0pKCk7XG5cdFx0fVxuXHR9KTtcbn1cblxuam9wbGluLnBsdWdpbnMucmVnaXN0ZXIoe1xuXHRvblN0YXJ0OiBhc3luYyBmdW5jdGlvbigpIHtcblx0XHRhd2FpdCBpbml0U2V0dGluZ3MoKTtcblxuXHRcdGF3YWl0IGluaXRDb21tYW5kcygpO1xuXHRcdGF3YWl0IGluaXRQYW5lbCgpO1xuXHRcdGF3YWl0IGluaXRIYW5kbGVycygpO1xuXG5cdFx0c2hvd1BhbmVsKGFjdGl2ZSk7XG5cdH0sXG59KTtcbiIsImltcG9ydCBqb3BsaW4gZnJvbSAnYXBpJztcbmltcG9ydCBOb3RlLCB7IHBhcnNlSm9wbGluTm90ZSwgTm90ZUJvb2sgfSBmcm9tIFwiLi9ub3RlXCI7XG5pbXBvcnQgeyBJRCB9IGZyb20gXCIuL25vdGUtbGlua1wiO1xuXG5leHBvcnQgY2xhc3MgVGFnIHtcbiAgICBpZDogSUQ7XG4gICAgbGFiZWw6IHN0cmluZztcbiAgICBub2RlSWRzPzogSURbXTtcblxuICAgIGNvbnN0cnVjdG9yKGlkIDogSUQsIGxhYmVsOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLmxhYmVsID0gbGFiZWw7XG4gICAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFF1ZXJ5UGFyYW1zIHtcbiAgICBmaWVsZHM/OiBBcnJheTxzdHJpbmc+LFxuICAgIG9yZGVyX2Rpcj86IHN0cmluZ1xuICAgIGxpbWl0Pzogc3RyaW5nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTm90ZVF1ZXJ5UmVzdWx0cyB7XG4gICAgcmVzdWx0czogQXJyYXk8Tm90ZT4sXG4gICAgaWRzTm90Rm91bmQ/OiBBcnJheTxzdHJpbmc+LFxuICAgIHRydW5jYXRlZD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSm9wbGluRGF0YUFwaSB7XG5cbiAgICBwcml2YXRlIHN0YXRpYyBhcGlfIDogSm9wbGluRGF0YUFwaTtcblxuICAgIHN0YXRpYyBpbnN0YW5jZSgpIDogSm9wbGluRGF0YUFwaSB7XG4gICAgICAgIGlmKCF0aGlzLmFwaV8pIHtcbiAgICAgICAgICAgIHRoaXMuYXBpXyA9IG5ldyBKb3BsaW5EYXRhQXBpKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuYXBpXztcbiAgICB9XG5cbiAgICAvL3F1ZXJ5UGFyYW1zIGZvbGxvd3Mgam9wbGluIHF1ZXJ5IGZvcm1hdCBzbyB3ZSBqdXN0IG5lZWQgdG8gcmV0dXJuIGl0LlxuICAgIHB1YmxpYyBidWlsZFF1ZXJ5UGFyYW1zKHF1ZXJ5UGFyYW1zIDogUXVlcnlQYXJhbXMpIDogYW55IHtcbiAgICAgICAgcmV0dXJuIHF1ZXJ5UGFyYW1zO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRTZWxlY3RlZE5vdGUoKSA6IGFueSB7XG4gICAgICAgIHJldHVybiBqb3BsaW4ud29ya3NwYWNlLnNlbGVjdGVkTm90ZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRTZWxlY3RlZE5vdGVJZHMoKSA6IFByb21pc2U8QXJyYXk8c3RyaW5nPj4ge1xuICAgICAgICByZXR1cm4gam9wbGluLndvcmtzcGFjZS5zZWxlY3RlZE5vdGVJZHMoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgZ2V0VGFncygpIDogUHJvbWlzZTxUYWdbXT4ge1xuICAgICAgICBsZXQgdGFncyA9IFtdO1xuICAgICAgICBsZXQgcGFnZSA6IGFueTtcbiAgICAgICAgbGV0IHF1ZXJ5ID0ge2ZpZWxkczogW1wiaWRcIiwgXCJ0aXRsZVwiXX07XG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIHBhZ2UgPSBhd2FpdCBqb3BsaW4uZGF0YS5nZXQoWyd0YWdzJ10sIHF1ZXJ5KTtcbiAgICAgICAgICAgIHRhZ3MucHVzaCguLi5wYWdlLml0ZW1zLm1hcCggKGl0ZW0gOiBhbnkpID0+IHsgXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtpZDogaXRlbS5pZCwgbGFiZWw6IGl0ZW0udGl0bGUgfSBcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgICB3aGlsZSAocGFnZS5oYXNfbW9yZSlcblxuICAgICAgICByZXR1cm4gdGFncztcbiAgICB9XG5cbiAgICBwdWJsaWMgIGFzeW5jIGdldE5vdGVJZHNGb3JUYWcodGFnOiBhbnkpIDogUHJvbWlzZTxzdHJpbmdbXT4ge1xuICAgICAgICBsZXQgbm90ZUlkcyA9IFtdO1xuICAgICAgICBsZXQgcGFnZSA6IGFueTtcbiAgICAgICAgbGV0IHF1ZXJ5ID0ge2ZpZWxkczogW1wiaWRcIl19O1xuICAgICAgICBkbyB7XG4gICAgICAgICAgICBwYWdlID0gYXdhaXQgam9wbGluLmRhdGEuZ2V0KFsndGFncycsIHRhZy5pZCwgJ25vdGVzJ10sIHF1ZXJ5KTtcbiAgICAgICAgICAgIG5vdGVJZHMucHVzaCguLi5wYWdlLml0ZW1zLm1hcCgoaXRlbSA6IGFueSkgPT4gaXRlbS5pZCkpO1xuICAgICAgICB9XG4gICAgICAgIHdoaWxlIChwYWdlLmhhc19tb3JlKVxuXG4gICAgICAgIHJldHVybiBub3RlSWRzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBub3RlcyBzYXRpc2Z5aW5nIHRoZSBxdWVyeS5cbiAgICAgKiBAcGFyYW0gcXVlcnkgOiBjdXN0b21pemUgd2hhdCBkYXRhIGlzIHJldHJpZXZlZC5cbiAgICAgKiBAcGFyYW0gcGFnZVNpemUgOiBudW1iZXIgb2Ygbm90ZXMgcmV0dXJuZWQgaW4gb25lIHN1YnF1ZXJ5LlxuICAgICAqIEBwYXJhbSBtYXggOiBtYXggbnVtYmVyIG9mIG5vdGVzLlxuICAgICAqIEByZXR1cm5zIGEgdHVwbGUgOiAobm90ZXMgOiBNYXA8c3RyaW5nLCBOb3RlPiwgdHJ1bmNhdGVkIDogYm9vbGVhbilcbiAgICAgKiBub3RlcyA6IGFsbCBub3RlcyBzYXRpc2Z5aW5nIHRoZSBxdWVyeSB1cCB0byBtYXhOb3RlXG4gICAgICogdHJ1bmNhdGVkIDogdHJ1ZSBpZiB3ZSBoYWQgdG8gYXBwbHkgYSBjdXRvZmZcbiAgICAgKi9cbiAgICBwdWJsaWMgYXN5bmMgZ2V0Tm90ZXMocXVlcnk6IGFueSwgbWF4OiBudW1iZXIgPSBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUikgOiBQcm9taXNlPE5vdGVRdWVyeVJlc3VsdHM+IHtcbiAgICAgICAgXG4gICAgICAgIGxldCBqb3BsaW5Ob3RlcyA9IFtdO1xuICAgICAgICBsZXQgcGFnZSA6IGFueTtcbiAgICAgICAgbGV0IHBhZ2VOdW0gPSAxO1xuICAgICAgICBsZXQgaXNMaW1pdFJlYWNoZWQgPSAoKSA9PiBqb3BsaW5Ob3Rlcy5sZW5ndGggPiBtYXg7XG4gICAgICAgIGxldCB0cnVuY2F0ZWQgPSBmYWxzZTtcblxuICAgICAgICBkbyB7XG4gICAgICAgICAgcXVlcnkucGFnZSA9IHBhZ2VOdW07XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcGFnZSA9IGF3YWl0IGpvcGxpbi5kYXRhLmdldChbJ25vdGVzJ10sIHF1ZXJ5KTtcbiAgICAgICAgICB9IGNhdGNoKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiB7IHJlc3VsdHM6IFtdLCB0cnVuY2F0ZWQ6dHJ1ZSB9O1xuICAgICAgICAgIH0gXG5cbiAgICAgICAgICBqb3BsaW5Ob3Rlcy5wdXNoKC4uLnBhZ2UuaXRlbXMpO1xuICAgICAgICAgIHBhZ2VOdW0rKztcblxuICAgICAgICAgIGlmKGlzTGltaXRSZWFjaGVkKCkpIHtcbiAgICAgICAgICAgICAgdHJ1bmNhdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgfVxuXG4gICAgICAgIH0gd2hpbGUgKHBhZ2UuaGFzX21vcmUpXG5cbiAgICAgICAgaWYoaXNMaW1pdFJlYWNoZWQoKSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBNYXggbnVtYmVyIG9mIG5vdGVzIHJlYWNoZWQ6ICR7bWF4fS4gYCArIFxuICAgICAgICAgICAgYFNvbWUgbm90ZXMgbWF5IG5vdCBiZSB2aXNpYmxlLmApO1xuICAgICAgICAgICAgam9wbGluTm90ZXMgPSBqb3BsaW5Ob3Rlcy5zbGljZSgwLG1heCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBub3RlcyA9IGF3YWl0IFByb21pc2UuYWxsKGpvcGxpbk5vdGVzLm1hcCggYXN5bmMgKG5vdGUpID0+IHRoaXMuYnVpbGROb3RlKG5vdGUpKSk7XG5cbiAgICAgICAgcmV0dXJuIHsgcmVzdWx0czogbm90ZXMsIHRydW5jYXRlZDogdHJ1bmNhdGVkIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGFsbCBub3RlcyB3aXRoIGdpdmVuIGlkcy5cbiAgICAgKiBUaGlzIG1ldGhvZCBjYW4gZ2V0IHNsb3cgaWYgd2UgaGF2ZSB0byBwcm9jZXNzIGEgbGFyZ2UgbnVtYmVyIG9mIGlkcyBzaW5jZSB0aGUgYXBpIGF1dGhvcml6ZWQgb25seSBxdWVyeSBieSBpZCBhdCB0aGUgdGltZS5cbiAgICAgKiBUT0RPIGJlc3Qgd291bGQgYmUgdG8gYWRkIG1ldGhvZCB0byBnZXQgYmF0Y2ggb2YgaWRzIHRvIFtKb3BsaW5EYXRhQVBJXShodHRwczovL2pvcGxpbmFwcC5vcmcvYXBpL3JlZmVyZW5jZXMvcmVzdF9hcGkvKS5cbiAgICAgKiBAcGFyYW0gaWRzIGxpc3Qgb2Ygbm90ZSBpZHMuXG4gICAgICogQHBhcmFtIG1heENvbmN1cnJlbnRSZXF1ZXN0cyBtYXggbnVtYmVyIG9mIGNvbmN1cnJlbnQgcmVxdWVzdHMgdG8gdGhlIGpvcGxpbiBBUEkuIENhbiB3ZSB1c2VmdWwgd2UgcmVxdWVzdGluZyBsYXJnZSBudW1iZXIgb2Ygbm90ZXMuXG4gICAgICogQHJldHVybnMgbGlzdCBvZiBub3Rlcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgYXN5bmMgZ2V0Tm90ZXNCeUlkcyhxdWVyeSA6IGFueSwgaWRzOiBzdHJpbmdbXSwgbWF4Q29uY3VycmVudFJlcXVlc3RzOiBudW1iZXIgPSAxMCkgOiBQcm9taXNlPE5vdGVRdWVyeVJlc3VsdHM+IHtcblxuICAgICAgICBjb25zdCBqb3BsaW5Ob3RlcyA9IFtdO1xuICAgICAgICBjb25zdCBpZHNOb3RGb3VuZCA9IFtdO1xuICAgICAgICBcbiAgICAgICAgbGV0IHByb21pc2VzIDogUHJvbWlzZTxhbnk+W107XG4gICAgICAgIGxldCByZXF1ZXN0cyA6IHN0cmluZ1tdO1xuICAgICAgICBsZXQgc3RhcnQgOiBudW1iZXIsIGVuZDogbnVtYmVyLCBjaHVuayA6IG51bWJlciA9IG1heENvbmN1cnJlbnRSZXF1ZXN0cztcbiAgICAgICAgXG4gICAgICAgIGZvciAoc3RhcnQgPSAwLCBlbmQgPSBpZHMubGVuZ3RoOyBzdGFydCA8IGVuZDsgc3RhcnQgKz0gY2h1bmspIHtcbiAgICAgICAgICAgIHJlcXVlc3RzID0gaWRzLnNsaWNlKHN0YXJ0LCBzdGFydCArIGNodW5rKTtcbiAgICAgICAgICAgIHByb21pc2VzID0gcmVxdWVzdHMubWFwKCBpZCA9PlxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0Tm90ZShxdWVyeSwgaWQpXG4gICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcy5tYXAoIGFzeW5jIChwLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBwLmNhdGNoKGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZHNOb3RGb3VuZC5wdXNoKHJlcXVlc3RzW2luZGV4XSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgfSApO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgY29uc3QgdmFsaWRSZXN1bHRzID0gcmVzdWx0cy5maWx0ZXIocmVzdWx0ID0+ICEocmVzdWx0ID09IHVuZGVmaW5lZCkpO1xuICAgICAgICAgICAgam9wbGluTm90ZXMucHVzaCguLi52YWxpZFJlc3VsdHMpOyAgXG4gICAgICAgIH1cblxuICAgICAgICBpZihpZHNOb3RGb3VuZC5sZW5ndGggIT0gMCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBqb3BsaW4gZGF0YSBhcGkgOiBub3QgZm91bmQgZXJyb3IgZm9yIDogJHtpZHNOb3RGb3VuZH1gKTsgICAgICAgICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgbm90ZXMgPSBhd2FpdCBQcm9taXNlLmFsbChqb3BsaW5Ob3Rlcy5tYXAoIGFzeW5jIChub3RlKSA9PiB0aGlzLmJ1aWxkTm90ZShub3RlKSkpO1xuXG4gICAgICAgIHJldHVybiB7cmVzdWx0czogbm90ZXMsIGlkc05vdEZvdW5kOiBpZHNOb3RGb3VuZCwgdHJ1bmNhdGVkOiBmYWxzZX07XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGdldE5vdGVVcGRhdGVzKGN1cnNvcj8gOiBzdHJpbmcpIDogXG4gICAgUHJvbWlzZSA8e1xuICAgICAgICAgICAgICB1cGRhdGVzOiBhbnlbXTtcbiAgICAgICAgICAgICAgY3Vyc29yOiBzdHJpbmc7XG4gICAgICAgICAgICAgfT4gXG4gICAge1xuICAgICAgICBjb25zdCB1cGRhdGVzID0gW107IFxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBudWxsO1xuICAgICAgICBkbyB7XG4gICAgICAgICAgICByZXNwb25zZSA9IChjdXJzb3IpID8gXG4gICAgICAgICAgICAgICAgYXdhaXQgam9wbGluLmRhdGEuZ2V0KFsnZXZlbnRzJ10sIHtjdXJzb3J9IClcbiAgICAgICAgICAgICAgICA6IGF3YWl0IGpvcGxpbi5kYXRhLmdldChbJ2V2ZW50cyddKTtcblxuICAgICAgICAgICAgdXBkYXRlcy5wdXNoKC4uLnJlc3BvbnNlLml0ZW1zKTtcbiAgICAgICAgICAgIGN1cnNvciA9IHJlc3BvbnNlLmN1cnNvcjtcbiAgICAgICAgfVxuICAgICAgICB3aGlsZShyZXNwb25zZS5oYXNfbW9yZSk7XG5cbiAgICAgICAgcmV0dXJuIHsgdXBkYXRlcywgY3Vyc29yIH07XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGdldE5vdGUocXVlcnk6IGFueSwgaWQ6IHN0cmluZykgOiBQcm9taXNlPE5vdGU+IHtcbiAgICAgICAgY29uc3Qgam9wbGluTm90ZSA9IGF3YWl0IGpvcGxpbi5kYXRhLmdldChbJ25vdGVzJywgaWRdLCBxdWVyeSk7XG4gICAgICAgIHJldHVybiB0aGlzLmJ1aWxkTm90ZShqb3BsaW5Ob3RlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgZ2V0Tm90ZUJvb2socXVlcnk6IGFueSwgaWQ6IHN0cmluZykgOiBQcm9taXNlPE5vdGVCb29rPiB7XG4gICAgICAgIGNvbnN0IGpvcGxpbk5vdGUgPSBhd2FpdCBqb3BsaW4uZGF0YS5nZXQoWydmb2xkZXJzJywgaWRdLCBxdWVyeSk7XG4gICAgICAgIHJldHVybiB0aGlzLmJ1aWxkTm90ZShqb3BsaW5Ob3RlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGJ1aWxkTm90ZShqb3BsaW5Ob3RlOiBhbnkpIDogUHJvbWlzZTxOb3RlPiB7XG4gICAgICAgIHJldHVybiBqb3BsaW5Ob3RlO1xuXG4gICAgICAgIC8qY29uc3Qgbm90ZSA9IHBhcnNlSm9wbGluTm90ZShqb3BsaW5Ob3RlKTtcbiAgICAgICAgY29uc3QgdGFncyA9IGF3YWl0IGpvcGxpbi5kYXRhLmdldChbJ25vdGVzJywgam9wbGluTm90ZS5pZCwgJ3RhZ3MnXSk7XG4gICAgICAgIG5vdGUudGFncyA9ICh0YWdzPy5pdGVtcykgPyB0YWdzLml0ZW1zLm1hcCgodGFnOiBhbnkpID0+IHRhZy50aXRsZSkgOiBbXTtcbiAgICAgICAgcmV0dXJuIG5vdGU7Ki9cbiAgICB9XG5cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGBcbjxkaXYgY2xhc3M9XCJzZWFyY2gtcGFuZWwgY2xlYXJmaXhcIj5cbiAgICA8ZGl2IGNsYXNzPVwic2VhcmNoLWlucHV0IHRleHQtY2VudGVyXCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJrZXl3b3JkXCIgcGxhY2Vob2xkZXI9XCJrZXl3b3JkIGZvciBzZWFyY2hcIi8+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiaXNfcmVnZXhcIi8+IHJlZ2V4XG4gICAgPC9kaXY+XG5cbiAgICA8aHIvPlxuXG4gICAgPGRpdiBjbGFzcz1cInNlYXJjaC10aXBcIj48L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJzZWFyY2gtcmVzdWx0XCI+PC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiZXJyb3JcIj48L2Rpdj5cbjwvZGl2PlxuYDsiXSwic291cmNlUm9vdCI6IiJ9