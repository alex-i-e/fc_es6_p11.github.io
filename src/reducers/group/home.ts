import { BlogType } from '../../components/types/blogTypes';
import { ADD_NEW_BLOG, HOME_PAGE_LOADED, REMOVE_BLOG } from '../../constants/actionTypes';
import * as BlogListMock from '../../mock/blogListMock.json';

type State = {
  blogList: BlogType[]
};

const initState = {
  blogList: BlogListMock.blogList || []
};

export default (state: State = initState, action: any) => {
  switch (action.type) {
    case HOME_PAGE_LOADED:
      return {
        ...state,
        blogList: action.payload.value
      };
    case ADD_NEW_BLOG:
      return {
        ...state,
        blogList: [action.payload.value, ...state.blogList]
      };
    case REMOVE_BLOG:
      return {
        ...state,
        blogList: [...state.blogList.filter(item => item.id !== action.payload.value)]
      };
    default:
      return state;
  }
};
