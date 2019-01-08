// @flow
import type {BlogType} from '../components/types/blogTypes';

export const HOME_PAGE_LOADED = 'HOME_PAGE_LOADED';
export const FILTER_BY_AUTHOR_WAS_CHANGED = 'FILTER_BY_AUTHOR_WAS_CHANGED';

export const BLOG_CREATOR_TOGGLE = 'BLOG_CREATOR_TOGGLE';
export const ADD_NEW_BLOG = 'ADD_NEW_BLOG';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const REGISTER = 'REGISTER';

export const ASYNC_START = 'ASYNC_START';
export const ASYNC_END = 'ASYNC_END';

export const NEWS_FETCH_REQUESTED = 'NEWS_FETCH_REQUESTED';
export const NEWS_FETCH_ING = 'NEWS_FETCH_ING';
export const NEWS_FETCH_SUCCEEDED = 'NEWS_FETCH_SUCCEEDED';
export const NEWS_FETCH_FAILED = 'NEWS_FETCH_FAILED';

export const EPIC_NEWS_FETCH_REQUESTED = 'EPIC_NEWS_FETCH_REQUESTED';
export const EPIC_NEWS_FETCH_ING = 'EPIC_NEWS_FETCH_ING';
export const EPIC_NEWS_FETCH_SUCCEEDED = 'EPIC_NEWS_FETCH_SUCCEEDED';
export const EPIC_NEWS_FETCH_FAILED = 'EPIC_NEWS_FETCH_FAILED';

export type FilterByAuthorAction = { type: typeof FILTER_BY_AUTHOR_WAS_CHANGED, value: string };
export type AddNewBlogAction = { type: typeof ADD_NEW_BLOG, value: BlogType };

export type Action =
    | FilterByAuthorAction
    | AddNewBlogAction;
