const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();

const DIST_DIR = path.join(__dirname, "../public");
const CLIENT_DIR = path.join(__dirname, "../src/");
const port = process.env.PORT || 5001;

app.use(express.static(DIST_DIR));
app.use(morgan('dev'));

app.get('/resume', (req, res) => {
  res.sendFile(path.join(DIST_DIR, 'resume/index.html'));
});

app.get('/', (req, res) => {
  res.sendFile(path.join(DIST_DIR, 'index.html'));
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
