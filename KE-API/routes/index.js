var express = require('express');
var router = express.Router();

var TestController = require('../controllers/TestController')

// Check if app is running
router.get('/status', function(req, res, next) {
  res.send('Success');
});

// Check that db connection is successfull
router.get('/testdb', TestController.testDB);


module.exports = router;
