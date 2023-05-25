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

const postCreateUser = (req, res) => {
  let { email, name, city } = req.body;
  connection.query(
    `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`,
    [email, name, city],
    function (err, results) {
      console.log("results", results);
      res.send("Create user successfully");
    }
  );
};

module.exports = {
  getHomepage,
  getTest,
  getTuanNam,
  postCreateUser,
};
