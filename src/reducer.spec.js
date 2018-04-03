import { ADD_NEW_BLOG } from "./constants/actionTypes";
import * as rootReducer from "enzyme";
import configureStore from 'redux-mock-store';

describe('home reducers', () => {

  const middlewares = [];
  rootReducer.default = jest.fn();
  const mockStore = configureStore(middlewares);

  it('should dispatch action', () => {
    const initialState = {
      actions: {
        blogList: []
      }
    };
    const newBlog = {};
    const addNote = { type: ADD_NEW_BLOG, value: newBlog };

    const store = mockStore(initialState);
    store.dispatch(addNote);

    const actions = store.getActions();

    expect(actions).toEqual([addNote]);
  })
});