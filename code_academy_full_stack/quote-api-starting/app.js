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


// The API should have a POST /api/quotes route for adding new quotes to the data. 
// New quotes will be passed in a query string with two properties: quote with the quote text itself, 
// and person with the person who is credited with saying the quote.

// This route should verify that both properties exist in the request query string and send a 400 response if it does not.
// If all is well, this route handler should add the new quote object to the data array and send back a response with the following shape:
// {
//   quote: {/* new quote object */}
// }

app.post('/api/quotes', (req, res, next) => {
  const queryParams = req.query;
  console.log("queryParams", queryParams);
});

// export app for use in main.js and for testing
module.exports = {
  app
};

