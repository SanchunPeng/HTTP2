const http2 = require('http2');
const fs = require('fs');


const server = http2.createSecureServer({
  key: fs.readFileSync('./server.key'),
  cert: fs.readFileSync('./server.crt')
});

server.on('error', (err) => console.error(err));
server.on('stream', (stream, headers) => {
  // stream is a Diuplex
  // console.log(stream)
  stream.respond({
    'content-type': 'text/html',
    ':status': 200
  });
  stream.end('hello world\n');
});

server.listen(5000, () => {
        console.log('server start at http://localhost:5000')
});