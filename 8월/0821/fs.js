var fs = require("fs");

// 파일에서 데이터를 읽어 들입니다.
fs.open("./data.txt", "r", function (err, fd) {
  if (err) throw err;

  var buf = new Buffer(10);
  console.log("버퍼 타입 : %s", Buffer.isBuffer(buf));

  fs.read(fd, buf, 0, buf.length, null, function (err, bytesRead, buffer) {
    if (err) throw err;

    var inStr = buffer.toString("utf8", 0, bytesRead);
    console.log("파일에서 읽은 데이터 : %s", inStr);

    console.log(err, bytesRead, buffer);

    fs.close(fd, function () {
      console.log("data.txt 파일 열고 읽기 완료!");
    });
  });
});
