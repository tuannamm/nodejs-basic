const express = require("express"); // commonjs
const path = require("path");
// import express from "express"; // es modules

const app = express(); // app express
const port = 8080; // port

// config template engine
app.set("views", path.join(__dirname, "./views")); // khai bao noi luu tru template engine
app.set("view engine", "ejs"); // khai bao kieu template

// khai bao route
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/test", (req, res) => {
  res.send("Hello Tuan Nam");
});

app.get("/tuannam", (req, res) => {
  // res.send("<h1>Tuan Nam is the best</h1>");
  res.render("sample.ejs");
});

app.listen(port, () => {
  console.log(`App is running at port ${8080}`);
});
