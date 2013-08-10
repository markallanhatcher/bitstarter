var express = require('express');
var app = express();
var fs = require('fs');

app.use(express.logger());
var buffer = fs.readFileSync('index.html');
var htmlString = buffer.toString();


app.get('/', function(request, response) {
  response.send(htmlString);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
