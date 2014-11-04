var express = require('express');
var app = express();
var db = require('mongoskin').db('mongodb://@localhost:27017/joetz', {safe:true});


db.collection('vakantie').find().toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
});

app.get ('/',function(request, response){
	response.sendFile(__dirname + "/index.html");
});
	
app.get('/api/vakanties/',function(request, response){
	db.collection('vakantie').find().toArray(function(err, result) {
	if (err) throw err;
	response.send(result);
	console.log(result);
	});
	//response.writeHead(200);
	//response.end();
});
	
app.get('/api/vakanties/:vakantie',function(request, response){
	var vakid = req.params.vakantie;
	db.collection('vakantie').findOne({id:vakid})(function(err, result) {
	if (err) throw err;
	response.send(result);
	console.log(result);
	});
	
	
	});
	
app.listen(8080);
//refs
//http://www.hacksparrow.com/mongoskin-tutorial-with-examples.html

