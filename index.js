var socket = require('socket.io'),
    http = require('http'),
    server = http.createServer(function(req, res){
        res.setHeader('Access-Control-Allow-Origin', '*');
        // res.setHeader('Access-Control-Request-Method', '*');
        // res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
        // res.setHeader('Access-Control-Allow-Headers', '*');
        /*
        if ( req.method === 'OPTIONS' ) {
            res.writeHead(200);
            res.end();
            return;
        }
        */
    }),
    socket = socket.listen(server);

socket.on('connection', function(connection) {
    console.log('User Connected');
    connection.on('message', function(msg){
        socket.emit('message', msg);
    });
});

server.listen(3000, function(){
    console.log('Server started');
});

