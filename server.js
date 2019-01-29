
// dependencies
const express = require('express');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');

// routes
const routes = require('./routes');

// set port
const port = process.env.PORT || 3000;

// instatiate express
const app = express();

// parse requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// static data
app.use(express.static('public'));

// connect handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// route requests through middleware
app.use(routes);

// database
const mongoUri = process.env.MONGO_URI || 'mongodb://localhost/news-scraper-db';

// connect to mongo
mongoose.connect(mongoUri);

// listener
app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});