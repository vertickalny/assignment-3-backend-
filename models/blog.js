// models/blog.js
const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: { type: String, required: [true, 'Please enter a title']},
    body: { type: String, required: [true, 'Please enter the body']},
    author: { type: String, required: [true,'Please enter the author']},
}, { timestamps: true });

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
