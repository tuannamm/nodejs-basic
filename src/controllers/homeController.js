const getHomepage = (req, res) => {
  res.send("Hello world");
};

const getTest = (req, res) => {
  res.send("Hello Tuan Nam");
};

const getTuanNam = (req, res) => {
  res.render("sample.ejs");
};

module.exports = {
  getHomepage,
  getTest,
  getTuanNam,
};
