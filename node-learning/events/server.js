var http = require('http');


function handleRequest(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("Welcome To Server");
}


var server = http.createServer(handleRequest);
server.listen(3000, 'localhost');