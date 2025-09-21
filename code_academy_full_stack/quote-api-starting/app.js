const express = require('express');
const cors = require('cors');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

app.use(cors());
app.use(express.static('public'));

app.get('/api/quotes/random', (req, res, next) => {

  const quoteIndex = Math.floor(Math.random() * quotes.length);
  res.send(quotes[quoteIndex]);

})
app.get('/api/quotes', (req, res, next) => {

  const queryParams = req.query
  console.log(queryParams);

  // need to check if there is a person param passed in or if there no params
  // If there are no params, return all the quotes
  // If there is a person param, Check to see if the person exists
    // If they exist, send back there results
    // If not, send back an empty array
  if (!req.params) {

  } else {
    console.log('No params');
  }

})

// export app for use in main.js and for testing
module.exports = {
  app
};

