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

/***/ "./components/NAVBAR/SECTIONTWO/SectionTwo.js":
/*!****************************************************!*\
  !*** ./components/NAVBAR/SECTIONTWO/SectionTwo.js ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _UI_Card_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../UI/Card.styled */ \"./components/UI/Card.styled.js\");\n/* harmony import */ var _IMAGES_ICONS_menuIcon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../IMAGES/ICONS/menuIcon.svg */ \"./IMAGES/ICONS/menuIcon.svg\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Search */ \"./components/NAVBAR/Search.js\");\n/* harmony import */ var _IMAGES_ICONS_userIcon_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../IMAGES/ICONS/userIcon.svg */ \"./IMAGES/ICONS/userIcon.svg\");\n/* harmony import */ var _IMAGES_ICONS_cartIcon_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../IMAGES/ICONS/cartIcon.svg */ \"./IMAGES/ICONS/cartIcon.svg\");\n/* harmony import */ var _IMAGES_ICONS_searchButton_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../IMAGES/ICONS/searchButton.svg */ \"./IMAGES/ICONS/searchButton.svg\");\n/* harmony import */ var _UI_Button_styled__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../UI/Button.styled */ \"./components/UI/Button.styled.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../redux/ui */ \"./components/redux/ui.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__);\nvar _jsxFileName = \"/Users/ojepauloluwaferanmi/Documents/DEVELOPMENT/CLOVE-V1.0/components/NAVBAR/SECTIONTWO/SectionTwo.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_12__[\"default\"].section.withConfig({\n  displayName: \"SectionTwo__Container\",\n  componentId: \"sc-1yogwcj-0\"\n})([\"display:grid;height:100%;grid-template-columns:auto auto auto;justify-content:space-between;@media (max-width:900px){grid-template-columns:1fr 3fr;}\"]);\n_c = Container;\nvar ShopIcon = styled_components__WEBPACK_IMPORTED_MODULE_12__[\"default\"].div.withConfig({\n  displayName: \"SectionTwo__ShopIcon\",\n  componentId: \"sc-1yogwcj-1\"\n})([\"position:relative;margin:1rem 0 0 0;height:1.5rem;width:1.5rem;\"]);\n_c2 = ShopIcon;\nvar ShopText = styled_components__WEBPACK_IMPORTED_MODULE_12__[\"default\"].div.withConfig({\n  displayName: \"SectionTwo__ShopText\",\n  componentId: \"sc-1yogwcj-2\"\n})([\"font-size:0.8rem;margin:1.2rem 0 0 0;color:white;\"]);\n_c3 = ShopText;\nvar SearchContainer = styled_components__WEBPACK_IMPORTED_MODULE_12__[\"default\"].div.withConfig({\n  displayName: \"SectionTwo__SearchContainer\",\n  componentId: \"sc-1yogwcj-3\"\n})([\"position:relative;width:25rem;\"]);\n_c4 = SearchContainer;\nvar SearchBtn = styled_components__WEBPACK_IMPORTED_MODULE_12__[\"default\"].div.withConfig({\n  displayName: \"SectionTwo__SearchBtn\",\n  componentId: \"sc-1yogwcj-4\"\n})([\"position:absolute;top:-53%;left:70%;width:7rem;height:7rem;transition:0.3s;&:hover{height:6.7rem;width:6.7rem;top:-49%;}\"]);\n_c5 = SearchBtn;\nvar UserIcon = styled_components__WEBPACK_IMPORTED_MODULE_12__[\"default\"].div.withConfig({\n  displayName: \"SectionTwo__UserIcon\",\n  componentId: \"sc-1yogwcj-5\"\n})([\"position:relative;height:1.5rem;\"]);\n_c6 = UserIcon;\nvar CartIconContainer = styled_components__WEBPACK_IMPORTED_MODULE_12__[\"default\"].div.withConfig({\n  displayName: \"SectionTwo__CartIconContainer\",\n  componentId: \"sc-1yogwcj-6\"\n})([\"position:relative;height:1.5rem;width:1.5rem;\"]);\n_c7 = CartIconContainer;\nvar ShopByCategory = styled_components__WEBPACK_IMPORTED_MODULE_12__[\"default\"].div.withConfig({\n  displayName: \"SectionTwo__ShopByCategory\",\n  componentId: \"sc-1yogwcj-7\"\n})([\"display:grid;grid-template-columns:20% 80%;width:10rem;@media (max-width:900px){display:none;}\"]);\n_c8 = ShopByCategory;\nvar LoginSignUp = styled_components__WEBPACK_IMPORTED_MODULE_12__[\"default\"].div.withConfig({\n  displayName: \"SectionTwo__LoginSignUp\",\n  componentId: \"sc-1yogwcj-8\"\n})([\"font-size:0.9rem;color:white;@media (max-width:900px){display:none;}\"]);\n_c9 = LoginSignUp;\nvar Utility = styled_components__WEBPACK_IMPORTED_MODULE_12__[\"default\"].div.withConfig({\n  displayName: \"SectionTwo__Utility\",\n  componentId: \"sc-1yogwcj-9\"\n})([\"display:grid;grid-template-columns:20% 80%;border:1px solid green;@media (max-width:900px){grid-template-columns:100%;}\"]);\n_c10 = Utility;\nvar SubContainer = styled_components__WEBPACK_IMPORTED_MODULE_12__[\"default\"].div.withConfig({\n  displayName: \"SectionTwo__SubContainer\",\n  componentId: \"sc-1yogwcj-10\"\n})([\"border:2px solid red;display:grid;grid-template-columns:65% 1% 34%;width:15rem;padding:0.9rem 0 0 0;@media (max-width:900px){grid-template-columns:2rem auto auto;}\"]);\n_c11 = SubContainer;\n\nvar SectionTwo = function SectionTwo() {\n  _s();\n\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useDispatch)();\n  var styles = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector)(function (state) {\n    return state.styles;\n  });\n  var orders = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector)(function (state) {\n    return state.cart.cartItems;\n  });\n\n  var cartOpenHandler = function cartOpenHandler() {\n    dispatch((0,_redux_ui__WEBPACK_IMPORTED_MODULE_10__.setShowCart)({\n      showCart: true\n    }));\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_UI_Card_styled__WEBPACK_IMPORTED_MODULE_1__.Card, {\n      bd: \"0px solid red\",\n      pd: \"0 3.7rem\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(Container, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(ShopByCategory, {\n          dp: \"grid\",\n          gridC: \"20% 80%\",\n          width: \"10rem\" // bd=\"1px solid red\"\n          ,\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(ShopIcon, {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n              src: _IMAGES_ICONS_menuIcon_svg__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n              layout: \"fill\",\n              objectFit: \"contain\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 115,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 114,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(ShopText, {\n            children: \"Shop By Category\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 117,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 108,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(SearchContainer, {\n          ps: \"relative\",\n          width: \"25rem\",\n          bd: \"1px solid red\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_Search__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 121,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(SearchBtn, {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n              src: _IMAGES_ICONS_searchButton_svg__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n              layout: \"fill\",\n              objectFit: \"contain\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 123,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 122,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 120,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(SubContainer, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(Utility, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(UserIcon, {\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                src: _IMAGES_ICONS_userIcon_svg__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                layout: \"fill\",\n                objectFit: \"contain\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 130,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 129,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(LoginSignUp, {\n              children: \"Login/Signup\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 132,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 128,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_UI_Card_styled__WEBPACK_IMPORTED_MODULE_1__.Card, {\n            mg: \"0rem 0 0 0\",\n            cl: \"white\",\n            bd: \"0px solid red\",\n            children: \"|\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 134,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_UI_Card_styled__WEBPACK_IMPORTED_MODULE_1__.Card, {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"center\", {\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(CartIconContainer, {\n                onClick: cartOpenHandler,\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                  src: _IMAGES_ICONS_cartIcon_svg__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                  layout: \"fill\",\n                  objectFit: \"contain\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 140,\n                  columnNumber: 19\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_UI_Button_styled__WEBPACK_IMPORTED_MODULE_8__.Button, {\n                  ps: \"relative\",\n                  pstp: \"0.7rem\",\n                  pslf: \"0.6rem\",\n                  bg: styles.colors.buttonBlue,\n                  cl: \"white\",\n                  fs: \"0.7rem\",\n                  bd: \"none\",\n                  br: \"2rem\",\n                  children: orders.length\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 141,\n                  columnNumber: 19\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 139,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 138,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 137,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 127,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 107,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false);\n};\n\n_s(SectionTwo, \"gqaV1kmT/gY8qEBoHv7RmIfTUZE=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_9__.useDispatch, react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector];\n});\n\n_c12 = SectionTwo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SectionTwo);\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12;\n\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c2, \"ShopIcon\");\n$RefreshReg$(_c3, \"ShopText\");\n$RefreshReg$(_c4, \"SearchContainer\");\n$RefreshReg$(_c5, \"SearchBtn\");\n$RefreshReg$(_c6, \"UserIcon\");\n$RefreshReg$(_c7, \"CartIconContainer\");\n$RefreshReg$(_c8, \"ShopByCategory\");\n$RefreshReg$(_c9, \"LoginSignUp\");\n$RefreshReg$(_c10, \"Utility\");\n$RefreshReg$(_c11, \"SubContainer\");\n$RefreshReg$(_c12, \"SectionTwo\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05BVkJBUi9TRUNUSU9OVFdPL1NlY3Rpb25Ud28uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1hLFNBQVMsR0FBR0QsNkVBQUg7RUFBQTtFQUFBO0FBQUEsNEpBQWY7S0FBTUM7QUFTTixJQUFNRSxRQUFRLEdBQUdILHlFQUFIO0VBQUE7RUFBQTtBQUFBLHVFQUFkO01BQU1HO0FBTU4sSUFBTUUsUUFBUSxHQUFHTCx5RUFBSDtFQUFBO0VBQUE7QUFBQSx5REFBZDtNQUFNSztBQUtOLElBQU1DLGVBQWUsR0FBR04seUVBQUg7RUFBQTtFQUFBO0FBQUEsc0NBQXJCO01BQU1NO0FBSU4sSUFBTUMsU0FBUyxHQUFHUCx5RUFBSDtFQUFBO0VBQUE7QUFBQSxnSUFBZjtNQUFNTztBQWFOLElBQU1DLFFBQVEsR0FBR1IseUVBQUg7RUFBQTtFQUFBO0FBQUEsd0NBQWQ7TUFBTVE7QUFLTixJQUFNQyxpQkFBaUIsR0FBR1QseUVBQUg7RUFBQTtFQUFBO0FBQUEscURBQXZCO01BQU1TO0FBS04sSUFBTUMsY0FBYyxHQUFHVix5RUFBSDtFQUFBO0VBQUE7QUFBQSxzR0FBcEI7TUFBTVU7QUFRTixJQUFNQyxXQUFXLEdBQUdYLHlFQUFIO0VBQUE7RUFBQTtBQUFBLDRFQUFqQjtNQUFNVztBQU9OLElBQU1DLE9BQU8sR0FBR1oseUVBQUg7RUFBQTtFQUFBO0FBQUEsK0hBQWI7T0FBTVk7QUFTTixJQUFNQyxZQUFZLEdBQUdiLHlFQUFIO0VBQUE7RUFBQTtBQUFBLDJLQUFsQjtPQUFNYTs7QUFXTixJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0VBQUE7O0VBQ3ZCLElBQU1DLFFBQVEsR0FBR2pCLHdEQUFXLEVBQTVCO0VBQ0EsSUFBTWtCLE1BQU0sR0FBR25CLHdEQUFXLENBQUMsVUFB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RSxFQUFDLE1BUEw7a0JBUUUsRUFBRSxFQUFDLE1BUkw7a0JBQUEsVUFVR04sTUFBTSxDQUFDTztnQkFWVjtrQkFBQTtrQkFBQTtrQkFBQTtnQkFBQSxTQUZGO2NBQUE7Z0JBQUE7Z0JBQUE7Z0JBQUE7Y0FBQTtZQURGO2NBQUE7Y0FBQTtjQUFBO1lBQUE7VUFERjtZQUFBO1lBQUE7WUFBQTtVQUFBLFNBVkY7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBLFNBcEJGO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQURGO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFERixpQkFERjtBQXlERCxDQWhFRDs7R0FBTVg7VUFDYWhCLHNEQUNGRCxzREFDQUE7OztPQUhYaUI7QUFrRU4sK0RBQWVBLFVBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OQVZCQVIvU0VDVElPTlRXTy9TZWN0aW9uVHdvLmpzPzFlMWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ2FyZCB9IGZyb20gXCIuLi8uLi9VSS9DYXJkLnN0eWxlZFwiO1xuaW1wb3J0IG1lbnVJY29uIGZyb20gXCIuLi8uLi8uLi9JTUFHRVMvSUNPTlMvbWVudUljb24uc3ZnXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBTZWFyY2ggZnJvbSBcIi4uL1NlYXJjaFwiO1xuaW1wb3J0IHVzZXJJY29uIGZyb20gXCIuLi8uLi8uLi9JTUFHRVMvSUNPTlMvdXNlckljb24uc3ZnXCI7XG5pbXBvcnQgY2FydEljb24gZnJvbSBcIi4uLy4uLy4uL0lNQUdFUy9JQ09OUy9jYXJ0SWNvbi5zdmdcIjtcbmltcG9ydCBzZWFyY2hCdXR0b24gZnJvbSBcIi4uLy4uLy4uL0lNQUdFUy9JQ09OUy9zZWFyY2hCdXR0b24uc3ZnXCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiLi4vLi4vVUkvQnV0dG9uLnN0eWxlZFwiO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBzZXRTaG93Q2FydCB9IGZyb20gXCIuLi8uLi9yZWR1eC91aVwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLnNlY3Rpb25gXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGhlaWdodDogMTAwJTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0bztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBAbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XG4gIH1cbmA7XG5jb25zdCBTaG9wSWNvbiA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAxcmVtIDAgMCAwO1xuICBoZWlnaHQ6IDEuNXJlbTtcbiAgd2lkdGg6IDEuNXJlbTtcbmA7XG5jb25zdCBTaG9wVGV4dCA9IHN0eWxlZC5kaXZgXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBtYXJnaW46IDEuMnJlbSAwIDAgMDtcbiAgY29sb3I6IHdoaXRlO1xuYDtcbmNvbnN0IFNlYXJjaENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDI1cmVtO1xuYDtcbmNvbnN0IFNlYXJjaEJ0biA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtNTMlO1xuICBsZWZ0OiA3MCU7XG4gIHdpZHRoOiA3cmVtO1xuICBoZWlnaHQ6IDdyZW07XG4gIHRyYW5zaXRpb246IDAuM3M7XG4gICY6aG92ZXIge1xuICAgIGhlaWdodDogNi43cmVtO1xuICAgIHdpZHRoOiA2LjdyZW07XG4gICAgdG9wOiAtNDklO1xuICB9XG5gO1xuY29uc3QgVXNlckljb24gPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMS41cmVtO1xuICAvKiB3aWR0aDogMS41cmVtOyAqL1xuYDtcbmNvbnN0IENhcnRJY29uQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEuNXJlbTtcbiAgd2lkdGg6IDEuNXJlbTtcbmA7XG5jb25zdCBTaG9wQnlDYXRlZ29yeSA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAlIDgwJTtcbiAgd2lkdGg6IDEwcmVtO1xuICBAbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5gO1xuY29uc3QgTG9naW5TaWduVXAgPSBzdHlsZWQuZGl2YFxuICBmb250LXNpemU6IDAuOXJlbTtcbiAgY29sb3I6IHdoaXRlO1xuICBAbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5gO1xuY29uc3QgVXRpbGl0eSA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAlIDgwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xuICB9XG5gO1xuY29uc3QgU3ViQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgYm9yZGVyOiAycHggc29saWQgcmVkO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDY1JSAxJSAzNCU7XG4gIHdpZHRoOiAxNXJlbTtcbiAgcGFkZGluZzogMC45cmVtIDAgMCAwO1xuICBAbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJyZW0gYXV0byBhdXRvO1xuICB9XG5gO1xuXG5jb25zdCBTZWN0aW9uVHdvID0gKCkgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuc3R5bGVzKTtcbiAgY29uc3Qgb3JkZXJzID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5jYXJ0LmNhcnRJdGVtcyk7XG4gIGNvbnN0IGNhcnRPcGVuSGFuZGxlciA9ICgpID0+IHtcbiAgICBkaXNwYXRjaChzZXRTaG93Q2FydCh7IHNob3dDYXJ0OiB0cnVlIH0pKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPENhcmQgYmQ9XCIwcHggc29saWQgcmVkXCIgcGQ9e1wiMCAzLjdyZW1cIn0+XG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgPFNob3BCeUNhdGVnb3J5XG4gICAgICAgICAgICBkcD17XCJncmlkXCJ9XG4gICAgICAgICAgICBncmlkQz17XCIyMCUgODAlXCJ9XG4gICAgICAgICAgICB3aWR0aD17XCIxMHJlbVwifVxuICAgICAgICAgICAgLy8gYmQ9XCIxcHggc29saWQgcmVkXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8U2hvcEljb24+XG4gICAgICAgICAgICAgIDxJbWFnZSBzcmM9e21lbnVJY29ufSBsYXlvdXQ9e1wiZmlsbFwifSBvYmplY3RGaXQ9e1wiY29udGFpblwifSAvPlxuICAgICAgICAgICAgPC9TaG9wSWNvbj5cbiAgICAgICAgICAgIDxTaG9wVGV4dD5TaG9wIEJ5IENhdGVnb3J5PC9TaG9wVGV4dD5cbiAgICAgICAgICA8L1Nob3BCeUNhdGVnb3J5PlxuXG4gICAgICAgICAgPFNlYXJjaENvbnRhaW5lciBwcz17XCJyZWxhdGl2ZVwifSB3aWR0aD17XCIyNXJlbVwifSBiZD17XCIxcHggc29saWQgcmVkXCJ9PlxuICAgICAgICAgICAgPFNlYXJjaCAvPlxuICAgICAgICAgICAgPFNlYXJjaEJ0bj5cbiAgICAgICAgICAgICAgPEltYWdlIHNyYz17c2VhcmNoQnV0dG9ufSBsYXlvdXQ9e1wiZmlsbFwifSBvYmplY3RGaXQ9e1wiY29udGFpblwifSAvPlxuICAgICAgICAgICAgPC9TZWFyY2hCdG4+XG4gICAgICAgICAgPC9TZWFyY2hDb250YWluZXI+XG5cbiAgICAgICAgICA8U3ViQ29udGFpbmVyPlxuICAgICAgICAgICAgPFV0aWxpdHk+XG4gICAgICAgICAgICAgIDxVc2VySWNvbj5cbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXt1c2VySWNvbn0gbGF5b3V0PXtcImZpbGxcIn0gb2JqZWN0Rml0PXtcImNvbnRhaW5cIn0gLz5cbiAgICAgICAgICAgICAgPC9Vc2VySWNvbj5cbiAgICAgICAgICAgICAgPExvZ2luU2lnblVwPkxvZ2luL1NpZ251cDwvTG9naW5TaWduVXA+XG4gICAgICAgICAgICA8L1V0aWxpdHk+XG4gICAgICAgICAgICA8Q2FyZCBtZz17XCIwcmVtIDAgMCAwXCJ9IGNsPXtcIndoaXRlXCJ9IGJkPXtcIjBweCBzb2xpZCByZWRcIn0+XG4gICAgICAgICAgICAgIHxcbiAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgIDxDYXJkPlxuICAgICAgICAgICAgICA8Y2VudGVyPlxuICAgICAgICAgICAgICAgIDxDYXJ0SWNvbkNvbnRhaW5lciBvbkNsaWNrPXtjYXJ0T3BlbkhhbmRsZXJ9PlxuICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17Y2FydEljb259IGxheW91dD17XCJmaWxsXCJ9IG9iamVjdEZpdD17XCJjb250YWluXCJ9IC8+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHBzPVwicmVsYXRpdmVcIlxuICAgICAgICAgICAgICAgICAgICBwc3RwPVwiMC43cmVtXCJcbiAgICAgICAgICAgICAgICAgICAgcHNsZj1cIjAuNnJlbVwiXG4gICAgICAgICAgICAgICAgICAgIGJnPXtzdHlsZXMuY29sb3JzLmJ1dHRvbkJsdWV9XG4gICAgICAgICAgICAgICAgICAgIGNsPVwid2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICBmcz1cIjAuN3JlbVwiXG4gICAgICAgICAgICAgICAgICAgIGJkPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgIGJyPVwiMnJlbVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtvcmRlcnMubGVuZ3RofVxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9DYXJ0SWNvbkNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPC9jZW50ZXI+XG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgPC9TdWJDb250YWluZXI+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9DYXJkPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvblR3bztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNhcmQiLCJtZW51SWNvbiIsIkltYWdlIiwiU2VhcmNoIiwidXNlckljb24iLCJjYXJ0SWNvbiIsInNlYXJjaEJ1dHRvbiIsIkJ1dHRvbiIsInVzZVNlbGVjdG9yIiwidXNlRGlzcGF0Y2giLCJzZXRTaG93Q2FydCIsInN0eWxlZCIsIkNvbnRhaW5lciIsInNlY3Rpb24iLCJTaG9wSWNvbiIsImRpdiIsIlNob3BUZXh0IiwiU2VhcmNoQ29udGFpbmVyIiwiU2VhcmNoQnRuIiwiVXNlckljb24iLCJDYXJ0SWNvbkNvbnRhaW5lciIsIlNob3BCeUNhdGVnb3J5IiwiTG9naW5TaWduVXAiLCJVdGlsaXR5IiwiU3ViQ29udGFpbmVyIiwiU2VjdGlvblR3byIsImRpc3BhdGNoIiwic3R5bGVzIiwic3RhdGUiLCJvcmRlcnMiLCJjYXJ0IiwiY2FydEl0ZW1zIiwiY2FydE9wZW5IYW5kbGVyIiwic2hvd0NhcnQiLCJjb2xvcnMiLCJidXR0b25CbHVlIiwibGVuZ3RoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/NAVBAR/SECTIONTWO/SectionTwo.js\n"));

/***/ })

});