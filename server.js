
// dependencies
const express = require('express');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');

// routes
const router = express.Router();

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
app.use(router);

// database
const db = process.env.MONGO_URI || 'mongodb://localhost/news-scraper-db';

// connect to mongo
mongoose
  .connect(
    db,
    { useNewUrlParser: true })
  .then(() => console.log('Mongo Connected...'))
  .catch(err => console.log(err));

// listener
app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});