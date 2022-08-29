const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

const cartsRouter = require("./routes/api/products-api");
const { errorHandler } = require("./helpers/apiHelpers");

const PORT = process.env.PORT || 3002;

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/", cartsRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running. Use our API on port: ${PORT}`);
});
