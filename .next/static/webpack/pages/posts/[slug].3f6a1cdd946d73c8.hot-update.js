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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PostContent; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _post_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post-header */ \"./components/posts/post-detail/post-header.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _post_content_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./post-content.module.css */ \"./components/posts/post-detail/post-content.module.css\");\n/* harmony import */ var _post_content_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_post_content_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nfunction PostContent(props) {\n    const { post  } = props;\n    const imagePath = \"/images/posts/\".concat(post.slug, \"/\").concat(post.image);\n    const customRenderers = {\n        // img(image) { // this is for all img element in md, instead of regular img tag, it uses nextjs img optimised tag\n        //   return (\n        //     <Image\n        //       src={`/images/posts/${post.slug}/${image.src}`}\n        //       alt={image.alt}\n        //       width={600}\n        //       height={300}\n        //     />\n        //   );\n        // },\n        p (paragraph) {\n            const { node  } = paragraph;\n            if (node.children[0].tagName === \"img\") {\n                const image = node.children[0];\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_post_content_module_css__WEBPACK_IMPORTED_MODULE_4___default().image),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        src: \"/images/posts/\".concat(post.slug, \"/\").concat(image.src),\n                        alt: image.alt,\n                        width: 600,\n                        height: 300\n                    }, void 0, false, {\n                        fileName: \"/Users/ying/Documents/repos/My-Blog/components/posts/post-detail/post-content.js\",\n                        lineNumber: 33,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/ying/Documents/repos/My-Blog/components/posts/post-detail/post-content.js\",\n                    lineNumber: 32,\n                    columnNumber: 11\n                }, this);\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n        className: (_post_content_module_css__WEBPACK_IMPORTED_MODULE_4___default().content),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_post_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                title: post.title,\n                image: imagePath\n            }, void 0, false, {\n                fileName: \"/Users/ying/Documents/repos/My-Blog/components/posts/post-detail/post-content.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_markdown__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                components: customRenderers,\n                children: post.content\n            }, void 0, false, {\n                fileName: \"/Users/ying/Documents/repos/My-Blog/components/posts/post-detail/post-content.js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ying/Documents/repos/My-Blog/components/posts/post-detail/post-content.js\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, this);\n}\n_c = PostContent;\nvar _c;\n$RefreshReg$(_c, \"PostContent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Bvc3RzL3Bvc3QtZGV0YWlsL3Bvc3QtY29udGVudC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQTBCO0FBQ2E7QUFDSTtBQUNaO0FBRWdCO0FBRWhDLFNBQVNLLFlBQVlDLEtBQUssRUFBRTtJQUN6QyxNQUFNLEVBQUVDLEtBQUksRUFBRSxHQUFHRDtJQUVqQixNQUFNRSxZQUFZLGlCQUE4QkQsT0FBYkEsS0FBS0UsSUFBSSxFQUFDLEtBQWMsT0FBWEYsS0FBS0csS0FBSztJQUUxRCxNQUFNQyxrQkFBa0I7UUFDdEIsa0hBQWtIO1FBQ2xILGFBQWE7UUFDYixhQUFhO1FBQ2Isd0RBQXdEO1FBQ3hELHdCQUF3QjtRQUN4QixvQkFBb0I7UUFDcEIscUJBQXFCO1FBQ3JCLFNBQVM7UUFDVCxPQUFPO1FBQ1AsS0FBSztRQUVMQyxHQUFFQyxTQUFTLEVBQUU7WUFDWCxNQUFNLEVBQUVDLEtBQUksRUFBRSxHQUFHRDtZQUVqQixJQUFJQyxLQUFLQyxRQUFRLENBQUMsRUFBRSxDQUFDQyxPQUFPLEtBQUssT0FBTztnQkFDdEMsTUFBTU4sUUFBUUksS0FBS0MsUUFBUSxDQUFDLEVBQUU7Z0JBRTlCLHFCQUNFLDhEQUFDRTtvQkFBSUMsV0FBV2QsdUVBQVk7OEJBQzFCLDRFQUFDRCxtREFBS0E7d0JBQ0pnQixLQUFLLGlCQUE4QlQsT0FBYkgsS0FBS0UsSUFBSSxFQUFDLEtBQWEsT0FBVkMsTUFBTVMsR0FBRzt3QkFDNUNDLEtBQUtWLE1BQU1VLEdBQUc7d0JBQ2RDLE9BQU87d0JBQ1BDLFFBQVE7Ozs7Ozs7Ozs7O1lBSWhCLENBQUM7UUFDSDtJQUNGO0lBRUEscUJBQ0UsOERBQUNDO1FBQVFMLFdBQVdkLHlFQUFjOzswQkFDaEMsOERBQUNILG9EQUFVQTtnQkFBQ3dCLE9BQU9sQixLQUFLa0IsS0FBSztnQkFBRWYsT0FBT0Y7Ozs7OzswQkFDdEMsOERBQUNOLHNEQUFhQTtnQkFBQ3dCLFlBQVlmOzBCQUFrQkosS0FBS2lCLE9BQU87Ozs7Ozs7Ozs7OztBQUcvRCxDQUFDO0tBM0N1Qm5CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcG9zdHMvcG9zdC1kZXRhaWwvcG9zdC1jb250ZW50LmpzP2Q4YmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFBvc3RIZWFkZXIgZnJvbSBcIi4vcG9zdC1oZWFkZXJcIjtcbmltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gXCJyZWFjdC1tYXJrZG93blwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vcG9zdC1jb250ZW50Lm1vZHVsZS5jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdENvbnRlbnQocHJvcHMpIHtcbiAgY29uc3QgeyBwb3N0IH0gPSBwcm9wcztcblxuICBjb25zdCBpbWFnZVBhdGggPSBgL2ltYWdlcy9wb3N0cy8ke3Bvc3Quc2x1Z30vJHtwb3N0LmltYWdlfWA7XG5cbiAgY29uc3QgY3VzdG9tUmVuZGVyZXJzID0geyAvL3RoaXMgaXMgdG8gb3ZlcnJpZGUgcmVhY3QgbWFya2Rvd24gYW5kIGdpdmUgeW91ciBvd24gaHRtbCB0byBlbGVtZW50XG4gICAgLy8gaW1nKGltYWdlKSB7IC8vIHRoaXMgaXMgZm9yIGFsbCBpbWcgZWxlbWVudCBpbiBtZCwgaW5zdGVhZCBvZiByZWd1bGFyIGltZyB0YWcsIGl0IHVzZXMgbmV4dGpzIGltZyBvcHRpbWlzZWQgdGFnXG4gICAgLy8gICByZXR1cm4gKFxuICAgIC8vICAgICA8SW1hZ2VcbiAgICAvLyAgICAgICBzcmM9e2AvaW1hZ2VzL3Bvc3RzLyR7cG9zdC5zbHVnfS8ke2ltYWdlLnNyY31gfVxuICAgIC8vICAgICAgIGFsdD17aW1hZ2UuYWx0fVxuICAgIC8vICAgICAgIHdpZHRoPXs2MDB9XG4gICAgLy8gICAgICAgaGVpZ2h0PXszMDB9XG4gICAgLy8gICAgIC8+XG4gICAgLy8gICApO1xuICAgIC8vIH0sXG5cbiAgICBwKHBhcmFncmFwaCkgeyAvLyB0aGlzIGlzIHRvIG92ZXJyaWRlIHBhcmFncmFwaCBlbGVtZW50IGluY2x1ZGluZyBpbWFnZSB3cmFwcGVkIGluIHAgdGFnLCBzaW5jZSBpdHMgdGhlIGRlZmF1bHQgZm9yIG1kXG4gICAgICBjb25zdCB7IG5vZGUgfSA9IHBhcmFncmFwaDtcblxuICAgICAgaWYgKG5vZGUuY2hpbGRyZW5bMF0udGFnTmFtZSA9PT0gJ2ltZycpIHtcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBub2RlLmNoaWxkcmVuWzBdO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZX0+XG4gICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgc3JjPXtgL2ltYWdlcy9wb3N0cy8ke3Bvc3Quc2x1Z30vJHtpbWFnZS5zcmN9YH1cbiAgICAgICAgICAgICAgYWx0PXtpbWFnZS5hbHR9XG4gICAgICAgICAgICAgIHdpZHRoPXs2MDB9XG4gICAgICAgICAgICAgIGhlaWdodD17MzAwfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxhcnRpY2xlIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxuICAgICAgPFBvc3RIZWFkZXIgdGl0bGU9e3Bvc3QudGl0bGV9IGltYWdlPXtpbWFnZVBhdGh9IC8+XG4gICAgICA8UmVhY3RNYXJrZG93biBjb21wb25lbnRzPXtjdXN0b21SZW5kZXJlcnN9Pntwb3N0LmNvbnRlbnR9PC9SZWFjdE1hcmtkb3duPlxuICAgIDwvYXJ0aWNsZT5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlBvc3RIZWFkZXIiLCJSZWFjdE1hcmtkb3duIiwiSW1hZ2UiLCJzdHlsZXMiLCJQb3N0Q29udGVudCIsInByb3BzIiwicG9zdCIsImltYWdlUGF0aCIsInNsdWciLCJpbWFnZSIsImN1c3RvbVJlbmRlcmVycyIsInAiLCJwYXJhZ3JhcGgiLCJub2RlIiwiY2hpbGRyZW4iLCJ0YWdOYW1lIiwiZGl2IiwiY2xhc3NOYW1lIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJhcnRpY2xlIiwiY29udGVudCIsInRpdGxlIiwiY29tcG9uZW50cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/posts/post-detail/post-content.js\n"));

/***/ })

});