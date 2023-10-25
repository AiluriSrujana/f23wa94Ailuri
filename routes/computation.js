var express = require('express');
var router = express.Router();
var x=Math.random();

var y=Math.random();

var z= Math.random();


/* GET users listing. */
router.get('/', function(req, res, next) {
  var result =Math.ceil(x);

  var result1=Math.hypot(y);

  var result2=Math.clz32(z);

  
  res.send(`[fn] applied to [${x}] is ${result} <br> [fn] applied to [${y}] is :${result1} <br>   [fn] applied to [${z}] is :${result2}                     `);
});

module.exports = router;
