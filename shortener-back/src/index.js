const express = require('express');
const bodyParser = require('body-parser');
const mongooseConnection = require('./db/connection');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const allowedOrigins = ['http://204.48.27.38:3001', 'http://localhost:3001'];
  const { origin } = req.headers;
  
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Methods', ['PATCH', 'POST', 'GET', 'DELETE', 'PUT']);
  res.setHeader('Access-Control-Allow-Headers', ['Content-Type']);
  res.setHeader('Access-Control-Expose-Headers', ['Content-Type']);
  next();
});

mongooseConnection.connect();

require('./router')(app);

app.listen(3000);

module.exports = app;
