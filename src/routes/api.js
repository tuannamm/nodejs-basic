const express = require("express"); // commonjs
const { getAllUsers, postCreateUser, putUpdateUser, deleteUser, postUploadSingleFile, postUploadMultipleFile } = require("../controllers/apiController");
const { postCreateCustomer, postCreateListCustomers } = require("../controllers/customerController");
const routerAPI = express.Router();

// khai bao route
routerAPI.get("/", (req, res) => {
  res.send("hello world")
});

routerAPI.get("/abc", (req, res) => {
  res.send("hello world abc")
});

routerAPI.get("/users", getAllUsers);

routerAPI.post("/user", postCreateUser);

routerAPI.put("/user", putUpdateUser);

routerAPI.delete("/user", deleteUser);

routerAPI.post("/file", postUploadSingleFile)

routerAPI.post("/files", postUploadMultipleFile);

routerAPI.post("/customer", postCreateCustomer )

routerAPI.post("/customers", postCreateListCustomers )


module.exports = routerAPI;
