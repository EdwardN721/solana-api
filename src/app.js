require('dotenv').config(); // Carga las variables de entorno
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/index.js');

const app = express();

// Configuración de middlewares
app.use(bodyParser.json());
app.use('/api', routes); // Prefijo para las rutas

// Inicio del servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
