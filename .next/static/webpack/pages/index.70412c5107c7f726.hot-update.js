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

/***/ "./components/SECTIONSIX/SectionSix.js":
/*!*********************************************!*\
  !*** ./components/SECTIONSIX/SectionSix.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _UI_Card_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../UI/Card.styled */ \"./components/UI/Card.styled.js\");\n/* harmony import */ var _PRODUCT_ProductList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../PRODUCT/ProductList */ \"./components/PRODUCT/ProductList.js\");\n/* harmony import */ var _ItemGroupHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ItemGroupHeader */ \"./components/ItemGroupHeader.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"/Users/ojepauloluwaferanmi/Documents/DEVELOPMENT/CLOVE-V1.0/components/SECTIONSIX/SectionSix.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar SectionSix = function SectionSix(_ref) {\n  _s();\n\n  var products = _ref.products;\n  var styles = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function (state) {\n    return state.styles;\n  });\n  var filter = \"item\";\n  var props = {\n    header: \"Most Popular\"\n  };\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),\n      tempProducts = _useState[0],\n      setTempProducts = _useState[1];\n\n  console.log(tempProducts);\n  var productsListProps = {\n    products: products,\n    style: styles,\n    header: \"All products\",\n    filter: filter\n  };\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"section\", {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_UI_Card_styled__WEBPACK_IMPORTED_MODULE_1__.Card, {\n        pd: \"1rem 0\" //   bd={\"1px solid red\"}\n        // height={\"30rem\"}\n        ,\n        mg: \"1rem 2rem\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_ItemGroupHeader__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          productsListProps: productsListProps\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_PRODUCT_ProductList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n          productsListProps: productsListProps\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false);\n};\n\n_s(SectionSix, \"xNikWXvuSwv1z1BYIC8Z7TjgeNU=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector];\n});\n\n_c = SectionSix;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SectionSix);\n\nvar _c;\n\n$RefreshReg$(_c, \"SectionSix\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NFQ1RJT05TSVgvU2VjdGlvblNpeC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUEsSUFBTVEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBa0I7RUFBQTs7RUFBQSxJQUFmQyxRQUFlLFFBQWZBLFFBQWU7RUFDbkMsSUFBTUMsTUFBTSxHQUFHSix3REFBVyxDQUFDLFVBQUNLLEtBQUQ7SUFBQSxPQUFXQSxLQUFLLENBQUNELE1BQWpCO0VBQUEsQ0FBRCxDQUExQjtFQUNBLElBQU1FLE1BQU0sR0FBRyxNQUFmO0VBQ0EsSUFBTUMsS0FBSyxHQUFHO0lBQ1pDLE1BQU0sRUFBRTtFQURJLENBQWQ7O0VBR0EsZ0JBQXdDWiwrQ0FBUSxDQUFDLEVBQUQsQ0FBaEQ7RUFBQSxJQUFPYSxZQUFQO0VBQUEsSUFBcUJDLGVBQXJCOztFQUVBQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUgsWUFBWjtFQUNBLElBQU1JLGlCQUFpQixHQUFHO0lBQ3hCVixRQUFRLEVBQUVBLFFBRGM7SUFFeEJXLEtBQUssRUFBRVYsTUFGaUI7SUFHeEJJLE1BQU0sRUFBRSxjQUhnQjtJQUl4QkYsTUFBTSxFQUFFQTtFQUpnQixDQUExQjtFQU1BLG9CQUNFO0lBQUEsdUJBQ0U7TUFBQSx1QkFDRSw4REFBQyxpREFBRDtRQUNFLEVBQUUsRUFBRSxRQUROLENBRUU7UUFDQTtRQUhGO1FBSUUsRUFBRSxFQUFFLFdBSk47UUFBQSx3QkFNRSw4REFBQyx3REFBRDtVQUFpQixpQkFBaUIsRUFBRU87UUFBcEM7VUFBQTtVQUFBO1VBQUE7UUFBQSxTQU5GLGVBT0UsOERBQUMsNERBQUQ7VUFBYSxpQkFBaUIsRUFBRUE7UUFBaEM7VUFBQTtVQUFBO1VBQUE7UUFBQSxTQVBGO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQURGO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFERixpQkFERjtBQWVELENBOUJEOztHQUFNWDtVQUNXRjs7O0tBRFhFO0FBZ0NOLCtEQUFlQSxVQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU0VDVElPTlNJWC9TZWN0aW9uU2l4LmpzPzJiYjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgQ2FyZCB9IGZyb20gXCIuLi9VSS9DYXJkLnN0eWxlZFwiO1xuaW1wb3J0IFByb2R1Y3RMaXN0IGZyb20gXCIuLi9QUk9EVUNUL1Byb2R1Y3RMaXN0XCI7XG5pbXBvcnQgSXRlbUdyb3VwSGVhZGVyIGZyb20gXCIuLi9JdGVtR3JvdXBIZWFkZXJcIjtcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBJdGVtIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5cbmNvbnN0IFNlY3Rpb25TaXggPSAoeyBwcm9kdWN0cyB9KSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuc3R5bGVzKTtcbiAgY29uc3QgZmlsdGVyID0gXCJpdGVtXCI7XG4gIGNvbnN0IHByb3BzID0ge1xuICAgIGhlYWRlcjogXCJNb3N0IFBvcHVsYXJcIixcbiAgfTtcbiAgY29uc3QgW3RlbXBQcm9kdWN0cywgc2V0VGVtcFByb2R1Y3RzXSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zb2xlLmxvZyh0ZW1wUHJvZHVjdHMpO1xuICBjb25zdCBwcm9kdWN0c0xpc3RQcm9wcyA9IHtcbiAgICBwcm9kdWN0czogcHJvZHVjdHMsXG4gICAgc3R5bGU6IHN0eWxlcyxcbiAgICBoZWFkZXI6IFwiQWxsIHByb2R1Y3RzXCIsXG4gICAgZmlsdGVyOiBmaWx0ZXIsXG4gIH07XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxzZWN0aW9uPlxuICAgICAgICA8Q2FyZFxuICAgICAgICAgIHBkPXtcIjFyZW0gMFwifVxuICAgICAgICAgIC8vICAgYmQ9e1wiMXB4IHNvbGlkIHJlZFwifVxuICAgICAgICAgIC8vIGhlaWdodD17XCIzMHJlbVwifVxuICAgICAgICAgIG1nPXtcIjFyZW0gMnJlbVwifVxuICAgICAgICA+XG4gICAgICAgICAgPEl0ZW1Hcm91cEhlYWRlciBwcm9kdWN0c0xpc3RQcm9wcz17cHJvZHVjdHNMaXN0UHJvcHN9IC8+XG4gICAgICAgICAgPFByb2R1Y3RMaXN0IHByb2R1Y3RzTGlzdFByb3BzPXtwcm9kdWN0c0xpc3RQcm9wc30gLz5cbiAgICAgICAgPC9DYXJkPlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvblNpeDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ2FyZCIsIlByb2R1Y3RMaXN0IiwiSXRlbUdyb3VwSGVhZGVyIiwidXNlU2VsZWN0b3IiLCJJdGVtIiwiU2VjdGlvblNpeCIsInByb2R1Y3RzIiwic3R5bGVzIiwic3RhdGUiLCJmaWx0ZXIiLCJwcm9wcyIsImhlYWRlciIsInRlbXBQcm9kdWN0cyIsInNldFRlbXBQcm9kdWN0cyIsImNvbnNvbGUiLCJsb2ciLCJwcm9kdWN0c0xpc3RQcm9wcyIsInN0eWxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/SECTIONSIX/SectionSix.js\n"));

/***/ })

});