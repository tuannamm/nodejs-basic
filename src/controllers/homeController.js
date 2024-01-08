const connection = require('../config/database');
const { get } = require('../routes/web');

const {
  getAllUsers,
  getUserById,
  postCreateNewUser,
  postUpdateUserById,
  deleteUserById
} = require('../services/CRUDService');

const User = require('../models/User');

const getHomepage = async (req, res) => {
  let results = await User.find({});
  return res.render('home.ejs', { listUsers: results });
};

const postCreateUser = async (req, res) => {
  let { email, name, city } = req.body;

  await User.create({
    email,
    name,
    city
  });

  res.redirect('/');
};

const getCreatePage = (req, res) => {
  res.render('create.ejs');
};

const getUpdatePage = async (req, res) => {
  let { id } = req.params;
  let user = await User.findById(id).exec();
  let result = user && user.length > 0 ? user[0] : {};
  res.render('edit.ejs', { user: result });
};

const postUpdateUser = async (req, res) => {
  let { _id, email, name, city } = req.body;
  // await postUpdateUserById(id, email, name, city);
  await User.updateOne({ filter: _id }, { email, name, city });
  res.redirect('/');
};

const postDeleteUser = async (req, res) => {
  let { id } = req.params;
  let user = await User.findById(id).exec();
  let result = user && user.length > 0 ? user[0] : {};
  res.render('delete.ejs', { user: result });
};

const postRemoveUser = async (req, res) => {
  let { _id } = req.body;
  await User.deleteOne({ id: _id });
  res.redirect('/');
};

module.exports = {
  getHomepage,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
  postUpdateUser,
  postDeleteUser,
  postRemoveUser
};
