const mariadb = require("mariadb");

const pool = mariadb.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  connectionLimit: 5,
});
pool.getConnection((err, connection) => {
  if (err) {
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      console.log("database connection lost");
    }
    if (err.code === "ER_CON_COUNT_ERROR") {
      console.log("database has too many connections");
    }
    if (err.code === "ECONNREFUSED") {
      console.log("database connection was refused");
    }
  }
  if (connection) {
    connection.release();
  }
  return;
});

module.exports = pool;
