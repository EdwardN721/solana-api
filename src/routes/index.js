const express = require('express');
const devicesRoutes = require('./devices'); // Rutas para dispositivos
const registryRoutes = require('./registry'); // Rutas para registros

const router = express.Router();

// Definición de rutas
router.use('/devices', devicesRoutes);
router.use('/registry', registryRoutes);

module.exports = router; // Exporta el enrutador principal
