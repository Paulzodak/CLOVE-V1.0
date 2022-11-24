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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cartSlice\": function() { return /* binding */ cartSlice; },\n/* harmony export */   \"decrementQuantity\": function() { return /* binding */ decrementQuantity; },\n/* harmony export */   \"incrementQuantity\": function() { return /* binding */ incrementQuantity; },\n/* harmony export */   \"setCart\": function() { return /* binding */ setCart; },\n/* harmony export */   \"setTotal\": function() { return /* binding */ setTotal; },\n/* harmony export */   \"setTotalForEach\": function() { return /* binding */ setTotalForEach; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n\nvar cartSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n  name: \"cart\",\n  initialState: {\n    cartItems: [],\n    total: 0\n  },\n  reducers: {\n    setCart: function setCart(state, action) {\n      //  CHECKS FOR DUPLICATE ORDERS BEFORE PUSHING A NEW ORDER\n      if (state.cartItems.find(function (e) {\n        return e.name === action.payload.newOrder.name;\n      }) === undefined) {\n        state.cartItems.push(action.payload.newOrder);\n      } else {\n        console.log(\"no\");\n      }\n    },\n    decrementQuantity: function decrementQuantity(state, action) {\n      state.cartItems.map(function (item) {\n        if (action.payload.id === item.id && item.quantity > 0) {\n          item.quantity--;\n        }\n      });\n    },\n    incrementQuantity: function incrementQuantity(state, action) {\n      state.cartItems.map(function (item) {\n        if (action.payload.id === item.id) {\n          item.quantity++;\n        }\n      });\n    },\n    // Calculates total for each item\n    setTotalForEach: function setTotalForEach(state, action) {\n      state.cartItems.map(function (item) {\n        if (action.payload.id === item.id) {\n          item.total = item.price * item.quantity;\n        }\n      });\n    },\n    setTotal: function setTotal(state) {\n      var t = 0;\n      state.cartItems.map(function (item) {\n        state.total = t + item.total;\n      });\n    }\n  }\n});\nvar _cartSlice$actions = cartSlice.actions,\n    setTotalForEach = _cartSlice$actions.setTotalForEach,\n    setTotal = _cartSlice$actions.setTotal,\n    setCart = _cartSlice$actions.setCart,\n    incrementQuantity = _cartSlice$actions.incrementQuantity,\n    decrementQuantity = _cartSlice$actions.decrementQuantity;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (cartSlice.reducer);\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuZXhwb3J0IGNvbnN0IGNhcnRTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZTogXCJjYXJ0XCIsXG4gIGluaXRpYWxTdGF0ZToge1xuICAgIGNhcnRJdGVtczogW10sXG4gICAgdG90YWw6IDAsXG4gIH0sXG4gIHJlZHVjZXJzOiB7XG4gICAgc2V0Q2FydDogKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgIC8vICBDSEVDS1MgRk9SIERVUExJQ0FURSBPUkRFUlMgQkVGT1JFIFBVU0hJTkcgQSBORVcgT1JERVJcbiAgICAgIGlmIChcbiAgICAgICAgc3RhdGUuY2FydEl0ZW1zLmZpbmQoKGUpID0+IGUubmFtZSA9PT0gYWN0aW9uLnBheWxvYWQubmV3T3JkZXIubmFtZSkgPT09XG4gICAgICAgIHVuZGVmaW5lZFxuICAgICAgKSB7XG4gICAgICAgIHN0YXRlLmNhcnRJdGVtcy5wdXNoKGFjdGlvbi5wYXlsb2FkLm5ld09yZGVyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibm9cIik7XG4gICAgICB9XG4gICAgfSxcbiAgICBkZWNyZW1lbnRRdWFudGl0eTogKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgIHN0YXRlLmNhcnRJdGVtcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgaWYgKGFjdGlvbi5wYXlsb2FkLmlkID09PSBpdGVtLmlkICYmIGl0ZW0ucXVhbnRpdHkgPiAwKSB7XG4gICAgICAgICAgaXRlbS5xdWFudGl0eS0tO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGluY3JlbWVudFF1YW50aXR5OiAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgc3RhdGUuY2FydEl0ZW1zLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICBpZiAoYWN0aW9uLnBheWxvYWQuaWQgPT09IGl0ZW0uaWQpIHtcbiAgICAgICAgICBpdGVtLnF1YW50aXR5Kys7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLy8gQ2FsY3VsYXRlcyB0b3RhbCBmb3IgZWFjaCBpdGVtXG4gICAgc2V0VG90YWxGb3JFYWNoOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgc3RhdGUuY2FydEl0ZW1zLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICBpZiAoYWN0aW9uLnBheWxvYWQuaWQgPT09IGl0ZW0uaWQpIHtcbiAgICAgICAgICBpdGVtLnRvdGFsID0gaXRlbS5wcmljZSAqIGl0ZW0ucXVhbnRpdHk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG4gICAgc2V0VG90YWw6IChzdGF0ZSkgPT4ge1xuICAgICAgY29uc3QgdCA9IDA7XG4gICAgICBzdGF0ZS5jYXJ0SXRlbXMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgIHN0YXRlLnRvdGFsID0gdCArIGl0ZW0udG90YWw7XG4gICAgICB9KTtcbiAgICB9LFxuICB9LFxufSk7XG5leHBvcnQgY29uc3Qge1xuICBzZXRUb3RhbEZvckVhY2gsXG4gIHNldFRvdGFsLFxuICBzZXRDYXJ0LFxuICBpbmNyZW1lbnRRdWFudGl0eSxcbiAgZGVjcmVtZW50UXVhbnRpdHksXG59ID0gY2FydFNsaWNlLmFjdGlvbnM7XG5leHBvcnQgZGVmYXVsdCBjYXJ0U2xpY2UucmVkdWNlcjtcbiJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImNhcnRTbGljZSIsIm5hbWUiLCJpbml0aWFsU3RhdGUiLCJjYXJ0SXRlbXMiLCJ0b3RhbCIsInJlZHVjZXJzIiwic2V0Q2FydCIsInN0YXRlIiwiYWN0aW9uIiwiZmluZCIsImUiLCJwYXlsb2FkIiwibmV3T3JkZXIiLCJ1bmRlZmluZWQiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsImRlY3JlbWVudFF1YW50aXR5IiwibWFwIiwiaXRlbSIsImlkIiwicXVhbnRpdHkiLCJpbmNyZW1lbnRRdWFudGl0eSIsInNldFRvdGFsRm9yRWFjaCIsInByaWNlIiwic2V0VG90YWwiLCJ0IiwiYWN0aW9ucyIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/redux/cart.js\n"));

/***/ })

});