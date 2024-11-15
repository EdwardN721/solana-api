const express = require('express');
const router = express.Router();
const deviceController = require('../controllers/device');

// Ruta para agregar un dispositivo
router.post('/add', deviceController.addDevice);

module.exports = router;
