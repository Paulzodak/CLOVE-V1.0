/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/redux/cart.js":
/*!**********************************!*\
  !*** ./components/redux/cart.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cartSlice\": () => (/* binding */ cartSlice),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"setCart\": () => (/* binding */ setCart)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst cartSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n  name: \"cart\",\n  initialState: {\n    cartItems: []\n  },\n  reducers: {\n    setCart: (state, action) => {\n      state.cartItems.push(action.payload.newOrder);\n    }\n  }\n});\nconst {\n  setCart\n} = cartSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cartSlice.reducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3JlZHV4L2NhcnQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNPLE1BQU1DLFNBQVMsR0FBR0QsNkRBQVcsQ0FBQztFQUNuQ0UsSUFBSSxFQUFFLE1BRDZCO0VBRW5DQyxZQUFZLEVBQUU7SUFDWkMsU0FBUyxFQUFFO0VBREMsQ0FGcUI7RUFLbkNDLFFBQVEsRUFBRTtJQUNSQyxPQUFPLEVBQUUsQ0FBQ0MsS0FBRCxFQUFRQyxNQUFSLEtBQW1CO01BQzFCRCxLQUFLLENBQUNILFNBQU4sQ0FBZ0JLLElBQWhCLENBQXFCRCxNQUFNLENBQUNFLE9BQVAsQ0FBZUMsUUFBcEM7SUFDRDtFQUhPO0FBTHlCLENBQUQsQ0FBN0I7QUFXQSxNQUFNO0VBQUVMO0FBQUYsSUFBY0wsU0FBUyxDQUFDVyxPQUE5QjtBQUNQLGlFQUFlWCxTQUFTLENBQUNZLE9BQXpCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8veS8uL2NvbXBvbmVudHMvcmVkdXgvY2FydC5qcz8xZmFjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcbmV4cG9ydCBjb25zdCBjYXJ0U2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6IFwiY2FydFwiLFxuICBpbml0aWFsU3RhdGU6IHtcbiAgICBjYXJ0SXRlbXM6IFtdLFxuICB9LFxuICByZWR1Y2Vyczoge1xuICAgIHNldENhcnQ6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICBzdGF0ZS5jYXJ0SXRlbXMucHVzaChhY3Rpb24ucGF5bG9hZC5uZXdPcmRlcik7XG4gICAgfSxcbiAgfSxcbn0pO1xuZXhwb3J0IGNvbnN0IHsgc2V0Q2FydCB9ID0gY2FydFNsaWNlLmFjdGlvbnM7XG5leHBvcnQgZGVmYXVsdCBjYXJ0U2xpY2UucmVkdWNlcjtcbiJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImNhcnRTbGljZSIsIm5hbWUiLCJpbml0aWFsU3RhdGUiLCJjYXJ0SXRlbXMiLCJyZWR1Y2VycyIsInNldENhcnQiLCJzdGF0ZSIsImFjdGlvbiIsInB1c2giLCJwYXlsb2FkIiwibmV3T3JkZXIiLCJhY3Rpb25zIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/redux/cart.js\n");

/***/ }),

/***/ "./components/redux/search.js":
/*!************************************!*\
  !*** ./components/redux/search.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"searchSlice\": () => (/* binding */ searchSlice),\n/* harmony export */   \"setUserInput\": () => (/* binding */ setUserInput)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst searchSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n  name: \"search\",\n  initialState: {\n    userInput: \"\"\n  },\n  reducers: {\n    setUserInput: (state, action) => {\n      state.userInput = action.payload.userInput;\n    }\n  }\n});\nconst {\n  setUserInput\n} = searchSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (searchSlice.reducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3JlZHV4L3NlYXJjaC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ08sTUFBTUMsV0FBVyxHQUFHRCw2REFBVyxDQUFDO0VBQ3JDRSxJQUFJLEVBQUUsUUFEK0I7RUFFckNDLFlBQVksRUFBRTtJQUNaQyxTQUFTLEVBQUU7RUFEQyxDQUZ1QjtFQUtyQ0MsUUFBUSxFQUFFO0lBQ1JDLFlBQVksRUFBRSxDQUFDQyxLQUFELEVBQVFDLE1BQVIsS0FBbUI7TUFDL0JELEtBQUssQ0FBQ0gsU0FBTixHQUFrQkksTUFBTSxDQUFDQyxPQUFQLENBQWVMLFNBQWpDO0lBQ0Q7RUFITztBQUwyQixDQUFELENBQS9CO0FBV0EsTUFBTTtFQUFFRTtBQUFGLElBQW1CTCxXQUFXLENBQUNTLE9BQXJDO0FBQ1AsaUVBQWVULFdBQVcsQ0FBQ1UsT0FBM0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly95Ly4vY29tcG9uZW50cy9yZWR1eC9zZWFyY2guanM/MWM3MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5leHBvcnQgY29uc3Qgc2VhcmNoU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6IFwic2VhcmNoXCIsXG4gIGluaXRpYWxTdGF0ZToge1xuICAgIHVzZXJJbnB1dDogXCJcIixcbiAgfSxcbiAgcmVkdWNlcnM6IHtcbiAgICBzZXRVc2VySW5wdXQ6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICBzdGF0ZS51c2VySW5wdXQgPSBhY3Rpb24ucGF5bG9hZC51c2VySW5wdXQ7XG4gICAgfSxcbiAgfSxcbn0pO1xuZXhwb3J0IGNvbnN0IHsgc2V0VXNlcklucHV0IH0gPSBzZWFyY2hTbGljZS5hY3Rpb25zO1xuZXhwb3J0IGRlZmF1bHQgc2VhcmNoU2xpY2UucmVkdWNlcjtcbiJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsInNlYXJjaFNsaWNlIiwibmFtZSIsImluaXRpYWxTdGF0ZSIsInVzZXJJbnB1dCIsInJlZHVjZXJzIiwic2V0VXNlcklucHV0Iiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwiYWN0aW9ucyIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/redux/search.js\n");

/***/ }),

/***/ "./components/redux/store.js":
/*!***********************************!*\
  !*** ./components/redux/store.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./components/redux/styles.js\");\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui */ \"./components/redux/ui.js\");\n/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search */ \"./components/redux/search.js\");\n/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cart */ \"./components/redux/cart.js\");\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n  reducer: {\n    styles: _styles__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    ui: _ui__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    search: _search__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    cart: _cart__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n  }\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3JlZHV4L3N0b3JlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWVBLGdFQUFjLENBQUM7RUFDNUJLLE9BQU8sRUFBRTtJQUNQSixNQUFNLEVBQUVBLCtDQUREO0lBRVBDLEVBQUUsRUFBRUEsMkNBRkc7SUFHUEMsTUFBTSxFQUFFQSwrQ0FIRDtJQUlQQyxJQUFJLEVBQUVBLDZDQUFJQTtFQUpIO0FBRG1CLENBQUQsQ0FBN0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly95Ly4vY29tcG9uZW50cy9yZWR1eC9zdG9yZS5qcz9kMzBiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzXCI7XG5pbXBvcnQgdWkgZnJvbSBcIi4vdWlcIjtcbmltcG9ydCBzZWFyY2ggZnJvbSBcIi4vc2VhcmNoXCI7XG5pbXBvcnQgY2FydCBmcm9tIFwiLi9jYXJ0XCI7XG5leHBvcnQgZGVmYXVsdCBjb25maWd1cmVTdG9yZSh7XG4gIHJlZHVjZXI6IHtcbiAgICBzdHlsZXM6IHN0eWxlcyxcbiAgICB1aTogdWksXG4gICAgc2VhcmNoOiBzZWFyY2gsXG4gICAgY2FydDogY2FydCxcbiAgfSxcbn0pO1xuIl0sIm5hbWVzIjpbImNvbmZpZ3VyZVN0b3JlIiwic3R5bGVzIiwidWkiLCJzZWFyY2giLCJjYXJ0IiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/redux/store.js\n");

/***/ }),

/***/ "./components/redux/styles.js":
/*!************************************!*\
  !*** ./components/redux/styles.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"styleSlice\": () => (/* binding */ styleSlice)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst styleSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n  name: \"styles\",\n  initialState: {\n    colors: {\n      buttonBlue: \"#1A7AEC\",\n      white: \"white\",\n      borderGrey: \"#E5E5E5\",\n      lightGrey: \"rgb(246, 246, 246)\",\n      darkGrey: \" #6c6c6c\"\n    },\n    fonts: {},\n    icons: {}\n  },\n  reducers: {}\n});\nconst {} = styleSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styleSlice.reducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3JlZHV4L3N0eWxlcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDTyxNQUFNQyxVQUFVLEdBQUdELDZEQUFXLENBQUM7RUFDcENFLElBQUksRUFBRSxRQUQ4QjtFQUVwQ0MsWUFBWSxFQUFFO0lBQ1pDLE1BQU0sRUFBRTtNQUNOQyxVQUFVLEVBQUUsU0FETjtNQUVOQyxLQUFLLEVBQUUsT0FGRDtNQUdOQyxVQUFVLEVBQUUsU0FITjtNQUlOQyxTQUFTLEVBQUUsb0JBSkw7TUFLTkMsUUFBUSxFQUFFO0lBTEosQ0FESTtJQVFaQyxLQUFLLEVBQUUsRUFSSztJQVNaQyxLQUFLLEVBQUU7RUFUSyxDQUZzQjtFQWFwQ0MsUUFBUSxFQUFFO0FBYjBCLENBQUQsQ0FBOUI7QUFlQSxNQUFNLEtBQUtYLFVBQVUsQ0FBQ1ksT0FBdEI7QUFFUCxpRUFBZVosVUFBVSxDQUFDYSxPQUExQiIsInNvdXJjZXMiOlsid2VicGFjazovL3kvLi9jb21wb25lbnRzL3JlZHV4L3N0eWxlcy5qcz9kOTI2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcbmV4cG9ydCBjb25zdCBzdHlsZVNsaWNlID0gY3JlYXRlU2xpY2Uoe1xuICBuYW1lOiBcInN0eWxlc1wiLFxuICBpbml0aWFsU3RhdGU6IHtcbiAgICBjb2xvcnM6IHtcbiAgICAgIGJ1dHRvbkJsdWU6IFwiIzFBN0FFQ1wiLFxuICAgICAgd2hpdGU6IFwid2hpdGVcIixcbiAgICAgIGJvcmRlckdyZXk6IFwiI0U1RTVFNVwiLFxuICAgICAgbGlnaHRHcmV5OiBcInJnYigyNDYsIDI0NiwgMjQ2KVwiLFxuICAgICAgZGFya0dyZXk6IFwiICM2YzZjNmNcIixcbiAgICB9LFxuICAgIGZvbnRzOiB7fSxcbiAgICBpY29uczoge30sXG4gIH0sXG4gIHJlZHVjZXJzOiB7fSxcbn0pO1xuZXhwb3J0IGNvbnN0IHt9ID0gc3R5bGVTbGljZS5hY3Rpb25zO1xuXG5leHBvcnQgZGVmYXVsdCBzdHlsZVNsaWNlLnJlZHVjZXI7XG4iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJzdHlsZVNsaWNlIiwibmFtZSIsImluaXRpYWxTdGF0ZSIsImNvbG9ycyIsImJ1dHRvbkJsdWUiLCJ3aGl0ZSIsImJvcmRlckdyZXkiLCJsaWdodEdyZXkiLCJkYXJrR3JleSIsImZvbnRzIiwiaWNvbnMiLCJyZWR1Y2VycyIsImFjdGlvbnMiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/redux/styles.js\n");

/***/ }),

/***/ "./components/redux/ui.js":
/*!********************************!*\
  !*** ./components/redux/ui.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"setSearchMode\": () => (/* binding */ setSearchMode),\n/* harmony export */   \"uiSlice\": () => (/* binding */ uiSlice)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst uiSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n  name: \"ui\",\n  initialState: {\n    searchMode: false,\n    showCart: false\n  },\n  reducers: {\n    setSearchMode: (state, action) => {\n      state.searchMode = action.payload.searchMode;\n    },\n    setShowCart: (state, action) => {\n      state.showCart = action.payload.showCart;\n    }\n  }\n});\nconst {\n  setSearchMode\n} = uiSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (uiSlice.reducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3JlZHV4L3VpLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFFTyxNQUFNQyxPQUFPLEdBQUdELDZEQUFXLENBQUM7RUFDakNFLElBQUksRUFBRSxJQUQyQjtFQUVqQ0MsWUFBWSxFQUFFO0lBQ1pDLFVBQVUsRUFBRSxLQURBO0lBRVpDLFFBQVEsRUFBRTtFQUZFLENBRm1CO0VBTWpDQyxRQUFRLEVBQUU7SUFDUkMsYUFBYSxFQUFFLENBQUNDLEtBQUQsRUFBUUMsTUFBUixLQUFtQjtNQUNoQ0QsS0FBSyxDQUFDSixVQUFOLEdBQW1CSyxNQUFNLENBQUNDLE9BQVAsQ0FBZU4sVUFBbEM7SUFDRCxDQUhPO0lBSVJPLFdBQVcsRUFBRSxDQUFDSCxLQUFELEVBQVFDLE1BQVIsS0FBbUI7TUFDOUJELEtBQUssQ0FBQ0gsUUFBTixHQUFpQkksTUFBTSxDQUFDQyxPQUFQLENBQWVMLFFBQWhDO0lBQ0Q7RUFOTztBQU51QixDQUFELENBQTNCO0FBZUEsTUFBTTtFQUFFRTtBQUFGLElBQW9CTixPQUFPLENBQUNXLE9BQWxDO0FBQ1AsaUVBQWVYLE9BQU8sQ0FBQ1ksT0FBdkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly95Ly4vY29tcG9uZW50cy9yZWR1eC91aS5qcz9iODkzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcblxuZXhwb3J0IGNvbnN0IHVpU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6IFwidWlcIixcbiAgaW5pdGlhbFN0YXRlOiB7XG4gICAgc2VhcmNoTW9kZTogZmFsc2UsXG4gICAgc2hvd0NhcnQ6IGZhbHNlLFxuICB9LFxuICByZWR1Y2Vyczoge1xuICAgIHNldFNlYXJjaE1vZGU6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICBzdGF0ZS5zZWFyY2hNb2RlID0gYWN0aW9uLnBheWxvYWQuc2VhcmNoTW9kZTtcbiAgICB9LFxuICAgIHNldFNob3dDYXJ0OiAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgc3RhdGUuc2hvd0NhcnQgPSBhY3Rpb24ucGF5bG9hZC5zaG93Q2FydDtcbiAgICB9LFxuICB9LFxufSk7XG5leHBvcnQgY29uc3QgeyBzZXRTZWFyY2hNb2RlIH0gPSB1aVNsaWNlLmFjdGlvbnM7XG5leHBvcnQgZGVmYXVsdCB1aVNsaWNlLnJlZHVjZXI7XG4iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJ1aVNsaWNlIiwibmFtZSIsImluaXRpYWxTdGF0ZSIsInNlYXJjaE1vZGUiLCJzaG93Q2FydCIsInJlZHVjZXJzIiwic2V0U2VhcmNoTW9kZSIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsInNldFNob3dDYXJ0IiwiYWN0aW9ucyIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/redux/ui.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/redux/store */ \"./components/redux/store.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/ojepauloluwaferanmi/Documents/DEVELOPMENT/CLOVE-V1.0/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_1__.Provider, {\n    store: _components_redux_store__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7OztBQUVBLFNBQVNFLEtBQVQsQ0FBZTtFQUFFQyxTQUFGO0VBQWFDO0FBQWIsQ0FBZixFQUF5QztFQUN2QyxvQkFDRSw4REFBQyxpREFBRDtJQUFVLEtBQUssRUFBRUgsK0RBQWpCO0lBQUEsdUJBQ0UsOERBQUMsU0FBRCxvQkFBZUcsU0FBZjtNQUFBO01BQUE7TUFBQTtJQUFBO0VBREY7SUFBQTtJQUFBO0lBQUE7RUFBQSxRQURGO0FBS0Q7O0FBRUQsaUVBQWVGLEtBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly95Ly4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBzdG9yZSBmcm9tIFwiLi4vY29tcG9uZW50cy9yZWR1eC9zdG9yZVwiO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L1Byb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJuYW1lcyI6WyJQcm92aWRlciIsInN0b3JlIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();