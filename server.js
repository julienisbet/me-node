var express = require('express');
var app = express();
app.use(express.static('dist'));
app.use(express.static('public'));
app.use('/scripts', express.static(__dirname + '/node_modules/'));


app.get('/*', function (req, res) {
  res.sendfile('./public/dist/index.html');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});