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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _UI_Card_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../UI/Card.styled */ \"./components/UI/Card.styled.js\");\n/* harmony import */ var _PRODUCT_ProductList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../PRODUCT/ProductList */ \"./components/PRODUCT/ProductList.js\");\n/* harmony import */ var _ItemGroupHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ItemGroupHeader */ \"./components/ItemGroupHeader.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"/Users/ojepauloluwaferanmi/Documents/DEVELOPMENT/CLOVE-V1.0/components/SECTIONFOUR/SectionFour.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar SectionFour = function SectionFour(_ref) {\n  _s();\n\n  var products = _ref.products;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),\n      filterState = _useState[0],\n      setFilterState = _useState[1];\n\n  var styles = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function (state) {\n    return state.styles;\n  });\n  var props = {\n    header: \"Most Popular\"\n  };\n  var productsListProps = {\n    products: products,\n    style: styles,\n    header: \"Our Featured Offers\",\n    filterMessage: filterState ? \"View All\" : \"Hide\",\n    filter: \"item.price > 500\"\n  };\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"section\", {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_UI_Card_styled__WEBPACK_IMPORTED_MODULE_1__.Card, {\n        pd: \"1rem 0\",\n        mg: \"1rem 2rem\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_ItemGroupHeader__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          filter: filter,\n          setFilterState: setFilterState,\n          productsListProps: productsListProps\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_PRODUCT_ProductList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n          productsListProps: productsListProps\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false);\n};\n\n_s(SectionFour, \"c4Vi1M5bjYFVLNcHFhPvzjQywE0=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector];\n});\n\n_c = SectionFour;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SectionFour);\n\nvar _c;\n\n$RefreshReg$(_c, \"SectionFour\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NFQ1RJT05GT1VSL1NlY3Rpb25Gb3VyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFDQSxJQUFNTSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUFrQjtFQUFBOztFQUFBLElBQWZDLFFBQWUsUUFBZkEsUUFBZTs7RUFDcEMsZ0JBQXNDRiwrQ0FBUSxDQUFDLElBQUQsQ0FBOUM7RUFBQSxJQUFPRyxXQUFQO0VBQUEsSUFBb0JDLGNBQXBCOztFQUNBLElBQU1DLE1BQU0sR0FBR04sd0RBQVcsQ0FBQyxVQUFDTyxLQUFEO0lBQUEsT0FBV0EsS0FBSyxDQUFDRCxNQUFqQjtFQUFBLENBQUQsQ0FBMUI7RUFDQSxJQUFNRSxLQUFLLEdBQUc7SUFDWkMsTUFBTSxFQUFFO0VBREksQ0FBZDtFQUdBLElBQU1DLGlCQUFpQixHQUFHO0lBQ3hCUCxRQUFRLEVBQUVBLFFBRGM7SUFFeEJRLEtBQUssRUFBRUwsTUFGaUI7SUFHeEJHLE1BQU0sRUFBRSxxQkFIZ0I7SUFJeEJHLGFBQWEsRUFBRVIsV0FBVyxHQUFHLFVBQUgsR0FBZ0IsTUFKbEI7SUFLeEJTLE1BQU0sRUFBRTtFQUxnQixDQUExQjtFQU9BLG9CQUNFO0lBQUEsdUJBQ0U7TUFBQSx1QkFDRSw4REFBQyxpREFBRDtRQUFNLEVBQUUsRUFBRSxRQUFWO1FBQW9CLEVBQUUsRUFBRSxXQUF4QjtRQUFBLHdCQUNFLDhEQUFDLHdEQUFEO1VBQ0UsTUFBTSxFQUFFQSxNQURWO1VBRUUsY0FBYyxFQUFFUixjQUZsQjtVQUdFLGlCQUFpQixFQUFFSztRQUhyQjtVQUFBO1VBQUE7VUFBQTtRQUFBLFNBREYsZUFNRSw4REFBQyw0REFBRDtVQUFhLGlCQUFpQixFQUFFQTtRQUFoQztVQUFBO1VBQUE7VUFBQTtRQUFBLFNBTkY7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBREY7TUFBQTtNQUFBO01BQUE7SUFBQTtFQURGLGlCQURGO0FBY0QsQ0EzQkQ7O0dBQU1SO1VBRVdGOzs7S0FGWEU7QUE2Qk4sK0RBQWVBLFdBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TRUNUSU9ORk9VUi9TZWN0aW9uRm91ci5qcz8xY2E5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENhcmQgfSBmcm9tIFwiLi4vVUkvQ2FyZC5zdHlsZWRcIjtcbmltcG9ydCBQcm9kdWN0TGlzdCBmcm9tIFwiLi4vUFJPRFVDVC9Qcm9kdWN0TGlzdFwiO1xuaW1wb3J0IEl0ZW1Hcm91cEhlYWRlciBmcm9tIFwiLi4vSXRlbUdyb3VwSGVhZGVyXCI7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmNvbnN0IFNlY3Rpb25Gb3VyID0gKHsgcHJvZHVjdHMgfSkgPT4ge1xuICBjb25zdCBbZmlsdGVyU3RhdGUsIHNldEZpbHRlclN0YXRlXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBzdHlsZXMgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnN0eWxlcyk7XG4gIGNvbnN0IHByb3BzID0ge1xuICAgIGhlYWRlcjogXCJNb3N0IFBvcHVsYXJcIixcbiAgfTtcbiAgY29uc3QgcHJvZHVjdHNMaXN0UHJvcHMgPSB7XG4gICAgcHJvZHVjdHM6IHByb2R1Y3RzLFxuICAgIHN0eWxlOiBzdHlsZXMsXG4gICAgaGVhZGVyOiBcIk91ciBGZWF0dXJlZCBPZmZlcnNcIixcbiAgICBmaWx0ZXJNZXNzYWdlOiBmaWx0ZXJTdGF0ZSA/IFwiVmlldyBBbGxcIiA6IFwiSGlkZVwiLFxuICAgIGZpbHRlcjogXCJpdGVtLnByaWNlID4gNTAwXCIsXG4gIH07XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxzZWN0aW9uPlxuICAgICAgICA8Q2FyZCBwZD17XCIxcmVtIDBcIn0gbWc9e1wiMXJlbSAycmVtXCJ9PlxuICAgICAgICAgIDxJdGVtR3JvdXBIZWFkZXJcbiAgICAgICAgICAgIGZpbHRlcj17ZmlsdGVyfVxuICAgICAgICAgICAgc2V0RmlsdGVyU3RhdGU9e3NldEZpbHRlclN0YXRlfVxuICAgICAgICAgICAgcHJvZHVjdHNMaXN0UHJvcHM9e3Byb2R1Y3RzTGlzdFByb3BzfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFByb2R1Y3RMaXN0IHByb2R1Y3RzTGlzdFByb3BzPXtwcm9kdWN0c0xpc3RQcm9wc30gLz5cbiAgICAgICAgPC9DYXJkPlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvbkZvdXI7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDYXJkIiwiUHJvZHVjdExpc3QiLCJJdGVtR3JvdXBIZWFkZXIiLCJ1c2VTZWxlY3RvciIsInVzZVN0YXRlIiwiU2VjdGlvbkZvdXIiLCJwcm9kdWN0cyIsImZpbHRlclN0YXRlIiwic2V0RmlsdGVyU3RhdGUiLCJzdHlsZXMiLCJzdGF0ZSIsInByb3BzIiwiaGVhZGVyIiwicHJvZHVjdHNMaXN0UHJvcHMiLCJzdHlsZSIsImZpbHRlck1lc3NhZ2UiLCJmaWx0ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/SECTIONFOUR/SectionFour.js\n"));

/***/ })

});