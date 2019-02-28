import { EPIC_NEWS } from './../constants/actionTypes';
import { NEWS_FETCH_REQUESTED, EpicNewsAction, EPIC_PAYLOAD, NEWS_COUNTRY } from '../constants/actionTypes';

export function fetchNewsViaSaga(country: string) {
  return {
    type: NEWS_FETCH_REQUESTED,
    payload: { country }
  };
}

export function fetchNewsViaEpic(country: NEWS_COUNTRY): EpicNewsAction {
  return {
    type: EPIC_NEWS.EPIC_NEWS_FETCH_REQUESTED,
    payload: { country }
  };
}
