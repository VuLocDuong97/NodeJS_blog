const express = require('express')
// express nó lấy từ pakagejson mà ta đã cài vô nó gán cho biến express
const app = express()
// express cía hàm nó tương tứng với app
const port = 3000
// chạy ở cổng 3000;
app.get('/tin-tuc', (req, res) => {
  res.send('Hello World!')
})
// get tức có nghĩa là định nghĩa route tức tuyến đường, dấu /, aroun function, tức 
// app.get ('/', function (req, res){
//     return res.send('Hello');
// })
// còn arroun function bỏ function và thêm =?

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
// cái app ta nó chạy từ express và nó lắng nghe port là 3000 và địa chỉ ip 127.0.0.1-localhost
//chạy project "node index.js" rồi bám enter, sau đó copy địa chỉ ở đây là: http://localhost:3000 thì lúc này enter là nó ra
//  Note: nếu ta '/' mà ta để là '/trang-chu' thì lúc gõ để chạy trang web ta phải gõ http://localhost:3000/trang-chu thì web mới chạy
