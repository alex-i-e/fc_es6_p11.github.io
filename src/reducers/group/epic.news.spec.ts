import configureStore from 'redux-mock-store';
import { fetchNewsViaEpic } from '../../actions/newsBlock';
import reducer, { GeneralStore } from '../../reducers';
import { EPIC_NEWS } from '../../constants/actionTypes';

describe('news.ts', () => {
  const middlewares: any = [];
  const mockStore = configureStore(middlewares);
  let store: any;
  let initState = {
    loading: false
  };

  beforeEach(() => {
    store = mockStore(initState);
  });
  afterEach(() => {
    store.clearActions && store.clearActions();
  });

  describe('actions', () => {
    it('should dispatch action REQUESTED', () => {
      const action = { type: EPIC_NEWS.EPIC_NEWS_FETCH_REQUESTED, payload: { loading: true } };
      store.dispatch(action);

      const actions = store.getActions();
      expect(actions).toEqual([action]);
    });

    it('should dispatch action ING', () => {
      const action = { type: EPIC_NEWS.EPIC_NEWS_FETCH_ING, payload: { loading: true } };
      store.dispatch(action);

      const actions = store.getActions();
      expect(actions).toEqual([action]);
    });

    it('should dispatch action SUCCEEDED', () => {
      const action = {
        type: EPIC_NEWS.EPIC_NEWS_FETCH_SUCCEEDED,
        payload: {
          articles: ['articel1', 'articel2'],
          status: 'OK',
          totalResults: '2',
          loading: false
        }
      };
      store.dispatch(action);

      const actions = store.getActions();
      expect(actions).toEqual([action]);
    });

    it('should dispatch action FAILED', () => {
      const action = {
        type: EPIC_NEWS.EPIC_NEWS_FETCH_FAILED,
        payload: {
          loading: false,
          status: 'ERROR'
        }
      };
      store.dispatch(action);

      const actions = store.getActions();
      expect(actions).toEqual([action]);
    });

    it('should return proper action from fetchNewsViaEpic', () => {
      const country = 'us';
      expect(fetchNewsViaEpic(country)).toEqual({
        type: EPIC_NEWS.EPIC_NEWS_FETCH_REQUESTED,
        payload: {
          country
        }
      });
    });
  });

  describe('reducers', () => {
    it('should setup proper state before dispatch', () => {
      expect(store.getState()).toEqual(initState);
    });

    it('should setup proper state when dispatch action REQUESTED', () => {
      const action = { type: EPIC_NEWS.EPIC_NEWS_FETCH_REQUESTED };

      expect(
        reducer(
          {
            epicNews: initState
          } as GeneralStore,
          action
        ).epicNews
      ).toEqual({
        loading: true
      });
    });

    it('should setup proper state when dispatch action ING', () => {
      const action = { type: EPIC_NEWS.EPIC_NEWS_FETCH_ING };

      expect(
        reducer(
          {
            epicNews: initState
          } as GeneralStore,
          action
        ).epicNews
      ).toEqual({
        loading: true
      });
    });

    it('should setup proper state when dispatch action SUCCEEDED', () => {
      const action = { type: EPIC_NEWS.EPIC_NEWS_FETCH_SUCCEEDED, payload: { articles: ['some data'] } };

      expect(
        reducer(
          {
            epicNews: initState
          } as GeneralStore,
          action
        ).epicNews
      ).toEqual({
        loading: false,
        articles: ['some data']
      });
    });

    it('should setup proper state when dispatch action FAILED', () => {
      const action = { type: EPIC_NEWS.EPIC_NEWS_FETCH_FAILED, payload: { status: 'ERROR' } };

      expect(
        reducer(
          {
            epicNews: initState
          } as GeneralStore,
          action
        ).epicNews
      ).toEqual({
        loading: false,
        status: 'ERROR'
      });
    });
  });
});
