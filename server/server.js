const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/hello', (req, res) => {
  res.send('World🌏')
});

module.exports = app;