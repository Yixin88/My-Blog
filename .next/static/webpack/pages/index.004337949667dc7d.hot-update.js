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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_home_page_hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/home-page/hero */ \"./components/home-page/hero.js\");\n/* harmony import */ var _components_home_page_featured_posts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/home-page/featured-posts */ \"./components/home-page/featured-posts.js\");\n\n\n\n\nfunction HomePage() {\n    const dummyPost = [\n        {\n            slug: \"getting-started-with-nextjs\",\n            title: \"Getting started with NextJS\",\n            image: \"getting-started-nextjs.png\",\n            excerpt: \"NextJS is the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.\",\n            date: \"2023-02-23\"\n        },\n        {\n            slug: \"getting-started-with-nextjs\",\n            title: \"Getting started with NextJS\",\n            image: \"getting-started-nextjs\",\n            excerpt: \"NextJS is the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.\",\n            date: \"2023-02-23\"\n        },\n        {\n            slug: \"getting-started-with-nextjs\",\n            title: \"Getting started with NextJS\",\n            image: \"getting-started-nextjs\",\n            excerpt: \"NextJS is the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.\",\n            date: \"2023-02-23\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_page_hero__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/ying/Documents/repos/My-Blog/pages/index.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_page_featured_posts__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                posts: dummyPost\n            }, void 0, false, {\n                fileName: \"/Users/ying/Documents/repos/My-Blog/pages/index.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c = HomePage;\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBeUI7QUFDc0I7QUFDbUI7QUFFbkQsU0FBU0csV0FBVztJQUVqQyxNQUFNQyxZQUFZO1FBQ2hCO1lBQ0VDLE1BQU07WUFDTkMsT0FBTztZQUNQQyxPQUFPO1lBQ1BDLFNBQVM7WUFDVEMsTUFBTTtRQUVSO1FBQ0E7WUFDRUosTUFBTTtZQUNOQyxPQUFPO1lBQ1BDLE9BQU87WUFDUEMsU0FBUztZQUNUQyxNQUFNO1FBRVI7UUFDQTtZQUNFSixNQUFNO1lBQ05DLE9BQU87WUFDUEMsT0FBTztZQUNQQyxTQUFTO1lBQ1RDLE1BQU07UUFFUjtLQUNEO0lBRUQscUJBQ0U7OzBCQUNFLDhEQUFDUixrRUFBSUE7Ozs7OzBCQUNMLDhEQUFDQyw0RUFBYUE7Z0JBQUNRLE9BQU9OOzs7Ozs7OztBQUc1QixDQUFDO0tBbkN1QkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVybyBmcm9tICcuLi9jb21wb25lbnRzL2hvbWUtcGFnZS9oZXJvJ1xuaW1wb3J0IEZlYXR1cmVkUG9zdHMgZnJvbSAnLi4vY29tcG9uZW50cy9ob21lLXBhZ2UvZmVhdHVyZWQtcG9zdHMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVQYWdlKCkge1xuXG4gIGNvbnN0IGR1bW15UG9zdCA9IFtcbiAgICB7XG4gICAgICBzbHVnOiAnZ2V0dGluZy1zdGFydGVkLXdpdGgtbmV4dGpzJyxcbiAgICAgIHRpdGxlOiAnR2V0dGluZyBzdGFydGVkIHdpdGggTmV4dEpTJyxcbiAgICAgIGltYWdlOiAnZ2V0dGluZy1zdGFydGVkLW5leHRqcy5wbmcnLFxuICAgICAgZXhjZXJwdDogJ05leHRKUyBpcyB0aGUgUmVhY3QgZnJhbWV3b3JrIGZvciBwcm9kdWN0aW9uIC0gaXQgbWFrZXMgYnVpbGRpbmcgZnVsbHN0YWNrIFJlYWN0IGFwcHMgYW5kIHNpdGVzIGEgYnJlZXplIGFuZCBzaGlwcyB3aXRoIGJ1aWx0LWluIFNTUi4nLFxuICAgICAgZGF0ZTogJzIwMjMtMDItMjMnXG4gICAgXG4gICAgfSxcbiAgICB7XG4gICAgICBzbHVnOiAnZ2V0dGluZy1zdGFydGVkLXdpdGgtbmV4dGpzJyxcbiAgICAgIHRpdGxlOiAnR2V0dGluZyBzdGFydGVkIHdpdGggTmV4dEpTJyxcbiAgICAgIGltYWdlOiAnZ2V0dGluZy1zdGFydGVkLW5leHRqcycsXG4gICAgICBleGNlcnB0OiAnTmV4dEpTIGlzIHRoZSBSZWFjdCBmcmFtZXdvcmsgZm9yIHByb2R1Y3Rpb24gLSBpdCBtYWtlcyBidWlsZGluZyBmdWxsc3RhY2sgUmVhY3QgYXBwcyBhbmQgc2l0ZXMgYSBicmVlemUgYW5kIHNoaXBzIHdpdGggYnVpbHQtaW4gU1NSLicsXG4gICAgICBkYXRlOiAnMjAyMy0wMi0yMydcbiAgICBcbiAgICB9LFxuICAgIHtcbiAgICAgIHNsdWc6ICdnZXR0aW5nLXN0YXJ0ZWQtd2l0aC1uZXh0anMnLFxuICAgICAgdGl0bGU6ICdHZXR0aW5nIHN0YXJ0ZWQgd2l0aCBOZXh0SlMnLFxuICAgICAgaW1hZ2U6ICdnZXR0aW5nLXN0YXJ0ZWQtbmV4dGpzJyxcbiAgICAgIGV4Y2VycHQ6ICdOZXh0SlMgaXMgdGhlIFJlYWN0IGZyYW1ld29yayBmb3IgcHJvZHVjdGlvbiAtIGl0IG1ha2VzIGJ1aWxkaW5nIGZ1bGxzdGFjayBSZWFjdCBhcHBzIGFuZCBzaXRlcyBhIGJyZWV6ZSBhbmQgc2hpcHMgd2l0aCBidWlsdC1pbiBTU1IuJyxcbiAgICAgIGRhdGU6ICcyMDIzLTAyLTIzJ1xuICAgIFxuICAgIH0sXG4gIF1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVybyAvPlxuICAgICAgPEZlYXR1cmVkUG9zdHMgcG9zdHM9e2R1bW15UG9zdH0vPlxuICAgIDwvPlxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJIZXJvIiwiRmVhdHVyZWRQb3N0cyIsIkhvbWVQYWdlIiwiZHVtbXlQb3N0Iiwic2x1ZyIsInRpdGxlIiwiaW1hZ2UiLCJleGNlcnB0IiwiZGF0ZSIsInBvc3RzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});