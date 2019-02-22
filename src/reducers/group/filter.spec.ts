import configureStore from 'redux-mock-store';
import { filterNewsByTypeAndValue } from '../../actions/filterSector';
import { BLOG_FILTER_WAS_CHANGED } from '../../constants/actionTypes';
import reducer from '../reducer';

describe('filter.ts', () => {
  const middlewares = [];
  const mockStore = configureStore(middlewares);
  let store;
  const initState = {
    value: '',
    type: 'author'
  };

  beforeEach(() => {
    store = mockStore(initState);
  });
  afterEach(() => {
    store.clearActions && store.clearActions();
  });

  describe('reducers', () => {
    it('should dispatch action BLOG_FILTER_WAS_CHANGED', () => {
      const action = {
        type: BLOG_FILTER_WAS_CHANGED,
        payload: {
          value: 'some value',
          type: 'author'
        }
      };

      expect(
        reducer(
          {
            filter: initState
          },
          action
        ).filter
      ).toEqual({
        value: 'some value',
        type: 'author'
      });
    });
  });

  describe('actions', () => {
    it('should dispatch action BLOG_FILTER_WAS_CHANGED', () => {
      const action = {
        type: BLOG_FILTER_WAS_CHANGED,
        payload: { value: 'Some new family', type: 'author' }
      };
      store.dispatch(action);

      const actions = store.getActions();
      expect(actions).toEqual([action]);
    });

    it('should return proper action from filterNewsByTypeAndValue', () => {
      expect(filterNewsByTypeAndValue('id', '123')).toEqual({
        type: BLOG_FILTER_WAS_CHANGED,
        payload: {
          filterType: 'id',
          value: '123'
        }
      });
    });
  });
});
