const express = require("express"); // commonjs
require("dotenv").config(); // load bien moi truong

const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const connection = require("./config/database");

const app = express(); // app express
const port = process.env.PORT || 8080; // port
const hostname = process.env.HOST_NAME;

// config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// config template engine and static file
configViewEngine(app);

// khai bao route
app.use("/", webRoutes);

(async () => {
  try {
    await connection();
    app.listen(port, hostname, () => {
      console.log(`App is running at port ${port}`);
    });
  } catch (error) {
    console.log("error connection database", error);
  }
})();

