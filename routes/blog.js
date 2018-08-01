const express = require('express');
const router = express.Router()
 
const model = require('../model')
const Blog = model.Blog

router.get('/:id', (req, res)=> {
  const id = req.params.id;
  Blog.findOne({_id : id}, (err, blog)=> {
    if (err) {console.log(err)}
    else {
      res.render('blog', {blog})
    }
  })
})

router.get('/:id/edit', (req, res) => {
  const id = req.params.id;
  Blog.findOne({_id : id}, (err, blog)=>{
    if (err) {console.log(err)}
    else {
      res.render('edit', {blog})
    }
  })
})

router.put('/:id/', (req,res)=>{
  req.body.blog.body = req.sanitize(req.body.blog.body)
  const id = req.params.id;
  Blog.findByIdAndUpdate(id, req.body.blog, err => {
    if (err) {console.log(err)}
    else {
      res.redirect('/blog/' + id)
    }
  } )
})

router.delete('/:id', (req,res)=> {
  const id = req.params.id;
  Blog.findByIdAndRemove(id, err => {
    if (err) {console.log(err)}
    else {
      res.redirect('/blogs')
    }
  })
})

module.exports = router;