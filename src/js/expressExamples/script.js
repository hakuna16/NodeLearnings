var express = require('express');
var app = express();

app.get('/', log, hello);

function log(req, res, next) {
  console.log('log');
  next();
}

function hello(req, res, next) {
  console.log('Hello User');
  next();
}

app.listen(1234, function() {
  console.log('Server Started...');
});
