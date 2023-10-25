let express = require('express');
let app = express();
const path = require('path');

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get("/", function(req, res) {
    res.status(200).sendFile(__dirname + "/views/index.html");
});

app.get('/json', (req, res) => {
    let message = "Hello json";

    if (process.env.MESSAGE_STYLE === 'uppercase') {
        res.status(200).json({
            message: message.toUpperCase()
        });
    } else {
        res.status(200).json({
            message: message
        });
    }
});


module.exports = app;
