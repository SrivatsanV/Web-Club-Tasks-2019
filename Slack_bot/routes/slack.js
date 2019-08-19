const express = require("express");
const router = express.Router();

//routes for our slack-bot api
router.post("/message", (req, res) => {
  try {
    if (req.body.challenge != undefined) {
      res.send(req.body.challenge);
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
