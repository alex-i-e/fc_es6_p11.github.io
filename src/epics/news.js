import axios from 'axios';

import 'rxjs';
import {combineEpics} from 'redux-observable';
import {ofType} from 'redux-observable';
import {map, mergeMap} from 'rxjs/operators';
import {EPIC_NEWS_FETCH_REQUESTED, EPIC_NEWS_FETCH_SUCCEEDED} from '../constants/actionTypes';
import {newsApi, apiKey} from '../config';

const TOP_HEADLINES_API = `${newsApi}/top-headlines`;

const newsEpic = action$ => action$.pipe(
    ofType(EPIC_NEWS_FETCH_REQUESTED),
    mergeMap((action) => axios.get(
        `${TOP_HEADLINES_API}?country=${action.payload.country}`,
        {
            headers: {
                'X-Api-Key': apiKey
            }
        })),
    map(news => ({type: EPIC_NEWS_FETCH_SUCCEEDED, payload: news.data}))
);

export default combineEpics(
    newsEpic
);