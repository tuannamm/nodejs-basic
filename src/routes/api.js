const express = require("express"); // commonjs
const { getAllUsers } = require("../controllers/apiController");
const routerAPI = express.Router();

// khai bao route
routerAPI.get("/", (req, res) => {
  res.send("hello world")
});

routerAPI.get("/abc", (req, res) => {
  res.send("hello world abc")
});

routerAPI.get("/users", getAllUsers);

module.exports = routerAPI;
