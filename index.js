var express = require('express')
var server = express()
var express = require('express')
var exphbs = require('express-handlebars')
var querystring = require('querystring')
server.engine('handlebars', exphbs({defaultLayout: 'index'}));
server.set('view engine', 'handlebars');


server.get('/', function(req, res) {
  res.render('form')
})

server.post('/info', function(req, res) {
  req.on('data', function (chunk) {
    var body = chunk.toString()
    var form = querystring.parse(body)
    console.log(form)
  })
  res.render('form')
})

server.listen(3000)

