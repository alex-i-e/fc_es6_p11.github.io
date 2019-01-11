import {
  ADD_NEW_BLOG, BLOG_CREATOR_TOGGLE, BLOG_FILTER_WAS_CHANGED,
  HOME_PAGE_LOADED
} from "./constants/actionTypes";
import * as rootReducer from "enzyme";
import configureStore from 'redux-mock-store';

describe('home reducers', () => {

  const middlewares = [];
  rootReducer.default = jest.fn();
  const mockStore = configureStore(middlewares);

  it('should dispatch action ADD_NEW_BLOG', () => {
    const initialState = {
      actions: {
        blogList: []
      }
    };
    const newBlog = [
      {
        title: 'Some title',
        body: 'Some body',
        date: 'Some date',
        author: 'Some author',
      }
    ];
    const addNote = { type: ADD_NEW_BLOG, value: newBlog };

    const store = mockStore(initialState);
    store.dispatch(addNote);

    const actions = store.getActions();

    expect(actions).toEqual([addNote]);
  });

  it('should dispatch action HOME_PAGE_LOADED', () => {
    const initialState = {
      actions: {
        blogList: []
      }
    };
    const newBlog = {
      title: 'Some title',
      body: 'Some body',
      date: 'Some date',
      author: 'Some author',
    };
    const addNote = { type: HOME_PAGE_LOADED, value: newBlog };

    const store = mockStore(initialState);
    store.dispatch(addNote);

    const actions = store.getActions();

    expect(actions).toEqual([addNote]);
  });

  it('should dispatch action BLOG_FILTER_WAS_CHANGED', () => {
    const initialState = {
      actions: {
        value: ''
      }
    };
    const filterByAuthor = 'Some new family';
    const addNote = { type: BLOG_FILTER_WAS_CHANGED, payload: {value: filterByAuthor, type: 'author'} };

    const store = mockStore(initialState);
    store.dispatch(addNote);

    const actions = store.getActions();

    expect(actions).toEqual([addNote]);
  });

  it('should dispatch action BLOG_CREATOR_TOGGLE', () => {
    const initialState = {
      actions: {
        isOpenNewBlogForm: false
      }
    };
    const newValue = true;
    const addNote = { type: BLOG_CREATOR_TOGGLE, value: newValue };

    const store = mockStore(initialState);
    store.dispatch(addNote);

    const actions = store.getActions();

    expect(actions).toEqual([addNote]);
  })
});