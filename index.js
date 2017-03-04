var socket = require('socket.io'),
    http = require('http'),
    server = http.createServer(),
    socket = socket.listen(server);

socket.on('connection', function(connection) {
    console.log('User Connected');
    connection.on('message', function(msg){
        socket.emit('message', msg);
    });
});
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', config.allowedDomains);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}
server.listen(3000, function(){
    console.log('Server started');
});