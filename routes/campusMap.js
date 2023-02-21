var express = require('express');
var router = express.Router();
var fs = require('fs');

var app = express();
var path = require('path');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('For this section we will work on deploying a custom map');
  });

  router.get('/show', function(req, res, next) {
    var dataFile;

    fs.readFile(path.join(__dirname).replace('routes','')+'public/datafiles/campusInfo.txt',
    function(error, data){
        if(error){
            console.log(error);
        }
        else{
            dataFile = data.toString();
            res.render('map', { data: dataFile });
        }
    });
});

module.exports = router;