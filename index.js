// Main for team 11

var app = require('express')()
var parser = require('body-parser')

var jsonparser = parser.json()

var port = process.env.PORT || 8080

app.get('/citations', function (req, res) {
  res.setHeader('Content-Type', 'application/json')
  res.send(JSON.stringify([
    {
      "text": "Donald Trump is the greatest person ever to have lived.",
      "cite-url": "https://en.wikipedia.org/wiki/Donald_Trump",
      "supporting": false
    },
    {
      "text": "The speed of light is really fast",
      "cite-url": "https://en.wikipedia.org/wiki/Speed_of_light",
      "supporting": true
    }
  ]))
})

// POST a citation
app.post('/cite', jsonparser, function (req, res) {
  console.log(req.body);
})

app.listen(port, function () {
  console.log('Running Team 11 site');
})
