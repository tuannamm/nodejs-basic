const User = require("../models/User")

const getAllUsers = async(req, res) => {
  const result = await User.find({});
  return res.status(200).json({
    errorCode: 0,
    message: "Get all users success",
    data: result,
  });
}

const postCreateUser = async(req, res) => {
  const {email, name, city} = req.body;
  const user = await User.create({name, email, city});
  return res.status(200).json({
    errorCode: 0,
    message: "Create user success",
    data: user
  });
}

module.exports = {getAllUsers, postCreateUser}