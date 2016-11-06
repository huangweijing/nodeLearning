var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('test', { myword: 'cheer up!' });
});

router.get('/sec', function(req, res, next) {
  res.redirect('/test/sub');
  //res.flash('name', 'weijing');
});

router.get('/sub', function(req, res, next) {
  //var name = req.flash('name');
  var name = 'weijing';
  res.render('test', { myword: name });
});

module.exports = router;
