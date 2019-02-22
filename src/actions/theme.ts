// @flow

import { CHANGE_THEME } from '../constants/actionTypes';

export function changeTheme(value: string) {
  return { type: CHANGE_THEME, payload: { value } };
}
