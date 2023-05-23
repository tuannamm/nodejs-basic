const express = require("express"); // commonjs
const router = express.Router();

// khai bao route
router.get("/", (req, res) => {
  res.send("Hello World");
});

router.get("/test", (req, res) => {
  res.send("Hello Tuan Nam");
});

router.get("/tuannam", (req, res) => {
  // res.send("<h1>Tuan Nam is the best</h1>");
  res.render("sample.ejs");
});

module.exports = router;
