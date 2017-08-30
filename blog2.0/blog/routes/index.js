var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var data = {
    title: 'Express',
    hehe: 123
  }
  res.render('index', data);
});

router.get('/login', function (req, res) {
  res.render('common/login', {});
});

module.exports = router;
