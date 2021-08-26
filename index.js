const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 8081;

const app = express();

const testData = [
  {
    name: 'Tomek',
    role: 'Admin',
  },
];
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello from fieldist server!');
});

app.get('/test', (req, res) => {
  res.send('Hello from fieldist test route!');
});

app.get('/api/test', (req, res) => {
  res.json(testData);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}!`);
});
