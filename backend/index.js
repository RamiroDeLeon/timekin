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

// Main API route
app.get('/api/entries', (_, res) => {
  const sampleEntries = [
    {
      id: '1',
      title: 'Morning Hike',
      content: 'Went on a hike today in the hills.',
      timestamp: '2025-08-20T08:00:00Z',
    },
    {
      id: '2',
      title: 'Evening Reflection',
      content: 'Felt grateful today. Journaling before bed.',
      timestamp: '2025-08-20T20:45:00Z',
    },
  ];
  res.json(sampleEntries);
});

// Optional root route for Render or sanity check
app.get('/', (_, res) => {
  res.send('Hello from Timekin API Server side!');
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
