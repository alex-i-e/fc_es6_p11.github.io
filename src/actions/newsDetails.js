// @flow

import {NEWS_HOVER_IN} from '../constants/actionTypes';

export function hoverNewsDetails(value: boolean) {
    return {
        type: NEWS_HOVER_IN,
        payload: {hoverIn: value}
    };
}