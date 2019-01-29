import configureStore from 'redux-mock-store';
import {logComponentStackToMyService} from '../../actions/logService';
import {LOG_ERROR} from '../../constants/actionTypes';
import reducer from '../reducer';
import logService from './logService';

describe('logService', () => {
    const middlewares = [];
    const mockStore = configureStore(middlewares);
    let store;
    let initState = {
        logList: [],
    };
    const error = {
        error: {
            value: 'TypeCheck'
        }
    };

    beforeEach(() => {
        store = mockStore(initState);
    });
    afterEach(() => {
        store.clearActions && store.clearActions();
    });

    describe('actions', () => {
        it('should dispatch action LOG_ERROR', () => {
            const action = {
                type: LOG_ERROR, payload: error
            };
            store.dispatch(action);

            const actions = store.getActions();
            expect(actions).toEqual([action]);
        });

        it('should return proper action from logComponentStackToMyService', () => {
            expect(logComponentStackToMyService(error))
                .toEqual({
                    type: LOG_ERROR,
                    payload: {
                        item: error
                    }
                });
        });
    });

    describe('reducers', () => {
        it('should setup proper state before dispatch', () => {
            expect(store.getState()).toEqual(initState);
        });

        it('should setup proper state when dispatch action LOG_ERROR', () => {
            const action = {
                type: LOG_ERROR, payload: {
                    item: error
                }
            };

            expect(reducer({
                logService: initState
            }, action).logService).toEqual({logList: [error]});
        });
    });
});
