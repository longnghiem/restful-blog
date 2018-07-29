const express = require('express');
const router = express.Router();

const model = require('../model')
const Blog = model.Blog

router.get('/:id', (req, res)=> {
  const id = req.params.id;
  Blog.findOne({_id : id}, (err, blog)=> {
    if (err) return handleError(err)
    else {
      res.render('blog', {blog})
    }
  })
})

module.exports = router;