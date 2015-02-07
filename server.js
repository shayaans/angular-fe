
var express = require('express');
var app = express();


app.use('/public', express.static(__dirname + '/public'));

app.get("/", function(req, res){
	res.sendFile(process.cwd() + "/public/index.html");
})



app.listen(8080);
console.log("App listening to port 8080");