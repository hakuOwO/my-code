const axios = require('axios')
var json = []; // ghi token o day
function repeatm(x, k) {
  return x % k;
}
var text = ""; //gan text vao day
var i = 0
async function spam() {
  try{
    if(i > json.length) return
  const res = (await axios.post(`https://graph.facebook.com/100051638101791_696875152043749/comments/?message=${text}&access_token=` + json[repeatm(i, json.length) + 1] )).data
  console.log(res)
  
} catch(e){
    console.log('err')
    i+= 1;
}
}
setInterval(spam, 5000);
