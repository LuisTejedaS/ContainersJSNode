var express = require('express');
var app = express();
app.get('/hello.txt', function(req , res){
    res.send('Hello world');
});
app.get('/team/:name', function(req, res)
{
    res.setHeader('Content-Type','text/plain');
    res.send("you picked  " + req.params.name);
});

var server = app.listen(8080, function(){
console.log('Server running at http://127.0.0.1:8080/');
});
//npm install -g nodemon