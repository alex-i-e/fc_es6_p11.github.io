// @flow
import type {Action} from '../../constants/actionTypes';
import {BLOG_FILTER_WAS_CHANGED} from '../../constants/actionTypes';

type State = {
    value: string,
    type: string,
}

const initState = {
    value: '',
    type: 'author',
};

export default (state: State = initState, action: Action): State => {
    switch (action.type) {
        case BLOG_FILTER_WAS_CHANGED:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};
