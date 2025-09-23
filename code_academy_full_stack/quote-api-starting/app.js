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

  // Extract the params
  const queryParams = req.query;

  // If there are no params, return all the quotes
  if (Object.keys(queryParams).length === 0) {
    res.send(quotes)
  // If there are params, filer to that persons quotes (will return empty array if they don't have quotes)
  } else {
    const personQuotes = quotes.filter(el => el.person === queryParams.person)
    res.send(personQuotes);
  }

})


app.post('/api/quotes', (req, res, next) => {

  if (req.query.person && req.query.quote) {
    quotes.push(
      { 
        person: req.query.person,
        quote: req.query.quote,
      }
    )
    res.send(
      { quote : quotes[quotes.length - 1] }
    )
  } else {
    res.status(400).send()
  }
});

// export app for use in main.js and for testing
module.exports = {
  app
};

