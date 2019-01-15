import {ADD_NEW_BLOG, BLOG_CREATOR_TOGGLE, REMOVE_BLOG} from '../constants/actionTypes';

export function addNewBlog(newBlog) {
    return {
        type: ADD_NEW_BLOG,
        value: newBlog
    };
}

export function removeBlog(index) {
    return {
        type: REMOVE_BLOG,
        value: index
    };
}

export function toggleBlogCreator(flag) {
    return {
        type: BLOG_CREATOR_TOGGLE,
        value: flag
    };
}