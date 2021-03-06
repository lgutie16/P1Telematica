module.exports 	= router;
var express 	= require('express');
var router 		= express.Router();
var Course 		= require('../models').Course

/* GET home page. */

router.get('/', function(req, res) {
	Course.listRecords().then(function(result){
		res.send(result)
	})
});

router.propfind('/', function(req, res) {
	Course.getById(req.body.id).then(function(result){
		res.send(result)
	})
});

router.post('/', function(req, res) {
	Course.createRecord(req.body).then(function(result){
		res.redirect('/dashboard');
	})
});

router.put('/', function(req, res){
	Course.updateRecord(req.body).then(function(result){
		res.send(result)
	})
});

router.delete('/', function(req, res){
	console.log(req.body.uuid)
	Course.deleteRecord(req.body.uuid).then(function(result){
		res.redirect('/dashboard')
	})
});

module.exports = router;
