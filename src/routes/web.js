const express = require("express"); // commonjs
const router = express.Router();

const {
  getHomepage,
  getTest,
  getTuanNam,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
  postUpdateUser,
} = require("../controllers/homeController");

// khai bao route
router.get("/", getHomepage);

router.get("/test", getTest);

router.get("/tuannam", getTuanNam);

router.post("/create-user", postCreateUser);

router.get("/create", getCreatePage);

router.get("/update/:id", getUpdatePage);

router.post("/update-user", postUpdateUser);
module.exports = router;
