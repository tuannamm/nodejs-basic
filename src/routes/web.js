const express = require("express"); // commonjs
const router = express.Router();

const {
  getHomepage,
  getTest,
  getTuanNam,
  postCreateUser,
} = require("../controllers/homeController");

// khai bao route
router.get("/", getHomepage);

router.get("/test", getTest);

router.get("/tuannam", getTuanNam);

router.post("/create-user", postCreateUser);

module.exports = router;
