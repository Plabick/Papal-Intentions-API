var express = require('express');
var router = require('./router.js');

const PORT = process.env.PORT || 8080;

var app = express();

app.use('/', router);

app.listen(PORT);
