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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"./node_modules/swr/core/dist/index.mjs\");\n/* harmony import */ var _utils_normalizeData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/normalizeData */ \"./src/utils/normalizeData.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst fetcher = (url)=>fetch(url).then((res)=>res.json());\nfunction Home() {\n    _s();\n    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"/api/naverAPI\", fetcher);\n    const normalizeData = (data)=>{\n        let allowedShops = [\n            \"쿠팡\",\n            \"지마켓\",\n            \"11번가\",\n            \"옥션\",\n            \"11번가\",\n            \"SSG\"\n        ];\n        return data.map((item)=>{\n            let words = item.price.split(\" \");\n            let shopPrices = {};\n            for(let i = 0; i < words.length; i++){\n                if (allowedShops.includes(words[i])) {\n                    let priceList = words[i + 1].replace(/,/g, \"\");\n                    shopPrices[words[i]] = parseInt(priceList, 10);\n                }\n            }\n            return {\n                shopPrices\n            };\n        });\n    };\n    //...\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Failed to load\"\n    }, void 0, false, {\n        fileName: \"/Users/sin-yunsu/Documents/GitHub/Next_Shopping_Solution/src/pages/index.js\",\n        lineNumber: 28,\n        columnNumber: 21\n    }, this);\n    if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/sin-yunsu/Documents/GitHub/Next_Shopping_Solution/src/pages/index.js\",\n        lineNumber: 29,\n        columnNumber: 21\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: data.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Name: \",\n                            item.name\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sin-yunsu/Documents/GitHub/Next_Shopping_Solution/src/pages/index.js\",\n                        lineNumber: 37,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Price: \",\n                            normalizeData(item.price)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sin-yunsu/Documents/GitHub/Next_Shopping_Solution/src/pages/index.js\",\n                        lineNumber: 38,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Min Price: \",\n                            item.minPrice\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sin-yunsu/Documents/GitHub/Next_Shopping_Solution/src/pages/index.js\",\n                        lineNumber: 39,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"-----------------------------------------------\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sin-yunsu/Documents/GitHub/Next_Shopping_Solution/src/pages/index.js\",\n                        lineNumber: 40,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, index, true, {\n                fileName: \"/Users/sin-yunsu/Documents/GitHub/Next_Shopping_Solution/src/pages/index.js\",\n                lineNumber: 36,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"/Users/sin-yunsu/Documents/GitHub/Next_Shopping_Solution/src/pages/index.js\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"r2QYs02BSrn+Eu/1uMGZi8N+HnQ=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF5QjtBQUM4QjtBQUV2RCxNQUFNRSxVQUFVQyxDQUFBQSxNQUFPQyxNQUFNRCxLQUFLRSxJQUFJLENBQUNDLENBQUFBLE1BQU9BLElBQUlDLElBQUk7QUFFdkMsU0FBU0MsT0FBTzs7SUFDN0IsTUFBTSxFQUFFQyxLQUFJLEVBQUVDLE1BQUssRUFBRSxHQUFHViwrQ0FBTUEsQ0FBQyxpQkFBaUJFO0lBRWhELE1BQU1ELGdCQUFnQixDQUFDUSxPQUFTO1FBQzlCLElBQUlFLGVBQWU7WUFBQztZQUFNO1lBQU87WUFBTztZQUFLO1lBQU87U0FBTTtRQUMxRCxPQUFPRixLQUFLRyxHQUFHLENBQUNDLENBQUFBLE9BQVE7WUFDdEIsSUFBSUMsUUFBUUQsS0FBS0UsS0FBSyxDQUFDQyxLQUFLLENBQUM7WUFDN0IsSUFBSUMsYUFBYSxDQUFDO1lBQ2xCLElBQUksSUFBSUMsSUFBSSxHQUFHQSxJQUFJSixNQUFNSyxNQUFNLEVBQUVELElBQUs7Z0JBQ3BDLElBQUdQLGFBQWFTLFFBQVEsQ0FBQ04sS0FBSyxDQUFDSSxFQUFFLEdBQUc7b0JBQ2xDLElBQUlHLFlBQVlQLEtBQUssQ0FBQ0ksSUFBSSxFQUFFLENBQUNJLE9BQU8sQ0FBQyxNQUFNO29CQUMzQ0wsVUFBVSxDQUFDSCxLQUFLLENBQUNJLEVBQUUsQ0FBQyxHQUFHSyxTQUFTRixXQUFXO2dCQUM3QyxDQUFDO1lBQ0g7WUFDQSxPQUFPO2dCQUFDSjtZQUFVO1FBQ3BCO0lBQ0Y7SUFFRixLQUFLO0lBSUgsSUFBSVAsT0FBTyxxQkFBTyw4REFBQ2M7a0JBQUk7Ozs7OztJQUN2QixJQUFJLENBQUNmLE1BQU0scUJBQU8sOERBQUNlO2tCQUFJOzs7Ozs7SUFJdkIscUJBQ0UsOERBQUNBO2tCQUNFZixLQUFLRyxHQUFHLENBQUMsQ0FBQ0MsTUFBTVksc0JBQ2YsOERBQUNEOztrQ0FDQyw4REFBQ0U7OzRCQUFFOzRCQUFPYixLQUFLYyxJQUFJOzs7Ozs7O2tDQUNuQiw4REFBQ0Q7OzRCQUFFOzRCQUFRekIsY0FBY1ksS0FBS0UsS0FBSzs7Ozs7OztrQ0FDbkMsOERBQUNXOzs0QkFBRTs0QkFBWWIsS0FBS2UsUUFBUTs7Ozs7OztrQ0FDNUIsOERBQUNGO2tDQUFFOzs7Ozs7O2VBSktEOzs7Ozs7Ozs7O0FBU2xCLENBQUM7R0F2Q3VCakI7O1FBQ0VSLDJDQUFNQTs7O0tBRFJRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC5qcz80MDgwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJztcbmltcG9ydCB7IG5vcm1hbGl6ZURhdGEgfSBmcm9tICcuLi91dGlscy9ub3JtYWxpemVEYXRhJztcblxuY29uc3QgZmV0Y2hlciA9IHVybCA9PiBmZXRjaCh1cmwpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoJy9hcGkvbmF2ZXJBUEknLCBmZXRjaGVyKTtcblxuICBjb25zdCBub3JtYWxpemVEYXRhID0gKGRhdGEpID0+IHtcbiAgICBsZXQgYWxsb3dlZFNob3BzID0gW1wi7L+g7YyhXCIsIFwi7KeA66eI7LyTXCIsIFwiMTHrsojqsIBcIixcIuyYpeyFmFwiLFwiMTHrsojqsIBcIixcIlNTR1wiXTsgXG4gICAgcmV0dXJuIGRhdGEubWFwKGl0ZW0gPT4ge1xuICAgICAgbGV0IHdvcmRzID0gaXRlbS5wcmljZS5zcGxpdChcIiBcIik7XG4gICAgICBsZXQgc2hvcFByaWNlcyA9IHt9O1xuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHdvcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmKGFsbG93ZWRTaG9wcy5pbmNsdWRlcyh3b3Jkc1tpXSkpIHtcbiAgICAgICAgICBsZXQgcHJpY2VMaXN0ID0gd29yZHNbaSArIDFdLnJlcGxhY2UoLywvZywgJycpO1xuICAgICAgICAgIHNob3BQcmljZXNbd29yZHNbaV1dID0gcGFyc2VJbnQocHJpY2VMaXN0LCAxMCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB7c2hvcFByaWNlc31cbiAgICB9KTtcbiAgfVxuICBcbi8vLi4uXG5cblxuXG4gIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+RmFpbGVkIHRvIGxvYWQ8L2Rpdj47XG4gIGlmICghZGF0YSkgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcbiAgXG5cbiAgXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHtkYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cbiAgICAgICAgICA8cD5OYW1lOiB7aXRlbS5uYW1lfTwvcD5cbiAgICAgICAgICA8cD5QcmljZToge25vcm1hbGl6ZURhdGEoaXRlbS5wcmljZSl9PC9wPlxuICAgICAgICAgIDxwPk1pbiBQcmljZToge2l0ZW0ubWluUHJpY2V9PC9wPlxuICAgICAgICAgIDxwPi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5cblxuICAgIFxuIl0sIm5hbWVzIjpbInVzZVNXUiIsIm5vcm1hbGl6ZURhdGEiLCJmZXRjaGVyIiwidXJsIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsIkhvbWUiLCJkYXRhIiwiZXJyb3IiLCJhbGxvd2VkU2hvcHMiLCJtYXAiLCJpdGVtIiwid29yZHMiLCJwcmljZSIsInNwbGl0Iiwic2hvcFByaWNlcyIsImkiLCJsZW5ndGgiLCJpbmNsdWRlcyIsInByaWNlTGlzdCIsInJlcGxhY2UiLCJwYXJzZUludCIsImRpdiIsImluZGV4IiwicCIsIm5hbWUiLCJtaW5QcmljZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});