import home from './group/home';
import filters from './group/filters';
import blog from './group/blog';
import news from './group/news';
import epicNews from './group/epic.news';
import theme from './group/theme';

import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

export default combineReducers({
    home,
    filters,
    blog,
    news,
    epicNews,
    theme,
    router: routerReducer,
});
