// @flow

import type { FilterAction, FilterState } from '../../constants/actionTypes';
import { BLOG_FILTER_WAS_CHANGED } from '../../constants/actionTypes';

const initState = {
  value: '',
  type: 'author'
};

export default (state: FilterState = initState, action: FilterAction) => {
  switch (action.type) {
    case BLOG_FILTER_WAS_CHANGED:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};