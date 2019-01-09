import React from 'react';
import styled from 'styled-components';
import AuthorItem from './AuthorItem';

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
const Author = styled(AuthorItem)`
    display: flex;
    flex-flow: row;
`;
const NoItems = styled.div`
    display: flex;
    flex-flow: row;
`;

const BlogListItem = (props) => {
    const {blogList, filterValue, filterType} = props;

    return (
        <BlogListBlock>
            {blogList.length
                ?
                blogList.map((row, number) =>
                    <BlogItem key={number.toString()}>
                        <Title>{row.title}</Title>
                        <Body>{row.body}</Body>
                        <Footer>
                            <Date>{row.date}</Date>
                            <Author author={row.author}
                                    matchingValue={filterValue}>
                            </Author>
                        </Footer>
                    </BlogItem>
                )
                : <NoItems>No items!</NoItems>}
        </BlogListBlock>
    );
};

export default BlogListItem;