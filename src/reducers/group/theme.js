import {CHANGE_THEME} from '../../constants/actionTypes';
import {themes} from '../../context/theme-context';

const initState = {
    value: themes.light // set default theme
};

export default (state = initState, action) => {
    switch (action.type) {
        case CHANGE_THEME:
            return {
                ...state,
                value: action.value
            };
        default:
            return state;
    }
};
