var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/status', function(req, res, next) {
  res.send('Success');
});

module.exports = router;
