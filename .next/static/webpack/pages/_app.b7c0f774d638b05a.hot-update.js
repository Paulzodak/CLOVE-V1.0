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

/***/ "./components/redux/ui.js":
/*!********************************!*\
  !*** ./components/redux/ui.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setSearchMode\": function() { return /* binding */ setSearchMode; },\n/* harmony export */   \"setShowCart\": function() { return /* binding */ setShowCart; },\n/* harmony export */   \"uiSlice\": function() { return /* binding */ uiSlice; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n\nvar uiSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n  name: \"ui\",\n  initialState: {\n    searchMode: false,\n    showCart: false\n  },\n  reducers: {\n    setSearchMode: function setSearchMode(state, action) {\n      state.searchMode = action.payload.searchMode;\n    },\n    setShowCart: function setShowCart(state, action) {\n      state.showCart = action.payload.showCart;\n    }\n  }\n});\nvar _uiSlice$actions = uiSlice.actions,\n    setSearchMode = _uiSlice$actions.setSearchMode,\n    setShowCart = _uiSlice$actions.setShowCart;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (uiSlice.reducer);\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3JlZHV4L3VpLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUVPLElBQU1DLE9BQU8sR0FBR0QsNkRBQVcsQ0FBQztFQUNqQ0UsSUFBSSxFQUFFLElBRDJCO0VBRWpDQyxZQUFZLEVBQUU7SUFDWkMsVUFBVSxFQUFFLEtBREE7SUFFWkMsUUFBUSxFQUFFO0VBRkUsQ0FGbUI7RUFNakNDLFFBQVEsRUFBRTtJQUNSQyxhQUFhLEVBQUUsdUJBQUNDLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtNQUNoQ0QsS0FBSyxDQUFDSixVQUFOLEdBQW1CSyxNQUFNLENBQUNDLE9BQVAsQ0FBZU4sVUFBbEM7SUFDRCxDQUhPO0lBSVJPLFdBQVcsRUFBRSxxQkFBQ0gsS0FBRCxFQUFRQyxNQUFSLEVBQW1CO01BQzlCRCxLQUFLLENBQUNILFFBQU4sR0FBaUJJLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlTCxRQUFoQztJQUNEO0VBTk87QUFOdUIsQ0FBRCxDQUEzQjtBQWVBLHVCQUF1Q0osT0FBTyxDQUFDVyxPQUEvQztBQUFBLElBQVFMLGFBQVIsb0JBQVFBLGFBQVI7QUFBQSxJQUF1QkksV0FBdkIsb0JBQXVCQSxXQUF2Qjs7QUFDUCwrREFBZVYsT0FBTyxDQUFDWSxPQUF2QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3JlZHV4L3VpLmpzP2I4OTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuXG5leHBvcnQgY29uc3QgdWlTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZTogXCJ1aVwiLFxuICBpbml0aWFsU3RhdGU6IHtcbiAgICBzZWFyY2hNb2RlOiBmYWxzZSxcbiAgICBzaG93Q2FydDogZmFsc2UsXG4gIH0sXG4gIHJlZHVjZXJzOiB7XG4gICAgc2V0U2VhcmNoTW9kZTogKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgIHN0YXRlLnNlYXJjaE1vZGUgPSBhY3Rpb24ucGF5bG9hZC5zZWFyY2hNb2RlO1xuICAgIH0sXG4gICAgc2V0U2hvd0NhcnQ6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICBzdGF0ZS5zaG93Q2FydCA9IGFjdGlvbi5wYXlsb2FkLnNob3dDYXJ0O1xuICAgIH0sXG4gIH0sXG59KTtcbmV4cG9ydCBjb25zdCB7IHNldFNlYXJjaE1vZGUsIHNldFNob3dDYXJ0IH0gPSB1aVNsaWNlLmFjdGlvbnM7XG5leHBvcnQgZGVmYXVsdCB1aVNsaWNlLnJlZHVjZXI7XG4iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJ1aVNsaWNlIiwibmFtZSIsImluaXRpYWxTdGF0ZSIsInNlYXJjaE1vZGUiLCJzaG93Q2FydCIsInJlZHVjZXJzIiwic2V0U2VhcmNoTW9kZSIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsInNldFNob3dDYXJ0IiwiYWN0aW9ucyIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/redux/ui.js\n"));

/***/ })

});