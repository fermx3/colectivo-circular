const express = require("express");
const ejs = require('ejs');

const port = 8000;

const app = express();
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get("/blog", function (req, res) {
  res.sendFile(__dirname + '/pages/work.html');
})

app.get("/about", function (req, res) {
  res.send("My name is Fernando. <br>♥︎ I am a web developer. ♥︎")
})

app.listen(port, function() {
  console.log("Server started on port " + port);
});