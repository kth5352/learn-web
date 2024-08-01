const http = require("http");
const express = require("express");
const app = express();
const port = 8000;

let saramList = [
  {
    id: 1,
    name: "John Doe",
    phone: "555-1234",
    email: "john.doe@example.com",
  },
  {
    id: 2,
    name: "Jane Smith",
    phone: "555-5678",
    email: "jane.smith@example.com",
  },
  {
    id: 3,
    name: "Alice Johnson",
    phone: "555-8765",
    email: "alice.johnson@example.com",
  },
  {
    id: 4,
    name: "Bob Brown",
    phone: "555-4321",
    email: "bob.brown@example.com",
  },
  {
    id: 5,
    name: "Charlie Davis",
    phone: "555-6789",
    email: "charlie.davis@example.com",
  },
  {
    id: 6,
    name: "Diana Evans",
    phone: "555-9876",
    email: "diana.evans@example.com",
  },
  {
    id: 7,
    name: "Edward Wilson",
    phone: "555-3456",
    email: "edward.wilson@example.com",
  },
  {
    id: 8,
    name: "Fiona Clark",
    phone: "555-6543",
    email: "fiona.clark@example.com",
  },
  {
    id: 9,
    name: "George Lee",
    phone: "555-7890",
    email: "george.lee@example.com",
  },
  {
    id: 10,
    name: "Hannah Martin",
    phone: "555-0987",
    email: "hannah.martin@example.com",
  },
];

// /public/index.html을 보여주기 위한 static 폴더를 지정
app.use(express.static("public"));

app.set("views", "views");
app.set("view engine", "ejs");

//saram.ejs에 있는 정보를 res.end에 넣어준다.
app.get("/saram", (req, res) => {
  var message = "노래를 즐겨요";

  req.app.render("saram", { message, saramList }, (error, html) => {
    res.end(html);
  });
});

app.get("/saram/detail", (req, res) => {
  let idx = saramList.findIndex((saram) => {
    return saram.id == req.query.id;
  });
  let saram = null;
  if (idx !== -1) {
    saram = saramList[idx];
  }
  req.app.render("saramDetail", { saram }, (err, html) => {
    res.end(html);
  });
});

app.get("/saram/edit", (req, res) => {
  let idx = saramList.findIndex((saram) => {
    return saram.id == req.query.id;
  });
  let saram = null;
  if (idx !== -1) {
    saram = saramList[idx];
  }
  req.app.render("saramEdit", { saram }, (err, html) => {
    res.end(html);
  });
});

app.get("/saram/update", (req, res) => {
  let idx = saramList.findIndex((saram) => {
    return saram.id;
  });
  let saram = req.query.id;
  if (idx !== -1) {
    saram.email = req.query.email;
    saram.name = req.query.name;
    saram.phone = req.query.phone;
    saramList[idx] = saram;
  }
  req.app.render("saramEdit", { saram }, (err, html) => {
    res.end(html);
  });
});

const server = http.createServer(app);
server.listen(port, function () {
  console.log("서버 실행 중 >>> http://localhost:" + port);
});
