const express = require("express");
require("dotenv/config");
const app = express();
const PORT = process.env.PORT || 8080;
const million = require("./models/db");
const mongoose = require("mongoose");
const cors = require("cors");

//Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
  console.log("db connected");
});

app.get("/", (req, res) => {
  res.status(200).send("index");
});

app.get("/:id1/:id2", async (req, res) => {
  try {
    let lower = parseInt(req.params.id1);
    let upper = parseInt(req.params.id2);
    const data = await million
      .find()
      .skip(lower)
      .limit(lower - upper);
    res.status(200).json(data);
  } catch (err) {
    res.status(404).json({ message: err });
  }
});

app.listen(PORT, () => {
  console.log(`Listening to ${PORT}`);
});
