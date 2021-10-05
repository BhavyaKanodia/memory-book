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
    return res.status(404).send('No post with that ID found.');

  const updatedPost = await Post.findByIdAndUpdate(id, post, { new: true });
  res.status(200).json(updatedPost);
};

export const deletePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send('No post with that ID found');
  }

  await Post.findByIdAndDelete(id);
  res.status(200).json({ message: 'Post deleted successfully' });
};

export const likePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send('No post with that ID found');
  }

  const post = await Post.findById(id);
  const updatedPost = await Post.findByIdAndUpdate(
    id,
    { likeCount: post.likeCount + 1 },
    { new: true }
  );
  res.status(200).json(updatedPost);
};
