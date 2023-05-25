const connection = require("../config/database");

const getAllUsers = async () => {
  let [results, fields] = await connection.query("SELECT * FROM Users");
  return results;
};

const postCreateNewUser = async (email, name, city) => {
  let [results, fields] = await connection.query(
    `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`,
    [email, name, city]
  );
  return results;
};

const getUserById = async (id) => {
  let [results, fields] = await connection.query(
    "SELECT * FROM Users WHERE id = ?",
    [id]
  );
  return results;
};

const postUpdateUserById = async (id, email, name, city) => {
  let [results, fields] = await connection.query(
    `UPDATE Users 
     SET email = ?, name = ?, city = ? 
     WHERE id = ?`,
    [email, name, city, id]
  );
};

module.exports = {
  getAllUsers,
  postCreateNewUser,
  getUserById,
  postUpdateUserById,
};
