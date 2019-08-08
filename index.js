const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  fs.readFile('./public/index.html', (err, data) => {
    if (err) {console.error(err); return;}
    res.end(data)
  })
})

var port = process.env.PORT || 1337
server.listen(port);