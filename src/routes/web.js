const express = require("express"); // commonjs
const router = express.Router();

const {
  getHomepage,
  getTest,
  getTuanNam,
} = require("../controllers/homeController");

// khai bao route
router.get("/", getHomepage);

router.get("/test", getTest);

router.get("/tuannam", getTuanNam);

module.exports = router;
