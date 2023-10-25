let express = require('express');
let app = express();

console.log("Hello World");

app.get("/", function(req, res) {
    console.log("Hello World")
    res.status(200).send("Hello Express");    
  });


 module.exports = app;
