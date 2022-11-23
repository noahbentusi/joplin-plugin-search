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
const html_js_1 = __importDefault(__webpack_require__(/*! ./webview/html.js */ "./src/webview/html.js"));
const SETTING_TOP_LINES = 'noah.search.top_lines';
const SETTING_BOTTOM_LINES = 'noah.search.bottom_lines';
let panelId = null;
let active = true;
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
        api_1.default.views.panels.onMessage(panelId, (message) => __awaiter(this, void 0, void 0, function* () {
            return null;
        }));
        alert("start??");
        try {
            const res = yield api_1.default.views.panels.postMessage(panelId, {
                event: "test",
                value: "hello world"
            });
            alert(res);
        }
        catch (err) {
            alert(String(err));
        }
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
api_1.default.plugins.register({
    onStart: function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield initSettings();
            yield initCommands();
            yield initPanel();
            showPanel(active);
        });
    },
});


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

    <pre class="search-result"></pre>

    <div class="error"></div>
</div>
`);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBpL2luZGV4LnRzIiwid2VicGFjazovLy8uL2FwaS90eXBlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dlYnZpZXcvaHRtbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM5RUEsa0JBQWUsTUFBTSxDQUFDOzs7Ozs7Ozs7Ozs7OztBQ0p0QixvRUFBb0U7QUFDcEUsb0JBQW9CO0FBQ3BCLG9FQUFvRTs7O0FBd0RwRSxvRUFBb0U7QUFDcEUsb0JBQW9CO0FBQ3BCLG9FQUFvRTtBQUVwRSxJQUFZLGNBR1g7QUFIRCxXQUFZLGNBQWM7SUFDekIsK0JBQWE7SUFDYix5Q0FBdUI7QUFDeEIsQ0FBQyxFQUhXLGNBQWMsR0FBZCxzQkFBYyxLQUFkLHNC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Q0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxFIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJpbXBvcnQgdHlwZSBKb3BsaW4gZnJvbSAnLi9Kb3BsaW4nO1xuXG5kZWNsYXJlIGNvbnN0IGpvcGxpbjogSm9wbGluO1xuXG5leHBvcnQgZGVmYXVsdCBqb3BsaW47XG4iLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQ29tbWFuZCBBUEkgdHlwZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29tbWFuZCB7XG5cdC8qKlxuXHQgKiBOYW1lIG9mIGNvbW1hbmQgLSBtdXN0IGJlIGdsb2JhbGx5IHVuaXF1ZVxuXHQgKi9cblx0bmFtZTogc3RyaW5nO1xuXG5cdC8qKlxuXHQgKiBMYWJlbCB0byBiZSBkaXNwbGF5ZWQgb24gbWVudSBpdGVtcyBvciBrZXlib2FyZCBzaG9ydGN1dCBlZGl0b3IgZm9yIGV4YW1wbGUuXG5cdCAqIElmIGl0IGlzIG1pc3NpbmcsIGl0J3MgYXNzdW1lZCBpdCdzIGEgcHJpdmF0ZSBjb21tYW5kLCB0byBiZSBjYWxsZWQgcHJvZ3JhbW1hdGljYWxseSBvbmx5LlxuXHQgKiBJbiB0aGF0IGNhc2UgdGhlIGNvbW1hbmQgd2lsbCBub3QgYXBwZWFyIGluIHRoZSBzaG9ydGN1dCBlZGl0b3Igb3IgY29tbWFuZCBwYW5lbCwgYW5kIGxvZ2ljYWxseVxuXHQgKiBzaG91bGQgbm90IGJlIHVzZWQgYXMgYSBtZW51IGl0ZW0uXG5cdCAqL1xuXHRsYWJlbD86IHN0cmluZztcblxuXHQvKipcblx0ICogSWNvbiB0byBiZSB1c2VkIG9uIHRvb2xiYXIgYnV0dG9ucyBmb3IgZXhhbXBsZVxuXHQgKi9cblx0aWNvbk5hbWU/OiBzdHJpbmc7XG5cblx0LyoqXG5cdCAqIENvZGUgdG8gYmUgcmFuIHdoZW4gdGhlIGNvbW1hbmQgaXMgZXhlY3V0ZWQuIEl0IG1heSByZXR1cm4gYSByZXN1bHQuXG5cdCAqL1xuXHRleGVjdXRlKC4uLmFyZ3M6IGFueVtdKTogUHJvbWlzZTxhbnkgfCB2b2lkPjtcblxuXHQvKipcblx0ICogRGVmaW5lcyB3aGV0aGVyIHRoZSBjb21tYW5kIHNob3VsZCBiZSBlbmFibGVkIG9yIGRpc2FibGVkLCB3aGljaCBpbiB0dXJuc1xuXHQgKiBhZmZlY3RzIHRoZSBlbmFibGVkIHN0YXRlIG9mIGFueSBhc3NvY2lhdGVkIGJ1dHRvbiBvciBtZW51IGl0ZW0uXG5cdCAqXG5cdCAqIFRoZSBjb25kaXRpb24gc2hvdWxkIGJlIGV4cHJlc3NlZCBhcyBhIFwid2hlbi1jbGF1c2VcIiAoYXMgaW4gVmlzdWFsIFN0dWRpb1xuXHQgKiBDb2RlKS4gSXQncyBhIHNpbXBsZSBib29sZWFuIGV4cHJlc3Npb24gdGhhdCBldmFsdWF0ZXMgdG8gYHRydWVgIG9yXG5cdCAqIGBmYWxzZWAuIEl0IHN1cHBvcnRzIHRoZSBmb2xsb3dpbmcgb3BlcmF0b3JzOlxuXHQgKlxuXHQgKiBPcGVyYXRvciB8IFN5bWJvbCB8IEV4YW1wbGVcblx0ICogLS0gfCAtLSB8IC0tXG5cdCAqIEVxdWFsaXR5IHwgPT0gfCBcImVkaXRvclR5cGUgPT0gbWFya2Rvd25cIlxuXHQgKiBJbmVxdWFsaXR5IHwgIT0gfCBcImN1cnJlbnRTY3JlZW4gIT0gY29uZmlnXCJcblx0ICogT3IgfCBcXHxcXHwgfCBcIm5vdGVJc1RvZG8gXFx8XFx8IG5vdGVUb2RvQ29tcGxldGVkXCJcblx0ICogQW5kIHwgJiYgfCBcIm9uZU5vdGVTZWxlY3RlZCAmJiAhaW5Db25mbGljdEZvbGRlclwiXG5cdCAqXG5cdCAqIEpvcGxpbiwgdW5saWtlIFZTQ29kZSwgYWxzbyBzdXBwb3J0cyBwYXJlbnRoZXNpcywgd2hpY2ggYWxsb3dzIGNyZWF0aW5nXG5cdCAqIG1vcmUgY29tcGxleCBleHByZXNzaW9ucyBzdWNoIGFzIGBjb25kMSB8fCAoY29uZDIgJiYgY29uZDMpYC4gT25seSBvbmVcblx0ICogbGV2ZWwgb2YgcGFyZW50aGVzaXMgaXMgcG9zc2libGUgKG5lc3RlZCBvbmVzIGFyZW4ndCBzdXBwb3J0ZWQpLlxuXHQgKlxuXHQgKiBDdXJyZW50bHkgdGhlIHN1cHBvcnRlZCBjb250ZXh0IHZhcmlhYmxlcyBhcmVuJ3QgZG9jdW1lbnRlZCwgYnV0IHlvdSBjYW5cblx0ICogZmluZCB0aGUgbGlzdCBiZWxvdzpcblx0ICpcblx0ICogLSBbR2xvYmFsIFdoZW4gQ2xhdXNlc10oaHR0cHM6Ly9naXRodWIuY29tL2xhdXJlbnQyMi9qb3BsaW4vYmxvYi9kZXYvcGFja2FnZXMvbGliL3NlcnZpY2VzL2NvbW1hbmRzL3N0YXRlVG9XaGVuQ2xhdXNlQ29udGV4dC50cylcblx0ICogLSBbRGVza3RvcCBhcHAgV2hlbiBDbGF1c2VzXShodHRwczovL2dpdGh1Yi5jb20vbGF1cmVudDIyL2pvcGxpbi9ibG9iL2Rldi9wYWNrYWdlcy9hcHAtZGVza3RvcC9zZXJ2aWNlcy9jb21tYW5kcy9zdGF0ZVRvV2hlbkNsYXVzZUNvbnRleHQudHMpXG5cdCAqXG5cdCAqIE5vdGU6IENvbW1hbmRzIGFyZSBlbmFibGVkIGJ5IGRlZmF1bHQgdW5sZXNzIHlvdSB1c2UgdGhpcyBwcm9wZXJ0eS5cblx0ICovXG5cdGVuYWJsZWRDb25kaXRpb24/OiBzdHJpbmc7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBJbnRlcm9wIEFQSSB0eXBlc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IGVudW0gRmlsZVN5c3RlbUl0ZW0ge1xuXHRGaWxlID0gJ2ZpbGUnLFxuXHREaXJlY3RvcnkgPSAnZGlyZWN0b3J5Jyxcbn1cblxuZXhwb3J0IGVudW0gSW1wb3J0TW9kdWxlT3V0cHV0Rm9ybWF0IHtcblx0TWFya2Rvd24gPSAnbWQnLFxuXHRIdG1sID0gJ2h0bWwnLFxufVxuXG4vKipcbiAqIFVzZWQgdG8gaW1wbGVtZW50IGEgbW9kdWxlIHRvIGV4cG9ydCBkYXRhIGZyb20gSm9wbGluLiBbVmlldyB0aGUgZGVtbyBwbHVnaW5dKGh0dHBzOi8vZ2l0aHViLmNvbS9sYXVyZW50MjIvam9wbGluL3RyZWUvZGV2L3BhY2thZ2VzL2FwcC1jbGkvdGVzdHMvc3VwcG9ydC9wbHVnaW5zL2pzb25fZXhwb3J0KSBmb3IgYW4gZXhhbXBsZS5cbiAqXG4gKiBJbiBnZW5lcmFsLCBhbGwgdGhlIGV2ZW50IGhhbmRsZXJzIHlvdSdsbCBuZWVkIHRvIGltcGxlbWVudCB0YWtlIGEgYGNvbnRleHRgIG9iamVjdCBhcyBhIGZpcnN0IGFyZ3VtZW50LiBUaGlzIG9iamVjdCB3aWxsIGNvbnRhaW4gdGhlIGV4cG9ydCBvciBpbXBvcnQgcGF0aCBhcyB3ZWxsIGFzIHZhcmlvdXMgb3B0aW9uYWwgcHJvcGVydGllcywgc3VjaCBhcyB3aGljaCBub3RlcyBvciBub3RlYm9va3MgbmVlZCB0byBiZSBleHBvcnRlZC5cbiAqXG4gKiBUbyBnZXQgYSBiZXR0ZXIgc2Vuc2Ugb2Ygd2hhdCBpdCB3aWxsIGNvbnRhaW4gaXQgY2FuIGJlIHVzZWZ1bCB0byBwcmludCBpdCB1c2luZyBgY29uc29sZS5pbmZvKGNvbnRleHQpYC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBFeHBvcnRNb2R1bGUge1xuXHQvKipcblx0ICogVGhlIGZvcm1hdCB0byBiZSBleHBvcnRlZCwgZWcgXCJlbmV4XCIsIFwiamV4XCIsIFwianNvblwiLCBldGMuXG5cdCAqL1xuXHRmb3JtYXQ6IHN0cmluZztcblxuXHQvKipcblx0ICogVGhlIGRlc2NyaXB0aW9uIHRoYXQgd2lsbCBhcHBlYXIgaW4gdGhlIFVJLCBmb3IgZXhhbXBsZSBpbiB0aGUgbWVudSBpdGVtLlxuXHQgKi9cblx0ZGVzY3JpcHRpb246IHN0cmluZztcblxuXHQvKipcblx0ICogV2hldGhlciB0aGUgbW9kdWxlIHdpbGwgZXhwb3J0IGEgc2luZ2xlIGZpbGUgb3IgbXVsdGlwbGUgZmlsZXMgaW4gYSBkaXJlY3RvcnkuIEl0IGFmZmVjdHMgdGhlIG9wZW4gZGlhbG9nIHRoYXQgd2lsbCBiZSBwcmVzZW50ZWQgdG8gdGhlIHVzZXIgd2hlbiB1c2luZyB5b3VyIGV4cG9ydGVyLlxuXHQgKi9cblx0dGFyZ2V0OiBGaWxlU3lzdGVtSXRlbTtcblxuXHQvKipcblx0ICogT25seSBhcHBsaWVzIHRvIHNpbmdsZSBmaWxlIGV4cG9ydGVycyBvciBpbXBvcnRlcnNcblx0ICogSXQgdGVsbHMgd2hldGhlciB0aGUgZm9ybWF0IGNhbiBwYWNrYWdlIG11bHRpcGxlIG5vdGVzIGludG8gb25lIGZpbGUuXG5cdCAqIEZvciBleGFtcGxlIEpFWCBvciBFTkVYIGNhbiwgYnV0IEhUTUwgY2Fubm90LlxuXHQgKi9cblx0aXNOb3RlQXJjaGl2ZTogYm9vbGVhbjtcblxuXHQvKipcblx0ICogVGhlIGV4dGVuc2lvbnMgb2YgdGhlIGZpbGVzIGV4cG9ydGVkIGJ5IHlvdXIgbW9kdWxlLiBGb3IgZXhhbXBsZSwgaXQgaXMgYFtcImh0bVwiLCBcImh0bWxcIl1gIGZvciB0aGUgSFRNTCBtb2R1bGUsIGFuZCBqdXN0IGBbXCJqZXhcIl1gIGZvciB0aGUgSkVYIG1vZHVsZS5cblx0ICovXG5cdGZpbGVFeHRlbnNpb25zPzogc3RyaW5nW107XG5cblx0LyoqXG5cdCAqIENhbGxlZCB3aGVuIHRoZSBleHBvcnQgcHJvY2VzcyBzdGFydHMuXG5cdCAqL1xuXHRvbkluaXQoY29udGV4dDogRXhwb3J0Q29udGV4dCk6IFByb21pc2U8dm9pZD47XG5cblx0LyoqXG5cdCAqIENhbGxlZCB3aGVuIGFuIGl0ZW0gbmVlZHMgdG8gYmUgcHJvY2Vzc2VkLiBBbiBcIml0ZW1cIiBjYW4gYmUgYW55IEpvcGxpbiBvYmplY3QsIHN1Y2ggYXMgYSBub3RlLCBhIGZvbGRlciwgYSBub3RlYm9vaywgZXRjLlxuXHQgKi9cblx0b25Qcm9jZXNzSXRlbShjb250ZXh0OiBFeHBvcnRDb250ZXh0LCBpdGVtVHlwZTogbnVtYmVyLCBpdGVtOiBhbnkpOiBQcm9taXNlPHZvaWQ+O1xuXG5cdC8qKlxuXHQgKiBDYWxsZWQgd2hlbiBhIHJlc291cmNlIGZpbGUgbmVlZHMgdG8gYmUgZXhwb3J0ZWQuXG5cdCAqL1xuXHRvblByb2Nlc3NSZXNvdXJjZShjb250ZXh0OiBFeHBvcnRDb250ZXh0LCByZXNvdXJjZTogYW55LCBmaWxlUGF0aDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPjtcblxuXHQvKipcblx0ICogQ2FsbGVkIHdoZW4gdGhlIGV4cG9ydCBwcm9jZXNzIGlzIGRvbmUuXG5cdCAqL1xuXHRvbkNsb3NlKGNvbnRleHQ6IEV4cG9ydENvbnRleHQpOiBQcm9taXNlPHZvaWQ+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEltcG9ydE1vZHVsZSB7XG5cdC8qKlxuXHQgKiBUaGUgZm9ybWF0IHRvIGJlIGV4cG9ydGVkLCBlZyBcImVuZXhcIiwgXCJqZXhcIiwgXCJqc29uXCIsIGV0Yy5cblx0ICovXG5cdGZvcm1hdDogc3RyaW5nO1xuXG5cdC8qKlxuXHQgKiBUaGUgZGVzY3JpcHRpb24gdGhhdCB3aWxsIGFwcGVhciBpbiB0aGUgVUksIGZvciBleGFtcGxlIGluIHRoZSBtZW51IGl0ZW0uXG5cdCAqL1xuXHRkZXNjcmlwdGlvbjogc3RyaW5nO1xuXG5cdC8qKlxuXHQgKiBPbmx5IGFwcGxpZXMgdG8gc2luZ2xlIGZpbGUgZXhwb3J0ZXJzIG9yIGltcG9ydGVyc1xuXHQgKiBJdCB0ZWxscyB3aGV0aGVyIHRoZSBmb3JtYXQgY2FuIHBhY2thZ2UgbXVsdGlwbGUgbm90ZXMgaW50byBvbmUgZmlsZS5cblx0ICogRm9yIGV4YW1wbGUgSkVYIG9yIEVORVggY2FuLCBidXQgSFRNTCBjYW5ub3QuXG5cdCAqL1xuXHRpc05vdGVBcmNoaXZlOiBib29sZWFuO1xuXG5cdC8qKlxuXHQgKiBUaGUgdHlwZSBvZiBzb3VyY2VzIHRoYXQgYXJlIHN1cHBvcnRlZCBieSB0aGUgbW9kdWxlLiBUZWxscyB3aGV0aGVyIHRoZSBtb2R1bGUgY2FuIGltcG9ydCBmaWxlcyBvciBkaXJlY3RvcmllcyBvciBib3RoLlxuXHQgKi9cblx0c291cmNlczogRmlsZVN5c3RlbUl0ZW1bXTtcblxuXHQvKipcblx0ICogVGVsbHMgdGhlIGZpbGUgZXh0ZW5zaW9ucyBvZiB0aGUgZXhwb3J0ZWQgZmlsZXMuXG5cdCAqL1xuXHRmaWxlRXh0ZW5zaW9ucz86IHN0cmluZ1tdO1xuXG5cdC8qKlxuXHQgKiBUZWxscyB0aGUgdHlwZSBvZiBub3RlcyB0aGF0IHdpbGwgYmUgZ2VuZXJhdGVkLCBlaXRoZXIgSFRNTCBvciBNYXJrZG93biAoZGVmYXVsdCkuXG5cdCAqL1xuXHRvdXRwdXRGb3JtYXQ/OiBJbXBvcnRNb2R1bGVPdXRwdXRGb3JtYXQ7XG5cblx0LyoqXG5cdCAqIENhbGxlZCB3aGVuIHRoZSBpbXBvcnQgcHJvY2VzcyBzdGFydHMuIFRoZXJlIGlzIG9ubHkgb25lIGV2ZW50IGhhbmRsZXIgd2l0aGluIHdoaWNoIHlvdSBzaG91bGQgaW1wb3J0IHRoZSBjb21wbGV0ZSBkYXRhLlxuXHQgKi9cblx0b25FeGVjKGNvbnRleHQ6IEltcG9ydENvbnRleHQpOiBQcm9taXNlPHZvaWQ+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEV4cG9ydE9wdGlvbnMge1xuXHRmb3JtYXQ/OiBzdHJpbmc7XG5cdHBhdGg/OiBzdHJpbmc7XG5cdHNvdXJjZUZvbGRlcklkcz86IHN0cmluZ1tdO1xuXHRzb3VyY2VOb3RlSWRzPzogc3RyaW5nW107XG5cdC8vIG1vZHVsZVBhdGg/OiBzdHJpbmc7XG5cdHRhcmdldD86IEZpbGVTeXN0ZW1JdGVtO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEV4cG9ydENvbnRleHQge1xuXHRkZXN0UGF0aDogc3RyaW5nO1xuXHRvcHRpb25zOiBFeHBvcnRPcHRpb25zO1xuXG5cdC8qKlxuXHQgKiBZb3UgY2FuIGF0dGFjaCB5b3VyIG93biBjdXN0b20gZGF0YSB1c2luZyB0aGlzIHByb3BlcnkgLSBpdCB3aWxsIHRoZW4gYmUgcGFzc2VkIHRvIGVhY2ggZXZlbnQgaGFuZGxlciwgYWxsb3dpbmcgeW91IHRvIGtlZXAgc3RhdGUgZnJvbSBvbmUgZXZlbnQgdG8gdGhlIG5leHQuXG5cdCAqL1xuXHR1c2VyRGF0YT86IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJbXBvcnRDb250ZXh0IHtcblx0c291cmNlUGF0aDogc3RyaW5nO1xuXHRvcHRpb25zOiBhbnk7XG5cdHdhcm5pbmdzOiBzdHJpbmdbXTtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE1pc2MgdHlwZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2NyaXB0IHtcblx0b25TdGFydD8oZXZlbnQ6IGFueSk6IFByb21pc2U8dm9pZD47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGlzcG9zYWJsZSB7XG5cdC8vIGRpc3Bvc2UoKTp2b2lkO1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTWVudSB0eXBlc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IGludGVyZmFjZSBDcmVhdGVNZW51SXRlbU9wdGlvbnMge1xuXHRhY2NlbGVyYXRvcjogc3RyaW5nO1xufVxuXG5leHBvcnQgZW51bSBNZW51SXRlbUxvY2F0aW9uIHtcblx0RmlsZSA9ICdmaWxlJyxcblx0RWRpdCA9ICdlZGl0Jyxcblx0VmlldyA9ICd2aWV3Jyxcblx0Tm90ZSA9ICdub3RlJyxcblx0VG9vbHMgPSAndG9vbHMnLFxuXHRIZWxwID0gJ2hlbHAnLFxuXG5cdC8qKlxuXHQgKiBAZGVwcmVjYXRlZCBEbyBub3QgdXNlIC0gc2FtZSBhcyBOb3RlTGlzdENvbnRleHRNZW51XG5cdCAqL1xuXHRDb250ZXh0ID0gJ2NvbnRleHQnLFxuXG5cdC8vIElmIGFkZGluZyBhbiBpdGVtIGhlcmUsIGRvbid0IGZvcmdldCB0byB1cGRhdGUgaXNDb250ZXh0TWVudUl0ZW1Mb2NhdGlvbigpXG5cblx0LyoqXG5cdCAqIFdoZW4gYSBjb21tYW5kIGlzIGNhbGxlZCBmcm9tIHRoZSBub3RlIGxpc3QgY29udGV4dCBtZW51LCB0aGVcblx0ICogY29tbWFuZCB3aWxsIHJlY2VpdmUgdGhlIGZvbGxvd2luZyBhcmd1bWVudHM6XG5cdCAqXG5cdCAqIC0gYG5vdGVJZHM6c3RyaW5nW11gOiBJRHMgb2YgdGhlIG5vdGVzIHRoYXQgd2VyZSByaWdodC1jbGlja2VkIG9uLlxuXHQgKi9cblx0Tm90ZUxpc3RDb250ZXh0TWVudSA9ICdub3RlTGlzdENvbnRleHRNZW51JyxcblxuXHRFZGl0b3JDb250ZXh0TWVudSA9ICdlZGl0b3JDb250ZXh0TWVudScsXG5cblx0LyoqXG5cdCAqIFdoZW4gYSBjb21tYW5kIGlzIGNhbGxlZCBmcm9tIGEgZm9sZGVyIGNvbnRleHQgbWVudSwgdGhlXG5cdCAqIGNvbW1hbmQgd2lsbCByZWNlaXZlIHRoZSBmb2xsb3dpbmcgYXJndW1lbnRzOlxuXHQgKlxuXHQgKiAtIGBmb2xkZXJJZDpzdHJpbmdgOiBJRCBvZiB0aGUgZm9sZGVyIHRoYXQgd2FzIHJpZ2h0LWNsaWNrZWQgb25cblx0ICovXG5cdEZvbGRlckNvbnRleHRNZW51ID0gJ2ZvbGRlckNvbnRleHRNZW51JyxcblxuXHQvKipcblx0ICogV2hlbiBhIGNvbW1hbmQgaXMgY2FsbGVkIGZyb20gYSB0YWcgY29udGV4dCBtZW51LCB0aGVcblx0ICogY29tbWFuZCB3aWxsIHJlY2VpdmUgdGhlIGZvbGxvd2luZyBhcmd1bWVudHM6XG5cdCAqXG5cdCAqIC0gYHRhZ0lkOnN0cmluZ2A6IElEIG9mIHRoZSB0YWcgdGhhdCB3YXMgcmlnaHQtY2xpY2tlZCBvblxuXHQgKi9cblx0VGFnQ29udGV4dE1lbnUgPSAndGFnQ29udGV4dE1lbnUnLFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNDb250ZXh0TWVudUl0ZW1Mb2NhdGlvbihsb2NhdGlvbjogTWVudUl0ZW1Mb2NhdGlvbik6IGJvb2xlYW4ge1xuXHRyZXR1cm4gW1xuXHRcdE1lbnVJdGVtTG9jYXRpb24uQ29udGV4dCxcblx0XHRNZW51SXRlbUxvY2F0aW9uLk5vdGVMaXN0Q29udGV4dE1lbnUsXG5cdFx0TWVudUl0ZW1Mb2NhdGlvbi5FZGl0b3JDb250ZXh0TWVudSxcblx0XHRNZW51SXRlbUxvY2F0aW9uLkZvbGRlckNvbnRleHRNZW51LFxuXHRcdE1lbnVJdGVtTG9jYXRpb24uVGFnQ29udGV4dE1lbnUsXG5cdF0uaW5jbHVkZXMobG9jYXRpb24pO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1lbnVJdGVtIHtcblx0LyoqXG5cdCAqIENvbW1hbmQgdGhhdCBzaG91bGQgYmUgYXNzb2NpYXRlZCB3aXRoIHRoZSBtZW51IGl0ZW0uIEFsbCBtZW51IGl0ZW0gc2hvdWxkXG5cdCAqIGhhdmUgYSBjb21tYW5kIGFzc29jaWF0ZWQgd2l0aCB0aGVtIHVubGVzcyB0aGV5IGFyZSBhIHN1Yi1tZW51LlxuXHQgKi9cblx0Y29tbWFuZE5hbWU/OiBzdHJpbmc7XG5cblx0LyoqXG5cdCAqIEFjY2VsZXJhdG9yIGFzc29jaWF0ZWQgd2l0aCB0aGUgbWVudSBpdGVtXG5cdCAqL1xuXHRhY2NlbGVyYXRvcj86IHN0cmluZztcblxuXHQvKipcblx0ICogTWVudSBpdGVtcyB0aGF0IHNob3VsZCBhcHBlYXIgYmVsb3cgdGhpcyBtZW51IGl0ZW0uIEFsbG93cyBjcmVhdGluZyBhIG1lbnUgdHJlZS5cblx0ICovXG5cdHN1Ym1lbnU/OiBNZW51SXRlbVtdO1xuXG5cdC8qKlxuXHQgKiBNZW51IGl0ZW0gbGFiZWwuIElmIG5vdCBzcGVjaWZpZWQsIHRoZSBjb21tYW5kIGxhYmVsIHdpbGwgYmUgdXNlZCBpbnN0ZWFkLlxuXHQgKi9cblx0bGFiZWw/OiBzdHJpbmc7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBWaWV3IEFQSSB0eXBlc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IGludGVyZmFjZSBCdXR0b25TcGVjIHtcblx0aWQ6IEJ1dHRvbklkO1xuXHR0aXRsZT86IHN0cmluZztcblx0b25DbGljaz8oKTogdm9pZDtcbn1cblxuZXhwb3J0IHR5cGUgQnV0dG9uSWQgPSBzdHJpbmc7XG5cbmV4cG9ydCBlbnVtIFRvb2xiYXJCdXR0b25Mb2NhdGlvbiB7XG5cdC8qKlxuXHQgKiBUaGlzIHRvb2xiYXIgaW4gdGhlIHRvcCByaWdodCBjb3JuZXIgb2YgdGhlIGFwcGxpY2F0aW9uLiBJdCBhcHBsaWVzIHRvIHRoZSBub3RlIGFzIGEgd2hvbGUsIGluY2x1ZGluZyBpdHMgbWV0YWRhdGEuXG5cdCAqL1xuXHROb3RlVG9vbGJhciA9ICdub3RlVG9vbGJhcicsXG5cblx0LyoqXG5cdCAqIFRoaXMgdG9vbGJhciBpcyByaWdodCBhYm92ZSB0aGUgdGV4dCBlZGl0b3IuIEl0IGFwcGxpZXMgdG8gdGhlIG5vdGUgYm9keSBvbmx5LlxuXHQgKi9cblx0RWRpdG9yVG9vbGJhciA9ICdlZGl0b3JUb29sYmFyJyxcbn1cblxuZXhwb3J0IHR5cGUgVmlld0hhbmRsZSA9IHN0cmluZztcblxuZXhwb3J0IGludGVyZmFjZSBFZGl0b3JDb21tYW5kIHtcblx0bmFtZTogc3RyaW5nO1xuXHR2YWx1ZT86IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEaWFsb2dSZXN1bHQge1xuXHRpZDogQnV0dG9uSWQ7XG5cdGZvcm1EYXRhPzogYW55O1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gU2V0dGluZ3MgdHlwZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBlbnVtIFNldHRpbmdJdGVtVHlwZSB7XG5cdEludCA9IDEsXG5cdFN0cmluZyA9IDIsXG5cdEJvb2wgPSAzLFxuXHRBcnJheSA9IDQsXG5cdE9iamVjdCA9IDUsXG5cdEJ1dHRvbiA9IDYsXG59XG5cbi8vIFJlZGVmaW5lIGEgc2ltcGxpZmllZCBpbnRlcmZhY2UgdG8gbWFzayBpbnRlcm5hbCBkZXRhaWxzXG4vLyBhbmQgdG8gcmVtb3ZlIGZ1bmN0aW9uIGNhbGxzIGFzIHRoZXkgd291bGQgaGF2ZSB0byBiZSBhc3luYy5cbmV4cG9ydCBpbnRlcmZhY2UgU2V0dGluZ0l0ZW0ge1xuXHR2YWx1ZTogYW55O1xuXHR0eXBlOiBTZXR0aW5nSXRlbVR5cGU7XG5cblx0bGFiZWw6IHN0cmluZztcblx0ZGVzY3JpcHRpb24/OiBzdHJpbmc7XG5cblx0LyoqXG5cdCAqIEEgcHVibGljIHNldHRpbmcgd2lsbCBhcHBlYXIgaW4gdGhlIENvbmZpZ3VyYXRpb24gc2NyZWVuIGFuZCB3aWxsIGJlXG5cdCAqIG1vZGlmaWFibGUgYnkgdGhlIHVzZXIuIEEgcHJpdmF0ZSBzZXR0aW5nIGhvd2V2ZXIgd2lsbCBub3QgYXBwZWFyIHRoZXJlLFxuXHQgKiBhbmQgY2FuIG9ubHkgYmUgY2hhbmdlZCBwcm9ncmFtbWF0aWNhbGx5LiBZb3UgbWF5IHVzZSB0aGlzIHRvIHN0b3JlIHNvbWVcblx0ICogdmFsdWVzIHRoYXQgeW91IGRvIG5vdCB3YW50IHRvIGRpcmVjdGx5IGV4cG9zZS5cblx0ICovXG5cdHB1YmxpYzogYm9vbGVhbjtcblxuXHQvKipcblx0ICogWW91IHdvdWxkIHVzdWFsbHkgc2V0IHRoaXMgdG8gYSBzZWN0aW9uIHlvdSB3b3VsZCBoYXZlIGNyZWF0ZWRcblx0ICogc3BlY2lmaWNhbGx5IGZvciB0aGUgcGx1Z2luLlxuXHQgKi9cblx0c2VjdGlvbj86IHN0cmluZztcblxuXHQvKipcblx0ICogVG8gY3JlYXRlIGEgc2V0dGluZyB3aXRoIG11bHRpcGxlIG9wdGlvbnMsIHNldCB0aGlzIHByb3BlcnR5IHRvIGB0cnVlYC5cblx0ICogVGhhdCBzZXR0aW5nIHdpbGwgcmVuZGVyIGFzIGEgZHJvcGRvd24gbGlzdCBpbiB0aGUgY29uZmlndXJhdGlvbiBzY3JlZW4uXG5cdCAqL1xuXHRpc0VudW0/OiBib29sZWFuO1xuXG5cdC8qKlxuXHQgKiBUaGlzIHByb3BlcnR5IGlzIHJlcXVpcmVkIHdoZW4gYGlzRW51bWAgaXMgYHRydWVgLiBJbiB3aGljaCBjYXNlLCBpdFxuXHQgKiBzaG91bGQgY29udGFpbiBhIG1hcCBvZiB2YWx1ZSA9PiBsYWJlbC5cblx0ICovXG5cdG9wdGlvbnM/OiBSZWNvcmQ8YW55LCBhbnk+O1xuXG5cdC8qKlxuXHQgKiBSZXNlcnZlZCBwcm9wZXJ0eS4gTm90IHVzZWQgYXQgdGhlIG1vbWVudC5cblx0ICovXG5cdGFwcFR5cGVzPzogc3RyaW5nW107XG5cblx0LyoqXG5cdCAqIFNldCB0aGlzIHRvIGB0cnVlYCB0byBzdG9yZSBzZWN1cmUgZGF0YSwgc3VjaCBhcyBwYXNzd29yZHMuIEFueSBzdWNoXG5cdCAqIHNldHRpbmcgd2lsbCBiZSBzdG9yZWQgaW4gdGhlIHN5c3RlbSBrZXljaGFpbiBpZiBvbmUgaXMgYXZhaWxhYmxlLlxuXHQgKi9cblx0c2VjdXJlPzogYm9vbGVhbjtcblxuXHQvKipcblx0ICogQW4gYWR2YW5jZWQgc2V0dGluZyB3aWxsIGJlIG1vdmVkIHVuZGVyIHRoZSBcIkFkdmFuY2VkXCIgYnV0dG9uIGluIHRoZVxuXHQgKiBjb25maWcgc2NyZWVuLlxuXHQgKi9cblx0YWR2YW5jZWQ/OiBib29sZWFuO1xuXG5cdC8qKlxuXHQgKiBTZXQgdGhlIG1pbiwgbWF4IGFuZCBzdGVwIHZhbHVlcyBpZiB5b3Ugd2FudCB0byByZXN0cmljdCBhbiBpbnQgc2V0dGluZ1xuXHQgKiB0byBhIHBhcnRpY3VsYXIgcmFuZ2UuXG5cdCAqL1xuXHRtaW5pbXVtPzogbnVtYmVyO1xuXHRtYXhpbXVtPzogbnVtYmVyO1xuXHRzdGVwPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNldHRpbmdTZWN0aW9uIHtcblx0bGFiZWw6IHN0cmluZztcblx0aWNvbk5hbWU/OiBzdHJpbmc7XG5cdGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuXHRuYW1lPzogc3RyaW5nO1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRGF0YSBBUEkgdHlwZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8qKlxuICogQW4gYXJyYXkgb2YgYXQgbGVhc3Qgb25lIGVsZW1lbnQgYW5kIGF0IG1vc3QgdGhyZWUgZWxlbWVudHMuXG4gKlxuICogLSAqKlswXSoqOiBSZXNvdXJjZSBuYW1lIChlZy4gXCJub3Rlc1wiLCBcImZvbGRlcnNcIiwgXCJ0YWdzXCIsIGV0Yy4pXG4gKiAtICoqWzFdKio6IChPcHRpb25hbCkgUmVzb3VyY2UgSUQuXG4gKiAtICoqWzJdKio6IChPcHRpb25hbCkgUmVzb3VyY2UgbGluay5cbiAqL1xuZXhwb3J0IHR5cGUgUGF0aCA9IHN0cmluZ1tdO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQ29udGVudCBTY3JpcHQgdHlwZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCB0eXBlIFBvc3RNZXNzYWdlSGFuZGxlciA9IChpZDogc3RyaW5nLCBtZXNzYWdlOiBhbnkpPT4gUHJvbWlzZTxhbnk+O1xuXG4vKipcbiAqIFdoZW4gYSBjb250ZW50IHNjcmlwdCBpcyBpbml0aWFsaXNlZCwgaXQgcmVjZWl2ZXMgYSBgY29udGV4dGAgb2JqZWN0LlxuICovXG5leHBvcnQgaW50ZXJmYWNlIENvbnRlbnRTY3JpcHRDb250ZXh0IHtcblx0LyoqXG5cdCAqIFRoZSBwbHVnaW4gSUQgdGhhdCByZWdpc3RlcmVkIHRoaXMgY29udGVudCBzY3JpcHRcblx0ICovXG5cdHBsdWdpbklkOiBzdHJpbmc7XG5cblx0LyoqXG5cdCAqIFRoZSBjb250ZW50IHNjcmlwdCBJRCwgd2hpY2ggbWF5IGJlIG5lY2Vzc2FyeSB0byBwb3N0IG1lc3NhZ2VzXG5cdCAqL1xuXHRjb250ZW50U2NyaXB0SWQ6IHN0cmluZztcblxuXHQvKipcblx0ICogQ2FuIGJlIHVzZWQgYnkgQ29kZU1pcnJvciBjb250ZW50IHNjcmlwdHMgdG8gcG9zdCBhIG1lc3NhZ2UgdG8gdGhlIHBsdWdpblxuXHQgKi9cblx0cG9zdE1lc3NhZ2U6IFBvc3RNZXNzYWdlSGFuZGxlcjtcbn1cblxuZXhwb3J0IGVudW0gQ29udGVudFNjcmlwdFR5cGUge1xuXHQvKipcblx0ICogUmVnaXN0ZXJzIGEgbmV3IE1hcmtkb3duLUl0IHBsdWdpbiwgd2hpY2ggc2hvdWxkIGZvbGxvdyB0aGUgdGVtcGxhdGVcblx0ICogYmVsb3cuXG5cdCAqXG5cdCAqIGBgYGphdmFzY3JpcHRcblx0ICogbW9kdWxlLmV4cG9ydHMgPSB7XG5cdCAqICAgICBkZWZhdWx0OiBmdW5jdGlvbihjb250ZXh0KSB7XG5cdCAqICAgICAgICAgcmV0dXJuIHtcblx0ICogICAgICAgICAgICAgcGx1Z2luOiBmdW5jdGlvbihtYXJrZG93bkl0LCBvcHRpb25zKSB7XG5cdCAqICAgICAgICAgICAgICAgICAvLyAuLi5cblx0ICogICAgICAgICAgICAgfSxcblx0ICogICAgICAgICAgICAgYXNzZXRzOiB7XG5cdCAqICAgICAgICAgICAgICAgICAvLyAuLi5cblx0ICogICAgICAgICAgICAgfSxcblx0ICogICAgICAgICB9XG5cdCAqICAgICB9XG5cdCAqIH1cblx0ICogYGBgXG5cdCAqIFNlZSBbdGhlXG5cdCAqIGRlbW9dKGh0dHBzOi8vZ2l0aHViLmNvbS9sYXVyZW50MjIvam9wbGluL3RyZWUvZGV2L3BhY2thZ2VzL2FwcC1jbGkvdGVzdHMvc3VwcG9ydC9wbHVnaW5zL2NvbnRlbnRfc2NyaXB0KVxuXHQgKiBmb3IgYSBzaW1wbGUgTWFya2Rvd24taXQgcGx1Z2luIGV4YW1wbGUuXG5cdCAqXG5cdCAqICMjIEV4cG9ydGVkIG1lbWJlcnNcblx0ICpcblx0ICogLSBUaGUgYGNvbnRleHRgIGFyZ3VtZW50IGlzIGN1cnJlbnRseSB1bnVzZWQgYnV0IGNvdWxkIGJlIHVzZWQgbGF0ZXIgb25cblx0ICogICB0byBwcm92aWRlIGFjY2VzcyB0byB5b3VyIG93biBwbHVnaW4gc28gdGhhdCB0aGUgY29udGVudCBzY3JpcHQgYW5kXG5cdCAqICAgcGx1Z2luIGNhbiBjb21tdW5pY2F0ZS5cblx0ICpcblx0ICogLSBUaGUgKipyZXF1aXJlZCoqIGBwbHVnaW5gIGtleSBpcyB0aGUgYWN0dWFsIE1hcmtkb3duLUl0IHBsdWdpbiAtIGNoZWNrXG5cdCAqICAgdGhlIFtvZmZpY2lhbCBkb2NdKGh0dHBzOi8vZ2l0aHViLmNvbS9tYXJrZG93bi1pdC9tYXJrZG93bi1pdCkgZm9yIG1vcmVcblx0ICogICBpbmZvcm1hdGlvbi4gVGhlIGBvcHRpb25zYCBwYXJhbWV0ZXIgaXMgb2YgdHlwZVxuXHQgKiAgIFtSdWxlT3B0aW9uc10oaHR0cHM6Ly9naXRodWIuY29tL2xhdXJlbnQyMi9qb3BsaW4vYmxvYi9kZXYvcGFja2FnZXMvcmVuZGVyZXIvTWRUb0h0bWwudHMpLFxuXHQgKiAgIHdoaWNoIGNvbnRhaW5zIGEgbnVtYmVyIG9mIG9wdGlvbnMsIG1vc3RseSB1c2VmdWwgZm9yIEpvcGxpbidzIGludGVybmFsXG5cdCAqICAgY29kZS5cblx0ICpcblx0ICogLSBVc2luZyB0aGUgKipvcHRpb25hbCoqIGBhc3NldHNgIGtleSB5b3UgbWF5IHNwZWNpZnkgYXNzZXRzIHN1Y2ggYXMgSlNcblx0ICogICBvciBDU1MgdGhhdCBzaG91bGQgYmUgbG9hZGVkIGluIHRoZSByZW5kZXJlZCBIVE1MIGRvY3VtZW50LiBDaGVjayBmb3Jcblx0ICogICBleGFtcGxlIHRoZSBKb3BsaW4gW01lcm1haWRcblx0ICogICBwbHVnaW5dKGh0dHBzOi8vZ2l0aHViLmNvbS9sYXVyZW50MjIvam9wbGluL2Jsb2IvZGV2L3BhY2thZ2VzL3JlbmRlcmVyL01kVG9IdG1sL3J1bGVzL21lcm1haWQudHMpXG5cdCAqICAgdG8gc2VlIGhvdyB0aGUgZGF0YSBzaG91bGQgYmUgc3RydWN0dXJlZC5cblx0ICpcblx0ICogIyMgUG9zdGluZyBtZXNzYWdlcyBmcm9tIHRoZSBjb250ZW50IHNjcmlwdCB0byB5b3VyIHBsdWdpblxuXHQgKlxuXHQgKiBUaGUgYXBwbGljYXRpb24gcHJvdmlkZXMgdGhlIGZvbGxvd2luZyBmdW5jdGlvbiB0byBhbGxvdyBleGVjdXRpbmdcblx0ICogY29tbWFuZHMgZnJvbSB0aGUgcmVuZGVyZWQgSFRNTCBjb2RlOlxuXHQgKlxuXHQgKiBgYGBqYXZhc2NyaXB0XG5cdCAqIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgd2Vidmlld0FwaS5wb3N0TWVzc2FnZShjb250ZW50U2NyaXB0SWQsIG1lc3NhZ2UpO1xuXHQgKiBgYGBcblx0ICpcblx0ICogLSBgY29udGVudFNjcmlwdElkYCBpcyB0aGUgSUQgeW91J3ZlIGRlZmluZWQgd2hlbiB5b3UgcmVnaXN0ZXJlZCB0aGVcblx0ICogICBjb250ZW50IHNjcmlwdC4gWW91IGNhbiByZXRyaWV2ZSBpdCBmcm9tIHRoZVxuXHQgKiAgIHtAbGluayBDb250ZW50U2NyaXB0Q29udGV4dCB8IGNvbnRleHR9LlxuXHQgKiAtIGBtZXNzYWdlYCBjYW4gYmUgYW55IGJhc2ljIEphdmFTY3JpcHQgdHlwZSAobnVtYmVyLCBzdHJpbmcsIHBsYWluXG5cdCAqICAgb2JqZWN0KSwgYnV0IGl0IGNhbm5vdCBiZSBhIGZ1bmN0aW9uIG9yIGNsYXNzIGluc3RhbmNlLlxuXHQgKlxuXHQgKiBXaGVuIHlvdSBwb3N0IGEgbWVzc2FnZSwgdGhlIHBsdWdpbiBjYW4gc2VuZCBiYWNrIGEgYHJlc3BvbnNlYCB0aHVzXG5cdCAqIGFsbG93aW5nIHR3by13YXkgY29tbXVuaWNhdGlvbjpcblx0ICpcblx0ICogYGBgamF2YXNjcmlwdFxuXHQgKiBhd2FpdCBqb3BsaW4uY29udGVudFNjcmlwdHMub25NZXNzYWdlKGNvbnRlbnRTY3JpcHRJZCwgKG1lc3NhZ2UpID0+IHtcblx0ICogICAgIC8vIFByb2Nlc3MgbWVzc2FnZVxuXHQgKiAgICAgcmV0dXJuIHJlc3BvbnNlOyAvLyBDYW4gYmUgYW55IG9iamVjdCwgc3RyaW5nIG9yIG51bWJlclxuXHQgKiB9KTtcblx0ICogYGBgXG5cdCAqXG5cdCAqIFNlZSB7QGxpbmsgSm9wbGluQ29udGVudFNjcmlwdHMub25NZXNzYWdlfSBmb3IgbW9yZSBkZXRhaWxzLCBhcyB3ZWxsIGFzXG5cdCAqIHRoZSBbcG9zdE1lc3NhZ2Vcblx0ICogZGVtb10oaHR0cHM6Ly9naXRodWIuY29tL2xhdXJlbnQyMi9qb3BsaW4vdHJlZS9kZXYvcGFja2FnZXMvYXBwLWNsaS90ZXN0cy9zdXBwb3J0L3BsdWdpbnMvcG9zdF9tZXNzYWdlcykuXG5cdCAqXG5cdCAqICMjIFJlZ2lzdGVyaW5nIGFuIGV4aXN0aW5nIE1hcmtkb3duLWl0IHBsdWdpblxuXHQgKlxuXHQgKiBUbyBpbmNsdWRlIGEgcmVndWxhciBNYXJrZG93bi1JdCBwbHVnaW4sIHRoYXQgZG9lc24ndCBtYWtlIHVzZSBvZiBhbnlcblx0ICogSm9wbGluLXNwZWNpZmljIGZlYXR1cmVzLCB5b3Ugd291bGQgc2ltcGx5IGNyZWF0ZSBhIGZpbGUgc3VjaCBhcyB0aGlzOlxuXHQgKlxuXHQgKiBgYGBqYXZhc2NyaXB0XG5cdCAqIG1vZHVsZS5leHBvcnRzID0ge1xuXHQgKiAgICAgZGVmYXVsdDogZnVuY3Rpb24oY29udGV4dCkge1xuXHQgKiAgICAgICAgIHJldHVybiB7XG5cdCAqICAgICAgICAgICAgIHBsdWdpbjogcmVxdWlyZSgnbWFya2Rvd24taXQtdG9jLWRvbmUtcmlnaHQnKTtcblx0ICogICAgICAgICB9XG5cdCAqICAgICB9XG5cdCAqIH1cblx0ICogYGBgXG5cdCAqL1xuXHRNYXJrZG93bkl0UGx1Z2luID0gJ21hcmtkb3duSXRQbHVnaW4nLFxuXG5cdC8qKlxuXHQgKiBSZWdpc3RlcnMgYSBuZXcgQ29kZU1pcnJvciBwbHVnaW4sIHdoaWNoIHNob3VsZCBmb2xsb3cgdGhlIHRlbXBsYXRlXG5cdCAqIGJlbG93LlxuXHQgKlxuXHQgKiBgYGBqYXZhc2NyaXB0XG5cdCAqIG1vZHVsZS5leHBvcnRzID0ge1xuXHQgKiAgICAgZGVmYXVsdDogZnVuY3Rpb24oY29udGV4dCkge1xuXHQgKiAgICAgICAgIHJldHVybiB7XG5cdCAqICAgICAgICAgICAgIHBsdWdpbjogZnVuY3Rpb24oQ29kZU1pcnJvcikge1xuXHQgKiAgICAgICAgICAgICAgICAgLy8gLi4uXG5cdCAqICAgICAgICAgICAgIH0sXG5cdCAqICAgICAgICAgICAgIGNvZGVNaXJyb3JSZXNvdXJjZXM6IFtdLFxuXHQgKiAgICAgICAgICAgICBjb2RlTWlycm9yT3B0aW9uczoge1xuXHQgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAuLi5cblx0ICogICAgICAgICAgICAgICAgICAgICAgIH0sXG5cdCAqICAgICAgICAgICAgIGFzc2V0czoge1xuXHQgKiAgICAgICAgICAgICAgICAgLy8gLi4uXG5cdCAqICAgICAgICAgICAgIH0sXG5cdCAqICAgICAgICAgfVxuXHQgKiAgICAgfVxuXHQgKiB9XG5cdCAqIGBgYFxuXHQgKlxuXHQgKiAtIFRoZSBgY29udGV4dGAgYXJndW1lbnQgaXMgY3VycmVudGx5IHVudXNlZCBidXQgY291bGQgYmUgdXNlZCBsYXRlciBvblxuXHQgKiAgIHRvIHByb3ZpZGUgYWNjZXNzIHRvIHlvdXIgb3duIHBsdWdpbiBzbyB0aGF0IHRoZSBjb250ZW50IHNjcmlwdCBhbmRcblx0ICogICBwbHVnaW4gY2FuIGNvbW11bmljYXRlLlxuXHQgKlxuXHQgKiAtIFRoZSBgcGx1Z2luYCBrZXkgaXMgeW91ciBDb2RlTWlycm9yIHBsdWdpbi4gVGhpcyBpcyB3aGVyZSB5b3UgY2FuXG5cdCAqICAgcmVnaXN0ZXIgbmV3IGNvbW1hbmRzIHdpdGggQ29kZU1pcnJvciBvciBpbnRlcmFjdCB3aXRoIHRoZSBDb2RlTWlycm9yXG5cdCAqICAgaW5zdGFuY2UgYXMgbmVlZGVkLlxuXHQgKlxuXHQgKiAtIFRoZSBgY29kZU1pcnJvclJlc291cmNlc2Aga2V5IGlzIGFuIGFycmF5IG9mIENvZGVNaXJyb3IgcmVzb3VyY2VzIHRoYXRcblx0ICogICB3aWxsIGJlIGxvYWRlZCBhbmQgYXR0YWNoZWQgdG8gdGhlIENvZGVNaXJyb3IgbW9kdWxlLiBUaGVzZSBhcmUgbWFkZSB1cFxuXHQgKiAgIG9mIGFkZG9ucywga2V5bWFwcywgYW5kIG1vZGVzLiBGb3IgZXhhbXBsZSwgZm9yIGEgcGx1Z2luIHRoYXQgd2FudCdzIHRvXG5cdCAqICAgZW5hYmxlIGNsb2p1cmUgaGlnaGxpZ2h0aW5nIGluIGNvZGUgYmxvY2tzLiBgY29kZU1pcnJvclJlc291cmNlc2Agd291bGRcblx0ICogICBiZSBzZXQgdG8gYFsnbW9kZS9jbG9qdXJlL2Nsb2p1cmUnXWAuXG5cdCAqXG5cdCAqIC0gVGhlIGBjb2RlTWlycm9yT3B0aW9uc2Aga2V5IGNvbnRhaW5zIGFsbCB0aGVcblx0ICogICBbQ29kZU1pcnJvcl0oaHR0cHM6Ly9jb2RlbWlycm9yLm5ldC9kb2MvbWFudWFsLmh0bWwjY29uZmlnKSBvcHRpb25zXG5cdCAqICAgdGhhdCB3aWxsIGJlIHNldCBvciBjaGFuZ2VkIGJ5IHRoaXMgcGx1Z2luLiBOZXcgb3B0aW9ucyBjYW4gYWxzZSBiZVxuXHQgKiAgIGRlY2xhcmVkIHZpYVxuXHQgKiAgIFtgQ29kZU1pcnJvci5kZWZpbmVPcHRpb25gXShodHRwczovL2NvZGVtaXJyb3IubmV0L2RvYy9tYW51YWwuaHRtbCNkZWZpbmVPcHRpb24pLFxuXHQgKiAgIGFuZCB0aGVuIGhhdmUgdGhlaXIgdmFsdWUgc2V0IGhlcmUuIEZvciBleGFtcGxlLCBhIHBsdWdpbiB0aGF0IGVuYWJsZXNcblx0ICogICBsaW5lIG51bWJlcnMgd291bGQgc2V0IGBjb2RlTWlycm9yT3B0aW9uc2AgdG8gYHsnbGluZU51bWJlcnMnOiB0cnVlfWAuXG5cdCAqXG5cdCAqIC0gVXNpbmcgdGhlICoqb3B0aW9uYWwqKiBgYXNzZXRzYCBrZXkgeW91IG1heSBzcGVjaWZ5ICoqb25seSoqIENTUyBhc3NldHNcblx0ICogICB0aGF0IHNob3VsZCBiZSBsb2FkZWQgaW4gdGhlIHJlbmRlcmVkIEhUTUwgZG9jdW1lbnQuIENoZWNrIGZvciBleGFtcGxlXG5cdCAqICAgdGhlIEpvcGxpbiBbTWVybWFpZFxuXHQgKiAgIHBsdWdpbl0oaHR0cHM6Ly9naXRodWIuY29tL2xhdXJlbnQyMi9qb3BsaW4vYmxvYi9kZXYvcGFja2FnZXMvcmVuZGVyZXIvTWRUb0h0bWwvcnVsZXMvbWVybWFpZC50cylcblx0ICogICB0byBzZWUgaG93IHRoZSBkYXRhIHNob3VsZCBiZSBzdHJ1Y3R1cmVkLlxuXHQgKlxuXHQgKiBPbmUgb2YgdGhlIGBwbHVnaW5gLCBgY29kZU1pcnJvclJlc291cmNlc2AsIG9yIGBjb2RlTWlycm9yT3B0aW9uc2Aga2V5c1xuXHQgKiBtdXN0IGJlIHByb3ZpZGVkIGZvciB0aGUgcGx1Z2luIHRvIGJlIHZhbGlkLiBIYXZpbmcgbXVsdGlwbGUgb3IgYWxsXG5cdCAqIHByb3ZpZGVkIGlzIGFsc28gb2theS5cblx0ICpcblx0ICogU2VlIGFsc28gdGhlIFtkZW1vXG5cdCAqIHBsdWdpbl0oaHR0cHM6Ly9naXRodWIuY29tL2xhdXJlbnQyMi9qb3BsaW4vdHJlZS9kZXYvcGFja2FnZXMvYXBwLWNsaS90ZXN0cy9zdXBwb3J0L3BsdWdpbnMvY29kZW1pcnJvcl9jb250ZW50X3NjcmlwdClcblx0ICogZm9yIGFuIGV4YW1wbGUgb2YgYWxsIHRoZXNlIGtleXMgYmVpbmcgdXNlZCBpbiBvbmUgcGx1Z2luLlxuXHQgKlxuXHQgKiAjIyBQb3N0aW5nIG1lc3NhZ2VzIGZyb20gdGhlIGNvbnRlbnQgc2NyaXB0IHRvIHlvdXIgcGx1Z2luXG5cdCAqXG5cdCAqIEluIG9yZGVyIHRvIHBvc3QgbWVzc2FnZXMgdG8gdGhlIHBsdWdpbiwgeW91IGNhbiB1c2UgdGhlIHBvc3RNZXNzYWdlXG5cdCAqIGZ1bmN0aW9uIHBhc3NlZCB0byB0aGUge0BsaW5rIENvbnRlbnRTY3JpcHRDb250ZXh0IHwgY29udGV4dH0uXG5cdCAqXG5cdCAqIGBgYGphdmFzY3JpcHRcblx0ICogY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBjb250ZXh0LnBvc3RNZXNzYWdlKCdtZXNzYWdlRnJvbUNvZGVNaXJyb3JDb250ZW50U2NyaXB0Jyk7XG5cdCAqIGBgYFxuXHQgKlxuXHQgKiBXaGVuIHlvdSBwb3N0IGEgbWVzc2FnZSwgdGhlIHBsdWdpbiBjYW4gc2VuZCBiYWNrIGEgYHJlc3BvbnNlYCB0aHVzXG5cdCAqIGFsbG93aW5nIHR3by13YXkgY29tbXVuaWNhdGlvbjpcblx0ICpcblx0ICogYGBgamF2YXNjcmlwdFxuXHQgKiBhd2FpdCBqb3BsaW4uY29udGVudFNjcmlwdHMub25NZXNzYWdlKGNvbnRlbnRTY3JpcHRJZCwgKG1lc3NhZ2UpID0+IHtcblx0ICogICAgIC8vIFByb2Nlc3MgbWVzc2FnZVxuXHQgKiAgICAgcmV0dXJuIHJlc3BvbnNlOyAvLyBDYW4gYmUgYW55IG9iamVjdCwgc3RyaW5nIG9yIG51bWJlclxuXHQgKiB9KTtcblx0ICogYGBgXG5cdCAqXG5cdCAqIFNlZSB7QGxpbmsgSm9wbGluQ29udGVudFNjcmlwdHMub25NZXNzYWdlfSBmb3IgbW9yZSBkZXRhaWxzLCBhcyB3ZWxsIGFzXG5cdCAqIHRoZSBbcG9zdE1lc3NhZ2Vcblx0ICogZGVtb10oaHR0cHM6Ly9naXRodWIuY29tL2xhdXJlbnQyMi9qb3BsaW4vdHJlZS9kZXYvcGFja2FnZXMvYXBwLWNsaS90ZXN0cy9zdXBwb3J0L3BsdWdpbnMvcG9zdF9tZXNzYWdlcykuXG5cdCAqXG5cdCAqL1xuXHRDb2RlTWlycm9yUGx1Z2luID0gJ2NvZGVNaXJyb3JQbHVnaW4nLFxufVxuIiwiaW1wb3J0IGpvcGxpbiBmcm9tICdhcGknO1xuaW1wb3J0IHsgVG9vbGJhckJ1dHRvbkxvY2F0aW9uIH0gZnJvbSAnYXBpL3R5cGVzJztcbmltcG9ydCB7IFNldHRpbmdJdGVtVHlwZSB9IGZyb20gJ2FwaS90eXBlcyc7XG5cbmltcG9ydCB7XG5cdFdlYlZpZXdNZXNzYWdlXG59IGZyb20gXCIuL2NvbW1vbi9tZXNzYWdlXCI7XG5cbmltcG9ydCBodG1sIGZyb20gXCIuL3dlYnZpZXcvaHRtbC5qc1wiO1xuXG5jb25zdCBTRVRUSU5HX1RPUF9MSU5FUyA9ICdub2FoLnNlYXJjaC50b3BfbGluZXMnO1xuY29uc3QgU0VUVElOR19CT1RUT01fTElORVMgPSAnbm9haC5zZWFyY2guYm90dG9tX2xpbmVzJztcblxubGV0IHBhbmVsSWQ6IHN0cmluZyA9IG51bGw7XG5sZXQgYWN0aXZlOiBib29sZWFuID0gdHJ1ZTtcblxuYXN5bmMgZnVuY3Rpb24gaW5pdFNldHRpbmdzKCkge1xuXHRjb25zdCBTRUNUSU9OID0gJ1NlYXJjaCc7XG5cblx0YXdhaXQgam9wbGluLnNldHRpbmdzLnJlZ2lzdGVyU2VjdGlvbihTRUNUSU9OLCB7XG5cdFx0ZGVzY3JpcHRpb246ICdTZWFyY2ggUGx1Z2luIFNldHRpbmdzJyxcblx0XHRsYWJlbDogJ1NlYXJjaCcsXG5cdFx0aWNvbk5hbWU6ICdmYXMgZmEtc2VhcmNoJ1xuXHR9KTtcblxuXHRhd2FpdCBqb3BsaW4uc2V0dGluZ3MucmVnaXN0ZXJTZXR0aW5ncyh7XG5cdFx0W1NFVFRJTkdfVE9QX0xJTkVTXTogeyBcblx0XHRcdHB1YmxpYzogdHJ1ZSxcblx0XHRcdHNlY3Rpb246IFNFQ1RJT04sXG5cdFx0XHR0eXBlOiBTZXR0aW5nSXRlbVR5cGUuSW50LFxuXHRcdFx0dmFsdWU6IDMsXG5cdFx0XHRsYWJlbDogXCJUaGUgbGluZXMncyBjb3VudCBzaG93biBhYm92ZSB0aGF0IHNlYXJjaCByZXN1bHQuXCIsXG5cdFx0fSxcblx0XHRbU0VUVElOR19CT1RUT01fTElORVNdOiB7XG5cdFx0XHRwdWJsaWM6IHRydWUsXG5cdFx0XHRzZWN0aW9uOiBTRUNUSU9OLFxuXHRcdFx0dHlwZTogU2V0dGluZ0l0ZW1UeXBlLkludCxcblx0XHRcdHZhbHVlOiAzLFxuXHRcdFx0bGFiZWw6IFwiVGhlIGxpbmVzJ3MgY291bnQgc2hvd24gYWZ0ZXIgdGhhdCBzZWFyY2ggcmVzdWx0LlwiLFxuXHRcdH1cblx0fSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGluaXRQYW5lbCgpIHtcblx0cGFuZWxJZCA9IGF3YWl0IGpvcGxpbi52aWV3cy5wYW5lbHMuY3JlYXRlKFwiZ3JhcGhcIik7XG5cblx0YXdhaXQgam9wbGluLnZpZXdzLnBhbmVscy5zZXRIdG1sKFxuXHRcdHBhbmVsSWQsIGh0bWxcblx0KTtcblxuXHRqb3BsaW4udmlld3MucGFuZWxzLmFkZFNjcmlwdChwYW5lbElkLCBcIi4vd2Vidmlldy9qcXVlcnkubWluLmpzXCIpO1xuXHRqb3BsaW4udmlld3MucGFuZWxzLmFkZFNjcmlwdChwYW5lbElkLCBcIi4vd2Vidmlldy93ZWJ2aWV3LmNzc1wiKTtcblx0am9wbGluLnZpZXdzLnBhbmVscy5hZGRTY3JpcHQocGFuZWxJZCwgXCIuL3dlYnZpZXcvd2Vidmlldy5qc1wiKTtcblxuXHRqb3BsaW4udmlld3MucGFuZWxzLm9uTWVzc2FnZShwYW5lbElkLCBhc3luYyAobWVzc2FnZTogV2ViVmlld01lc3NhZ2UpOiBQcm9taXNlPGFueT4gPT4ge1xuXHRcdFxuXG5cdFx0cmV0dXJuIG51bGw7XG5cdH0pO1xuXG5cdGFsZXJ0KFwic3RhcnQ/P1wiKTtcblxuXHR0cnlcblx0e1xuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IGpvcGxpbi52aWV3cy5wYW5lbHMucG9zdE1lc3NhZ2UocGFuZWxJZCwge1xuXHRcdFx0ZXZlbnQ6IFwidGVzdFwiLFxuXHRcdFx0dmFsdWU6IFwiaGVsbG8gd29ybGRcIlxuXHRcdH0pO1xuXG5cdFx0YWxlcnQocmVzKTtcblx0fSBjYXRjaChlcnIpXG5cdHtcblx0XHRhbGVydChTdHJpbmcoZXJyKSk7XG5cdH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gc2hvd1BhbmVsKHNob3c6IGJvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkKSB7XG5cdGlmIChzaG93ID09PSBudWxsIHx8IHNob3cgPT09IHVuZGVmaW5lZClcblx0e1xuXHRcdHNob3cgPSBhY3RpdmU7XG5cdH0gZWxzZVxuXHRhY3RpdmUgPSBzaG93O1xuXG5cdGF3YWl0IGpvcGxpbi52aWV3cy5wYW5lbHMuc2hvdyhwYW5lbElkLCBhY3RpdmUpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBpbml0Q29tbWFuZHMoKSB7XG5cdGpvcGxpbi5jb21tYW5kcy5yZWdpc3Rlcih7XG5cdFx0bmFtZTogXCJ0b2dnbGVTZWFyY2hcIixcblx0XHRsYWJlbDogXCJ0b2dnbGUgc2VhcmNoIHZpZXdcIixcblx0XHRpY29uTmFtZTogXCJmYXMgZmEtc2VhcmNoXCIsXG5cdFx0ZXhlY3V0ZTogYXN5bmMgKCkgPT4ge1xuXHRcdFx0c2hvd1BhbmVsKCFhY3RpdmUpO1xuXHRcdH0sXG5cdH0pO1xuXG5cdGpvcGxpbi52aWV3cy50b29sYmFyQnV0dG9ucy5jcmVhdGUoXG5cdFx0XCJ0b2dnbGVTZWFyY2hcIixcblx0XHRcInRvZ2dsZVNlYXJjaFwiLFxuXHRcdFRvb2xiYXJCdXR0b25Mb2NhdGlvbi5Ob3RlVG9vbGJhclxuXHQpO1xufVxuXG5qb3BsaW4ucGx1Z2lucy5yZWdpc3Rlcih7XG5cdG9uU3RhcnQ6IGFzeW5jIGZ1bmN0aW9uKCkge1xuXHRcdGF3YWl0IGluaXRTZXR0aW5ncygpO1xuXG5cdFx0YXdhaXQgaW5pdENvbW1hbmRzKCk7XG5cdFx0YXdhaXQgaW5pdFBhbmVsKCk7XG5cblx0XHRzaG93UGFuZWwoYWN0aXZlKTtcblx0fSxcbn0pO1xuIiwiZXhwb3J0IGRlZmF1bHQgYFxuPGRpdiBjbGFzcz1cInNlYXJjaC1wYW5lbCBjbGVhcmZpeFwiPlxuICAgIDxkaXYgY2xhc3M9XCJzZWFyY2gtaW5wdXQgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImtleXdvcmRcIiBwbGFjZWhvbGRlcj1cImtleXdvcmQgZm9yIHNlYXJjaFwiLz5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJpc19yZWdleFwiLz4gcmVnZXhcbiAgICA8L2Rpdj5cblxuICAgIDxoci8+XG5cbiAgICA8ZGl2IGNsYXNzPVwic2VhcmNoLXRpcFwiPjwvZGl2PlxuXG4gICAgPHByZSBjbGFzcz1cInNlYXJjaC1yZXN1bHRcIj48L3ByZT5cblxuICAgIDxkaXYgY2xhc3M9XCJlcnJvclwiPjwvZGl2PlxuPC9kaXY+XG5gOyJdLCJzb3VyY2VSb290IjoiIn0=