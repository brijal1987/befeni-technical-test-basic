const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const getOutput = require('./utils/getOutout');
const hostname = "127.0.0.1";
const port = 5000;

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/apply", (req, res) => {
  const instructions = req.body.value.trim();
  const output = getOutput(instructions);
  if (output) {
    return res.json({
      success: 1,
      output: output,
    });
  } else {
    return res.json({
      error: 1,
    });
  }
});
app.get("/", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Welcome to Befeni Technical Test [Basic] API");
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
