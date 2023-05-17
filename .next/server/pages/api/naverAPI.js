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
exports.id = "pages/api/naverAPI";
exports.ids = ["pages/api/naverAPI"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ "cheerio":
/*!**************************!*\
  !*** external "cheerio" ***!
  \**************************/
/***/ ((module) => {

module.exports = import("cheerio");;

/***/ }),

/***/ "(api)/./src/pages/api/naverAPI.js":
/*!***********************************!*\
  !*** ./src/pages/api/naverAPI.js ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var cheerio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cheerio */ \"cheerio\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__, cheerio__WEBPACK_IMPORTED_MODULE_1__]);\n([axios__WEBPACK_IMPORTED_MODULE_0__, cheerio__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const url = \"https://search.shopping.naver.com/search/all?query=%ED%82%A5%EB%B3%B4%EB%93%9C&cat_id=&frm=NVSHATC\"; // 크롤링하려는 웹사이트 URL\n    const { data  } = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(url);\n    const $ = cheerio__WEBPACK_IMPORTED_MODULE_1__[\"default\"].load(data); // HTML 문서 로드\n    const contentText = $(\"#content\").text(); // id가 \"content\"인 div의 모든 텍스트 추출\n    res.status(200).json({\n        text: contentText\n    }); // 추출한 텍스트를 JSON 형식으로 반환\n});\n{}\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL25hdmVyQVBJLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEwQjtBQUNHO0FBRTdCLGlFQUFlLE9BQU9FLEtBQUtDLE1BQVE7SUFDakMsTUFBTUMsTUFBTSxzR0FBc0csa0JBQWtCO0lBQ3BJLE1BQU0sRUFBRUMsS0FBSSxFQUFFLEdBQUcsTUFBTUwsaURBQVMsQ0FBQ0k7SUFFakMsTUFBTUcsSUFBSU4sb0RBQVksQ0FBQ0ksT0FBTyxhQUFhO0lBQzNDLE1BQU1JLGNBQWNGLEVBQUUsWUFBWUcsSUFBSSxJQUFJLGdDQUFnQztJQUUxRVAsSUFBSVEsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztRQUFFRixNQUFNRDtJQUFZLElBQUksd0JBQXdCO0FBQ3ZFLEdBQUM7QUFLRCxDQWlCRSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXBwLy4vc3JjL3BhZ2VzL2FwaS9uYXZlckFQSS5qcz8zMDk1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgY2hlZXJpbyBmcm9tICdjaGVlcmlvJ1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgY29uc3QgdXJsID0gJ2h0dHBzOi8vc2VhcmNoLnNob3BwaW5nLm5hdmVyLmNvbS9zZWFyY2gvYWxsP3F1ZXJ5PSVFRCU4MiVBNSVFQiVCMyVCNCVFQiU5MyU5QyZjYXRfaWQ9JmZybT1OVlNIQVRDJzsgLy8g7YGs66Gk66eB7ZWY66Ck64qUIOybueyCrOydtO2KuCBVUkxcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQodXJsKTtcblxuICBjb25zdCAkID0gY2hlZXJpby5sb2FkKGRhdGEpOyAvLyBIVE1MIOusuOyEnCDroZzrk5xcbiAgY29uc3QgY29udGVudFRleHQgPSAkKCcjY29udGVudCcpLnRleHQoKTsgLy8gaWTqsIAgXCJjb250ZW50XCLsnbggZGl27J2YIOuqqOuToCDthY3siqTtirgg7LaU7LacXG5cbiAgcmVzLnN0YXR1cygyMDApLmpzb24oeyB0ZXh0OiBjb250ZW50VGV4dCB9KTsgLy8g7LaU7Lac7ZWcIO2FjeyKpO2KuOulvCBKU09OIO2YleyLneycvOuhnCDrsJjtmZhcbn1cblxuXG5cblxuey8qaW1wb3J0IHB1cHBldGVlciBmcm9tICdwdXBwZXRlZXInO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgY29uc3QgYnJvd3NlciA9IGF3YWl0IHB1cHBldGVlci5sYXVuY2goKTtcbiAgY29uc3QgcGFnZSA9IGF3YWl0IGJyb3dzZXIubmV3UGFnZSgpO1xuXG4gIGF3YWl0IHBhZ2UuZ290bygnaHR0cHM6Ly9zZWFyY2guc2hvcHBpbmcubmF2ZXIuY29tL3NlYXJjaC9hbGw/cXVlcnk9JUVEJTgyJUE1JUVCJUIzJUI0JUVCJTkzJTlDJmNhdF9pZD0mZnJtPU5WU0hBVEMnKTtcblxuICBjb25zdCBjb250ZW50ID0gYXdhaXQgcGFnZS5ldmFsdWF0ZSgoKSA9PiB7XG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgIHJldHVybiBlbCA/IGVsLmlubmVyVGV4dCA6ICcnO1xuICB9KTtcblxuICBhd2FpdCBicm93c2VyLmNsb3NlKCk7XG5cbiAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBjb250ZW50IH0pO1xufTtcbiovfSJdLCJuYW1lcyI6WyJheGlvcyIsImNoZWVyaW8iLCJyZXEiLCJyZXMiLCJ1cmwiLCJkYXRhIiwiZ2V0IiwiJCIsImxvYWQiLCJjb250ZW50VGV4dCIsInRleHQiLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/naverAPI.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/naverAPI.js"));
module.exports = __webpack_exports__;

})();