const axios = require('axios');
var link = "", //link api o day
    resp = "", // data thi nhap data, url thi nhap url
    solan = "",// so lan dung trong vong lap
    live = 0, die = 0, json = [];
for(let i = 0; i < solan; i++){
  axios.get(link).then(res = > {
 json.push(res.data[resp])
  live += 1
})
.catch(e => {
  die += 1
})
}
console.log({live,die,json})
