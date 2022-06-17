const http = require('http')
const fs = require('fs')
const path = require('path')


const port = process.env.port || 3000

const server = http.createServer((req, res) => {
const url = req.url

if (url == '/') {

  var readStream = fs.createReadStream(__dirname + '/index.html', 'utf8')
  res.writeHead(200, {'content-type': 'text/html'})
  readStream.pipe(res)

} 
 if (url == '/about') {

   var readStream = fs.createReadStream(__dirname + '/about.html', 'utf8')
   res.writeHead(200, {'content-type': 'text/html'})
  readStream.pipe(res)

}
if (url == '/contact') {

  var readStream = fs.createReadStream(__dirname + '/contact.html', 'utf8')
   res.writeHead(200, {'content-type': 'text/html'})
  readStream.pipe(res)

}

})

server.listen(port, () => {
  console.log(`connected on ${port}`)
})