"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/contact",{

/***/ "./components/contact/contact-form.js":
/*!********************************************!*\
  !*** ./components/contact/contact-form.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ContactForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contact_form_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact-form.module.css */ \"./components/contact/contact-form.module.css\");\n/* harmony import */ var _contact_form_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_contact_form_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction ContactForm() {\n    _s();\n    const [enteredEmail, setEnteredEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [enteredName, setEnteredName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [enteredMessage, setEnteredMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    function sendMessageHandler(e) {\n        e.preventDefault();\n        fetch(\"/api/contact\", {\n            method: \"POST\",\n            body: JSON.stringify(),\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_contact_form_module_css__WEBPACK_IMPORTED_MODULE_2___default().contact),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"How can I help you?\"\n            }, void 0, false, {\n                fileName: \"/Users/ying/Documents/repos/My-Blog/components/contact/contact-form.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: (_contact_form_module_css__WEBPACK_IMPORTED_MODULE_2___default().form),\n                onSubmit: sendMessageHandler,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_contact_form_module_css__WEBPACK_IMPORTED_MODULE_2___default().controls),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_contact_form_module_css__WEBPACK_IMPORTED_MODULE_2___default().control),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: \"email\",\n                                        children: \"Your Email\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ying/Documents/repos/My-Blog/components/contact/contact-form.js\",\n                                        lineNumber: 27,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"email\",\n                                        id: \"email\",\n                                        value: enteredEmail,\n                                        onChange: (e)=>set,\n                                        required: true\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ying/Documents/repos/My-Blog/components/contact/contact-form.js\",\n                                        lineNumber: 28,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/ying/Documents/repos/My-Blog/components/contact/contact-form.js\",\n                                lineNumber: 26,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_contact_form_module_css__WEBPACK_IMPORTED_MODULE_2___default().control),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: \"name\",\n                                        children: \"Your Name\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ying/Documents/repos/My-Blog/components/contact/contact-form.js\",\n                                        lineNumber: 32,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        id: \"name\",\n                                        value: enteredName,\n                                        required: true\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ying/Documents/repos/My-Blog/components/contact/contact-form.js\",\n                                        lineNumber: 33,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/ying/Documents/repos/My-Blog/components/contact/contact-form.js\",\n                                lineNumber: 31,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ying/Documents/repos/My-Blog/components/contact/contact-form.js\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_contact_form_module_css__WEBPACK_IMPORTED_MODULE_2___default().control),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"message\",\n                                children: \"Your Message\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ying/Documents/repos/My-Blog/components/contact/contact-form.js\",\n                                lineNumber: 38,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                id: \"message\",\n                                rows: \"5\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ying/Documents/repos/My-Blog/components/contact/contact-form.js\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ying/Documents/repos/My-Blog/components/contact/contact-form.js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_contact_form_module_css__WEBPACK_IMPORTED_MODULE_2___default().actions),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            children: \"Send Message\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ying/Documents/repos/My-Blog/components/contact/contact-form.js\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ying/Documents/repos/My-Blog/components/contact/contact-form.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ying/Documents/repos/My-Blog/components/contact/contact-form.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ying/Documents/repos/My-Blog/components/contact/contact-form.js\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n_s(ContactForm, \"e5I2Rz0DN3++7YpDXIbrBPIkOYE=\");\n_c = ContactForm;\nvar _c;\n$RefreshReg$(_c, \"ContactForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbnRhY3QvY29udGFjdC1mb3JtLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFBZ0Q7QUFFRDtBQUVoQyxTQUFTSSxjQUFjOztJQUNwQyxNQUFNLENBQUVDLGNBQWNDLGdCQUFpQixHQUFHSiwrQ0FBUUEsQ0FBQztJQUNuRCxNQUFNLENBQUVLLGFBQWFDLGVBQWdCLEdBQUdOLCtDQUFRQSxDQUFDO0lBQ2pELE1BQU0sQ0FBRU8sZ0JBQWdCQyxrQkFBbUIsR0FBR1IsK0NBQVFBLENBQUM7SUFFdkQsU0FBU1MsbUJBQW1CQyxDQUFDLEVBQUU7UUFDN0JBLEVBQUVDLGNBQWM7UUFDaEJDLE1BQU0sZ0JBQWdCO1lBQ3BCQyxRQUFRO1lBQ1JDLE1BQU1DLEtBQUtDLFNBQVM7WUFDcEJDLFNBQVM7Z0JBQ1AsZ0JBQWdCO1lBQ2xCO1FBQ0Y7SUFDRjtJQUVBLHFCQUNFLDhEQUFDQztRQUFRQyxXQUFXbEIseUVBQWM7OzBCQUNoQyw4REFBQ29COzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDO2dCQUFLSCxXQUFXbEIsc0VBQVc7Z0JBQUVzQixVQUFVZDs7a0NBQ3RDLDhEQUFDZTt3QkFBSUwsV0FBV2xCLDBFQUFlOzswQ0FDN0IsOERBQUN1QjtnQ0FBSUwsV0FBV2xCLHlFQUFjOztrREFDNUIsOERBQUMwQjt3Q0FBTUMsU0FBUTtrREFBUTs7Ozs7O2tEQUN2Qiw4REFBQ0M7d0NBQU1DLE1BQUs7d0NBQVFDLElBQUc7d0NBQVFDLE9BQU83Qjt3Q0FBYzhCLFVBQVV2QixDQUFBQSxJQUFLd0I7d0NBQUtDLFFBQVE7Ozs7Ozs7Ozs7OzswQ0FHbEYsOERBQUNYO2dDQUFJTCxXQUFXbEIseUVBQWM7O2tEQUM1Qiw4REFBQzBCO3dDQUFNQyxTQUFRO2tEQUFPOzs7Ozs7a0RBQ3RCLDhEQUFDQzt3Q0FBTUMsTUFBSzt3Q0FBT0MsSUFBRzt3Q0FBT0MsT0FBTzNCO3dDQUFhOEIsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUk3RCw4REFBQ1g7d0JBQUlMLFdBQVdsQix5RUFBYzs7MENBQzVCLDhEQUFDMEI7Z0NBQU1DLFNBQVE7MENBQVU7Ozs7OzswQ0FDekIsOERBQUNRO2dDQUFTTCxJQUFHO2dDQUFVTSxNQUFLOzs7Ozs7Ozs7Ozs7a0NBRzlCLDhEQUFDYjt3QkFBSUwsV0FBV2xCLHlFQUFjO2tDQUM1Qiw0RUFBQ3NDO3NDQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtsQixDQUFDO0dBM0N1QnJDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY29udGFjdC9jb250YWN0LWZvcm0uanM/ODYyZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2NvbnRhY3QtZm9ybS5tb2R1bGUuY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRhY3RGb3JtKCkge1xuICBjb25zdCBbIGVudGVyZWRFbWFpbCwgc2V0RW50ZXJlZEVtYWlsIF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFsgZW50ZXJlZE5hbWUsIHNldEVudGVyZWROYW1lIF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFsgZW50ZXJlZE1lc3NhZ2UsIHNldEVudGVyZWRNZXNzYWdlIF0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgZnVuY3Rpb24gc2VuZE1lc3NhZ2VIYW5kbGVyKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZmV0Y2goXCIvYXBpL2NvbnRhY3RcIiwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KCksXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuY29udGFjdH0+XG4gICAgICA8aDE+SG93IGNhbiBJIGhlbHAgeW91PzwvaDE+XG4gICAgICA8Zm9ybSBjbGFzc05hbWU9e3N0eWxlcy5mb3JtfSBvblN1Ym1pdD17c2VuZE1lc3NhZ2VIYW5kbGVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250cm9sc30+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250cm9sfT5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5Zb3VyIEVtYWlsPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBpZD1cImVtYWlsXCIgdmFsdWU9e2VudGVyZWRFbWFpbH0gb25DaGFuZ2U9e2UgPT4gc2V0fSByZXF1aXJlZCAvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250cm9sfT5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiPllvdXIgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm5hbWVcIiB2YWx1ZT17ZW50ZXJlZE5hbWV9IHJlcXVpcmVkIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udHJvbH0+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJtZXNzYWdlXCI+WW91ciBNZXNzYWdlPC9sYWJlbD5cbiAgICAgICAgICA8dGV4dGFyZWEgaWQ9XCJtZXNzYWdlXCIgcm93cz1cIjVcIj48L3RleHRhcmVhPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFjdGlvbnN9PlxuICAgICAgICAgIDxidXR0b24+U2VuZCBNZXNzYWdlPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwic3R5bGVzIiwiQ29udGFjdEZvcm0iLCJlbnRlcmVkRW1haWwiLCJzZXRFbnRlcmVkRW1haWwiLCJlbnRlcmVkTmFtZSIsInNldEVudGVyZWROYW1lIiwiZW50ZXJlZE1lc3NhZ2UiLCJzZXRFbnRlcmVkTWVzc2FnZSIsInNlbmRNZXNzYWdlSGFuZGxlciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImNvbnRhY3QiLCJoMSIsImZvcm0iLCJvblN1Ym1pdCIsImRpdiIsImNvbnRyb2xzIiwiY29udHJvbCIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsImlkIiwidmFsdWUiLCJvbkNoYW5nZSIsInNldCIsInJlcXVpcmVkIiwidGV4dGFyZWEiLCJyb3dzIiwiYWN0aW9ucyIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/contact/contact-form.js\n"));

/***/ })

});