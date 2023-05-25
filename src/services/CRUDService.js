const connection = require("../config/database");

const getAllUsers = async () => {
  let [results, fields] = await connection.query("SELECT * FROM Users");
  return results;
};

const getUserById = async (id) => {
  let [results, fields] = await connection.query(
    "SELECT * FROM Users WHERE id = ?",
    [id]
  );

  let user = results && results.length > 0 ? results[0] : {};
  return results;
};

module.exports = {
  getAllUsers,
  getUserById,
};
