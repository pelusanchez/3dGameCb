'use strict';

// Copyright David Iglesias
// REQUIRE SERIALPORT AND SOCKET.IO!

var io = require('socket.io').listen("8080");
//var lastDate, nowDate=new Date();


io.on('connection', function(socket) {

    socket.on("data", function(data){
        console.log(data);
    	//console.log(data);
    	//nowDate=new Date();
    	//process.stdout.write("Data speed: "+(nowDate-lastDate)+" ms                                                   \r");
        
    	io.sockets.emit('d',data);
        
    	//lastDate=nowDate;
    });
});