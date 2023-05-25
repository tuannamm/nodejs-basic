const connection = require("../config/database");
const { get } = require("../routes/web");

const { getAllUsers, getUserById } = require("../services/CRUDService");

const getHomepage = async (req, res) => {
  let results = await getAllUsers();
  return res.render("home.ejs", { listUsers: results });
};

const getTest = (req, res) => {
  res.send("Hello Tuan Nam");
};

const getTuanNam = (req, res) => {
  res.send("Hello Tuan Nammmmm");
};

const postCreateUser = async (req, res) => {
  let { email, name, city } = req.body;

  await connection.query(
    `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`,
    [email, name, city]
  );

  res.send("Create user successfully");
};

const getCreatePage = (req, res) => {
  res.render("create.ejs");
};

const getUpdatePage = async (req, res) => {
  let { id } = req.params;
  let user = await getUserById(id);
  let result = user && user.length > 0 ? user[0] : {};
  res.render("edit.ejs", { user: result });
};

module.exports = {
  getHomepage,
  getTest,
  getTuanNam,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
};
