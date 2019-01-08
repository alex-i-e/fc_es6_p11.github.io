import axios from 'axios';

import 'rxjs';
import {combineEpics} from 'redux-observable';
import {ofType} from 'redux-observable';
import {map, mergeMap} from 'rxjs/operators';
import {EPIC_NEWS_FETCH_REQUESTED, EPIC_NEWS_FETCH_SUCCEEDED} from '../constants/actionTypes';

const NEWS_API = 'https://newsapi.org/v2';
const TOP_HEADLINES_API = `${NEWS_API}/top-headlines`;
const API_KEY = '51567f5e32f747b48f1ec3620f0c1f0a';

const newsEpic = action$ => action$.pipe(
    ofType(EPIC_NEWS_FETCH_REQUESTED),
    mergeMap((action) => axios.get(
        `${TOP_HEADLINES_API}?country=${action.payload.country}`,
        {
            headers: {
                'X-Api-Key': API_KEY
            }
        })),
    map(news => ({type: EPIC_NEWS_FETCH_SUCCEEDED, payload: news.data}))
);

export default combineEpics(
    newsEpic
);