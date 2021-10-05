import express from 'express';

import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  likePost,
} from '../controllers/posts.js';
import catchAsync from '../utilities/catchAsync.js';

const router = express.Router();

router.get('/', catchAsync(getPosts));
router.post('/', catchAsync(createPost));
router.patch('/:id', catchAsync(updatePost));
router.delete('/:id', catchAsync(deletePost));
router.patch('/:id/like', catchAsync(likePost));

export default router;
