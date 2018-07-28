const express = require('express');
const router = express.Router();

const model = require("../model")
const Blog = model.Blog

/* GET home page. */
router.get('/', function(req, res, next) {
  Blog.find({}, (err, blogs) => {
    if (err) return handleError(err)
    else {
      res.render('index', { blogs });
    }
  })
});

module.exports = router;
