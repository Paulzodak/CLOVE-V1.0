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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_UI_Card_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/UI/Card.styled */ \"./components/UI/Card.styled.js\");\n/* harmony import */ var _components_NAVBAR_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/NAVBAR/Navbar */ \"./components/NAVBAR/Navbar.js\");\n/* harmony import */ var _components_SECTIONONE_SectionOne__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/SECTIONONE/SectionOne */ \"./components/SECTIONONE/SectionOne.js\");\n/* harmony import */ var _components_SECTIONTWO_SectionTwo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/SECTIONTWO/SectionTwo */ \"./components/SECTIONTWO/SectionTwo.js\");\n/* harmony import */ var _components_SECTIONTHREE_SectionThree__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/SECTIONTHREE/SectionThree */ \"./components/SECTIONTHREE/SectionThree.js\");\n/* harmony import */ var _components_SECTIONFOUR_SectionFour__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/SECTIONFOUR/SectionFour */ \"./components/SECTIONFOUR/SectionFour.js\");\n/* harmony import */ var _components_SECTIONSIX_SectionSix__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/SECTIONSIX/SectionSix */ \"./components/SECTIONSIX/SectionSix.js\");\n/* harmony import */ var _smakss_react_scroll_direction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @smakss/react-scroll-direction */ \"./node_modules/@smakss/react-scroll-direction/dist/esm/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _components_redux_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/redux/ui */ \"./components/redux/ui.js\");\n/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-transition-group */ \"./node_modules/react-transition-group/esm/index.js\");\n/* harmony import */ var _components_Search_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/Search.js */ \"./components/Search.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__);\nvar _jsxFileName = \"/Users/ojepauloluwaferanmi/Documents/DEVELOPMENT/CLOVE-V1.0/pages/HomePage/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar Index = function Index() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),\n      products = _useState[0],\n      setProducts = _useState[1];\n\n  var searchMode = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector)(function (state) {\n    return state.ui.searchMode;\n  });\n  console.log(searchMode);\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useDispatch)();\n\n  var searchModeHandler = function searchModeHandler() {\n    dispatch((0,_components_redux_ui__WEBPACK_IMPORTED_MODULE_10__.setSearchMode)({\n      searchMode: false\n    }));\n  };\n\n  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector)(function (state) {\n    return state.cart;\n  }),\n      total = _useSelector.total;\n\n  console.log(total);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    // axios.get(`${BASEURL}/Products`).then((res) => {\n    //   setProducts(res.data);\n    // });\n    setProducts([{\n      id: 0,\n      name: \"Sony 4k TV\",\n      src: \"https://i.imgur.com/5VmgTnx.jpg\",\n      category: \"Television\",\n      stars: 1,\n      price: 550,\n      quantity: 1,\n      total: 0\n    }, {\n      id: 1,\n      name: \"Sony Android TV\",\n      src: \"https://i.imgur.com/5VmgTnx.jpg\",\n      category: \"Television\",\n      stars: 4,\n      price: 500,\n      quantity: 1,\n      total: 0\n    }, {\n      id: 2,\n      name: \"Sony GamePad\",\n      src: \"https://i.imgur.com/115ZlwR.jpg\",\n      category: \"Accesories\",\n      stars: 2,\n      price: 150,\n      quantity: 1,\n      total: 0\n    }, {\n      id: 3,\n      name: \"Imac 2021\",\n      src: \"https://i.imgur.com/X34Z246.jpg\",\n      category: \"Laptops & Tablets\",\n      stars: 4,\n      price: 670,\n      quantity: 1,\n      total: 0\n    }, {\n      id: 4,\n      name: \"Nikon Drone\",\n      src: \"https://i.imgur.com/XgxoVOU.jpg\",\n      category: \"Accesories\",\n      stars: 4,\n      price: 1200,\n      quantity: 1,\n      total: 0\n    }, {\n      id: 5,\n      name: \"Sony Android TV\",\n      src: \"https://i.imgur.com/5VmgTnx.jpg\",\n      category: \"Television\",\n      stars: 5,\n      price: 500,\n      quantity: 1,\n      total: 0\n    }, {\n      id: 6,\n      name: \"Vaccum Cleaner\",\n      src: \"https://i.imgur.com/dtTQ9IO.jpg\",\n      category: \"Cars, Motorbikes & Industrial\",\n      stars: 5,\n      price: 200,\n      quantity: 1,\n      total: 0\n    }, {\n      id: 7,\n      name: \"Coffee Maker\",\n      src: \"https://i.imgur.com/AdgvmNC.jpg\",\n      category: \"Smart Home\",\n      stars: 1,\n      price: 300,\n      quantity: 1,\n      total: 0\n    }, {\n      id: 8,\n      name: \"Canon HD camera\",\n      src: \"https://i.imgur.com/hoPuTXu.jpg\",\n      category: \"Camera,Audio & Videos\",\n      stars: 3,\n      price: 800,\n      quantity: 1,\n      total: 0\n    }, {\n      id: 9,\n      name: \"Toaster Oven\",\n      src: \"https://i.imgur.com/xSc9MdD.jpg\",\n      category: \"Smart Home\",\n      stars: 4,\n      price: 150,\n      quantity: 1,\n      total: 0\n    }, {\n      id: 10,\n      name: \"Beats Pro Headset\",\n      src: \"https://i.imgur.com/ZhfQqHz.jpg\",\n      category: \"Camera,Audio & Videos\",\n      stars: 1,\n      price: 420,\n      quantity: 1,\n      total: 0\n    }, {\n      id: 11,\n      name: \"Dell Inspiron Laptop\",\n      src: \"https://i.imgur.com/cuK9iY9.jpg\",\n      category: \"Laptops & Tablets\",\n      stars: 2,\n      price: 999,\n      quantity: 1,\n      total: 0\n    }, {\n      id: 12,\n      name: \"Flying Quadcopter\",\n      src: \"https://i.imgur.com/Sg4xG57.jpg\",\n      category: \"Accesories\",\n      stars: 5,\n      price: 1100,\n      quantity: 1,\n      total: 0\n    }, {\n      id: 13,\n      name: \"Techno Cool Fridge\",\n      src: \"https://i.imgur.com/HWVVDYe.jpg\",\n      category: \"Smart Home\",\n      stars: 3,\n      price: 860,\n      quantity: 1,\n      total: 0\n    }]);\n  }, []);\n\n  var rendered = function rendered() {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(\"div\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_components_SECTIONONE_SectionOne__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 178,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_components_SECTIONTWO_SectionTwo__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 179,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 177,\n      columnNumber: 7\n    }, _this);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_components_UI_Card_styled__WEBPACK_IMPORTED_MODULE_1__.Card, {\n      font: \"'Poppins', sans-serif\",\n      height: \"100rem\",\n      width: \"100vw\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_components_NAVBAR_Navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 190,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_components_UI_Card_styled__WEBPACK_IMPORTED_MODULE_1__.Card, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(react_transition_group__WEBPACK_IMPORTED_MODULE_13__.SwitchTransition, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(react_transition_group__WEBPACK_IMPORTED_MODULE_13__.CSSTransition, {\n            addEndListener: function addEndListener(node, done) {\n              return node.addEventListener(\"transitionend\", done, false);\n            },\n            classNames: \"fade\",\n            children: searchMode ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_components_Search_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n              products: products\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 200,\n              columnNumber: 29\n            }, _this) : rendered()\n          }, searchMode, false, {\n            fileName: _jsxFileName,\n            lineNumber: 193,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 192,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 191,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 189,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false);\n};\n\n_s(Index, \"9PjdcaEbOiHZcJbfdM5HhQYH1wY=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_9__.useDispatch, react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector];\n});\n\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QXVELEtBQUssRUFBRSxPQUE5RDtNQUFBLHdCQUNFLCtEQUFDLGlFQUFEO1FBQUE7UUFBQTtRQUFBO01BQUEsU0FERixlQUVFLCtEQUFDLDREQUFEO1FBQUEsdUJBQ0UsK0RBQUMscUVBQUQ7VUFBQSx1QkFDRSwrREFBQyxrRUFBRDtZQUVFLGNBQWMsRUFBRSx3QkFBQ0MsSUFBRCxFQUFPQyxJQUFQO2NBQUEsT0FDZEQsSUFBSSxDQUFDRSxnQkFBTCxDQUFzQixlQUF0QixFQUF1Q0QsSUFBdkMsRUFBNkMsS0FBN0MsQ0FEYztZQUFBLENBRmxCO1lBS0UsVUFBVSxFQUFDLE1BTGI7WUFBQSxVQU9HbEIsVUFBVSxnQkFBRywrREFBQyw4REFBRDtjQUFRLFFBQVEsRUFBRUY7WUFBbEI7Y0FBQTtjQUFBO2NBQUE7WUFBQSxTQUFILEdBQW9Da0IsUUFBUTtVQVB6RCxHQUNPaEIsVUFEUDtZQUFBO1lBQUE7WUFBQTtVQUFBO1FBREY7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQURGO1FBQUE7UUFBQTtRQUFBO01BQUEsU0FGRjtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFERixpQkFERjtBQW9CRCxDQS9MRDs7R0FBTUg7VUFFZU4sc0RBRUZDLHNEQUlDRDs7O0tBUmRNO0FBaU1OLCtEQUFlQSxLQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0hvbWVQYWdlL2luZGV4LmpzP2M1YzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ2FyZCB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1VJL0NhcmQuc3R5bGVkXCI7XG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL05BVkJBUi9OYXZiYXJcIjtcbmltcG9ydCBTZWN0aW9uT25lIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1NFQ1RJT05PTkUvU2VjdGlvbk9uZVwiO1xuaW1wb3J0IFNlY3Rpb25Ud28gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvU0VDVElPTlRXTy9TZWN0aW9uVHdvXCI7XG5pbXBvcnQgU2VjdGlvblRocmVlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1NFQ1RJT05USFJFRS9TZWN0aW9uVGhyZWVcIjtcbmltcG9ydCBTZWN0aW9uRm91ciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9TRUNUSU9ORk9VUi9TZWN0aW9uRm91clwiO1xuaW1wb3J0IFNlY3Rpb25TaXggZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvU0VDVElPTlNJWC9TZWN0aW9uU2l4XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VEZXRlY3RTY3JvbGwgfSBmcm9tIFwiQHNtYWtzcy9yZWFjdC1zY3JvbGwtZGlyZWN0aW9uXCI7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IHNldFNlYXJjaE1vZGUgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9yZWR1eC91aVwiO1xuaW1wb3J0IHsgQ1NTVHJhbnNpdGlvbiwgU3dpdGNoVHJhbnNpdGlvbiB9IGZyb20gXCJyZWFjdC10cmFuc2l0aW9uLWdyb3VwXCI7XG5pbXBvcnQgU2VhcmNoIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1NlYXJjaC5qc1wiO1xuY29uc3QgSW5kZXggPSAoKSA9PiB7XG4gIGNvbnN0IFtwcm9kdWN0cywgc2V0UHJvZHVjdHNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBzZWFyY2hNb2RlID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51aS5zZWFyY2hNb2RlKTtcbiAgY29uc29sZS5sb2coc2VhcmNoTW9kZSk7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3Qgc2VhcmNoTW9kZUhhbmRsZXIgPSAoKSA9PiB7XG4gICAgZGlzcGF0Y2goc2V0U2VhcmNoTW9kZSh7IHNlYXJjaE1vZGU6IGZhbHNlIH0pKTtcbiAgfTtcbiAgY29uc3QgeyB0b3RhbCB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5jYXJ0KTtcbiAgY29uc29sZS5sb2codG90YWwpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIGF4aW9zLmdldChgJHtCQVNFVVJMfS9Qcm9kdWN0c2ApLnRoZW4oKHJlcykgPT4ge1xuICAgIC8vICAgc2V0UHJvZHVjdHMocmVzLmRhdGEpO1xuICAgIC8vIH0pO1xuXG4gICAgc2V0UHJvZHVjdHMoW1xuICAgICAge1xuICAgICAgICBpZDogMCxcbiAgICAgICAgbmFtZTogXCJTb255IDRrIFRWXCIsXG4gICAgICAgIHNyYzogXCJodHRwczovL2kuaW1ndXIuY29tLzVWbWdUbnguanBnXCIsXG4gICAgICAgIGNhdGVnb3J5OiBcIlRlbGV2aXNpb25cIixcbiAgICAgICAgc3RhcnM6IDEsXG4gICAgICAgIHByaWNlOiA1NTAsXG4gICAgICAgIHF1YW50aXR5OiAxLFxuICAgICAgICB0b3RhbDogMCxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICBuYW1lOiBcIlNvbnkgQW5kcm9pZCBUVlwiLFxuICAgICAgICBzcmM6IFwiaHR0cHM6Ly9pLmltZ3VyLmNvbS81Vm1nVG54LmpwZ1wiLFxuICAgICAgICBjYXRlZ29yeTogXCJUZWxldmlzaW9uXCIsXG4gICAgICAgIHN0YXJzOiA0LFxuICAgICAgICBwcmljZTogNTAwLFxuICAgICAgICBxdWFudGl0eTogMSxcbiAgICAgICAgdG90YWw6IDAsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogMixcbiAgICAgICAgbmFtZTogXCJTb255IEdhbWVQYWRcIixcbiAgICAgICAgc3JjOiBcImh0dHBzOi8vaS5pbWd1ci5jb20vMTE1Wmx3Ui5qcGdcIixcbiAgICAgICAgY2F0ZWdvcnk6IFwiQWNjZXNvcmllc1wiLFxuICAgICAgICBzdGFyczogMixcbiAgICAgICAgcHJpY2U6IDE1MCxcbiAgICAgICAgcXVhbnRpdHk6IDEsXG4gICAgICAgIHRvdGFsOiAwLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDMsXG4gICAgICAgIG5hbWU6IFwiSW1hYyAyMDIxXCIsXG4gICAgICAgIHNyYzogXCJodHRwczovL2kuaW1ndXIuY29tL1gzNFoyNDYuanBnXCIsXG4gICAgICAgIGNhdGVnb3J5OiBcIkxhcHRvcHMgJiBUYWJsZXRzXCIsXG4gICAgICAgIHN0YXJzOiA0LFxuICAgICAgICBwcmljZTogNjcwLFxuICAgICAgICBxdWFudGl0eTogMSxcbiAgICAgICAgdG90YWw6IDAsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogNCxcbiAgICAgICAgbmFtZTogXCJOaWtvbiBEcm9uZVwiLFxuICAgICAgICBzcmM6IFwiaHR0cHM6Ly9pLmltZ3VyLmNvbS9YZ3hvVk9VLmpwZ1wiLFxuICAgICAgICBjYXRlZ29yeTogXCJBY2Nlc29yaWVzXCIsXG4gICAgICAgIHN0YXJzOiA0LFxuICAgICAgICBwcmljZTogMTIwMCxcbiAgICAgICAgcXVhbnRpdHk6IDEsXG4gICAgICAgIHRvdGFsOiAwLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDUsXG4gICAgICAgIG5hbWU6IFwiU29ueSBBbmRyb2lkIFRWXCIsXG4gICAgICAgIHNyYzogXCJodHRwczovL2kuaW1ndXIuY29tLzVWbWdUbnguanBnXCIsXG4gICAgICAgIGNhdGVnb3J5OiBcIlRlbGV2aXNpb25cIixcbiAgICAgICAgc3RhcnM6IDUsXG4gICAgICAgIHByaWNlOiA1MDAsXG4gICAgICAgIHF1YW50aXR5OiAxLFxuICAgICAgICB0b3RhbDogMCxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiA2LFxuICAgICAgICBuYW1lOiBcIlZhY2N1bSBDbGVhbmVyXCIsXG4gICAgICAgIHNyYzogXCJodHRwczovL2kuaW1ndXIuY29tL2R0VFE5SU8uanBnXCIsXG4gICAgICAgIGNhdGVnb3J5OiBcIkNhcnMsIE1vdG9yYmlrZXMgJiBJbmR1c3RyaWFsXCIsXG4gICAgICAgIHN0YXJzOiA1LFxuICAgICAgICBwcmljZTogMjAwLFxuICAgICAgICBxdWFudGl0eTogMSxcbiAgICAgICAgdG90YWw6IDAsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogNyxcbiAgICAgICAgbmFtZTogXCJDb2ZmZWUgTWFrZXJcIixcbiAgICAgICAgc3JjOiBcImh0dHBzOi8vaS5pbWd1ci5jb20vQWRndm1OQy5qcGdcIixcbiAgICAgICAgY2F0ZWdvcnk6IFwiU21hcnQgSG9tZVwiLFxuICAgICAgICBzdGFyczogMSxcbiAgICAgICAgcHJpY2U6IDMwMCxcbiAgICAgICAgcXVhbnRpdHk6IDEsXG4gICAgICAgIHRvdGFsOiAwLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDgsXG4gICAgICAgIG5hbWU6IFwiQ2Fub24gSEQgY2FtZXJhXCIsXG4gICAgICAgIHNyYzogXCJodHRwczovL2kuaW1ndXIuY29tL2hvUHVUWHUuanBnXCIsXG4gICAgICAgIGNhdGVnb3J5OiBcIkNhbWVyYSxBdWRpbyAmIFZpZGVvc1wiLFxuICAgICAgICBzdGFyczogMyxcbiAgICAgICAgcHJpY2U6IDgwMCxcbiAgICAgICAgcXVhbnRpdHk6IDEsXG4gICAgICAgIHRvdGFsOiAwLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDksXG4gICAgICAgIG5hbWU6IFwiVG9hc3RlciBPdmVuXCIsXG4gICAgICAgIHNyYzogXCJodHRwczovL2kuaW1ndXIuY29tL3hTYzlNZEQuanBnXCIsXG4gICAgICAgIGNhdGVnb3J5OiBcIlNtYXJ0IEhvbWVcIixcbiAgICAgICAgc3RhcnM6IDQsXG4gICAgICAgIHByaWNlOiAxNTAsXG4gICAgICAgIHF1YW50aXR5OiAxLFxuICAgICAgICB0b3RhbDogMCxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAxMCxcbiAgICAgICAgbmFtZTogXCJCZWF0cyBQcm8gSGVhZHNldFwiLFxuICAgICAgICBzcmM6IFwiaHR0cHM6Ly9pLmltZ3VyLmNvbS9aaGZRcUh6LmpwZ1wiLFxuICAgICAgICBjYXRlZ29yeTogXCJDYW1lcmEsQXVkaW8gJiBWaWRlb3NcIixcbiAgICAgICAgc3RhcnM6IDEsXG4gICAgICAgIHByaWNlOiA0MjAsXG4gICAgICAgIHF1YW50aXR5OiAxLFxuICAgICAgICB0b3RhbDogMCxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAxMSxcbiAgICAgICAgbmFtZTogXCJEZWxsIEluc3Bpcm9uIExhcHRvcFwiLFxuICAgICAgICBzcmM6IFwiaHR0cHM6Ly9pLmltZ3VyLmNvbS9jdUs5aVk5LmpwZ1wiLFxuICAgICAgICBjYXRlZ29yeTogXCJMYXB0b3BzICYgVGFibGV0c1wiLFxuICAgICAgICBzdGFyczogMixcbiAgICAgICAgcHJpY2U6IDk5OSxcbiAgICAgICAgcXVhbnRpdHk6IDEsXG4gICAgICAgIHRvdGFsOiAwLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDEyLFxuICAgICAgICBuYW1lOiBcIkZseWluZyBRdWFkY29wdGVyXCIsXG4gICAgICAgIHNyYzogXCJodHRwczovL2kuaW1ndXIuY29tL1NnNHhHNTcuanBnXCIsXG4gICAgICAgIGNhdGVnb3J5OiBcIkFjY2Vzb3JpZXNcIixcbiAgICAgICAgc3RhcnM6IDUsXG4gICAgICAgIHByaWNlOiAxMTAwLFxuICAgICAgICBxdWFudGl0eTogMSxcbiAgICAgICAgdG90YWw6IDAsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogMTMsXG4gICAgICAgIG5hbWU6IFwiVGVjaG5vIENvb2wgRnJpZGdlXCIsXG4gICAgICAgIHNyYzogXCJodHRwczovL2kuaW1ndXIuY29tL0hXVlZEWWUuanBnXCIsXG4gICAgICAgIGNhdGVnb3J5OiBcIlNtYXJ0IEhvbWVcIixcbiAgICAgICAgc3RhcnM6IDMsXG4gICAgICAgIHByaWNlOiA4NjAsXG4gICAgICAgIHF1YW50aXR5OiAxLFxuICAgICAgICB0b3RhbDogMCxcbiAgICAgIH0sXG4gICAgXSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCByZW5kZXJlZCA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPFNlY3Rpb25PbmUgLz5cbiAgICAgICAgPFNlY3Rpb25Ud28gLz5cbiAgICAgICAgey8qIDxTZWN0aW9uVGhyZWUgcHJvZHVjdHM9e3Byb2R1Y3RzfSAvPiAqL31cbiAgICAgICAgey8qIDxTZWN0aW9uRm91ciBwcm9kdWN0cz17cHJvZHVjdHN9IC8+ICovfVxuICAgICAgICB7LyogPFNlY3Rpb25TaXggcHJvZHVjdHM9e3Byb2R1Y3RzfSAvPiAqL31cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPENhcmQgZm9udD17XCInUG9wcGlucycsIHNhbnMtc2VyaWZcIn0gaGVpZ2h0PXtcIjEwMHJlbVwifSB3aWR0aD17XCIxMDB2d1wifT5cbiAgICAgICAgPE5hdmJhciAvPlxuICAgICAgICA8Q2FyZD5cbiAgICAgICAgICA8U3dpdGNoVHJhbnNpdGlvbj5cbiAgICAgICAgICAgIDxDU1NUcmFuc2l0aW9uXG4gICAgICAgICAgICAgIGtleT17c2VhcmNoTW9kZX1cbiAgICAgICAgICAgICAgYWRkRW5kTGlzdGVuZXI9eyhub2RlLCBkb25lKSA9PlxuICAgICAgICAgICAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIiwgZG9uZSwgZmFsc2UpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lcz1cImZhZGVcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7c2VhcmNoTW9kZSA/IDxTZWFyY2ggcHJvZHVjdHM9e3Byb2R1Y3RzfSAvPiA6IHJlbmRlcmVkKCl9XG4gICAgICAgICAgICA8L0NTU1RyYW5zaXRpb24+XG4gICAgICAgICAgPC9Td2l0Y2hUcmFuc2l0aW9uPlxuICAgICAgICA8L0NhcmQ+XG4gICAgICA8L0NhcmQ+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNhcmQiLCJOYXZiYXIiLCJTZWN0aW9uT25lIiwiU2VjdGlvblR3byIsIlNlY3Rpb25UaHJlZSIsIlNlY3Rpb25Gb3VyIiwiU2VjdGlvblNpeCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlRGV0ZWN0U2Nyb2xsIiwidXNlU2VsZWN0b3IiLCJ1c2VEaXNwYXRjaCIsInNldFNlYXJjaE1vZGUiLCJDU1NUcmFuc2l0aW9uIiwiU3dpdGNoVHJhbnNpdGlvbiIsIlNlYXJjaCIsIkluZGV4IiwicHJvZHVjdHMiLCJzZXRQcm9kdWN0cyIsInNlYXJjaE1vZGUiLCJzdGF0ZSIsInVpIiwiY29uc29sZSIsImxvZyIsImRpc3BhdGNoIiwic2VhcmNoTW9kZUhhbmRsZXIiLCJjYXJ0IiwidG90YWwiLCJpZCIsIm5hbWUiLCJzcmMiLCJjYXRlZ29yeSIsInN0YXJzIiwicHJpY2UiLCJxdWFudGl0eSIsInJlbmRlcmVkIiwibm9kZSIsImRvbmUiLCJhZGRFdmVudExpc3RlbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/HomePage/index.js\n"));

/***/ })

});