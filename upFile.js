const { readFileSync, writeFileSync, unlinkSync, createReadStream, existsSync, mkdirSync } = require("fs-extra");
const express = require('express')
const { join } = require("path")
const app = express();
var port = 5050;
app.listen(port);
console.log('Server started at http://localhost:' + port);
app.get('/', function(req, res) {
 res.send("Hello")
});

app.post('/upfile', (req, res) => {
  var { data, type, id } = req.body;
  if (!type) type = "text"
  else type = type
  var character = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var random = '';
  var number = 32;
  for (var i = 0; i < number; i++) {
    random += character.charAt(Math.floor(Math.random() * character.length));
  }
writeFileSync(`${__dirname}/cache/${random}.txt`, data)
  return res.send({
    status: 200,
    code: random
  })
})
app.get('/raw/:code', (req, res) => {
  try{
  var code = req.params.code;
  const clmm = join(__dirname, "cache", code + '.txt');
  var dataJson = (readFileSync(clmm, "utf-8"))
    
  res.type('json').send(readFileSync(`${__dirname}/cache/${code}.txt`));
  } catch(e){
    console.log(e)
    return res.send({
      status: 404,
      data: "vui lòng thử lại"
    })
  }
})
