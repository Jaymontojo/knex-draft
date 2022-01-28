const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/hello', (req, res) => {
  res.send('World🌏')
});

app.listen(PORT, () => {
  console.log(`Server is listening @ http://localhost:${PORT}`)
})