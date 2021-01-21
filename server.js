const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

require("dotenv").config();

const authRoutes = require("./routes/api/auth");
const workspaceRoutes = require("./routes/api/workspaces");

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/workspace", workspaceRoutes);

// Connect to Mongo
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log(`MongoDB Connected...`);
  })
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => `Server running on port ${PORT}`);
