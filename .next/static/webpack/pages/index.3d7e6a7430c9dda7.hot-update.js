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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _UI_Input_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../UI/Input.styled */ \"./components/UI/Input.styled.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/ui */ \"./components/redux/ui.js\");\n/* harmony import */ var _redux_search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/search */ \"./components/redux/search.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"/Users/ojepauloluwaferanmi/Documents/DEVELOPMENT/CLOVE-V1.0/components/NAVBAR/Search.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar Search = function Search() {\n  _s();\n\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n  var inputs = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {\n    return state.search.userInput;\n  });\n  console.log(inputs);\n\n  var focusHandler = function focusHandler() {\n    dispatch((0,_redux_ui__WEBPACK_IMPORTED_MODULE_3__.setSearchMode)({\n      searchMode: true\n    }));\n  };\n\n  var inputHandler = function inputHandler(e) {\n    dispatch((0,_redux_search__WEBPACK_IMPORTED_MODULE_4__.setUserInput)({\n      userInput: e.target.value\n    }));\n  };\n\n  var blurHandler = function blurHandler(e) {\n    dispatch((0,_redux_ui__WEBPACK_IMPORTED_MODULE_3__.setSearchMode)({\n      searchMode: false\n    }));\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_UI_Input_styled__WEBPACK_IMPORTED_MODULE_1__.InputCard, {\n    className: \"NavInput\",\n    height: \"80%\",\n    mg: \"1% 0%\",\n    width: \"100%\",\n    bd: \"none\",\n    bg: \"#3D3D49\",\n    br: \"2rem\",\n    placeholder: \"Type Here...\",\n    fs: \"1rem\",\n    pd: \"0 2rem \",\n    cl: \"white\",\n    phcl: \"white\",\n    fbd: \"none\",\n    onFocus: focusHandler,\n    onChange: inputHandler,\n    onBlur: blurHandler,\n    value: inputs\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Search, \"KM3w+2EeT+XA3jeORyKMiqNqv18=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch, react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector];\n});\n\n_c = Search;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Search);\n\nvar _c;\n\n$RefreshReg$(_c, \"Search\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05BVkJBUi9TZWFyY2guanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLElBQU1NLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07RUFBQTs7RUFDbkIsSUFBTUMsUUFBUSxHQUFHTCx3REFBVyxFQUE1QjtFQUNBLElBQU1NLE1BQU0sR0FBR0wsd0RBQVcsQ0FBQyxVQUFDTSxLQUFEO0lBQUEsT0FBV0EsS0FBSyxDQUFDQyxNQUFOLENBQWFDLFNBQXhCO0VBQUEsQ0FBRCxDQUExQjtFQUNBQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUwsTUFBWjs7RUFDQSxJQUFNTSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0lBQ3pCUCxRQUFRLENBQUNILHdEQUFhLENBQUM7TUFBRVcsVUFBVSxFQUFFO0lBQWQsQ0FBRCxDQUFkLENBQVI7RUFDRCxDQUZEOztFQUdBLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLENBQUQsRUFBTztJQUMxQlYsUUFBUSxDQUFDRiwyREFBWSxDQUFDO01BQUVNLFNBQVMsRUFBRU0sQ0FBQyxDQUFDQyxNQUFGLENBQVNDO0lBQXRCLENBQUQsQ0FBYixDQUFSO0VBQ0QsQ0FGRDs7RUFHQSxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDSCxDQUFELEVBQU87SUFDekJWLFFBQVEsQ0FBQ0gsd0RBQWEsQ0FBQztNQUFFVyxVQUFVLEVBQUU7SUFBZCxDQUFELENBQWQsQ0FBUjtFQUNELENBRkQ7O0VBR0Esb0JBQ0UsOERBQUMsdURBQUQ7SUFDRSxTQUFTLEVBQUMsVUFEWjtJQUVFLE1BQU0sRUFBRSxLQUZWO0lBR0UsRUFBRSxFQUFFLE9BSE47SUFJRSxLQUFLLEVBQUUsTUFKVDtJQUtFLEVBQUUsRUFBRSxNQUxOO0lBTUUsRUFBRSxFQUFFLFNBTk47SUFPRSxFQUFFLEVBQUUsTUFQTjtJQVFFLFdBQVcsRUFBRSxjQVJmO0lBU0UsRUFBRSxFQUFFLE1BVE47SUFVRSxFQUFFLEVBQUUsU0FWTjtJQVdFLEVBQUUsRUFBRSxPQVhOO0lBWUUsSUFBSSxFQUFFLE9BWlI7SUFhRSxHQUFHLEVBQUUsTUFiUDtJQWNFLE9BQU8sRUFBRUQsWUFkWDtJQWVFLFFBQVEsRUFBRUUsWUFmWjtJQWdCRSxNQUFNLEVBQUVJLFdBaEJWO0lBaUJFLEtBQUssRUFBRVo7RUFqQlQ7SUFBQTtJQUFBO0lBQUE7RUFBQSxTQURGO0FBcUJELENBbENEOztHQUFNRjtVQUNhSixzREFDRkM7OztLQUZYRztBQW9DTiwrREFBZUEsTUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05BVkJBUi9TZWFyY2guanM/ZmI0MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBJbnB1dENhcmQgfSBmcm9tIFwiLi4vVUkvSW5wdXQuc3R5bGVkXCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IHNldFNlYXJjaE1vZGUgfSBmcm9tIFwiLi4vcmVkdXgvdWlcIjtcbmltcG9ydCB7IHNldFVzZXJJbnB1dCB9IGZyb20gXCIuLi9yZWR1eC9zZWFyY2hcIjtcbmNvbnN0IFNlYXJjaCA9ICgpID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBpbnB1dHMgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnNlYXJjaC51c2VySW5wdXQpO1xuICBjb25zb2xlLmxvZyhpbnB1dHMpO1xuICBjb25zdCBmb2N1c0hhbmRsZXIgPSAoKSA9PiB7XG4gICAgZGlzcGF0Y2goc2V0U2VhcmNoTW9kZSh7IHNlYXJjaE1vZGU6IHRydWUgfSkpO1xuICB9O1xuICBjb25zdCBpbnB1dEhhbmRsZXIgPSAoZSkgPT4ge1xuICAgIGRpc3BhdGNoKHNldFVzZXJJbnB1dCh7IHVzZXJJbnB1dDogZS50YXJnZXQudmFsdWUgfSkpO1xuICB9O1xuICBjb25zdCBibHVySGFuZGxlciA9IChlKSA9PiB7XG4gICAgZGlzcGF0Y2goc2V0U2VhcmNoTW9kZSh7IHNlYXJjaE1vZGU6IGZhbHNlIH0pKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8SW5wdXRDYXJkXG4gICAgICBjbGFzc05hbWU9XCJOYXZJbnB1dFwiXG4gICAgICBoZWlnaHQ9e1wiODAlXCJ9XG4gICAgICBtZz17XCIxJSAwJVwifVxuICAgICAgd2lkdGg9e1wiMTAwJVwifVxuICAgICAgYmQ9e1wibm9uZVwifVxuICAgICAgYmc9e1wiIzNEM0Q0OVwifVxuICAgICAgYnI9e1wiMnJlbVwifVxuICAgICAgcGxhY2Vob2xkZXI9e1wiVHlwZSBIZXJlLi4uXCJ9XG4gICAgICBmcz17XCIxcmVtXCJ9XG4gICAgICBwZD17XCIwIDJyZW0gXCJ9XG4gICAgICBjbD17XCJ3aGl0ZVwifVxuICAgICAgcGhjbD17XCJ3aGl0ZVwifVxuICAgICAgZmJkPXtcIm5vbmVcIn1cbiAgICAgIG9uRm9jdXM9e2ZvY3VzSGFuZGxlcn1cbiAgICAgIG9uQ2hhbmdlPXtpbnB1dEhhbmRsZXJ9XG4gICAgICBvbkJsdXI9e2JsdXJIYW5kbGVyfVxuICAgICAgdmFsdWU9e2lucHV0c31cbiAgICA+PC9JbnB1dENhcmQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2g7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJJbnB1dENhcmQiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic2V0U2VhcmNoTW9kZSIsInNldFVzZXJJbnB1dCIsIlNlYXJjaCIsImRpc3BhdGNoIiwiaW5wdXRzIiwic3RhdGUiLCJzZWFyY2giLCJ1c2VySW5wdXQiLCJjb25zb2xlIiwibG9nIiwiZm9jdXNIYW5kbGVyIiwic2VhcmNoTW9kZSIsImlucHV0SGFuZGxlciIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImJsdXJIYW5kbGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/NAVBAR/Search.js\n"));

/***/ })

});