const https = require('https')

const start = Date.now();
function doRequset(){
https.request('https://www.google.com', res => {
  res.on('data', ()=>{})
  res.on('end', ()=>{
    console.log(Date.now()-start)
  })
})
.end()
}

doRequset()
doRequset()
doRequset()
doRequset()
doRequset()
doRequset()