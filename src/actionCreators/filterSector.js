// @flow

import {FILTER_BY_AUTHOR_WAS_CHANGED} from '../constants/actionTypes';

export function filterNewsByTypeAndValue(filterType: string, value: string) {
    return {type: FILTER_BY_AUTHOR_WAS_CHANGED, value};
}