const express = require("express"); // commonjs
const { getAllUsers, postCreateUser, putUpdateUser, deleteUser, postUploadSingleFile, postUploadMultipleFile } = require("../controllers/apiController");
const {getAllCustomers, postCreateCustomer, postCreateListCustomers, putUpdateCustomer } = require("../controllers/customerController");
const routerAPI = express.Router();

// khai bao route
routerAPI.get("/", (req, res) => {
  res.send("hello world")
});

routerAPI.get("/abc", (req, res) => {
  res.send("hello world abc")
});

// user
routerAPI.get("/users", getAllUsers);

routerAPI.post("/user", postCreateUser);

routerAPI.put("/user", putUpdateUser);

routerAPI.delete("/user", deleteUser);
//---------------------------------------------------

// file
routerAPI.post("/file", postUploadSingleFile);

routerAPI.post("/files", postUploadMultipleFile);
//---------------------------------------------------

// customer
routerAPI.get("/customers", getAllCustomers);

routerAPI.post("/customer", postCreateCustomer);

routerAPI.post("/customers", postCreateListCustomers);

routerAPI.put("/customer", putUpdateCustomer)
//---------------------------------------------------

module.exports = routerAPI;
