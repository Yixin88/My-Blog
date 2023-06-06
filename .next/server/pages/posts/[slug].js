(() => {
var exports = {};
exports.id = 922;
exports.ids = [922];
exports.modules = {

/***/ 7273:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "Z", ({
    enumerable: true,
    get: function() {
        return _objectWithoutPropertiesLoose;
    }
}));
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}


/***/ }),

/***/ 8335:
/***/ ((module) => {

// Exports
module.exports = {
	"content": "post-content_content__XyRqJ",
	"image": "post-content_image__zuBQj"
};


/***/ }),

/***/ 4834:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "post-header_header__UQSWy"
};


/***/ }),

/***/ 3241:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ PostContent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _post_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(578);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3135);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(727);
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4794);
/* harmony import */ var react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _post_content_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8335);
/* harmony import */ var _post_content_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_post_content_module_css__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_markdown__WEBPACK_IMPORTED_MODULE_3__]);
react_markdown__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






 // code theme

function PostContent(props) {
    const { post  } = props;
    const imagePath = `/images/posts/${post.slug}/${post.image}`;
    const customRenderers = {
        // img(image) { // this is for all img element in md, instead of regular img tag, it uses nextjs img optimised tag
        //   return (
        //     <Image
        //       src={`/images/posts/${post.slug}/${image.src}`}
        //       alt={image.alt}
        //       width={600}
        //       height={300}
        //     />
        //   );
        // },
        p (paragraph) {
            const { node  } = paragraph;
            if (node.children[0].tagName === "img") {
                const image = node.children[0];
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_post_content_module_css__WEBPACK_IMPORTED_MODULE_7___default().image),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                        src: `/images/posts/${post.slug}/${image.properties.src}`,
                        alt: image.properties.alt,
                        width: 600,
                        height: 300
                    })
                });
            }
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: paragraph.children
            }) // if theres no image wrapped in p tag, then its a normal p tag element
            ;
        },
        code (code) {
            const { className , children  } = code;
            const language = className.split("-")[1]; // className is something like language-js => We need the "js" part here
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_5__.Prism, {
                style: react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_6__.atomDark,
                language: language,
                children: children
            });
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
        className: (_post_content_module_css__WEBPACK_IMPORTED_MODULE_7___default().content),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_post_header__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                title: post.title,
                image: imagePath
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_markdown__WEBPACK_IMPORTED_MODULE_3__["default"], {
                components: customRenderers,
                children: post.content
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 578:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ PostHeader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _post_header_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4834);
/* harmony import */ var _post_header_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_post_header_module_css__WEBPACK_IMPORTED_MODULE_3__);




function PostHeader(props) {
    const { title , image  } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
        className: (_post_header_module_css__WEBPACK_IMPORTED_MODULE_3___default().header),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                children: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                src: image,
                alt: title,
                width: 200,
                height: 150
            })
        ]
    });
}


/***/ }),

/***/ 6697:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SinglePostPage),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_posts_post_detail_post_content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3241);
/* harmony import */ var _lib_posts_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7531);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_posts_post_detail_post_content__WEBPACK_IMPORTED_MODULE_3__]);
_components_posts_post_detail_post_content__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function SinglePostPage(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: props.post.title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: props.post.excerpt
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_posts_post_detail_post_content__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                post: props.post
            })
        ]
    });
}
function getStaticProps(context) {
    const { params  } = context;
    const { slug  } = params;
    const postData = (0,_lib_posts_util__WEBPACK_IMPORTED_MODULE_4__/* .getPostData */ .AU)(slug);
    return {
        props: {
            post: postData
        },
        revalidate: 60
    };
}
function getStaticPaths() {
    const postFilenames = (0,_lib_posts_util__WEBPACK_IMPORTED_MODULE_4__/* .getPostsFiles */ .uH)();
    const slugs = postFilenames.map((fileName)=>fileName.replace(/\.md$/, ""));
    return {
        paths: slugs.map((slug)=>({
                params: {
                    slug: slug
                }
            })),
        fallback: false // telling nextjs not to pre render this page
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8076:
/***/ ((module) => {

"use strict";
module.exports = require("gray-matter");

/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 727:
/***/ ((module) => {

"use strict";
module.exports = require("react-syntax-highlighter");

/***/ }),

/***/ 4794:
/***/ ((module) => {

"use strict";
module.exports = require("react-syntax-highlighter/dist/cjs/styles/prism");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3135:
/***/ ((module) => {

"use strict";
module.exports = import("react-markdown");;

/***/ }),

/***/ 7147:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,121,675,531], () => (__webpack_exec__(6697)));
module.exports = __webpack_exports__;

})();