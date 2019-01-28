import configureStore from 'redux-mock-store';
import {CHANGE_THEME} from '../../constants/actionTypes';

describe('theme actions', () => {
    const middlewares = [];
    const mockStore = configureStore(middlewares);
    let store;

    beforeEach(() => {
        store = mockStore({
            value: {
                foreground: '#ffffff',
                background: '#222222',
            },
        });
    });
    afterEach(() => {
        store.clearActions && store.clearActions();
    });

    it('should dispatch action CHANGE_THEME', () => {
        const action = {
            type: CHANGE_THEME, payload: {
                value: {
                    foreground: '#000000',
                    background: '#eeeeee',
                }
            }
        };
        store.dispatch(action);

        const actions = store.getActions();
        expect(actions).toEqual([action]);
    });
});
