const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const sequelize = require('./config/connection');
const cors = require('cors');
const fileUpload = require('express-fileupload');

const routes = require('./controllers');
const PORT = process.env.PORT || 5001;

const app = express();
app.use(fileUpload());

// var corsOptions = {
//   origin: '/',
// };

// app.use(cors(corsOptions));
app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}!`);
  });
});
