import createHistory from 'history/createBrowserHistory';
import createMemoryHistory from 'history/createMemoryHistory';
import { routerMiddleware } from 'react-router-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { createLogger } from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable';
import createSagaMiddleware from 'redux-saga';
import newsEpic from './epics/news';
// import {loadState} from './localStorageState';
// import {localStorageMiddleware, promiseMiddleware} from './middleware/middleware';
import { crashReporter } from './middleware/apiPerformance';
import reducer from './reducers';
import newsSaga from './sagas/news';

const sagaMiddleware = createSagaMiddleware();
const epicMiddleware = createEpicMiddleware();

export const history =
  typeof document !== 'undefined' // `${process.env.BROWSER}` !== 'false'
    ? createHistory() // createHistory()
    : createMemoryHistory();
 
// Build the middleware for intercepting and dispatching navigation actions
const myRouterMiddleware = routerMiddleware(history);

const getMiddleware = () => {
  if (process.env.NODE_ENV === 'production') {
    return applyMiddleware(
      myRouterMiddleware,
      // promiseMiddleware,
      // localStorageMiddleware,
      sagaMiddleware,
      epicMiddleware
    );
  }

  // Enable additional logging in non-production environments.
  return applyMiddleware(
    myRouterMiddleware,
    // promiseMiddleware,
    // localStorageMiddleware,
    sagaMiddleware,
    epicMiddleware,
    crashReporter,
    createLogger()
  );
};

// const persistedState = (typeof document !== 'undefined') // TODO : check why does not work env.BROWSER
//     ? loadState()
//     : null;

if (typeof window === 'undefined') {
  global.window = {};
}

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__;

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__;

export const store = createStore(
  reducer,
  preloadedState,
  // persistedState,
  composeWithDevTools(getMiddleware())
);

// then run the saga
sagaMiddleware.run(newsSaga);
// then run the epic
epicMiddleware.run(newsEpic);
