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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ContactForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contact_form_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact-form.module.css */ \"./components/contact/contact-form.module.css\");\n/* harmony import */ var _contact_form_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_contact_form_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _ui_notification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/notification */ \"./components/ui/notification.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nasync function sendContactData(contactDetails) {\n    const response = await fetch(\"/api/contact\", {\n        method: \"POST\",\n        body: JSON.stringify(contactDetails),\n        headers: {\n            \"Content-Type\": \"application/json\"\n        }\n    });\n    const data = await response.json();\n    if (!response.ok) {\n        throw new Error(data.message || \"Something went wrong!\");\n    }\n}\nfunction ContactForm() {\n    _s();\n    const [enteredEmail, setEnteredEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [enteredName, setEnteredName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [enteredMessage, setEnteredMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [requestStatus, setRequestStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(); // pending, success, error\n    const [requestError, setRequestError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (requestStatus === \"pening\" || requestStatus === \"error\") {\n            setTimeout(()=>{\n                setRequestStatus();\n            }, 3000);\n        }\n    }, []);\n    async function sendMessageHandler(e) {\n        e.preventDefault();\n        setRequestStatus(\"pending\");\n        try {\n            await sendContactData({\n                email: enteredEmail,\n                name: enteredName,\n                message: enteredMessage\n            });\n            setRequestStatus(\"success\");\n        } catch (error) {\n            setRequestError(error.message);\n            setRequestStatus(\"error\");\n        }\n    }\n    let notification;\n    if (requestStatus === \"pending\") {\n        notification = {\n            status: \"pending\",\n            title: \"Sending message...\",\n            message: \"Your message is on its way!\"\n        };\n    }\n    if (requestStatus === \"success\") {\n        notification = {\n            status: \"success\",\n            title: \"Success!\",\n            message: \"Message send successfully!\"\n        };\n    }\n    if (requestStatus === \"error\") {\n        notification = {\n            status: \"error\",\n            title: \"Error!\",\n            message: requestError\n        };\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_contact_form_module_css__WEBPACK_IMPORTED_MODULE_3___default().contact),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"How can I help you?\"\n            }, void 0, false, {\n                fileName: \"/Users/ying/Documents/repos/My-Blog/components/contact/contact-form.js\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: (_contact_form_module_css__WEBPACK_IMPORTED_MODULE_3___default().form),\n                onSubmit: sendMessageHandler,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_contact_form_module_css__WEBPACK_IMPORTED_MODULE_3___default().controls),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_contact_form_module_css__WEBPACK_IMPORTED_MODULE_3___default().control),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: \"email\",\n                                        children: \"Your Email\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ying/Documents/repos/My-Blog/components/contact/contact-form.js\",\n                                        lineNumber: 87,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"email\",\n                                        id: \"email\",\n                                        value: enteredEmail,\n                                        onChange: (e)=>setEnteredEmail(e.target.value),\n                                        required: true\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ying/Documents/repos/My-Blog/components/contact/contact-form.js\",\n                                        lineNumber: 88,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/ying/Documents/repos/My-Blog/components/contact/contact-form.js\",\n                                lineNumber: 86,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_contact_form_module_css__WEBPACK_IMPORTED_MODULE_3___default().control),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: \"name\",\n                                        children: \"Your Name\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ying/Documents/repos/My-Blog/components/contact/contact-form.js\",\n                                        lineNumber: 92,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        id: \"name\",\n                                        value: enteredName,\n                                        onChange: (e)=>setEnteredName(e.target.value),\n                                        required: true\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ying/Documents/repos/My-Blog/components/contact/contact-form.js\",\n                                        lineNumber: 93,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/ying/Documents/repos/My-Blog/components/contact/contact-form.js\",\n                                lineNumber: 91,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ying/Documents/repos/My-Blog/components/contact/contact-form.js\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_contact_form_module_css__WEBPACK_IMPORTED_MODULE_3___default().control),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"message\",\n                                children: \"Your Message\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ying/Documents/repos/My-Blog/components/contact/contact-form.js\",\n                                lineNumber: 98,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                id: \"message\",\n                                rows: \"5\",\n                                value: enteredMessage,\n                                onChange: (e)=>setEnteredMessage(e.target.value),\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"/Users/ying/Documents/repos/My-Blog/components/contact/contact-form.js\",\n                                lineNumber: 99,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ying/Documents/repos/My-Blog/components/contact/contact-form.js\",\n                        lineNumber: 97,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_contact_form_module_css__WEBPACK_IMPORTED_MODULE_3___default().actions),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            children: \"Send Message\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ying/Documents/repos/My-Blog/components/contact/contact-form.js\",\n                            lineNumber: 103,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ying/Documents/repos/My-Blog/components/contact/contact-form.js\",\n                        lineNumber: 102,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ying/Documents/repos/My-Blog/components/contact/contact-form.js\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, this),\n            notification && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_notification__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                status: notification.status,\n                title: notification.title,\n                message: notification.message\n            }, void 0, false, {\n                fileName: \"/Users/ying/Documents/repos/My-Blog/components/contact/contact-form.js\",\n                lineNumber: 106,\n                columnNumber: 24\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ying/Documents/repos/My-Blog/components/contact/contact-form.js\",\n        lineNumber: 82,\n        columnNumber: 5\n    }, this);\n}\n_s(ContactForm, \"dNYjiPAzhWKVcSli1634XoRX34Q=\");\n_c = ContactForm;\nvar _c;\n$RefreshReg$(_c, \"ContactForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbnRhY3QvY29udGFjdC1mb3JtLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQTJEO0FBRVo7QUFDRDtBQUU5QyxlQUFlTSxnQkFBZ0JDLGNBQWMsRUFBRTtJQUM3QyxNQUFNQyxXQUFXLE1BQU1DLE1BQU0sZ0JBQWdCO1FBQzNDQyxRQUFRO1FBQ1JDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQ047UUFDckJPLFNBQVM7WUFDUCxnQkFBZ0I7UUFDbEI7SUFDRjtJQUVBLE1BQU1DLE9BQU8sTUFBTVAsU0FBU1EsSUFBSTtJQUVoQyxJQUFJLENBQUNSLFNBQVNTLEVBQUUsRUFBRTtRQUNoQixNQUFNLElBQUlDLE1BQU1ILEtBQUtJLE9BQU8sSUFBSSx5QkFBeUI7SUFDM0QsQ0FBQztBQUNIO0FBRWUsU0FBU0MsY0FBYzs7SUFDcEMsTUFBTSxDQUFFQyxjQUFjQyxnQkFBaUIsR0FBR25CLCtDQUFRQSxDQUFDO0lBQ25ELE1BQU0sQ0FBRW9CLGFBQWFDLGVBQWdCLEdBQUdyQiwrQ0FBUUEsQ0FBQztJQUNqRCxNQUFNLENBQUVzQixnQkFBZ0JDLGtCQUFtQixHQUFHdkIsK0NBQVFBLENBQUM7SUFDdkQsTUFBTSxDQUFFd0IsZUFBZUMsaUJBQWtCLEdBQUd6QiwrQ0FBUUEsSUFBSSwwQkFBMEI7SUFDbEYsTUFBTSxDQUFFMEIsY0FBY0MsZ0JBQWlCLEdBQUczQiwrQ0FBUUE7SUFFbERGLGdEQUFTQSxDQUFDLElBQU07UUFDZCxJQUFJMEIsa0JBQWtCLFlBQVlBLGtCQUFrQixTQUFTO1lBQzNESSxXQUFXLElBQU07Z0JBQ2ZIO1lBQ0YsR0FBRztRQUNMLENBQUM7SUFDSCxHQUFHLEVBQUU7SUFFTCxlQUFlSSxtQkFBbUJDLENBQUMsRUFBRTtRQUNuQ0EsRUFBRUMsY0FBYztRQUVoQk4saUJBQWlCO1FBRWpCLElBQUk7WUFDRixNQUFNdEIsZ0JBQWdCO2dCQUNwQjZCLE9BQU9kO2dCQUNQZSxNQUFNYjtnQkFDTkosU0FBU007WUFDWDtZQUNBRyxpQkFBaUI7UUFDbkIsRUFBRSxPQUFPUyxPQUFPO1lBQ2RQLGdCQUFnQk8sTUFBTWxCLE9BQU87WUFDN0JTLGlCQUFpQjtRQUNuQjtJQUNGO0lBRUEsSUFBSVU7SUFFSixJQUFJWCxrQkFBa0IsV0FBVztRQUMvQlcsZUFBZTtZQUNiQyxRQUFRO1lBQ1JDLE9BQU87WUFDUHJCLFNBQVM7UUFDWDtJQUNGLENBQUM7SUFFRCxJQUFJUSxrQkFBa0IsV0FBVztRQUMvQlcsZUFBZTtZQUNiQyxRQUFRO1lBQ1JDLE9BQU87WUFDUHJCLFNBQVM7UUFDWDtJQUNGLENBQUM7SUFFRCxJQUFJUSxrQkFBa0IsU0FBUztRQUM3QlcsZUFBZTtZQUNiQyxRQUFRO1lBQ1JDLE9BQU87WUFDUHJCLFNBQVNVO1FBQ1g7SUFDRixDQUFDO0lBRUQscUJBQ0UsOERBQUNZO1FBQVFDLFdBQVd0Qyx5RUFBYzs7MEJBQ2hDLDhEQUFDd0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7Z0JBQUtILFdBQVd0QyxzRUFBVztnQkFBRTBDLFVBQVVkOztrQ0FDdEMsOERBQUNlO3dCQUFJTCxXQUFXdEMsMEVBQWU7OzBDQUM3Qiw4REFBQzJDO2dDQUFJTCxXQUFXdEMseUVBQWM7O2tEQUM1Qiw4REFBQzhDO3dDQUFNQyxTQUFRO2tEQUFROzs7Ozs7a0RBQ3ZCLDhEQUFDQzt3Q0FBTUMsTUFBSzt3Q0FBUUMsSUFBRzt3Q0FBUUMsT0FBT2xDO3dDQUFjbUMsVUFBVXZCLENBQUFBLElBQUtYLGdCQUFnQlcsRUFBRXdCLE1BQU0sQ0FBQ0YsS0FBSzt3Q0FBR0csUUFBUTs7Ozs7Ozs7Ozs7OzBDQUc5Ryw4REFBQ1g7Z0NBQUlMLFdBQVd0Qyx5RUFBYzs7a0RBQzVCLDhEQUFDOEM7d0NBQU1DLFNBQVE7a0RBQU87Ozs7OztrREFDdEIsOERBQUNDO3dDQUFNQyxNQUFLO3dDQUFPQyxJQUFHO3dDQUFPQyxPQUFPaEM7d0NBQWFpQyxVQUFVdkIsQ0FBQUEsSUFBS1QsZUFBZVMsRUFBRXdCLE1BQU0sQ0FBQ0YsS0FBSzt3Q0FBR0csUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUk1Ryw4REFBQ1g7d0JBQUlMLFdBQVd0Qyx5RUFBYzs7MENBQzVCLDhEQUFDOEM7Z0NBQU1DLFNBQVE7MENBQVU7Ozs7OzswQ0FDekIsOERBQUNRO2dDQUFTTCxJQUFHO2dDQUFVTSxNQUFLO2dDQUFJTCxPQUFPOUI7Z0NBQWdCK0IsVUFBVXZCLENBQUFBLElBQUtQLGtCQUFrQk8sRUFBRXdCLE1BQU0sQ0FBQ0YsS0FBSztnQ0FBR0csUUFBUTs7Ozs7Ozs7Ozs7O2tDQUduSCw4REFBQ1g7d0JBQUlMLFdBQVd0Qyx5RUFBYztrQ0FDNUIsNEVBQUMwRDtzQ0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFHWHhCLDhCQUFnQiw4REFBQ2pDLHdEQUFZQTtnQkFBQ2tDLFFBQVFELGFBQWFDLE1BQU07Z0JBQUVDLE9BQU9GLGFBQWFFLEtBQUs7Z0JBQUVyQixTQUFTbUIsYUFBYW5CLE9BQU87Ozs7Ozs7Ozs7OztBQUcxSCxDQUFDO0dBdkZ1QkM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QtZm9ybS5qcz84NjJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9jb250YWN0LWZvcm0ubW9kdWxlLmNzc1wiO1xuaW1wb3J0IE5vdGlmaWNhdGlvbiBmcm9tIFwiLi4vdWkvbm90aWZpY2F0aW9uXCI7XG5cbmFzeW5jIGZ1bmN0aW9uIHNlbmRDb250YWN0RGF0YShjb250YWN0RGV0YWlscykge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9jb250YWN0XCIsIHtcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGNvbnRhY3REZXRhaWxzKSxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgfVxuICB9KTtcblxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoZGF0YS5tZXNzYWdlIHx8ICdTb21ldGhpbmcgd2VudCB3cm9uZyEnKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250YWN0Rm9ybSgpIHtcbiAgY29uc3QgWyBlbnRlcmVkRW1haWwsIHNldEVudGVyZWRFbWFpbCBdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbIGVudGVyZWROYW1lLCBzZXRFbnRlcmVkTmFtZSBdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbIGVudGVyZWRNZXNzYWdlLCBzZXRFbnRlcmVkTWVzc2FnZSBdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbIHJlcXVlc3RTdGF0dXMsIHNldFJlcXVlc3RTdGF0dXMgXSA9IHVzZVN0YXRlKCk7IC8vIHBlbmRpbmcsIHN1Y2Nlc3MsIGVycm9yXG4gIGNvbnN0IFsgcmVxdWVzdEVycm9yLCBzZXRSZXF1ZXN0RXJyb3IgXSA9IHVzZVN0YXRlKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocmVxdWVzdFN0YXR1cyA9PT0gJ3BlbmluZycgfHwgcmVxdWVzdFN0YXR1cyA9PT0gJ2Vycm9yJykge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNldFJlcXVlc3RTdGF0dXMoKVxuICAgICAgfSwgMzAwMCk7XG4gICAgfVxuICB9LCBbXSlcblxuICBhc3luYyBmdW5jdGlvbiBzZW5kTWVzc2FnZUhhbmRsZXIoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIHNldFJlcXVlc3RTdGF0dXMoJ3BlbmRpbmcnKTtcblxuICAgIHRyeSB7XG4gICAgICBhd2FpdCBzZW5kQ29udGFjdERhdGEoe1xuICAgICAgICBlbWFpbDogZW50ZXJlZEVtYWlsLFxuICAgICAgICBuYW1lOiBlbnRlcmVkTmFtZSxcbiAgICAgICAgbWVzc2FnZTogZW50ZXJlZE1lc3NhZ2VcbiAgICAgIH0pO1xuICAgICAgc2V0UmVxdWVzdFN0YXR1cygnc3VjY2VzcycpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBzZXRSZXF1ZXN0RXJyb3IoZXJyb3IubWVzc2FnZSk7XG4gICAgICBzZXRSZXF1ZXN0U3RhdHVzKCdlcnJvcicpO1xuICAgIH1cbiAgfVxuXG4gIGxldCBub3RpZmljYXRpb247XG5cbiAgaWYgKHJlcXVlc3RTdGF0dXMgPT09ICdwZW5kaW5nJykge1xuICAgIG5vdGlmaWNhdGlvbiA9IHtcbiAgICAgIHN0YXR1czogJ3BlbmRpbmcnLFxuICAgICAgdGl0bGU6ICdTZW5kaW5nIG1lc3NhZ2UuLi4nLFxuICAgICAgbWVzc2FnZTogJ1lvdXIgbWVzc2FnZSBpcyBvbiBpdHMgd2F5ISdcbiAgICB9XG4gIH1cblxuICBpZiAocmVxdWVzdFN0YXR1cyA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgbm90aWZpY2F0aW9uID0ge1xuICAgICAgc3RhdHVzOiAnc3VjY2VzcycsXG4gICAgICB0aXRsZTogJ1N1Y2Nlc3MhJyxcbiAgICAgIG1lc3NhZ2U6ICdNZXNzYWdlIHNlbmQgc3VjY2Vzc2Z1bGx5ISdcbiAgICB9XG4gIH1cblxuICBpZiAocmVxdWVzdFN0YXR1cyA9PT0gJ2Vycm9yJykge1xuICAgIG5vdGlmaWNhdGlvbiA9IHtcbiAgICAgIHN0YXR1czogJ2Vycm9yJyxcbiAgICAgIHRpdGxlOiAnRXJyb3IhJyxcbiAgICAgIG1lc3NhZ2U6IHJlcXVlc3RFcnJvclxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuY29udGFjdH0+XG4gICAgICA8aDE+SG93IGNhbiBJIGhlbHAgeW91PzwvaDE+XG4gICAgICA8Zm9ybSBjbGFzc05hbWU9e3N0eWxlcy5mb3JtfSBvblN1Ym1pdD17c2VuZE1lc3NhZ2VIYW5kbGVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250cm9sc30+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250cm9sfT5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5Zb3VyIEVtYWlsPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBpZD1cImVtYWlsXCIgdmFsdWU9e2VudGVyZWRFbWFpbH0gb25DaGFuZ2U9e2UgPT4gc2V0RW50ZXJlZEVtYWlsKGUudGFyZ2V0LnZhbHVlKX0gcmVxdWlyZWQgLz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udHJvbH0+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIj5Zb3VyIE5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJuYW1lXCIgdmFsdWU9e2VudGVyZWROYW1lfSBvbkNoYW5nZT17ZSA9PiBzZXRFbnRlcmVkTmFtZShlLnRhcmdldC52YWx1ZSl9IHJlcXVpcmVkIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udHJvbH0+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJtZXNzYWdlXCI+WW91ciBNZXNzYWdlPC9sYWJlbD5cbiAgICAgICAgICA8dGV4dGFyZWEgaWQ9XCJtZXNzYWdlXCIgcm93cz1cIjVcIiB2YWx1ZT17ZW50ZXJlZE1lc3NhZ2V9IG9uQ2hhbmdlPXtlID0+IHNldEVudGVyZWRNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKX0gcmVxdWlyZWQ+PC90ZXh0YXJlYT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hY3Rpb25zfT5cbiAgICAgICAgICA8YnV0dG9uPlNlbmQgTWVzc2FnZTwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgICAgIHtub3RpZmljYXRpb24gJiYgPE5vdGlmaWNhdGlvbiBzdGF0dXM9e25vdGlmaWNhdGlvbi5zdGF0dXN9IHRpdGxlPXtub3RpZmljYXRpb24udGl0bGV9IG1lc3NhZ2U9e25vdGlmaWNhdGlvbi5tZXNzYWdlfS8+fVxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwic3R5bGVzIiwiTm90aWZpY2F0aW9uIiwic2VuZENvbnRhY3REYXRhIiwiY29udGFjdERldGFpbHMiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwiZGF0YSIsImpzb24iLCJvayIsIkVycm9yIiwibWVzc2FnZSIsIkNvbnRhY3RGb3JtIiwiZW50ZXJlZEVtYWlsIiwic2V0RW50ZXJlZEVtYWlsIiwiZW50ZXJlZE5hbWUiLCJzZXRFbnRlcmVkTmFtZSIsImVudGVyZWRNZXNzYWdlIiwic2V0RW50ZXJlZE1lc3NhZ2UiLCJyZXF1ZXN0U3RhdHVzIiwic2V0UmVxdWVzdFN0YXR1cyIsInJlcXVlc3RFcnJvciIsInNldFJlcXVlc3RFcnJvciIsInNldFRpbWVvdXQiLCJzZW5kTWVzc2FnZUhhbmRsZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJlbWFpbCIsIm5hbWUiLCJlcnJvciIsIm5vdGlmaWNhdGlvbiIsInN0YXR1cyIsInRpdGxlIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImNvbnRhY3QiLCJoMSIsImZvcm0iLCJvblN1Ym1pdCIsImRpdiIsImNvbnRyb2xzIiwiY29udHJvbCIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsImlkIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsInJlcXVpcmVkIiwidGV4dGFyZWEiLCJyb3dzIiwiYWN0aW9ucyIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/contact/contact-form.js\n"));

/***/ })

});