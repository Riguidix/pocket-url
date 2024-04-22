var express = require('express');
var router = express.Router();

var linkController = require('../controllers/links');

router.post('/', linkController.createLink);
router.get('/', linkController.readLinks);
router.get('/h/:hash', linkController.readLinkByHash);
router.put('/:id', linkController.updateLink);
router.delete('/:id', linkController.deleteLink);

module.exports = router;
