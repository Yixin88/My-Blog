"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/contact";
exports.ids = ["pages/api/contact"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/contact.js":
/*!******************************!*\
  !*** ./pages/api/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        const { email , name , message  } = req.body;\n        if (!email || !email.includes(\"@\") || !name || name.trim() === \"\" || !message || message.trim() === \"\") {\n            res.status(422).json({\n                message: \"Invalid Input.\"\n            });\n            return;\n        }\n        //Store in database if the above validation passes\n        const newMessage = {\n            email,\n            name,\n            message\n        };\n        let client;\n        const connectionString = `mongodb+srv://${\"ying\"}:${\"ying\"}@${\"cluster0\"}.andzl1u.mongodb.net/${\"my-blog-dev\"}?retryWrites=true&w=majority`;\n        //Try Connection first\n        try {\n            client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(connectionString);\n        } catch (error) {\n            res.status(500).json({\n                message: \"Could not connect to database.\"\n            });\n            return;\n        }\n        const db = client.db(); //accessing database\n        try {\n            const result = await db.collection(\"messages\").insertOne(newMessage);\n            newMessage.id = result.insertedId;\n        } catch (error1) {\n            client.close();\n            res.status(422).json({\n                message: \"Storing message failed!\"\n            });\n            return;\n        }\n        client.close();\n        res.status(201).json({\n            message: \"Message Send!\",\n            newMessage\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY29udGFjdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBc0M7QUFFdkIsZUFBZUMsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsSUFBSUQsSUFBSUUsTUFBTSxLQUFLLFFBQVE7UUFDekIsTUFBTSxFQUFFQyxNQUFLLEVBQUVDLEtBQUksRUFBRUMsUUFBTyxFQUFFLEdBQUdMLElBQUlNLElBQUk7UUFFekMsSUFDRSxDQUFDSCxTQUNELENBQUNBLE1BQU1JLFFBQVEsQ0FBQyxRQUNoQixDQUFDSCxRQUNEQSxLQUFLSSxJQUFJLE9BQU8sTUFDaEIsQ0FBQ0gsV0FDREEsUUFBUUcsSUFBSSxPQUFPLElBQ25CO1lBQ0FQLElBQUlRLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUVMLFNBQVM7WUFBaUI7WUFDakQ7UUFDRixDQUFDO1FBRUQsa0RBQWtEO1FBQ2xELE1BQU1NLGFBQWE7WUFDakJSO1lBQ0FDO1lBQ0FDO1FBQ0Y7UUFFQSxJQUFJTztRQUVKLE1BQU1DLG1CQUFtQixDQUFDLGNBQWMsRUFBRUMsTUFBNEIsQ0FBQyxDQUFDLEVBQUVBLE1BQTRCLENBQUMsQ0FBQyxFQUFFQSxVQUErQixDQUFDLHFCQUFxQixFQUFFQSxhQUE0QixDQUFDLDRCQUE0QixDQUFDO1FBRTNOLHNCQUFzQjtRQUN0QixJQUFJO1lBQ0ZGLFNBQVMsTUFBTWQsd0RBQW1CLENBQUNlO1FBRXJDLEVBQUUsT0FBT1EsT0FBTztZQUNkcEIsSUFBSVEsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUwsU0FBUztZQUFpQztZQUNqRTtRQUNGO1FBRUEsTUFBTWlCLEtBQUtWLE9BQU9VLEVBQUUsSUFBSSxvQkFBb0I7UUFFNUMsSUFBSTtZQUNGLE1BQU1DLFNBQVMsTUFBTUQsR0FBR0UsVUFBVSxDQUFDLFlBQVlDLFNBQVMsQ0FBQ2Q7WUFDekRBLFdBQVdlLEVBQUUsR0FBR0gsT0FBT0ksVUFBVTtRQUNuQyxFQUFFLE9BQU9OLFFBQU87WUFDZFQsT0FBT2dCLEtBQUs7WUFDWjNCLElBQUlRLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUVMLFNBQVM7WUFBMEI7WUFDMUQ7UUFDRjtRQUVBTyxPQUFPZ0IsS0FBSztRQUVaM0IsSUFBSVEsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFTCxTQUFTO1lBQWlCTTtRQUFXO0lBQzlELENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWNvdXJzZS8uL3BhZ2VzL2FwaS9jb250YWN0LmpzPzM0OTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xuICAgIGNvbnN0IHsgZW1haWwsIG5hbWUsIG1lc3NhZ2UgfSA9IHJlcS5ib2R5O1xuXG4gICAgaWYgKFxuICAgICAgIWVtYWlsIHx8XG4gICAgICAhZW1haWwuaW5jbHVkZXMoXCJAXCIpIHx8XG4gICAgICAhbmFtZSB8fFxuICAgICAgbmFtZS50cmltKCkgPT09IFwiXCIgfHxcbiAgICAgICFtZXNzYWdlIHx8XG4gICAgICBtZXNzYWdlLnRyaW0oKSA9PT0gXCJcIlxuICAgICkge1xuICAgICAgcmVzLnN0YXR1cyg0MjIpLmpzb24oeyBtZXNzYWdlOiAnSW52YWxpZCBJbnB1dC4nIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vU3RvcmUgaW4gZGF0YWJhc2UgaWYgdGhlIGFib3ZlIHZhbGlkYXRpb24gcGFzc2VzXG4gICAgY29uc3QgbmV3TWVzc2FnZSA9IHtcbiAgICAgIGVtYWlsLFxuICAgICAgbmFtZSxcbiAgICAgIG1lc3NhZ2VcbiAgICB9O1xuXG4gICAgbGV0IGNsaWVudDtcblxuICAgIGNvbnN0IGNvbm5lY3Rpb25TdHJpbmcgPSBgbW9uZ29kYitzcnY6Ly8ke3Byb2Nlc3MuZW52Lm1vbmdvZGJfdXNlcm5hbWV9OiR7cHJvY2Vzcy5lbnYubW9uZ29kYl9wYXNzd29yZH1AJHtwcm9jZXNzLmVudi5tb25nb2RiX2NsdXN0ZXJOYW1lfS5hbmR6bDF1Lm1vbmdvZGIubmV0LyR7cHJvY2Vzcy5lbnYubW9uZ29kYl9kYXRhYmFzZX0/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5YFxuXG4gICAgLy9UcnkgQ29ubmVjdGlvbiBmaXJzdFxuICAgIHRyeSB7XG4gICAgICBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KGNvbm5lY3Rpb25TdHJpbmcpO1xuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogJ0NvdWxkIG5vdCBjb25uZWN0IHRvIGRhdGFiYXNlLicgfSlcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBkYiA9IGNsaWVudC5kYigpOyAvL2FjY2Vzc2luZyBkYXRhYmFzZVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oJ21lc3NhZ2VzJykuaW5zZXJ0T25lKG5ld01lc3NhZ2UpO1xuICAgICAgbmV3TWVzc2FnZS5pZCA9IHJlc3VsdC5pbnNlcnRlZElkO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjbGllbnQuY2xvc2UoKTtcbiAgICAgIHJlcy5zdGF0dXMoNDIyKS5qc29uKHsgbWVzc2FnZTogJ1N0b3JpbmcgbWVzc2FnZSBmYWlsZWQhJyB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgY2xpZW50LmNsb3NlKCk7XG5cbiAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7IG1lc3NhZ2U6ICdNZXNzYWdlIFNlbmQhJywgbmV3TWVzc2FnZSB9KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50IiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImVtYWlsIiwibmFtZSIsIm1lc3NhZ2UiLCJib2R5IiwiaW5jbHVkZXMiLCJ0cmltIiwic3RhdHVzIiwianNvbiIsIm5ld01lc3NhZ2UiLCJjbGllbnQiLCJjb25uZWN0aW9uU3RyaW5nIiwicHJvY2VzcyIsImVudiIsIm1vbmdvZGJfdXNlcm5hbWUiLCJtb25nb2RiX3Bhc3N3b3JkIiwibW9uZ29kYl9jbHVzdGVyTmFtZSIsIm1vbmdvZGJfZGF0YWJhc2UiLCJjb25uZWN0IiwiZXJyb3IiLCJkYiIsInJlc3VsdCIsImNvbGxlY3Rpb24iLCJpbnNlcnRPbmUiLCJpZCIsImluc2VydGVkSWQiLCJjbG9zZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/contact.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/contact.js"));
module.exports = __webpack_exports__;

})();