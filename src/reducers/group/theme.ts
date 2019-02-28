import {CHANGE_THEME, ThemeAction} from '../../constants/actionTypes';
import { themes } from '../../context/theme-context';

export type ThemeValue = {
  foreground: string;
  background: string;
};

export type ThemeState = {
  value: ThemeValue;
};

const initState: ThemeState = {
  value: themes.light // set default theme
};

export default (state: ThemeState = initState, action: ThemeAction): ThemeState => {
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
