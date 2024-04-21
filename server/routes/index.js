var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.send('hello wolrd');
});

module.exports = router;
