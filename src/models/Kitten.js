const mongoose = require("mongoose");

// schema: định dạng hình thù của database
const kittySchema = new mongoose.Schema({
  name: String
})

// lưu xuống database
const Kitten = mongoose.model("NAmmm", kittySchema); // tên collection


module.exports = Kitten;