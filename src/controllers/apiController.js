const User = require("../models/User")

const getAllUsers = async(req, res) => {
  const result = await User.find({});
  return res.status(200).json({
    errorCode: 0,
    message: "Get all users success",
    data: result,
  });
}

module.exports = {getAllUsers}