"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"./node_modules/swr/core/dist/index.mjs\");\n/* harmony import */ var _utils_normalizeData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/normalizeData */ \"./src/utils/normalizeData.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst fetcher = (url)=>fetch(url).then((res)=>res.json());\nfunction Home() {\n    _s();\n    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"/api/naverAPI\", fetcher);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Failed to load\"\n    }, void 0, false, {\n        fileName: \"/Users/sin-yunsu/Documents/GitHub/Next_Shopping_Solution/src/pages/index.js\",\n        lineNumber: 10,\n        columnNumber: 21\n    }, this);\n    if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/sin-yunsu/Documents/GitHub/Next_Shopping_Solution/src/pages/index.js\",\n        lineNumber: 11,\n        columnNumber: 21\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: data.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: item.Link,\n                        target: \"_blank\",\n                        rel: \"noopener noreferrer\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Name: \",\n                                item.name\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/sin-yunsu/Documents/GitHub/Next_Shopping_Solution/src/pages/index.js\",\n                            lineNumber: 19,\n                            columnNumber: 74\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/sin-yunsu/Documents/GitHub/Next_Shopping_Solution/src/pages/index.js\",\n                        lineNumber: 19,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: item.maaPrice && Object.entries(item.MallPrice).map((param)=>/*#__PURE__*/ {\n                            let [shop, price] = param;\n                            return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    shop,\n                                    \": \",\n                                    price\n                                ]\n                            }, shop, true, {\n                                fileName: \"/Users/sin-yunsu/Documents/GitHub/Next_Shopping_Solution/src/pages/index.js\",\n                                lineNumber: 22,\n                                columnNumber: 15\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/sin-yunsu/Documents/GitHub/Next_Shopping_Solution/src/pages/index.js\",\n                        lineNumber: 20,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Min Price: \",\n                            item.MinPrice\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sin-yunsu/Documents/GitHub/Next_Shopping_Solution/src/pages/index.js\",\n                        lineNumber: 25,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"-----------------------------------------------\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sin-yunsu/Documents/GitHub/Next_Shopping_Solution/src/pages/index.js\",\n                        lineNumber: 26,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, index, true, {\n                fileName: \"/Users/sin-yunsu/Documents/GitHub/Next_Shopping_Solution/src/pages/index.js\",\n                lineNumber: 18,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"/Users/sin-yunsu/Documents/GitHub/Next_Shopping_Solution/src/pages/index.js\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"r2QYs02BSrn+Eu/1uMGZi8N+HnQ=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXlCO0FBQzhCO0FBQzFCO0FBQzdCLE1BQU1HLFVBQVVDLENBQUFBLE1BQU9DLE1BQU1ELEtBQUtFLElBQUksQ0FBQ0MsQ0FBQUEsTUFBT0EsSUFBSUMsSUFBSTtBQUV2QyxTQUFTQyxPQUFPOztJQUM3QixNQUFNLEVBQUVDLEtBQUksRUFBRUMsTUFBSyxFQUFFLEdBQUdYLCtDQUFNQSxDQUFDLGlCQUFpQkc7SUFHaEQsSUFBSVEsT0FBTyxxQkFBTyw4REFBQ0M7a0JBQUk7Ozs7OztJQUN2QixJQUFJLENBQUNGLE1BQU0scUJBQU8sOERBQUNFO2tCQUFJOzs7Ozs7SUFJdkIscUJBQ0UsOERBQUNBO2tCQUNFRixLQUFLRyxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ2YsOERBQUNIOztrQ0FDQyw4REFBQ0k7d0JBQUVDLE1BQU1ILEtBQUtaLElBQUk7d0JBQUVnQixRQUFPO3dCQUFTQyxLQUFJO2tDQUF1Qiw0RUFBQ0M7O2dDQUFFO2dDQUFPTixLQUFLTyxJQUFJOzs7Ozs7Ozs7Ozs7a0NBQ2xGLDhEQUFDVDtrQ0FDRUUsS0FBS1EsUUFBUSxJQUFFQyxPQUFPQyxPQUFPLENBQUNWLEtBQUtXLFNBQVMsRUFBRVosR0FBRyxDQUFDLHVCQUNqRDtnQ0FEa0QsQ0FBQ2EsTUFBTUMsTUFBTTttQ0FDL0QsOERBQUNQOztvQ0FBY007b0NBQUs7b0NBQUdDOzsrQkFBZkQ7Ozs7O3dCQUF3Qjs7Ozs7O2tDQUdwQyw4REFBQ047OzRCQUFFOzRCQUFZTixLQUFLYyxRQUFROzs7Ozs7O2tDQUM1Qiw4REFBQ1I7a0NBQUU7Ozs7Ozs7ZUFSS0w7Ozs7Ozs7Ozs7QUFjbEIsQ0FBQztHQTFCdUJOOztRQUNFVCwyQ0FBTUE7OztLQURSUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXguanM/NDA4MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlU1dSIGZyb20gJ3N3cic7XG5pbXBvcnQgeyBub3JtYWxpemVEYXRhIH0gZnJvbSAnLi4vdXRpbHMvbm9ybWFsaXplRGF0YSc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuY29uc3QgZmV0Y2hlciA9IHVybCA9PiBmZXRjaCh1cmwpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoJy9hcGkvbmF2ZXJBUEknLCBmZXRjaGVyKTtcblxuXG4gIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+RmFpbGVkIHRvIGxvYWQ8L2Rpdj47XG4gIGlmICghZGF0YSkgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcbiAgXG5cbiAgXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHtkYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cbiAgICAgICAgICA8YSBocmVmPXtpdGVtLkxpbmt9IHRhcmdldD0nX2JsYW5rJyByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgPjxwPk5hbWU6IHtpdGVtLm5hbWV9PC9wPjwvYT5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge2l0ZW0ubWFhUHJpY2UmJk9iamVjdC5lbnRyaWVzKGl0ZW0uTWFsbFByaWNlKS5tYXAoKFtzaG9wLCBwcmljZV0pID0+IChcbiAgICAgICAgICAgICAgPHAga2V5PXtzaG9wfT57c2hvcH06IHtwcmljZX08L3A+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8cD5NaW4gUHJpY2U6IHtpdGVtLk1pblByaWNlfTwvcD5cbiAgICAgICAgICA8cD4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLTwvcD5cbiAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuXG5cbiAgICBcbiJdLCJuYW1lcyI6WyJ1c2VTV1IiLCJub3JtYWxpemVEYXRhIiwiTGluayIsImZldGNoZXIiLCJ1cmwiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiSG9tZSIsImRhdGEiLCJlcnJvciIsImRpdiIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImEiLCJocmVmIiwidGFyZ2V0IiwicmVsIiwicCIsIm5hbWUiLCJtYWFQcmljZSIsIk9iamVjdCIsImVudHJpZXMiLCJNYWxsUHJpY2UiLCJzaG9wIiwicHJpY2UiLCJNaW5QcmljZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});