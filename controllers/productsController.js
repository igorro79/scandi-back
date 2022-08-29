const {
  getAll,
  addProduct,
  removeProduct,
} = require("../services/products-service");

const getAllController = async (req, res) => {
  const products = await getAll();
  res.json(products);
};

const removeProductController = async (req, res) => {
  await removeProduct(req.body);
  res.status(201).json("removed");
};
const addProductController = async (req, res) => {
  await addProduct(req.body);
  res.status(201).json("added successfuly");
};

module.exports = {
  getAllController,
  removeProductController,
  addProductController,
};
