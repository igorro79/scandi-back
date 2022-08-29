const pool = require("../helpers/database");

const getAll = async () => {
  const sqlQuery = "SELECT id, sku, name, price, type, value FROM products";
  const rows = await pool.query(sqlQuery);
  return rows;
};

const addProduct = async (order) => {
  const { sku, name, price, type, value } = order;
  const sqlQuery =
    "INSERT INTO products (sku, name, price, type, value) VALUES (?,?,?,?,?)";
  const result = await pool.query(sqlQuery, [sku, name, price, type, value]);
  return result;
};
const removeProduct = async (ids) => {
  const { array } = ids;
  console.log(array);
  const sqlQuery = "DELETE from products WHERE id IN (?)";
  const result = await pool.query(sqlQuery, [array]);
  return result;
};

module.exports = {
  getAll,
  addProduct,
  removeProduct,
};
