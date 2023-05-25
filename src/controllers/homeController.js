const connection = require("../config/database");

const getHomepage = (req, res) => {
  return res.render("home.ejs");
};

const getTest = (req, res) => {
  res.send("Hello Tuan Nam");
};

const getTuanNam = (req, res) => {
  res.send("Hello Tuan Nammmmm");
};

const postCreateUser = async (req, res) => {
  let { email, name, city } = req.body;

  let [results, fields] = await connection.query(
    `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`,
    [email, name, city]
  );

  res.send("Create user successfully");
};

const getCreatePage = (req, res) => {
  res.render("create.ejs");
};

module.exports = {
  getHomepage,
  getTest,
  getTuanNam,
  postCreateUser,
  getCreatePage,
};
