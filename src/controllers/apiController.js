const User = require("../models/User")

const getAllUsers = async (req, res) => {
  const result = await User.find({});
  return res.status(200).json({
    errorCode: 0,
    message: "Get all users success",
    data: result,
  });
}

const postCreateUser = async (req, res) => {
  const {email, name, city} = req.body;
  const user = await User.create({name, email, city});
  return res.status(200).json({
    errorCode: 0,
    message: "Create user success",
    data: user
  });
}

const putUpdateUser = async (req, res) => {
  const {_id, email, name, city} = req.body;
  const user = await User.updateOne({filter: _id}, {name, email, city});
  return res.status(200).json({
    errorCode: 0,
    message: "Update user success",
    data: user
  });
}

const deleteUser = async (req, res) => {
  const {_id} = req.body;
  const result = await User.deleteOne({id: _id});
  return res.status(200).json({
    errorCode: 0,
    message: "Delete user success",
    data: result
  });
}

module.exports = {getAllUsers, postCreateUser, putUpdateUser, deleteUser}