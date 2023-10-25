let express = require('express');
let app = express();

app.get('/', (_req, res) => {
    console.log("Hello World");
    res.status(200)
})



 module.exports = app;
