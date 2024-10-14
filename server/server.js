// server.js
const express = require('express');
const app = express();
const port = 1111; // 서버 포트 번호

const cors = require("cors");
app.use(cors());

const postPage = require("./router");

// const corsOptions = {
//   origin : '*',
//   optionsSuccessStatus: 200,
// };

app.use(express.json()); // JSON 형식의 요청 본문을 파싱


// router
app.use("/", postPage);


app.listen(port, () => {
  console.log(`*** server is running on ${port} ***`);
});