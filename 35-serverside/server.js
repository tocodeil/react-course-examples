var express = require('express');
var bodyParser = require('body-parser')

var app = express();

app.use(express.static('public'));
app.use(bodyParser.json())

const items = [];

app.post('/items', function(req, res) {
  const msg = req.body.text;
  items.push(msg);
  setTimeout(function() {
    res.send({});
  }, 1000);
});


app.get('/items', function(req, res) {
  res.send({ messages: items });
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
