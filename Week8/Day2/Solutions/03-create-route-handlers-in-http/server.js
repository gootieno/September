const http = require("http");

let nextDogId = 1;

function getNewDogId() {
  const newDogId = nextDogId;
  nextDogId++;
  return newDogId;
}

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  let reqBody = ""; // eg: affiliate=nasa&query=mars+rover%21
  req.on("data", (data) => {
    reqBody += data;
  });

  // When the request is finished processing the entire body
  req.on("end", () => {
    // Parsing the body of the request
    if (reqBody) {
      req.body = reqBody
        .split("&") // affiliate=nasa&query=mars+rover%21 => [affiliate=nasa,query=mars+rover%21]
        .map((keyValuePair) => keyValuePair.split("=")) // => [[affiliate,nasa],[query,mars+rover%21]]
        .map(([key, value]) => [key, value.replace(/\+/g, " ")]) //  [[affiliate,nasa],[query,mars rover%21]]
        .map(([key, value]) => [key, decodeURIComponent(value)]) // [[affiliate,nasa],[query,mars rover!]]
        .reduce((acc, [key, value]) => {
          acc[key] = value;
          return acc;
        }, {});
      console.log(req.body);

      /*
         {
          affiliate : nasa,
          query: mars rover!
         } 
      */
    }
    // Do not edit above this line

    // define route handlers here
    if (req.method === "GET" && req.url === "/") {
      // 1. create res body
      const resBody = "Dog Club";
      // 2. set status code
      res.statusCode = 200;
      // 3. set header
      res.setHeader("Content-Type", "text/plain");
      // 4. return res body & end res
      return res.end(resBody);
    }
    // Do not edit below this line

    if (req.method === "GET" && req.url === "/dogs") {
      const resBody = "Dog Index";

      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      return res.end(resBody);
    }

    // String.split && string.startsWith
    if (req.method === "GET" && req.url.startsWith("/dogs")) {
      console.log("request url ", req.url);

      const urlParts = req.url.split("/");
      console.log("url parts ", urlParts);
      const dogId = urlParts[2];
      // const dogId = urlParts[urlParts.length - 1];

      // request for dogId
      if (dogId !== "new") {
        console.log("dog id ", dogId);

        const resBody = `Dog details for dogId: ${dogId}`;

        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        return res.end(resBody);
      } else {
        console.log("new dog page ", dogId);

        const resBody = "Dog create form page";

        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        return res.end(resBody);
      }
    }

    if (req.method === "POST" && req.url === "/dogs") {
      console.log("request url ", req.url);

      const dogId = getNewDogId();
      console.log("dog id ", dogId);

      res.statusCode = 302;
      res.setHeader("Location", `/dogs/${dogId}`); // /dogs/:dogId
      return res.end();
    }

    // Return a 404 response when there is no matching route handler
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    return res.end("No matching route handler found for this endpoint");
  });
});

const port = 5000;

server.listen(port, () => console.log("Server is listening on port", port));
