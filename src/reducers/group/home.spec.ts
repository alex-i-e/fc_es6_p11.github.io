import { BlogType } from './../../components/types/blogTypes';
import configureStore from 'redux-mock-store';
import { ADD_NEW_BLOG, HOME_PAGE_LOADED, REMOVE_BLOG } from '../../constants/actionTypes';
import * as BlogListMock from '../../mock/blogListMock.json';
import reducer, { GeneralStore } from '../../reducers';
import { addNewBlog, removeBlog } from '../../actions/blogActions';

function getNewBlog({
  id,
  title,
  body,
  date,
  author
}: {
  id: string;
  title: string;
  body: string;
  date: string;
  author: string;
}) {
  return { id, title, body, date, author };
}

describe('home UT', () => {
  const middlewares: any[] = [];
  const mockStore = configureStore(middlewares);
  let store: any;

  const newBlog = getNewBlog({
    id: '1',
    title: 'Some title',
    body: 'Some body',
    date: 'Some date',
    author: 'Some author'
  });
  const anotherBlog = getNewBlog({
    id: '2',
    title: 'Awesome title',
    body: 'Awesome body',
    date: 'Awesome date',
    author: 'Awesome author'
  });

  describe('actions', () => {
    beforeEach(() => {
      store = mockStore({ blogList: [] });
    });
    afterEach(() => {
      store.clearActions && store.clearActions();
    });

    it('should dispatch action HOME_PAGE_LOADED', () => {
      const action = { type: HOME_PAGE_LOADED, value: newBlog };
      store.dispatch(action);

      const actions = store.getActions();
      expect(actions).toEqual([action]);
    });

    it('should dispatch action ADD_NEW_BLOG', () => {
      const action = { type: ADD_NEW_BLOG, payload: { value: newBlog } };
      store.dispatch(action);

      const actions = store.getActions();
      expect(actions).toEqual([action]);
    });

    it('should dispatch action REMOVE_BLOG', () => {
      const action = { type: REMOVE_BLOG, payload: { value: 2 } };
      store.dispatch(action);

      const actions = store.getActions();
      expect(actions).toEqual([action]);
    });

    it('should return proper action from addNewBlog', () => {
      expect(addNewBlog(newBlog)).toEqual({
        type: ADD_NEW_BLOG,
        payload: {
          value: newBlog
        }
      });
    });

    it('should return proper action from addNewBlog', () => {
      const id = '2';
      expect(removeBlog(id)).toEqual({
        type: REMOVE_BLOG,
        payload: {
          value: id
        }
      });
    });
  });

  describe('reducers', () => {
    let initBlogList: BlogType[];
    const blogList = [newBlog];

    beforeEach(() => {
      initBlogList = BlogListMock.blogList;
      store = mockStore({ blogList: initBlogList });
    });
    afterEach(() => {
      store.clearActions && store.clearActions();
    });

    it('should setup proper state before dispatch', () => {
      expect(store.getState()).toEqual({ blogList: initBlogList });
    });

    it('should setup proper state when dispatch action HOME_PAGE_LOADED', () => {
      const action = { type: HOME_PAGE_LOADED, payload: { value: blogList } };

      expect(reducer({ home: { blogList } } as GeneralStore, action).home).toEqual({ blogList });
    });

    it('should setup proper state when dispatch action ADD_NEW_BLOG', () => {
      const action = { type: ADD_NEW_BLOG, payload: { value: anotherBlog } };

      expect(reducer({ home: { blogList: initBlogList } } as GeneralStore, action).home).toEqual({
        blogList: [anotherBlog, ...initBlogList]
      });
    });

    it('should setup proper state when dispatch action REMOVE_BLOG', () => {
      const removedItemId = '5';
      const action = { type: REMOVE_BLOG, payload: { value: removedItemId } };
      const filterBlogList = initBlogList.filter(item => item.id !== removedItemId);

      expect(reducer({ home: { blogList: initBlogList } } as GeneralStore, action).home).toEqual({
        blogList: filterBlogList
      });
    });
  });
});