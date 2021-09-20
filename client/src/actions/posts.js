import * as api from '../api';

// A normal action, which cannot be async
// const getPosts = () => {
//   const action = { type: 'FETCH_ALL', payload: [] };

//   return action;
// };

// Action Creators, thunk
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    dispatch({ type: 'FETCH_ALL', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
