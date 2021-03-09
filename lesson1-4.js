//використання подій
const evn = require('events');
const emitter = new evn.EventEmitter();

emitter.on('read', function(){
	       console.log('I am reading');
		   if(arguments.length!=0) console.log(arguments);
		   });
emitter.emit('read');
emitter.emit('read','a','b');