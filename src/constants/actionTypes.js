// @flow
import type {BlogType} from '../components/types/blogTypes';

export const HOME_PAGE_LOADED = 'HOME_PAGE_LOADED';
export const BLOG_FILTER_WAS_CHANGED = 'BLOG_FILTER_WAS_CHANGED';

export const ADD_NEW_BLOG = 'ADD_NEW_BLOG';
export const REMOVE_BLOG = 'REMOVE_BLOG';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const REGISTER = 'REGISTER';

export const ASYNC_START = 'ASYNC_START';
export const ASYNC_END = 'ASYNC_END';

export const NEWS_FETCH_REQUESTED = 'NEWS_FETCH_REQUESTED';
export const NEWS_FETCH_ING = 'NEWS_FETCH_ING';
export const NEWS_FETCH_SUCCEEDED = 'NEWS_FETCH_SUCCEEDED';
export const NEWS_FETCH_FAILED = 'NEWS_FETCH_FAILED';
export const NEWS_HOVER_IN = 'NEWS_HOVER_IN';

export const EPIC_NEWS_FETCH_REQUESTED = 'EPIC_NEWS_FETCH_REQUESTED';
export const EPIC_NEWS_FETCH_ING = 'EPIC_NEWS_FETCH_ING';
export const EPIC_NEWS_FETCH_SUCCEEDED = 'EPIC_NEWS_FETCH_SUCCEEDED';
export const EPIC_NEWS_FETCH_FAILED = 'EPIC_NEWS_FETCH_FAILED';

export const CHANGE_THEME = 'CHANGE_THEME';

export const LOG_ERROR = 'LOG_ERROR';

export type FilterByAuthorAction = { type: typeof BLOG_FILTER_WAS_CHANGED, payload: {value: string, type?: string} };
export type AddNewBlogAction = { type: typeof ADD_NEW_BLOG, payload: {value: BlogType} };
export type RemoveBlogAction = { type: typeof REMOVE_BLOG, payload: {value: string} };

export type Action =
    | FilterByAuthorAction
    | AddNewBlogAction
    | RemoveBlogAction;

