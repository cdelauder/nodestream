var express = require('express')
var server = express()
var express = require('express')
var exphbs = require('express-handlebars')
var querystring = require('querystring')
var stream = require('stream')
var through = require('through')
server.engine('handlebars', exphbs({defaultLayout: 'index'}));
server.set('view engine', 'handlebars');


server.get('/', function (req, res) {
  res.render('form')
})

server.post('/info', function (req, res) {
  var rs = new stream.Readable();
  req.on('data', function (chunk) {
    var body = chunk.toString()
    var form = querystring.parse(body)
    rs.push(changeFormData(form))
    rs.push(null)
  })
  rs.on('data', function (data) {
    res.render('form', {'info': data})
  })
})

server.get('/client.js', function (req, res) {
  res.sendFile(__dirname + '/client.js')
})

server.get('/pic', function (req, res) {
  callAPI()
  var html = ''
  var through = require('through')

  function write (buf) {
    html += buf.toString()
  }
  
  function end () {
    res.write(html)
    res.end()
  }

  function callAPI () {
    var http = require('http')
    var body = ''
    http.get('http://www.dailypuppy.com/', function (res) {
      res.on('data', function (chunk) {
        body += chunk.toString()
      })
      res.on('end', function () {
        return body
      }).pipe(through(write, end))
    })
  }
})

server.listen(3000)

function changeFormData (data) {
  var b = data['string'].split('').reverse().join("")
  return b
}



