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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _UI_Card_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../UI/Card.styled */ \"./components/UI/Card.styled.js\");\n/* harmony import */ var _IMAGES_ICONS_menuIcon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../IMAGES/ICONS/menuIcon.svg */ \"./IMAGES/ICONS/menuIcon.svg\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Search */ \"./components/NAVBAR/Search.js\");\n/* harmony import */ var _IMAGES_ICONS_userIcon_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../IMAGES/ICONS/userIcon.svg */ \"./IMAGES/ICONS/userIcon.svg\");\n/* harmony import */ var _IMAGES_ICONS_cartIcon_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../IMAGES/ICONS/cartIcon.svg */ \"./IMAGES/ICONS/cartIcon.svg\");\n/* harmony import */ var _IMAGES_ICONS_searchButton_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../IMAGES/ICONS/searchButton.svg */ \"./IMAGES/ICONS/searchButton.svg\");\n/* harmony import */ var _UI_Button_styled__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../UI/Button.styled */ \"./components/UI/Button.styled.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../redux/ui */ \"./components/redux/ui.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__);\nvar _jsxFileName = \"/Users/ojepauloluwaferanmi/Documents/DEVELOPMENT/CLOVE-V1.0/components/NAVBAR/SECTIONTWO/SectionTwo.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_12__[\"default\"].section.withConfig({\n  displayName: \"SectionTwo__Container\",\n  componentId: \"sc-1yogwcj-0\"\n})([\"display:grid;height:100%;grid-template-columns:auto auto auto;justify-content:space-between;@media (max-width:900px){grid-template-columns:auto auto;}\"]);\n_c = Container;\nvar ShopIcon = styled_components__WEBPACK_IMPORTED_MODULE_12__[\"default\"].div.withConfig({\n  displayName: \"SectionTwo__ShopIcon\",\n  componentId: \"sc-1yogwcj-1\"\n})([\"position:relative;margin:1rem 0 0 0;height:1.5rem;width:1.5rem;\"]);\n_c2 = ShopIcon;\nvar ShopText = styled_components__WEBPACK_IMPORTED_MODULE_12__[\"default\"].div.withConfig({\n  displayName: \"SectionTwo__ShopText\",\n  componentId: \"sc-1yogwcj-2\"\n})([\"font-size:0.8rem;margin:1.2rem 0 0 0;color:white;\"]);\n_c3 = ShopText;\nvar SearchContainer = styled_components__WEBPACK_IMPORTED_MODULE_12__[\"default\"].div.withConfig({\n  displayName: \"SectionTwo__SearchContainer\",\n  componentId: \"sc-1yogwcj-3\"\n})([\"position:relative;width:25rem;\"]);\n_c4 = SearchContainer;\nvar SearchBtn = styled_components__WEBPACK_IMPORTED_MODULE_12__[\"default\"].div.withConfig({\n  displayName: \"SectionTwo__SearchBtn\",\n  componentId: \"sc-1yogwcj-4\"\n})([\"position:absolute;top:-53%;left:70%;width:7rem;height:7rem;transition:0.3s;&:hover{height:6.7rem;width:6.7rem;top:-49%;}\"]);\n_c5 = SearchBtn;\nvar UserIcon = styled_components__WEBPACK_IMPORTED_MODULE_12__[\"default\"].div.withConfig({\n  displayName: \"SectionTwo__UserIcon\",\n  componentId: \"sc-1yogwcj-5\"\n})([\"position:relative;height:1.5rem;width:1.5rem;\"]);\n_c6 = UserIcon;\nvar CartIconContainer = styled_components__WEBPACK_IMPORTED_MODULE_12__[\"default\"].div.withConfig({\n  displayName: \"SectionTwo__CartIconContainer\",\n  componentId: \"sc-1yogwcj-6\"\n})([\"position:relative;height:1.5rem;width:1.5rem;\"]);\n_c7 = CartIconContainer;\nvar ShopByCategory = styled_components__WEBPACK_IMPORTED_MODULE_12__[\"default\"].div.withConfig({\n  displayName: \"SectionTwo__ShopByCategory\",\n  componentId: \"sc-1yogwcj-7\"\n})([\"display:grid;grid-template-columns:20% 80%;width:10rem;@media (max-width:900px){display:none;}\"]);\n_c8 = ShopByCategory;\nvar LoginSignUp = styled_components__WEBPACK_IMPORTED_MODULE_12__[\"default\"].div.withConfig({\n  displayName: \"SectionTwo__LoginSignUp\",\n  componentId: \"sc-1yogwcj-8\"\n})([\"font-size:0.9rem;color:white;@media (max-width:900px){display:none;}\"]);\n_c9 = LoginSignUp;\n\nvar SectionTwo = function SectionTwo() {\n  _s();\n\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useDispatch)();\n  var styles = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector)(function (state) {\n    return state.styles;\n  });\n  var orders = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector)(function (state) {\n    return state.cart.cartItems;\n  });\n\n  var cartOpenHandler = function cartOpenHandler() {\n    dispatch((0,_redux_ui__WEBPACK_IMPORTED_MODULE_10__.setShowCart)({\n      showCart: true\n    }));\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_UI_Card_styled__WEBPACK_IMPORTED_MODULE_1__.Card, {\n      bd: \"0px solid red\",\n      pd: \"0 3.7rem\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(Container, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(ShopByCategory, {\n          dp: \"grid\",\n          gridC: \"20% 80%\",\n          width: \"10rem\" // bd=\"1px solid red\"\n          ,\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(ShopIcon, {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n              src: _IMAGES_ICONS_menuIcon_svg__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n              layout: \"fill\",\n              objectFit: \"contain\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 96,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 95,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(ShopText, {\n            children: \"Shop By Category\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 98,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 89,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(SearchContainer, {\n          ps: \"relative\",\n          width: \"25rem\",\n          bd: \"1px solid red\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_Search__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 102,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(SearchBtn, {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n              src: _IMAGES_ICONS_searchButton_svg__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n              layout: \"fill\",\n              objectFit: \"contain\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 104,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 103,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 101,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_UI_Card_styled__WEBPACK_IMPORTED_MODULE_1__.Card, {\n          bd: \"0px solid red\",\n          dp: \"grid\",\n          gridC: \"65% 1% 34%\",\n          width: \"15rem\",\n          pd: \"0.9rem 0 0 0 \",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_UI_Card_styled__WEBPACK_IMPORTED_MODULE_1__.Card, {\n            bd: \"0px solid red\",\n            dp: \"grid\",\n            gridC: \"20% 80%\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(UserIcon, {\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                src: _IMAGES_ICONS_userIcon_svg__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                layout: \"fill\",\n                objectFit: \"contain\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 117,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 116,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(LoginSignUp, {\n              fs: \"0.9rem\",\n              cl: \"white\",\n              children: \"Login/Signup\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 119,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 115,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_UI_Card_styled__WEBPACK_IMPORTED_MODULE_1__.Card, {\n            mg: \"0rem 0 0 0\",\n            cl: \"white\",\n            bd: \"0px solid red\",\n            children: \"|\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 123,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_UI_Card_styled__WEBPACK_IMPORTED_MODULE_1__.Card, {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(\"center\", {\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(CartIconContainer, {\n                onClick: cartOpenHandler,\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                  src: _IMAGES_ICONS_cartIcon_svg__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                  layout: \"fill\",\n                  objectFit: \"contain\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 129,\n                  columnNumber: 19\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_UI_Button_styled__WEBPACK_IMPORTED_MODULE_8__.Button, {\n                  ps: \"relative\",\n                  pstp: \"0.7rem\",\n                  pslf: \"0.6rem\",\n                  bg: styles.colors.buttonBlue,\n                  cl: \"white\",\n                  fs: \"0.7rem\",\n                  bd: \"none\",\n                  br: \"2rem\",\n                  children: orders.length\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 130,\n                  columnNumber: 19\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 128,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 127,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 126,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 108,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 88,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false);\n};\n\n_s(SectionTwo, \"gqaV1kmT/gY8qEBoHv7RmIfTUZE=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_9__.useDispatch, react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector];\n});\n\n_c10 = SectionTwo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SectionTwo);\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10;\n\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c2, \"ShopIcon\");\n$RefreshReg$(_c3, \"ShopText\");\n$RefreshReg$(_c4, \"SearchContainer\");\n$RefreshReg$(_c5, \"SearchBtn\");\n$RefreshReg$(_c6, \"UserIcon\");\n$RefreshReg$(_c7, \"CartIconContainer\");\n$RefreshReg$(_c8, \"ShopByCategory\");\n$RefreshReg$(_c9, \"LoginSignUp\");\n$RefreshReg$(_c10, \"SectionTwo\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05BVkJBUi9TRUNUSU9OVFdPL1NlY3Rpb25Ud28uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1hLFNBQVMsR0FBR0QsNkVBQUg7RUFBQTtFQUFBO0FBQUEsOEpBQWY7S0FBTUM7QUFTTixJQUFNRSxRQUFRLEdBQUdILHlFQUFIO0VBQUE7RUFBQTtBQUFBLHVFQUFkO01BQU1HO0FBTU4sSUFBTUUsUUFBUSxHQUFHTCx5RUFBSDtFQUFBO0VBQUE7QUFBQSx5REFBZDtNQUFNSztBQUtOLElBQU1DLGVBQWUsR0FBR04seUVBQUg7RUFBQTtFQUFBO0FBQUEsc0NBQXJCO01BQU1NO0FBSU4sSUFBTUMsU0FBUyxHQUFHUCx5RUFBSDtFQUFBO0VBQUE7QUFBQSxnSUFBZjtNQUFNTztBQWFOLElBQU1DLFFBQVEsR0FBR1IseUVBQUg7RUFBQTtFQUFBO0FBQUEscURBQWQ7TUFBTVE7QUFLTixJQUFNQyxpQkFBaUIsR0FBR1QseUVBQUg7RUFBQTtFQUFBO0FBQUEscURBQXZCO01BQU1TO0FBS04sSUFBTUMsY0FBYyxHQUFHVix5RUFBSDtFQUFBO0VBQUE7QUFBQSxzR0FBcEI7TUFBTVU7QUFRTixJQUFNQyxXQUFXLEdBQUdYLHlFQUFIO0VBQUE7RUFBQTtBQUFBLDRFQUFqQjtNQUFNVzs7QUFRTixJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0VBQUE7O0VBQ3ZCLElBQU1DLFFBQVEsR0FBR2Ysd0RBQVcsRUFBNUI7RUFDQSxJQUFNZ0IsTUFBTSxHQUFHakIsd0RBQVcsQ0FBQyxVQUFDa0IsS0FBRDtJQUFBLE9BQVdBLEtBQUssQ0FBQ0QsTUFBakI7RUFBQSxDQUFELENBQTFCO0VBQ0EsSUFBTUUsTUFBTSxHQUFHbkIsd0RBQVcsQ0FBQyxVQUFDa0IsS0FBRDtJQUFBLE9BQVdBLEtB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a0JBSUUsRUFBRSxFQUFFb0IsTUFBTSxDQUFDTyxNQUFQLENBQWNDLFVBSnBCO2tCQUtFLEVBQUUsRUFBQyxPQUxMO2tCQU1FLEVBQUUsRUFBQyxRQU5MO2tCQU9FLEVBQUUsRUFBQyxNQVBMO2tCQVFFLEVBQUUsRUFBQyxNQVJMO2tCQUFBLFVBVUdOLE1BQU0sQ0FBQ087Z0JBVlY7a0JBQUE7a0JBQUE7a0JBQUE7Z0JBQUEsU0FGRjtjQUFBO2dCQUFBO2dCQUFBO2dCQUFBO2NBQUE7WUFERjtjQUFBO2NBQUE7Y0FBQTtZQUFBO1VBREY7WUFBQTtZQUFBO1lBQUE7VUFBQSxTQWxCRjtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUEsU0FwQkY7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBREY7TUFBQTtNQUFBO01BQUE7SUFBQTtFQURGLGlCQURGO0FBaUVELENBeEVEOztHQUFNWDtVQUNhZCxzREFDRkQsc0RBQ0FBOzs7T0FIWGU7QUEwRU4sK0RBQWVBLFVBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OQVZCQVIvU0VDVElPTlRXTy9TZWN0aW9uVHdvLmpzPzFlMWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ2FyZCB9IGZyb20gXCIuLi8uLi9VSS9DYXJkLnN0eWxlZFwiO1xuaW1wb3J0IG1lbnVJY29uIGZyb20gXCIuLi8uLi8uLi9JTUFHRVMvSUNPTlMvbWVudUljb24uc3ZnXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBTZWFyY2ggZnJvbSBcIi4uL1NlYXJjaFwiO1xuaW1wb3J0IHVzZXJJY29uIGZyb20gXCIuLi8uLi8uLi9JTUFHRVMvSUNPTlMvdXNlckljb24uc3ZnXCI7XG5pbXBvcnQgY2FydEljb24gZnJvbSBcIi4uLy4uLy4uL0lNQUdFUy9JQ09OUy9jYXJ0SWNvbi5zdmdcIjtcbmltcG9ydCBzZWFyY2hCdXR0b24gZnJvbSBcIi4uLy4uLy4uL0lNQUdFUy9JQ09OUy9zZWFyY2hCdXR0b24uc3ZnXCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiLi4vLi4vVUkvQnV0dG9uLnN0eWxlZFwiO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBzZXRTaG93Q2FydCB9IGZyb20gXCIuLi8uLi9yZWR1eC91aVwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLnNlY3Rpb25gXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGhlaWdodDogMTAwJTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0bztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBAbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcbiAgfVxuYDtcbmNvbnN0IFNob3BJY29uID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDFyZW0gMCAwIDA7XG4gIGhlaWdodDogMS41cmVtO1xuICB3aWR0aDogMS41cmVtO1xuYDtcbmNvbnN0IFNob3BUZXh0ID0gc3R5bGVkLmRpdmBcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIG1hcmdpbjogMS4ycmVtIDAgMCAwO1xuICBjb2xvcjogd2hpdGU7XG5gO1xuY29uc3QgU2VhcmNoQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMjVyZW07XG5gO1xuY29uc3QgU2VhcmNoQnRuID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC01MyU7XG4gIGxlZnQ6IDcwJTtcbiAgd2lkdGg6IDdyZW07XG4gIGhlaWdodDogN3JlbTtcbiAgdHJhbnNpdGlvbjogMC4zcztcbiAgJjpob3ZlciB7XG4gICAgaGVpZ2h0OiA2LjdyZW07XG4gICAgd2lkdGg6IDYuN3JlbTtcbiAgICB0b3A6IC00OSU7XG4gIH1cbmA7XG5jb25zdCBVc2VySWNvbiA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxLjVyZW07XG4gIHdpZHRoOiAxLjVyZW07XG5gO1xuY29uc3QgQ2FydEljb25Db250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMS41cmVtO1xuICB3aWR0aDogMS41cmVtO1xuYDtcbmNvbnN0IFNob3BCeUNhdGVnb3J5ID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMCUgODAlO1xuICB3aWR0aDogMTByZW07XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbmA7XG5jb25zdCBMb2dpblNpZ25VcCA9IHN0eWxlZC5kaXZgXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBjb2xvcjogd2hpdGU7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbmA7XG5cbmNvbnN0IFNlY3Rpb25Ud28gPSAoKSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3Qgc3R5bGVzID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5zdHlsZXMpO1xuICBjb25zdCBvcmRlcnMgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmNhcnQuY2FydEl0ZW1zKTtcbiAgY29uc3QgY2FydE9wZW5IYW5kbGVyID0gKCkgPT4ge1xuICAgIGRpc3BhdGNoKHNldFNob3dDYXJ0KHsgc2hvd0NhcnQ6IHRydWUgfSkpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Q2FyZCBiZD1cIjBweCBzb2xpZCByZWRcIiBwZD17XCIwIDMuN3JlbVwifT5cbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICA8U2hvcEJ5Q2F0ZWdvcnlcbiAgICAgICAgICAgIGRwPXtcImdyaWRcIn1cbiAgICAgICAgICAgIGdyaWRDPXtcIjIwJSA4MCVcIn1cbiAgICAgICAgICAgIHdpZHRoPXtcIjEwcmVtXCJ9XG4gICAgICAgICAgICAvLyBiZD1cIjFweCBzb2xpZCByZWRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxTaG9wSWNvbj5cbiAgICAgICAgICAgICAgPEltYWdlIHNyYz17bWVudUljb259IGxheW91dD17XCJmaWxsXCJ9IG9iamVjdEZpdD17XCJjb250YWluXCJ9IC8+XG4gICAgICAgICAgICA8L1Nob3BJY29uPlxuICAgICAgICAgICAgPFNob3BUZXh0PlNob3AgQnkgQ2F0ZWdvcnk8L1Nob3BUZXh0PlxuICAgICAgICAgIDwvU2hvcEJ5Q2F0ZWdvcnk+XG5cbiAgICAgICAgICA8U2VhcmNoQ29udGFpbmVyIHBzPXtcInJlbGF0aXZlXCJ9IHdpZHRoPXtcIjI1cmVtXCJ9IGJkPXtcIjFweCBzb2xpZCByZWRcIn0+XG4gICAgICAgICAgICA8U2VhcmNoIC8+XG4gICAgICAgICAgICA8U2VhcmNoQnRuPlxuICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtzZWFyY2hCdXR0b259IGxheW91dD17XCJmaWxsXCJ9IG9iamVjdEZpdD17XCJjb250YWluXCJ9IC8+XG4gICAgICAgICAgICA8L1NlYXJjaEJ0bj5cbiAgICAgICAgICA8L1NlYXJjaENvbnRhaW5lcj5cblxuICAgICAgICAgIDxDYXJkXG4gICAgICAgICAgICBiZD17XCIwcHggc29saWQgcmVkXCJ9XG4gICAgICAgICAgICBkcD17XCJncmlkXCJ9XG4gICAgICAgICAgICBncmlkQz17XCI2NSUgMSUgMzQlXCJ9XG4gICAgICAgICAgICB3aWR0aD17XCIxNXJlbVwifVxuICAgICAgICAgICAgcGQ9e1wiMC45cmVtIDAgMCAwIFwifVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxDYXJkIGJkPXtcIjBweCBzb2xpZCByZWRcIn0gZHA9e1wiZ3JpZFwifSBncmlkQz17XCIyMCUgODAlXCJ9PlxuICAgICAgICAgICAgICA8VXNlckljb24+XG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz17dXNlckljb259IGxheW91dD17XCJmaWxsXCJ9IG9iamVjdEZpdD17XCJjb250YWluXCJ9IC8+XG4gICAgICAgICAgICAgIDwvVXNlckljb24+XG4gICAgICAgICAgICAgIDxMb2dpblNpZ25VcCBmcz17XCIwLjlyZW1cIn0gY2w9e1wid2hpdGVcIn0+XG4gICAgICAgICAgICAgICAgTG9naW4vU2lnbnVwXG4gICAgICAgICAgICAgIDwvTG9naW5TaWduVXA+XG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICA8Q2FyZCBtZz17XCIwcmVtIDAgMCAwXCJ9IGNsPXtcIndoaXRlXCJ9IGJkPXtcIjBweCBzb2xpZCByZWRcIn0+XG4gICAgICAgICAgICAgIHxcbiAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgIDxDYXJkPlxuICAgICAgICAgICAgICA8Y2VudGVyPlxuICAgICAgICAgICAgICAgIDxDYXJ0SWNvbkNvbnRhaW5lciBvbkNsaWNrPXtjYXJ0T3BlbkhhbmRsZXJ9PlxuICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17Y2FydEljb259IGxheW91dD17XCJmaWxsXCJ9IG9iamVjdEZpdD17XCJjb250YWluXCJ9IC8+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHBzPVwicmVsYXRpdmVcIlxuICAgICAgICAgICAgICAgICAgICBwc3RwPVwiMC43cmVtXCJcbiAgICAgICAgICAgICAgICAgICAgcHNsZj1cIjAuNnJlbVwiXG4gICAgICAgICAgICAgICAgICAgIGJnPXtzdHlsZXMuY29sb3JzLmJ1dHRvbkJsdWV9XG4gICAgICAgICAgICAgICAgICAgIGNsPVwid2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICBmcz1cIjAuN3JlbVwiXG4gICAgICAgICAgICAgICAgICAgIGJkPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgIGJyPVwiMnJlbVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtvcmRlcnMubGVuZ3RofVxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9DYXJ0SWNvbkNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPC9jZW50ZXI+XG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgPC9DYXJkPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvQ2FyZD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb25Ud287XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDYXJkIiwibWVudUljb24iLCJJbWFnZSIsIlNlYXJjaCIsInVzZXJJY29uIiwiY2FydEljb24iLCJzZWFyY2hCdXR0b24iLCJCdXR0b24iLCJ1c2VTZWxlY3RvciIsInVzZURpc3BhdGNoIiwic2V0U2hvd0NhcnQiLCJzdHlsZWQiLCJDb250YWluZXIiLCJzZWN0aW9uIiwiU2hvcEljb24iLCJkaXYiLCJTaG9wVGV4dCIsIlNlYXJjaENvbnRhaW5lciIsIlNlYXJjaEJ0biIsIlVzZXJJY29uIiwiQ2FydEljb25Db250YWluZXIiLCJTaG9wQnlDYXRlZ29yeSIsIkxvZ2luU2lnblVwIiwiU2VjdGlvblR3byIsImRpc3BhdGNoIiwic3R5bGVzIiwic3RhdGUiLCJvcmRlcnMiLCJjYXJ0IiwiY2FydEl0ZW1zIiwiY2FydE9wZW5IYW5kbGVyIiwic2hvd0NhcnQiLCJjb2xvcnMiLCJidXR0b25CbHVlIiwibGVuZ3RoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/NAVBAR/SECTIONTWO/SectionTwo.js\n"));

/***/ })

});