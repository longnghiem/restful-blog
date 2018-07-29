const model = require('./model')
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/Blog", { useNewUrlParser: true })

const Blog = model.Blog

const firstBlog = {
  title: "Test",
  image: "https://media.istockphoto.com/photos/philosophy-dictionary-definition-highlighted-picture-id651638624",
  body: "blog body"
}

Blog.collection.insert(firstBlog, err => {
  if (err) return handleError(err)
    else {
      console.log('added 1 new blog.')
    }
})