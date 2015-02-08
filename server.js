
var express = require('express');
var fs = require('fs');
var app = express();

app.use('/public', express.static(__dirname + '/public'));

app.get("/", function(req, res){
	res.sendFile(process.cwd() + "/public/index.html");
});

app.get("/results.json", function(req, res) {
  fs.readFile(process.cwd() + '/data/results.json', 'utf8', function(err, data) {
    res.json(JSON.parse(data));
  });
});

app.listen(8080);
console.log("App listening to port 8080");