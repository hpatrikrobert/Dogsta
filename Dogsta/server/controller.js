'use strict';

const Post = require('./event');

exports.getAll = async (req, res) => {
  try {
    const events = await Post.find();
    res.status(200)
    res.send(events)
  } catch (e) {
    res.status(500);
  }
};

exports.post = async (req, res) => {
  try {
    const newPost = new Post ({
      title: req.body.title,
  comment: req.body.comment, 
  date: req.body.date,
  img: req.body.img,
  likes: req.body.likes,
  funny: req.body.funny,
  fav: req.body.fav,
  clicked: req.body.clicked
 
    })

    newPost.save();
    res.status(201);
    res.send(newPost)
  } catch (e) {
    res.status(500);
  }
};
exports.changePost = async (req, res) => {
  
  const id = req.body.id
  const atrr= {
    comment: req.body.comment, 
    likes: req.body.likes,
    funny: req.body.funny,
    fav: req.body.fav,
    clicked: req.body.clicked
  }
  try {
    await Post.findByIdAndUpdate(id, 
      atrr
    )
    res.status(201);
  } catch (e) {
    res.status(500);
  }
};





