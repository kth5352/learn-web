const http = require("http");
const express = require("express");
const app = express();

app.set("port", 3000);

app.use((req, res, next) => {
  // 전체 요청에 적용될 한글 처리 기능
  res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
  console.log("미들웨어 호출");
  res.write("<h1>Hello Node.js</h1>");
  res.write("<h2>백엔드 실습중</h2>");
  res.end(); // 응답을 종료합니다.
});

app.use("/", (req, res, next) => {
  console.log("/ 요청 미들웨어 호출");
  // 다음 요청 실행
  next();
});

const server = http.createServer(app);
server.listen(app.get("port"), () => {
  console.log(`서버 실행중 >>> http://localhost:${app.get("port")}`);
});
