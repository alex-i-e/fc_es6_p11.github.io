import { EpicNewsAction, EPIC_NEWS } from './../constants/actionTypes';
import axios from 'axios';
import { ActionsObservable, combineEpics, ofType } from 'redux-observable';
import 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { apiKey, newsApi } from '../config.json';

const TOP_HEADLINES_API = `${newsApi}/top-headlines`;

const newsEpic = (action$: ActionsObservable<EpicNewsAction>) =>
  action$.pipe(
    ofType(EPIC_NEWS.EPIC_NEWS_FETCH_REQUESTED),
    mergeMap((action: EpicNewsAction) =>
      axios.get(`${TOP_HEADLINES_API}?country=${action.payload.country}`, {
        headers: {
          'X-Api-Key': apiKey
        }
      })
    ),
    map((news: { data: any }) => ({ type: EPIC_NEWS.EPIC_NEWS_FETCH_SUCCEEDED, payload: news.data }))
  );

export default combineEpics(newsEpic);
