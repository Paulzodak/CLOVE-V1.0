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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _UI_Card_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../UI/Card.styled */ \"./components/UI/Card.styled.js\");\n/* harmony import */ var _IMAGES_ICONS_menuIcon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../IMAGES/ICONS/menuIcon.svg */ \"./IMAGES/ICONS/menuIcon.svg\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Search */ \"./components/NAVBAR/Search.js\");\n/* harmony import */ var _IMAGES_ICONS_userIcon_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../IMAGES/ICONS/userIcon.svg */ \"./IMAGES/ICONS/userIcon.svg\");\n/* harmony import */ var _IMAGES_ICONS_cartIcon_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../IMAGES/ICONS/cartIcon.svg */ \"./IMAGES/ICONS/cartIcon.svg\");\n/* harmony import */ var _IMAGES_ICONS_searchButton_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../IMAGES/ICONS/searchButton.svg */ \"./IMAGES/ICONS/searchButton.svg\");\n/* harmony import */ var _UI_Button_styled__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../UI/Button.styled */ \"./components/UI/Button.styled.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../redux/ui */ \"./components/redux/ui.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__);\nvar _jsxFileName = \"/Users/ojepauloluwaferanmi/Documents/DEVELOPMENT/CLOVE-V1.0/components/NAVBAR/SECTIONTWO/SectionTwo.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_12__[\"default\"].section.withConfig({\n  displayName: \"SectionTwo__Container\",\n  componentId: \"sc-1yogwcj-0\"\n})([\"display:grid;height:100%;grid-template-columns:auto auto auto;justify-content:space-between;@media (max-width:900px){grid-template-columns:auto 2fr;}\"]);\n_c = Container;\nvar ShopIcon = styled_components__WEBPACK_IMPORTED_MODULE_12__[\"default\"].div.withConfig({\n  displayName: \"SectionTwo__ShopIcon\",\n  componentId: \"sc-1yogwcj-1\"\n})([\"position:relative;margin:1rem 0 0 0;height:1.5rem;width:1.5rem;\"]);\n_c2 = ShopIcon;\nvar ShopText = styled_components__WEBPACK_IMPORTED_MODULE_12__[\"default\"].div.withConfig({\n  displayName: \"SectionTwo__ShopText\",\n  componentId: \"sc-1yogwcj-2\"\n})([\"font-size:0.8rem;margin:1.2rem 0 0 0;color:white;\"]);\n_c3 = ShopText;\nvar SearchContainer = styled_components__WEBPACK_IMPORTED_MODULE_12__[\"default\"].div.withConfig({\n  displayName: \"SectionTwo__SearchContainer\",\n  componentId: \"sc-1yogwcj-3\"\n})([\"position:relative;width:25rem;\"]);\n_c4 = SearchContainer;\nvar SearchBtn = styled_components__WEBPACK_IMPORTED_MODULE_12__[\"default\"].div.withConfig({\n  displayName: \"SectionTwo__SearchBtn\",\n  componentId: \"sc-1yogwcj-4\"\n})([\"position:absolute;top:-53%;left:70%;width:7rem;height:7rem;transition:0.3s;&:hover{height:6.7rem;width:6.7rem;top:-49%;}\"]);\n_c5 = SearchBtn;\nvar UserIcon = styled_components__WEBPACK_IMPORTED_MODULE_12__[\"default\"].div.withConfig({\n  displayName: \"SectionTwo__UserIcon\",\n  componentId: \"sc-1yogwcj-5\"\n})([\"position:relative;height:1.5rem;width:1.5rem;\"]);\n_c6 = UserIcon;\nvar CartIconContainer = styled_components__WEBPACK_IMPORTED_MODULE_12__[\"default\"].div.withConfig({\n  displayName: \"SectionTwo__CartIconContainer\",\n  componentId: \"sc-1yogwcj-6\"\n})([\"position:relative;height:1.5rem;\"]);\n_c7 = CartIconContainer;\nvar ShopByCategory = styled_components__WEBPACK_IMPORTED_MODULE_12__[\"default\"].div.withConfig({\n  displayName: \"SectionTwo__ShopByCategory\",\n  componentId: \"sc-1yogwcj-7\"\n})([\"display:grid;grid-template-columns:20% 80%;width:10rem;@media (max-width:900px){display:none;}\"]);\n_c8 = ShopByCategory;\nvar LoginSignUp = styled_components__WEBPACK_IMPORTED_MODULE_12__[\"default\"].div.withConfig({\n  displayName: \"SectionTwo__LoginSignUp\",\n  componentId: \"sc-1yogwcj-8\"\n})([\"font-size:0.9rem;color:white;@media (max-width:900px){display:none;}\"]);\n_c9 = LoginSignUp;\nvar Utility = styled_components__WEBPACK_IMPORTED_MODULE_12__[\"default\"].div.withConfig({\n  displayName: \"SectionTwo__Utility\",\n  componentId: \"sc-1yogwcj-9\"\n})([\"display:grid;grid-template-columns:20% 80%;border:1px solid green;@media (max-width:900px){grid-template-columns:100%;}\"]);\n_c10 = Utility;\nvar SubContainer = styled_components__WEBPACK_IMPORTED_MODULE_12__[\"default\"].div.withConfig({\n  displayName: \"SectionTwo__SubContainer\",\n  componentId: \"sc-1yogwcj-10\"\n})([\"border:2px solid red;display:grid;grid-template-columns:65% 1% 34%;width:15rem;padding:0.9rem 0 0 0;@media (max-width:900px){grid-template-columns:auto auto auto;width:100%;}\"]);\n_c11 = SubContainer;\n\nvar SectionTwo = function SectionTwo() {\n  _s();\n\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useDispatch)();\n  var styles = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector)(function (state) {\n    return state.styles;\n  });\n  var orders = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector)(function (state) {\n    return state.cart.cartItems;\n  });\n\n  var cartOpenHandler = function cartOpenHandler() {\n    dispatch((0,_redux_ui__WEBPACK_IMPORTED_MODULE_10__.setShowCart)({\n      showCart: true\n    }));\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_UI_Card_styled__WEBPACK_IMPORTED_MODULE_1__.Card, {\n      bd: \"0px solid red\",\n      pd: \"0 3.7rem\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(Container, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(ShopByCategory, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(ShopIcon, {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n              src: _IMAGES_ICONS_menuIcon_svg__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n              layout: \"fill\",\n              objectFit: \"contain\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 111,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 110,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(ShopText, {\n            children: \"Shop By Category\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 113,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 109,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(SearchContainer, {\n          ps: \"relative\",\n          width: \"25rem\",\n          bd: \"1px solid red\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_Search__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 117,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(SearchBtn, {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n              src: _IMAGES_ICONS_searchButton_svg__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n              layout: \"fill\",\n              objectFit: \"contain\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 119,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 118,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 116,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(SubContainer, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(Utility, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(UserIcon, {\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                src: _IMAGES_ICONS_userIcon_svg__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                layout: \"fill\",\n                objectFit: \"contain\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 126,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 125,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(LoginSignUp, {\n              children: \"Login/Signup\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 128,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 124,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_UI_Card_styled__WEBPACK_IMPORTED_MODULE_1__.Card, {\n            cl: \"white\",\n            bd: \"0px solid red\",\n            children: \"|\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 130,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_UI_Card_styled__WEBPACK_IMPORTED_MODULE_1__.Card, {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"center\", {\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(CartIconContainer, {\n                onClick: cartOpenHandler,\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                  src: _IMAGES_ICONS_cartIcon_svg__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                  layout: \"fill\",\n                  objectFit: \"contain\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 136,\n                  columnNumber: 19\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_UI_Button_styled__WEBPACK_IMPORTED_MODULE_8__.Button, {\n                  ps: \"relative\",\n                  pstp: \"0.7rem\",\n                  pslf: \"0.6rem\",\n                  bg: styles.colors.buttonBlue,\n                  cl: \"white\",\n                  fs: \"0.7rem\",\n                  bd: \"none\",\n                  br: \"2rem\",\n                  children: orders.length\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 137,\n                  columnNumber: 19\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 135,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 134,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 133,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 123,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 108,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false);\n};\n\n_s(SectionTwo, \"gqaV1kmT/gY8qEBoHv7RmIfTUZE=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_9__.useDispatch, react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector];\n});\n\n_c12 = SectionTwo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SectionTwo);\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12;\n\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c2, \"ShopIcon\");\n$RefreshReg$(_c3, \"ShopText\");\n$RefreshReg$(_c4, \"SearchContainer\");\n$RefreshReg$(_c5, \"SearchBtn\");\n$RefreshReg$(_c6, \"UserIcon\");\n$RefreshReg$(_c7, \"CartIconContainer\");\n$RefreshReg$(_c8, \"ShopByCategory\");\n$RefreshReg$(_c9, \"LoginSignUp\");\n$RefreshReg$(_c10, \"Utility\");\n$RefreshReg$(_c11, \"SubContainer\");\n$RefreshReg$(_c12, \"SectionTwo\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05BVkJBUi9TRUNUSU9OVFdPL1NlY3Rpb25Ud28uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1hLFNBQVMsR0FBR0QsNkVBQUg7RUFBQTtFQUFBO0FBQUEsNkpBQWY7S0FBTUM7QUFTTixJQUFNRSxRQUFRLEdBQUdILHlFQUFIO0VBQUE7RUFBQTtBQUFBLHVFQUFkO01BQU1HO0FBTU4sSUFBTUUsUUFBUSxHQUFHTCx5RUFBSDtFQUFBO0VBQUE7QUFBQSx5REFBZDtNQUFNSztBQUtOLElBQU1DLGVBQWUsR0FBR04seUVBQUg7RUFBQTtFQUFBO0FBQUEsc0NBQXJCO01BQU1NO0FBSU4sSUFBTUMsU0FBUyxHQUFHUCx5RUFBSDtFQUFBO0VBQUE7QUFBQSxnSUFBZjtNQUFNTztBQWFOLElBQU1DLFFBQVEsR0FBR1IseUVBQUg7RUFBQTtFQUFBO0FBQUEscURBQWQ7TUFBTVE7QUFLTixJQUFNQyxpQkFBaUIsR0FBR1QseUVBQUg7RUFBQTtFQUFBO0FBQUEsd0NBQXZCO01BQU1TO0FBS04sSUFBTUMsY0FBYyxHQUFHVix5RUFBSDtFQUFBO0VBQUE7QUFBQSxzR0FBcEI7TUFBTVU7QUFRTixJQUFNQyxXQUFXLEdBQUdYLHlFQUFIO0VBQUE7RUFBQTtBQUFBLDRFQUFqQjtNQUFNVztBQU9OLElBQU1DLE9BQU8sR0FBR1oseUVBQUg7RUFBQTtFQUFBO0FBQUEsK0hBQWI7T0FBTVk7QUFTTixJQUFNQyxZQUFZLEdBQUdiLHlFQUFIO0VBQUE7RUFBQTtBQUFBLHNMQUFsQjtPQUFNYTs7QUFZTixJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0VBQUE7O0VBQ3ZCLElBQU1DLFFBQVEsR0FBR2pCLHdEQUFXLEVBQTVCO0VBQ0EsSUFBTWtCLE1BQU0sR0FBR25CLHdEQUFXLENBQUMsVUFB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QUE7Z0JBQUE7Z0JBQUE7Z0JBQUE7Y0FBQTtZQURGO2NBQUE7Y0FBQTtjQUFBO1lBQUE7VUFERjtZQUFBO1lBQUE7WUFBQTtVQUFBLFNBVkY7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBLFNBZkY7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBREY7TUFBQTtNQUFBO01BQUE7SUFBQTtFQURGLGlCQURGO0FBb0RELENBM0REOztHQUFNWDtVQUNhaEIsc0RBQ0ZELHNEQUNBQTs7O09BSFhpQjtBQTZETiwrREFBZUEsVUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05BVkJBUi9TRUNUSU9OVFdPL1NlY3Rpb25Ud28uanM/MWUxYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDYXJkIH0gZnJvbSBcIi4uLy4uL1VJL0NhcmQuc3R5bGVkXCI7XG5pbXBvcnQgbWVudUljb24gZnJvbSBcIi4uLy4uLy4uL0lNQUdFUy9JQ09OUy9tZW51SWNvbi5zdmdcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IFNlYXJjaCBmcm9tIFwiLi4vU2VhcmNoXCI7XG5pbXBvcnQgdXNlckljb24gZnJvbSBcIi4uLy4uLy4uL0lNQUdFUy9JQ09OUy91c2VySWNvbi5zdmdcIjtcbmltcG9ydCBjYXJ0SWNvbiBmcm9tIFwiLi4vLi4vLi4vSU1BR0VTL0lDT05TL2NhcnRJY29uLnN2Z1wiO1xuaW1wb3J0IHNlYXJjaEJ1dHRvbiBmcm9tIFwiLi4vLi4vLi4vSU1BR0VTL0lDT05TL3NlYXJjaEJ1dHRvbi5zdmdcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCIuLi8uLi9VSS9CdXR0b24uc3R5bGVkXCI7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IHNldFNob3dDYXJ0IH0gZnJvbSBcIi4uLy4uL3JlZHV4L3VpXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuc2VjdGlvbmBcbiAgZGlzcGxheTogZ3JpZDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byBhdXRvO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAyZnI7XG4gIH1cbmA7XG5jb25zdCBTaG9wSWNvbiA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAxcmVtIDAgMCAwO1xuICBoZWlnaHQ6IDEuNXJlbTtcbiAgd2lkdGg6IDEuNXJlbTtcbmA7XG5jb25zdCBTaG9wVGV4dCA9IHN0eWxlZC5kaXZgXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBtYXJnaW46IDEuMnJlbSAwIDAgMDtcbiAgY29sb3I6IHdoaXRlO1xuYDtcbmNvbnN0IFNlYXJjaENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDI1cmVtO1xuYDtcbmNvbnN0IFNlYXJjaEJ0biA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtNTMlO1xuICBsZWZ0OiA3MCU7XG4gIHdpZHRoOiA3cmVtO1xuICBoZWlnaHQ6IDdyZW07XG4gIHRyYW5zaXRpb246IDAuM3M7XG4gICY6aG92ZXIge1xuICAgIGhlaWdodDogNi43cmVtO1xuICAgIHdpZHRoOiA2LjdyZW07XG4gICAgdG9wOiAtNDklO1xuICB9XG5gO1xuY29uc3QgVXNlckljb24gPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMS41cmVtO1xuICB3aWR0aDogMS41cmVtO1xuYDtcbmNvbnN0IENhcnRJY29uQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEuNXJlbTtcbiAgLyogd2lkdGg6IDEuNXJlbTsgKi9cbmA7XG5jb25zdCBTaG9wQnlDYXRlZ29yeSA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAlIDgwJTtcbiAgd2lkdGg6IDEwcmVtO1xuICBAbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5gO1xuY29uc3QgTG9naW5TaWduVXAgPSBzdHlsZWQuZGl2YFxuICBmb250LXNpemU6IDAuOXJlbTtcbiAgY29sb3I6IHdoaXRlO1xuICBAbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5gO1xuY29uc3QgVXRpbGl0eSA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAlIDgwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xuICB9XG5gO1xuY29uc3QgU3ViQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgYm9yZGVyOiAycHggc29saWQgcmVkO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDY1JSAxJSAzNCU7XG4gIHdpZHRoOiAxNXJlbTtcbiAgcGFkZGluZzogMC45cmVtIDAgMCAwO1xuICBAbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byBhdXRvO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5gO1xuXG5jb25zdCBTZWN0aW9uVHdvID0gKCkgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuc3R5bGVzKTtcbiAgY29uc3Qgb3JkZXJzID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5jYXJ0LmNhcnRJdGVtcyk7XG4gIGNvbnN0IGNhcnRPcGVuSGFuZGxlciA9ICgpID0+IHtcbiAgICBkaXNwYXRjaChzZXRTaG93Q2FydCh7IHNob3dDYXJ0OiB0cnVlIH0pKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPENhcmQgYmQ9XCIwcHggc29saWQgcmVkXCIgcGQ9e1wiMCAzLjdyZW1cIn0+XG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgPFNob3BCeUNhdGVnb3J5PlxuICAgICAgICAgICAgPFNob3BJY29uPlxuICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXttZW51SWNvbn0gbGF5b3V0PXtcImZpbGxcIn0gb2JqZWN0Rml0PXtcImNvbnRhaW5cIn0gLz5cbiAgICAgICAgICAgIDwvU2hvcEljb24+XG4gICAgICAgICAgICA8U2hvcFRleHQ+U2hvcCBCeSBDYXRlZ29yeTwvU2hvcFRleHQ+XG4gICAgICAgICAgPC9TaG9wQnlDYXRlZ29yeT5cblxuICAgICAgICAgIDxTZWFyY2hDb250YWluZXIgcHM9e1wicmVsYXRpdmVcIn0gd2lkdGg9e1wiMjVyZW1cIn0gYmQ9e1wiMXB4IHNvbGlkIHJlZFwifT5cbiAgICAgICAgICAgIDxTZWFyY2ggLz5cbiAgICAgICAgICAgIDxTZWFyY2hCdG4+XG4gICAgICAgICAgICAgIDxJbWFnZSBzcmM9e3NlYXJjaEJ1dHRvbn0gbGF5b3V0PXtcImZpbGxcIn0gb2JqZWN0Rml0PXtcImNvbnRhaW5cIn0gLz5cbiAgICAgICAgICAgIDwvU2VhcmNoQnRuPlxuICAgICAgICAgIDwvU2VhcmNoQ29udGFpbmVyPlxuXG4gICAgICAgICAgPFN1YkNvbnRhaW5lcj5cbiAgICAgICAgICAgIDxVdGlsaXR5PlxuICAgICAgICAgICAgICA8VXNlckljb24+XG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz17dXNlckljb259IGxheW91dD17XCJmaWxsXCJ9IG9iamVjdEZpdD17XCJjb250YWluXCJ9IC8+XG4gICAgICAgICAgICAgIDwvVXNlckljb24+XG4gICAgICAgICAgICAgIDxMb2dpblNpZ25VcD5Mb2dpbi9TaWdudXA8L0xvZ2luU2lnblVwPlxuICAgICAgICAgICAgPC9VdGlsaXR5PlxuICAgICAgICAgICAgPENhcmQgY2w9e1wid2hpdGVcIn0gYmQ9e1wiMHB4IHNvbGlkIHJlZFwifT5cbiAgICAgICAgICAgICAgfFxuICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgPENhcmQ+XG4gICAgICAgICAgICAgIDxjZW50ZXI+XG4gICAgICAgICAgICAgICAgPENhcnRJY29uQ29udGFpbmVyIG9uQ2xpY2s9e2NhcnRPcGVuSGFuZGxlcn0+XG4gICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtjYXJ0SWNvbn0gbGF5b3V0PXtcImZpbGxcIn0gb2JqZWN0Rml0PXtcImNvbnRhaW5cIn0gLz5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgcHM9XCJyZWxhdGl2ZVwiXG4gICAgICAgICAgICAgICAgICAgIHBzdHA9XCIwLjdyZW1cIlxuICAgICAgICAgICAgICAgICAgICBwc2xmPVwiMC42cmVtXCJcbiAgICAgICAgICAgICAgICAgICAgYmc9e3N0eWxlcy5jb2xvcnMuYnV0dG9uQmx1ZX1cbiAgICAgICAgICAgICAgICAgICAgY2w9XCJ3aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgIGZzPVwiMC43cmVtXCJcbiAgICAgICAgICAgICAgICAgICAgYmQ9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgYnI9XCIycmVtXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge29yZGVycy5sZW5ndGh9XG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0NhcnRJY29uQ29udGFpbmVyPlxuICAgICAgICAgICAgICA8L2NlbnRlcj5cbiAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICA8L1N1YkNvbnRhaW5lcj5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L0NhcmQ+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uVHdvO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ2FyZCIsIm1lbnVJY29uIiwiSW1hZ2UiLCJTZWFyY2giLCJ1c2VySWNvbiIsImNhcnRJY29uIiwic2VhcmNoQnV0dG9uIiwiQnV0dG9uIiwidXNlU2VsZWN0b3IiLCJ1c2VEaXNwYXRjaCIsInNldFNob3dDYXJ0Iiwic3R5bGVkIiwiQ29udGFpbmVyIiwic2VjdGlvbiIsIlNob3BJY29uIiwiZGl2IiwiU2hvcFRleHQiLCJTZWFyY2hDb250YWluZXIiLCJTZWFyY2hCdG4iLCJVc2VySWNvbiIsIkNhcnRJY29uQ29udGFpbmVyIiwiU2hvcEJ5Q2F0ZWdvcnkiLCJMb2dpblNpZ25VcCIsIlV0aWxpdHkiLCJTdWJDb250YWluZXIiLCJTZWN0aW9uVHdvIiwiZGlzcGF0Y2giLCJzdHlsZXMiLCJzdGF0ZSIsIm9yZGVycyIsImNhcnQiLCJjYXJ0SXRlbXMiLCJjYXJ0T3BlbkhhbmRsZXIiLCJzaG93Q2FydCIsImNvbG9ycyIsImJ1dHRvbkJsdWUiLCJsZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/NAVBAR/SECTIONTWO/SectionTwo.js\n"));

/***/ })

});