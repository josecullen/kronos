var express = require('express');
var router = express.Router();
var querystring = require("querystring");
var url = require("url");

var Engine = require('tingodb')(),
    assert = require('assert');
var db = new Engine.Db('./db', {});

var fs = require('fs');
var collectionAcont = db.collection('acontecimiento');


router.get('/form', function(req, res, next) {
  res.render('formulario');
});



router.get('/add', function(req, res, next) {
	var query = url.parse(req.url).query;
	instertOne(query, function(err){
		if(err != null){
			console.log(err);
			res.end(err);
		}else{
			res.send('ok');	
		}
	});

});


var instertOne = function(query, callback){
	var titulo = querystring.parse(query)["titulo"];    
	var fecha = querystring.parse(query)["fecha"];    
	var contenido = querystring.parse(query)["contenido"];   
	var categoria = querystring.parse(query)["categoria"];    
 
	var coordenadaX = querystring.parse(query)["coordenadaX"];    
	var coordenadaY = querystring.parse(query)["coordenadaY"];  
	
	console.log(titulo+" "+fecha+" "+contenido+" "+coordenadaY+" "+coordenadaX);
	
	collectionAcont.insert(
  		{
  			titulo : titulo, 
  			fecha : fecha, 
  			contenido : contenido,
  			categoria : categoria,
  			coordenadas : [coordenadaX, coordenadaY]
  		},
  		
  		function(err, result) {
    		callback(err);
  		}
  	);
}


module.exports = router;