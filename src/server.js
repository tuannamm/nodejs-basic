const express = require("express"); // commonjs
const path = require("path");
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

app.listen(port, hostname, () => {
  console.log(`App is running at port ${8080}`);
});
