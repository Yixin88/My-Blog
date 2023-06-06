"use strict";
(() => {
var exports = {};
exports.id = 91;
exports.ids = [91];
exports.modules = {

/***/ 5592:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "mongodb"
const external_mongodb_namespaceObject = require("mongodb");
;// CONCATENATED MODULE: ./pages/api/contact.js

async function handler(req, res) {
    if (req.method === "POST") {
        const { email , name , message  } = req.body;
        if (!email || !email.includes("@") || !name || name.trim() === "" || !message || message.trim() === "") {
            res.status(422).json({
                message: "Invalid Input."
            });
            return;
        }
        //Store in database if the above validation passes
        const newMessage = {
            email,
            name,
            message
        };
        let client;
        //Try Connection first
        try {
            client = await external_mongodb_namespaceObject.MongoClient.connect("mongodb+srv://ying:ying@cluster0.andzl1u.mongodb.net/my-blog?retryWrites=true&w=majority");
        } catch (error) {
            res.status(500).json({
                message: "Could not connect to database."
            });
            return;
        }
        const db = client.db(); //accessing database
        try {
            const result = await db.collection("messages").insertOne(newMessage);
            newMessage.id = result.insertedId;
        } catch (error1) {
            client.close();
            res.status(422).json({
                message: "Storing message failed!"
            });
            return;
        }
        client.close();
        res.status(201).json({
            message: "Message Send!",
            newMessage
        });
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5592));
module.exports = __webpack_exports__;

})();