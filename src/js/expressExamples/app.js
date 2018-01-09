var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.send('Hello World');
})

app.get('/About', function (req, res) {	// routing with this uing get();
   res.send('Hello About Us');
})

app.get('/*list', function (req, res) {	// routing with this uing get();
   res.send('Hello list');
})




var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})
