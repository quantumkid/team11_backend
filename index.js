// Main for team 11

var app = require('express')()
var parser = require('body-parser')

var jsonparser = parser.json()

var port = process.env.PORT || 8080

app.get('/', function (req, res) {
  res.send('Team 11!')
})

// POST a citation
app.post('/cite', jsonparser, function (req, res) {
  console.log(req.body);
})

app.listen(port, function () {
  console.log('Running Team 11 site');
})
