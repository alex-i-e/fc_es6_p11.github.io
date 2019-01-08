import {ADD_NEW_BLOG, BLOG_CREATOR_TOGGLE} from '../constants/actionTypes';

export function addNewBlog(newBlog) {
    return {
        type: ADD_NEW_BLOG,
        value: newBlog
    };
}

export function toggleBlogCreator(flag) {
    return {
        type: BLOG_CREATOR_TOGGLE,
        value: flag
    };
}