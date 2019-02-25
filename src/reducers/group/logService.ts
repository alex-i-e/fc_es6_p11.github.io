import { LOG_ERROR } from '../../constants/actionTypes';

export type LogListItem = {};

export type LogState = {
  logList: LogListItem[];
};

const initState = {
  logList: []
};

export default (state: LogState = initState, action: any): LogState => {
  switch (action.type) {
    case LOG_ERROR:
      return {
        ...state,
        logList: [action.payload.item]
      };
    default:
      return state;
  }
};
