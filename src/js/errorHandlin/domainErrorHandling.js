var fs = require("fs");
var domain = require("domain").create();

console.log("Program Started");

domain.run(function() {
  fs.readFile('tt.txt', function(err, data){
    if(err) {
    throw err;
    }
    console.log(data.toString());
  });
});

console.log("Program Ended");

domain.on("err", function(err){
  console.log("Exception caught");
});
