import { EPIC_NEWS } from './../../constants/actionTypes';
import { EpicNewsAction } from '../../constants/actionTypes';

type NewsPayload = {};

export interface EpicNewsState extends NewsPayload {
  loading: boolean;
}

const initState = {
  loading: false
};

export default (state: EpicNewsState = initState, action: EpicNewsAction): EpicNewsState => {
  switch (action.type) {
    case EPIC_NEWS.EPIC_NEWS_FETCH_REQUESTED:
      return {
        ...state,
        loading: true
      };
    case EPIC_NEWS.EPIC_NEWS_FETCH_ING:
      return {
        ...state,
        ...action.payload,
        loading: true
      };
    case EPIC_NEWS.EPIC_NEWS_FETCH_SUCCEEDED:
      return {
        ...state,
        ...action.payload,
        loading: false
      };
    case EPIC_NEWS.EPIC_NEWS_FETCH_FAILED:
      return {
        ...state,
        ...action.payload,
        loading: false
      };
    default:
      return state;
  }
};
