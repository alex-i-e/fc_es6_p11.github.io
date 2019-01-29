import home from './group/home';
import filter from './group/filter';
import logService from './group/logService';
import news from './group/news';
import epicNews from './group/epic.news';
import theme from './group/theme';

import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

export default combineReducers({
    home,
    filter,
    news,
    epicNews,
    theme,
    logService,
    router: routerReducer,
});
