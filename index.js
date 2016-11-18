// Main for team 11

var app = require('express')()
var parser = require('body-parser')
var db = require('./lib/db.js')

var jsonparser = parser.json()

var port = process.env.PORT || 8080

app.get('/citations/:url', function (req, res) {
  db.retrieveCitations(req.params.url).then(function(citations) {
    res.json(citations)
  })
})

// POST a citation
app.post('/cite', jsonparser, function (req, res) {
  db.insertCitation(req.body.url, req.body.citeUrl, req.body.text, req.body.supporting)
})

app.listen(port, function () {
  console.log('Running Team 11 site');
})
