const express = require("express"); // commonjs
// import express from "express"; // es modules

const app = express(); // app express
const port = 8080; // port

// khai bao route
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/test", (req, res) => {
  res.send("Hello Tuan Nam");
});

app.get("/tuannam", (req, res) => {
  res.send("<h1>Tuan Nam is the best</h1>");
});

app.listen(port, () => {
  console.log(`App is running at port ${8080}`);
});
