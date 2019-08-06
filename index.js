const http = require('http')

const server = http.createServer(function(request, response) {
  response.writeHead(200, {"content-type": "text/html"});
  response.end("<html><h1>Hello world</h1></html>")
})

var port = process.env.PORT || 1337;
server.listen(port)

console.log("server running")