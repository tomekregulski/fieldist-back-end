const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 8081;

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello from fieldist server!');
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}!`);
});
