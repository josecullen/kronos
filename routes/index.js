var express = require('express');
var router = express.Router();
var Engine = require('tingodb')(),
    assert = require('assert');
var db = new Engine.Db('./db', {});

var fs = require('fs');
var collectionAcont = db.collection('acontecimiento');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/map', function(req, res, next) {
  res.sendFile('views/map.html', {root: __dirname });
});

router.get('/mapWithAll', function(req, res, next) {
	findAll(function(allAcont){
		res.render('mapWithAll', {allAcont : JSON.stringify(allAcont)});
   		db.close();
	});
});


var findAll = function(callback){
  var cursor = collection().find();
  var allAcont = new Array();
  cursor.each(function(err, doc){
  	console.log(err);
  	assert.equal(err, null);
  	if(doc != null){
  		console.dir(doc);
  		allAcont.push(doc);
  	}else{
  		callback(allAcont);
  	}
  });
}

var collection = function(){
	collectionAcont = db.collection('acontecimiento');
	return collectionAcont;
}
module.exports = router;
