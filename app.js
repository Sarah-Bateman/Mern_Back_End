// app.js

const express = require('express');
const connectDB = require(path.join('/vercel/output', 'config/db'));
// const cors = require('cors');

// routes
// const books = require('./routes/api/books');

const app = express();

// Connect Database
// connectDB();

// cors
// app.use(cors({ origin: true, credentials: true }));

// Init Middleware
// app.use(express.json({ extended: false }));

const port = 8082;

app.listen(port, () => 
    console.log(`Server running on port ${port}`));

app.get('/', (req, res) => res.send('Hello world!'));

app.get('/cwd', (req, res) => res.send(process.cwd().toString()));

// use Routes
// app.use('/api/books', books);

module.exports = app