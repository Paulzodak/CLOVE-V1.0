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

/***/ "./components/NAVBAR/Search.js":
/*!*************************************!*\
  !*** ./components/NAVBAR/Search.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _UI_Input_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../UI/Input.styled */ \"./components/UI/Input.styled.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/ui */ \"./components/redux/ui.js\");\n/* harmony import */ var _redux_search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/search */ \"./components/redux/search.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"/Users/ojepauloluwaferanmi/Documents/DEVELOPMENT/CLOVE-V1.0/components/NAVBAR/Search.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar SearchInput = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].input.withConfig({\n  displayName: \"Search__SearchInput\",\n  componentId: \"sc-cu25ep-0\"\n})([\"height:80%;margin:1% 0;width:100%;border:none;background-color:#3d3d49;border-radius:2rem;font-size:1rem;padding:0 9rem 0 2rem;color:white;&:focus{color:white;border:none;}@media (max-width:500px){padding:0 7rem 0 1rem;}\"]);\n_c = SearchInput;\n\nvar Search = function Search() {\n  _s();\n\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n  var inputs = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {\n    return state.search.userInput;\n  });\n  console.log(inputs);\n\n  var focusHandler = function focusHandler() {\n    dispatch((0,_redux_ui__WEBPACK_IMPORTED_MODULE_3__.setSearchMode)({\n      searchMode: true\n    }));\n  };\n\n  var inputHandler = function inputHandler(e) {\n    dispatch((0,_redux_search__WEBPACK_IMPORTED_MODULE_4__.setUserInput)({\n      userInput: e.target.value\n    }));\n  };\n\n  var blurHandler = function blurHandler(e) {\n    dispatch((0,_redux_ui__WEBPACK_IMPORTED_MODULE_3__.setSearchMode)({\n      searchMode: false\n    }));\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(SearchInput, {\n    className: \"NavInput\",\n    placeholder: \"Type Here...\",\n    onFocus: focusHandler,\n    onChange: inputHandler,\n    onBlur: blurHandler,\n    value: inputs\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 40,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Search, \"KM3w+2EeT+XA3jeORyKMiqNqv18=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch, react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector];\n});\n\n_c2 = Search;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Search);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"SearchInput\");\n$RefreshReg$(_c2, \"Search\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05BVkJBUi9TZWFyY2guanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTU8sV0FBVyxHQUFHRCwwRUFBSDtFQUFBO0VBQUE7QUFBQSxvT0FBakI7S0FBTUM7O0FBa0JOLElBQU1FLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07RUFBQTs7RUFDbkIsSUFBTUMsUUFBUSxHQUFHUix3REFBVyxFQUE1QjtFQUNBLElBQU1TLE1BQU0sR0FBR1Isd0RBQVcsQ0FBQyxVQUFDUyxLQUFEO0lBQUEsT0FBV0EsS0FBSyxDQUFDQyxNQUFOLENBQWFDLFNBQXhCO0VBQUEsQ0FBRCxDQUExQjtFQUNBQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUwsTUFBWjs7RUFDQSxJQUFNTSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0lBQ3pCUCxRQUFRLENBQUNOLHdEQUFhLENBQUM7TUFBRWMsVUFBVSxFQUFFO0lBQWQsQ0FBRCxDQUFkLENBQVI7RUFDRCxDQUZEOztFQUdBLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLENBQUQsRUFBTztJQUMxQlYsUUFBUSxDQUFDTCwyREFBWSxDQUFDO01BQUVTLFNBQVMsRUFBRU0sQ0FBQyxDQUFDQyxNQUFGLENBQVNDO0lBQXRCLENBQUQsQ0FBYixDQUFSO0VBQ0QsQ0FGRDs7RUFHQSxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDSCxDQUFELEVBQU87SUFDekJWLFFBQVEsQ0FBQ04sd0RBQWEsQ0FBQztNQUFFYyxVQUFVLEVBQUU7SUFBZCxDQUFELENBQWQsQ0FBUjtFQUNELENBRkQ7O0VBR0Esb0JBQ0UsOERBQUMsV0FBRDtJQUNFLFNBQVMsRUFBQyxVQURaO0lBRUUsV0FBVyxFQUFFLGNBRmY7SUFHRSxPQUFPLEVBQUVELFlBSFg7SUFJRSxRQUFRLEVBQUVFLFlBSlo7SUFLRSxNQUFNLEVBQUVJLFdBTFY7SUFNRSxLQUFLLEVBQUVaO0VBTlQ7SUFBQTtJQUFBO0lBQUE7RUFBQSxTQURGO0FBVUQsQ0F2QkQ7O0dBQU1GO1VBQ2FQLHNEQUNGQzs7O01BRlhNO0FBeUJOLCtEQUFlQSxNQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTkFWQkFSL1NlYXJjaC5qcz9mYjQzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IElucHV0Q2FyZCB9IGZyb20gXCIuLi9VSS9JbnB1dC5zdHlsZWRcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgc2V0U2VhcmNoTW9kZSB9IGZyb20gXCIuLi9yZWR1eC91aVwiO1xuaW1wb3J0IHsgc2V0VXNlcklucHV0IH0gZnJvbSBcIi4uL3JlZHV4L3NlYXJjaFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuY29uc3QgU2VhcmNoSW5wdXQgPSBzdHlsZWQuaW5wdXRgXG4gIGhlaWdodDogODAlO1xuICBtYXJnaW46IDElIDA7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZDNkNDk7XG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgcGFkZGluZzogMCA5cmVtIDAgMnJlbTtcbiAgY29sb3I6IHdoaXRlO1xuICAmOmZvY3VzIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiBub25lO1xuICB9XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xuICAgIHBhZGRpbmc6IDAgN3JlbSAwIDFyZW07XG4gIH1cbmA7XG5jb25zdCBTZWFyY2ggPSAoKSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgaW5wdXRzID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5zZWFyY2gudXNlcklucHV0KTtcbiAgY29uc29sZS5sb2coaW5wdXRzKTtcbiAgY29uc3QgZm9jdXNIYW5kbGVyID0gKCkgPT4ge1xuICAgIGRpc3BhdGNoKHNldFNlYXJjaE1vZGUoeyBzZWFyY2hNb2RlOiB0cnVlIH0pKTtcbiAgfTtcbiAgY29uc3QgaW5wdXRIYW5kbGVyID0gKGUpID0+IHtcbiAgICBkaXNwYXRjaChzZXRVc2VySW5wdXQoeyB1c2VySW5wdXQ6IGUudGFyZ2V0LnZhbHVlIH0pKTtcbiAgfTtcbiAgY29uc3QgYmx1ckhhbmRsZXIgPSAoZSkgPT4ge1xuICAgIGRpc3BhdGNoKHNldFNlYXJjaE1vZGUoeyBzZWFyY2hNb2RlOiBmYWxzZSB9KSk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPFNlYXJjaElucHV0XG4gICAgICBjbGFzc05hbWU9XCJOYXZJbnB1dFwiXG4gICAgICBwbGFjZWhvbGRlcj17XCJUeXBlIEhlcmUuLi5cIn1cbiAgICAgIG9uRm9jdXM9e2ZvY3VzSGFuZGxlcn1cbiAgICAgIG9uQ2hhbmdlPXtpbnB1dEhhbmRsZXJ9XG4gICAgICBvbkJsdXI9e2JsdXJIYW5kbGVyfVxuICAgICAgdmFsdWU9e2lucHV0c31cbiAgICAvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiSW5wdXRDYXJkIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInNldFNlYXJjaE1vZGUiLCJzZXRVc2VySW5wdXQiLCJzdHlsZWQiLCJTZWFyY2hJbnB1dCIsImlucHV0IiwiU2VhcmNoIiwiZGlzcGF0Y2giLCJpbnB1dHMiLCJzdGF0ZSIsInNlYXJjaCIsInVzZXJJbnB1dCIsImNvbnNvbGUiLCJsb2ciLCJmb2N1c0hhbmRsZXIiLCJzZWFyY2hNb2RlIiwiaW5wdXRIYW5kbGVyIiwiZSIsInRhcmdldCIsInZhbHVlIiwiYmx1ckhhbmRsZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/NAVBAR/Search.js\n"));

/***/ })

});