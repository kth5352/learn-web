let http = require("http");

let server = http.createServer();

server.on("request", function (request, response) {
  response.end("hello");
});

server.on("connection", function (session) {
  console.log("connection event");
});

server.on("close", function () {
  console.log("close");
});

server.listen(3000, () => {
  console.log("http://localhost:3000");
});
