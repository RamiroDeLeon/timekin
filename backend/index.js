require('dotenv').config();
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
  console.log(`[${req.method}] ${req.url}`);
  next();
});

app.get('/', (_, res) => {
  res.send('Hello from Timekin API!');
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});