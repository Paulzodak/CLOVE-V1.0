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

/***/ "./components/CART/CartItem.js":
/*!*************************************!*\
  !*** ./components/CART/CartItem.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _UI_Card_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../UI/Card.styled */ \"./components/UI/Card.styled.js\");\n/* harmony import */ var _UI_ImageCard_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../UI/ImageCard.styled */ \"./components/UI/ImageCard.styled.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _IMAGES_IMAGES_bread_toaster_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../IMAGES/IMAGES /bread-toaster.jpg */ \"./IMAGES/IMAGES /bread-toaster.jpg\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\nvar _jsxFileName = \"/Users/ojepauloluwaferanmi/Documents/DEVELOPMENT/CLOVE-V1.0/components/CART/CartItem.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar CartItem = function CartItem(_ref) {\n  _s();\n\n  var item = _ref.item;\n  var styles = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(function (state) {\n    return state.styles;\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_UI_Card_styled__WEBPACK_IMPORTED_MODULE_1__.Card, {\n    bdbm: \"2px solid \".concat(styles.colors.borderGrey) //   bd=\"1px solid red\"\n    ,\n    dp: \"grid\",\n    gridC: \"40% 10% 20% 10% 7%\",\n    gridjc: \"space-between\",\n    fs: \"1rem\",\n    pd: \"1rem 0\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_UI_Card_styled__WEBPACK_IMPORTED_MODULE_1__.Card // bd={`2px solid ${styles.colors.borderGrey}`}\n    , {\n      br: \"1rem\",\n      height: \"5rem\",\n      width: \"5rem\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n        src: _IMAGES_IMAGES_bread_toaster_jpg__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_UI_Card_styled__WEBPACK_IMPORTED_MODULE_1__.Card, {\n      ta: \"centeer\",\n      pd: \"50% 0\",\n      bd: \"0px solid red\",\n      children: \"$\".concat(item.price)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_UI_Card_styled__WEBPACK_IMPORTED_MODULE_1__.Card, {\n      ta: \"centekr\",\n      pd: \"25% 0\",\n      bd: \"0px solid red\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_UI_Card_styled__WEBPACK_IMPORTED_MODULE_1__.Card, {\n        bg: styles.colors.lightGrey,\n        width: \"100%\",\n        height: \"1.7rem\",\n        br: \"1rem\",\n        dp: \"grid\",\n        gridC: \"20% 30% 20%\",\n        gridjc: \"space-between\",\n        pd: \"0.1rem 0.4rem\",\n        ta: \"center\",\n        fs: \"1rem\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_UI_Card_styled__WEBPACK_IMPORTED_MODULE_1__.Card, {\n          bd: \"0px solid red\",\n          children: \"-\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_UI_Card_styled__WEBPACK_IMPORTED_MODULE_1__.Card, {\n          bd: \"0px solid red\",\n          children: item.quantity\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_UI_Card_styled__WEBPACK_IMPORTED_MODULE_1__.Card, {\n          bd: \"0px solid red\",\n          children: \"+\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_UI_Card_styled__WEBPACK_IMPORTED_MODULE_1__.Card, {\n      ta: \"center\",\n      pd: \"50% 0\",\n      bd: \"0px solid red\",\n      children: \"$\".concat(item.total)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(CartItem, \"mo4kj55uRN4z/lbhITBXT0ib3IY=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector];\n});\n\n_c = CartItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CartItem);\n\nvar _c;\n\n$RefreshReg$(_c, \"CartItem\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NBUlQvQ2FydEl0ZW0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxJQUFNTSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUFjO0VBQUE7O0VBQUEsSUFBWEMsSUFBVyxRQUFYQSxJQUFXO0VBQzdCLElBQU1DLE1BQU0sR0FBR0gsd0RBQVcsQ0FBQyxVQUFDSSxLQUFEO0lBQUEsT0FBV0EsS0FBSyxDQUFDRCxNQUFqQjtFQUFBLENBQUQsQ0FBMUI7RUFDQSxvQkFDRSw4REFBQyxpREFBRDtJQUNFLElBQUksc0JBQWVBLE1BQU0sQ0FBQ0UsTUFBUCxDQUFjQyxVQUE3QixDQUROLENBRUU7SUFGRjtJQUdFLEVBQUUsRUFBQyxNQUhMO0lBSUUsS0FBSyxFQUFDLG9CQUpSO0lBS0UsTUFBTSxFQUFDLGVBTFQ7SUFNRSxFQUFFLEVBQUMsTUFOTDtJQU9FLEVBQUUsRUFBQyxRQVBMO0lBQUEsd0JBU0UsOERBQUMsaURBQUQsQ0FDRTtJQURGO01BRUUsRUFBRSxFQUFDLE1BRkw7TUFHRSxNQUFNLEVBQUMsTUFIVDtNQUlFLEtBQUssRUFBQyxNQUpSO01BQUEsdUJBTUUsOERBQUMsbURBQUQ7UUFBTyxHQUFHLEVBQUVQLHdFQUFPQTtNQUFuQjtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBTkY7TUFBQTtNQUFBO01BQUE7SUFBQSxTQVRGLGVBa0JFLDhEQUFDLGlEQUFEO01BQU0sRUFBRSxFQUFDLFNBQVQ7TUFBbUIsRUFBRSxFQUFDLE9BQXRCO01BQThCLEVBQUUsRUFBQyxlQUFqQztNQUFBLHFCQUFzREcsSUFBSSxDQUFDSyxLQUEzRDtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUEsU0FsQkYsZUFtQkUsOERBQUMsaURBQUQ7TUFBTSxFQUFFLEVBQUMsU0FBVDtNQUFtQixFQUFFLEVBQUMsT0FBdEI7TUFBOEIsRUFBRSxFQUFDLGVBQWpDO01BQUEsdUJBQ0UsOERBQUMsaURBQUQ7UUFDRSxFQUFFLEVBQUVKLE1BQU0sQ0FBQ0UsTUFBUCxDQUFjRyxTQURwQjtRQUVFLEtBQUssRUFBQyxNQUZSO1FBR0UsTUFBTSxFQUFDLFFBSFQ7UUFJRSxFQUFFLEVBQUMsTUFKTDtRQUtFLEVBQUUsRUFBQyxNQUxMO1FBTUUsS0FBSyxFQUFDLGFBTlI7UUFPRSxNQUFNLEVBQUMsZUFQVDtRQVFFLEVBQUUsRUFBQyxlQVJMO1FBU0UsRUFBRSxFQUFDLFFBVEw7UUFVRSxFQUFFLEVBQUMsTUFWTDtRQUFBLHdCQVlFLDhEQUFDLGlEQUFEO1VBQU0sRUFBRSxFQUFDLGVBQVQ7VUFBQTtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUEsU0FaRixlQWFFLDhEQUFDLGlEQUFEO1VBQU0sRUFBRSxFQUFDLGVBQVQ7VUFBQSxVQUEwQk4sSUFBSSxDQUFDTztRQUEvQjtVQUFBO1VBQUE7VUFBQTtRQUFBLFNBYkYsZUFjRSw4REFBQyxpREFBRDtVQUFNLEVBQUUsRUFBQyxlQUFUO1VBQUE7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBLFNBZEY7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBREY7TUFBQTtNQUFBO01BQUE7SUFBQSxTQW5CRixlQXFDRSw4REFBQyxpREFBRDtNQUFNLEVBQUUsRUFBQyxRQUFUO01BQWtCLEVBQUUsRUFBQyxPQUFyQjtNQUE2QixFQUFFLEVBQUMsZUFBaEM7TUFBQSxxQkFBcURQLElBQUksQ0FBQ1EsS0FBMUQ7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBLFNBckNGO0VBQUE7SUFBQTtJQUFBO0lBQUE7RUFBQSxTQURGO0FBeUNELENBM0NEOztHQUFNVDtVQUNXRDs7O0tBRFhDO0FBNkNOLCtEQUFlQSxRQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ0FSVC9DYXJ0SXRlbS5qcz8wYWFiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENhcmQgfSBmcm9tIFwiLi4vVUkvQ2FyZC5zdHlsZWRcIjtcbmltcG9ydCB7IEltYWdlQ2FyZCB9IGZyb20gXCIuLi9VSS9JbWFnZUNhcmQuc3R5bGVkXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB0b2FzdGVyIGZyb20gXCIuLi8uLi9JTUFHRVMvSU1BR0VTIC9icmVhZC10b2FzdGVyLmpwZ1wiO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmNvbnN0IENhcnRJdGVtID0gKHsgaXRlbSB9KSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuc3R5bGVzKTtcbiAgcmV0dXJuIChcbiAgICA8Q2FyZFxuICAgICAgYmRibT17YDJweCBzb2xpZCAke3N0eWxlcy5jb2xvcnMuYm9yZGVyR3JleX1gfVxuICAgICAgLy8gICBiZD1cIjFweCBzb2xpZCByZWRcIlxuICAgICAgZHA9XCJncmlkXCJcbiAgICAgIGdyaWRDPVwiNDAlIDEwJSAyMCUgMTAlIDclXCJcbiAgICAgIGdyaWRqYz1cInNwYWNlLWJldHdlZW5cIlxuICAgICAgZnM9XCIxcmVtXCJcbiAgICAgIHBkPVwiMXJlbSAwXCJcbiAgICA+XG4gICAgICA8Q2FyZFxuICAgICAgICAvLyBiZD17YDJweCBzb2xpZCAke3N0eWxlcy5jb2xvcnMuYm9yZGVyR3JleX1gfVxuICAgICAgICBicj1cIjFyZW1cIlxuICAgICAgICBoZWlnaHQ9XCI1cmVtXCJcbiAgICAgICAgd2lkdGg9XCI1cmVtXCJcbiAgICAgID5cbiAgICAgICAgPEltYWdlIHNyYz17dG9hc3Rlcn0gLz5cbiAgICAgICAgey8qIHtpdGVtLm5hbWV9ICovfVxuICAgICAgPC9DYXJkPlxuICAgICAgPENhcmQgdGE9XCJjZW50ZWVyXCIgcGQ9XCI1MCUgMFwiIGJkPVwiMHB4IHNvbGlkIHJlZFwiPntgJCR7aXRlbS5wcmljZX1gfTwvQ2FyZD5cbiAgICAgIDxDYXJkIHRhPVwiY2VudGVrclwiIHBkPVwiMjUlIDBcIiBiZD1cIjBweCBzb2xpZCByZWRcIj5cbiAgICAgICAgPENhcmRcbiAgICAgICAgICBiZz17c3R5bGVzLmNvbG9ycy5saWdodEdyZXl9XG4gICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICBoZWlnaHQ9XCIxLjdyZW1cIlxuICAgICAgICAgIGJyPVwiMXJlbVwiXG4gICAgICAgICAgZHA9XCJncmlkXCJcbiAgICAgICAgICBncmlkQz1cIjIwJSAzMCUgMjAlXCJcbiAgICAgICAgICBncmlkamM9XCJzcGFjZS1iZXR3ZWVuXCJcbiAgICAgICAgICBwZD1cIjAuMXJlbSAwLjRyZW1cIlxuICAgICAgICAgIHRhPVwiY2VudGVyXCJcbiAgICAgICAgICBmcz1cIjFyZW1cIlxuICAgICAgICA+XG4gICAgICAgICAgPENhcmQgYmQ9XCIwcHggc29saWQgcmVkXCI+LTwvQ2FyZD5cbiAgICAgICAgICA8Q2FyZCBiZD1cIjBweCBzb2xpZCByZWRcIj57aXRlbS5xdWFudGl0eX08L0NhcmQ+XG4gICAgICAgICAgPENhcmQgYmQ9XCIwcHggc29saWQgcmVkXCI+KzwvQ2FyZD5cbiAgICAgICAgPC9DYXJkPlxuICAgICAgPC9DYXJkPlxuICAgICAgPENhcmQgdGE9XCJjZW50ZXJcIiBwZD1cIjUwJSAwXCIgYmQ9XCIwcHggc29saWQgcmVkXCI+e2AkJHtpdGVtLnRvdGFsfWB9PC9DYXJkPlxuICAgIDwvQ2FyZD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcnRJdGVtO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ2FyZCIsIkltYWdlQ2FyZCIsIkltYWdlIiwidG9hc3RlciIsInVzZVNlbGVjdG9yIiwiQ2FydEl0ZW0iLCJpdGVtIiwic3R5bGVzIiwic3RhdGUiLCJjb2xvcnMiLCJib3JkZXJHcmV5IiwicHJpY2UiLCJsaWdodEdyZXkiLCJxdWFudGl0eSIsInRvdGFsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/CART/CartItem.js\n"));

/***/ })

});