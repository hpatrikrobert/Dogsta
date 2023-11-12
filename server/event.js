'use strict';
const mongoose = require('./db')

const schema = new mongoose.Schema({
  title: String,
  comment: Array, 
  date: String,
  img:String,
  likes: Number,
  funny: Number,
  fav: Boolean,
  clicked: Boolean
});


module.exports = mongoose.model('Post', schema);