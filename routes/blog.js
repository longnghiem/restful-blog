const express = require('express');
const router = express.Router()
 
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

router.get('/:id/edit', (req, res) => {
  const id = req.params.id;
  Blog.findOne({_id : id}, (err, blog)=>{
    if (err) return handleError(err)
    else {
      res.render('edit', {blog})
    }
  })
})

router.put('/:id/', (req,res)=>{
  const id = req.params.id;
  Blog.findByIdAndUpdate(id, req.body.blog, err => {
    if (err) return handleError(err)
    else {
      res.redirect('/blog/' + id)
    }
  } )
})

module.exports = router;