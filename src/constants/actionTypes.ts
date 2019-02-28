import { ThemeValue } from './../reducers/group/theme';
import { ofType } from 'redux-observable';

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

export enum EPIC_NEWS {
  EPIC_NEWS_FETCH_REQUESTED = 'EPIC_NEWS_FETCH_REQUESTED',
  EPIC_NEWS_FETCH_ING = 'EPIC_NEWS_FETCH_ING',
  EPIC_NEWS_FETCH_SUCCEEDED = 'EPIC_NEWS_FETCH_SUCCEEDED',
  EPIC_NEWS_FETCH_FAILED = 'EPIC_NEWS_FETCH_FAILED',
};

export type GenericAction<T, P> = {
  type: T;
  payload: P;
};

export type NEWS_COUNTRY = string;
export type EPIC_PAYLOAD = { country: NEWS_COUNTRY };
export type EpicNewsAction = GenericAction<keyof typeof EPIC_NEWS, EPIC_PAYLOAD>;

export const CHANGE_THEME = 'CHANGE_THEME';

export const LOG_ERROR = 'LOG_ERROR';

export type ThemeAction = GenericAction<typeof CHANGE_THEME, { value: ThemeValue }>;
export type FilterAction = GenericAction<typeof BLOG_FILTER_WAS_CHANGED, {value: string}>
