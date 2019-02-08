// @flow

import { KEY_PRESS, KeyPressAction } from '../../constants/actionTypes';

const initState: KeyPressState = {
  value: KeyboardEvent
};

export default (state: KeyPressState = initState, action: KeyPressAction) => {
  switch (action.type) {
    case KEY_PRESS:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};
