// @flow

import { CHANGE_THEME, ThemeAction, ThemeState } from '../../constants/actionTypes';
import { themes } from '../../context/theme-context';

const initState: ThemeState = {
  value: themes.light // set default theme
};

export default (state: ThemeState = initState, action: ThemeAction) => {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};
