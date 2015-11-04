var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var jqstr=req.query['jquerycallback'];
	res.send(jqstr+'({"openPortRet":"0","writeCardRet":"0","msg":"I am a programmer!"})');	
  //res.render('index', { title: 'Express' });
});

module.exports = router;
