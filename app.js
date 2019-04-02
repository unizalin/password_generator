const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;



app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

/**
 * app.use -  不管哪個路由請求，都需經過 app.use 內  已安裝npm 套件
 * bodyParser.urlencoded()  - 處理所有 URL-encoded
 * 不管從哪個路由發送過來的請求，都先經過 bodyParser 進行前置處理
 */
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.render('index');
});

// 接受 表單 POST 
app.post('/', (req, res) => {
  console.log('index  post  response');
  console.log('req.body ', req.body);
  res.render('index');
})

app.listen(port, () => {
  console.log(`express port is ${port}`);
});