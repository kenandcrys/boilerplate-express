const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
require("dotenv").config();
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/public', express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    const logString = `${req.method} ${req.path} - ${req.ip}`;
    console.log(logString);
    next();
});

app.use('/now', (req, res, next) => {
    req.time = new Date().toString();
    next();
});

app.get('/now', (req, res) => {
    res.json({ time: req.time });
});

app.get('/:word/echo', (req, res) => {
    const word = req.params.word;
    res.json({ echo: word });
});

app.route('/name')
    .get((req, res) => {
        const { first, last } = req.query;
        const fullName = `${first} ${last}`;
        res.json({ name: fullName });
    })
    .post((req, res) => {
        const { first, last } = req.body;
        const fullName = `${first} ${last}`;
        res.json({ name: fullName });
    });



app.get("/", (req, res) => {
    res.status(200).sendFile(__dirname + "/views/index.html");
});

app.get("/json", (req, res) => {
    if (process.env["MESSAGE_STYLE"] === "uppercase") {
        res.json({ "message": "HELLO JSON" });
    } else {
        res.json({ "message": "Hello json" });
    }
});

module.exports = app;
