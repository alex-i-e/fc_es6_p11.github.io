// @flow

import { BlogType } from '../components/types/blogTypes';
import { ADD_NEW_BLOG, REMOVE_BLOG } from '../constants/actionTypes';

export function addNewBlog(newBlog: BlogType) {
  return {
    type: ADD_NEW_BLOG,
    payload: { value: newBlog }
  };
}

export function removeBlog(id: string) {
  return {
    type: REMOVE_BLOG,
    payload: { value: id }
  };
}
