let http = require("http");

let server = http.createServer();
server.listen(3000, () => {
  console.log("http://localhost:3000");
});

const html = `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>Node</h1>
    </body>
</html>`;

server.on("request", (req, res) => {
  if (req.url === "/favicon.ico") {
    // favicon 요청 무시
    res.writeHead(204, { "Content-Type": "image/x-icon" });
    res.end();
    return;
  }

  res.write(html);
  console.log("요청이 들어왔습니다.");
  res.end();
});
