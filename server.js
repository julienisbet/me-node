var express = require('express');
var app = express();
app.set('port', (process.env.PORT || 5000));

app.use(express.static('dist'));
app.use('/scripts', express.static(__dirname + '/node_modules/'));


app.get('/resume', function(req, res) {
  res.sendFile('./dist/assets/resume.pdf')
});
app.get('/*', function (req, res) {
  res.sendFile('./dist/index.html');
});

app.listen(app.get('port'), function () {

});
