var express = require('express');
var cookieParser = require('cookie-parser');
var session =  require('express-session');
var morgan = require('morgan');

var app = express();

app.use(morgan('dev'));
app.use(cookieParser());
app.use(session((secret: 'secretKey', saveUnini));
