const express = require('express');
const router = express.Router();
const registryController = require('../controllers/registry');

router.post('/create', registryController.createRegistry);
router.get('/:registryPubkey', registryController.getRegistry);

module.exports = router;
