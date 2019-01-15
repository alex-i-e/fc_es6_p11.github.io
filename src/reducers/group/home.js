// @flow
import type {Action} from '../../constants/actionTypes';
import {ADD_NEW_BLOG, HOME_PAGE_LOADED, REMOVE_BLOG} from '../../constants/actionTypes';
import BlogListMock from './blogListMock.json';
import type {BlogType} from '../../components/types/blogTypes';

type State = {
    +blogList: Array<BlogType>
}

const initState = {
    blogList: BlogListMock.blogList || [],
};

export default (state: State = initState, action: Action): State => {
    switch (action.type) {
        case HOME_PAGE_LOADED:
            return {
                ...state,
                blogList: action.value,
            };
        case ADD_NEW_BLOG:
            return {
                ...state,
                blogList: [
                    action.value,
                    ...state.blogList,
                ],
            };
        case REMOVE_BLOG:
            const index = action.value;
            state.blogList.splice(index, 1);

            return {
                ...state,
                blogList: [
                    ...state.blogList,
                ],
            };
        default:
            return state;
    }
};
