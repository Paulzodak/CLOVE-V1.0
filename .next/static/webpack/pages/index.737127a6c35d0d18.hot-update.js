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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _UI_Card_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../UI/Card.styled */ \"./components/UI/Card.styled.js\");\n/* harmony import */ var _PRODUCT_ProductList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../PRODUCT/ProductList */ \"./components/PRODUCT/ProductList.js\");\n/* harmony import */ var _ItemGroupHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ItemGroupHeader */ \"./components/ItemGroupHeader.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"/Users/ojepauloluwaferanmi/Documents/DEVELOPMENT/CLOVE-V1.0/components/SECTIONSIX/SectionSix.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar SectionSix = function SectionSix(_ref) {\n  _s();\n\n  var products = _ref.products;\n  var styles = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function (state) {\n    return state.styles;\n  });\n  var filter = \"item\";\n  var props = {\n    header: \"Most Popular\"\n  };\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),\n      tempProducts = _useState[0],\n      setTempProducts = _useState[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    setTempProducts(function () {\n      for (var i = 0; i < 5; i++) {\n        var _temppProducts = [];\n\n        _temppProducts.push(products[i]);\n      }\n\n      return temppProducts;\n    }); // for (let i = 0; i < 5; i++) {\n    //   let temppProducts = [];\n    //   temppProducts.push(products[i]);\n    //   return temppProducts;\n    // }\n  }, [setTempProducts]);\n  console.log(tempProducts);\n  var productsListProps = {\n    products: products,\n    style: styles,\n    header: \"All products\",\n    filter: filter\n  };\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"section\", {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_UI_Card_styled__WEBPACK_IMPORTED_MODULE_1__.Card, {\n        pd: \"1rem 0\" //   bd={\"1px solid red\"}\n        // height={\"30rem\"}\n        ,\n        mg: \"1rem 2rem\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_ItemGroupHeader__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          productsListProps: productsListProps\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_PRODUCT_ProductList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n          productsListProps: productsListProps\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false);\n};\n\n_s(SectionSix, \"xBM6mpK2LINYXWv6dKYnVwYfeZM=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector];\n});\n\n_c = SectionSix;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SectionSix);\n\nvar _c;\n\n$RefreshReg$(_c, \"SectionSix\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NFQ1RJT05TSVgvU2VjdGlvblNpeC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBLElBQU1PLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQWtCO0VBQUE7O0VBQUEsSUFBZkMsUUFBZSxRQUFmQSxRQUFlO0VBQ25DLElBQU1DLE1BQU0sR0FBR0gsd0RBQVcsQ0FBQyxVQUFDSSxLQUFEO0lBQUEsT0FBV0EsS0FBSyxDQUFDRCxNQUFqQjtFQUFBLENBQUQsQ0FBMUI7RUFDQSxJQUFNRSxNQUFNLEdBQUcsTUFBZjtFQUNBLElBQU1DLEtBQUssR0FBRztJQUNaQyxNQUFNLEVBQUU7RUFESSxDQUFkOztFQUdBLGdCQUF3Q1gsK0NBQVEsQ0FBQyxFQUFELENBQWhEO0VBQUEsSUFBT1ksWUFBUDtFQUFBLElBQXFCQyxlQUFyQjs7RUFDQWQsZ0RBQVMsQ0FBQyxZQUFNO0lBQ2RjLGVBQWUsQ0FBQyxZQUFNO01BQ3BCLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxDQUFwQixFQUF1QkEsQ0FBQyxFQUF4QixFQUE0QjtRQUMxQixJQUFJQyxjQUFhLEdBQUcsRUFBcEI7O1FBQ0FBLGNBQWEsQ0FBQ0MsSUFBZCxDQUFtQlYsUUFBUSxDQUFDUSxDQUFELENBQTNCO01BQ0Q7O01BQ0QsT0FBT0MsYUFBUDtJQUNELENBTmMsQ0FBZixDQURjLENBUWQ7SUFDQTtJQUNBO0lBQ0E7SUFDQTtFQUNELENBYlEsRUFhTixDQUFDRixlQUFELENBYk0sQ0FBVDtFQWVBSSxPQUFPLENBQUNDLEdBQVIsQ0FBWU4sWUFBWjtFQUNBLElBQU1PLGlCQUFpQixHQUFHO0lBQ3hCYixRQUFRLEVBQUVBLFFBRGM7SUFFeEJjLEtBQUssRUFBRWIsTUFGaUI7SUFHeEJJLE1BQU0sRUFBRSxjQUhnQjtJQUl4QkYsTUFBTSxFQUFFQTtFQUpnQixDQUExQjtFQU1BLG9CQUNFO0lBQUEsdUJBQ0U7TUFBQSx1QkFDRSw4REFBQyxpREFBRDtRQUNFLEVBQUUsRUFBRSxRQUROLENBRUU7UUFDQTtRQUhGO1FBSUUsRUFBRSxFQUFFLFdBSk47UUFBQSx3QkFNRSw4REFBQyx3REFBRDtVQUFpQixpQkFBaUIsRUFBRVU7UUFBcEM7VUFBQTtVQUFBO1VBQUE7UUFBQSxTQU5GLGVBT0UsOERBQUMsNERBQUQ7VUFBYSxpQkFBaUIsRUFBRUE7UUFBaEM7VUFBQTtVQUFBO1VBQUE7UUFBQSxTQVBGO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQURGO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFERixpQkFERjtBQWVELENBNUNEOztHQUFNZDtVQUNXRDs7O0tBRFhDO0FBOENOLCtEQUFlQSxVQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU0VDVElPTlNJWC9TZWN0aW9uU2l4LmpzPzJiYjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgQ2FyZCB9IGZyb20gXCIuLi9VSS9DYXJkLnN0eWxlZFwiO1xuaW1wb3J0IFByb2R1Y3RMaXN0IGZyb20gXCIuLi9QUk9EVUNUL1Byb2R1Y3RMaXN0XCI7XG5pbXBvcnQgSXRlbUdyb3VwSGVhZGVyIGZyb20gXCIuLi9JdGVtR3JvdXBIZWFkZXJcIjtcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5cbmNvbnN0IFNlY3Rpb25TaXggPSAoeyBwcm9kdWN0cyB9KSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuc3R5bGVzKTtcbiAgY29uc3QgZmlsdGVyID0gXCJpdGVtXCI7XG4gIGNvbnN0IHByb3BzID0ge1xuICAgIGhlYWRlcjogXCJNb3N0IFBvcHVsYXJcIixcbiAgfTtcbiAgY29uc3QgW3RlbXBQcm9kdWN0cywgc2V0VGVtcFByb2R1Y3RzXSA9IHVzZVN0YXRlKFtdKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRUZW1wUHJvZHVjdHMoKCkgPT4ge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgbGV0IHRlbXBwUHJvZHVjdHMgPSBbXTtcbiAgICAgICAgdGVtcHBQcm9kdWN0cy5wdXNoKHByb2R1Y3RzW2ldKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0ZW1wcFByb2R1Y3RzO1xuICAgIH0pO1xuICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgLy8gICBsZXQgdGVtcHBQcm9kdWN0cyA9IFtdO1xuICAgIC8vICAgdGVtcHBQcm9kdWN0cy5wdXNoKHByb2R1Y3RzW2ldKTtcbiAgICAvLyAgIHJldHVybiB0ZW1wcFByb2R1Y3RzO1xuICAgIC8vIH1cbiAgfSwgW3NldFRlbXBQcm9kdWN0c10pO1xuXG4gIGNvbnNvbGUubG9nKHRlbXBQcm9kdWN0cyk7XG4gIGNvbnN0IHByb2R1Y3RzTGlzdFByb3BzID0ge1xuICAgIHByb2R1Y3RzOiBwcm9kdWN0cyxcbiAgICBzdHlsZTogc3R5bGVzLFxuICAgIGhlYWRlcjogXCJBbGwgcHJvZHVjdHNcIixcbiAgICBmaWx0ZXI6IGZpbHRlcixcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPHNlY3Rpb24+XG4gICAgICAgIDxDYXJkXG4gICAgICAgICAgcGQ9e1wiMXJlbSAwXCJ9XG4gICAgICAgICAgLy8gICBiZD17XCIxcHggc29saWQgcmVkXCJ9XG4gICAgICAgICAgLy8gaGVpZ2h0PXtcIjMwcmVtXCJ9XG4gICAgICAgICAgbWc9e1wiMXJlbSAycmVtXCJ9XG4gICAgICAgID5cbiAgICAgICAgICA8SXRlbUdyb3VwSGVhZGVyIHByb2R1Y3RzTGlzdFByb3BzPXtwcm9kdWN0c0xpc3RQcm9wc30gLz5cbiAgICAgICAgICA8UHJvZHVjdExpc3QgcHJvZHVjdHNMaXN0UHJvcHM9e3Byb2R1Y3RzTGlzdFByb3BzfSAvPlxuICAgICAgICA8L0NhcmQ+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uU2l4O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDYXJkIiwiUHJvZHVjdExpc3QiLCJJdGVtR3JvdXBIZWFkZXIiLCJ1c2VTZWxlY3RvciIsIlNlY3Rpb25TaXgiLCJwcm9kdWN0cyIsInN0eWxlcyIsInN0YXRlIiwiZmlsdGVyIiwicHJvcHMiLCJoZWFkZXIiLCJ0ZW1wUHJvZHVjdHMiLCJzZXRUZW1wUHJvZHVjdHMiLCJpIiwidGVtcHBQcm9kdWN0cyIsInB1c2giLCJjb25zb2xlIiwibG9nIiwicHJvZHVjdHNMaXN0UHJvcHMiLCJzdHlsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SECTIONSIX/SectionSix.js\n"));

/***/ })

});