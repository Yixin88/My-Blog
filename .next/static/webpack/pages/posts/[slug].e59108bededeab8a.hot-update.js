"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/posts/[slug]",{

/***/ "./components/posts/post-detail/post-content.js":
/*!******************************************************!*\
  !*** ./components/posts/post-detail/post-content.js ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PostContent; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _post_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post-header */ \"./components/posts/post-detail/post-header.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _post_content_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./post-content.module.css */ \"./components/posts/post-detail/post-content.module.css\");\n/* harmony import */ var _post_content_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_post_content_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nfunction PostContent(props) {\n    const { post  } = props;\n    const imagePath = \"/images/posts/\".concat(post.slug, \"/\").concat(post.image);\n    const customRenderers = {\n        img (image) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                src: \"/images/posts/\".concat(post.slug, \"/\").concat(image.src),\n                alt: image.alt,\n                width: 600,\n                height: 300\n            }, void 0, false, {\n                fileName: \"/Users/ying/Documents/repos/My-Blog/components/posts/post-detail/post-content.js\",\n                lineNumber: 16,\n                columnNumber: 9\n            }, this);\n        },\n        p (paragraph) {\n            const { node  } = paragraph;\n            if (node.children[0].tage === \"image\") {}\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n        className: (_post_content_module_css__WEBPACK_IMPORTED_MODULE_4___default().content),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_post_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                title: post.title,\n                image: imagePath\n            }, void 0, false, {\n                fileName: \"/Users/ying/Documents/repos/My-Blog/components/posts/post-detail/post-content.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_markdown__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                components: customRenderers,\n                children: post.content\n            }, void 0, false, {\n                fileName: \"/Users/ying/Documents/repos/My-Blog/components/posts/post-detail/post-content.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ying/Documents/repos/My-Blog/components/posts/post-detail/post-content.js\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, this);\n}\n_c = PostContent;\nvar _c;\n$RefreshReg$(_c, \"PostContent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Bvc3RzL3Bvc3QtZGV0YWlsL3Bvc3QtY29udGVudC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQTBCO0FBQ2E7QUFDSTtBQUNaO0FBRWdCO0FBRWhDLFNBQVNLLFlBQVlDLEtBQUssRUFBRTtJQUN6QyxNQUFNLEVBQUVDLEtBQUksRUFBRSxHQUFHRDtJQUVqQixNQUFNRSxZQUFZLGlCQUE4QkQsT0FBYkEsS0FBS0UsSUFBSSxFQUFDLEtBQWMsT0FBWEYsS0FBS0csS0FBSztJQUUxRCxNQUFNQyxrQkFBa0I7UUFDdEJDLEtBQUlGLEtBQUssRUFBRTtZQUNULHFCQUNFLDhEQUFDUCxtREFBS0E7Z0JBQ0pVLEtBQUssaUJBQThCSCxPQUFiSCxLQUFLRSxJQUFJLEVBQUMsS0FBYSxPQUFWQyxNQUFNRyxHQUFHO2dCQUM1Q0MsS0FBS0osTUFBTUksR0FBRztnQkFDZEMsT0FBTztnQkFDUEMsUUFBUTs7Ozs7O1FBR2Q7UUFFQUMsR0FBRUMsU0FBUyxFQUFFO1lBQ1gsTUFBTSxFQUFFQyxLQUFJLEVBQUUsR0FBR0Q7WUFFakIsSUFBSUMsS0FBS0MsUUFBUSxDQUFDLEVBQUUsQ0FBQ0MsSUFBSSxLQUFLLFNBQVMsQ0FFdkMsQ0FBQztRQUNIO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0M7UUFBUUMsV0FBV25CLHlFQUFjOzswQkFDaEMsOERBQUNILG9EQUFVQTtnQkFBQ3dCLE9BQU9sQixLQUFLa0IsS0FBSztnQkFBRWYsT0FBT0Y7Ozs7OzswQkFDdEMsOERBQUNOLHNEQUFhQTtnQkFBQ3dCLFlBQVlmOzBCQUFrQkosS0FBS2lCLE9BQU87Ozs7Ozs7Ozs7OztBQUcvRCxDQUFDO0tBaEN1Qm5CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcG9zdHMvcG9zdC1kZXRhaWwvcG9zdC1jb250ZW50LmpzP2Q4YmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFBvc3RIZWFkZXIgZnJvbSBcIi4vcG9zdC1oZWFkZXJcIjtcbmltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gXCJyZWFjdC1tYXJrZG93blwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vcG9zdC1jb250ZW50Lm1vZHVsZS5jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdENvbnRlbnQocHJvcHMpIHtcbiAgY29uc3QgeyBwb3N0IH0gPSBwcm9wcztcblxuICBjb25zdCBpbWFnZVBhdGggPSBgL2ltYWdlcy9wb3N0cy8ke3Bvc3Quc2x1Z30vJHtwb3N0LmltYWdlfWA7XG5cbiAgY29uc3QgY3VzdG9tUmVuZGVyZXJzID0ge1xuICAgIGltZyhpbWFnZSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEltYWdlXG4gICAgICAgICAgc3JjPXtgL2ltYWdlcy9wb3N0cy8ke3Bvc3Quc2x1Z30vJHtpbWFnZS5zcmN9YH1cbiAgICAgICAgICBhbHQ9e2ltYWdlLmFsdH1cbiAgICAgICAgICB3aWR0aD17NjAwfVxuICAgICAgICAgIGhlaWdodD17MzAwfVxuICAgICAgICAvPlxuICAgICAgKTtcbiAgICB9LFxuXG4gICAgcChwYXJhZ3JhcGgpIHtcbiAgICAgIGNvbnN0IHsgbm9kZSB9ID0gcGFyYWdyYXBoO1xuXG4gICAgICBpZiAobm9kZS5jaGlsZHJlblswXS50YWdlID09PSAnaW1hZ2UnKSB7XG5cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8YXJ0aWNsZSBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cbiAgICAgIDxQb3N0SGVhZGVyIHRpdGxlPXtwb3N0LnRpdGxlfSBpbWFnZT17aW1hZ2VQYXRofSAvPlxuICAgICAgPFJlYWN0TWFya2Rvd24gY29tcG9uZW50cz17Y3VzdG9tUmVuZGVyZXJzfT57cG9zdC5jb250ZW50fTwvUmVhY3RNYXJrZG93bj5cbiAgICA8L2FydGljbGU+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJQb3N0SGVhZGVyIiwiUmVhY3RNYXJrZG93biIsIkltYWdlIiwic3R5bGVzIiwiUG9zdENvbnRlbnQiLCJwcm9wcyIsInBvc3QiLCJpbWFnZVBhdGgiLCJzbHVnIiwiaW1hZ2UiLCJjdXN0b21SZW5kZXJlcnMiLCJpbWciLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsInAiLCJwYXJhZ3JhcGgiLCJub2RlIiwiY2hpbGRyZW4iLCJ0YWdlIiwiYXJ0aWNsZSIsImNsYXNzTmFtZSIsImNvbnRlbnQiLCJ0aXRsZSIsImNvbXBvbmVudHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/posts/post-detail/post-content.js\n"));

/***/ })

});