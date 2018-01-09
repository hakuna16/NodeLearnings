var net = require("net");

var server = net.createServer(function(socket){
  socket.end("Hello and good bye");
});

server.listen(1234,function() {
  console.log("server Started...");
});
