require("dotenv").config();
const mongoose = require("mongoose");

// mặc định sẽ chỉ xuống database được đặt tên là test nếu không chỉ đỉnh kết nối database nào

const connection = async() => {
  try {
    const options = {
      user: process.env.DB_USER,
      pass: process.env.DB_PASSWORD,
      dbName: process.env.DB_NAME
    };
    console.log("connecting database");
    await mongoose.connect(process.env.DB_HOST, options);
    console.log("connect database success");
  } catch (error) {
    console.log("error connection database",error);
  }
}


module.exports = connection;
