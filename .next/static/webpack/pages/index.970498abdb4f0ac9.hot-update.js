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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _UI_Card_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../UI/Card.styled */ \"./components/UI/Card.styled.js\");\n/* harmony import */ var _PRODUCT_ProductList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../PRODUCT/ProductList */ \"./components/PRODUCT/ProductList.js\");\n/* harmony import */ var _ItemGroupHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ItemGroupHeader */ \"./components/ItemGroupHeader.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"/Users/ojepauloluwaferanmi/Documents/DEVELOPMENT/CLOVE-V1.0/components/SECTIONSIX/SectionSix.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar SectionSix = function SectionSix(_ref) {\n  _s();\n\n  var products = _ref.products;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),\n      filterState = _useState[0],\n      setFilterState = _useState[1];\n\n  var styles = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function (state) {\n    return state.styles;\n  });\n  var props = {\n    header: \"Most Popular\"\n  };\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),\n      tempProducts = _useState2[0],\n      setTempProducts = _useState2[1];\n\n  console.log(tempProducts);\n  var productsListProps = {\n    products: products,\n    style: styles,\n    header: \"All products\",\n    filter: filterState ? \"item.id < 5\" : \"item\"\n  };\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"section\", {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_UI_Card_styled__WEBPACK_IMPORTED_MODULE_1__.Card, {\n        pd: \"1rem 0\" //   bd={\"1px solid red\"}\n        // height={\"30rem\"}\n        ,\n        mg: \"1rem 2rem\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_ItemGroupHeader__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          filter: filter,\n          setFilter: setFilter,\n          productsListProps: productsListProps\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_PRODUCT_ProductList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n          productsListProps: productsListProps\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false);\n};\n\n_s(SectionSix, \"GBsuQp5m7saadvcI9k5GX5b4hV4=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector];\n});\n\n_c = SectionSix;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SectionSix);\n\nvar _c;\n\n$RefreshReg$(_c, \"SectionSix\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NFQ1RJT05TSVgvU2VjdGlvblNpeC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUEsSUFBTVEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBa0I7RUFBQTs7RUFBQSxJQUFmQyxRQUFlLFFBQWZBLFFBQWU7O0VBQ25DLGdCQUFzQ1AsK0NBQVEsQ0FBQyxJQUFELENBQTlDO0VBQUEsSUFBT1EsV0FBUDtFQUFBLElBQW9CQyxjQUFwQjs7RUFDQSxJQUFNQyxNQUFNLEdBQUdOLHdEQUFXLENBQUMsVUFBQ08sS0FBRDtJQUFBLE9BQVdBLEtBQUssQ0FBQ0QsTUFBakI7RUFBQSxDQUFELENBQTFCO0VBRUEsSUFBTUUsS0FBSyxHQUFHO0lBQ1pDLE1BQU0sRUFBRTtFQURJLENBQWQ7O0VBR0EsaUJBQXdDYiwrQ0FBUSxDQUFDLEVBQUQsQ0FBaEQ7RUFBQSxJQUFPYyxZQUFQO0VBQUEsSUFBcUJDLGVBQXJCOztFQUVBQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUgsWUFBWjtFQUNBLElBQU1JLGlCQUFpQixHQUFHO0lBQ3hCWCxRQUFRLEVBQUVBLFFBRGM7SUFFeEJZLEtBQUssRUFBRVQsTUFGaUI7SUFHeEJHLE1BQU0sRUFBRSxjQUhnQjtJQUl4Qk8sTUFBTSxFQUFFWixXQUFXLEdBQUcsYUFBSCxHQUFtQjtFQUpkLENBQTFCO0VBTUEsb0JBQ0U7SUFBQSx1QkFDRTtNQUFBLHVCQUNFLDhEQUFDLGlEQUFEO1FBQ0UsRUFBRSxFQUFFLFFBRE4sQ0FFRTtRQUNBO1FBSEY7UUFJRSxFQUFFLEVBQUUsV0FKTjtRQUFBLHdCQU1FLDhEQUFDLHdEQUFEO1VBQ0UsTUFBTSxFQUFFWSxNQURWO1VBRUUsU0FBUyxFQUFFQyxTQUZiO1VBR0UsaUJBQWlCLEVBQUVIO1FBSHJCO1VBQUE7VUFBQTtVQUFBO1FBQUEsU0FORixlQVdFLDhEQUFDLDREQUFEO1VBQWEsaUJBQWlCLEVBQUVBO1FBQWhDO1VBQUE7VUFBQTtVQUFBO1FBQUEsU0FYRjtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFERjtNQUFBO01BQUE7TUFBQTtJQUFBO0VBREYsaUJBREY7QUFtQkQsQ0FuQ0Q7O0dBQU1aO1VBRVdGOzs7S0FGWEU7QUFxQ04sK0RBQWVBLFVBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TRUNUSU9OU0lYL1NlY3Rpb25TaXguanM/MmJiNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBDYXJkIH0gZnJvbSBcIi4uL1VJL0NhcmQuc3R5bGVkXCI7XG5pbXBvcnQgUHJvZHVjdExpc3QgZnJvbSBcIi4uL1BST0RVQ1QvUHJvZHVjdExpc3RcIjtcbmltcG9ydCBJdGVtR3JvdXBIZWFkZXIgZnJvbSBcIi4uL0l0ZW1Hcm91cEhlYWRlclwiO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IEl0ZW0gfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcblxuY29uc3QgU2VjdGlvblNpeCA9ICh7IHByb2R1Y3RzIH0pID0+IHtcbiAgY29uc3QgW2ZpbHRlclN0YXRlLCBzZXRGaWx0ZXJTdGF0ZV0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5zdHlsZXMpO1xuXG4gIGNvbnN0IHByb3BzID0ge1xuICAgIGhlYWRlcjogXCJNb3N0IFBvcHVsYXJcIixcbiAgfTtcbiAgY29uc3QgW3RlbXBQcm9kdWN0cywgc2V0VGVtcFByb2R1Y3RzXSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zb2xlLmxvZyh0ZW1wUHJvZHVjdHMpO1xuICBjb25zdCBwcm9kdWN0c0xpc3RQcm9wcyA9IHtcbiAgICBwcm9kdWN0czogcHJvZHVjdHMsXG4gICAgc3R5bGU6IHN0eWxlcyxcbiAgICBoZWFkZXI6IFwiQWxsIHByb2R1Y3RzXCIsXG4gICAgZmlsdGVyOiBmaWx0ZXJTdGF0ZSA/IFwiaXRlbS5pZCA8IDVcIiA6IFwiaXRlbVwiLFxuICB9O1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8c2VjdGlvbj5cbiAgICAgICAgPENhcmRcbiAgICAgICAgICBwZD17XCIxcmVtIDBcIn1cbiAgICAgICAgICAvLyAgIGJkPXtcIjFweCBzb2xpZCByZWRcIn1cbiAgICAgICAgICAvLyBoZWlnaHQ9e1wiMzByZW1cIn1cbiAgICAgICAgICBtZz17XCIxcmVtIDJyZW1cIn1cbiAgICAgICAgPlxuICAgICAgICAgIDxJdGVtR3JvdXBIZWFkZXJcbiAgICAgICAgICAgIGZpbHRlcj17ZmlsdGVyfVxuICAgICAgICAgICAgc2V0RmlsdGVyPXtzZXRGaWx0ZXJ9XG4gICAgICAgICAgICBwcm9kdWN0c0xpc3RQcm9wcz17cHJvZHVjdHNMaXN0UHJvcHN9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8UHJvZHVjdExpc3QgcHJvZHVjdHNMaXN0UHJvcHM9e3Byb2R1Y3RzTGlzdFByb3BzfSAvPlxuICAgICAgICA8L0NhcmQ+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uU2l4O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDYXJkIiwiUHJvZHVjdExpc3QiLCJJdGVtR3JvdXBIZWFkZXIiLCJ1c2VTZWxlY3RvciIsIkl0ZW0iLCJTZWN0aW9uU2l4IiwicHJvZHVjdHMiLCJmaWx0ZXJTdGF0ZSIsInNldEZpbHRlclN0YXRlIiwic3R5bGVzIiwic3RhdGUiLCJwcm9wcyIsImhlYWRlciIsInRlbXBQcm9kdWN0cyIsInNldFRlbXBQcm9kdWN0cyIsImNvbnNvbGUiLCJsb2ciLCJwcm9kdWN0c0xpc3RQcm9wcyIsInN0eWxlIiwiZmlsdGVyIiwic2V0RmlsdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/SECTIONSIX/SectionSix.js\n"));

/***/ })

});