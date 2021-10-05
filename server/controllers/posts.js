import Post from '../models/post.js';
import mongoose from 'mongoose';

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

export const updatePost = async (req, res) => {
  const { id } = req.params;
  const post = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send('No post with that id found.');

  const updatedPost = await Post.findByIdAndUpdate(id, post, { new: true });
  res.status(200).json(updatedPost);
};
