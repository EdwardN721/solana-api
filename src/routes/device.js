const express = require('express');
const router = express.Router();
const deviceController = require('../controllers/device');

router.post('/add', deviceController.addDevice);

module.exports = router;
