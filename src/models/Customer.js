const mongoose = require("mongoose");

// schema: định dạng hình thù của database
const customerSchema = new mongoose.Schema({
  name: {type: String, require: true},
  email: String,
  city: String,
  phone: String,
  address: String,
  image: String,
  description: String,
}, {timestamps: true})

// lưu xuống database
const User = mongoose.model("customer", customerSchema); // tên collection


module.exports = User;