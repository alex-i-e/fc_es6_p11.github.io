// @flow
const initState = {
    loading: false
};

export default (state: State = initState, action): State => {
    switch (action.type) {
        case 'EPIC_USER_FETCH_REQUESTED':
            return {
                ...state,
                loading: true
            };
        case 'EPIC_NEWS_FETCH_ING':
            return {
                ...state,
                ...action.payload,
                loading: true
            };
        case 'EPIC_NEWS_FETCH_SUCCEEDED':
            return {
                ...state,
                ...action.payload,
                loading: false
            };
        case 'EPIC_NEWS_FETCH_FAILED':
            return {
                ...state,
                ...action.payload,
                loading: false
            };
        default:
            return state;
    }
};
