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
  var info = 'a'
  req.on('data', function (chunk) {
    var body = chunk.toString()
    var form = querystring.parse(body)
    info = changeFormData(form)
  })
  res.render('form', {'info': info})
})

server.listen(3000)

function changeFormData(data) {
  console.log('in ' + data['string'])
  var b = data['string'].split('').reverse().join("")
  console.log('out ' +b)
  return b
}