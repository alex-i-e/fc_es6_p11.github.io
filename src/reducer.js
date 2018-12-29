import home from './reducers/home';
import filters from './reducers/filters';
import blog from './reducers/blog';
import news from './reducers/news';
import epicNews from './reducers/epic.news';

import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

export default combineReducers({
    home,
    filters,
    blog,
    news,
    epicNews,
    router: routerReducer,
});
