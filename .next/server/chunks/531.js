"use strict";
exports.id = 531;
exports.ids = [531];
exports.modules = {

/***/ 7531:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AU": () => (/* binding */ getPostData),
/* harmony export */   "Bd": () => (/* binding */ getAllPosts),
/* harmony export */   "jE": () => (/* binding */ getFeaturedPost),
/* harmony export */   "uH": () => (/* binding */ getPostsFiles)
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8076);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);



const postDirectory = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), "posts");
//--------------------------------------------------------//
function getPostsFiles() {
    return fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(postDirectory); //this returns an array of the files name  in the directory with extension name
}
//--------------------------------------------------------//
function getPostData(fileName) {
    const postSlug = fileName.replace(/\.md$/, ""); //removes file extension e.g. .md
    const filePath = path__WEBPACK_IMPORTED_MODULE_1___default().join(postDirectory, `${postSlug}.md`);
    const fileContent = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(filePath, "utf-8");
    const { data , content  } = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileContent); //matter function in the package returns 2 properties, data object and content object
    const postData = {
        slug: postSlug,
        ...data,
        content
    };
    return postData;
}
//--------------------------------------------------------//
function getAllPosts() {
    const postFiles = getPostsFiles();
    const allPost = postFiles.map((postFile)=>{
        return getPostData(postFile);
    });
    const sortedPost = allPost.sort((a, b)=>a.date > b.date ? -1 : 1);
    return sortedPost;
}
//--------------------------------------------------------//
function getFeaturedPost() {
    const allPost = getAllPosts();
    const featuredPosts = allPost.filter((post)=>post.isFeatured);
    return featuredPosts;
}


/***/ })

};
;