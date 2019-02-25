// @flow

import { BLOG_FILTER_WAS_CHANGED, FilterAction } from '../../constants/actionTypes';

export type FilterState = {
  value: string;
  type: string;
};

const initState = {
  value: '',
  type: 'author'
};

export default (state: FilterState = initState, action: FilterAction): FilterState => {
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
