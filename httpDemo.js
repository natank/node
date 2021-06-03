const http = require('http');
const url = require('url');
const server = http.createServer((req, res)=>{
  res.writeHead(200, ('Content-Type', 'text/html'));
  const q = url.parse(req.url, true).query;
  const txt = q.year + ' '+q.month;
  res.eventNames(txt)
})

server.listen(8082)