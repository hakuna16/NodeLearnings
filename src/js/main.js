var events = require('events');
var emitter = new events.EventEmitter();

var uid = "nodejs";
var pwd = "passworrd";

emitter.on('addUser', function(user, pwd){
  console.log('add user event fired...' + user);
});

emitter.emit('addUser',uid, pwd);
