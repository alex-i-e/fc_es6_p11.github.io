import { routerReducer, RouterState } from 'react-router-redux';

import { combineReducers, Reducer } from 'redux';
import epicNews, { EpicNewsState } from './group/epic.news';
import filter, { FilterState } from './group/filter';
import home, { HomeState } from './group/home';
import logService, { LogState } from './group/logService';
import news, { NewsState } from './group/news';
import theme, { ThemeState } from './group/theme';

export type GeneralStore = {
  home: HomeState;
  filter: FilterState;
  news: NewsState;
  epicNews: EpicNewsState;
  theme: ThemeState;
  logService: LogState;
  router: RouterState;
};

export default combineReducers({
  home,
  filter,
  news,
  epicNews,
  theme,
  logService,
  router: routerReducer
}) as Reducer<GeneralStore>;
