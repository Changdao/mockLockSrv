var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  var actionId = req.query['actionid'];
	var jqstr=req.query['jquerycallback'];
  switch (actionId)
  {
    case 'writeiccard':
    {
      res.send(jqstr+'({"openPortRet":"0","writeCardRet":"0","msg":"I am a programmer!"})');  
    }
    break;
    case 'readidcard':
    {
      res.send(jqstr+'({"name":"贾小明", "sex":"男", "nation":"中国", "birthday":"20151010", "address":"北京市丰台区青塔西路富丽小区5单元101号", "idcode":"360101198801012343", "department":"哪里哪里", "startdate":"20011010", "enddate":"20201010", "phote":"/home/starcwl/zp.bmp"})');
    }
    break;
    case 'getpic':
    {
      // console.log('getpic' + fs);
      var bmpBuffer = fs.readFileSync('./public/others/ZP.bmp');
      res.send(bmpBuffer);
    }
    break;
    default :
    {
      // console.log('unknow actionId');
      res.send('wrong actionId');  
    }
  }
  //res.render('index', { title: 'Express' });
});

module.exports = router;
