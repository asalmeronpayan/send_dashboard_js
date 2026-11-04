import express from 'express';

// const express = require('express')();
const app = express();
const PORT = 3000;

console.log('Starting server...');
app.use(express.json());

app.get('/api', (req, res) => {
  res.json({ message: 'Bienvenido a la API!' }); 
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});