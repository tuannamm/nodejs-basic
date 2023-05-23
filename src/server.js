const express = require("express"); // commonjs
const path = require("path");
const mysql = require("mysql2");
require("dotenv").config(); // load bien moi truong

const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");

const app = express(); // app express
const port = process.env.PORT || 8080; // port
const hostname = process.env.HOST_NAME;

// config template engine and static file
configViewEngine(app);

// khai bao route
app.use("/", webRoutes);

// test connection
// create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  port: 3307, // default 3306
  user: "root",
  password: "123456",
  database: "hoidanit",
});

// simple query
connection.query("SELECT * FROM Users", function (err, results, fields) {
  console.log("results", results); // results contains rows returned by server
  console.log("fields", fields); // fields contains extra meta data about results, if available
});

app.listen(port, hostname, () => {
  console.log(`App is running at port ${8080}`);
});
