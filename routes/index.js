var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/map', function(req, res, next) {
  res.sendFile('views/map.html', {root: __dirname });
});

router.post('/add', function(req, res, next) {
	var query = url.parse(req.url).query;
	var titulo = querystring.parse(query)["titulo"];    
	var fecha = querystring.parse(query)["fecha"];    
	var contenido = querystring.parse(query)["contenido"];   
	var categoria = querystring.parse(query)["categoria"];    
 
	var coordenadaX = querystring.parse(query)["coordenadaX"];    
	var coordenadaY = querystring.parse(query)["coordenadaY"];    

	console.log(titulo+" "+fecha+" "+contenido+" "+coordenadaY+" "+coordenadaX);
	res.send('hola');
});

module.exports = router;
