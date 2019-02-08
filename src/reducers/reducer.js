import { routerReducer } from 'react-router-redux';

import { combineReducers } from 'redux';
import epicNews from './group/epic.news';
import filter from './group/filter';
import home from './group/home';
import logService from './group/logService';
import news from './group/news';
import theme from './group/theme';
import keyPress from './group/keyPress';

export default combineReducers({
  home,
  filter,
  news,
  epicNews,
  theme,
  keyPress,
  logService,
  router: routerReducer
});
