require('dotenv').config();

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

let corsOptions = {
    origin: 'http://example.com'
}

var app = express();
require('./config/database').mongoConnect();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({
    origin: "*"
}));

app.use('/api', require('./routes/'));

module.exports = app;
