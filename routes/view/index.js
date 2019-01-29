const router = require('express').Router();
const db = require('../../models');

// render homepage
router.get('/', (req, res) => {
  db.Headline.find({ saved: false })
  .sort({ date: -1 })
  .then((dbArticles) => {
    res.render('home', { articles: dbArticles });
  });
});

// render saved page
router.get('/saved', (req, res) => {
  db.Headline.find({ saved: true })
  .sort({ date: -1 })
  .then((dbArticles) => {
    res.render('saved', { articles: dbArticles });
  });
});

module.exports = router;