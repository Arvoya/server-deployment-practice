require("dotenv").config();

const express = require("express");
const subtraction = require("./lib/subtraction.js");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/subtraction", (request, response) => {
  try {
    let { number1, number2 } = request.query;
    let sub = subtraction(number1, number2);
    response.status(200).json({ value: sub });
  } catch (e) {
    response.status(400).send("I need some numbers! :(");
  }
});

module.exports = app;
