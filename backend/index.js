require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json()); // Required for parsing JSON bodies

// In-memory sample entries
const entries = [
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

app.use((req, res, next) => {
  console.log(`[${req.method}] ${req.url}`);
  next();
});

// Main API route
app.get(['/', '/api', '/api/'], (_, res) => {
  res.send('Hello from Timekin API Server side!');
});

// Get all journal entries
app.get('/api/entries', (_, res) => {
  res.json(entries);
});


// Get a specific journal entry by ID
app.get('/api/entries/:id', (req, res) => {
  const { id } = req.params;
  const entry = entries.find((e) => e.id === id);
  if (entry) {
    res.json(entry);
  } else {
    res.status(404).json({ error: 'Entry not found' });
  }
});

// Create a new journal entry
app.post('/api/entries', (req, res) => {
  const { title, content, timestamp } = req.body;
  if (!title || !content || !timestamp) {
    return res.status(400).json({ error: 'Missing fields in request' });
  }
  const newEntry = {
    id: (entries.length + 1).toString(),
    title,
    content,
    timestamp,
  };
  entries.push(newEntry);
  res.status(201).json(newEntry);
});

// Delete a journal entry by ID
app.delete('/api/entries/:id', (req, res) => {
  const index = entries.findIndex((e) => e.id === req.params.id);
  if (index !== -1) {
    entries.splice(index, 1);
    res.status(204).send(); // No content
  } else {
    res.status(404).json({ message: 'Entry not found' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
