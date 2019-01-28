import configureStore from 'redux-mock-store';
import {
    NEWS_FETCH_FAILED,
    NEWS_FETCH_ING,
    NEWS_FETCH_REQUESTED,
    NEWS_FETCH_SUCCEEDED
} from '../../constants/actionTypes';
import reducer from '../reducer';

describe('news', () => {
    describe('reducers', () => {
        const middlewares = [];
        const mockStore = configureStore(middlewares);
        let store;
        let initState = {
            loading: false,
        };

        beforeEach(() => {
            store = mockStore(initState);
        });
        afterEach(() => {
            store.clearActions && store.clearActions();
        });

        it('should setup proper state before dispatch', () => {
            expect(store.getState()).toEqual(initState);
        });

        it('should setup proper state when dispatch action NEWS_FETCH_REQUESTED', () => {
            const action = {type: NEWS_FETCH_REQUESTED};

            expect(reducer({
                news: initState
            }, action).news).toEqual({
                loading: true,
            });
        });

        it('should setup proper state when dispatch action NEWS_FETCH_ING', () => {
            const action = {type: NEWS_FETCH_ING};

            expect(reducer({
                news: initState
            }, action).news).toEqual({
                loading: true,
            });
        });

        it('should setup proper state when dispatch action NEWS_FETCH_SUCCEEDED', () => {
            const action = {type: NEWS_FETCH_SUCCEEDED, payload: {articles: ['some data']}};

            expect(reducer({
                news: initState
            }, action).news).toEqual({
                loading: false,
                articles: ['some data']
            });
        });

        it('should setup proper state when dispatch action NEWS_FETCH_FAILED', () => {
            const action = {type: NEWS_FETCH_FAILED, payload: {status: 'ERROR'}};

            expect(reducer({
                news: initState
            }, action).news).toEqual({
                loading: false,
                status: 'ERROR'
            });
        });
    });
});