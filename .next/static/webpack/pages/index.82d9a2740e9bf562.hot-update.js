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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _UI_Card_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../UI/Card.styled */ \"./components/UI/Card.styled.js\");\n/* harmony import */ var _ProductItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductItem */ \"./components/PRODUCT/ProductItem.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/ojepauloluwaferanmi/Documents/DEVELOPMENT/CLOVE-V1.0/components/PRODUCT/ProductList.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n // import products from \"../../Products.json\";\n\n\n\n\n\nvar ProductList = function ProductList(_ref) {\n  _s();\n\n  var search = _ref.search,\n      productsListProps = _ref.productsListProps;\n  var inputs = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (state) {\n    return state.search.userInput;\n  });\n  console.log();\n  var productItemProps = {\n    style: productsListProps.style\n  };\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_UI_Card_styled__WEBPACK_IMPORTED_MODULE_1__.Card, {\n    dp: \"grid\",\n    gridC: \"15rem 15rem 15rem 15rem\",\n    gridjc: \"space-between\",\n    mg: search ? \"8rem 0\" : \"1rem 0\" // bd={\"1px solid red\"}\n    ,\n    children: productsListProps.products.map(function (item) {\n      if (productsListProps.filter) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_ProductItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n          item: item,\n          productItemProps: productItemProps\n        }, item.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 13\n        }, _this);\n      }\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(ProductList, \"1vv/6lsSJnpzsz2m7nXYKg8Ibag=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector];\n});\n\n_c = ProductList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductList);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProductList\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1BST0RVQ1QvUHJvZHVjdExpc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUVBOztBQUNBO0FBQ0E7OztBQUNBLElBQU1LLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQW1DO0VBQUE7O0VBQUEsSUFBaENDLE1BQWdDLFFBQWhDQSxNQUFnQztFQUFBLElBQXhCQyxpQkFBd0IsUUFBeEJBLGlCQUF3QjtFQUNyRCxJQUFNQyxNQUFNLEdBQUdMLHdEQUFXLENBQUMsVUFBQ00sS0FBRDtJQUFBLE9BQVdBLEtBQUssQ0FBQ0gsTUFBTixDQUFhSSxTQUF4QjtFQUFBLENBQUQsQ0FBMUI7RUFDQUMsT0FBTyxDQUFDQyxHQUFSO0VBQ0EsSUFBTUMsZ0JBQWdCLEdBQUc7SUFDdkJDLEtBQUssRUFBRVAsaUJBQWlCLENBQUNPO0VBREYsQ0FBekI7RUFJQSxvQkFDRSw4REFBQyxpREFBRDtJQUNFLEVBQUUsRUFBRSxNQUROO0lBRUUsS0FBSyxFQUFFLHlCQUZUO0lBR0UsTUFBTSxFQUFFLGVBSFY7SUFJRSxFQUFFLEVBQUVSLE1BQU0sR0FBRyxRQUFILEdBQWMsUUFKMUIsQ0FLRTtJQUxGO0lBQUEsVUFPR0MsaUJBQWlCLENBQUNRLFFBQWxCLENBQTJCQyxHQUEzQixDQUErQixVQUFDQyxJQUFELEVBQVU7TUFDeEMsSUFBSVYsaUJBQWlCLENBQUNXLE1BQXRCLEVBQThCO1FBQzVCLG9CQUNFLDhEQUFDLG9EQUFEO1VBRUUsSUFBSSxFQUFFRCxJQUZSO1VBR0UsZ0JBQWdCLEVBQUVKO1FBSHBCLEdBQ09JLElBQUksQ0FBQ0UsRUFEWjtVQUFBO1VBQUE7VUFBQTtRQUFBLFNBREY7TUFPRDtJQUNGLENBVkE7RUFQSDtJQUFBO0lBQUE7SUFBQTtFQUFBLFNBREY7QUFxQkQsQ0E1QkQ7O0dBQU1kO1VBQ1dGOzs7S0FEWEU7QUE4Qk4sK0RBQWVBLFdBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QUk9EVUNUL1Byb2R1Y3RMaXN0LmpzPzNmODgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ2FyZCB9IGZyb20gXCIuLi9VSS9DYXJkLnN0eWxlZFwiO1xuaW1wb3J0IFByb2R1Y3RJdGVtIGZyb20gXCIuL1Byb2R1Y3RJdGVtXCI7XG4vLyBpbXBvcnQgcHJvZHVjdHMgZnJvbSBcIi4uLy4uL1Byb2R1Y3RzLmpzb25cIjtcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuY29uc3QgUHJvZHVjdExpc3QgPSAoeyBzZWFyY2gsIHByb2R1Y3RzTGlzdFByb3BzIH0pID0+IHtcbiAgY29uc3QgaW5wdXRzID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5zZWFyY2gudXNlcklucHV0KTtcbiAgY29uc29sZS5sb2coKTtcbiAgY29uc3QgcHJvZHVjdEl0ZW1Qcm9wcyA9IHtcbiAgICBzdHlsZTogcHJvZHVjdHNMaXN0UHJvcHMuc3R5bGUsXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Q2FyZFxuICAgICAgZHA9e1wiZ3JpZFwifVxuICAgICAgZ3JpZEM9e1wiMTVyZW0gMTVyZW0gMTVyZW0gMTVyZW1cIn1cbiAgICAgIGdyaWRqYz17XCJzcGFjZS1iZXR3ZWVuXCJ9XG4gICAgICBtZz17c2VhcmNoID8gXCI4cmVtIDBcIiA6IFwiMXJlbSAwXCJ9XG4gICAgICAvLyBiZD17XCIxcHggc29saWQgcmVkXCJ9XG4gICAgPlxuICAgICAge3Byb2R1Y3RzTGlzdFByb3BzLnByb2R1Y3RzLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICBpZiAocHJvZHVjdHNMaXN0UHJvcHMuZmlsdGVyKSB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxQcm9kdWN0SXRlbVxuICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XG4gICAgICAgICAgICAgIGl0ZW09e2l0ZW19XG4gICAgICAgICAgICAgIHByb2R1Y3RJdGVtUHJvcHM9e3Byb2R1Y3RJdGVtUHJvcHN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0pfVxuICAgIDwvQ2FyZD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RMaXN0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ2FyZCIsIlByb2R1Y3RJdGVtIiwidXNlU2VsZWN0b3IiLCJzdHlsZWQiLCJQcm9kdWN0TGlzdCIsInNlYXJjaCIsInByb2R1Y3RzTGlzdFByb3BzIiwiaW5wdXRzIiwic3RhdGUiLCJ1c2VySW5wdXQiLCJjb25zb2xlIiwibG9nIiwicHJvZHVjdEl0ZW1Qcm9wcyIsInN0eWxlIiwicHJvZHVjdHMiLCJtYXAiLCJpdGVtIiwiZmlsdGVyIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/PRODUCT/ProductList.js\n"));

/***/ })

});