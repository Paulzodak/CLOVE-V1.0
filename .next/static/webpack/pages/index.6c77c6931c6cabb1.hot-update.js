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

/***/ "./components/PRODUCT/ProductList.js":
/*!*******************************************!*\
  !*** ./components/PRODUCT/ProductList.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _UI_Card_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../UI/Card.styled */ \"./components/UI/Card.styled.js\");\n/* harmony import */ var _ProductItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductItem */ \"./components/PRODUCT/ProductItem.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/ojepauloluwaferanmi/Documents/DEVELOPMENT/CLOVE-V1.0/components/PRODUCT/ProductList.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n // import products from \"../../Products.json\";\n\n\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n  displayName: \"ProductList__Container\",\n  componentId: \"sc-1meg5b0-0\"\n})([\"display:grid;grid-template-columns:22% 22% 22% 22%;justify-content:space-between;@media (max-width:1300px){grid-template-columns:28% 28% 28%;}@media (max-width:900px){grid-template-columns:48% 48%;}@media (max-width:500px){grid-template-columns:80%;}\"]);\n_c = Container;\n\nvar ProductList = function ProductList(_ref) {\n  _s();\n\n  var search = _ref.search,\n      productsListProps = _ref.productsListProps;\n  var inputs = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (state) {\n    return state.search.userInput;\n  });\n  console.log();\n  var productItemProps = {\n    style: productsListProps.style\n  };\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Container, {\n    dp: \"grid\",\n    gridC: \"15rem 15rem 15rem 15rem\",\n    gridjc: \"space-between\",\n    mg: search ? \"8rem 0\" : \"1rem 0\" // bd={\"1px solid red\"}\n    ,\n    children: productsListProps.products.map(function (item) {\n      if (productsListProps.filter) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_ProductItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n          item: item,\n          productItemProps: productItemProps\n        }, item.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 13\n        }, _this);\n      }\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 31,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(ProductList, \"1vv/6lsSJnpzsz2m7nXYKg8Ibag=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector];\n});\n\n_c2 = ProductList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductList);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c2, \"ProductList\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1BST0RVQ1QvUHJvZHVjdExpc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FFQTs7QUFDQTtBQUNBOztBQUNBLElBQU1LLFNBQVMsR0FBR0Qsd0VBQUg7RUFBQTtFQUFBO0FBQUEsa1FBQWY7S0FBTUM7O0FBZ0JOLElBQU1FLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQW1DO0VBQUE7O0VBQUEsSUFBaENDLE1BQWdDLFFBQWhDQSxNQUFnQztFQUFBLElBQXhCQyxpQkFBd0IsUUFBeEJBLGlCQUF3QjtFQUNyRCxJQUFNQyxNQUFNLEdBQUdQLHdEQUFXLENBQUMsVUFBQ1EsS0FBRDtJQUFBLE9BQVdBLEtBQUssQ0FBQ0gsTUFBTixDQUFhSSxTQUF4QjtFQUFBLENBQUQsQ0FBMUI7RUFDQUMsT0FBTyxDQUFDQyxHQUFSO0VBQ0EsSUFBTUMsZ0JBQWdCLEdBQUc7SUFDdkJDLEtBQUssRUFBRVAsaUJBQWlCLENBQUNPO0VBREYsQ0FBekI7RUFJQSxvQkFDRSw4REFBQyxTQUFEO0lBQ0UsRUFBRSxFQUFFLE1BRE47SUFFRSxLQUFLLEVBQUUseUJBRlQ7SUFHRSxNQUFNLEVBQUUsZUFIVjtJQUlFLEVBQUUsRUFBRVIsTUFBTSxHQUFHLFFBQUgsR0FBYyxRQUoxQixDQUtFO0lBTEY7SUFBQSxVQU9HQyxpQkFBaUIsQ0FBQ1EsUUFBbEIsQ0FBMkJDLEdBQTNCLENBQStCLFVBQUNDLElBQUQsRUFBVTtNQUN4QyxJQUFJVixpQkFBaUIsQ0FBQ1csTUFBdEIsRUFBOEI7UUFDNUIsb0JBQ0UsOERBQUMsb0RBQUQ7VUFFRSxJQUFJLEVBQUVELElBRlI7VUFHRSxnQkFBZ0IsRUFBRUo7UUFIcEIsR0FDT0ksSUFBSSxDQUFDRSxFQURaO1VBQUE7VUFBQTtVQUFBO1FBQUEsU0FERjtNQU9EO0lBQ0YsQ0FWQTtFQVBIO0lBQUE7SUFBQTtJQUFBO0VBQUEsU0FERjtBQXFCRCxDQTVCRDs7R0FBTWQ7VUFDV0o7OztNQURYSTtBQThCTiwrREFBZUEsV0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1BST0RVQ1QvUHJvZHVjdExpc3QuanM/M2Y4OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDYXJkIH0gZnJvbSBcIi4uL1VJL0NhcmQuc3R5bGVkXCI7XG5pbXBvcnQgUHJvZHVjdEl0ZW0gZnJvbSBcIi4vUHJvZHVjdEl0ZW1cIjtcbi8vIGltcG9ydCBwcm9kdWN0cyBmcm9tIFwiLi4vLi4vUHJvZHVjdHMuanNvblwiO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIyJSAyMiUgMjIlIDIyJTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXG4gIC8qIG1hcmdpbjogJHsoc2VhcmNoKSA9PiAoc2VhcmNoID8gXCI4cmVtIDByZW1cIiA6IFwiMXJlbSAwXCIpfTsgKi9cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEzMDBweCkge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjglIDI4JSAyOCU7XG4gIH1cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0OCUgNDglO1xuICB9XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogODAlO1xuICB9XG5gO1xuY29uc3QgUHJvZHVjdExpc3QgPSAoeyBzZWFyY2gsIHByb2R1Y3RzTGlzdFByb3BzIH0pID0+IHtcbiAgY29uc3QgaW5wdXRzID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5zZWFyY2gudXNlcklucHV0KTtcbiAgY29uc29sZS5sb2coKTtcbiAgY29uc3QgcHJvZHVjdEl0ZW1Qcm9wcyA9IHtcbiAgICBzdHlsZTogcHJvZHVjdHNMaXN0UHJvcHMuc3R5bGUsXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyXG4gICAgICBkcD17XCJncmlkXCJ9XG4gICAgICBncmlkQz17XCIxNXJlbSAxNXJlbSAxNXJlbSAxNXJlbVwifVxuICAgICAgZ3JpZGpjPXtcInNwYWNlLWJldHdlZW5cIn1cbiAgICAgIG1nPXtzZWFyY2ggPyBcIjhyZW0gMFwiIDogXCIxcmVtIDBcIn1cbiAgICAgIC8vIGJkPXtcIjFweCBzb2xpZCByZWRcIn1cbiAgICA+XG4gICAgICB7cHJvZHVjdHNMaXN0UHJvcHMucHJvZHVjdHMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgIGlmIChwcm9kdWN0c0xpc3RQcm9wcy5maWx0ZXIpIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFByb2R1Y3RJdGVtXG4gICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cbiAgICAgICAgICAgICAgaXRlbT17aXRlbX1cbiAgICAgICAgICAgICAgcHJvZHVjdEl0ZW1Qcm9wcz17cHJvZHVjdEl0ZW1Qcm9wc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSl9XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0TGlzdDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNhcmQiLCJQcm9kdWN0SXRlbSIsInVzZVNlbGVjdG9yIiwic3R5bGVkIiwiQ29udGFpbmVyIiwiZGl2IiwiUHJvZHVjdExpc3QiLCJzZWFyY2giLCJwcm9kdWN0c0xpc3RQcm9wcyIsImlucHV0cyIsInN0YXRlIiwidXNlcklucHV0IiwiY29uc29sZSIsImxvZyIsInByb2R1Y3RJdGVtUHJvcHMiLCJzdHlsZSIsInByb2R1Y3RzIiwibWFwIiwiaXRlbSIsImZpbHRlciIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/PRODUCT/ProductList.js\n"));

/***/ })

});