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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var cheerio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cheerio */ \"cheerio\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__, cheerio__WEBPACK_IMPORTED_MODULE_1__]);\n([axios__WEBPACK_IMPORTED_MODULE_0__, cheerio__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const url = \"https://search.shopping.naver.com/search/all?query=%ED%82%A5%EB%B3%B4%EB%93%9C&cat_id=&frm=NVSHATC\";\n    const { data  } = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(url);\n    const $ = cheerio__WEBPACK_IMPORTED_MODULE_1__[\"default\"].load(data);\n    const products = [];\n    $(\".basicList_mall_list__S_B5C\").each((idx, el)=>{\n        const store = $(el).find(\".basicList_mall_name__XQlSa\").text(); // 각 상품의 쇼핑몰 이름 선택자\n        const price = $(el).find(\".basicList_price__euNoD\").text(); // 각 상품의 가격 선택자\n        products.push({\n            store: store,\n            price: price\n        });\n    });\n    res.status(200).json(products);\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL25hdmVyQVBJLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEwQjtBQUNJO0FBRTlCLGlFQUFlLE9BQU9FLEtBQUtDLE1BQVE7SUFDakMsTUFBTUMsTUFBTTtJQUNaLE1BQU0sRUFBRUMsS0FBSSxFQUFFLEdBQUcsTUFBTUwsaURBQVMsQ0FBQ0k7SUFDakMsTUFBTUcsSUFBSU4sb0RBQVksQ0FBQ0k7SUFDdkIsTUFBTUksV0FBVyxFQUFFO0lBRW5CRixFQUFFLCtCQUErQkcsSUFBSSxDQUFDLENBQUNDLEtBQUtDLEtBQU87UUFDakQsTUFBTUMsUUFBUU4sRUFBRUssSUFBSUUsSUFBSSxDQUFDLCtCQUErQkMsSUFBSSxJQUFJLG1CQUFtQjtRQUNuRixNQUFNQyxRQUFRVCxFQUFFSyxJQUFJRSxJQUFJLENBQUMsMkJBQTJCQyxJQUFJLElBQUksZUFBZTtRQUUzRU4sU0FBU1EsSUFBSSxDQUFDO1lBQ1pKLE9BQU9BO1lBQ1BHLE9BQU9BO1FBQ1Q7SUFDRjtJQUtBYixJQUFJZSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDVjtBQUN2QixHQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXBwLy4vc3JjL3BhZ2VzL2FwaS9uYXZlckFQSS5qcz8zMDk1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgY2hlZXJpbyBmcm9tICdjaGVlcmlvJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IHVybCA9ICdodHRwczovL3NlYXJjaC5zaG9wcGluZy5uYXZlci5jb20vc2VhcmNoL2FsbD9xdWVyeT0lRUQlODIlQTUlRUIlQjMlQjQlRUIlOTMlOUMmY2F0X2lkPSZmcm09TlZTSEFUQyc7XG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KHVybCk7XG4gIGNvbnN0ICQgPSBjaGVlcmlvLmxvYWQoZGF0YSk7XG4gIGNvbnN0IHByb2R1Y3RzID0gW107XG5cbiAgJCgnLmJhc2ljTGlzdF9tYWxsX2xpc3RfX1NfQjVDJykuZWFjaCgoaWR4LCBlbCkgPT4geyAvLyDqsIEg7IOB7ZKI7JeQIO2VtOuLue2VmOuKlCDshKDtg53snpBcbiAgICBjb25zdCBzdG9yZSA9ICQoZWwpLmZpbmQoJy5iYXNpY0xpc3RfbWFsbF9uYW1lX19YUWxTYScpLnRleHQoKTsgLy8g6rCBIOyDge2SiOydmCDsh7ztlZHrqrAg7J2066aEIOyEoO2DneyekFxuICAgIGNvbnN0IHByaWNlID0gJChlbCkuZmluZCgnLmJhc2ljTGlzdF9wcmljZV9fZXVOb0QnKS50ZXh0KCk7IC8vIOqwgSDsg4HtkojsnZgg6rCA6rKpIOyEoO2DneyekFxuXG4gICAgcHJvZHVjdHMucHVzaCh7XG4gICAgICBzdG9yZTogc3RvcmUsXG4gICAgICBwcmljZTogcHJpY2UsXG4gICAgfSk7XG4gIH0pO1xuICBcblxuICBcbiAgXG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHByb2R1Y3RzKTtcbn07XG4iXSwibmFtZXMiOlsiYXhpb3MiLCJjaGVlcmlvIiwicmVxIiwicmVzIiwidXJsIiwiZGF0YSIsImdldCIsIiQiLCJsb2FkIiwicHJvZHVjdHMiLCJlYWNoIiwiaWR4IiwiZWwiLCJzdG9yZSIsImZpbmQiLCJ0ZXh0IiwicHJpY2UiLCJwdXNoIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/naverAPI.js\n");

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