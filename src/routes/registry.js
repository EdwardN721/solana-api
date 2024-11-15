const express = require('express');
const router = express.Router();
const registryController = require('../controllers/registry');

// Ruta para crear un registro
router.post('/create', registryController.createRegistry);

// Ruta para consultar un registro
router.get('/:registryPubkey', registryController.getRegistry);

module.exports = router;
