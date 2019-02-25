import { lazy } from 'react';
import {
  EPIC_NEWS_FETCH_FAILED,
  EPIC_NEWS_FETCH_ING,
  EPIC_NEWS_FETCH_REQUESTED,
  EPIC_NEWS_FETCH_SUCCEEDED
} from '../../constants/actionTypes';

type NewsPayload = {};

export interface EpicNewsState extends NewsPayload {
  loading: boolean;
}

const initState = {
  loading: false
};

export default (state: EpicNewsState = initState, action: any): EpicNewsState => {
  switch (action.type) {
    case EPIC_NEWS_FETCH_REQUESTED:
      return {
        ...state,
        loading: true
      };
    case EPIC_NEWS_FETCH_ING:
      return {
        ...state,
        ...action.payload,
        loading: true
      };
    case EPIC_NEWS_FETCH_SUCCEEDED:
      return {
        ...state,
        ...action.payload,
        loading: false
      };
    case EPIC_NEWS_FETCH_FAILED:
      return {
        ...state,
        ...action.payload,
        loading: false
      };
    default:
      return state;
  }
};
