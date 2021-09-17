import Post from '../models/post.js';

export const getPosts = (req, res) => {
  res.send('Get posts');
};

export const createPost = (req, res) => {
  res.send('Create post');
};
