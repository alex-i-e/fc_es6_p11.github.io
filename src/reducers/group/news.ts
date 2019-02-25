import {
    NEWS_FETCH_FAILED,
    NEWS_FETCH_ING,
    NEWS_FETCH_REQUESTED,
    NEWS_FETCH_SUCCEEDED
} from '../../constants/actionTypes';

export type NewsState = {
    loading: boolean,
    articles?: Array<any>,
    status?: string,
    totalResults?: number
};

const initState = {
    loading: false
};

export default (state: NewsState = initState, action: any): NewsState => {
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
        default:
            return state;
    }
};
