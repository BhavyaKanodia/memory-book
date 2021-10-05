import express from 'express';

import { getPosts, createPost, updatePost } from '../controllers/posts.js';
import catchAsync from '../utilities/catchAsync.js';

const router = express.Router();

router.get('/', catchAsync(getPosts));
router.post('/', catchAsync(createPost));
router.patch('/:id', catchAsync(updatePost));

export default router;
