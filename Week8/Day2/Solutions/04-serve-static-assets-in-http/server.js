const http = require("http");
const fs = require("fs");

const getContentType = (ext) => {
  // if (ext === "css") {
  //   return "text/css";
  // }

  // if (ext === "jpg") {
  //   return "image/jpeg";
  // }

  switch (ext) {
    case "css":
      return "text/css";
    case "jpg":
      return "image/jpeg";
    default:
      return "text/plain";
  }
};

const server = http.createServer((req, res) => {
  // Your code here
  if (req.method === "GET" && req.url.startsWith("/static")) {
    const urlParts = req.url.split("/static");
    console.log("url parts ", urlParts);

    const path = urlParts[urlParts.length - 1];
    console.log("path ", path);
    const resBody = fs.readFileSync("./assets" + path);

    const pathExtension = path.split(".")[1];
    console.log("path ext ", pathExtension);

    const contentType = getContentType(pathExtension);

    res.setHeader("Content-Type", contentType);
    res.statusCode = 200;
    return res.end(resBody);
  }

  const resBody = fs.readFileSync("./index.html", "utf-8");
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  return res.end(resBody);
});

const port = 5000;

server.listen(port, () => console.log("Server is listening on port", port));
