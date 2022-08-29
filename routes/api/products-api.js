const express = require("express");
const router = express.Router();
const { asyncWrapper } = require("../../helpers/apiHelpers");

const {
  addProductController,
  getAllController,
  removeProductController,
} = require("../../controllers/productsController");

router.get("/", asyncWrapper(getAllController));
router.post("/", asyncWrapper(addProductController));
router.delete("/", asyncWrapper(removeProductController));

module.exports = router;
