import configureStore from 'redux-mock-store';
import {BLOG_FILTER_WAS_CHANGED} from '../../constants/actionTypes';

describe('filter actions', () => {
    const middlewares = [];
    const mockStore = configureStore(middlewares);
    let store;

    beforeEach(() => {
        store = mockStore({
            value: '',
            type: 'author',
        });
    });
    afterEach(() => {
        store.clearActions && store.clearActions();
    });

    it('should dispatch action BLOG_FILTER_WAS_CHANGED', () => {
        const filterByAuthor = 'Some new family';
        const action = {type: BLOG_FILTER_WAS_CHANGED, payload: {value: filterByAuthor, type: 'author'}};
        store.dispatch(action);

        const actions = store.getActions();
        expect(actions).toEqual([action]);
    });
});
