const express = require("express");
const router = express.Router();
require("dotenv/config");
const request = require("request");

//Using child_processto spawn the python environment and executing the lyrics_finder script
// The path to your python script
var myPythonScript = "lyrics_finder.py";
// Provide the path of the python executable
var pythonExecutable = "python.exe";

// Function to convert an Uint8Array to a string
var uint8arrayToString = function(data) {
  return String.fromCharCode.apply(null, data);
};

const spawn = require("child_process").spawn;

//routes for our slack-bot api
router.post("/message", (req, res) => {
  let payload = req.body;
  console.log(payload);
  try {
    if (payload.challenge != undefined) {
      res.send(payload.challenge);
    }
    res.sendStatus(200);
    const currTime = Date.now();
    if (payload.event.username === "Slazam-bot") {
      return;
    }

    var title = payload.event.text;
    var url = "https://slack.com/api/chat.postMessage";
    var auth_token = process.env.Bot_User; //Your Bot's auth token
    var headers = {
      Authorization: "Bearer " + auth_token,
      "Content-Type": "application/json"
    };

    //executing the script in the spawned environment
    const scriptExecution = spawn(pythonExecutable, [myPythonScript, title]);

    //variable to store the final result
    var lyrics;

    // Handle normal output
    scriptExecution.stdout.on("data", data => {
      lyrics = uint8arrayToString(data);
      var test = "No lyrics found";
      if (lyrics.substring(0, test.length) === test) {
        lyrics = "Sorry :( No lyrics Found ... try another song";
      }
      var body = {
        channel: "#random", // Slack user or channel, where you want to send the message
        text: lyrics
      };

      request.post(
        {
          url: url,
          headers: headers,
          body: JSON.stringify(body)
        },
        (err, response, body) => {
          if (err) {
            reject(err);
          }
        }
      );
    });

    // Handle error output
    scriptExecution.stderr.on("data", data => {
      // As said before, convert the Uint8Array to a readable string.
      console.log(uint8arrayToString(data));
    });

    scriptExecution.on("exit", code => {
      console.log("Process quit with code : " + code);
    });
  } catch (err) {
    console.log(err);
  }
  return;
});

module.exports = router;
