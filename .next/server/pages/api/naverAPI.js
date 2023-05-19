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

/***/ "puppeteer":
/*!****************************!*\
  !*** external "puppeteer" ***!
  \****************************/
/***/ ((module) => {

module.exports = import("puppeteer");;

/***/ }),

/***/ "(api)/./src/pages/api/naverAPI.js":
/*!***********************************!*\
  !*** ./src/pages/api/naverAPI.js ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var puppeteer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! puppeteer */ \"puppeteer\");\n/* harmony import */ var _utils_normalizeData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/normalizeData */ \"(api)/./src/utils/normalizeData.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([puppeteer__WEBPACK_IMPORTED_MODULE_0__]);\npuppeteer__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const url = \"https://search.shopping.naver.com/search/all?query=%ED%82%A5%EB%B3%B4%EB%93%9C&cat_id=&frm=NVSHATC\";\n    const browser = await puppeteer__WEBPACK_IMPORTED_MODULE_0__[\"default\"].launch();\n    const page = await browser.newPage();\n    await page.goto(url, {\n        waitUntil: \"networkidle0\"\n    });\n    // Scroll to the bottom of the page\n    await page.evaluate(async ()=>{\n        await new Promise((resolve, reject)=>{\n            let totalHeight = 0;\n            const distance = 100;\n            const timer = setInterval(()=>{\n                const scrollHeight = document.body.scrollHeight;\n                window.scrollBy(0, distance);\n                totalHeight += distance;\n                if (totalHeight >= scrollHeight) {\n                    clearInterval(timer);\n                    resolve();\n                }\n            }, 100);\n        });\n    });\n    const elementsName = await page.evaluate(()=>{\n        const Name = Array.from(document.querySelectorAll('[class^=\"basicList_title__\"]')).map((element)=>element.innerText);\n        return Name;\n    });\n    const elementsPrice = await page.evaluate(()=>{\n        const Price = Array.from(document.querySelectorAll('[class^=\"basicList_mall_area__\"]')).map((element)=>element.innerText);\n        return Price;\n    });\n    const elementsMinPrice = await page.evaluate(()=>{\n        const minPrice = Array.from(document.querySelectorAll('[class^=\"price_price__\"]')).map((element)=>element.innerText);\n        return minPrice;\n    });\n    const elementsLink = await page.evaluate(()=>{\n        const productLink = Array.from(document.querySelectorAll('[class^=\"thumbnail_thumb__\"]')).map((element)=>element.href);\n        return productLink;\n    });\n    const result = elementsName.map((name, index)=>{\n        const MallPrice = (0,_utils_normalizeData__WEBPACK_IMPORTED_MODULE_1__.normalizeMallPrice)(elementsPrice[index]);\n        const MinPrice = (0,_utils_normalizeData__WEBPACK_IMPORTED_MODULE_1__.normalizeMinPrice)(elementsMinPrice[index]);\n        return {\n            name: name,\n            mallPrice: MallPrice,\n            MinPrice: MinPrice,\n            Link: elementsLink[index]\n        };\n    });\n    // This will close the browser\n    await browser.close();\n    // Send JSON response\n    res.status(200).json(result);\n});\n{}{}\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL25hdmVyQVBJLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFrQztBQUNpRDtBQUVuRixpRUFBZSxPQUFPRyxLQUFLQyxNQUFRO0lBQ2pDLE1BQU1DLE1BQU07SUFFWixNQUFNQyxVQUFVLE1BQU1OLHdEQUFnQjtJQUN0QyxNQUFNUSxPQUFPLE1BQU1GLFFBQVFHLE9BQU87SUFFbEMsTUFBTUQsS0FBS0UsSUFBSSxDQUFDTCxLQUFLO1FBQUVNLFdBQVc7SUFBZTtJQUVqRCxtQ0FBbUM7SUFDbkMsTUFBTUgsS0FBS0ksUUFBUSxDQUFDLFVBQVk7UUFDOUIsTUFBTSxJQUFJQyxRQUFRLENBQUNDLFNBQVNDLFNBQVc7WUFDckMsSUFBSUMsY0FBYztZQUNsQixNQUFNQyxXQUFXO1lBQ2pCLE1BQU1DLFFBQVFDLFlBQVksSUFBTTtnQkFDOUIsTUFBTUMsZUFBZUMsU0FBU0MsSUFBSSxDQUFDRixZQUFZO2dCQUMvQ0csT0FBT0MsUUFBUSxDQUFDLEdBQUdQO2dCQUNuQkQsZUFBZUM7Z0JBRWYsSUFBSUQsZUFBZUksY0FBYTtvQkFDOUJLLGNBQWNQO29CQUNkSjtnQkFDRixDQUFDO1lBQ0gsR0FBRztRQUNMO0lBQ0Y7SUFFQSxNQUFNWSxlQUFlLE1BQU1sQixLQUFLSSxRQUFRLENBQUMsSUFBTTtRQUM3QyxNQUFNZSxPQUFPQyxNQUFNQyxJQUFJLENBQUNSLFNBQVNTLGdCQUFnQixDQUFDLGlDQUFpQ0MsR0FBRyxDQUFDQyxDQUFBQSxVQUFXQSxRQUFRQyxTQUFTO1FBQ25ILE9BQU9OO0lBQ1Q7SUFDQSxNQUFNTyxnQkFBZ0IsTUFBTTFCLEtBQUtJLFFBQVEsQ0FBQyxJQUFNO1FBQzlDLE1BQU11QixRQUFRUCxNQUFNQyxJQUFJLENBQUNSLFNBQVNTLGdCQUFnQixDQUFDLHFDQUFxQ0MsR0FBRyxDQUFDQyxDQUFBQSxVQUFXQSxRQUFRQyxTQUFTO1FBQ3hILE9BQU9FO0lBQ1Q7SUFDQSxNQUFNQyxtQkFBbUIsTUFBTTVCLEtBQUtJLFFBQVEsQ0FBQyxJQUFNO1FBQ2pELE1BQU15QixXQUFXVCxNQUFNQyxJQUFJLENBQUNSLFNBQVNTLGdCQUFnQixDQUFDLDZCQUE2QkMsR0FBRyxDQUFDQyxDQUFBQSxVQUFXQSxRQUFRQyxTQUFTO1FBQ25ILE9BQU9JO0lBQ1Q7SUFDQSxNQUFNQyxlQUFlLE1BQU05QixLQUFLSSxRQUFRLENBQUMsSUFBTTtRQUM3QyxNQUFNMkIsY0FBY1gsTUFBTUMsSUFBSSxDQUFDUixTQUFTUyxnQkFBZ0IsQ0FBQyxpQ0FBaUNDLEdBQUcsQ0FBQ0MsQ0FBQUEsVUFBV0EsUUFBUVEsSUFBSTtRQUNySCxPQUFPRDtJQUNUO0lBSUEsTUFBTUUsU0FBU2YsYUFBYUssR0FBRyxDQUFDLENBQUNXLE1BQU1DLFFBQVU7UUFDL0MsTUFBTUMsWUFBVzNDLHdFQUFrQkEsQ0FBQ2lDLGFBQWEsQ0FBQ1MsTUFBTTtRQUN4RCxNQUFNRSxXQUFXM0MsdUVBQWlCQSxDQUFDa0MsZ0JBQWdCLENBQUNPLE1BQU07UUFDMUQsT0FBTztZQUNIRCxNQUFNQTtZQUNOSSxXQUFXRjtZQUNYQyxVQUFVQTtZQUNWRSxNQUFNVCxZQUFZLENBQUNLLE1BQU07UUFDN0I7SUFDSjtJQUlBLDhCQUE4QjtJQUM5QixNQUFNckMsUUFBUTBDLEtBQUs7SUFFbkIscUJBQXFCO0lBQ3JCNUMsSUFBSTZDLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNUO0FBRXJCLEdBQUM7QUFXRCxDQVlFLENBSUYsQ0FpQkUsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FwcC8uL3NyYy9wYWdlcy9hcGkvbmF2ZXJBUEkuanM/MzA5NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcHVwcGV0ZWVyIGZyb20gJ3B1cHBldGVlcic7XG5pbXBvcnQgeyBub3JtYWxpemVNYWxsUHJpY2UgLCBub3JtYWxpemVNaW5QcmljZSB9IGZyb20gJy4uLy4uL3V0aWxzL25vcm1hbGl6ZURhdGEnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgY29uc3QgdXJsID0gJ2h0dHBzOi8vc2VhcmNoLnNob3BwaW5nLm5hdmVyLmNvbS9zZWFyY2gvYWxsP3F1ZXJ5PSVFRCU4MiVBNSVFQiVCMyVCNCVFQiU5MyU5QyZjYXRfaWQ9JmZybT1OVlNIQVRDJztcblxuICBjb25zdCBicm93c2VyID0gYXdhaXQgcHVwcGV0ZWVyLmxhdW5jaCgpO1xuICBjb25zdCBwYWdlID0gYXdhaXQgYnJvd3Nlci5uZXdQYWdlKCk7XG5cbiAgYXdhaXQgcGFnZS5nb3RvKHVybCwgeyB3YWl0VW50aWw6ICduZXR3b3JraWRsZTAnIH0pO1xuXG4gIC8vIFNjcm9sbCB0byB0aGUgYm90dG9tIG9mIHRoZSBwYWdlXG4gIGF3YWl0IHBhZ2UuZXZhbHVhdGUoYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGxldCB0b3RhbEhlaWdodCA9IDA7XG4gICAgICBjb25zdCBkaXN0YW5jZSA9IDEwMDtcbiAgICAgIGNvbnN0IHRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBjb25zdCBzY3JvbGxIZWlnaHQgPSBkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodDtcbiAgICAgICAgd2luZG93LnNjcm9sbEJ5KDAsIGRpc3RhbmNlKTtcbiAgICAgICAgdG90YWxIZWlnaHQgKz0gZGlzdGFuY2U7XG5cbiAgICAgICAgaWYgKHRvdGFsSGVpZ2h0ID49IHNjcm9sbEhlaWdodCl7XG4gICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcik7XG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9XG4gICAgICB9LCAxMDApO1xuICAgIH0pO1xuICB9KTtcblxuICBjb25zdCBlbGVtZW50c05hbWUgPSBhd2FpdCBwYWdlLmV2YWx1YXRlKCgpID0+IHsgLy/rqqjrk6DsmpTshozrpbwg6rCA7KC47JmAIOunteycvOuhnCB0ZXh066eM7LaU7Lac7ZWY64qUIOuhnOyngSxcbiAgICBjb25zdCBOYW1lID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbY2xhc3NePVwiYmFzaWNMaXN0X3RpdGxlX19cIl0nKSkubWFwKGVsZW1lbnQgPT4gZWxlbWVudC5pbm5lclRleHQpO1xuICAgIHJldHVybiBOYW1lO1xuICB9KTtcbiAgY29uc3QgZWxlbWVudHNQcmljZSA9IGF3YWl0IHBhZ2UuZXZhbHVhdGUoKCkgPT4geyAvL+uqqOuToOyalOyGjOulvCDqsIDsoLjsmYAg66e17Jy866GcIHRleHTrp4zstpTstpztlZjripQg66Gc7KeBLFxuICAgIGNvbnN0IFByaWNlID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbY2xhc3NePVwiYmFzaWNMaXN0X21hbGxfYXJlYV9fXCJdJykpLm1hcChlbGVtZW50ID0+IGVsZW1lbnQuaW5uZXJUZXh0KTtcbiAgICByZXR1cm4gUHJpY2U7XG4gIH0pO1xuICBjb25zdCBlbGVtZW50c01pblByaWNlID0gYXdhaXQgcGFnZS5ldmFsdWF0ZSgoKSA9PiB7IC8v66qo65Og7JqU7IaM66W8IOqwgOyguOyZgCDrp7XsnLzroZwgdGV4dOunjOy2lOy2nO2VmOuKlCDroZzsp4EsXG4gICAgY29uc3QgbWluUHJpY2UgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tjbGFzc149XCJwcmljZV9wcmljZV9fXCJdJykpLm1hcChlbGVtZW50ID0+IGVsZW1lbnQuaW5uZXJUZXh0KTsgIFxuICAgIHJldHVybiBtaW5QcmljZTtcbiAgfSk7XG4gIGNvbnN0IGVsZW1lbnRzTGluayA9IGF3YWl0IHBhZ2UuZXZhbHVhdGUoKCkgPT4geyAvL+uqqOuToOyalOyGjOulvCDqsIDsoLjsmYAg66e17Jy866GcIHRleHTrp4zstpTstpztlZjripQg66Gc7KeBLFxuICAgIGNvbnN0IHByb2R1Y3RMaW5rID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbY2xhc3NePVwidGh1bWJuYWlsX3RodW1iX19cIl0nKSkubWFwKGVsZW1lbnQgPT4gZWxlbWVudC5ocmVmKTsgIFxuICAgIHJldHVybiBwcm9kdWN0TGluaztcbiAgfSk7XG5cblxuXG4gIGNvbnN0IHJlc3VsdCA9IGVsZW1lbnRzTmFtZS5tYXAoKG5hbWUsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgTWFsbFByaWNlID1ub3JtYWxpemVNYWxsUHJpY2UoZWxlbWVudHNQcmljZVtpbmRleF0pXG4gICAgY29uc3QgTWluUHJpY2UgPSBub3JtYWxpemVNaW5QcmljZShlbGVtZW50c01pblByaWNlW2luZGV4XSlcbiAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICBtYWxsUHJpY2U6IE1hbGxQcmljZSxcbiAgICAgICAgTWluUHJpY2U6IE1pblByaWNlLFxuICAgICAgICBMaW5rOiBlbGVtZW50c0xpbmtbaW5kZXhdXG4gICAgfVxufSk7XG5cblxuXG4vLyBUaGlzIHdpbGwgY2xvc2UgdGhlIGJyb3dzZXJcbmF3YWl0IGJyb3dzZXIuY2xvc2UoKTtcblxuLy8gU2VuZCBKU09OIHJlc3BvbnNlXG5yZXMuc3RhdHVzKDIwMCkuanNvbihyZXN1bHQpO1xuXG59XG5cblxuXG5cblxuXG5cblxuXG5cbnsvKlxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgY29uc3QgdXJsID0gJ2h0dHBzOi8vc2VhcmNoLnNob3BwaW5nLm5hdmVyLmNvbS9zZWFyY2gvYWxsP3F1ZXJ5PSVFRCU4MiVBNSVFQiVCMyVCNCVFQiU5MyU5QyZjYXRfaWQ9JmZybT1OVlNIQVRDJzsgLy8g7YGs66Gk66eB7ZWY66Ck64qUIOybueyCrOydtO2KuCBVUkxcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQodXJsKTtcblxuICBjb25zdCAkID0gY2hlZXJpby5sb2FkKGRhdGEpOyAvLyBIVE1MIOusuOyEnCDroZzrk5xcbiAgY29uc3QgY29udGVudFRleHQgPSAkKCcjY29udGVudCcpLnRleHQoKTsgLy8gaWTqsIAgXCJjb250ZW50XCLsnbggZGl27J2YIOuqqOuToCDthY3siqTtirgg7LaU7LacXG5cbiAgcmVzLnN0YXR1cygyMDApLmpzb24oeyB0ZXh0OiBjb250ZW50VGV4dCB9KTsgLy8g7LaU7Lac7ZWcIO2FjeyKpO2KuOulvCBKU09OIO2YleyLneycvOuhnCDrsJjtmZhcbn1cblxuKi99XG5cblxuXG57LyppbXBvcnQgcHVwcGV0ZWVyIGZyb20gJ3B1cHBldGVlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBjb25zdCBicm93c2VyID0gYXdhaXQgcHVwcGV0ZWVyLmxhdW5jaCgpO1xuICBjb25zdCBwYWdlID0gYXdhaXQgYnJvd3Nlci5uZXdQYWdlKCk7XG5cbiAgYXdhaXQgcGFnZS5nb3RvKCdodHRwczovL3NlYXJjaC5zaG9wcGluZy5uYXZlci5jb20vc2VhcmNoL2FsbD9xdWVyeT0lRUQlODIlQTUlRUIlQjMlQjQlRUIlOTMlOUMmY2F0X2lkPSZmcm09TlZTSEFUQycpO1xuXG4gIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCBwYWdlLmV2YWx1YXRlKCgpID0+IHtcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgcmV0dXJuIGVsID8gZWwuaW5uZXJUZXh0IDogJyc7XG4gIH0pO1xuXG4gIGF3YWl0IGJyb3dzZXIuY2xvc2UoKTtcblxuICByZXMuc3RhdHVzKDIwMCkuanNvbih7IGNvbnRlbnQgfSk7XG59O1xuKi99XG5cblxuIl0sIm5hbWVzIjpbInB1cHBldGVlciIsIm5vcm1hbGl6ZU1hbGxQcmljZSIsIm5vcm1hbGl6ZU1pblByaWNlIiwicmVxIiwicmVzIiwidXJsIiwiYnJvd3NlciIsImxhdW5jaCIsInBhZ2UiLCJuZXdQYWdlIiwiZ290byIsIndhaXRVbnRpbCIsImV2YWx1YXRlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ0b3RhbEhlaWdodCIsImRpc3RhbmNlIiwidGltZXIiLCJzZXRJbnRlcnZhbCIsInNjcm9sbEhlaWdodCIsImRvY3VtZW50IiwiYm9keSIsIndpbmRvdyIsInNjcm9sbEJ5IiwiY2xlYXJJbnRlcnZhbCIsImVsZW1lbnRzTmFtZSIsIk5hbWUiLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwibWFwIiwiZWxlbWVudCIsImlubmVyVGV4dCIsImVsZW1lbnRzUHJpY2UiLCJQcmljZSIsImVsZW1lbnRzTWluUHJpY2UiLCJtaW5QcmljZSIsImVsZW1lbnRzTGluayIsInByb2R1Y3RMaW5rIiwiaHJlZiIsInJlc3VsdCIsIm5hbWUiLCJpbmRleCIsIk1hbGxQcmljZSIsIk1pblByaWNlIiwibWFsbFByaWNlIiwiTGluayIsImNsb3NlIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/naverAPI.js\n");

/***/ }),

/***/ "(api)/./src/utils/normalizeData.js":
/*!************************************!*\
  !*** ./src/utils/normalizeData.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"normalizeMallPrice\": () => (/* binding */ normalizeMallPrice),\n/* harmony export */   \"normalizeMinPrice\": () => (/* binding */ normalizeMinPrice)\n/* harmony export */ });\nconst normalizeMallPrice = (text)=>{\n    let allowedShops = [\n        \"쿠팡\",\n        \"G마켓\",\n        \"11번가\",\n        \"옥션\",\n        \"SSG닷컴\"\n    ];\n    let words = text.split(\"\\n\");\n    let shopPrice = {};\n    for(let i = 0; words.length > i; i++){\n        if (allowedShops.includes(words[i])) {\n            let price = words[i + 1].replace(/,/g, \"\"); //가격가져오고 ',' 삭제\n            shopPrice[words[i]] = parseInt(price, 10); //10진수\n        }\n    }\n    return shopPrice;\n    ;\n};\nconst normalizeMinPrice = (text)=>{\n    let MinPrice = parseInt(text.replace(/[^0-9]/g, \"\"));\n    return MinPrice;\n    ;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvdXRpbHMvbm9ybWFsaXplRGF0YS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUNPLE1BQU1BLHFCQUFxQixDQUFDQyxPQUFTO0lBQzFDLElBQUlDLGVBQWU7UUFBQztRQUFNO1FBQU87UUFBTztRQUFLO0tBQVE7SUFDckQsSUFBSUMsUUFBUUYsS0FBS0csS0FBSyxDQUFDO0lBQ3ZCLElBQUlDLFlBQVUsQ0FBQztJQUVmLElBQUksSUFBSUMsSUFBRSxHQUFHSCxNQUFNSSxNQUFNLEdBQUNELEdBQUdBLElBQUk7UUFDL0IsSUFBR0osYUFBYU0sUUFBUSxDQUFDTCxLQUFLLENBQUNHLEVBQUUsR0FBRTtZQUNqQyxJQUFJRyxRQUFRTixLQUFLLENBQUNHLElBQUUsRUFBRSxDQUFDSSxPQUFPLENBQUMsTUFBSyxLQUFLLGVBQWU7WUFDeERMLFNBQVMsQ0FBQ0YsS0FBSyxDQUFDRyxFQUFFLENBQUMsR0FBQ0ssU0FBU0YsT0FBTSxLQUFLLE1BQU07UUFDaEQsQ0FBQztJQUNIO0lBRUEsT0FBT0o7O0FBSVQsRUFBQztBQUdNLE1BQU1PLG9CQUFvQixDQUFDWCxPQUFTO0lBRXpDLElBQUlZLFdBQVdGLFNBQVNWLEtBQUtTLE9BQU8sQ0FBQyxXQUFXO0lBRWhELE9BQU9HOztBQUlULEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHAvLi9zcmMvdXRpbHMvbm9ybWFsaXplRGF0YS5qcz85NjkwIl0sInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZU1hbGxQcmljZSA9ICh0ZXh0KSA9PiB7XG4gIGxldCBhbGxvd2VkU2hvcHMgPSBbXCLsv6DtjKFcIiwgXCJH66eI7LyTXCIsIFwiMTHrsojqsIBcIixcIuyYpeyFmFwiLFwiU1NH64u37Lu0XCJdOyBcbiAgbGV0IHdvcmRzID0gdGV4dC5zcGxpdChcIlxcblwiKTtcbiAgbGV0IHNob3BQcmljZT17fTtcblxuICBmb3IobGV0IGk9MDsgd29yZHMubGVuZ3RoPmk7IGkrKyl7XG4gICAgaWYoYWxsb3dlZFNob3BzLmluY2x1ZGVzKHdvcmRzW2ldKSl7XG4gICAgICBsZXQgcHJpY2UgPSB3b3Jkc1tpKzFdLnJlcGxhY2UoLywvZywnJyk7IC8v6rCA6rKp6rCA7KC47Jik6rOgICcsJyDsgq3soJxcbiAgICAgIHNob3BQcmljZVt3b3Jkc1tpXV09cGFyc2VJbnQocHJpY2UsMTApOyAvLzEw7KeE7IiYXG4gICAgfVxuICB9XG4gIFxuICByZXR1cm4gc2hvcFByaWNlO1xuICAgICAgXG4gIFxuICA7XG59XG5cblxuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZU1pblByaWNlID0gKHRleHQpID0+IHtcbiAgXG4gIGxldCBNaW5QcmljZSA9IHBhcnNlSW50KHRleHQucmVwbGFjZSgvW14wLTldL2csICcnKSk7XG5cbiAgcmV0dXJuIE1pblByaWNlO1xuICAgICAgXG4gIFxuICA7XG59Il0sIm5hbWVzIjpbIm5vcm1hbGl6ZU1hbGxQcmljZSIsInRleHQiLCJhbGxvd2VkU2hvcHMiLCJ3b3JkcyIsInNwbGl0Iiwic2hvcFByaWNlIiwiaSIsImxlbmd0aCIsImluY2x1ZGVzIiwicHJpY2UiLCJyZXBsYWNlIiwicGFyc2VJbnQiLCJub3JtYWxpemVNaW5QcmljZSIsIk1pblByaWNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/utils/normalizeData.js\n");

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