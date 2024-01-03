const express = require("express"); // commonjs
const { getAllUsers, postCreateUser, putUpdateUser, deleteUser } = require("../controllers/apiController");
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

module.exports = routerAPI;
