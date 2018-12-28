import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

const BlogListBlock = styled.div`
    --blog-item-margin: 8px;
    margin: var(--blog-item-margin);
    padding: var(--blog-item-margin);
    box-shadow: -3px 1px 9px 0px #222222;

    display: flex;
    flex-flow: column;
    align-items: stretch;
`;
const BlogItem = styled.div`
    display: flex;
    flex-flow: column;
    flex-grow: 1;
    margin: var(--blog-item-margin);
    padding: var(--blog-item-margin);
    box-shadow: -3px 1px 9px 0px #adadad;
`;
const Title = styled.div`
    margin: 8px;
    text-align: left;

    font-size: 16px;
    font-weight: 600;
`;
const Body = styled.div`
    margin: 8px;
    text-align: left;
`;
const Footer = styled.div`
    display: flex;
    flex-flow: row;
    justify-content: space-between;
`;
const Date = styled.div`
    display: flex;
    flex-flow: row;
`;
const Author = styled.div`
    display: flex;
    flex-flow: row;
`;

const getVisibleBlogList = (blogList, {type, value}) =>
    blogList.filter(item => item[type].indexOf(value) !== -1);

const mapStateToBlogListItemProps = (state) => ({
    blogList: getVisibleBlogList(
        state.home.blogList,
        {type: 'author', value: state.filters.filterByAuthorValue}
    ),
    filter: state.filters.filterByAuthorValue,
});

class BlogListItem extends Component {
    render() {
        return (
            <BlogListBlock>
                {this.props.blogList.map((row, number) =>
                    <BlogItem key={number.toString()}>
                        <Title>{row.title}</Title>
                        <Body>{row.body}</Body>
                        <Footer>
                            <Date>{row.date}</Date>
                            <Author>{row.author}</Author>
                        </Footer>
                    </BlogItem>
                )}
            </BlogListBlock>
        );
    }
}

export default connect(
    mapStateToBlogListItemProps,
    null
)(BlogListItem);