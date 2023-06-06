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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ContactForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contact_form_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact-form.module.css */ \"./components/contact/contact-form.module.css\");\n/* harmony import */ var _contact_form_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_contact_form_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _ui_notification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/notification */ \"./components/ui/notification.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nasync function sendContactData(contactDetails) {\n    const response = await fetch(\"/api/contact\", {\n        method: \"POST\",\n        body: JSON.stringify(contactDetails),\n        headers: {\n            \"Content-Type\": \"application/json\"\n        }\n    });\n    const data = await response.json();\n    if (!response.ok) {\n        throw new Error(data.message || \"Something went wrong!\");\n    }\n}\nfunction ContactForm() {\n    _s();\n    const [enteredEmail, setEnteredEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [enteredName, setEnteredName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [enteredMessage, setEnteredMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [requestStatus, setRequestStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(); // pending, success, error\n    const [requestError, setRequestError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    async function sendMessageHandler(e) {\n        e.preventDefault();\n        setRequestStatus(\"pending\");\n        try {\n            await sendContactData({\n                email: enteredEmail,\n                name: enteredName,\n                message: enteredMessage\n            });\n            setRequestStatus(\"success\");\n        } catch (error) {\n            setRequestError(error.message);\n            setRequestStatus(\"error\");\n        }\n    }\n    let notification;\n    if (requestStatus === \"pending\") {\n        notification = {\n            status: \"pending\",\n            title: \"Sending message...\",\n            message: \"Your message is on its way!\"\n        };\n    }\n    if (requestStatus === \"success\") {\n        notification = {\n            status: \"success\",\n            title: \"Success!\",\n            message: \"Message send successfully!\"\n        };\n    }\n    if (requestStatus === \"error\") {\n        notification = {\n            status: \"error\",\n            title: \"Error!\",\n            message: requestError\n        };\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_contact_form_module_css__WEBPACK_IMPORTED_MODULE_3___default().contact),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"How can I help you?\"\n            }, void 0, false, {\n                fileName: \"/Users/ying/Documents/repos/My-Blog/components/contact/contact-form.js\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: (_contact_form_module_css__WEBPACK_IMPORTED_MODULE_3___default().form),\n                onSubmit: sendMessageHandler,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_contact_form_module_css__WEBPACK_IMPORTED_MODULE_3___default().controls),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_contact_form_module_css__WEBPACK_IMPORTED_MODULE_3___default().control),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: \"email\",\n                                        children: \"Your Email\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ying/Documents/repos/My-Blog/components/contact/contact-form.js\",\n                                        lineNumber: 79,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"email\",\n                                        id: \"email\",\n                                        value: enteredEmail,\n                                        onChange: (e)=>setEnteredEmail(e.target.value),\n                                        required: true\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ying/Documents/repos/My-Blog/components/contact/contact-form.js\",\n                                        lineNumber: 80,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/ying/Documents/repos/My-Blog/components/contact/contact-form.js\",\n                                lineNumber: 78,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_contact_form_module_css__WEBPACK_IMPORTED_MODULE_3___default().control),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: \"name\",\n                                        children: \"Your Name\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ying/Documents/repos/My-Blog/components/contact/contact-form.js\",\n                                        lineNumber: 84,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        id: \"name\",\n                                        value: enteredName,\n                                        onChange: (e)=>setEnteredName(e.target.value),\n                                        required: true\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ying/Documents/repos/My-Blog/components/contact/contact-form.js\",\n                                        lineNumber: 85,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/ying/Documents/repos/My-Blog/components/contact/contact-form.js\",\n                                lineNumber: 83,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ying/Documents/repos/My-Blog/components/contact/contact-form.js\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_contact_form_module_css__WEBPACK_IMPORTED_MODULE_3___default().control),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"message\",\n                                children: \"Your Message\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ying/Documents/repos/My-Blog/components/contact/contact-form.js\",\n                                lineNumber: 90,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                id: \"message\",\n                                rows: \"5\",\n                                value: enteredMessage,\n                                onChange: (e)=>setEnteredMessage(e.target.value),\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"/Users/ying/Documents/repos/My-Blog/components/contact/contact-form.js\",\n                                lineNumber: 91,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ying/Documents/repos/My-Blog/components/contact/contact-form.js\",\n                        lineNumber: 89,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_contact_form_module_css__WEBPACK_IMPORTED_MODULE_3___default().actions),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            children: \"Send Message\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ying/Documents/repos/My-Blog/components/contact/contact-form.js\",\n                            lineNumber: 95,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ying/Documents/repos/My-Blog/components/contact/contact-form.js\",\n                        lineNumber: 94,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ying/Documents/repos/My-Blog/components/contact/contact-form.js\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ying/Documents/repos/My-Blog/components/contact/contact-form.js\",\n        lineNumber: 74,\n        columnNumber: 5\n    }, this);\n}\n_s(ContactForm, \"QNpusYSyLmD1UjeMLuMwxgVR1ao=\");\n_c = ContactForm;\nvar _c;\n$RefreshReg$(_c, \"ContactForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVVNLE1BQUs7Z0NBQUlMLE9BQU83QjtnQ0FBZ0I4QixVQUFVdkIsQ0FBQUEsSUFBS04sa0JBQWtCTSxFQUFFd0IsTUFBTSxDQUFDRixLQUFLO2dDQUFHRyxRQUFROzs7Ozs7Ozs7Ozs7a0NBR25ILDhEQUFDWDt3QkFBSUwsV0FBV3JDLHlFQUFjO2tDQUM1Qiw0RUFBQ3lEO3NDQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1sQixDQUFDO0dBL0V1QnpDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY29udGFjdC9jb250YWN0LWZvcm0uanM/ODYyZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2NvbnRhY3QtZm9ybS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgTm90aWZpY2F0aW9uIGZyb20gXCIuLi91aS9ub3RpZmljYXRpb25cIjtcblxuYXN5bmMgZnVuY3Rpb24gc2VuZENvbnRhY3REYXRhKGNvbnRhY3REZXRhaWxzKSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL2NvbnRhY3RcIiwge1xuICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoY29udGFjdERldGFpbHMpLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgIHRocm93IG5ldyBFcnJvcihkYXRhLm1lc3NhZ2UgfHwgJ1NvbWV0aGluZyB3ZW50IHdyb25nIScpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRhY3RGb3JtKCkge1xuICBjb25zdCBbIGVudGVyZWRFbWFpbCwgc2V0RW50ZXJlZEVtYWlsIF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFsgZW50ZXJlZE5hbWUsIHNldEVudGVyZWROYW1lIF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFsgZW50ZXJlZE1lc3NhZ2UsIHNldEVudGVyZWRNZXNzYWdlIF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFsgcmVxdWVzdFN0YXR1cywgc2V0UmVxdWVzdFN0YXR1cyBdID0gdXNlU3RhdGUoKTsgLy8gcGVuZGluZywgc3VjY2VzcywgZXJyb3JcbiAgY29uc3QgWyByZXF1ZXN0RXJyb3IsIHNldFJlcXVlc3RFcnJvciBdID0gdXNlU3RhdGUoKTtcblxuICBhc3luYyBmdW5jdGlvbiBzZW5kTWVzc2FnZUhhbmRsZXIoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIHNldFJlcXVlc3RTdGF0dXMoJ3BlbmRpbmcnKTtcblxuICAgIHRyeSB7XG4gICAgICBhd2FpdCBzZW5kQ29udGFjdERhdGEoe1xuICAgICAgICBlbWFpbDogZW50ZXJlZEVtYWlsLFxuICAgICAgICBuYW1lOiBlbnRlcmVkTmFtZSxcbiAgICAgICAgbWVzc2FnZTogZW50ZXJlZE1lc3NhZ2VcbiAgICAgIH0pO1xuICAgICAgc2V0UmVxdWVzdFN0YXR1cygnc3VjY2VzcycpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBzZXRSZXF1ZXN0RXJyb3IoZXJyb3IubWVzc2FnZSk7XG4gICAgICBzZXRSZXF1ZXN0U3RhdHVzKCdlcnJvcicpO1xuICAgIH1cbiAgfVxuXG4gIGxldCBub3RpZmljYXRpb247XG5cbiAgaWYgKHJlcXVlc3RTdGF0dXMgPT09ICdwZW5kaW5nJykge1xuICAgIG5vdGlmaWNhdGlvbiA9IHtcbiAgICAgIHN0YXR1czogJ3BlbmRpbmcnLFxuICAgICAgdGl0bGU6ICdTZW5kaW5nIG1lc3NhZ2UuLi4nLFxuICAgICAgbWVzc2FnZTogJ1lvdXIgbWVzc2FnZSBpcyBvbiBpdHMgd2F5ISdcbiAgICB9XG4gIH1cblxuICBpZiAocmVxdWVzdFN0YXR1cyA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgbm90aWZpY2F0aW9uID0ge1xuICAgICAgc3RhdHVzOiAnc3VjY2VzcycsXG4gICAgICB0aXRsZTogJ1N1Y2Nlc3MhJyxcbiAgICAgIG1lc3NhZ2U6ICdNZXNzYWdlIHNlbmQgc3VjY2Vzc2Z1bGx5ISdcbiAgICB9XG4gIH1cblxuICBpZiAocmVxdWVzdFN0YXR1cyA9PT0gJ2Vycm9yJykge1xuICAgIG5vdGlmaWNhdGlvbiA9IHtcbiAgICAgIHN0YXR1czogJ2Vycm9yJyxcbiAgICAgIHRpdGxlOiAnRXJyb3IhJyxcbiAgICAgIG1lc3NhZ2U6IHJlcXVlc3RFcnJvclxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuY29udGFjdH0+XG4gICAgICA8aDE+SG93IGNhbiBJIGhlbHAgeW91PzwvaDE+XG4gICAgICA8Zm9ybSBjbGFzc05hbWU9e3N0eWxlcy5mb3JtfSBvblN1Ym1pdD17c2VuZE1lc3NhZ2VIYW5kbGVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250cm9sc30+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250cm9sfT5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5Zb3VyIEVtYWlsPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBpZD1cImVtYWlsXCIgdmFsdWU9e2VudGVyZWRFbWFpbH0gb25DaGFuZ2U9e2UgPT4gc2V0RW50ZXJlZEVtYWlsKGUudGFyZ2V0LnZhbHVlKX0gcmVxdWlyZWQgLz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udHJvbH0+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIj5Zb3VyIE5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJuYW1lXCIgdmFsdWU9e2VudGVyZWROYW1lfSBvbkNoYW5nZT17ZSA9PiBzZXRFbnRlcmVkTmFtZShlLnRhcmdldC52YWx1ZSl9IHJlcXVpcmVkIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udHJvbH0+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJtZXNzYWdlXCI+WW91ciBNZXNzYWdlPC9sYWJlbD5cbiAgICAgICAgICA8dGV4dGFyZWEgaWQ9XCJtZXNzYWdlXCIgcm93cz1cIjVcIiB2YWx1ZT17ZW50ZXJlZE1lc3NhZ2V9IG9uQ2hhbmdlPXtlID0+IHNldEVudGVyZWRNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKX0gcmVxdWlyZWQ+PC90ZXh0YXJlYT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hY3Rpb25zfT5cbiAgICAgICAgICA8YnV0dG9uPlNlbmQgTWVzc2FnZTwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgICAgIHt9XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJzdHlsZXMiLCJOb3RpZmljYXRpb24iLCJzZW5kQ29udGFjdERhdGEiLCJjb250YWN0RGV0YWlscyIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJkYXRhIiwianNvbiIsIm9rIiwiRXJyb3IiLCJtZXNzYWdlIiwiQ29udGFjdEZvcm0iLCJlbnRlcmVkRW1haWwiLCJzZXRFbnRlcmVkRW1haWwiLCJlbnRlcmVkTmFtZSIsInNldEVudGVyZWROYW1lIiwiZW50ZXJlZE1lc3NhZ2UiLCJzZXRFbnRlcmVkTWVzc2FnZSIsInJlcXVlc3RTdGF0dXMiLCJzZXRSZXF1ZXN0U3RhdHVzIiwicmVxdWVzdEVycm9yIiwic2V0UmVxdWVzdEVycm9yIiwic2VuZE1lc3NhZ2VIYW5kbGVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZW1haWwiLCJuYW1lIiwiZXJyb3IiLCJub3RpZmljYXRpb24iLCJzdGF0dXMiLCJ0aXRsZSIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJjb250YWN0IiwiaDEiLCJmb3JtIiwib25TdWJtaXQiLCJkaXYiLCJjb250cm9scyIsImNvbnRyb2wiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJpZCIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJyZXF1aXJlZCIsInRleHRhcmVhIiwicm93cyIsImFjdGlvbnMiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/contact/contact-form.js\n"));

/***/ })

});