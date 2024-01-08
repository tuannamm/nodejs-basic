const mongoose = require('mongoose');

// schema: định dạng hình thù của database
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  city: String
});

// lưu xuống database
const User = mongoose.model('user', userSchema); // tên collection

module.exports = User;
