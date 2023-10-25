let express = require('express');
let app = express();
const path = require('path');

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get("/", function(req, res) {
    res.status(200).sendFile(__dirname + "/views/index.html");
  });

app.get('/json', (req,res) => {
    res.status(200).json({
        message: "Hello json"
    })
})

 module.exports = app;
