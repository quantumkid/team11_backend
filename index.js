// Main for team 11

var app = require('express')()
var parser = require('body-parser')
var db = require('./lib/db.js')

var jsonparser = parser.json()

var port = process.env.PORT || 8080

// Add headers
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'chrome-extension://ghkcbjhacmbnmjjdpdolehkkdgpijdpl');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get('/citations/:url', function (req, res) {
  db.retrieveCitations(req.params.url).then(function(citations) {
    res.json(citations)
  })
})

// POST a citation
app.post('/cite', jsonparser, function (req, res) {
  db.insertCitation(req.body.url, req.body.citeUrl, req.body.text, req.body.supporting)
  res.end()
})

app.listen(port, function () {
  console.log('Running Team 11 site');
})
