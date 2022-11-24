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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cartSlice\": function() { return /* binding */ cartSlice; },\n/* harmony export */   \"decrementQuantity\": function() { return /* binding */ decrementQuantity; },\n/* harmony export */   \"incrementQuantity\": function() { return /* binding */ incrementQuantity; },\n/* harmony export */   \"setCart\": function() { return /* binding */ setCart; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n\nvar cartSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n  name: \"cart\",\n  initialState: {\n    cartItems: [],\n    total: cartItem.map(function (items) {\n      var total = 0;\n      return total + items.price * items.quantity;\n    })\n  },\n  reducers: {\n    setCart: function setCart(state, action) {\n      //  CHECKS FOR DUPLICATE ORDERS\n      if (state.cartItems.find(function (e) {\n        return e.name === action.payload.newOrder.name;\n      }) === undefined) {\n        state.cartItems.push(action.payload.newOrder);\n      } else {\n        console.log(\"no\");\n      }\n    },\n    decrementQuantity: function decrementQuantity(state, action) {\n      state.cartItems.map(function (item) {\n        if (action.payload.id === item.id && item.quantity > 0) {\n          item.quantity--;\n        }\n      });\n    },\n    incrementQuantity: function incrementQuantity(state, action) {\n      state.cartItems.map(function (item) {\n        if (action.payload.id === item.id) {\n          item.quantity++;\n        }\n      });\n    }\n  }\n});\nvar _cartSlice$actions = cartSlice.actions,\n    setCart = _cartSlice$actions.setCart,\n    incrementQuantity = _cartSlice$actions.incrementQuantity,\n    decrementQuantity = _cartSlice$actions.decrementQuantity;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (cartSlice.reducer);\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3JlZHV4L2NhcnQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNPLElBQU1DLFNBQVMsR0FBR0QsNkRBQVcsQ0FBQztFQUNuQ0UsSUFBSSxFQUFFLE1BRDZCO0VBRW5DQyxZQUFZLEVBQUU7SUFDWkMsU0FBUyxFQUFFLEVBREM7SUFFWkMsS0FBSyxFQUFFQyxRQUFRLENBQUNDLEdBQVQsQ0FBYSxVQUFDQyxLQUFELEVBQVc7TUFDN0IsSUFBTUgsS0FBSyxHQUFHLENBQWQ7TUFDQSxPQUFPQSxLQUFLLEdBQUdHLEtBQUssQ0FBQ0MsS0FBTixHQUFjRCxLQUFLLENBQUNFLFFBQW5DO0lBQ0QsQ0FITTtFQUZLLENBRnFCO0VBU25DQyxRQUFRLEVBQUU7SUFDUkMsT0FBTyxFQUFFLGlCQUFDQyxLQUFELEVBQVFDLE1BQVIsRUFBbUI7TUFDMUI7TUFDQSxJQUNFRCxLQUFLLENBQUNULFNBQU4sQ0FBZ0JXLElBQWhCLENBQXFCLFVBQUNDLENBQUQ7UUFBQSxPQUFPQSxDQUFDLENBQUNkLElBQUYsS0FBV1ksTUFBTSxDQUFDRyxPQUFQLENBQWVDLFFBQWYsQ0FBd0JoQixJQUExQztNQUFBLENBQXJCLE1BQ0FpQixTQUZGLEVBR0U7UUFDQU4sS0FBSyxDQUFDVCxTQUFOLENBQWdCZ0IsSUFBaEIsQ0FBcUJOLE1BQU0sQ0FBQ0csT0FBUCxDQUFlQyxRQUFwQztNQUNELENBTEQsTUFLTztRQUNMRyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxJQUFaO01BQ0Q7SUFDRixDQVhPO0lBWVJDLGlCQUFpQixFQUFFLDJCQUFDVixLQUFELEVBQVFDLE1BQVIsRUFBbUI7TUFDcENELEtBQUssQ0FBQ1QsU0FBTixDQUFnQkcsR0FBaEIsQ0FBb0IsVUFBQ2lCLElBQUQsRUFBVTtRQUM1QixJQUFJVixNQUFNLENBQUNHLE9BQVAsQ0FBZVEsRUFBZixLQUFzQkQsSUFBSSxDQUFDQyxFQUEzQixJQUFpQ0QsSUFBSSxDQUFDZCxRQUFMLEdBQWdCLENBQXJELEVBQXdEO1VBQ3REYyxJQUFJLENBQUNkLFFBQUw7UUFDRDtNQUNGLENBSkQ7SUFLRCxDQWxCTztJQW1CUmdCLGlCQUFpQixFQUFFLDJCQUFDYixLQUFELEVBQVFDLE1BQVIsRUFBbUI7TUFDcENELEtBQUssQ0FBQ1QsU0FBTixDQUFnQkcsR0FBaEIsQ0FBb0IsVUFBQ2lCLElBQUQsRUFBVTtRQUM1QixJQUFJVixNQUFNLENBQUNHLE9BQVAsQ0FBZVEsRUFBZixLQUFzQkQsSUFBSSxDQUFDQyxFQUEvQixFQUFtQztVQUNqQ0QsSUFBSSxDQUFDZCxRQUFMO1FBQ0Q7TUFDRixDQUpEO0lBS0Q7RUF6Qk87QUFUeUIsQ0FBRCxDQUE3QjtBQXFDQSx5QkFDTFQsU0FBUyxDQUFDMEIsT0FETDtBQUFBLElBQVFmLE9BQVIsc0JBQVFBLE9BQVI7QUFBQSxJQUFpQmMsaUJBQWpCLHNCQUFpQkEsaUJBQWpCO0FBQUEsSUFBb0NILGlCQUFwQyxzQkFBb0NBLGlCQUFwQzs7QUFFUCwrREFBZXRCLFNBQVMsQ0FBQzJCLE9BQXpCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcmVkdXgvY2FydC5qcz8xZmFjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcbmV4cG9ydCBjb25zdCBjYXJ0U2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6IFwiY2FydFwiLFxuICBpbml0aWFsU3RhdGU6IHtcbiAgICBjYXJ0SXRlbXM6IFtdLFxuICAgIHRvdGFsOiBjYXJ0SXRlbS5tYXAoKGl0ZW1zKSA9PiB7XG4gICAgICBjb25zdCB0b3RhbCA9IDA7XG4gICAgICByZXR1cm4gdG90YWwgKyBpdGVtcy5wcmljZSAqIGl0ZW1zLnF1YW50aXR5O1xuICAgIH0pLFxuICB9LFxuICByZWR1Y2Vyczoge1xuICAgIHNldENhcnQ6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAvLyAgQ0hFQ0tTIEZPUiBEVVBMSUNBVEUgT1JERVJTXG4gICAgICBpZiAoXG4gICAgICAgIHN0YXRlLmNhcnRJdGVtcy5maW5kKChlKSA9PiBlLm5hbWUgPT09IGFjdGlvbi5wYXlsb2FkLm5ld09yZGVyLm5hbWUpID09PVxuICAgICAgICB1bmRlZmluZWRcbiAgICAgICkge1xuICAgICAgICBzdGF0ZS5jYXJ0SXRlbXMucHVzaChhY3Rpb24ucGF5bG9hZC5uZXdPcmRlcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhcIm5vXCIpO1xuICAgICAgfVxuICAgIH0sXG4gICAgZGVjcmVtZW50UXVhbnRpdHk6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICBzdGF0ZS5jYXJ0SXRlbXMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgIGlmIChhY3Rpb24ucGF5bG9hZC5pZCA9PT0gaXRlbS5pZCAmJiBpdGVtLnF1YW50aXR5ID4gMCkge1xuICAgICAgICAgIGl0ZW0ucXVhbnRpdHktLTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcbiAgICBpbmNyZW1lbnRRdWFudGl0eTogKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgIHN0YXRlLmNhcnRJdGVtcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgaWYgKGFjdGlvbi5wYXlsb2FkLmlkID09PSBpdGVtLmlkKSB7XG4gICAgICAgICAgaXRlbS5xdWFudGl0eSsrO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuICB9LFxufSk7XG5leHBvcnQgY29uc3QgeyBzZXRDYXJ0LCBpbmNyZW1lbnRRdWFudGl0eSwgZGVjcmVtZW50UXVhbnRpdHkgfSA9XG4gIGNhcnRTbGljZS5hY3Rpb25zO1xuZXhwb3J0IGRlZmF1bHQgY2FydFNsaWNlLnJlZHVjZXI7XG4iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJjYXJ0U2xpY2UiLCJuYW1lIiwiaW5pdGlhbFN0YXRlIiwiY2FydEl0ZW1zIiwidG90YWwiLCJjYXJ0SXRlbSIsIm1hcCIsIml0ZW1zIiwicHJpY2UiLCJxdWFudGl0eSIsInJlZHVjZXJzIiwic2V0Q2FydCIsInN0YXRlIiwiYWN0aW9uIiwiZmluZCIsImUiLCJwYXlsb2FkIiwibmV3T3JkZXIiLCJ1bmRlZmluZWQiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsImRlY3JlbWVudFF1YW50aXR5IiwiaXRlbSIsImlkIiwiaW5jcmVtZW50UXVhbnRpdHkiLCJhY3Rpb25zIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/redux/cart.js\n"));

/***/ })

});