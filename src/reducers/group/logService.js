import {LOG_ERROR} from '../../constants/actionTypes';

const initState = {
    logList: [],
};

export default (state, action) => {
    switch (action.type) {
        case LOG_ERROR:
            return {
                ...state,
                logList: [action.payload.item],
            };
        default:
            return state;
    }
};
