"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/redux/cart.js":
/*!**********************************!*\
  !*** ./components/redux/cart.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cartSlice\": function() { return /* binding */ cartSlice; },\n/* harmony export */   \"setCart\": function() { return /* binding */ setCart; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n\nvar cartSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n  name: \"cart\",\n  initialState: {\n    cartItems: []\n  },\n  reducers: {\n    setCart: function setCart(state, action) {\n      state.cartItems.map(function (items) {\n        if (items.name === action.payload.newOrder.name) {\n          console.log(\"yes\");\n        } //  else {\n        //   state.cartItems.push(action.payload.newOrder);\n        // }\n\n      });\n    }\n  }\n});\nvar setCart = cartSlice.actions.setCart;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (cartSlice.reducer);\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3JlZHV4L2NhcnQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDTyxJQUFNQyxTQUFTLEdBQUdELDZEQUFXLENBQUM7RUFDbkNFLElBQUksRUFBRSxNQUQ2QjtFQUVuQ0MsWUFBWSxFQUFFO0lBQ1pDLFNBQVMsRUFBRTtFQURDLENBRnFCO0VBS25DQyxRQUFRLEVBQUU7SUFDUkMsT0FBTyxFQUFFLGlCQUFDQyxLQUFELEVBQVFDLE1BQVIsRUFBbUI7TUFDMUJELEtBQUssQ0FBQ0gsU0FBTixDQUFnQkssR0FBaEIsQ0FBb0IsVUFBQ0MsS0FBRCxFQUFXO1FBQzdCLElBQUlBLEtBQUssQ0FBQ1IsSUFBTixLQUFlTSxNQUFNLENBQUNHLE9BQVAsQ0FBZUMsUUFBZixDQUF3QlYsSUFBM0MsRUFBaUQ7VUFDL0NXLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQVo7UUFDRCxDQUg0QixDQUk3QjtRQUNBO1FBQ0E7O01BQ0QsQ0FQRDtJQVFEO0VBVk87QUFMeUIsQ0FBRCxDQUE3QjtBQWtCQSxJQUFRUixPQUFSLEdBQW9CTCxTQUFTLENBQUNjLE9BQTlCLENBQVFULE9BQVI7O0FBQ1AsK0RBQWVMLFNBQVMsQ0FBQ2UsT0FBekIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZWR1eC9jYXJ0LmpzPzFmYWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuZXhwb3J0IGNvbnN0IGNhcnRTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZTogXCJjYXJ0XCIsXG4gIGluaXRpYWxTdGF0ZToge1xuICAgIGNhcnRJdGVtczogW10sXG4gIH0sXG4gIHJlZHVjZXJzOiB7XG4gICAgc2V0Q2FydDogKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgIHN0YXRlLmNhcnRJdGVtcy5tYXAoKGl0ZW1zKSA9PiB7XG4gICAgICAgIGlmIChpdGVtcy5uYW1lID09PSBhY3Rpb24ucGF5bG9hZC5uZXdPcmRlci5uYW1lKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJ5ZXNcIik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gIGVsc2Uge1xuICAgICAgICAvLyAgIHN0YXRlLmNhcnRJdGVtcy5wdXNoKGFjdGlvbi5wYXlsb2FkLm5ld09yZGVyKTtcbiAgICAgICAgLy8gfVxuICAgICAgfSk7XG4gICAgfSxcbiAgfSxcbn0pO1xuZXhwb3J0IGNvbnN0IHsgc2V0Q2FydCB9ID0gY2FydFNsaWNlLmFjdGlvbnM7XG5leHBvcnQgZGVmYXVsdCBjYXJ0U2xpY2UucmVkdWNlcjtcbiJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImNhcnRTbGljZSIsIm5hbWUiLCJpbml0aWFsU3RhdGUiLCJjYXJ0SXRlbXMiLCJyZWR1Y2VycyIsInNldENhcnQiLCJzdGF0ZSIsImFjdGlvbiIsIm1hcCIsIml0ZW1zIiwicGF5bG9hZCIsIm5ld09yZGVyIiwiY29uc29sZSIsImxvZyIsImFjdGlvbnMiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/redux/cart.js\n"));

/***/ })

});