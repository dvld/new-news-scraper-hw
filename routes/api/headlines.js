const router = require('express').Router();
const headlineController = require('../../controllers/headline');

router.get('/', headlineController.findAll);
router.delete('/', headlineController.delete);
router.put('/', headlineController.update);

module.exports = router;