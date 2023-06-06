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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ContactForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contact_form_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact-form.module.css */ \"./components/contact/contact-form.module.css\");\n/* harmony import */ var _contact_form_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_contact_form_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _ui_notification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/notification */ \"./components/ui/notification.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nasync function sendContactData(contactDetails) {\n    const response = await fetch(\"/api/contact\", {\n        method: \"POST\",\n        body: JSON.stringify(contactDetails),\n        headers: {\n            \"Content-Type\": \"application/json\"\n        }\n    });\n    const data = await response.json();\n    if (!response.ok) {\n        throw new Error(data.message || \"Something went wrong!\");\n    }\n}\nfunction ContactForm() {\n    _s();\n    const [enteredEmail, setEnteredEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [enteredName, setEnteredName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [enteredMessage, setEnteredMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [requestStatus, setRequestStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(); // pending, success, error\n    const [requestError, setRequestError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (requestStatus === \"success\" || requestStatus === \"error\") {\n            const timer = setTimeout(()=>{\n                setRequestStatus(null);\n                setRequestError(null);\n            }, 3000);\n            return ()=>clearTimeout(timer);\n        }\n    }, [\n        requestStatus\n    ]);\n    async function sendMessageHandler(e) {\n        e.preventDefault();\n        setRequestStatus(\"pending\");\n        try {\n            await sendContactData({\n                email: enteredEmail,\n                name: enteredName,\n                message: enteredMessage\n            });\n            setRequestStatus(\"success\");\n            setEnteredEmail(\"\");\n            setEnteredName(\"\");\n            setEnteredMessage(\"\");\n        } catch (error) {\n            setRequestError(error.message);\n            setRequestStatus(\"error\");\n        }\n    }\n    let notification;\n    if (requestStatus === \"pending\") {\n        notification = {\n            status: \"pending\",\n            title: \"Sending message...\",\n            message: \"Your message is on its way!\"\n        };\n    }\n    if (requestStatus === \"success\") {\n        notification = {\n            status: \"success\",\n            title: \"Success!\",\n            message: \"Message send successfully!\"\n        };\n    }\n    if (requestStatus === \"error\") {\n        notification = {\n            status: \"error\",\n            title: \"Error!\",\n            message: requestError\n        };\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_contact_form_module_css__WEBPACK_IMPORTED_MODULE_3___default().contact),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"How can I help you?\"\n            }, void 0, false, {\n                fileName: \"/Users/ying/Documents/repos/My-Blog/components/contact/contact-form.js\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: (_contact_form_module_css__WEBPACK_IMPORTED_MODULE_3___default().form),\n                onSubmit: sendMessageHandler,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_contact_form_module_css__WEBPACK_IMPORTED_MODULE_3___default().controls),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_contact_form_module_css__WEBPACK_IMPORTED_MODULE_3___default().control),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: \"email\",\n                                        children: \"Your Email\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ying/Documents/repos/My-Blog/components/contact/contact-form.js\",\n                                        lineNumber: 92,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"email\",\n                                        id: \"email\",\n                                        value: enteredEmail,\n                                        onChange: (e)=>setEnteredEmail(e.target.value),\n                                        required: true\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ying/Documents/repos/My-Blog/components/contact/contact-form.js\",\n                                        lineNumber: 93,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/ying/Documents/repos/My-Blog/components/contact/contact-form.js\",\n                                lineNumber: 91,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_contact_form_module_css__WEBPACK_IMPORTED_MODULE_3___default().control),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: \"name\",\n                                        children: \"Your Name\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ying/Documents/repos/My-Blog/components/contact/contact-form.js\",\n                                        lineNumber: 97,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        id: \"name\",\n                                        value: enteredName,\n                                        onChange: (e)=>setEnteredName(e.target.value),\n                                        required: true\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ying/Documents/repos/My-Blog/components/contact/contact-form.js\",\n                                        lineNumber: 98,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/ying/Documents/repos/My-Blog/components/contact/contact-form.js\",\n                                lineNumber: 96,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ying/Documents/repos/My-Blog/components/contact/contact-form.js\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_contact_form_module_css__WEBPACK_IMPORTED_MODULE_3___default().control),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"message\",\n                                children: \"Your Message\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ying/Documents/repos/My-Blog/components/contact/contact-form.js\",\n                                lineNumber: 103,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                id: \"message\",\n                                rows: \"5\",\n                                value: enteredMessage,\n                                onChange: (e)=>setEnteredMessage(e.target.value),\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"/Users/ying/Documents/repos/My-Blog/components/contact/contact-form.js\",\n                                lineNumber: 104,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ying/Documents/repos/My-Blog/components/contact/contact-form.js\",\n                        lineNumber: 102,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_contact_form_module_css__WEBPACK_IMPORTED_MODULE_3___default().actions),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            children: \"Send Message\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ying/Documents/repos/My-Blog/components/contact/contact-form.js\",\n                            lineNumber: 108,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ying/Documents/repos/My-Blog/components/contact/contact-form.js\",\n                        lineNumber: 107,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ying/Documents/repos/My-Blog/components/contact/contact-form.js\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, this),\n            notification && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_notification__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                status: notification.status,\n                title: notification.title,\n                message: notification.message\n            }, void 0, false, {\n                fileName: \"/Users/ying/Documents/repos/My-Blog/components/contact/contact-form.js\",\n                lineNumber: 111,\n                columnNumber: 24\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ying/Documents/repos/My-Blog/components/contact/contact-form.js\",\n        lineNumber: 87,\n        columnNumber: 5\n    }, this);\n}\n_s(ContactForm, \"dNYjiPAzhWKVcSli1634XoRX34Q=\");\n_c = ContactForm;\nvar _c;\n$RefreshReg$(_c, \"ContactForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qiw4REFBQ0M7d0NBQU1DLE1BQUs7d0NBQU9DLElBQUc7d0NBQU9DLE9BQU9sQzt3Q0FBYW1DLFVBQVV2QixDQUFBQSxJQUFLWCxlQUFlVyxFQUFFd0IsTUFBTSxDQUFDRixLQUFLO3dDQUFHRyxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBSTVHLDhEQUFDWDt3QkFBSUwsV0FBV3hDLHlFQUFjOzswQ0FDNUIsOERBQUNnRDtnQ0FBTUMsU0FBUTswQ0FBVTs7Ozs7OzBDQUN6Qiw4REFBQ1E7Z0NBQVNMLElBQUc7Z0NBQVVNLE1BQUs7Z0NBQUlMLE9BQU9oQztnQ0FBZ0JpQyxVQUFVdkIsQ0FBQUEsSUFBS1Qsa0JBQWtCUyxFQUFFd0IsTUFBTSxDQUFDRixLQUFLO2dDQUFHRyxRQUFROzs7Ozs7Ozs7Ozs7a0NBR25ILDhEQUFDWDt3QkFBSUwsV0FBV3hDLHlFQUFjO2tDQUM1Qiw0RUFBQzREO3NDQUFPOzs7Ozs7Ozs7Ozs7Ozs7OztZQUdYeEIsOEJBQWdCLDhEQUFDbkMsd0RBQVlBO2dCQUFDb0MsUUFBUUQsYUFBYUMsTUFBTTtnQkFBRUMsT0FBT0YsYUFBYUUsS0FBSztnQkFBRXZCLFNBQVNxQixhQUFhckIsT0FBTzs7Ozs7Ozs7Ozs7O0FBRzFILENBQUM7R0E1RnVCQztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2NvbnRhY3QvY29udGFjdC1mb3JtLmpzPzg2MmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2NvbnRhY3QtZm9ybS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgTm90aWZpY2F0aW9uIGZyb20gXCIuLi91aS9ub3RpZmljYXRpb25cIjtcblxuYXN5bmMgZnVuY3Rpb24gc2VuZENvbnRhY3REYXRhKGNvbnRhY3REZXRhaWxzKSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL2NvbnRhY3RcIiwge1xuICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoY29udGFjdERldGFpbHMpLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgIHRocm93IG5ldyBFcnJvcihkYXRhLm1lc3NhZ2UgfHwgJ1NvbWV0aGluZyB3ZW50IHdyb25nIScpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRhY3RGb3JtKCkge1xuICBjb25zdCBbIGVudGVyZWRFbWFpbCwgc2V0RW50ZXJlZEVtYWlsIF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFsgZW50ZXJlZE5hbWUsIHNldEVudGVyZWROYW1lIF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFsgZW50ZXJlZE1lc3NhZ2UsIHNldEVudGVyZWRNZXNzYWdlIF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFsgcmVxdWVzdFN0YXR1cywgc2V0UmVxdWVzdFN0YXR1cyBdID0gdXNlU3RhdGUoKTsgLy8gcGVuZGluZywgc3VjY2VzcywgZXJyb3JcbiAgY29uc3QgWyByZXF1ZXN0RXJyb3IsIHNldFJlcXVlc3RFcnJvciBdID0gdXNlU3RhdGUoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChyZXF1ZXN0U3RhdHVzID09PSAnc3VjY2VzcycgfHwgcmVxdWVzdFN0YXR1cyA9PT0gJ2Vycm9yJykge1xuICAgICAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2V0UmVxdWVzdFN0YXR1cyhudWxsKTtcbiAgICAgICAgc2V0UmVxdWVzdEVycm9yKG51bGwpO1xuICAgICAgfSwgMzAwMCk7XG4gICAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICB9XG4gIH0sIFtyZXF1ZXN0U3RhdHVzXSlcblxuICBhc3luYyBmdW5jdGlvbiBzZW5kTWVzc2FnZUhhbmRsZXIoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIHNldFJlcXVlc3RTdGF0dXMoJ3BlbmRpbmcnKTtcblxuICAgIHRyeSB7XG4gICAgICBhd2FpdCBzZW5kQ29udGFjdERhdGEoe1xuICAgICAgICBlbWFpbDogZW50ZXJlZEVtYWlsLFxuICAgICAgICBuYW1lOiBlbnRlcmVkTmFtZSxcbiAgICAgICAgbWVzc2FnZTogZW50ZXJlZE1lc3NhZ2VcbiAgICAgIH0pO1xuICAgICAgc2V0UmVxdWVzdFN0YXR1cygnc3VjY2VzcycpO1xuICAgICAgc2V0RW50ZXJlZEVtYWlsKCcnKTtcbiAgICAgIHNldEVudGVyZWROYW1lKCcnKTtcbiAgICAgIHNldEVudGVyZWRNZXNzYWdlKCcnKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgc2V0UmVxdWVzdEVycm9yKGVycm9yLm1lc3NhZ2UpO1xuICAgICAgc2V0UmVxdWVzdFN0YXR1cygnZXJyb3InKTtcbiAgICB9XG4gIH1cblxuICBsZXQgbm90aWZpY2F0aW9uO1xuXG4gIGlmIChyZXF1ZXN0U3RhdHVzID09PSAncGVuZGluZycpIHtcbiAgICBub3RpZmljYXRpb24gPSB7XG4gICAgICBzdGF0dXM6ICdwZW5kaW5nJyxcbiAgICAgIHRpdGxlOiAnU2VuZGluZyBtZXNzYWdlLi4uJyxcbiAgICAgIG1lc3NhZ2U6ICdZb3VyIG1lc3NhZ2UgaXMgb24gaXRzIHdheSEnXG4gICAgfVxuICB9XG5cbiAgaWYgKHJlcXVlc3RTdGF0dXMgPT09ICdzdWNjZXNzJykge1xuICAgIG5vdGlmaWNhdGlvbiA9IHtcbiAgICAgIHN0YXR1czogJ3N1Y2Nlc3MnLFxuICAgICAgdGl0bGU6ICdTdWNjZXNzIScsXG4gICAgICBtZXNzYWdlOiAnTWVzc2FnZSBzZW5kIHN1Y2Nlc3NmdWxseSEnXG4gICAgfVxuICB9XG5cbiAgaWYgKHJlcXVlc3RTdGF0dXMgPT09ICdlcnJvcicpIHtcbiAgICBub3RpZmljYXRpb24gPSB7XG4gICAgICBzdGF0dXM6ICdlcnJvcicsXG4gICAgICB0aXRsZTogJ0Vycm9yIScsXG4gICAgICBtZXNzYWdlOiByZXF1ZXN0RXJyb3JcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhY3R9PlxuICAgICAgPGgxPkhvdyBjYW4gSSBoZWxwIHlvdT88L2gxPlxuICAgICAgPGZvcm0gY2xhc3NOYW1lPXtzdHlsZXMuZm9ybX0gb25TdWJtaXQ9e3NlbmRNZXNzYWdlSGFuZGxlcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udHJvbHN9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udHJvbH0+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+WW91ciBFbWFpbDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiIHZhbHVlPXtlbnRlcmVkRW1haWx9IG9uQ2hhbmdlPXtlID0+IHNldEVudGVyZWRFbWFpbChlLnRhcmdldC52YWx1ZSl9IHJlcXVpcmVkIC8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRyb2x9PlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+WW91ciBOYW1lPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibmFtZVwiIHZhbHVlPXtlbnRlcmVkTmFtZX0gb25DaGFuZ2U9e2UgPT4gc2V0RW50ZXJlZE5hbWUoZS50YXJnZXQudmFsdWUpfSByZXF1aXJlZCAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRyb2x9PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibWVzc2FnZVwiPllvdXIgTWVzc2FnZTwvbGFiZWw+XG4gICAgICAgICAgPHRleHRhcmVhIGlkPVwibWVzc2FnZVwiIHJvd3M9XCI1XCIgdmFsdWU9e2VudGVyZWRNZXNzYWdlfSBvbkNoYW5nZT17ZSA9PiBzZXRFbnRlcmVkTWVzc2FnZShlLnRhcmdldC52YWx1ZSl9IHJlcXVpcmVkPjwvdGV4dGFyZWE+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWN0aW9uc30+XG4gICAgICAgICAgPGJ1dHRvbj5TZW5kIE1lc3NhZ2U8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICAgICB7bm90aWZpY2F0aW9uICYmIDxOb3RpZmljYXRpb24gc3RhdHVzPXtub3RpZmljYXRpb24uc3RhdHVzfSB0aXRsZT17bm90aWZpY2F0aW9uLnRpdGxlfSBtZXNzYWdlPXtub3RpZmljYXRpb24ubWVzc2FnZX0vPn1cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIk5vdGlmaWNhdGlvbiIsInNlbmRDb250YWN0RGF0YSIsImNvbnRhY3REZXRhaWxzIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsImRhdGEiLCJqc29uIiwib2siLCJFcnJvciIsIm1lc3NhZ2UiLCJDb250YWN0Rm9ybSIsImVudGVyZWRFbWFpbCIsInNldEVudGVyZWRFbWFpbCIsImVudGVyZWROYW1lIiwic2V0RW50ZXJlZE5hbWUiLCJlbnRlcmVkTWVzc2FnZSIsInNldEVudGVyZWRNZXNzYWdlIiwicmVxdWVzdFN0YXR1cyIsInNldFJlcXVlc3RTdGF0dXMiLCJyZXF1ZXN0RXJyb3IiLCJzZXRSZXF1ZXN0RXJyb3IiLCJ0aW1lciIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJzZW5kTWVzc2FnZUhhbmRsZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJlbWFpbCIsIm5hbWUiLCJlcnJvciIsIm5vdGlmaWNhdGlvbiIsInN0YXR1cyIsInRpdGxlIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImNvbnRhY3QiLCJoMSIsImZvcm0iLCJvblN1Ym1pdCIsImRpdiIsImNvbnRyb2xzIiwiY29udHJvbCIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsImlkIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsInJlcXVpcmVkIiwidGV4dGFyZWEiLCJyb3dzIiwiYWN0aW9ucyIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/contact/contact-form.js\n"));

/***/ })

});