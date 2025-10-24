var express = require('express');
var router = express.Router();

//route default
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome to the world',});
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'about'});
});

module.exports = router;
