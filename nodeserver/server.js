var express = require('express');
var app = express();

app.use(function (req, res, next) {
  console.log('here is where I would log shit');
  next();
});

app.use(express.static('public'));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

