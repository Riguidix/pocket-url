var express = require('express');
var router = express.Router();

router.use('/links', require('./links'));

module.exports = router;
