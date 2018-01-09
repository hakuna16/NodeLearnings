var fs = require("fs");

console.log("Program Started");

var data = fs.readFile('tet.txt', function(err, data){
  if(err) {
  throw err;
  }
  console.log(data.toString());
});

console.log("Program Ended");

process.on("uncaughtException", function(err){
  console.log("Exception caught");
});
