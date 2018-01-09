var http = require("http");

var server = http.createServer(function (request, response) {
   response.writeHead(200, {'Content-Type': 'text/plain'});
   response.end('Welocme to my first node server...');
});
server.listen(1234, function() {
    console.log('Server running at http://127.0.0.1:1234/');
})
