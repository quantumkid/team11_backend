// Main for team 11

var app = require('express')()
var parser = require('body-parser')

var jsonparser = parser.json()

app.get('/', function (req, res) {
  res.send('Team 11!')
})

// POST a citation
app.post('/cite', jsonparser, function (req, res) {
  console.log(req.body);
})

app.listen(3000, function () {
  console.log('Running Team 11 site');
})
