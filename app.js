const express = require('express');
const app = express();

app.get('/liveness', (req, res) => {
  return res.status(200).json({
    message: 'Meu app está vivo!',
  });
});

app.get('/readiness', (req, res) => {
  return res.status(200).json({
    message: 'Meu app está pronto!'
  });
});

module.exports = app;
