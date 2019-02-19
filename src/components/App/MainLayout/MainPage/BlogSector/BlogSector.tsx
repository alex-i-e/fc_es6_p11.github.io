import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import BlogListItem from './BlogListItem/BlogListItem';

const BlogListBlock = styled.div`
  background-color: white;
  min-width: 250px;
  grid-area: main;
  margin: 16px;
  padding: 8px;
  box-shadow: -3px 1px 9px 0px #adadad;
`;

const FILTER_TYPE = 'author';

export const BlogSector = ({ blogList = [], value = '' }) => {
  return (
    <BlogListBlock>
      <BlogListItem blogList={blogList} filterType={FILTER_TYPE} filterValue={value} />
    </BlogListBlock>
  );
};

BlogSector.defaultProps = {
  blogList: [],
  value: ''
};

BlogSector.propTypes = {
  blogList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      image: PropTypes.string,
      title: PropTypes.string,
      body: PropTypes.string,
      date: PropTypes.date,
      author: PropTypes.string
    })
  ),
  value: PropTypes.string
};

export const getVisibleBlogList = (blogList, { type, value }) =>
  blogList.filter(item => item[type].indexOf(value) !== -1);

export default connect(
  state => ({
    blogList: getVisibleBlogList(state.home.blogList, {
      type: FILTER_TYPE,
      value: state.filter.value
    }),
    value: state.filter.value
  }),
  null
)(BlogSector);
