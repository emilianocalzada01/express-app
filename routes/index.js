var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Campus Site & Maps' });
});

/* GET home page. */
router.get('/about', function(req, res, next) {
  res.send('This section must show something');
});

/* GET home page. */
router.get('/gotousers', function(req, res, next) {
  res.redirect('/users');
});

router.get('/gmap', function(req, res, next) {
  res.render('gmap', { title: 'Google Maps' });
});

module.exports = router;
