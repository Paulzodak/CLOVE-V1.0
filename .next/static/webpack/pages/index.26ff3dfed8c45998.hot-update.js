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

/***/ "./components/SECTIONFOUR/SectionFour.js":
/*!***********************************************!*\
  !*** ./components/SECTIONFOUR/SectionFour.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _UI_Card_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../UI/Card.styled */ \"./components/UI/Card.styled.js\");\n/* harmony import */ var _PRODUCT_ProductList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../PRODUCT/ProductList */ \"./components/PRODUCT/ProductList.js\");\n/* harmony import */ var _ItemGroupHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ItemGroupHeader */ \"./components/ItemGroupHeader.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"/Users/ojepauloluwaferanmi/Documents/DEVELOPMENT/CLOVE-V1.0/components/SECTIONFOUR/SectionFour.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar SectionFour = function SectionFour(_ref) {\n  _s();\n\n  var products = _ref.products;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),\n      filterState = _useState[0],\n      setFilterState = _useState[1];\n\n  var styles = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function (state) {\n    return state.styles;\n  });\n  var filter = \"item.price > 500\";\n  var props = {\n    header: \"Most Popular\"\n  };\n  var productsListProps = {\n    products: products,\n    style: styles,\n    header: \"Our Featured Offers\",\n    filter: filterState ? \"View All\" : \"Hide\"\n  };\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"section\", {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_UI_Card_styled__WEBPACK_IMPORTED_MODULE_1__.Card, {\n        pd: \"1rem 0\" //   bd={\"1px solid red\"}\n        // height={\"30rem\"}\n        ,\n        mg: \"1rem 2rem\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_ItemGroupHeader__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          filter: filter,\n          productsListProps: productsListProps\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_PRODUCT_ProductList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n          productsListProps: productsListProps\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false);\n};\n\n_s(SectionFour, \"c4Vi1M5bjYFVLNcHFhPvzjQywE0=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector];\n});\n\n_c = SectionFour;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SectionFour);\n\nvar _c;\n\n$RefreshReg$(_c, \"SectionFour\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NFQ1RJT05GT1VSL1NlY3Rpb25Gb3VyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFDQSxJQUFNTSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUFrQjtFQUFBOztFQUFBLElBQWZDLFFBQWUsUUFBZkEsUUFBZTs7RUFDcEMsZ0JBQXNDRiwrQ0FBUSxDQUFDLElBQUQsQ0FBOUM7RUFBQSxJQUFPRyxXQUFQO0VBQUEsSUFBb0JDLGNBQXBCOztFQUNBLElBQU1DLE1BQU0sR0FBR04sd0RBQVcsQ0FBQyxVQUFDTyxLQUFEO0lBQUEsT0FBV0EsS0FBSyxDQUFDRCxNQUFqQjtFQUFBLENBQUQsQ0FBMUI7RUFDQSxJQUFNRSxNQUFNLEdBQUcsa0JBQWY7RUFDQSxJQUFNQyxLQUFLLEdBQUc7SUFDWkMsTUFBTSxFQUFFO0VBREksQ0FBZDtFQUdBLElBQU1DLGlCQUFpQixHQUFHO0lBQ3hCUixRQUFRLEVBQUVBLFFBRGM7SUFFeEJTLEtBQUssRUFBRU4sTUFGaUI7SUFHeEJJLE1BQU0sRUFBRSxxQkFIZ0I7SUFJeEJGLE1BQU0sRUFBRUosV0FBVyxHQUFHLFVBQUgsR0FBZ0I7RUFKWCxDQUExQjtFQU1BLG9CQUNFO0lBQUEsdUJBQ0U7TUFBQSx1QkFDRSw4REFBQyxpREFBRDtRQUNFLEVBQUUsRUFBRSxRQUROLENBRUU7UUFDQTtRQUhGO1FBSUUsRUFBRSxFQUFFLFdBSk47UUFBQSx3QkFNRSw4REFBQyx3REFBRDtVQUNFLE1BQU0sRUFBRUksTUFEVjtVQUVFLGlCQUFpQixFQUFFRztRQUZyQjtVQUFBO1VBQUE7VUFBQTtRQUFBLFNBTkYsZUFVRSw4REFBQyw0REFBRDtVQUFhLGlCQUFpQixFQUFFQTtRQUFoQztVQUFBO1VBQUE7VUFBQTtRQUFBLFNBVkY7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBREY7TUFBQTtNQUFBO01BQUE7SUFBQTtFQURGLGlCQURGO0FBa0JELENBL0JEOztHQUFNVDtVQUVXRjs7O0tBRlhFO0FBaUNOLCtEQUFlQSxXQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU0VDVElPTkZPVVIvU2VjdGlvbkZvdXIuanM/MWNhOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDYXJkIH0gZnJvbSBcIi4uL1VJL0NhcmQuc3R5bGVkXCI7XG5pbXBvcnQgUHJvZHVjdExpc3QgZnJvbSBcIi4uL1BST0RVQ1QvUHJvZHVjdExpc3RcIjtcbmltcG9ydCBJdGVtR3JvdXBIZWFkZXIgZnJvbSBcIi4uL0l0ZW1Hcm91cEhlYWRlclwiO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5jb25zdCBTZWN0aW9uRm91ciA9ICh7IHByb2R1Y3RzIH0pID0+IHtcbiAgY29uc3QgW2ZpbHRlclN0YXRlLCBzZXRGaWx0ZXJTdGF0ZV0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5zdHlsZXMpO1xuICBjb25zdCBmaWx0ZXIgPSBcIml0ZW0ucHJpY2UgPiA1MDBcIjtcbiAgY29uc3QgcHJvcHMgPSB7XG4gICAgaGVhZGVyOiBcIk1vc3QgUG9wdWxhclwiLFxuICB9O1xuICBjb25zdCBwcm9kdWN0c0xpc3RQcm9wcyA9IHtcbiAgICBwcm9kdWN0czogcHJvZHVjdHMsXG4gICAgc3R5bGU6IHN0eWxlcyxcbiAgICBoZWFkZXI6IFwiT3VyIEZlYXR1cmVkIE9mZmVyc1wiLFxuICAgIGZpbHRlcjogZmlsdGVyU3RhdGUgPyBcIlZpZXcgQWxsXCIgOiBcIkhpZGVcIixcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPHNlY3Rpb24+XG4gICAgICAgIDxDYXJkXG4gICAgICAgICAgcGQ9e1wiMXJlbSAwXCJ9XG4gICAgICAgICAgLy8gICBiZD17XCIxcHggc29saWQgcmVkXCJ9XG4gICAgICAgICAgLy8gaGVpZ2h0PXtcIjMwcmVtXCJ9XG4gICAgICAgICAgbWc9e1wiMXJlbSAycmVtXCJ9XG4gICAgICAgID5cbiAgICAgICAgICA8SXRlbUdyb3VwSGVhZGVyXG4gICAgICAgICAgICBmaWx0ZXI9e2ZpbHRlcn1cbiAgICAgICAgICAgIHByb2R1Y3RzTGlzdFByb3BzPXtwcm9kdWN0c0xpc3RQcm9wc31cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxQcm9kdWN0TGlzdCBwcm9kdWN0c0xpc3RQcm9wcz17cHJvZHVjdHNMaXN0UHJvcHN9IC8+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb25Gb3VyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ2FyZCIsIlByb2R1Y3RMaXN0IiwiSXRlbUdyb3VwSGVhZGVyIiwidXNlU2VsZWN0b3IiLCJ1c2VTdGF0ZSIsIlNlY3Rpb25Gb3VyIiwicHJvZHVjdHMiLCJmaWx0ZXJTdGF0ZSIsInNldEZpbHRlclN0YXRlIiwic3R5bGVzIiwic3RhdGUiLCJmaWx0ZXIiLCJwcm9wcyIsImhlYWRlciIsInByb2R1Y3RzTGlzdFByb3BzIiwic3R5bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/SECTIONFOUR/SectionFour.js\n"));

/***/ })

});