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
        yield api_1.default.views.panels.setHtml(panelId, `
<div class="container">
	Test for demo
	<button>this is button</button>
</div>
		`);
        api_1.default.views.panels.addScript(panelId, "./webview/jquery.min.js");
        api_1.default.views.panels.addScript(panelId, "./webview/webview.js");
        api_1.default.views.panels.onMessage(panelId, (message) => __awaiter(this, void 0, void 0, function* () {
            return null;
        }));
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


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBpL2luZGV4LnRzIiwid2VicGFjazovLy8uL2FwaS90eXBlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDOUVBLGtCQUFlLE1BQU0sQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUNKdEIsb0VBQW9FO0FBQ3BFLG9CQUFvQjtBQUNwQixvRUFBb0U7OztBQXdEcEUsb0VBQW9FO0FBQ3BFLG9CQUFvQjtBQUNwQixvRUFBb0U7QUFFcEUsSUFBWSxjQUdYO0FBSEQsV0FBWSxjQUFjO0lBQ3pCLCtCQUFhO0lBQ2IseUNBQXVCO0FBQ3hCLENBQUMsRUFIVyxjQUFjLEdBQWQsc0JBQWMsS0FBZCxzQkFBYyxRQUd6QjtBQUVELElBQVksd0JBR1g7QUFIRCxXQUFZ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USxDQUFDO1lBQ3hCLElBQUksRUFBRSxjQUFjO1lBQ3BCLEtBQUssRUFBRSxvQkFBb0I7WUFDM0IsUUFBUSxFQUFFLGVBQWU7WUFDekIsT0FBTyxFQUFFLEdBQVMsRUFBRTtnQkFDbkIsU0FBUyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEIsQ0FBQztTQUNELENBQUMsQ0FBQztRQUVILGFBQU0sQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FDakMsY0FBYyxFQUNkLGNBQWMsRUFDZCw2QkFBcUIsQ0FBQyxXQUFXLENBQ2pDLENBQUM7SUFDSCxDQUFDO0NBQUE7QUFFRCxhQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztJQUN2QixPQUFPLEVBQUU7O1lBQ1IsTUFBTSxZQUFZLEVBQUUsQ0FBQztZQUVyQixNQUFNLFlBQVksRUFBRSxDQUFDO1lBQ3JCLE1BQU0sU0FBUyxFQUFFLENBQUM7WUFFbEIsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ25CLENBQUM7S0FBQTtDQUNELENBQUMsQ0FBQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiaW1wb3J0IHR5cGUgSm9wbGluIGZyb20gJy4vSm9wbGluJztcblxuZGVjbGFyZSBjb25zdCBqb3BsaW46IEpvcGxpbjtcblxuZXhwb3J0IGRlZmF1bHQgam9wbGluO1xuIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIENvbW1hbmQgQVBJIHR5cGVzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbW1hbmQge1xuXHQvKipcblx0ICogTmFtZSBvZiBjb21tYW5kIC0gbXVzdCBiZSBnbG9iYWxseSB1bmlxdWVcblx0ICovXG5cdG5hbWU6IHN0cmluZztcblxuXHQvKipcblx0ICogTGFiZWwgdG8gYmUgZGlzcGxheWVkIG9uIG1lbnUgaXRlbXMgb3Iga2V5Ym9hcmQgc2hvcnRjdXQgZWRpdG9yIGZvciBleGFtcGxlLlxuXHQgKiBJZiBpdCBpcyBtaXNzaW5nLCBpdCdzIGFzc3VtZWQgaXQncyBhIHByaXZhdGUgY29tbWFuZCwgdG8gYmUgY2FsbGVkIHByb2dyYW1tYXRpY2FsbHkgb25seS5cblx0ICogSW4gdGhhdCBjYXNlIHRoZSBjb21tYW5kIHdpbGwgbm90IGFwcGVhciBpbiB0aGUgc2hvcnRjdXQgZWRpdG9yIG9yIGNvbW1hbmQgcGFuZWwsIGFuZCBsb2dpY2FsbHlcblx0ICogc2hvdWxkIG5vdCBiZSB1c2VkIGFzIGEgbWVudSBpdGVtLlxuXHQgKi9cblx0bGFiZWw/OiBzdHJpbmc7XG5cblx0LyoqXG5cdCAqIEljb24gdG8gYmUgdXNlZCBvbiB0b29sYmFyIGJ1dHRvbnMgZm9yIGV4YW1wbGVcblx0ICovXG5cdGljb25OYW1lPzogc3RyaW5nO1xuXG5cdC8qKlxuXHQgKiBDb2RlIHRvIGJlIHJhbiB3aGVuIHRoZSBjb21tYW5kIGlzIGV4ZWN1dGVkLiBJdCBtYXkgcmV0dXJuIGEgcmVzdWx0LlxuXHQgKi9cblx0ZXhlY3V0ZSguLi5hcmdzOiBhbnlbXSk6IFByb21pc2U8YW55IHwgdm9pZD47XG5cblx0LyoqXG5cdCAqIERlZmluZXMgd2hldGhlciB0aGUgY29tbWFuZCBzaG91bGQgYmUgZW5hYmxlZCBvciBkaXNhYmxlZCwgd2hpY2ggaW4gdHVybnNcblx0ICogYWZmZWN0cyB0aGUgZW5hYmxlZCBzdGF0ZSBvZiBhbnkgYXNzb2NpYXRlZCBidXR0b24gb3IgbWVudSBpdGVtLlxuXHQgKlxuXHQgKiBUaGUgY29uZGl0aW9uIHNob3VsZCBiZSBleHByZXNzZWQgYXMgYSBcIndoZW4tY2xhdXNlXCIgKGFzIGluIFZpc3VhbCBTdHVkaW9cblx0ICogQ29kZSkuIEl0J3MgYSBzaW1wbGUgYm9vbGVhbiBleHByZXNzaW9uIHRoYXQgZXZhbHVhdGVzIHRvIGB0cnVlYCBvclxuXHQgKiBgZmFsc2VgLiBJdCBzdXBwb3J0cyB0aGUgZm9sbG93aW5nIG9wZXJhdG9yczpcblx0ICpcblx0ICogT3BlcmF0b3IgfCBTeW1ib2wgfCBFeGFtcGxlXG5cdCAqIC0tIHwgLS0gfCAtLVxuXHQgKiBFcXVhbGl0eSB8ID09IHwgXCJlZGl0b3JUeXBlID09IG1hcmtkb3duXCJcblx0ICogSW5lcXVhbGl0eSB8ICE9IHwgXCJjdXJyZW50U2NyZWVuICE9IGNvbmZpZ1wiXG5cdCAqIE9yIHwgXFx8XFx8IHwgXCJub3RlSXNUb2RvIFxcfFxcfCBub3RlVG9kb0NvbXBsZXRlZFwiXG5cdCAqIEFuZCB8ICYmIHwgXCJvbmVOb3RlU2VsZWN0ZWQgJiYgIWluQ29uZmxpY3RGb2xkZXJcIlxuXHQgKlxuXHQgKiBKb3BsaW4sIHVubGlrZSBWU0NvZGUsIGFsc28gc3VwcG9ydHMgcGFyZW50aGVzaXMsIHdoaWNoIGFsbG93cyBjcmVhdGluZ1xuXHQgKiBtb3JlIGNvbXBsZXggZXhwcmVzc2lvbnMgc3VjaCBhcyBgY29uZDEgfHwgKGNvbmQyICYmIGNvbmQzKWAuIE9ubHkgb25lXG5cdCAqIGxldmVsIG9mIHBhcmVudGhlc2lzIGlzIHBvc3NpYmxlIChuZXN0ZWQgb25lcyBhcmVuJ3Qgc3VwcG9ydGVkKS5cblx0ICpcblx0ICogQ3VycmVudGx5IHRoZSBzdXBwb3J0ZWQgY29udGV4dCB2YXJpYWJsZXMgYXJlbid0IGRvY3VtZW50ZWQsIGJ1dCB5b3UgY2FuXG5cdCAqIGZpbmQgdGhlIGxpc3QgYmVsb3c6XG5cdCAqXG5cdCAqIC0gW0dsb2JhbCBXaGVuIENsYXVzZXNdKGh0dHBzOi8vZ2l0aHViLmNvbS9sYXVyZW50MjIvam9wbGluL2Jsb2IvZGV2L3BhY2thZ2VzL2xpYi9zZXJ2aWNlcy9jb21tYW5kcy9zdGF0ZVRvV2hlbkNsYXVzZUNvbnRleHQudHMpXG5cdCAqIC0gW0Rlc2t0b3AgYXBwIFdoZW4gQ2xhdXNlc10oaHR0cHM6Ly9naXRodWIuY29tL2xhdXJlbnQyMi9qb3BsaW4vYmxvYi9kZXYvcGFja2FnZXMvYXBwLWRlc2t0b3Avc2VydmljZXMvY29tbWFuZHMvc3RhdGVUb1doZW5DbGF1c2VDb250ZXh0LnRzKVxuXHQgKlxuXHQgKiBOb3RlOiBDb21tYW5kcyBhcmUgZW5hYmxlZCBieSBkZWZhdWx0IHVubGVzcyB5b3UgdXNlIHRoaXMgcHJvcGVydHkuXG5cdCAqL1xuXHRlbmFibGVkQ29uZGl0aW9uPzogc3RyaW5nO1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gSW50ZXJvcCBBUEkgdHlwZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBlbnVtIEZpbGVTeXN0ZW1JdGVtIHtcblx0RmlsZSA9ICdmaWxlJyxcblx0RGlyZWN0b3J5ID0gJ2RpcmVjdG9yeScsXG59XG5cbmV4cG9ydCBlbnVtIEltcG9ydE1vZHVsZU91dHB1dEZvcm1hdCB7XG5cdE1hcmtkb3duID0gJ21kJyxcblx0SHRtbCA9ICdodG1sJyxcbn1cblxuLyoqXG4gKiBVc2VkIHRvIGltcGxlbWVudCBhIG1vZHVsZSB0byBleHBvcnQgZGF0YSBmcm9tIEpvcGxpbi4gW1ZpZXcgdGhlIGRlbW8gcGx1Z2luXShodHRwczovL2dpdGh1Yi5jb20vbGF1cmVudDIyL2pvcGxpbi90cmVlL2Rldi9wYWNrYWdlcy9hcHAtY2xpL3Rlc3RzL3N1cHBvcnQvcGx1Z2lucy9qc29uX2V4cG9ydCkgZm9yIGFuIGV4YW1wbGUuXG4gKlxuICogSW4gZ2VuZXJhbCwgYWxsIHRoZSBldmVudCBoYW5kbGVycyB5b3UnbGwgbmVlZCB0byBpbXBsZW1lbnQgdGFrZSBhIGBjb250ZXh0YCBvYmplY3QgYXMgYSBmaXJzdCBhcmd1bWVudC4gVGhpcyBvYmplY3Qgd2lsbCBjb250YWluIHRoZSBleHBvcnQgb3IgaW1wb3J0IHBhdGggYXMgd2VsbCBhcyB2YXJpb3VzIG9wdGlvbmFsIHByb3BlcnRpZXMsIHN1Y2ggYXMgd2hpY2ggbm90ZXMgb3Igbm90ZWJvb2tzIG5lZWQgdG8gYmUgZXhwb3J0ZWQuXG4gKlxuICogVG8gZ2V0IGEgYmV0dGVyIHNlbnNlIG9mIHdoYXQgaXQgd2lsbCBjb250YWluIGl0IGNhbiBiZSB1c2VmdWwgdG8gcHJpbnQgaXQgdXNpbmcgYGNvbnNvbGUuaW5mbyhjb250ZXh0KWAuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRXhwb3J0TW9kdWxlIHtcblx0LyoqXG5cdCAqIFRoZSBmb3JtYXQgdG8gYmUgZXhwb3J0ZWQsIGVnIFwiZW5leFwiLCBcImpleFwiLCBcImpzb25cIiwgZXRjLlxuXHQgKi9cblx0Zm9ybWF0OiBzdHJpbmc7XG5cblx0LyoqXG5cdCAqIFRoZSBkZXNjcmlwdGlvbiB0aGF0IHdpbGwgYXBwZWFyIGluIHRoZSBVSSwgZm9yIGV4YW1wbGUgaW4gdGhlIG1lbnUgaXRlbS5cblx0ICovXG5cdGRlc2NyaXB0aW9uOiBzdHJpbmc7XG5cblx0LyoqXG5cdCAqIFdoZXRoZXIgdGhlIG1vZHVsZSB3aWxsIGV4cG9ydCBhIHNpbmdsZSBmaWxlIG9yIG11bHRpcGxlIGZpbGVzIGluIGEgZGlyZWN0b3J5LiBJdCBhZmZlY3RzIHRoZSBvcGVuIGRpYWxvZyB0aGF0IHdpbGwgYmUgcHJlc2VudGVkIHRvIHRoZSB1c2VyIHdoZW4gdXNpbmcgeW91ciBleHBvcnRlci5cblx0ICovXG5cdHRhcmdldDogRmlsZVN5c3RlbUl0ZW07XG5cblx0LyoqXG5cdCAqIE9ubHkgYXBwbGllcyB0byBzaW5nbGUgZmlsZSBleHBvcnRlcnMgb3IgaW1wb3J0ZXJzXG5cdCAqIEl0IHRlbGxzIHdoZXRoZXIgdGhlIGZvcm1hdCBjYW4gcGFja2FnZSBtdWx0aXBsZSBub3RlcyBpbnRvIG9uZSBmaWxlLlxuXHQgKiBGb3IgZXhhbXBsZSBKRVggb3IgRU5FWCBjYW4sIGJ1dCBIVE1MIGNhbm5vdC5cblx0ICovXG5cdGlzTm90ZUFyY2hpdmU6IGJvb2xlYW47XG5cblx0LyoqXG5cdCAqIFRoZSBleHRlbnNpb25zIG9mIHRoZSBmaWxlcyBleHBvcnRlZCBieSB5b3VyIG1vZHVsZS4gRm9yIGV4YW1wbGUsIGl0IGlzIGBbXCJodG1cIiwgXCJodG1sXCJdYCBmb3IgdGhlIEhUTUwgbW9kdWxlLCBhbmQganVzdCBgW1wiamV4XCJdYCBmb3IgdGhlIEpFWCBtb2R1bGUuXG5cdCAqL1xuXHRmaWxlRXh0ZW5zaW9ucz86IHN0cmluZ1tdO1xuXG5cdC8qKlxuXHQgKiBDYWxsZWQgd2hlbiB0aGUgZXhwb3J0IHByb2Nlc3Mgc3RhcnRzLlxuXHQgKi9cblx0b25Jbml0KGNvbnRleHQ6IEV4cG9ydENvbnRleHQpOiBQcm9taXNlPHZvaWQ+O1xuXG5cdC8qKlxuXHQgKiBDYWxsZWQgd2hlbiBhbiBpdGVtIG5lZWRzIHRvIGJlIHByb2Nlc3NlZC4gQW4gXCJpdGVtXCIgY2FuIGJlIGFueSBKb3BsaW4gb2JqZWN0LCBzdWNoIGFzIGEgbm90ZSwgYSBmb2xkZXIsIGEgbm90ZWJvb2ssIGV0Yy5cblx0ICovXG5cdG9uUHJvY2Vzc0l0ZW0oY29udGV4dDogRXhwb3J0Q29udGV4dCwgaXRlbVR5cGU6IG51bWJlciwgaXRlbTogYW55KTogUHJvbWlzZTx2b2lkPjtcblxuXHQvKipcblx0ICogQ2FsbGVkIHdoZW4gYSByZXNvdXJjZSBmaWxlIG5lZWRzIHRvIGJlIGV4cG9ydGVkLlxuXHQgKi9cblx0b25Qcm9jZXNzUmVzb3VyY2UoY29udGV4dDogRXhwb3J0Q29udGV4dCwgcmVzb3VyY2U6IGFueSwgZmlsZVBhdGg6IHN0cmluZyk6IFByb21pc2U8dm9pZD47XG5cblx0LyoqXG5cdCAqIENhbGxlZCB3aGVuIHRoZSBleHBvcnQgcHJvY2VzcyBpcyBkb25lLlxuXHQgKi9cblx0b25DbG9zZShjb250ZXh0OiBFeHBvcnRDb250ZXh0KTogUHJvbWlzZTx2b2lkPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJbXBvcnRNb2R1bGUge1xuXHQvKipcblx0ICogVGhlIGZvcm1hdCB0byBiZSBleHBvcnRlZCwgZWcgXCJlbmV4XCIsIFwiamV4XCIsIFwianNvblwiLCBldGMuXG5cdCAqL1xuXHRmb3JtYXQ6IHN0cmluZztcblxuXHQvKipcblx0ICogVGhlIGRlc2NyaXB0aW9uIHRoYXQgd2lsbCBhcHBlYXIgaW4gdGhlIFVJLCBmb3IgZXhhbXBsZSBpbiB0aGUgbWVudSBpdGVtLlxuXHQgKi9cblx0ZGVzY3JpcHRpb246IHN0cmluZztcblxuXHQvKipcblx0ICogT25seSBhcHBsaWVzIHRvIHNpbmdsZSBmaWxlIGV4cG9ydGVycyBvciBpbXBvcnRlcnNcblx0ICogSXQgdGVsbHMgd2hldGhlciB0aGUgZm9ybWF0IGNhbiBwYWNrYWdlIG11bHRpcGxlIG5vdGVzIGludG8gb25lIGZpbGUuXG5cdCAqIEZvciBleGFtcGxlIEpFWCBvciBFTkVYIGNhbiwgYnV0IEhUTUwgY2Fubm90LlxuXHQgKi9cblx0aXNOb3RlQXJjaGl2ZTogYm9vbGVhbjtcblxuXHQvKipcblx0ICogVGhlIHR5cGUgb2Ygc291cmNlcyB0aGF0IGFyZSBzdXBwb3J0ZWQgYnkgdGhlIG1vZHVsZS4gVGVsbHMgd2hldGhlciB0aGUgbW9kdWxlIGNhbiBpbXBvcnQgZmlsZXMgb3IgZGlyZWN0b3JpZXMgb3IgYm90aC5cblx0ICovXG5cdHNvdXJjZXM6IEZpbGVTeXN0ZW1JdGVtW107XG5cblx0LyoqXG5cdCAqIFRlbGxzIHRoZSBmaWxlIGV4dGVuc2lvbnMgb2YgdGhlIGV4cG9ydGVkIGZpbGVzLlxuXHQgKi9cblx0ZmlsZUV4dGVuc2lvbnM/OiBzdHJpbmdbXTtcblxuXHQvKipcblx0ICogVGVsbHMgdGhlIHR5cGUgb2Ygbm90ZXMgdGhhdCB3aWxsIGJlIGdlbmVyYXRlZCwgZWl0aGVyIEhUTUwgb3IgTWFya2Rvd24gKGRlZmF1bHQpLlxuXHQgKi9cblx0b3V0cHV0Rm9ybWF0PzogSW1wb3J0TW9kdWxlT3V0cHV0Rm9ybWF0O1xuXG5cdC8qKlxuXHQgKiBDYWxsZWQgd2hlbiB0aGUgaW1wb3J0IHByb2Nlc3Mgc3RhcnRzLiBUaGVyZSBpcyBvbmx5IG9uZSBldmVudCBoYW5kbGVyIHdpdGhpbiB3aGljaCB5b3Ugc2hvdWxkIGltcG9ydCB0aGUgY29tcGxldGUgZGF0YS5cblx0ICovXG5cdG9uRXhlYyhjb250ZXh0OiBJbXBvcnRDb250ZXh0KTogUHJvbWlzZTx2b2lkPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFeHBvcnRPcHRpb25zIHtcblx0Zm9ybWF0Pzogc3RyaW5nO1xuXHRwYXRoPzogc3RyaW5nO1xuXHRzb3VyY2VGb2xkZXJJZHM/OiBzdHJpbmdbXTtcblx0c291cmNlTm90ZUlkcz86IHN0cmluZ1tdO1xuXHQvLyBtb2R1bGVQYXRoPzogc3RyaW5nO1xuXHR0YXJnZXQ/OiBGaWxlU3lzdGVtSXRlbTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFeHBvcnRDb250ZXh0IHtcblx0ZGVzdFBhdGg6IHN0cmluZztcblx0b3B0aW9uczogRXhwb3J0T3B0aW9ucztcblxuXHQvKipcblx0ICogWW91IGNhbiBhdHRhY2ggeW91ciBvd24gY3VzdG9tIGRhdGEgdXNpbmcgdGhpcyBwcm9wZXJ5IC0gaXQgd2lsbCB0aGVuIGJlIHBhc3NlZCB0byBlYWNoIGV2ZW50IGhhbmRsZXIsIGFsbG93aW5nIHlvdSB0byBrZWVwIHN0YXRlIGZyb20gb25lIGV2ZW50IHRvIHRoZSBuZXh0LlxuXHQgKi9cblx0dXNlckRhdGE/OiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW1wb3J0Q29udGV4dCB7XG5cdHNvdXJjZVBhdGg6IHN0cmluZztcblx0b3B0aW9uczogYW55O1xuXHR3YXJuaW5nczogc3RyaW5nW107XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBNaXNjIHR5cGVzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgaW50ZXJmYWNlIFNjcmlwdCB7XG5cdG9uU3RhcnQ/KGV2ZW50OiBhbnkpOiBQcm9taXNlPHZvaWQ+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERpc3Bvc2FibGUge1xuXHQvLyBkaXNwb3NlKCk6dm9pZDtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE1lbnUgdHlwZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3JlYXRlTWVudUl0ZW1PcHRpb25zIHtcblx0YWNjZWxlcmF0b3I6IHN0cmluZztcbn1cblxuZXhwb3J0IGVudW0gTWVudUl0ZW1Mb2NhdGlvbiB7XG5cdEZpbGUgPSAnZmlsZScsXG5cdEVkaXQgPSAnZWRpdCcsXG5cdFZpZXcgPSAndmlldycsXG5cdE5vdGUgPSAnbm90ZScsXG5cdFRvb2xzID0gJ3Rvb2xzJyxcblx0SGVscCA9ICdoZWxwJyxcblxuXHQvKipcblx0ICogQGRlcHJlY2F0ZWQgRG8gbm90IHVzZSAtIHNhbWUgYXMgTm90ZUxpc3RDb250ZXh0TWVudVxuXHQgKi9cblx0Q29udGV4dCA9ICdjb250ZXh0JyxcblxuXHQvLyBJZiBhZGRpbmcgYW4gaXRlbSBoZXJlLCBkb24ndCBmb3JnZXQgdG8gdXBkYXRlIGlzQ29udGV4dE1lbnVJdGVtTG9jYXRpb24oKVxuXG5cdC8qKlxuXHQgKiBXaGVuIGEgY29tbWFuZCBpcyBjYWxsZWQgZnJvbSB0aGUgbm90ZSBsaXN0IGNvbnRleHQgbWVudSwgdGhlXG5cdCAqIGNvbW1hbmQgd2lsbCByZWNlaXZlIHRoZSBmb2xsb3dpbmcgYXJndW1lbnRzOlxuXHQgKlxuXHQgKiAtIGBub3RlSWRzOnN0cmluZ1tdYDogSURzIG9mIHRoZSBub3RlcyB0aGF0IHdlcmUgcmlnaHQtY2xpY2tlZCBvbi5cblx0ICovXG5cdE5vdGVMaXN0Q29udGV4dE1lbnUgPSAnbm90ZUxpc3RDb250ZXh0TWVudScsXG5cblx0RWRpdG9yQ29udGV4dE1lbnUgPSAnZWRpdG9yQ29udGV4dE1lbnUnLFxuXG5cdC8qKlxuXHQgKiBXaGVuIGEgY29tbWFuZCBpcyBjYWxsZWQgZnJvbSBhIGZvbGRlciBjb250ZXh0IG1lbnUsIHRoZVxuXHQgKiBjb21tYW5kIHdpbGwgcmVjZWl2ZSB0aGUgZm9sbG93aW5nIGFyZ3VtZW50czpcblx0ICpcblx0ICogLSBgZm9sZGVySWQ6c3RyaW5nYDogSUQgb2YgdGhlIGZvbGRlciB0aGF0IHdhcyByaWdodC1jbGlja2VkIG9uXG5cdCAqL1xuXHRGb2xkZXJDb250ZXh0TWVudSA9ICdmb2xkZXJDb250ZXh0TWVudScsXG5cblx0LyoqXG5cdCAqIFdoZW4gYSBjb21tYW5kIGlzIGNhbGxlZCBmcm9tIGEgdGFnIGNvbnRleHQgbWVudSwgdGhlXG5cdCAqIGNvbW1hbmQgd2lsbCByZWNlaXZlIHRoZSBmb2xsb3dpbmcgYXJndW1lbnRzOlxuXHQgKlxuXHQgKiAtIGB0YWdJZDpzdHJpbmdgOiBJRCBvZiB0aGUgdGFnIHRoYXQgd2FzIHJpZ2h0LWNsaWNrZWQgb25cblx0ICovXG5cdFRhZ0NvbnRleHRNZW51ID0gJ3RhZ0NvbnRleHRNZW51Jyxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQ29udGV4dE1lbnVJdGVtTG9jYXRpb24obG9jYXRpb246IE1lbnVJdGVtTG9jYXRpb24pOiBib29sZWFuIHtcblx0cmV0dXJuIFtcblx0XHRNZW51SXRlbUxvY2F0aW9uLkNvbnRleHQsXG5cdFx0TWVudUl0ZW1Mb2NhdGlvbi5Ob3RlTGlzdENvbnRleHRNZW51LFxuXHRcdE1lbnVJdGVtTG9jYXRpb24uRWRpdG9yQ29udGV4dE1lbnUsXG5cdFx0TWVudUl0ZW1Mb2NhdGlvbi5Gb2xkZXJDb250ZXh0TWVudSxcblx0XHRNZW51SXRlbUxvY2F0aW9uLlRhZ0NvbnRleHRNZW51LFxuXHRdLmluY2x1ZGVzKGxvY2F0aW9uKTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNZW51SXRlbSB7XG5cdC8qKlxuXHQgKiBDb21tYW5kIHRoYXQgc2hvdWxkIGJlIGFzc29jaWF0ZWQgd2l0aCB0aGUgbWVudSBpdGVtLiBBbGwgbWVudSBpdGVtIHNob3VsZFxuXHQgKiBoYXZlIGEgY29tbWFuZCBhc3NvY2lhdGVkIHdpdGggdGhlbSB1bmxlc3MgdGhleSBhcmUgYSBzdWItbWVudS5cblx0ICovXG5cdGNvbW1hbmROYW1lPzogc3RyaW5nO1xuXG5cdC8qKlxuXHQgKiBBY2NlbGVyYXRvciBhc3NvY2lhdGVkIHdpdGggdGhlIG1lbnUgaXRlbVxuXHQgKi9cblx0YWNjZWxlcmF0b3I/OiBzdHJpbmc7XG5cblx0LyoqXG5cdCAqIE1lbnUgaXRlbXMgdGhhdCBzaG91bGQgYXBwZWFyIGJlbG93IHRoaXMgbWVudSBpdGVtLiBBbGxvd3MgY3JlYXRpbmcgYSBtZW51IHRyZWUuXG5cdCAqL1xuXHRzdWJtZW51PzogTWVudUl0ZW1bXTtcblxuXHQvKipcblx0ICogTWVudSBpdGVtIGxhYmVsLiBJZiBub3Qgc3BlY2lmaWVkLCB0aGUgY29tbWFuZCBsYWJlbCB3aWxsIGJlIHVzZWQgaW5zdGVhZC5cblx0ICovXG5cdGxhYmVsPzogc3RyaW5nO1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gVmlldyBBUEkgdHlwZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBpbnRlcmZhY2UgQnV0dG9uU3BlYyB7XG5cdGlkOiBCdXR0b25JZDtcblx0dGl0bGU/OiBzdHJpbmc7XG5cdG9uQ2xpY2s/KCk6IHZvaWQ7XG59XG5cbmV4cG9ydCB0eXBlIEJ1dHRvbklkID0gc3RyaW5nO1xuXG5leHBvcnQgZW51bSBUb29sYmFyQnV0dG9uTG9jYXRpb24ge1xuXHQvKipcblx0ICogVGhpcyB0b29sYmFyIGluIHRoZSB0b3AgcmlnaHQgY29ybmVyIG9mIHRoZSBhcHBsaWNhdGlvbi4gSXQgYXBwbGllcyB0byB0aGUgbm90ZSBhcyBhIHdob2xlLCBpbmNsdWRpbmcgaXRzIG1ldGFkYXRhLlxuXHQgKi9cblx0Tm90ZVRvb2xiYXIgPSAnbm90ZVRvb2xiYXInLFxuXG5cdC8qKlxuXHQgKiBUaGlzIHRvb2xiYXIgaXMgcmlnaHQgYWJvdmUgdGhlIHRleHQgZWRpdG9yLiBJdCBhcHBsaWVzIHRvIHRoZSBub3RlIGJvZHkgb25seS5cblx0ICovXG5cdEVkaXRvclRvb2xiYXIgPSAnZWRpdG9yVG9vbGJhcicsXG59XG5cbmV4cG9ydCB0eXBlIFZpZXdIYW5kbGUgPSBzdHJpbmc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRWRpdG9yQ29tbWFuZCB7XG5cdG5hbWU6IHN0cmluZztcblx0dmFsdWU/OiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGlhbG9nUmVzdWx0IHtcblx0aWQ6IEJ1dHRvbklkO1xuXHRmb3JtRGF0YT86IGFueTtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFNldHRpbmdzIHR5cGVzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgZW51bSBTZXR0aW5nSXRlbVR5cGUge1xuXHRJbnQgPSAxLFxuXHRTdHJpbmcgPSAyLFxuXHRCb29sID0gMyxcblx0QXJyYXkgPSA0LFxuXHRPYmplY3QgPSA1LFxuXHRCdXR0b24gPSA2LFxufVxuXG4vLyBSZWRlZmluZSBhIHNpbXBsaWZpZWQgaW50ZXJmYWNlIHRvIG1hc2sgaW50ZXJuYWwgZGV0YWlsc1xuLy8gYW5kIHRvIHJlbW92ZSBmdW5jdGlvbiBjYWxscyBhcyB0aGV5IHdvdWxkIGhhdmUgdG8gYmUgYXN5bmMuXG5leHBvcnQgaW50ZXJmYWNlIFNldHRpbmdJdGVtIHtcblx0dmFsdWU6IGFueTtcblx0dHlwZTogU2V0dGluZ0l0ZW1UeXBlO1xuXG5cdGxhYmVsOiBzdHJpbmc7XG5cdGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuXG5cdC8qKlxuXHQgKiBBIHB1YmxpYyBzZXR0aW5nIHdpbGwgYXBwZWFyIGluIHRoZSBDb25maWd1cmF0aW9uIHNjcmVlbiBhbmQgd2lsbCBiZVxuXHQgKiBtb2RpZmlhYmxlIGJ5IHRoZSB1c2VyLiBBIHByaXZhdGUgc2V0dGluZyBob3dldmVyIHdpbGwgbm90IGFwcGVhciB0aGVyZSxcblx0ICogYW5kIGNhbiBvbmx5IGJlIGNoYW5nZWQgcHJvZ3JhbW1hdGljYWxseS4gWW91IG1heSB1c2UgdGhpcyB0byBzdG9yZSBzb21lXG5cdCAqIHZhbHVlcyB0aGF0IHlvdSBkbyBub3Qgd2FudCB0byBkaXJlY3RseSBleHBvc2UuXG5cdCAqL1xuXHRwdWJsaWM6IGJvb2xlYW47XG5cblx0LyoqXG5cdCAqIFlvdSB3b3VsZCB1c3VhbGx5IHNldCB0aGlzIHRvIGEgc2VjdGlvbiB5b3Ugd291bGQgaGF2ZSBjcmVhdGVkXG5cdCAqIHNwZWNpZmljYWxseSBmb3IgdGhlIHBsdWdpbi5cblx0ICovXG5cdHNlY3Rpb24/OiBzdHJpbmc7XG5cblx0LyoqXG5cdCAqIFRvIGNyZWF0ZSBhIHNldHRpbmcgd2l0aCBtdWx0aXBsZSBvcHRpb25zLCBzZXQgdGhpcyBwcm9wZXJ0eSB0byBgdHJ1ZWAuXG5cdCAqIFRoYXQgc2V0dGluZyB3aWxsIHJlbmRlciBhcyBhIGRyb3Bkb3duIGxpc3QgaW4gdGhlIGNvbmZpZ3VyYXRpb24gc2NyZWVuLlxuXHQgKi9cblx0aXNFbnVtPzogYm9vbGVhbjtcblxuXHQvKipcblx0ICogVGhpcyBwcm9wZXJ0eSBpcyByZXF1aXJlZCB3aGVuIGBpc0VudW1gIGlzIGB0cnVlYC4gSW4gd2hpY2ggY2FzZSwgaXRcblx0ICogc2hvdWxkIGNvbnRhaW4gYSBtYXAgb2YgdmFsdWUgPT4gbGFiZWwuXG5cdCAqL1xuXHRvcHRpb25zPzogUmVjb3JkPGFueSwgYW55PjtcblxuXHQvKipcblx0ICogUmVzZXJ2ZWQgcHJvcGVydHkuIE5vdCB1c2VkIGF0IHRoZSBtb21lbnQuXG5cdCAqL1xuXHRhcHBUeXBlcz86IHN0cmluZ1tdO1xuXG5cdC8qKlxuXHQgKiBTZXQgdGhpcyB0byBgdHJ1ZWAgdG8gc3RvcmUgc2VjdXJlIGRhdGEsIHN1Y2ggYXMgcGFzc3dvcmRzLiBBbnkgc3VjaFxuXHQgKiBzZXR0aW5nIHdpbGwgYmUgc3RvcmVkIGluIHRoZSBzeXN0ZW0ga2V5Y2hhaW4gaWYgb25lIGlzIGF2YWlsYWJsZS5cblx0ICovXG5cdHNlY3VyZT86IGJvb2xlYW47XG5cblx0LyoqXG5cdCAqIEFuIGFkdmFuY2VkIHNldHRpbmcgd2lsbCBiZSBtb3ZlZCB1bmRlciB0aGUgXCJBZHZhbmNlZFwiIGJ1dHRvbiBpbiB0aGVcblx0ICogY29uZmlnIHNjcmVlbi5cblx0ICovXG5cdGFkdmFuY2VkPzogYm9vbGVhbjtcblxuXHQvKipcblx0ICogU2V0IHRoZSBtaW4sIG1heCBhbmQgc3RlcCB2YWx1ZXMgaWYgeW91IHdhbnQgdG8gcmVzdHJpY3QgYW4gaW50IHNldHRpbmdcblx0ICogdG8gYSBwYXJ0aWN1bGFyIHJhbmdlLlxuXHQgKi9cblx0bWluaW11bT86IG51bWJlcjtcblx0bWF4aW11bT86IG51bWJlcjtcblx0c3RlcD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZXR0aW5nU2VjdGlvbiB7XG5cdGxhYmVsOiBzdHJpbmc7XG5cdGljb25OYW1lPzogc3RyaW5nO1xuXHRkZXNjcmlwdGlvbj86IHN0cmluZztcblx0bmFtZT86IHN0cmluZztcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERhdGEgQVBJIHR5cGVzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vKipcbiAqIEFuIGFycmF5IG9mIGF0IGxlYXN0IG9uZSBlbGVtZW50IGFuZCBhdCBtb3N0IHRocmVlIGVsZW1lbnRzLlxuICpcbiAqIC0gKipbMF0qKjogUmVzb3VyY2UgbmFtZSAoZWcuIFwibm90ZXNcIiwgXCJmb2xkZXJzXCIsIFwidGFnc1wiLCBldGMuKVxuICogLSAqKlsxXSoqOiAoT3B0aW9uYWwpIFJlc291cmNlIElELlxuICogLSAqKlsyXSoqOiAoT3B0aW9uYWwpIFJlc291cmNlIGxpbmsuXG4gKi9cbmV4cG9ydCB0eXBlIFBhdGggPSBzdHJpbmdbXTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIENvbnRlbnQgU2NyaXB0IHR5cGVzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgdHlwZSBQb3N0TWVzc2FnZUhhbmRsZXIgPSAoaWQ6IHN0cmluZywgbWVzc2FnZTogYW55KT0+IFByb21pc2U8YW55PjtcblxuLyoqXG4gKiBXaGVuIGEgY29udGVudCBzY3JpcHQgaXMgaW5pdGlhbGlzZWQsIGl0IHJlY2VpdmVzIGEgYGNvbnRleHRgIG9iamVjdC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDb250ZW50U2NyaXB0Q29udGV4dCB7XG5cdC8qKlxuXHQgKiBUaGUgcGx1Z2luIElEIHRoYXQgcmVnaXN0ZXJlZCB0aGlzIGNvbnRlbnQgc2NyaXB0XG5cdCAqL1xuXHRwbHVnaW5JZDogc3RyaW5nO1xuXG5cdC8qKlxuXHQgKiBUaGUgY29udGVudCBzY3JpcHQgSUQsIHdoaWNoIG1heSBiZSBuZWNlc3NhcnkgdG8gcG9zdCBtZXNzYWdlc1xuXHQgKi9cblx0Y29udGVudFNjcmlwdElkOiBzdHJpbmc7XG5cblx0LyoqXG5cdCAqIENhbiBiZSB1c2VkIGJ5IENvZGVNaXJyb3IgY29udGVudCBzY3JpcHRzIHRvIHBvc3QgYSBtZXNzYWdlIHRvIHRoZSBwbHVnaW5cblx0ICovXG5cdHBvc3RNZXNzYWdlOiBQb3N0TWVzc2FnZUhhbmRsZXI7XG59XG5cbmV4cG9ydCBlbnVtIENvbnRlbnRTY3JpcHRUeXBlIHtcblx0LyoqXG5cdCAqIFJlZ2lzdGVycyBhIG5ldyBNYXJrZG93bi1JdCBwbHVnaW4sIHdoaWNoIHNob3VsZCBmb2xsb3cgdGhlIHRlbXBsYXRlXG5cdCAqIGJlbG93LlxuXHQgKlxuXHQgKiBgYGBqYXZhc2NyaXB0XG5cdCAqIG1vZHVsZS5leHBvcnRzID0ge1xuXHQgKiAgICAgZGVmYXVsdDogZnVuY3Rpb24oY29udGV4dCkge1xuXHQgKiAgICAgICAgIHJldHVybiB7XG5cdCAqICAgICAgICAgICAgIHBsdWdpbjogZnVuY3Rpb24obWFya2Rvd25JdCwgb3B0aW9ucykge1xuXHQgKiAgICAgICAgICAgICAgICAgLy8gLi4uXG5cdCAqICAgICAgICAgICAgIH0sXG5cdCAqICAgICAgICAgICAgIGFzc2V0czoge1xuXHQgKiAgICAgICAgICAgICAgICAgLy8gLi4uXG5cdCAqICAgICAgICAgICAgIH0sXG5cdCAqICAgICAgICAgfVxuXHQgKiAgICAgfVxuXHQgKiB9XG5cdCAqIGBgYFxuXHQgKiBTZWUgW3RoZVxuXHQgKiBkZW1vXShodHRwczovL2dpdGh1Yi5jb20vbGF1cmVudDIyL2pvcGxpbi90cmVlL2Rldi9wYWNrYWdlcy9hcHAtY2xpL3Rlc3RzL3N1cHBvcnQvcGx1Z2lucy9jb250ZW50X3NjcmlwdClcblx0ICogZm9yIGEgc2ltcGxlIE1hcmtkb3duLWl0IHBsdWdpbiBleGFtcGxlLlxuXHQgKlxuXHQgKiAjIyBFeHBvcnRlZCBtZW1iZXJzXG5cdCAqXG5cdCAqIC0gVGhlIGBjb250ZXh0YCBhcmd1bWVudCBpcyBjdXJyZW50bHkgdW51c2VkIGJ1dCBjb3VsZCBiZSB1c2VkIGxhdGVyIG9uXG5cdCAqICAgdG8gcHJvdmlkZSBhY2Nlc3MgdG8geW91ciBvd24gcGx1Z2luIHNvIHRoYXQgdGhlIGNvbnRlbnQgc2NyaXB0IGFuZFxuXHQgKiAgIHBsdWdpbiBjYW4gY29tbXVuaWNhdGUuXG5cdCAqXG5cdCAqIC0gVGhlICoqcmVxdWlyZWQqKiBgcGx1Z2luYCBrZXkgaXMgdGhlIGFjdHVhbCBNYXJrZG93bi1JdCBwbHVnaW4gLSBjaGVja1xuXHQgKiAgIHRoZSBbb2ZmaWNpYWwgZG9jXShodHRwczovL2dpdGh1Yi5jb20vbWFya2Rvd24taXQvbWFya2Rvd24taXQpIGZvciBtb3JlXG5cdCAqICAgaW5mb3JtYXRpb24uIFRoZSBgb3B0aW9uc2AgcGFyYW1ldGVyIGlzIG9mIHR5cGVcblx0ICogICBbUnVsZU9wdGlvbnNdKGh0dHBzOi8vZ2l0aHViLmNvbS9sYXVyZW50MjIvam9wbGluL2Jsb2IvZGV2L3BhY2thZ2VzL3JlbmRlcmVyL01kVG9IdG1sLnRzKSxcblx0ICogICB3aGljaCBjb250YWlucyBhIG51bWJlciBvZiBvcHRpb25zLCBtb3N0bHkgdXNlZnVsIGZvciBKb3BsaW4ncyBpbnRlcm5hbFxuXHQgKiAgIGNvZGUuXG5cdCAqXG5cdCAqIC0gVXNpbmcgdGhlICoqb3B0aW9uYWwqKiBgYXNzZXRzYCBrZXkgeW91IG1heSBzcGVjaWZ5IGFzc2V0cyBzdWNoIGFzIEpTXG5cdCAqICAgb3IgQ1NTIHRoYXQgc2hvdWxkIGJlIGxvYWRlZCBpbiB0aGUgcmVuZGVyZWQgSFRNTCBkb2N1bWVudC4gQ2hlY2sgZm9yXG5cdCAqICAgZXhhbXBsZSB0aGUgSm9wbGluIFtNZXJtYWlkXG5cdCAqICAgcGx1Z2luXShodHRwczovL2dpdGh1Yi5jb20vbGF1cmVudDIyL2pvcGxpbi9ibG9iL2Rldi9wYWNrYWdlcy9yZW5kZXJlci9NZFRvSHRtbC9ydWxlcy9tZXJtYWlkLnRzKVxuXHQgKiAgIHRvIHNlZSBob3cgdGhlIGRhdGEgc2hvdWxkIGJlIHN0cnVjdHVyZWQuXG5cdCAqXG5cdCAqICMjIFBvc3RpbmcgbWVzc2FnZXMgZnJvbSB0aGUgY29udGVudCBzY3JpcHQgdG8geW91ciBwbHVnaW5cblx0ICpcblx0ICogVGhlIGFwcGxpY2F0aW9uIHByb3ZpZGVzIHRoZSBmb2xsb3dpbmcgZnVuY3Rpb24gdG8gYWxsb3cgZXhlY3V0aW5nXG5cdCAqIGNvbW1hbmRzIGZyb20gdGhlIHJlbmRlcmVkIEhUTUwgY29kZTpcblx0ICpcblx0ICogYGBgamF2YXNjcmlwdFxuXHQgKiBjb25zdCByZXNwb25zZSA9IGF3YWl0IHdlYnZpZXdBcGkucG9zdE1lc3NhZ2UoY29udGVudFNjcmlwdElkLCBtZXNzYWdlKTtcblx0ICogYGBgXG5cdCAqXG5cdCAqIC0gYGNvbnRlbnRTY3JpcHRJZGAgaXMgdGhlIElEIHlvdSd2ZSBkZWZpbmVkIHdoZW4geW91IHJlZ2lzdGVyZWQgdGhlXG5cdCAqICAgY29udGVudCBzY3JpcHQuIFlvdSBjYW4gcmV0cmlldmUgaXQgZnJvbSB0aGVcblx0ICogICB7QGxpbmsgQ29udGVudFNjcmlwdENvbnRleHQgfCBjb250ZXh0fS5cblx0ICogLSBgbWVzc2FnZWAgY2FuIGJlIGFueSBiYXNpYyBKYXZhU2NyaXB0IHR5cGUgKG51bWJlciwgc3RyaW5nLCBwbGFpblxuXHQgKiAgIG9iamVjdCksIGJ1dCBpdCBjYW5ub3QgYmUgYSBmdW5jdGlvbiBvciBjbGFzcyBpbnN0YW5jZS5cblx0ICpcblx0ICogV2hlbiB5b3UgcG9zdCBhIG1lc3NhZ2UsIHRoZSBwbHVnaW4gY2FuIHNlbmQgYmFjayBhIGByZXNwb25zZWAgdGh1c1xuXHQgKiBhbGxvd2luZyB0d28td2F5IGNvbW11bmljYXRpb246XG5cdCAqXG5cdCAqIGBgYGphdmFzY3JpcHRcblx0ICogYXdhaXQgam9wbGluLmNvbnRlbnRTY3JpcHRzLm9uTWVzc2FnZShjb250ZW50U2NyaXB0SWQsIChtZXNzYWdlKSA9PiB7XG5cdCAqICAgICAvLyBQcm9jZXNzIG1lc3NhZ2Vcblx0ICogICAgIHJldHVybiByZXNwb25zZTsgLy8gQ2FuIGJlIGFueSBvYmplY3QsIHN0cmluZyBvciBudW1iZXJcblx0ICogfSk7XG5cdCAqIGBgYFxuXHQgKlxuXHQgKiBTZWUge0BsaW5rIEpvcGxpbkNvbnRlbnRTY3JpcHRzLm9uTWVzc2FnZX0gZm9yIG1vcmUgZGV0YWlscywgYXMgd2VsbCBhc1xuXHQgKiB0aGUgW3Bvc3RNZXNzYWdlXG5cdCAqIGRlbW9dKGh0dHBzOi8vZ2l0aHViLmNvbS9sYXVyZW50MjIvam9wbGluL3RyZWUvZGV2L3BhY2thZ2VzL2FwcC1jbGkvdGVzdHMvc3VwcG9ydC9wbHVnaW5zL3Bvc3RfbWVzc2FnZXMpLlxuXHQgKlxuXHQgKiAjIyBSZWdpc3RlcmluZyBhbiBleGlzdGluZyBNYXJrZG93bi1pdCBwbHVnaW5cblx0ICpcblx0ICogVG8gaW5jbHVkZSBhIHJlZ3VsYXIgTWFya2Rvd24tSXQgcGx1Z2luLCB0aGF0IGRvZXNuJ3QgbWFrZSB1c2Ugb2YgYW55XG5cdCAqIEpvcGxpbi1zcGVjaWZpYyBmZWF0dXJlcywgeW91IHdvdWxkIHNpbXBseSBjcmVhdGUgYSBmaWxlIHN1Y2ggYXMgdGhpczpcblx0ICpcblx0ICogYGBgamF2YXNjcmlwdFxuXHQgKiBtb2R1bGUuZXhwb3J0cyA9IHtcblx0ICogICAgIGRlZmF1bHQ6IGZ1bmN0aW9uKGNvbnRleHQpIHtcblx0ICogICAgICAgICByZXR1cm4ge1xuXHQgKiAgICAgICAgICAgICBwbHVnaW46IHJlcXVpcmUoJ21hcmtkb3duLWl0LXRvYy1kb25lLXJpZ2h0Jyk7XG5cdCAqICAgICAgICAgfVxuXHQgKiAgICAgfVxuXHQgKiB9XG5cdCAqIGBgYFxuXHQgKi9cblx0TWFya2Rvd25JdFBsdWdpbiA9ICdtYXJrZG93bkl0UGx1Z2luJyxcblxuXHQvKipcblx0ICogUmVnaXN0ZXJzIGEgbmV3IENvZGVNaXJyb3IgcGx1Z2luLCB3aGljaCBzaG91bGQgZm9sbG93IHRoZSB0ZW1wbGF0ZVxuXHQgKiBiZWxvdy5cblx0ICpcblx0ICogYGBgamF2YXNjcmlwdFxuXHQgKiBtb2R1bGUuZXhwb3J0cyA9IHtcblx0ICogICAgIGRlZmF1bHQ6IGZ1bmN0aW9uKGNvbnRleHQpIHtcblx0ICogICAgICAgICByZXR1cm4ge1xuXHQgKiAgICAgICAgICAgICBwbHVnaW46IGZ1bmN0aW9uKENvZGVNaXJyb3IpIHtcblx0ICogICAgICAgICAgICAgICAgIC8vIC4uLlxuXHQgKiAgICAgICAgICAgICB9LFxuXHQgKiAgICAgICAgICAgICBjb2RlTWlycm9yUmVzb3VyY2VzOiBbXSxcblx0ICogICAgICAgICAgICAgY29kZU1pcnJvck9wdGlvbnM6IHtcblx0ICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gLi4uXG5cdCAqICAgICAgICAgICAgICAgICAgICAgICB9LFxuXHQgKiAgICAgICAgICAgICBhc3NldHM6IHtcblx0ICogICAgICAgICAgICAgICAgIC8vIC4uLlxuXHQgKiAgICAgICAgICAgICB9LFxuXHQgKiAgICAgICAgIH1cblx0ICogICAgIH1cblx0ICogfVxuXHQgKiBgYGBcblx0ICpcblx0ICogLSBUaGUgYGNvbnRleHRgIGFyZ3VtZW50IGlzIGN1cnJlbnRseSB1bnVzZWQgYnV0IGNvdWxkIGJlIHVzZWQgbGF0ZXIgb25cblx0ICogICB0byBwcm92aWRlIGFjY2VzcyB0byB5b3VyIG93biBwbHVnaW4gc28gdGhhdCB0aGUgY29udGVudCBzY3JpcHQgYW5kXG5cdCAqICAgcGx1Z2luIGNhbiBjb21tdW5pY2F0ZS5cblx0ICpcblx0ICogLSBUaGUgYHBsdWdpbmAga2V5IGlzIHlvdXIgQ29kZU1pcnJvciBwbHVnaW4uIFRoaXMgaXMgd2hlcmUgeW91IGNhblxuXHQgKiAgIHJlZ2lzdGVyIG5ldyBjb21tYW5kcyB3aXRoIENvZGVNaXJyb3Igb3IgaW50ZXJhY3Qgd2l0aCB0aGUgQ29kZU1pcnJvclxuXHQgKiAgIGluc3RhbmNlIGFzIG5lZWRlZC5cblx0ICpcblx0ICogLSBUaGUgYGNvZGVNaXJyb3JSZXNvdXJjZXNgIGtleSBpcyBhbiBhcnJheSBvZiBDb2RlTWlycm9yIHJlc291cmNlcyB0aGF0XG5cdCAqICAgd2lsbCBiZSBsb2FkZWQgYW5kIGF0dGFjaGVkIHRvIHRoZSBDb2RlTWlycm9yIG1vZHVsZS4gVGhlc2UgYXJlIG1hZGUgdXBcblx0ICogICBvZiBhZGRvbnMsIGtleW1hcHMsIGFuZCBtb2Rlcy4gRm9yIGV4YW1wbGUsIGZvciBhIHBsdWdpbiB0aGF0IHdhbnQncyB0b1xuXHQgKiAgIGVuYWJsZSBjbG9qdXJlIGhpZ2hsaWdodGluZyBpbiBjb2RlIGJsb2Nrcy4gYGNvZGVNaXJyb3JSZXNvdXJjZXNgIHdvdWxkXG5cdCAqICAgYmUgc2V0IHRvIGBbJ21vZGUvY2xvanVyZS9jbG9qdXJlJ11gLlxuXHQgKlxuXHQgKiAtIFRoZSBgY29kZU1pcnJvck9wdGlvbnNgIGtleSBjb250YWlucyBhbGwgdGhlXG5cdCAqICAgW0NvZGVNaXJyb3JdKGh0dHBzOi8vY29kZW1pcnJvci5uZXQvZG9jL21hbnVhbC5odG1sI2NvbmZpZykgb3B0aW9uc1xuXHQgKiAgIHRoYXQgd2lsbCBiZSBzZXQgb3IgY2hhbmdlZCBieSB0aGlzIHBsdWdpbi4gTmV3IG9wdGlvbnMgY2FuIGFsc2UgYmVcblx0ICogICBkZWNsYXJlZCB2aWFcblx0ICogICBbYENvZGVNaXJyb3IuZGVmaW5lT3B0aW9uYF0oaHR0cHM6Ly9jb2RlbWlycm9yLm5ldC9kb2MvbWFudWFsLmh0bWwjZGVmaW5lT3B0aW9uKSxcblx0ICogICBhbmQgdGhlbiBoYXZlIHRoZWlyIHZhbHVlIHNldCBoZXJlLiBGb3IgZXhhbXBsZSwgYSBwbHVnaW4gdGhhdCBlbmFibGVzXG5cdCAqICAgbGluZSBudW1iZXJzIHdvdWxkIHNldCBgY29kZU1pcnJvck9wdGlvbnNgIHRvIGB7J2xpbmVOdW1iZXJzJzogdHJ1ZX1gLlxuXHQgKlxuXHQgKiAtIFVzaW5nIHRoZSAqKm9wdGlvbmFsKiogYGFzc2V0c2Aga2V5IHlvdSBtYXkgc3BlY2lmeSAqKm9ubHkqKiBDU1MgYXNzZXRzXG5cdCAqICAgdGhhdCBzaG91bGQgYmUgbG9hZGVkIGluIHRoZSByZW5kZXJlZCBIVE1MIGRvY3VtZW50LiBDaGVjayBmb3IgZXhhbXBsZVxuXHQgKiAgIHRoZSBKb3BsaW4gW01lcm1haWRcblx0ICogICBwbHVnaW5dKGh0dHBzOi8vZ2l0aHViLmNvbS9sYXVyZW50MjIvam9wbGluL2Jsb2IvZGV2L3BhY2thZ2VzL3JlbmRlcmVyL01kVG9IdG1sL3J1bGVzL21lcm1haWQudHMpXG5cdCAqICAgdG8gc2VlIGhvdyB0aGUgZGF0YSBzaG91bGQgYmUgc3RydWN0dXJlZC5cblx0ICpcblx0ICogT25lIG9mIHRoZSBgcGx1Z2luYCwgYGNvZGVNaXJyb3JSZXNvdXJjZXNgLCBvciBgY29kZU1pcnJvck9wdGlvbnNgIGtleXNcblx0ICogbXVzdCBiZSBwcm92aWRlZCBmb3IgdGhlIHBsdWdpbiB0byBiZSB2YWxpZC4gSGF2aW5nIG11bHRpcGxlIG9yIGFsbFxuXHQgKiBwcm92aWRlZCBpcyBhbHNvIG9rYXkuXG5cdCAqXG5cdCAqIFNlZSBhbHNvIHRoZSBbZGVtb1xuXHQgKiBwbHVnaW5dKGh0dHBzOi8vZ2l0aHViLmNvbS9sYXVyZW50MjIvam9wbGluL3RyZWUvZGV2L3BhY2thZ2VzL2FwcC1jbGkvdGVzdHMvc3VwcG9ydC9wbHVnaW5zL2NvZGVtaXJyb3JfY29udGVudF9zY3JpcHQpXG5cdCAqIGZvciBhbiBleGFtcGxlIG9mIGFsbCB0aGVzZSBrZXlzIGJlaW5nIHVzZWQgaW4gb25lIHBsdWdpbi5cblx0ICpcblx0ICogIyMgUG9zdGluZyBtZXNzYWdlcyBmcm9tIHRoZSBjb250ZW50IHNjcmlwdCB0byB5b3VyIHBsdWdpblxuXHQgKlxuXHQgKiBJbiBvcmRlciB0byBwb3N0IG1lc3NhZ2VzIHRvIHRoZSBwbHVnaW4sIHlvdSBjYW4gdXNlIHRoZSBwb3N0TWVzc2FnZVxuXHQgKiBmdW5jdGlvbiBwYXNzZWQgdG8gdGhlIHtAbGluayBDb250ZW50U2NyaXB0Q29udGV4dCB8IGNvbnRleHR9LlxuXHQgKlxuXHQgKiBgYGBqYXZhc2NyaXB0XG5cdCAqIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgY29udGV4dC5wb3N0TWVzc2FnZSgnbWVzc2FnZUZyb21Db2RlTWlycm9yQ29udGVudFNjcmlwdCcpO1xuXHQgKiBgYGBcblx0ICpcblx0ICogV2hlbiB5b3UgcG9zdCBhIG1lc3NhZ2UsIHRoZSBwbHVnaW4gY2FuIHNlbmQgYmFjayBhIGByZXNwb25zZWAgdGh1c1xuXHQgKiBhbGxvd2luZyB0d28td2F5IGNvbW11bmljYXRpb246XG5cdCAqXG5cdCAqIGBgYGphdmFzY3JpcHRcblx0ICogYXdhaXQgam9wbGluLmNvbnRlbnRTY3JpcHRzLm9uTWVzc2FnZShjb250ZW50U2NyaXB0SWQsIChtZXNzYWdlKSA9PiB7XG5cdCAqICAgICAvLyBQcm9jZXNzIG1lc3NhZ2Vcblx0ICogICAgIHJldHVybiByZXNwb25zZTsgLy8gQ2FuIGJlIGFueSBvYmplY3QsIHN0cmluZyBvciBudW1iZXJcblx0ICogfSk7XG5cdCAqIGBgYFxuXHQgKlxuXHQgKiBTZWUge0BsaW5rIEpvcGxpbkNvbnRlbnRTY3JpcHRzLm9uTWVzc2FnZX0gZm9yIG1vcmUgZGV0YWlscywgYXMgd2VsbCBhc1xuXHQgKiB0aGUgW3Bvc3RNZXNzYWdlXG5cdCAqIGRlbW9dKGh0dHBzOi8vZ2l0aHViLmNvbS9sYXVyZW50MjIvam9wbGluL3RyZWUvZGV2L3BhY2thZ2VzL2FwcC1jbGkvdGVzdHMvc3VwcG9ydC9wbHVnaW5zL3Bvc3RfbWVzc2FnZXMpLlxuXHQgKlxuXHQgKi9cblx0Q29kZU1pcnJvclBsdWdpbiA9ICdjb2RlTWlycm9yUGx1Z2luJyxcbn1cbiIsImltcG9ydCBqb3BsaW4gZnJvbSAnYXBpJztcbmltcG9ydCB7IFRvb2xiYXJCdXR0b25Mb2NhdGlvbiB9IGZyb20gJ2FwaS90eXBlcyc7XG5pbXBvcnQgeyBTZXR0aW5nSXRlbVR5cGUgfSBmcm9tICdhcGkvdHlwZXMnO1xuXG5cbmltcG9ydCB7XG5cdFdlYlZpZXdNZXNzYWdlXG59IGZyb20gXCIuL2NvbW1vbi9tZXNzYWdlXCI7XG5cbmNvbnN0IFNFVFRJTkdfVE9QX0xJTkVTID0gJ25vYWguc2VhcmNoLnRvcF9saW5lcyc7XG5jb25zdCBTRVRUSU5HX0JPVFRPTV9MSU5FUyA9ICdub2FoLnNlYXJjaC5ib3R0b21fbGluZXMnO1xuXG5sZXQgcGFuZWxJZDogc3RyaW5nID0gbnVsbDtcbmxldCBhY3RpdmU6IGJvb2xlYW4gPSB0cnVlO1xuXG5hc3luYyBmdW5jdGlvbiBpbml0U2V0dGluZ3MoKSB7XG5cdGNvbnN0IFNFQ1RJT04gPSAnU2VhcmNoJztcblxuXHRhd2FpdCBqb3BsaW4uc2V0dGluZ3MucmVnaXN0ZXJTZWN0aW9uKFNFQ1RJT04sIHtcblx0XHRkZXNjcmlwdGlvbjogJ1NlYXJjaCBQbHVnaW4gU2V0dGluZ3MnLFxuXHRcdGxhYmVsOiAnU2VhcmNoJyxcblx0XHRpY29uTmFtZTogJ2ZhcyBmYS1zZWFyY2gnXG5cdH0pO1xuXG5cdGF3YWl0IGpvcGxpbi5zZXR0aW5ncy5yZWdpc3RlclNldHRpbmdzKHtcblx0XHRbU0VUVElOR19UT1BfTElORVNdOiB7IFxuXHRcdFx0cHVibGljOiB0cnVlLFxuXHRcdFx0c2VjdGlvbjogU0VDVElPTixcblx0XHRcdHR5cGU6IFNldHRpbmdJdGVtVHlwZS5JbnQsXG5cdFx0XHR2YWx1ZTogMyxcblx0XHRcdGxhYmVsOiBcIlRoZSBsaW5lcydzIGNvdW50IHNob3duIGFib3ZlIHRoYXQgc2VhcmNoIHJlc3VsdC5cIixcblx0XHR9LFxuXHRcdFtTRVRUSU5HX0JPVFRPTV9MSU5FU106IHtcblx0XHRcdHB1YmxpYzogdHJ1ZSxcblx0XHRcdHNlY3Rpb246IFNFQ1RJT04sXG5cdFx0XHR0eXBlOiBTZXR0aW5nSXRlbVR5cGUuSW50LFxuXHRcdFx0dmFsdWU6IDMsXG5cdFx0XHRsYWJlbDogXCJUaGUgbGluZXMncyBjb3VudCBzaG93biBhZnRlciB0aGF0IHNlYXJjaCByZXN1bHQuXCIsXG5cdFx0fVxuXHR9KTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gaW5pdFBhbmVsKCkge1xuXHRwYW5lbElkID0gYXdhaXQgam9wbGluLnZpZXdzLnBhbmVscy5jcmVhdGUoXCJncmFwaFwiKTtcblxuXHRhd2FpdCBqb3BsaW4udmlld3MucGFuZWxzLnNldEh0bWwoXG5cdFx0cGFuZWxJZCxcblx0XHRgXG48ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG5cdFRlc3QgZm9yIGRlbW9cblx0PGJ1dHRvbj50aGlzIGlzIGJ1dHRvbjwvYnV0dG9uPlxuPC9kaXY+XG5cdFx0YFxuXHQpO1xuXG5cdGpvcGxpbi52aWV3cy5wYW5lbHMuYWRkU2NyaXB0KHBhbmVsSWQsIFwiLi93ZWJ2aWV3L2pxdWVyeS5taW4uanNcIik7XG5cdGpvcGxpbi52aWV3cy5wYW5lbHMuYWRkU2NyaXB0KHBhbmVsSWQsIFwiLi93ZWJ2aWV3L3dlYnZpZXcuanNcIik7XG5cblx0am9wbGluLnZpZXdzLnBhbmVscy5vbk1lc3NhZ2UocGFuZWxJZCwgYXN5bmMgKG1lc3NhZ2U6IFdlYlZpZXdNZXNzYWdlKTogUHJvbWlzZTxhbnk+ID0+IHtcblx0XHRcblxuXHRcdHJldHVybiBudWxsO1xuXHR9KTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gc2hvd1BhbmVsKHNob3c6IGJvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkKSB7XG5cdGlmIChzaG93ID09PSBudWxsIHx8IHNob3cgPT09IHVuZGVmaW5lZClcblx0e1xuXHRcdHNob3cgPSBhY3RpdmU7XG5cdH0gZWxzZVxuXHRhY3RpdmUgPSBzaG93O1xuXG5cdGF3YWl0IGpvcGxpbi52aWV3cy5wYW5lbHMuc2hvdyhwYW5lbElkLCBhY3RpdmUpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBpbml0Q29tbWFuZHMoKSB7XG5cdGpvcGxpbi5jb21tYW5kcy5yZWdpc3Rlcih7XG5cdFx0bmFtZTogXCJ0b2dnbGVTZWFyY2hcIixcblx0XHRsYWJlbDogXCJ0b2dnbGUgc2VhcmNoIHZpZXdcIixcblx0XHRpY29uTmFtZTogXCJmYXMgZmEtc2VhcmNoXCIsXG5cdFx0ZXhlY3V0ZTogYXN5bmMgKCkgPT4ge1xuXHRcdFx0c2hvd1BhbmVsKCFhY3RpdmUpO1xuXHRcdH0sXG5cdH0pO1xuXG5cdGpvcGxpbi52aWV3cy50b29sYmFyQnV0dG9ucy5jcmVhdGUoXG5cdFx0XCJ0b2dnbGVTZWFyY2hcIixcblx0XHRcInRvZ2dsZVNlYXJjaFwiLFxuXHRcdFRvb2xiYXJCdXR0b25Mb2NhdGlvbi5Ob3RlVG9vbGJhclxuXHQpO1xufVxuXG5qb3BsaW4ucGx1Z2lucy5yZWdpc3Rlcih7XG5cdG9uU3RhcnQ6IGFzeW5jIGZ1bmN0aW9uKCkge1xuXHRcdGF3YWl0IGluaXRTZXR0aW5ncygpO1xuXG5cdFx0YXdhaXQgaW5pdENvbW1hbmRzKCk7XG5cdFx0YXdhaXQgaW5pdFBhbmVsKCk7XG5cblx0XHRzaG93UGFuZWwoYWN0aXZlKTtcblx0fSxcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==