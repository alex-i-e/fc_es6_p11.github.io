import {ADD_NEW_BLOG, REMOVE_BLOG} from '../constants/actionTypes';

export function addNewBlog(newBlog) {
    return {
        type: ADD_NEW_BLOG,
        payload: {value: newBlog}
    };
}

export function removeBlog(id) {
    return {
        type: REMOVE_BLOG,
        payload: {value: id}
    };
}