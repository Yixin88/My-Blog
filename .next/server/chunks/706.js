exports.id = 706;
exports.ids = [706];
exports.modules = {

/***/ 1430:
/***/ ((module) => {

// Exports
module.exports = {
	"post": "post-item_post__p_esg",
	"image": "post-item_image__iecYZ",
	"content": "post-item_content__LRbwY"
};


/***/ }),

/***/ 555:
/***/ ((module) => {

// Exports
module.exports = {
	"grid": "posts-grid_grid__mLDZf"
};


/***/ }),

/***/ 9706:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ PostsGrid)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./components/posts/post-item.module.css
var post_item_module = __webpack_require__(1430);
var post_item_module_default = /*#__PURE__*/__webpack_require__.n(post_item_module);
;// CONCATENATED MODULE: ./components/posts/post-item.js





function PostItem(props) {
    const { title , image , excerpt , date , slug  } = props.post;
    const formattedDate = new Date(date).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });
    const imagePath = `/images/posts/${slug}/${image}`;
    const linkPath = `/posts/${slug}`;
    return /*#__PURE__*/ jsx_runtime_.jsx("li", {
        className: (post_item_module_default()).post,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
            href: linkPath,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (post_item_module_default()).image,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: imagePath,
                        alt: title,
                        width: 300,
                        height: 200,
                        layout: "responsive"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (post_item_module_default()).content,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            children: title
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("time", {
                            children: formattedDate
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: excerpt
                        })
                    ]
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./components/posts/posts-grid.module.css
var posts_grid_module = __webpack_require__(555);
var posts_grid_module_default = /*#__PURE__*/__webpack_require__.n(posts_grid_module);
;// CONCATENATED MODULE: ./components/posts/posts-grid.js




function PostsGrid(props) {
    const { posts  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx("ul", {
        className: (posts_grid_module_default()).grid,
        children: posts.map((post)=>/*#__PURE__*/ jsx_runtime_.jsx(PostItem, {
                post: post
            }, post.slug))
    });
}


/***/ })

};
;