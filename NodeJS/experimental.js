
const http = require('http');

  const hostname = '127.0.0.1';
  const port = 3000;

  const server = http.createServer((request, response) => {
    console.log(request.url);
    if(request.url === "/FirstRequest") {
      var withoutSlash = request.url.replace("/", "");
      response.statusCode = 200;
      response.setHeader('Content-Type', 'text/plain');
      response.write(withoutSlash);
    }
    else {
      response.statusCode = 200;
      response.setHeader('Content-Type', 'text/plain');
      // setInterval(function(){
      //     response.write(new Date() + "\n");
      //   }, 1000);
      response.write("Second request\n");
      // response.end('Hello World\n');
    }

  });

  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
