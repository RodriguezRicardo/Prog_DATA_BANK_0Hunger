var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require ('cors');

var indexRouter = require('./routes/index');

//tre route per vedere le api
var cerealRouter = require('./routes/cereal');
var foodRouter = require('./routes/food');
var underRouter = require('./routes/undernourishment');

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

app.use('/cereal', cerealRouter);
app.use('/food', foodRouter);
app.use('/undernourishment', underRouter);

module.exports = app;