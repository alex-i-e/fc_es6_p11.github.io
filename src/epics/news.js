import axios from 'axios';

import 'rxjs';
import {combineEpics} from 'redux-observable';
// import { fetchUserSuccess, fetchUserFailed } from './actions';
// import {ajax} from 'rxjs/observable/dom/ajax';
import {Observable} from 'rxjs';
import {map, flatMap} from 'rxjs/operators';

const NEWS_API = 'https://newsapi.org/v2';
const TOP_HEADLINES_API = `${NEWS_API}/top-headlines`;
const API_KEY = '51567f5e32f747b48f1ec3620f0c1f0a';

// export const fetchUser = actions$ =>
//     actions$
//         .ofType(FETCH_USER)
//         .mergeMap(action =>
//             ajax.getJSON(`https://api.github.com/users/${action.payload.username}`)
//                 .map(user => fetchUserSuccess(user))
//                 .takeUntil(actions$.ofType(FETCH_USER))
//                 .retry(2)
//                 .catch(error => Observable.of(fetchUserFailed()))
//         );

const newsEpic = action$ =>
    action$
        .ofType('EPIC_NEWS_FETCH_REQUESTED')
        // .mergeMap((action) => axios.get(
        //     `${TOP_HEADLINES_API}?country=${action.payload.country}`,
        //     {
        //         headers: {
        //             'X-Api-Key': API_KEY
        //         }
        //     }))
        .map(news => ({type: 'EPIC_NEWS_FETCH_SUCCEEDED', payload: news.data}));

export default combineEpics(
    newsEpic
);