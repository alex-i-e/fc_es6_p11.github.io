// @flow

import { BLOG_FILTER_WAS_CHANGED } from '../constants/actionTypes';

export function filterNewsByTypeAndValue(filterType: string, value: string) {
  return { type: BLOG_FILTER_WAS_CHANGED, payload: { value, filterType } };
}
