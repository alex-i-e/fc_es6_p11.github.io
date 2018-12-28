import React, {Component} from 'react';
import BlogListItem from './BlogListItem/BlogListItem';
import styled from 'styled-components';

const BlogListBlock = styled.div`
    min-width: 250px;
    grid-area: main;
    margin: 16px;
    padding: 8px;
    box-shadow: -3px 1px 9px 0px #adadad;
`;

class BlogSector extends Component {
    render() {
        return (
            <BlogListBlock>
                <BlogListItem />
            </BlogListBlock>
        )
    }
}

export default BlogSector;