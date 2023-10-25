let express = require('express');
let app = express();

console.log("Hello World");

app.get("/", function(req, res) {
    res.status(200).sendFile(__dirname + "views/index.html");
  });

 module.exports = app;
