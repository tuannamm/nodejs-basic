const express = require("express"); // commonjs
const path = require("path");
require("dotenv").config(); // load bien moi truong

const configViewEngine = require("./config/viewEngine");

const app = express(); // app express
const port = process.env.PORT || 8080; // port
const hostname = process.env.HOST_NAME;

// config template engine and static file
configViewEngine(app);

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

app.listen(port, hostname, () => {
  console.log(`App is running at port ${8080}`);
});
