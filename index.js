var express = require('express')
var server = express()
var express = require('express')
var exphbs = require('express-handlebars')
var querystring = require('querystring')
var stream = require('stream')
server.engine('handlebars', exphbs({defaultLayout: 'index'}));
server.set('view engine', 'handlebars');


server.get('/', function (req, res) {
  res.render('form')
})

server.post('/info', function (req, res) {
  var info = 'a'
  // var ws = new stream.Writeable()
  // ws.on('data', function (data) {
  //   console.log(data)
  //   info = data
  // })
  // ws.on('end', function () {
  //   res.render('form', {'info': info})
  // })
  var rs = new stream.Readable({ objectMode: true });
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

server.listen(3000)

function changeFormData (data) {
  console.log('in ' + data['string'])
  var b = data['string'].split('').reverse().join("")
  console.log('out ' +b)
  return b
}

