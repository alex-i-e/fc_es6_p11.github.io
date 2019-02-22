// @flow

import { LOG_ERROR } from '../constants/actionTypes';

export function logComponentStackToMyService(item: any) {
  return {
    type: LOG_ERROR,
    payload: { item }
  };
}
