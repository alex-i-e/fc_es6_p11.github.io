// @flow

import { NEWS_FETCH_REQUESTED, EPIC_NEWS_FETCH_REQUESTED } from '../constants/actionTypes';

export function fetchNewsViaSaga(country: string) {
  return {
    type: NEWS_FETCH_REQUESTED,
    payload: { country }
  };
}

export function fetchNewsViaEpic(country: string) {
  return {
    type: EPIC_NEWS_FETCH_REQUESTED,
    payload: { country }
  };
}
