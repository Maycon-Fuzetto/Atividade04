const express = require('express');
const mysql = require('mysql2');
const appRoutes = require('./app');

const app = express();
const port = 3000;

// Configurações do banco de dados
const dbConfig = {
  host: 'db', 
  user: 'user',
  password: 'passwd',
  database: 'db_aula',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
};

const pool = mysql.createPool(dbConfig);

// Rota para consulta de dados
app.get('/consulta-dados', (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    connection.query('SELECT * FROM aluno', (error, results) => {
      connection.release(); // Liberar a conexão, independentemente do resultado da consulta

      if (error) {
        return res.status(500).json({ error: error.message });
      }
      res.json(results);
    });
  });
});

app.use('/', appRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
