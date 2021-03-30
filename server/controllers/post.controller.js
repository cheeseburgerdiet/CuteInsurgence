const Post = require('../models/post.model');

const showAllPosts = (req, res) => {
  // Get all Posts
  Post.find({})
    .then((allPosts) => {
      console.log(allPosts);
      res.json(allPosts);
    })
    .catch((err) => {
      console.log(`Error in showAllPosts: ${err}`);
      res.status(400).json(err);
    });
};

const createPost = (req, res) => {
  // Create a new Post
  console.log(req.body);
  Post.create(req.body)
    .then((newPost) => {
      console.log(newPost);
      res.json(newPost);
    })
    .catch((err) => {
      console.log(`Error in createPost: ${err}`);
      res.status(400).json(err);
    });
};

const showOnePost = (req, res) => {
  // View single Post
  console.log(req.params.id);
  Post.findById(req.params.id)
    .then((singlePost) => {
      console.log(singlePost);
      res.json(singlePost);
    })
    .catch((err) => {
      console.log(`Error in showOnePost: ${err}`);
      res.status(400).json(err);
    });
};

const showAllByCategory = (req, res) => {
  // View all Posts by category
  console.log(req.params.category);
  Post.find({ category: req.params.category })
    .then((PostsByCategory) => {
      console.log(PostsByCategory);
      res.json(PostsByCategory);
    })
    .catch((err) => {
      console.log(`Error in showAllByCategory: ${err}`);
      res.status(400).json(err);
    });
};

const updatePost = (req, res) => {
  // Update Post
  console.log(req.params.id);
  console.log(req.body);
  Post.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedPost) => {
      console.log(updatedPost);
      res.json(updatedPost);
    })
    .catch((err) => {
      console.log(`Error in updatePost: ${err}`);
      res.status(400).json(err);
    });
};

const deletePost = (req, res) => {
  // Delete Post
  console.log(req.params.id);
  Post.findByIdAndDelete(req.params.id)
    .then((deletedPost) => {
      console.log(deletedPost);
      res.json(deletedPost);
    })
    .catch((err) => {
      console.log(`Error in deletePost`);
      res.status(400).json(err);
    });
};

module.exports = {
  showAllPosts,
  createPost,
  showOnePost,
  showAllByCategory,
  updatePost,
  deletePost,
};
