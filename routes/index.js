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


router.get('/new', (req, res) => {
  res.render('new')
})

router.post("/", (req, res)=> {
  Blog.collection.insert(req.body.blog, err => {
    if (err) {
      res.render('new')
    } else {
      console.log('added 1 new blog.')
      res.redirect('/blogs')
    }
  })
})

module.exports = router;
