var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());

app.get('/', function(req, res) {
  res.cookie('myCookie', 'value of the cookies');
  res.end('hi there...');
});

app.get('/remove', function(req,res){
  res.clearCookie('MyCookie');
});

app.listen(1234, function() {
  console.log('Server Started...');
});
