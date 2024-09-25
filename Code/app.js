const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// Kết nối đến MongoDB
mongoose.connect('mongodb://mongo:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.get('/', (req, res) => {
  res.send('Hello, Docker Compose with Node.js and MongoDB!');
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});
