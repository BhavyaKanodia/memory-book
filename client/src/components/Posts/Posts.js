import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

import Post from './Post/Post';
// import useStyles from './styles';

const Posts = () => {
  const posts = useSelector((state) => state.posts);

  console.log(posts);

  // const classes = useStyles();

  return (
    <Fragment>
      <h1>POSTS</h1>
      <Post />
      <Post />
    </Fragment>
  );
};

export default Posts;