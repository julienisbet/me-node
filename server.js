const express = require('express');
const path = require('path');

const app = express();
app.set('port', (process.env.PORT || 5000));

app.get('/resume', function(req, res) {
  res.sendFile(path.resolve(__dirname, "frontend", "build", "resume.pdf"));
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static('frontend/build'));
  app.get(/\/(?!api)*/, (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}


app.use('/scripts', express.static(__dirname + '/node_modules/'));

app.listen(app.get('port'), () => {
  console.log("listening...")
});
