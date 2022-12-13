var axios = require('axios'),
  cheerio = require('cheerio'),
  name = "makima", //ten char
  page = 1; //trang thu bao nhieu ?
axios.get(`https://www.besthdwallpaper.com/search?CurrentPage= ` + page + `&q=` + name)
  .then(resp => {
    let $ = cheerio.load(resp.data)
    var img = [];
    var index = $('div.grid-item')
    index.each(function() {
      var i = $(this).find('picture > img').attr('data-src') || $(this).find('picture > img').attr('src');$(this).find('picture > source:nth-child(1)').attr('srcset'), $(this).find('picture > source:nth-child(2)').attr('srcset')
      img.push(i)
    })
    console.log(img)
  })
