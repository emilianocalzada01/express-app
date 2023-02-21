var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('This section must show something');
});


/* GET users listing. */
router.get('/details', function(req, res, next) {
  res.send('This site can show some user datails in order to expose some more information');
});

module.exports = router;
