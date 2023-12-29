const express = require("express"); // commonjs
const router = express.Router();

const {
  getHomepage,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
  postUpdateUser,
  postDeleteUser,
  postRemoveUser,
} = require("../controllers/homeController");

// khai bao route
router.get("/", getHomepage);

router.post("/create-user", postCreateUser);

router.get("/create", getCreatePage);

router.get("/update/:id", getUpdatePage);

router.post("/update-user", postUpdateUser);

router.post("/delete-user/:id", postDeleteUser);

router.post("/remove-user", postRemoveUser);

module.exports = router;
