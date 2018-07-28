const model = require('./model')
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/Blog", { useNewUrlParser: true })

const Blog = model.Blog

Blog.create({
  title: "Test",
  image: "https://upload.wikimedia.org/wikipedia/commons/2/20/Laubengang_Bad_Br%C3%BCckenau.JPG",
  body: "blog body"
})