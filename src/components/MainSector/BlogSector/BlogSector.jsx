import React, {Component} from 'react';
import BlogListItem from './BlogListItem/BlogListItem';
import styled from 'styled-components';
import {connect} from 'react-redux';

const BlogListBlock = styled.div`
    background-color: white;
    min-width: 250px;
    grid-area: main;
    margin: 16px;
    padding: 8px;
    box-shadow: -3px 1px 9px 0px #adadad;
`;

const FILTER_TYPE = 'author';

class BlogSector extends Component {
    render() {
        return (
            <BlogListBlock>
                <BlogListItem blogList={this.props.blogList}
                              filterType={FILTER_TYPE}
                              filterValue={this.props.filterByAuthorValue}/>
            </BlogListBlock>
        );
    }
}

const getVisibleBlogList = (blogList, {type, value}) =>
    blogList.filter(item => item[type].indexOf(value) !== -1);

export default connect(
    (state) => ({
        blogList: getVisibleBlogList(
            state.home.blogList,
            {type: FILTER_TYPE, value: state.filters.filterByAuthorValue}
        ),
        filterByAuthorValue: state.filters.filterByAuthorValue,
    }),
    null
)(BlogSector);
