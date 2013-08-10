var express = require('express');
var app = express();
//var fs = require('fs');

app.use(express.logger());

//var buffIndexFile = fs.readFileSynch('./index.html');
//console.log(buffIndexFile);


app.get('/', function(request, response) {
  response.send('Hello World2 From Mark!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
