// @flow

import { KEY_PRESS } from '../constants/actionTypes';

export function changeKeyPressValue(value: KeyboardEvent) {
  return { type: KEY_PRESS, payload: { value } };
}
