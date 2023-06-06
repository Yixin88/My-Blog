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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        const { email , name , message  } = req.body;\n        if (!email || !email.includes(\"@\") || !name || name.trim() === \"\" || !message || message.trim() === \"\") {\n            res.status(422).json({\n                message: \"Invalid Input.\"\n            });\n            return;\n        }\n        //Store in database if the above validation passes\n        const newMessage = {\n            email,\n            name,\n            message\n        };\n        let client;\n        //Try Connection first\n        try {\n            client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(\"mongodb+srv://ying:ying@cluster0.andzl1u.mongodb.net/my-blog?retryWrites=true&w=majority\");\n        } catch (error) {\n            res.status(500).json({\n                message: \"Could not connect to database.\"\n            });\n            return;\n        }\n        const db = client.db(); //accessing database\n        try {\n            const result = await db.collection(\"messages\").insertOne(newMessage);\n            newMessage.id = result.insertedId;\n        } catch (error1) {\n            client.close();\n            res.status(422).json({\n                message: \"Storing message failed!\"\n            });\n            return;\n        }\n        client.close();\n        res.status(201).json({\n            message: \"Message Send!\",\n            newMessage\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY29udGFjdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBc0M7QUFFdkIsZUFBZUMsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsSUFBSUQsSUFBSUUsTUFBTSxLQUFLLFFBQVE7UUFDekIsTUFBTSxFQUFFQyxNQUFLLEVBQUVDLEtBQUksRUFBRUMsUUFBTyxFQUFFLEdBQUdMLElBQUlNLElBQUk7UUFFekMsSUFDRSxDQUFDSCxTQUNELENBQUNBLE1BQU1JLFFBQVEsQ0FBQyxRQUNoQixDQUFDSCxRQUNEQSxLQUFLSSxJQUFJLE9BQU8sTUFDaEIsQ0FBQ0gsV0FDREEsUUFBUUcsSUFBSSxPQUFPLElBQ25CO1lBQ0FQLElBQUlRLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUVMLFNBQVM7WUFBaUI7WUFDakQ7UUFDRixDQUFDO1FBRUQsa0RBQWtEO1FBQ2xELE1BQU1NLGFBQWE7WUFDakJSO1lBQ0FDO1lBQ0FDO1FBQ0Y7UUFFQSxJQUFJTztRQUVKLHNCQUFzQjtRQUN0QixJQUFJO1lBQ0ZBLFNBQVMsTUFBTWQsd0RBQW1CLENBQUM7UUFFckMsRUFBRSxPQUFPZ0IsT0FBTztZQUNkYixJQUFJUSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFFTCxTQUFTO1lBQWlDO1lBQ2pFO1FBQ0Y7UUFFQSxNQUFNVSxLQUFLSCxPQUFPRyxFQUFFLElBQUksb0JBQW9CO1FBRTVDLElBQUk7WUFDRixNQUFNQyxTQUFTLE1BQU1ELEdBQUdFLFVBQVUsQ0FBQyxZQUFZQyxTQUFTLENBQUNQO1lBQ3pEQSxXQUFXUSxFQUFFLEdBQUdILE9BQU9JLFVBQVU7UUFDbkMsRUFBRSxPQUFPTixRQUFPO1lBQ2RGLE9BQU9TLEtBQUs7WUFDWnBCLElBQUlRLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUVMLFNBQVM7WUFBMEI7WUFDMUQ7UUFDRjtRQUVBTyxPQUFPUyxLQUFLO1FBRVpwQixJQUFJUSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVMLFNBQVM7WUFBaUJNO1FBQVc7SUFDOUQsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtY291cnNlLy4vcGFnZXMvYXBpL2NvbnRhY3QuanM/MzQ5MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XG4gICAgY29uc3QgeyBlbWFpbCwgbmFtZSwgbWVzc2FnZSB9ID0gcmVxLmJvZHk7XG5cbiAgICBpZiAoXG4gICAgICAhZW1haWwgfHxcbiAgICAgICFlbWFpbC5pbmNsdWRlcyhcIkBcIikgfHxcbiAgICAgICFuYW1lIHx8XG4gICAgICBuYW1lLnRyaW0oKSA9PT0gXCJcIiB8fFxuICAgICAgIW1lc3NhZ2UgfHxcbiAgICAgIG1lc3NhZ2UudHJpbSgpID09PSBcIlwiXG4gICAgKSB7XG4gICAgICByZXMuc3RhdHVzKDQyMikuanNvbih7IG1lc3NhZ2U6ICdJbnZhbGlkIElucHV0LicgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy9TdG9yZSBpbiBkYXRhYmFzZSBpZiB0aGUgYWJvdmUgdmFsaWRhdGlvbiBwYXNzZXNcbiAgICBjb25zdCBuZXdNZXNzYWdlID0ge1xuICAgICAgZW1haWwsXG4gICAgICBuYW1lLFxuICAgICAgbWVzc2FnZVxuICAgIH07XG5cbiAgICBsZXQgY2xpZW50O1xuXG4gICAgLy9UcnkgQ29ubmVjdGlvbiBmaXJzdFxuICAgIHRyeSB7XG4gICAgICBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KCdtb25nb2RiK3NydjovL3lpbmc6eWluZ0BjbHVzdGVyMC5hbmR6bDF1Lm1vbmdvZGIubmV0L215LWJsb2c/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5Jyk7XG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiAnQ291bGQgbm90IGNvbm5lY3QgdG8gZGF0YWJhc2UuJyB9KVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7IC8vYWNjZXNzaW5nIGRhdGFiYXNlXG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuY29sbGVjdGlvbignbWVzc2FnZXMnKS5pbnNlcnRPbmUobmV3TWVzc2FnZSk7XG4gICAgICBuZXdNZXNzYWdlLmlkID0gcmVzdWx0Lmluc2VydGVkSWQ7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNsaWVudC5jbG9zZSgpO1xuICAgICAgcmVzLnN0YXR1cyg0MjIpLmpzb24oeyBtZXNzYWdlOiAnU3RvcmluZyBtZXNzYWdlIGZhaWxlZCEnIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICBjbGllbnQuY2xvc2UoKTtcblxuICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHsgbWVzc2FnZTogJ01lc3NhZ2UgU2VuZCEnLCBuZXdNZXNzYWdlIH0pO1xuICB9XG59XG4iXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiZW1haWwiLCJuYW1lIiwibWVzc2FnZSIsImJvZHkiLCJpbmNsdWRlcyIsInRyaW0iLCJzdGF0dXMiLCJqc29uIiwibmV3TWVzc2FnZSIsImNsaWVudCIsImNvbm5lY3QiLCJlcnJvciIsImRiIiwicmVzdWx0IiwiY29sbGVjdGlvbiIsImluc2VydE9uZSIsImlkIiwiaW5zZXJ0ZWRJZCIsImNsb3NlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/contact.js\n");

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