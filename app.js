var express = require('express'),
    path = require('path'),
    app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
    res.redirect('/assets/templates/index.html');
});

module.exports = app;