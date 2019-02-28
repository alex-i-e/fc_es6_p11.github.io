import { ThemeValue } from './../reducers/group/theme';
import { ThemeAction } from './../constants/actionTypes';
// @flow

import { CHANGE_THEME } from '../constants/actionTypes';

export function changeTheme(value: ThemeValue): ThemeAction {
  return { type: CHANGE_THEME, payload: { value } };
}
