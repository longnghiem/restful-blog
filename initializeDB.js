const model = require('./model')
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/Blog", { useNewUrlParser: true })

const Blog = model.Blog

const firstBlog = {
  title: "First Blog",
  image: "https://media.istockphoto.com/photos/philosophy-dictionary-definition-highlighted-picture-id651638624",
  body: "Randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free "
}

Blog.collection.insert(firstBlog, err => {
  if (err) return handleError(err)
    else {
      console.log('added 1 new blog.')
    }
})