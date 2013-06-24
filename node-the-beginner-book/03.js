var http = require('http');

function onRequest (req, res) {
  console.log('REQUEST!');
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World');
  res.end();
}

http.createServer(onRequest).listen(8888, function () {
  console.log('Server running in port 8888');
});
