var express = require('express');
var router = express.Router();

var linkController = require('../controllers/links');

router.post('/', linkController.createLink);
router.get('/', linkController.readLinks);

module.exports = router;
