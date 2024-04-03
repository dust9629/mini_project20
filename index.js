const express = require('express')
const app = express()
const port = 3002

app.get('/', function (req, res) {
  res.send("hey~~~~")
})
app.get('/dog', function (req, res) {
  res.send("강쥐")
})
app.get('/cat', function (req, res) {
  res.send("냥이")
})
// app.get은 express 앱이 라우팅 루트로 기본주소로 들어왔을 때 이 함수를 실행하겠다
// 주소창을 이용한 정보전달 -> get
app.listen(port, () => {
  console.log(`example app listening on port ${port}`)
})
// 3000번 포트에서 듣고 있음, console 실행