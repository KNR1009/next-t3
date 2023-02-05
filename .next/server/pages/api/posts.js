"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/posts";
exports.ids = ["pages/api/posts"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ "(api)/./pages/api/posts.ts":
/*!****************************!*\
  !*** ./pages/api/posts.ts ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nasync function handler(req, res) {\n    try {\n        if (req.method === \"GET\") {\n            const result = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"http://127.0.0.1:3005/posts\").then((res)=>res.data);\n            return res.status(200).json(result);\n        }\n    } catch  {}\n    // GETメソットではない時\n    return res.status(500).json;\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcG9zdHMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBMEI7QUFVWCxlQUFlQyxRQUM1QkMsR0FBbUIsRUFDbkJDLEdBQTBCLEVBQzFCO0lBQ0EsSUFBSTtRQUNGLElBQUlELElBQUlFLE1BQU0sS0FBSyxPQUFPO1lBQ3hCLE1BQU1DLFNBQVMsTUFBTUwsaURBQ2YsQ0FBQywrQkFDSk8sSUFBSSxDQUFDLENBQUNKLE1BQVFBLElBQUlLLElBQUk7WUFDekIsT0FBT0wsSUFBSU0sTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ0w7UUFDOUIsQ0FBQztJQUNILEVBQUUsT0FBTSxDQUFDO0lBRVQsZUFBZTtJQUNmLE9BQU9GLElBQUlNLE1BQU0sQ0FBQyxLQUFLQyxJQUFJO0FBQzdCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LXQzLy4vcGFnZXMvYXBpL3Bvc3RzLnRzP2RkYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5cbnR5cGUgUG9zdCA9IHtcbiAgaWQ6IG51bWJlcjtcbiAgdGl0bGU6IHN0cmluZztcbiAgYm9keTogc3RyaW5nO1xuICBjcmVhdGVkX2F0OiBzdHJpbmc7XG4gIHVwZGF0ZWRfYXQ6IHN0cmluZztcbn07XG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxQb3N0PlxuKSB7XG4gIHRyeSB7XG4gICAgaWYgKHJlcS5tZXRob2QgPT09IFwiR0VUXCIpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zXG4gICAgICAgIC5nZXQoXCJodHRwOi8vMTI3LjAuMC4xOjMwMDUvcG9zdHNcIilcbiAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmRhdGEpO1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3VsdCk7XG4gICAgfVxuICB9IGNhdGNoIHt9XG5cbiAgLy8gR0VU44Oh44K944OD44OI44Gn44Gv44Gq44GE5pmCXG4gIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbjtcbn1cbiJdLCJuYW1lcyI6WyJheGlvcyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJyZXN1bHQiLCJnZXQiLCJ0aGVuIiwiZGF0YSIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/posts.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/posts.ts"));
module.exports = __webpack_exports__;

})();