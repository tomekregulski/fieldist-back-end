const express = require('express');
// const bodyParser = require('body-parser');
const path = require('path');
// const sequelize = require('./config/connection');
const cors = require('cors');
const fileUpload = require('express-fileupload');

const errorHandler = require('./handlers/error');

const routes = require('./controllers');

const app = express();
app.use(fileUpload());

app.use(cors());

// app.use(bodyParser.json());

// app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

app.use(function (req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(errorHandler);

module.exports = app;
