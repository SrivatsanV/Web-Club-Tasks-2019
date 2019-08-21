const express = require("express");
require("dotenv/config");
const app = express();
const PORT = process.env.PORT || 8080;

const csvFilePath = "./majestic_million.csv";
const csv = require("csvtojson");

//Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

csv()
  .fromFile(csvFilePath)
  .then(jsonObj => {
    console.log("Ready to send Data!!!");
    app.get("/:id1/:id2", (req, res) => {
      var data = jsonObj.slice(req.params.id1, req.params.id2);
      res.send(data);
    });
  });

app.listen(PORT, () => {
  console.log(`Listening to ${PORT}`);
});
