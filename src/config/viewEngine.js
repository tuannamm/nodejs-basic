const express = require("express"); // commonjs
const path = require("path");

const configViewEngine = (app) => {
  // config template engine
  console.log(__dirname);
  app.set("views", path.join("./src", "views")); // khai bao noi luu tru template engine
  app.set("view engine", "ejs"); // khai bao kieu template

  // khai bao noi luu tru static file
  app.use(express.static(path.join("./src", "public")));
};

module.exports = configViewEngine;
