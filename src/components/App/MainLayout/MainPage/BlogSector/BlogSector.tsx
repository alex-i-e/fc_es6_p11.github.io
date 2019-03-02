import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import BlogListItem from './BlogListItem/BlogListItem';
import { GeneralStore } from '../../../../../reducers/index';
import { BlogType } from '../../../../types/blogTypes';

const BlogListBlock = styled.div`
  background-color: white;
  min-width: 250px;
  grid-area: main;
  margin: 16px;
  padding: 8px;
  box-shadow: -3px 1px 9px 0px #adadad;
`;

const FILTER_TYPE = 'author';

export type BlogSectorType = {
  blogList: BlogType[];
  value: string;
};
export const BlogSector = ({ blogList = [], value = '' }: BlogSectorType) => {
  return (
    <BlogListBlock>
      <BlogListItem blogList={blogList} filterType={FILTER_TYPE} filterValue={value} />
    </BlogListBlock>
  );
};

export const getVisibleBlogList = (
  blogList: BlogType[],
  { type, value }: { type: typeof FILTER_TYPE; value: string }
) => blogList.filter(item => item[type].indexOf(value) !== -1);

export default connect(
  (state: GeneralStore) => ({
    blogList: getVisibleBlogList(state.home.blogList, {
      type: FILTER_TYPE,
      value: state.filter.value
    }),
    value: state.filter.value
  }),
  null
)(BlogSector);
