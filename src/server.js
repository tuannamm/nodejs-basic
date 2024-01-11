const express = require('express'); // commonjs
require('dotenv').config(); // load bien moi truong

const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const apiRoutes = require('./routes/api');
const fileUpload = require('express-fileupload');

const connection = require('./config/database');
const { MongoClient } = require('mongodb');

const app = express(); // app express
const port = process.env.PORT || 8080; // port
const hostname = process.env.HOST_NAME;

// config file-upload
app.use(fileUpload());

// config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// config template engine and static file
configViewEngine(app);

// khai bao route
app.use('/', webRoutes);
app.use('/v1/api', apiRoutes);

/* mongoose
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
*/

// mongodb
(async () => {
  try {
    const url = process.env.DB_HOST_WITH_DRIVER;
    const client = new MongoClient(url);
    const dbName = process.env.DB_NAME;
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('customers');

    collection.insertOne({ name: 'NTTNnam' });

    const test = await collection.findOne({ name: 'NTTNnam' });

    console.log('test find', test);

    app.listen(port, hostname, () => {
      console.log(`App is running at port ${port}`);
    });
  } catch (error) {
    console.log('error connection database', error);
  }
})();
