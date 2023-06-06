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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ContactForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contact_form_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact-form.module.css */ \"./components/contact/contact-form.module.css\");\n/* harmony import */ var _contact_form_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_contact_form_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _ui_notification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/notification */ \"./components/ui/notification.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nasync function sendContactData(contactDetails) {\n    const response = await fetch(\"/api/contact\", {\n        method: \"POST\",\n        body: JSON.stringify(contactDetails),\n        headers: {\n            \"Content-Type\": \"application/json\"\n        }\n    });\n    const data = await response.json();\n    if (!response.ok) {\n        throw new Error(data.message || \"Something went wrong!\");\n    }\n}\nfunction ContactForm() {\n    _s();\n    const [enteredEmail, setEnteredEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [enteredName, setEnteredName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [enteredMessage, setEnteredMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [requestStatus, setRequestStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(); // pending, success, error\n    const [requestError, setRequestError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (requestStatus === \"pening\" || requestStatus === \"error\") {\n            setTimeout();\n        }\n    }, []);\n    async function sendMessageHandler(e) {\n        e.preventDefault();\n        setRequestStatus(\"pending\");\n        try {\n            await sendContactData({\n                email: enteredEmail,\n                name: enteredName,\n                message: enteredMessage\n            });\n            setRequestStatus(\"success\");\n        } catch (error) {\n            setRequestError(error.message);\n            setRequestStatus(\"error\");\n        }\n    }\n    let notification;\n    if (requestStatus === \"pending\") {\n        notification = {\n            status: \"pending\",\n            title: \"Sending message...\",\n            message: \"Your message is on its way!\"\n        };\n    }\n    if (requestStatus === \"success\") {\n        notification = {\n            status: \"success\",\n            title: \"Success!\",\n            message: \"Message send successfully!\"\n        };\n    }\n    if (requestStatus === \"error\") {\n        notification = {\n            status: \"error\",\n            title: \"Error!\",\n            message: requestError\n        };\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_contact_form_module_css__WEBPACK_IMPORTED_MODULE_3___default().contact),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"How can I help you?\"\n            }, void 0, false, {\n                fileName: \"/Users/ying/Documents/repos/My-Blog/components/contact/contact-form.js\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: (_contact_form_module_css__WEBPACK_IMPORTED_MODULE_3___default().form),\n                onSubmit: sendMessageHandler,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_contact_form_module_css__WEBPACK_IMPORTED_MODULE_3___default().controls),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_contact_form_module_css__WEBPACK_IMPORTED_MODULE_3___default().control),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: \"email\",\n                                        children: \"Your Email\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ying/Documents/repos/My-Blog/components/contact/contact-form.js\",\n                                        lineNumber: 85,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"email\",\n                                        id: \"email\",\n                                        value: enteredEmail,\n                                        onChange: (e)=>setEnteredEmail(e.target.value),\n                                        required: true\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ying/Documents/repos/My-Blog/components/contact/contact-form.js\",\n                                        lineNumber: 86,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/ying/Documents/repos/My-Blog/components/contact/contact-form.js\",\n                                lineNumber: 84,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_contact_form_module_css__WEBPACK_IMPORTED_MODULE_3___default().control),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: \"name\",\n                                        children: \"Your Name\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ying/Documents/repos/My-Blog/components/contact/contact-form.js\",\n                                        lineNumber: 90,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        id: \"name\",\n                                        value: enteredName,\n                                        onChange: (e)=>setEnteredName(e.target.value),\n                                        required: true\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ying/Documents/repos/My-Blog/components/contact/contact-form.js\",\n                                        lineNumber: 91,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/ying/Documents/repos/My-Blog/components/contact/contact-form.js\",\n                                lineNumber: 89,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ying/Documents/repos/My-Blog/components/contact/contact-form.js\",\n                        lineNumber: 83,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_contact_form_module_css__WEBPACK_IMPORTED_MODULE_3___default().control),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"message\",\n                                children: \"Your Message\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ying/Documents/repos/My-Blog/components/contact/contact-form.js\",\n                                lineNumber: 96,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                id: \"message\",\n                                rows: \"5\",\n                                value: enteredMessage,\n                                onChange: (e)=>setEnteredMessage(e.target.value),\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"/Users/ying/Documents/repos/My-Blog/components/contact/contact-form.js\",\n                                lineNumber: 97,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ying/Documents/repos/My-Blog/components/contact/contact-form.js\",\n                        lineNumber: 95,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_contact_form_module_css__WEBPACK_IMPORTED_MODULE_3___default().actions),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            children: \"Send Message\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ying/Documents/repos/My-Blog/components/contact/contact-form.js\",\n                            lineNumber: 101,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ying/Documents/repos/My-Blog/components/contact/contact-form.js\",\n                        lineNumber: 100,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ying/Documents/repos/My-Blog/components/contact/contact-form.js\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, this),\n            notification && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_notification__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                status: notification.status,\n                title: notification.title,\n                message: notification.message\n            }, void 0, false, {\n                fileName: \"/Users/ying/Documents/repos/My-Blog/components/contact/contact-form.js\",\n                lineNumber: 104,\n                columnNumber: 24\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ying/Documents/repos/My-Blog/components/contact/contact-form.js\",\n        lineNumber: 80,\n        columnNumber: 5\n    }, this);\n}\n_s(ContactForm, \"dNYjiPAzhWKVcSli1634XoRX34Q=\");\n_c = ContactForm;\nvar _c;\n$RefreshReg$(_c, \"ContactForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q1g7d0JBQUlMLFdBQVd0Qyx5RUFBYzs7MENBQzVCLDhEQUFDOEM7Z0NBQU1DLFNBQVE7MENBQVU7Ozs7OzswQ0FDekIsOERBQUNRO2dDQUFTTCxJQUFHO2dDQUFVTSxNQUFLO2dDQUFJTCxPQUFPOUI7Z0NBQWdCK0IsVUFBVXZCLENBQUFBLElBQUtQLGtCQUFrQk8sRUFBRXdCLE1BQU0sQ0FBQ0YsS0FBSztnQ0FBR0csUUFBUTs7Ozs7Ozs7Ozs7O2tDQUduSCw4REFBQ1g7d0JBQUlMLFdBQVd0Qyx5RUFBYztrQ0FDNUIsNEVBQUMwRDtzQ0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFHWHhCLDhCQUFnQiw4REFBQ2pDLHdEQUFZQTtnQkFBQ2tDLFFBQVFELGFBQWFDLE1BQU07Z0JBQUVDLE9BQU9GLGFBQWFFLEtBQUs7Z0JBQUVyQixTQUFTbUIsYUFBYW5CLE9BQU87Ozs7Ozs7Ozs7OztBQUcxSCxDQUFDO0dBckZ1QkM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QtZm9ybS5qcz84NjJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9jb250YWN0LWZvcm0ubW9kdWxlLmNzc1wiO1xuaW1wb3J0IE5vdGlmaWNhdGlvbiBmcm9tIFwiLi4vdWkvbm90aWZpY2F0aW9uXCI7XG5cbmFzeW5jIGZ1bmN0aW9uIHNlbmRDb250YWN0RGF0YShjb250YWN0RGV0YWlscykge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9jb250YWN0XCIsIHtcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGNvbnRhY3REZXRhaWxzKSxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgfVxuICB9KTtcblxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoZGF0YS5tZXNzYWdlIHx8ICdTb21ldGhpbmcgd2VudCB3cm9uZyEnKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250YWN0Rm9ybSgpIHtcbiAgY29uc3QgWyBlbnRlcmVkRW1haWwsIHNldEVudGVyZWRFbWFpbCBdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbIGVudGVyZWROYW1lLCBzZXRFbnRlcmVkTmFtZSBdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbIGVudGVyZWRNZXNzYWdlLCBzZXRFbnRlcmVkTWVzc2FnZSBdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbIHJlcXVlc3RTdGF0dXMsIHNldFJlcXVlc3RTdGF0dXMgXSA9IHVzZVN0YXRlKCk7IC8vIHBlbmRpbmcsIHN1Y2Nlc3MsIGVycm9yXG4gIGNvbnN0IFsgcmVxdWVzdEVycm9yLCBzZXRSZXF1ZXN0RXJyb3IgXSA9IHVzZVN0YXRlKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocmVxdWVzdFN0YXR1cyA9PT0gJ3BlbmluZycgfHwgcmVxdWVzdFN0YXR1cyA9PT0gJ2Vycm9yJykge1xuICAgICAgc2V0VGltZW91dCgpO1xuICAgIH1cbiAgfSwgW10pXG5cbiAgYXN5bmMgZnVuY3Rpb24gc2VuZE1lc3NhZ2VIYW5kbGVyKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBzZXRSZXF1ZXN0U3RhdHVzKCdwZW5kaW5nJyk7XG5cbiAgICB0cnkge1xuICAgICAgYXdhaXQgc2VuZENvbnRhY3REYXRhKHtcbiAgICAgICAgZW1haWw6IGVudGVyZWRFbWFpbCxcbiAgICAgICAgbmFtZTogZW50ZXJlZE5hbWUsXG4gICAgICAgIG1lc3NhZ2U6IGVudGVyZWRNZXNzYWdlXG4gICAgICB9KTtcbiAgICAgIHNldFJlcXVlc3RTdGF0dXMoJ3N1Y2Nlc3MnKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgc2V0UmVxdWVzdEVycm9yKGVycm9yLm1lc3NhZ2UpO1xuICAgICAgc2V0UmVxdWVzdFN0YXR1cygnZXJyb3InKTtcbiAgICB9XG4gIH1cblxuICBsZXQgbm90aWZpY2F0aW9uO1xuXG4gIGlmIChyZXF1ZXN0U3RhdHVzID09PSAncGVuZGluZycpIHtcbiAgICBub3RpZmljYXRpb24gPSB7XG4gICAgICBzdGF0dXM6ICdwZW5kaW5nJyxcbiAgICAgIHRpdGxlOiAnU2VuZGluZyBtZXNzYWdlLi4uJyxcbiAgICAgIG1lc3NhZ2U6ICdZb3VyIG1lc3NhZ2UgaXMgb24gaXRzIHdheSEnXG4gICAgfVxuICB9XG5cbiAgaWYgKHJlcXVlc3RTdGF0dXMgPT09ICdzdWNjZXNzJykge1xuICAgIG5vdGlmaWNhdGlvbiA9IHtcbiAgICAgIHN0YXR1czogJ3N1Y2Nlc3MnLFxuICAgICAgdGl0bGU6ICdTdWNjZXNzIScsXG4gICAgICBtZXNzYWdlOiAnTWVzc2FnZSBzZW5kIHN1Y2Nlc3NmdWxseSEnXG4gICAgfVxuICB9XG5cbiAgaWYgKHJlcXVlc3RTdGF0dXMgPT09ICdlcnJvcicpIHtcbiAgICBub3RpZmljYXRpb24gPSB7XG4gICAgICBzdGF0dXM6ICdlcnJvcicsXG4gICAgICB0aXRsZTogJ0Vycm9yIScsXG4gICAgICBtZXNzYWdlOiByZXF1ZXN0RXJyb3JcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhY3R9PlxuICAgICAgPGgxPkhvdyBjYW4gSSBoZWxwIHlvdT88L2gxPlxuICAgICAgPGZvcm0gY2xhc3NOYW1lPXtzdHlsZXMuZm9ybX0gb25TdWJtaXQ9e3NlbmRNZXNzYWdlSGFuZGxlcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udHJvbHN9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udHJvbH0+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+WW91ciBFbWFpbDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiIHZhbHVlPXtlbnRlcmVkRW1haWx9IG9uQ2hhbmdlPXtlID0+IHNldEVudGVyZWRFbWFpbChlLnRhcmdldC52YWx1ZSl9IHJlcXVpcmVkIC8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRyb2x9PlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+WW91ciBOYW1lPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibmFtZVwiIHZhbHVlPXtlbnRlcmVkTmFtZX0gb25DaGFuZ2U9e2UgPT4gc2V0RW50ZXJlZE5hbWUoZS50YXJnZXQudmFsdWUpfSByZXF1aXJlZCAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRyb2x9PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibWVzc2FnZVwiPllvdXIgTWVzc2FnZTwvbGFiZWw+XG4gICAgICAgICAgPHRleHRhcmVhIGlkPVwibWVzc2FnZVwiIHJvd3M9XCI1XCIgdmFsdWU9e2VudGVyZWRNZXNzYWdlfSBvbkNoYW5nZT17ZSA9PiBzZXRFbnRlcmVkTWVzc2FnZShlLnRhcmdldC52YWx1ZSl9IHJlcXVpcmVkPjwvdGV4dGFyZWE+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWN0aW9uc30+XG4gICAgICAgICAgPGJ1dHRvbj5TZW5kIE1lc3NhZ2U8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICAgICB7bm90aWZpY2F0aW9uICYmIDxOb3RpZmljYXRpb24gc3RhdHVzPXtub3RpZmljYXRpb24uc3RhdHVzfSB0aXRsZT17bm90aWZpY2F0aW9uLnRpdGxlfSBtZXNzYWdlPXtub3RpZmljYXRpb24ubWVzc2FnZX0vPn1cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIk5vdGlmaWNhdGlvbiIsInNlbmRDb250YWN0RGF0YSIsImNvbnRhY3REZXRhaWxzIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsImRhdGEiLCJqc29uIiwib2siLCJFcnJvciIsIm1lc3NhZ2UiLCJDb250YWN0Rm9ybSIsImVudGVyZWRFbWFpbCIsInNldEVudGVyZWRFbWFpbCIsImVudGVyZWROYW1lIiwic2V0RW50ZXJlZE5hbWUiLCJlbnRlcmVkTWVzc2FnZSIsInNldEVudGVyZWRNZXNzYWdlIiwicmVxdWVzdFN0YXR1cyIsInNldFJlcXVlc3RTdGF0dXMiLCJyZXF1ZXN0RXJyb3IiLCJzZXRSZXF1ZXN0RXJyb3IiLCJzZXRUaW1lb3V0Iiwic2VuZE1lc3NhZ2VIYW5kbGVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZW1haWwiLCJuYW1lIiwiZXJyb3IiLCJub3RpZmljYXRpb24iLCJzdGF0dXMiLCJ0aXRsZSIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJjb250YWN0IiwiaDEiLCJmb3JtIiwib25TdWJtaXQiLCJkaXYiLCJjb250cm9scyIsImNvbnRyb2wiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJpZCIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJyZXF1aXJlZCIsInRleHRhcmVhIiwicm93cyIsImFjdGlvbnMiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/contact/contact-form.js\n"));

/***/ })

});