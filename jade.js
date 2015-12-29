var express = require('express')
var path = require('path')
var app = express()

app.get('/home', function(request, response) {
  response.render('index',{date: new Date().toDateString()})
})

app.listen(process.argv[2])
app.set('views', path.join(__dirname, 'templates'))
app.set('view engine', 'jade')
