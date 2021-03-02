const express = require('express');
const app = express();
app.set('port', (process.env.PORT || 5000));

if (process.env.NODE_ENV === "production") {
  app.use(express.static('dist'));
  app.get(/\/(?!api)*/, (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
app.use('/scripts', express.static(__dirname + '/node_modules/'));


app.get('/resume', function(req, res) {
  res.sendFile('./dist/assets/resume.pdf')
});

app.get('/*', function (req, res) {
  res.sendFile('./dist/index.html');
});

app.listen(app.get('port'));
