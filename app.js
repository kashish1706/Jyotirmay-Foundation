// const express = require("express");
// const app = express();

var path = require("path");
// const __dirname = path.resolve();
var express = require("express");
var app = express();
// app.use(express.static("public"));

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  // res.send("Hello");
  res.sendFile(__dirname + "/frontend.html");
});

app.listen("7000", (req, res) => {
  console.log("Listening on 3000");
});
