var express 	= require('express');
var router  	= express.Router();
var Students 	= require('../models').Students
var Teachers	= require('../models').Teachers

var mcache  = require('memory-cache');

router.get('/', function(req, res) {			 
	res.render('../app/views/login', {});	  
});

module.exports = router;
