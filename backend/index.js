require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.use((req, res, next) => {
  console.log(`[${req.method}] ${req.url}`);
  next();
});

app.get(['/api', '/api/'], (_, res) => {
  res.send('Hello from Timekin API Server side!');
});

app.get('/', (_, res) => {
  res.send('Hello from Timekin API Server side!');
});


app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});