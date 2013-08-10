var fs = require('fs');
var buffer = fs.readFileSync('index.html');
var string = buffer.toString();
console.log(string);
