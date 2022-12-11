const axios = require('axios')
var json = []; // ghi token o day
var text = ""; //gan text vao day
var i = 0
var uid = ""; // nhet uid ban vao day
var idpost = "";// nhet id post vao day
var timedlay  = "" || 5;// settime delay giua moi cmt ( tinh theo s )
function repeatm(x, k) {
  return x % k;
}
async function spam() {
  try{
    if(i > json.length) return
  const res = (await axios.post(`https://graph.facebook.com/${uid}_${idpost}/comments/?message=${text}&access_token=` + json[repeatm(i, json.length) + 1] )).data
  console.log(res)
  
} catch(e){
    console.log('err')
    i+= 1;
}
}
setInterval(spam, timedlay * 1000);
