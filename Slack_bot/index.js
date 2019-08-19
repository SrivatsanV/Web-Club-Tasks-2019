const express = require("express");
const PORT = process.env.PORT || 8080;
const slack = require("./routes/slack");

//creating express app
const app = express();

//Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//endpoint for slack-bot starts with /slack
app.use("/slack", slack);

app.listen(PORT, () => {
  console.log(`Listening to ${PORT}`);
});
