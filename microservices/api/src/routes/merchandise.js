var express = require('express');
var router = express.Router();

const https = require('https');

//HTTPS Request Bigcartel



/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect("http://deathalley.bigcartel.com/")
});

module.exports = router;
