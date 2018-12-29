// import 'rxjs';
import {combineEpics} from 'redux-observable';
// import {ajax} from 'rxjs/observable/dom/ajax';
import {mergeMap, flatMap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import axios from 'axios';

const NEWS_API = 'https://newsapi.org/v2';
const TOP_HEADLINES_API = `${NEWS_API}/top-headlines`;
const API_KEY = '51567f5e32f747b48f1ec3620f0c1f0a';

const newsEpic = action$ =>
    action$
        .ofType('EPIC_NEWS_FETCH_REQUESTED')
        .flatMap((action) => axios.get(
            `${TOP_HEADLINES_API}?country=${action.payload.country}`,
            {
                headers: {
                    'X-Api-Key': API_KEY
                }
            }))
        .map(news => ({type: 'EPIC_NEWS_FETCH_SUCCEEDED', payload: news.data}));

export default newsEpic;