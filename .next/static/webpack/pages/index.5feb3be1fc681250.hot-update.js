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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _UI_Card_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../UI/Card.styled */ \"./components/UI/Card.styled.js\");\n/* harmony import */ var _IMAGES_ICONS_menuIcon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../IMAGES/ICONS/menuIcon.svg */ \"./IMAGES/ICONS/menuIcon.svg\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Search */ \"./components/NAVBAR/Search.js\");\n/* harmony import */ var _IMAGES_ICONS_userIcon_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../IMAGES/ICONS/userIcon.svg */ \"./IMAGES/ICONS/userIcon.svg\");\n/* harmony import */ var _IMAGES_ICONS_cartIcon_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../IMAGES/ICONS/cartIcon.svg */ \"./IMAGES/ICONS/cartIcon.svg\");\n/* harmony import */ var _IMAGES_ICONS_searchButton_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../IMAGES/ICONS/searchButton.svg */ \"./IMAGES/ICONS/searchButton.svg\");\n/* harmony import */ var _UI_Button_styled__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../UI/Button.styled */ \"./components/UI/Button.styled.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../redux/ui */ \"./components/redux/ui.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__);\nvar _jsxFileName = \"/Users/ojepauloluwaferanmi/Documents/DEVELOPMENT/CLOVE-V1.0/components/NAVBAR/SECTIONTWO/SectionTwo.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_12__[\"default\"].section.withConfig({\n  displayName: \"SectionTwo__Container\",\n  componentId: \"sc-1yogwcj-0\"\n})([\"display:grid;height:100%;grid-template-columns:auto auto auto;justify-content:space-between;@media (max-width:900px){grid-template-columns:auto auto;}\"]);\n_c = Container;\nvar ShopIcon = styled_components__WEBPACK_IMPORTED_MODULE_12__[\"default\"].div.withConfig({\n  displayName: \"SectionTwo__ShopIcon\",\n  componentId: \"sc-1yogwcj-1\"\n})([\"position:relative;margin:1rem 0 0 0;height:1.5rem;width:1.5rem;\"]);\n_c2 = ShopIcon;\nvar ShopText = styled_components__WEBPACK_IMPORTED_MODULE_12__[\"default\"].div.withConfig({\n  displayName: \"SectionTwo__ShopText\",\n  componentId: \"sc-1yogwcj-2\"\n})([\"font-size:0.8rem;margin:1.2rem 0 0 0;color:white;\"]);\n_c3 = ShopText;\nvar SearchContainer = styled_components__WEBPACK_IMPORTED_MODULE_12__[\"default\"].div.withConfig({\n  displayName: \"SectionTwo__SearchContainer\",\n  componentId: \"sc-1yogwcj-3\"\n})([\"position:relative;width:25rem;\"]);\n_c4 = SearchContainer;\nvar SearchBtn = styled_components__WEBPACK_IMPORTED_MODULE_12__[\"default\"].div.withConfig({\n  displayName: \"SectionTwo__SearchBtn\",\n  componentId: \"sc-1yogwcj-4\"\n})([\"position:absolute;top:-53%;left:70%;width:7rem;height:7rem;transition:0.3s;&:hover{height:6.7rem;width:6.7rem;top:-49%;}\"]);\n_c5 = SearchBtn;\nvar UserIcon = styled_components__WEBPACK_IMPORTED_MODULE_12__[\"default\"].div.withConfig({\n  displayName: \"SectionTwo__UserIcon\",\n  componentId: \"sc-1yogwcj-5\"\n})([\"position:relative;height:1.5rem;width:1.5rem;\"]);\n_c6 = UserIcon;\nvar CartIconContainer = styled_components__WEBPACK_IMPORTED_MODULE_12__[\"default\"].div.withConfig({\n  displayName: \"SectionTwo__CartIconContainer\",\n  componentId: \"sc-1yogwcj-6\"\n})([\"position:relative;height:1.5rem;width:1.5rem;\"]);\n_c7 = CartIconContainer;\nvar ShopByCategory = styled_components__WEBPACK_IMPORTED_MODULE_12__[\"default\"].div.withConfig({\n  displayName: \"SectionTwo__ShopByCategory\",\n  componentId: \"sc-1yogwcj-7\"\n})([\"display:grid;grid-template-columns:20% 80%;width:10rem;@media (max-width:900px){display:none;}\"]);\n_c8 = ShopByCategory;\nvar LoginSignUp = styled_components__WEBPACK_IMPORTED_MODULE_12__[\"default\"].div.withConfig({\n  displayName: \"SectionTwo__LoginSignUp\",\n  componentId: \"sc-1yogwcj-8\"\n})([\"font-size:0.9rem;color:white;@media (max-width:900px){display:none;}\"]);\n_c9 = LoginSignUp;\nvar Utility = styled_components__WEBPACK_IMPORTED_MODULE_12__[\"default\"].div.withConfig({\n  displayName: \"SectionTwo__Utility\",\n  componentId: \"sc-1yogwcj-9\"\n})([\"display:grid;grid-template-columns:20% 80%;border:1px solid red;@media (max-width:900px){grid-template-columns:100%;}\"]);\n_c10 = Utility;\n\nvar SectionTwo = function SectionTwo() {\n  _s();\n\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useDispatch)();\n  var styles = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector)(function (state) {\n    return state.styles;\n  });\n  var orders = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector)(function (state) {\n    return state.cart.cartItems;\n  });\n\n  var cartOpenHandler = function cartOpenHandler() {\n    dispatch((0,_redux_ui__WEBPACK_IMPORTED_MODULE_10__.setShowCart)({\n      showCart: true\n    }));\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_UI_Card_styled__WEBPACK_IMPORTED_MODULE_1__.Card, {\n      bd: \"0px solid red\",\n      pd: \"0 3.7rem\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(Container, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(ShopByCategory, {\n          dp: \"grid\",\n          gridC: \"20% 80%\",\n          width: \"10rem\" // bd=\"1px solid red\"\n          ,\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(ShopIcon, {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n              src: _IMAGES_ICONS_menuIcon_svg__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n              layout: \"fill\",\n              objectFit: \"contain\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 104,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 103,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(ShopText, {\n            children: \"Shop By Category\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 106,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 97,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(SearchContainer, {\n          ps: \"relative\",\n          width: \"25rem\",\n          bd: \"1px solid red\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_Search__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 110,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(SearchBtn, {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n              src: _IMAGES_ICONS_searchButton_svg__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n              layout: \"fill\",\n              objectFit: \"contain\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 112,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 111,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 109,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_UI_Card_styled__WEBPACK_IMPORTED_MODULE_1__.Card, {\n          bd: \"0px solid red\",\n          dp: \"grid\",\n          gridC: \"65% 1% 34%\",\n          width: \"15rem\",\n          pd: \"0.9rem 0 0 0 \",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(Utility, {\n            bd: \"0px solid red\",\n            dp: \"grid\",\n            gridC: \"20% 80%\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(UserIcon, {\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                src: _IMAGES_ICONS_userIcon_svg__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                layout: \"fill\",\n                objectFit: \"contain\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 125,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 124,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(LoginSignUp, {\n              fs: \"0.9rem\",\n              cl: \"white\",\n              children: \"Login/Signup\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 127,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 123,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_UI_Card_styled__WEBPACK_IMPORTED_MODULE_1__.Card, {\n            mg: \"0rem 0 0 0\",\n            cl: \"white\",\n            bd: \"0px solid red\",\n            children: \"|\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 131,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_UI_Card_styled__WEBPACK_IMPORTED_MODULE_1__.Card, {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"center\", {\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(CartIconContainer, {\n                onClick: cartOpenHandler,\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                  src: _IMAGES_ICONS_cartIcon_svg__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                  layout: \"fill\",\n                  objectFit: \"contain\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 137,\n                  columnNumber: 19\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_UI_Button_styled__WEBPACK_IMPORTED_MODULE_8__.Button, {\n                  ps: \"relative\",\n                  pstp: \"0.7rem\",\n                  pslf: \"0.6rem\",\n                  bg: styles.colors.buttonBlue,\n                  cl: \"white\",\n                  fs: \"0.7rem\",\n                  bd: \"none\",\n                  br: \"2rem\",\n                  children: orders.length\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 138,\n                  columnNumber: 19\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 136,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 135,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 134,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 116,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 96,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false);\n};\n\n_s(SectionTwo, \"gqaV1kmT/gY8qEBoHv7RmIfTUZE=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_9__.useDispatch, react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector];\n});\n\n_c11 = SectionTwo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SectionTwo);\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;\n\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c2, \"ShopIcon\");\n$RefreshReg$(_c3, \"ShopText\");\n$RefreshReg$(_c4, \"SearchContainer\");\n$RefreshReg$(_c5, \"SearchBtn\");\n$RefreshReg$(_c6, \"UserIcon\");\n$RefreshReg$(_c7, \"CartIconContainer\");\n$RefreshReg$(_c8, \"ShopByCategory\");\n$RefreshReg$(_c9, \"LoginSignUp\");\n$RefreshReg$(_c10, \"Utility\");\n$RefreshReg$(_c11, \"SectionTwo\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05BVkJBUi9TRUNUSU9OVFdPL1NlY3Rpb25Ud28uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1hLFNBQVMsR0FBR0QsNkVBQUg7RUFBQTtFQUFBO0FBQUEsOEpBQWY7S0FBTUM7QUFTTixJQUFNRSxRQUFRLEdBQUdILHlFQUFIO0VBQUE7RUFBQTtBQUFBLHVFQUFkO01BQU1HO0FBTU4sSUFBTUUsUUFBUSxHQUFHTCx5RUFBSDtFQUFBO0VBQUE7QUFBQSx5REFBZDtNQUFNSztBQUtOLElBQU1DLGVBQWUsR0FBR04seUVBQUg7RUFBQTtFQUFBO0FBQUEsc0NBQXJCO01BQU1NO0FBSU4sSUFBTUMsU0FBUyxHQUFHUCx5RUFBSDtFQUFBO0VBQUE7QUFBQSxnSUFBZjtNQUFNTztBQWFOLElBQU1DLFFBQVEsR0FBR1IseUVBQUg7RUFBQTtFQUFBO0FBQUEscURBQWQ7TUFBTVE7QUFLTixJQUFNQyxpQkFBaUIsR0FBR1QseUVBQUg7RUFBQTtFQUFBO0FBQUEscURBQXZCO01BQU1TO0FBS04sSUFBTUMsY0FBYyxHQUFHVix5RUFBSDtFQUFBO0VBQUE7QUFBQSxzR0FBcEI7TUFBTVU7QUFRTixJQUFNQyxXQUFXLEdBQUdYLHlFQUFIO0VBQUE7RUFBQTtBQUFBLDRFQUFqQjtNQUFNVztBQU9OLElBQU1DLE9BQU8sR0FBR1oseUVBQUg7RUFBQTtFQUFBO0FBQUEsNkhBQWI7T0FBTVk7O0FBU04sSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtFQUFBOztFQUN2QixJQUFNQyxRQUFRLEdBQUdoQix3REFBVyxFQUE1QjtFQUNBLElBQU1pQixNQUFNLEdBQUdsQix3REFBVyxDQUFDLFVBQUNtQixLQUFEO0lBQUEsT0FBV0EsS0FBSyxDQUFDRCxNQUFqQjtFQUFBLENBQUQsQ0FBMUI7RUFD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QUUsRUFBQyxVQURMO2tCQUVFLElBQUksRUFBQyxRQUZQO2tCQUdFLElBQUksRUFBQyxRQUhQO2tCQUlFLEVBQUUsRUFBRXFCLE1BQU0sQ0FBQ08sTUFBUCxDQUFjQyxVQUpwQjtrQkFLRSxFQUFFLEVBQUMsT0FMTDtrQkFNRSxFQUFFLEVBQUMsUUFOTDtrQkFPRSxFQUFFLEVBQUMsTUFQTDtrQkFRRSxFQUFFLEVBQUMsTUFSTDtrQkFBQSxVQVVHTixNQUFNLENBQUNPO2dCQVZWO2tCQUFBO2tCQUFBO2tCQUFBO2dCQUFBLFNBRkY7Y0FBQTtnQkFBQTtnQkFBQTtnQkFBQTtjQUFBO1lBREY7Y0FBQTtjQUFBO2NBQUE7WUFBQTtVQURGO1lBQUE7WUFBQTtZQUFBO1VBQUEsU0FsQkY7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBLFNBcEJGO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQURGO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFERixpQkFERjtBQWlFRCxDQXhFRDs7R0FBTVg7VUFDYWYsc0RBQ0ZELHNEQUNBQTs7O09BSFhnQjtBQTBFTiwrREFBZUEsVUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05BVkJBUi9TRUNUSU9OVFdPL1NlY3Rpb25Ud28uanM/MWUxYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDYXJkIH0gZnJvbSBcIi4uLy4uL1VJL0NhcmQuc3R5bGVkXCI7XG5pbXBvcnQgbWVudUljb24gZnJvbSBcIi4uLy4uLy4uL0lNQUdFUy9JQ09OUy9tZW51SWNvbi5zdmdcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IFNlYXJjaCBmcm9tIFwiLi4vU2VhcmNoXCI7XG5pbXBvcnQgdXNlckljb24gZnJvbSBcIi4uLy4uLy4uL0lNQUdFUy9JQ09OUy91c2VySWNvbi5zdmdcIjtcbmltcG9ydCBjYXJ0SWNvbiBmcm9tIFwiLi4vLi4vLi4vSU1BR0VTL0lDT05TL2NhcnRJY29uLnN2Z1wiO1xuaW1wb3J0IHNlYXJjaEJ1dHRvbiBmcm9tIFwiLi4vLi4vLi4vSU1BR0VTL0lDT05TL3NlYXJjaEJ1dHRvbi5zdmdcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCIuLi8uLi9VSS9CdXR0b24uc3R5bGVkXCI7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IHNldFNob3dDYXJ0IH0gZnJvbSBcIi4uLy4uL3JlZHV4L3VpXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuc2VjdGlvbmBcbiAgZGlzcGxheTogZ3JpZDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byBhdXRvO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xuICB9XG5gO1xuY29uc3QgU2hvcEljb24gPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMXJlbSAwIDAgMDtcbiAgaGVpZ2h0OiAxLjVyZW07XG4gIHdpZHRoOiAxLjVyZW07XG5gO1xuY29uc3QgU2hvcFRleHQgPSBzdHlsZWQuZGl2YFxuICBmb250LXNpemU6IDAuOHJlbTtcbiAgbWFyZ2luOiAxLjJyZW0gMCAwIDA7XG4gIGNvbG9yOiB3aGl0ZTtcbmA7XG5jb25zdCBTZWFyY2hDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAyNXJlbTtcbmA7XG5jb25zdCBTZWFyY2hCdG4gPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTUzJTtcbiAgbGVmdDogNzAlO1xuICB3aWR0aDogN3JlbTtcbiAgaGVpZ2h0OiA3cmVtO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICAmOmhvdmVyIHtcbiAgICBoZWlnaHQ6IDYuN3JlbTtcbiAgICB3aWR0aDogNi43cmVtO1xuICAgIHRvcDogLTQ5JTtcbiAgfVxuYDtcbmNvbnN0IFVzZXJJY29uID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEuNXJlbTtcbiAgd2lkdGg6IDEuNXJlbTtcbmA7XG5jb25zdCBDYXJ0SWNvbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxLjVyZW07XG4gIHdpZHRoOiAxLjVyZW07XG5gO1xuY29uc3QgU2hvcEJ5Q2F0ZWdvcnkgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwJSA4MCU7XG4gIHdpZHRoOiAxMHJlbTtcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuYDtcbmNvbnN0IExvZ2luU2lnblVwID0gc3R5bGVkLmRpdmBcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuYDtcbmNvbnN0IFV0aWxpdHkgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwJSA4MCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xuICB9XG5gO1xuXG5jb25zdCBTZWN0aW9uVHdvID0gKCkgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IHN0eWxlcyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuc3R5bGVzKTtcbiAgY29uc3Qgb3JkZXJzID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5jYXJ0LmNhcnRJdGVtcyk7XG4gIGNvbnN0IGNhcnRPcGVuSGFuZGxlciA9ICgpID0+IHtcbiAgICBkaXNwYXRjaChzZXRTaG93Q2FydCh7IHNob3dDYXJ0OiB0cnVlIH0pKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPENhcmQgYmQ9XCIwcHggc29saWQgcmVkXCIgcGQ9e1wiMCAzLjdyZW1cIn0+XG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgPFNob3BCeUNhdGVnb3J5XG4gICAgICAgICAgICBkcD17XCJncmlkXCJ9XG4gICAgICAgICAgICBncmlkQz17XCIyMCUgODAlXCJ9XG4gICAgICAgICAgICB3aWR0aD17XCIxMHJlbVwifVxuICAgICAgICAgICAgLy8gYmQ9XCIxcHggc29saWQgcmVkXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8U2hvcEljb24+XG4gICAgICAgICAgICAgIDxJbWFnZSBzcmM9e21lbnVJY29ufSBsYXlvdXQ9e1wiZmlsbFwifSBvYmplY3RGaXQ9e1wiY29udGFpblwifSAvPlxuICAgICAgICAgICAgPC9TaG9wSWNvbj5cbiAgICAgICAgICAgIDxTaG9wVGV4dD5TaG9wIEJ5IENhdGVnb3J5PC9TaG9wVGV4dD5cbiAgICAgICAgICA8L1Nob3BCeUNhdGVnb3J5PlxuXG4gICAgICAgICAgPFNlYXJjaENvbnRhaW5lciBwcz17XCJyZWxhdGl2ZVwifSB3aWR0aD17XCIyNXJlbVwifSBiZD17XCIxcHggc29saWQgcmVkXCJ9PlxuICAgICAgICAgICAgPFNlYXJjaCAvPlxuICAgICAgICAgICAgPFNlYXJjaEJ0bj5cbiAgICAgICAgICAgICAgPEltYWdlIHNyYz17c2VhcmNoQnV0dG9ufSBsYXlvdXQ9e1wiZmlsbFwifSBvYmplY3RGaXQ9e1wiY29udGFpblwifSAvPlxuICAgICAgICAgICAgPC9TZWFyY2hCdG4+XG4gICAgICAgICAgPC9TZWFyY2hDb250YWluZXI+XG5cbiAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgYmQ9e1wiMHB4IHNvbGlkIHJlZFwifVxuICAgICAgICAgICAgZHA9e1wiZ3JpZFwifVxuICAgICAgICAgICAgZ3JpZEM9e1wiNjUlIDElIDM0JVwifVxuICAgICAgICAgICAgd2lkdGg9e1wiMTVyZW1cIn1cbiAgICAgICAgICAgIHBkPXtcIjAuOXJlbSAwIDAgMCBcIn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8VXRpbGl0eSBiZD17XCIwcHggc29saWQgcmVkXCJ9IGRwPXtcImdyaWRcIn0gZ3JpZEM9e1wiMjAlIDgwJVwifT5cbiAgICAgICAgICAgICAgPFVzZXJJY29uPlxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e3VzZXJJY29ufSBsYXlvdXQ9e1wiZmlsbFwifSBvYmplY3RGaXQ9e1wiY29udGFpblwifSAvPlxuICAgICAgICAgICAgICA8L1VzZXJJY29uPlxuICAgICAgICAgICAgICA8TG9naW5TaWduVXAgZnM9e1wiMC45cmVtXCJ9IGNsPXtcIndoaXRlXCJ9PlxuICAgICAgICAgICAgICAgIExvZ2luL1NpZ251cFxuICAgICAgICAgICAgICA8L0xvZ2luU2lnblVwPlxuICAgICAgICAgICAgPC9VdGlsaXR5PlxuICAgICAgICAgICAgPENhcmQgbWc9e1wiMHJlbSAwIDAgMFwifSBjbD17XCJ3aGl0ZVwifSBiZD17XCIwcHggc29saWQgcmVkXCJ9PlxuICAgICAgICAgICAgICB8XG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICA8Q2FyZD5cbiAgICAgICAgICAgICAgPGNlbnRlcj5cbiAgICAgICAgICAgICAgICA8Q2FydEljb25Db250YWluZXIgb25DbGljaz17Y2FydE9wZW5IYW5kbGVyfT5cbiAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2NhcnRJY29ufSBsYXlvdXQ9e1wiZmlsbFwifSBvYmplY3RGaXQ9e1wiY29udGFpblwifSAvPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBwcz1cInJlbGF0aXZlXCJcbiAgICAgICAgICAgICAgICAgICAgcHN0cD1cIjAuN3JlbVwiXG4gICAgICAgICAgICAgICAgICAgIHBzbGY9XCIwLjZyZW1cIlxuICAgICAgICAgICAgICAgICAgICBiZz17c3R5bGVzLmNvbG9ycy5idXR0b25CbHVlfVxuICAgICAgICAgICAgICAgICAgICBjbD1cIndoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgZnM9XCIwLjdyZW1cIlxuICAgICAgICAgICAgICAgICAgICBiZD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICBicj1cIjJyZW1cIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7b3JkZXJzLmxlbmd0aH1cbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvQ2FydEljb25Db250YWluZXI+XG4gICAgICAgICAgICAgIDwvY2VudGVyPlxuICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L0NhcmQ+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uVHdvO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ2FyZCIsIm1lbnVJY29uIiwiSW1hZ2UiLCJTZWFyY2giLCJ1c2VySWNvbiIsImNhcnRJY29uIiwic2VhcmNoQnV0dG9uIiwiQnV0dG9uIiwidXNlU2VsZWN0b3IiLCJ1c2VEaXNwYXRjaCIsInNldFNob3dDYXJ0Iiwic3R5bGVkIiwiQ29udGFpbmVyIiwic2VjdGlvbiIsIlNob3BJY29uIiwiZGl2IiwiU2hvcFRleHQiLCJTZWFyY2hDb250YWluZXIiLCJTZWFyY2hCdG4iLCJVc2VySWNvbiIsIkNhcnRJY29uQ29udGFpbmVyIiwiU2hvcEJ5Q2F0ZWdvcnkiLCJMb2dpblNpZ25VcCIsIlV0aWxpdHkiLCJTZWN0aW9uVHdvIiwiZGlzcGF0Y2giLCJzdHlsZXMiLCJzdGF0ZSIsIm9yZGVycyIsImNhcnQiLCJjYXJ0SXRlbXMiLCJjYXJ0T3BlbkhhbmRsZXIiLCJzaG93Q2FydCIsImNvbG9ycyIsImJ1dHRvbkJsdWUiLCJsZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/NAVBAR/SECTIONTWO/SectionTwo.js\n"));

/***/ })

});