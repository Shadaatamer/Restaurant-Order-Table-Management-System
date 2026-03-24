const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const menuRoutes = require("./routes/menuRoutes");
const orderRoutes = require("./routes/orderRoutes");
const tableRoutes = require("./routes/tableRoutes");

const app = express();

dotenv.config({ path: "./config.env" });

app.use(express.json());

mongoose
  .connect(process.env.DATABASE)
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));

app.use("/menu", menuRoutes);
app.use("/order", orderRoutes);
app.use("/table", tableRoutes);

app.use((err, req, res, next) => {
  res.status(500).json({
    status: "error",
    message: err.message,
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
