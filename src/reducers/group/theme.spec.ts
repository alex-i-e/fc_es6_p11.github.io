import configureStore from 'redux-mock-store';
import { changeTheme } from '../../actions/theme';
import { CHANGE_THEME } from '../../constants/actionTypes';
import reducer from '../../reducers';

describe('theme', () => {
  const middlewares: any[] = [];
  const mockStore = configureStore(middlewares);
  let store: any;
  let initState = {
    value: {
      foreground: '#ffffff',
      background: '#222222'
    }
  };

  beforeEach(() => {
    store = mockStore(initState);
  });
  afterEach(() => {
    store.clearActions && store.clearActions();
  });

  describe('actions', () => {
    it('should dispatch action CHANGE_THEME', () => {
      const action = {
        type: CHANGE_THEME,
        payload: {
          value: {
            foreground: '#000000',
            background: '#eeeeee'
          }
        }
      };
      store.dispatch(action);

      const actions = store.getActions();
      expect(actions).toEqual([action]);
    });

    it('should return proper action from changeTheme', () => {
      const themeType = 'GREEN';
      expect(changeTheme(themeType)).toEqual({
        type: CHANGE_THEME,
        payload: {
          value: themeType
        }
      });
    });
  });

  describe('reducers', () => {
    it('should setup proper state before dispatch', () => {
      expect(store.getState()).toEqual(initState);
    });

    it('should setup proper state when dispatch action CHANGE_THEME', () => {
      const action = {
        type: CHANGE_THEME,
        payload: {
          value: {
            foreground: '#ffffff',
            background: '#222222'
          }
        }
      };

      expect(
          (reducer(
              {
                theme: initState
              },
              action
          ) as any).theme
      ).toEqual({
        value: {
          foreground: '#ffffff',
          background: '#222222'
        }
      });
    });
  });
});
