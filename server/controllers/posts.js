import Post from '../models/post.js';

export const getPosts = async (req, res) => {
  const posts = await Post.find();
  res.status(200).json(posts);
};

export const createPost = async (req, res) => {
  const post = req.body;

  const newPost = new Post(post);
  await newPost.save();
  res.status(201).json(newPost);
};
