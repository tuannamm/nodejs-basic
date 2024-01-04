const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  name: {type: String, require: true},
  email: String,
  city: String,
  phone: String,
  address: String,
  image: String,
  description: String,
}, {timestamps: true})

const User = mongoose.model("customer", customerSchema);

module.exports = User;