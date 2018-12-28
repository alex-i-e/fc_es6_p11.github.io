// @flow
const initState = {
    loading: false
};

export default (state: State = initState, action): State => {
    switch (action.type) {
        case 'NEWS_FETCH_REQUESTED':
            return {
                ...state,
                loading: true
            };
        case 'NEWS_FETCH_ING':
            return {
                ...state,
                ...action.payload,
                loading: true
            };
        case 'NEWS_FETCH_SUCCEEDED':
            return {
                ...state,
                ...action.payload,
                loading: false
            };
        case 'NEWS_FETCH_FAILED':
            return {
                ...state,
                ...action.payload,
                loading: false
            };
        default:
            return state;
    }
};
