// Your code here
const http = require("http");

const server = http.createServer((request, response) => {
  console.log("request ", request);

  /*
    1. create response body
    2. set status code
    3. set header
    4. send response body and end connection
  */

  const responseBody = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Hello World!</title>
    </head>
    <body>
        <h1>Hello there!</h1>
    </body>
    </html>
    `;
  response.statusCode = 200;
  console.log("response status ", response.status);

  response.status = 302;

  console.log("response status ", response.status);
  response.setHeader("Content-Type", "text/html");

  // first approach
  //   response.write(responseBody)
  //   response.end()
  //   return

  // second approach
  return response.end(responseBody);
});

const port = 5000;

server.listen(port, () => console.log("server listening on port ", port));
