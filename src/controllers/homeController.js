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
  console.log("req.body", req.body);
  res.send("Hello Tuan Nammmmm");
};

module.exports = {
  getHomepage,
  getTest,
  getTuanNam,
  postCreateUser,
};
