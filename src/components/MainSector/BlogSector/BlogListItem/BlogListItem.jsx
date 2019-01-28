import React from 'react';
import styled from 'styled-components';
import AuthorItem from './AuthorItem';
import moment from 'moment';
import RemoveBlog from './RemoveBlog/RemoveBlog';

const BlogListBlock = styled.div`
    --blog-item-margin: 8px;
    margin: var(--blog-item-margin);
    padding: var(--blog-item-margin);
    box-shadow: -3px 1px 9px 0px #adadad;

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
export const Topic = styled.div`
    display: flex;
    flex-flow: row;
    justify-content: space-between;
`;
const Title = styled.div`
    margin: 8px;
    text-align: left;

    font-size: 16px;
    font-weight: 600;
`;
const BodyBlock = styled.div`
    display: flex;
    flex-flow: row;
`;
const Img = styled.img`
    margin: 8px;
    height: 70px;
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
                    <BlogItem className={'newsTopic'}
                              key={number.toString()}>
                        <Topic>
                            <Title>{row.title}</Title>
                            <RemoveBlog index={row.id}/>
                        </Topic>
                        <BodyBlock>
                            {row.image ? <Img src={row.image} alt="news image"/> : ''}
                            <Body>{row.body}</Body>
                        </BodyBlock>
                        <Footer>
                            <Date>{moment(row.date).format('lll')}</Date>
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