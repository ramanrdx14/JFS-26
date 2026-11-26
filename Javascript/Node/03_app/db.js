const mysql = require("mysql2/promise");
const getConnection = async () => {
  let connection = null;
  try {
    connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "root",
      database: "sbms26",
    });
  } catch (error) {
    console.log(error);
  }
  return connection;
};

module.exports = { getConnection };
