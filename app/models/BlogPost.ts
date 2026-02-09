import { models, Schema, model } from "mongoose"

const BlogPostSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  readingTime: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }
})


const BlogPost = models.BlogPost || model("BlogPost", BlogPostSchema);


export default BlogPost
