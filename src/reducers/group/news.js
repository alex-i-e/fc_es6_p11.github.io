// @flow

import {Action} from 'redux';
import {
    NEWS_FETCH_REQUESTED,
    NEWS_FETCH_ING,
    NEWS_FETCH_SUCCEEDED,
    NEWS_FETCH_FAILED,
    NEWS_HOVER_IN
} from '../../constants/actionTypes';

type State = {
    loading: boolean,
    hoverIn: boolean | null,
    articles?: Array<any>,
    status?: string,
    totalResults?: number
}

const initState = {
    loading: false,
    hoverIn: null
};

export default (state: State = initState, action: Action): State => {
    switch (action.type) {
        case NEWS_FETCH_REQUESTED:
            return {
                ...state,
                loading: true
            };
        case NEWS_FETCH_ING:
            return {
                ...state,
                ...action.payload,
                loading: true
            };
        case NEWS_FETCH_SUCCEEDED:
            return {
                ...state,
                ...action.payload,
                loading: false
            };
        case NEWS_FETCH_FAILED:
            return {
                ...state,
                ...action.payload,
                loading: false
            };
        case NEWS_HOVER_IN:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};
