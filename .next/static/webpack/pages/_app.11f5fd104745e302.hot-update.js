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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cartSlice\": function() { return /* binding */ cartSlice; },\n/* harmony export */   \"setCart\": function() { return /* binding */ setCart; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n\nvar cartSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n  name: \"cart\",\n  initialState: {\n    cartItems: []\n  },\n  reducers: {\n    setCart: function setCart(state, action) {\n      state.cartItems.map(function (items) {\n        if (items.name === action.payload.newOrder.name) {\n          console.log(\"yes\");\n        } //  else {\n        //   state.cartItems.push(action.payload.newOrder);\n        // }\n\n      });\n      state.cartItems.push(action.payload.newOrder);\n    }\n  }\n});\nvar setCart = cartSlice.actions.setCart;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (cartSlice.reducer);\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3JlZHV4L2NhcnQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDTyxJQUFNQyxTQUFTLEdBQUdELDZEQUFXLENBQUM7RUFDbkNFLElBQUksRUFBRSxNQUQ2QjtFQUVuQ0MsWUFBWSxFQUFFO0lBQ1pDLFNBQVMsRUFBRTtFQURDLENBRnFCO0VBS25DQyxRQUFRLEVBQUU7SUFDUkMsT0FBTyxFQUFFLGlCQUFDQyxLQUFELEVBQVFDLE1BQVIsRUFBbUI7TUFDMUJELEtBQUssQ0FBQ0gsU0FBTixDQUFnQkssR0FBaEIsQ0FBb0IsVUFBQ0MsS0FBRCxFQUFXO1FBQzdCLElBQUlBLEtBQUssQ0FBQ1IsSUFBTixLQUFlTSxNQUFNLENBQUNHLE9BQVAsQ0FBZUMsUUFBZixDQUF3QlYsSUFBM0MsRUFBaUQ7VUFDL0NXLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQVo7UUFDRCxDQUg0QixDQUk3QjtRQUNBO1FBQ0E7O01BQ0QsQ0FQRDtNQVFBUCxLQUFLLENBQUNILFNBQU4sQ0FBZ0JXLElBQWhCLENBQXFCUCxNQUFNLENBQUNHLE9BQVAsQ0FBZUMsUUFBcEM7SUFDRDtFQVhPO0FBTHlCLENBQUQsQ0FBN0I7QUFtQkEsSUFBUU4sT0FBUixHQUFvQkwsU0FBUyxDQUFDZSxPQUE5QixDQUFRVixPQUFSOztBQUNQLCtEQUFlTCxTQUFTLENBQUNnQixPQUF6QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3JlZHV4L2NhcnQuanM/MWZhYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5leHBvcnQgY29uc3QgY2FydFNsaWNlID0gY3JlYXRlU2xpY2Uoe1xuICBuYW1lOiBcImNhcnRcIixcbiAgaW5pdGlhbFN0YXRlOiB7XG4gICAgY2FydEl0ZW1zOiBbXSxcbiAgfSxcbiAgcmVkdWNlcnM6IHtcbiAgICBzZXRDYXJ0OiAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgc3RhdGUuY2FydEl0ZW1zLm1hcCgoaXRlbXMpID0+IHtcbiAgICAgICAgaWYgKGl0ZW1zLm5hbWUgPT09IGFjdGlvbi5wYXlsb2FkLm5ld09yZGVyLm5hbWUpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInllc1wiKTtcbiAgICAgICAgfVxuICAgICAgICAvLyAgZWxzZSB7XG4gICAgICAgIC8vICAgc3RhdGUuY2FydEl0ZW1zLnB1c2goYWN0aW9uLnBheWxvYWQubmV3T3JkZXIpO1xuICAgICAgICAvLyB9XG4gICAgICB9KTtcbiAgICAgIHN0YXRlLmNhcnRJdGVtcy5wdXNoKGFjdGlvbi5wYXlsb2FkLm5ld09yZGVyKTtcbiAgICB9LFxuICB9LFxufSk7XG5leHBvcnQgY29uc3QgeyBzZXRDYXJ0IH0gPSBjYXJ0U2xpY2UuYWN0aW9ucztcbmV4cG9ydCBkZWZhdWx0IGNhcnRTbGljZS5yZWR1Y2VyO1xuIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiY2FydFNsaWNlIiwibmFtZSIsImluaXRpYWxTdGF0ZSIsImNhcnRJdGVtcyIsInJlZHVjZXJzIiwic2V0Q2FydCIsInN0YXRlIiwiYWN0aW9uIiwibWFwIiwiaXRlbXMiLCJwYXlsb2FkIiwibmV3T3JkZXIiLCJjb25zb2xlIiwibG9nIiwicHVzaCIsImFjdGlvbnMiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/redux/cart.js\n"));

/***/ })

});