import React, { Fragment } from 'react';

import Post from './Post/Post';
import useStyles from './styles';

const Posts = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <h1>POSTS</h1>
      <Post />
      <Post />
    </Fragment>
  );
};

export default Posts;
