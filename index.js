var express = require('express')
var server = express()

server.get('/', function(req, res) {
  res.set('Content-Type', 'text/html')
  res.write('hello world')
  res.send()
})

server.listen(3000)