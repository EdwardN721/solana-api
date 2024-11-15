require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/index.js');

const app = express();
app.use(bodyParser.json());
app.use('/api', routes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
