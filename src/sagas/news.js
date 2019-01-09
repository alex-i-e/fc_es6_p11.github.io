import {all, call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import axios from 'axios';
import {NEWS_FETCH_REQUESTED, NEWS_FETCH_ING, NEWS_FETCH_SUCCEEDED, NEWS_FETCH_FAILED} from '../constants/actionTypes';

const NEWS_API = 'https://newsapi.org/v2';
const TOP_HEADLINES_API = `${NEWS_API}/top-headlines`;
const API_KEY = '51567f5e32f747b48f1ec3620f0c1f0a';

function* newsWorker(action) {
    try {
        yield put({type: NEWS_FETCH_ING});
        const news = yield call(axios.get, `${TOP_HEADLINES_API}?country=${action.payload.country}`, {
            headers: {
                'X-Api-Key': API_KEY
            }
        });
        yield put({type: NEWS_FETCH_SUCCEEDED, payload: news.data});
    } catch (e) {
        yield put({type: NEWS_FETCH_FAILED, message: e.message});
    }
}

function* newsWatcher() {
    yield takeLatest(NEWS_FETCH_REQUESTED, newsWorker);
}

export default function* newsSaga() {
    yield all([
        newsWatcher(),
    ]);
}