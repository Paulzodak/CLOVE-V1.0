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

/***/ "./pages/HomePage/index.js":
/*!*********************************!*\
  !*** ./pages/HomePage/index.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_UI_Card_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/UI/Card.styled */ \"./components/UI/Card.styled.js\");\n/* harmony import */ var _components_NAVBAR_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/NAVBAR/Navbar */ \"./components/NAVBAR/Navbar.js\");\n/* harmony import */ var _components_SECTIONONE_SectionOne__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/SECTIONONE/SectionOne */ \"./components/SECTIONONE/SectionOne.js\");\n/* harmony import */ var _components_SECTIONTWO_SectionTwo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/SECTIONTWO/SectionTwo */ \"./components/SECTIONTWO/SectionTwo.js\");\n/* harmony import */ var _components_SECTIONTHREE_SectionThree__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/SECTIONTHREE/SectionThree */ \"./components/SECTIONTHREE/SectionThree.js\");\n/* harmony import */ var _components_SECTIONFOUR_SectionFour__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/SECTIONFOUR/SectionFour */ \"./components/SECTIONFOUR/SectionFour.js\");\n/* harmony import */ var _components_SECTIONSIX_SectionSix__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/SECTIONSIX/SectionSix */ \"./components/SECTIONSIX/SectionSix.js\");\n/* harmony import */ var _smakss_react_scroll_direction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @smakss/react-scroll-direction */ \"./node_modules/@smakss/react-scroll-direction/dist/esm/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _components_redux_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/redux/ui */ \"./components/redux/ui.js\");\n/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-transition-group */ \"./node_modules/react-transition-group/esm/index.js\");\n/* harmony import */ var _components_Search_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/Search.js */ \"./components/Search.js\");\n/* harmony import */ var _components_redux_cart__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/redux/cart */ \"./components/redux/cart.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__);\nvar _jsxFileName = \"/Users/ojepauloluwaferanmi/Documents/DEVELOPMENT/CLOVE-V1.0/pages/HomePage/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar Index = function Index() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),\n      products = _useState[0],\n      setProducts = _useState[1];\n\n  var searchMode = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector)(function (state) {\n    return state.ui.searchMode;\n  });\n  console.log(searchMode);\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useDispatch)();\n\n  var searchModeHandler = function searchModeHandler() {\n    dispatch((0,_components_redux_ui__WEBPACK_IMPORTED_MODULE_10__.setSearchMode)({\n      searchMode: false\n    }));\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    // axios.get(`${BASEURL}/Products`).then((res) => {\n    //   setProducts(res.data);\n    // });\n    setProducts([{\n      id: 0,\n      name: \"Sony 4k TV\",\n      src: \"https://i.imgur.com/5VmgTnx.jpg\",\n      category: \"Television\",\n      stars: 1,\n      price: 550,\n      quantity: 1\n    }, {\n      id: 1,\n      name: \"Sony Android TV\",\n      src: \"https://i.imgur.com/5VmgTnx.jpg\",\n      category: \"Television\",\n      stars: 4,\n      price: 500,\n      quantity: 1\n    }, {\n      id: 2,\n      name: \"Sony GamePad\",\n      src: \"https://i.imgur.com/115ZlwR.jpg\",\n      category: \"Accesories\",\n      stars: 2,\n      price: 150,\n      quantity: 1\n    }, {\n      id: 3,\n      name: \"Imac 2021\",\n      src: \"https://i.imgur.com/X34Z246.jpg\",\n      category: \"Laptops & Tablets\",\n      stars: 4,\n      price: 670,\n      quantity: 1\n    }, {\n      id: 4,\n      name: \"Nikon Drone\",\n      src: \"https://i.imgur.com/XgxoVOU.jpg\",\n      category: \"Accesories\",\n      stars: 4,\n      price: 1200,\n      quantity: 1\n    }, {\n      id: 5,\n      name: \"Sony Android TV\",\n      src: \"https://i.imgur.com/5VmgTnx.jpg\",\n      category: \"Television\",\n      stars: 5,\n      price: 500,\n      quantity: 1\n    }, {\n      id: 6,\n      name: \"Vaccum Cleaner\",\n      src: \"https://i.imgur.com/dtTQ9IO.jpg\",\n      category: \"Cars, Motorbikes & Industrial\",\n      stars: 5,\n      price: 200,\n      quantity: 1\n    }, {\n      id: 7,\n      name: \"Coffee Maker\",\n      src: \"https://i.imgur.com/AdgvmNC.jpg\",\n      category: \"Smart Home\",\n      stars: 1,\n      price: 300,\n      quantity: 1\n    }, {\n      id: 8,\n      name: \"Canon HD camera\",\n      src: \"https://i.imgur.com/hoPuTXu.jpg\",\n      category: \"Camera,Audio & Videos\",\n      stars: 3,\n      price: 800,\n      quantity: 1\n    }, {\n      id: 9,\n      name: \"Toaster Oven\",\n      src: \"https://i.imgur.com/xSc9MdD.jpg\",\n      category: \"Smart Home\",\n      stars: 4,\n      price: 150,\n      quantity: 1\n    }, {\n      id: 10,\n      name: \"Beats Pro Headset\",\n      src: \"https://i.imgur.com/ZhfQqHz.jpg\",\n      category: \"Camera,Audio & Videos\",\n      stars: 1,\n      price: 420,\n      quantity: 1\n    }, {\n      id: 11,\n      name: \"Dell Inspiron Laptop\",\n      src: \"https://i.imgur.com/cuK9iY9.jpg\",\n      category: \"Laptops & Tablets\",\n      stars: 2,\n      price: 999,\n      quantity: 1\n    }, {\n      id: 12,\n      name: \"Flying Quadcopter\",\n      src: \"https://i.imgur.com/Sg4xG57.jpg\",\n      category: \"Accesories\",\n      stars: 5,\n      price: 1100,\n      quantity: 1\n    }, {\n      id: 13,\n      name: \"Techno Cool Fridge\",\n      src: \"https://i.imgur.com/HWVVDYe.jpg\",\n      category: \"Smart Home\",\n      stars: 3,\n      price: 860,\n      quantity: 1\n    }]);\n  }, []);\n\n  var rendered = function rendered() {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(\"div\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_components_SECTIONONE_SectionOne__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 163,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_components_SECTIONTWO_SectionTwo__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 164,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_components_SECTIONTHREE_SectionThree__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        products: products\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 165,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_components_SECTIONFOUR_SectionFour__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        products: products\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 166,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_components_SECTIONSIX_SectionSix__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        products: products\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 167,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 162,\n      columnNumber: 7\n    }, _this);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_components_UI_Card_styled__WEBPACK_IMPORTED_MODULE_1__.Card, {\n      font: \"'Poppins', sans-serif\",\n      height: \"100rem\",\n      width: \"100vw\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_components_NAVBAR_Navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 175,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_components_UI_Card_styled__WEBPACK_IMPORTED_MODULE_1__.Card, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(react_transition_group__WEBPACK_IMPORTED_MODULE_14__.SwitchTransition, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(react_transition_group__WEBPACK_IMPORTED_MODULE_14__.CSSTransition, {\n            addEndListener: function addEndListener(node, done) {\n              return node.addEventListener(\"transitionend\", done, false);\n            },\n            classNames: \"fade\",\n            children: searchMode ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_components_Search_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n              products: products\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 185,\n              columnNumber: 29\n            }, _this) : rendered()\n          }, searchMode, false, {\n            fileName: _jsxFileName,\n            lineNumber: 178,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 177,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 176,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 174,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false);\n};\n\n_s(Index, \"CKK/E+WKW6OJwWDgOJaPX44UIH0=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_9__.useDispatch];\n});\n\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RGM7WUFBQSxDQUZsQjtZQUtFLFVBQVUsRUFBQyxNQUxiO1lBQUEsVUFPR2hCLFVBQVUsZ0JBQUcsK0RBQUMsOERBQUQ7Y0FBUSxRQUFRLEVBQUVGO1lBQWxCO2NBQUE7Y0FBQTtjQUFBO1lBQUEsU0FBSCxHQUFvQ2dCLFFBQVE7VUFQekQsR0FDT2QsVUFEUDtZQUFBO1lBQUE7WUFBQTtVQUFBO1FBREY7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQURGO1FBQUE7UUFBQTtRQUFBO01BQUEsU0FGRjtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFERixpQkFERjtBQW9CRCxDQS9LRDs7R0FBTUg7VUFFZVAsc0RBRUZDOzs7S0FKYk07QUFpTE4sK0RBQWVBLEtBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvSG9tZVBhZ2UvaW5kZXguanM/YzVjMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDYXJkIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVUkvQ2FyZC5zdHlsZWRcIjtcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTkFWQkFSL05hdmJhclwiO1xuaW1wb3J0IFNlY3Rpb25PbmUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvU0VDVElPTk9ORS9TZWN0aW9uT25lXCI7XG5pbXBvcnQgU2VjdGlvblR3byBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9TRUNUSU9OVFdPL1NlY3Rpb25Ud29cIjtcbmltcG9ydCBTZWN0aW9uVGhyZWUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvU0VDVElPTlRIUkVFL1NlY3Rpb25UaHJlZVwiO1xuaW1wb3J0IFNlY3Rpb25Gb3VyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1NFQ1RJT05GT1VSL1NlY3Rpb25Gb3VyXCI7XG5pbXBvcnQgU2VjdGlvblNpeCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9TRUNUSU9OU0lYL1NlY3Rpb25TaXhcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZURldGVjdFNjcm9sbCB9IGZyb20gXCJAc21ha3NzL3JlYWN0LXNjcm9sbC1kaXJlY3Rpb25cIjtcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgc2V0U2VhcmNoTW9kZSB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3JlZHV4L3VpXCI7XG5pbXBvcnQgeyBDU1NUcmFuc2l0aW9uLCBTd2l0Y2hUcmFuc2l0aW9uIH0gZnJvbSBcInJlYWN0LXRyYW5zaXRpb24tZ3JvdXBcIjtcbmltcG9ydCBTZWFyY2ggZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvU2VhcmNoLmpzXCI7XG5pbXBvcnQgeyBzZXRUb3RhbCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3JlZHV4L2NhcnRcIjtcbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xuICBjb25zdCBbcHJvZHVjdHMsIHNldFByb2R1Y3RzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3Qgc2VhcmNoTW9kZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudWkuc2VhcmNoTW9kZSk7XG4gIGNvbnNvbGUubG9nKHNlYXJjaE1vZGUpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IHNlYXJjaE1vZGVIYW5kbGVyID0gKCkgPT4ge1xuICAgIGRpc3BhdGNoKHNldFNlYXJjaE1vZGUoeyBzZWFyY2hNb2RlOiBmYWxzZSB9KSk7XG4gIH07XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gYXhpb3MuZ2V0KGAke0JBU0VVUkx9L1Byb2R1Y3RzYCkudGhlbigocmVzKSA9PiB7XG4gICAgLy8gICBzZXRQcm9kdWN0cyhyZXMuZGF0YSk7XG4gICAgLy8gfSk7XG5cbiAgICBzZXRQcm9kdWN0cyhbXG4gICAgICB7XG4gICAgICAgIGlkOiAwLFxuICAgICAgICBuYW1lOiBcIlNvbnkgNGsgVFZcIixcbiAgICAgICAgc3JjOiBcImh0dHBzOi8vaS5pbWd1ci5jb20vNVZtZ1RueC5qcGdcIixcbiAgICAgICAgY2F0ZWdvcnk6IFwiVGVsZXZpc2lvblwiLFxuICAgICAgICBzdGFyczogMSxcbiAgICAgICAgcHJpY2U6IDU1MCxcbiAgICAgICAgcXVhbnRpdHk6IDEsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogMSxcbiAgICAgICAgbmFtZTogXCJTb255IEFuZHJvaWQgVFZcIixcbiAgICAgICAgc3JjOiBcImh0dHBzOi8vaS5pbWd1ci5jb20vNVZtZ1RueC5qcGdcIixcbiAgICAgICAgY2F0ZWdvcnk6IFwiVGVsZXZpc2lvblwiLFxuICAgICAgICBzdGFyczogNCxcbiAgICAgICAgcHJpY2U6IDUwMCxcbiAgICAgICAgcXVhbnRpdHk6IDEsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogMixcbiAgICAgICAgbmFtZTogXCJTb255IEdhbWVQYWRcIixcbiAgICAgICAgc3JjOiBcImh0dHBzOi8vaS5pbWd1ci5jb20vMTE1Wmx3Ui5qcGdcIixcbiAgICAgICAgY2F0ZWdvcnk6IFwiQWNjZXNvcmllc1wiLFxuICAgICAgICBzdGFyczogMixcbiAgICAgICAgcHJpY2U6IDE1MCxcbiAgICAgICAgcXVhbnRpdHk6IDEsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogMyxcbiAgICAgICAgbmFtZTogXCJJbWFjIDIwMjFcIixcbiAgICAgICAgc3JjOiBcImh0dHBzOi8vaS5pbWd1ci5jb20vWDM0WjI0Ni5qcGdcIixcbiAgICAgICAgY2F0ZWdvcnk6IFwiTGFwdG9wcyAmIFRhYmxldHNcIixcbiAgICAgICAgc3RhcnM6IDQsXG4gICAgICAgIHByaWNlOiA2NzAsXG4gICAgICAgIHF1YW50aXR5OiAxLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDQsXG4gICAgICAgIG5hbWU6IFwiTmlrb24gRHJvbmVcIixcbiAgICAgICAgc3JjOiBcImh0dHBzOi8vaS5pbWd1ci5jb20vWGd4b1ZPVS5qcGdcIixcbiAgICAgICAgY2F0ZWdvcnk6IFwiQWNjZXNvcmllc1wiLFxuICAgICAgICBzdGFyczogNCxcbiAgICAgICAgcHJpY2U6IDEyMDAsXG4gICAgICAgIHF1YW50aXR5OiAxLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDUsXG4gICAgICAgIG5hbWU6IFwiU29ueSBBbmRyb2lkIFRWXCIsXG4gICAgICAgIHNyYzogXCJodHRwczovL2kuaW1ndXIuY29tLzVWbWdUbnguanBnXCIsXG4gICAgICAgIGNhdGVnb3J5OiBcIlRlbGV2aXNpb25cIixcbiAgICAgICAgc3RhcnM6IDUsXG4gICAgICAgIHByaWNlOiA1MDAsXG4gICAgICAgIHF1YW50aXR5OiAxLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDYsXG4gICAgICAgIG5hbWU6IFwiVmFjY3VtIENsZWFuZXJcIixcbiAgICAgICAgc3JjOiBcImh0dHBzOi8vaS5pbWd1ci5jb20vZHRUUTlJTy5qcGdcIixcbiAgICAgICAgY2F0ZWdvcnk6IFwiQ2FycywgTW90b3JiaWtlcyAmIEluZHVzdHJpYWxcIixcbiAgICAgICAgc3RhcnM6IDUsXG4gICAgICAgIHByaWNlOiAyMDAsXG4gICAgICAgIHF1YW50aXR5OiAxLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDcsXG4gICAgICAgIG5hbWU6IFwiQ29mZmVlIE1ha2VyXCIsXG4gICAgICAgIHNyYzogXCJodHRwczovL2kuaW1ndXIuY29tL0FkZ3ZtTkMuanBnXCIsXG4gICAgICAgIGNhdGVnb3J5OiBcIlNtYXJ0IEhvbWVcIixcbiAgICAgICAgc3RhcnM6IDEsXG4gICAgICAgIHByaWNlOiAzMDAsXG4gICAgICAgIHF1YW50aXR5OiAxLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDgsXG4gICAgICAgIG5hbWU6IFwiQ2Fub24gSEQgY2FtZXJhXCIsXG4gICAgICAgIHNyYzogXCJodHRwczovL2kuaW1ndXIuY29tL2hvUHVUWHUuanBnXCIsXG4gICAgICAgIGNhdGVnb3J5OiBcIkNhbWVyYSxBdWRpbyAmIFZpZGVvc1wiLFxuICAgICAgICBzdGFyczogMyxcbiAgICAgICAgcHJpY2U6IDgwMCxcbiAgICAgICAgcXVhbnRpdHk6IDEsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogOSxcbiAgICAgICAgbmFtZTogXCJUb2FzdGVyIE92ZW5cIixcbiAgICAgICAgc3JjOiBcImh0dHBzOi8vaS5pbWd1ci5jb20veFNjOU1kRC5qcGdcIixcbiAgICAgICAgY2F0ZWdvcnk6IFwiU21hcnQgSG9tZVwiLFxuICAgICAgICBzdGFyczogNCxcbiAgICAgICAgcHJpY2U6IDE1MCxcbiAgICAgICAgcXVhbnRpdHk6IDEsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogMTAsXG4gICAgICAgIG5hbWU6IFwiQmVhdHMgUHJvIEhlYWRzZXRcIixcbiAgICAgICAgc3JjOiBcImh0dHBzOi8vaS5pbWd1ci5jb20vWmhmUXFIei5qcGdcIixcbiAgICAgICAgY2F0ZWdvcnk6IFwiQ2FtZXJhLEF1ZGlvICYgVmlkZW9zXCIsXG4gICAgICAgIHN0YXJzOiAxLFxuICAgICAgICBwcmljZTogNDIwLFxuICAgICAgICBxdWFudGl0eTogMSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAxMSxcbiAgICAgICAgbmFtZTogXCJEZWxsIEluc3Bpcm9uIExhcHRvcFwiLFxuICAgICAgICBzcmM6IFwiaHR0cHM6Ly9pLmltZ3VyLmNvbS9jdUs5aVk5LmpwZ1wiLFxuICAgICAgICBjYXRlZ29yeTogXCJMYXB0b3BzICYgVGFibGV0c1wiLFxuICAgICAgICBzdGFyczogMixcbiAgICAgICAgcHJpY2U6IDk5OSxcbiAgICAgICAgcXVhbnRpdHk6IDEsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogMTIsXG4gICAgICAgIG5hbWU6IFwiRmx5aW5nIFF1YWRjb3B0ZXJcIixcbiAgICAgICAgc3JjOiBcImh0dHBzOi8vaS5pbWd1ci5jb20vU2c0eEc1Ny5qcGdcIixcbiAgICAgICAgY2F0ZWdvcnk6IFwiQWNjZXNvcmllc1wiLFxuICAgICAgICBzdGFyczogNSxcbiAgICAgICAgcHJpY2U6IDExMDAsXG4gICAgICAgIHF1YW50aXR5OiAxLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDEzLFxuICAgICAgICBuYW1lOiBcIlRlY2hubyBDb29sIEZyaWRnZVwiLFxuICAgICAgICBzcmM6IFwiaHR0cHM6Ly9pLmltZ3VyLmNvbS9IV1ZWRFllLmpwZ1wiLFxuICAgICAgICBjYXRlZ29yeTogXCJTbWFydCBIb21lXCIsXG4gICAgICAgIHN0YXJzOiAzLFxuICAgICAgICBwcmljZTogODYwLFxuICAgICAgICBxdWFudGl0eTogMSxcbiAgICAgIH0sXG4gICAgXSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCByZW5kZXJlZCA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPFNlY3Rpb25PbmUgLz5cbiAgICAgICAgPFNlY3Rpb25Ud28gLz5cbiAgICAgICAgPFNlY3Rpb25UaHJlZSBwcm9kdWN0cz17cHJvZHVjdHN9IC8+XG4gICAgICAgIDxTZWN0aW9uRm91ciBwcm9kdWN0cz17cHJvZHVjdHN9IC8+XG4gICAgICAgIDxTZWN0aW9uU2l4IHByb2R1Y3RzPXtwcm9kdWN0c30gLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPENhcmQgZm9udD17XCInUG9wcGlucycsIHNhbnMtc2VyaWZcIn0gaGVpZ2h0PXtcIjEwMHJlbVwifSB3aWR0aD17XCIxMDB2d1wifT5cbiAgICAgICAgPE5hdmJhciAvPlxuICAgICAgICA8Q2FyZD5cbiAgICAgICAgICA8U3dpdGNoVHJhbnNpdGlvbj5cbiAgICAgICAgICAgIDxDU1NUcmFuc2l0aW9uXG4gICAgICAgICAgICAgIGtleT17c2VhcmNoTW9kZX1cbiAgICAgICAgICAgICAgYWRkRW5kTGlzdGVuZXI9eyhub2RlLCBkb25lKSA9PlxuICAgICAgICAgICAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIiwgZG9uZSwgZmFsc2UpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lcz1cImZhZGVcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7c2VhcmNoTW9kZSA/IDxTZWFyY2ggcHJvZHVjdHM9e3Byb2R1Y3RzfSAvPiA6IHJlbmRlcmVkKCl9XG4gICAgICAgICAgICA8L0NTU1RyYW5zaXRpb24+XG4gICAgICAgICAgPC9Td2l0Y2hUcmFuc2l0aW9uPlxuICAgICAgICA8L0NhcmQ+XG4gICAgICA8L0NhcmQ+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNhcmQiLCJOYXZiYXIiLCJTZWN0aW9uT25lIiwiU2VjdGlvblR3byIsIlNlY3Rpb25UaHJlZSIsIlNlY3Rpb25Gb3VyIiwiU2VjdGlvblNpeCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlRGV0ZWN0U2Nyb2xsIiwidXNlU2VsZWN0b3IiLCJ1c2VEaXNwYXRjaCIsInNldFNlYXJjaE1vZGUiLCJDU1NUcmFuc2l0aW9uIiwiU3dpdGNoVHJhbnNpdGlvbiIsIlNlYXJjaCIsInNldFRvdGFsIiwiSW5kZXgiLCJwcm9kdWN0cyIsInNldFByb2R1Y3RzIiwic2VhcmNoTW9kZSIsInN0YXRlIiwidWkiLCJjb25zb2xlIiwibG9nIiwiZGlzcGF0Y2giLCJzZWFyY2hNb2RlSGFuZGxlciIsImlkIiwibmFtZSIsInNyYyIsImNhdGVnb3J5Iiwic3RhcnMiLCJwcmljZSIsInF1YW50aXR5IiwicmVuZGVyZWQiLCJub2RlIiwiZG9uZSIsImFkZEV2ZW50TGlzdGVuZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/HomePage/index.js\n"));

/***/ })

});