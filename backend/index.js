const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const todoRoute = require("./routes/todoRoute");
const app = express();

const PORT = process.env.port || 8000;
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log(`Connected to MONGO DB`))
  .catch((err) => console.log("Failed to connect MONGO DB", err));
app.use(express.json());
app.use(cors());
app.use(todoRoute);
app.listen(PORT, () => console.log(`Server started on PORT:${PORT}`));
