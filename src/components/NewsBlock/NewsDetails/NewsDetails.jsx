import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import styled from 'styled-components';
import AddBlog from './AddBlog/AddBlog';

const NewsDetailsWrapper = styled.div`
    height: 0;
    width: inherit;
    display: flex;
    flex-flow: column;
    position: relative;
    //margin: 8px;
    background-color: rgba(255,255,255, 1);
    overflow-y: scroll;
    overflow-x: hidden;
    
    box-shadow: -3px 1px 9px 0px #adadad;
   
`;
const NewsHoverItem = styled.a`
    text-decoration: none;
    color: #adadad;

    height: 250px;
    background-color: white;
    position: relative;
    margin: 8px;
    clear: both;
    cursor: pointer;
    
    &:hover {
        box-shadow: -3px 1px 9px 0px #adadad;
    }
    
`;
const Img = styled.img`
    height: 50px;
    margin: 8px;
`;
const Title = styled.div`
    margin: 8px;
`;

const NewsDetails = (props) => (
    <NewsDetailsWrapper className={props.classAnimation}>
        {props.news.length
            ? props.news.map((item, index) => (
                <NewsHoverItem className={'newsTopic'} key={index} href={item.url} target="_blank">
                    <AddBlog topic={item} />
                    <Img src={item.urlToImage} alt="news"/>
                    <Title>{item.title}</Title>
                </NewsHoverItem>
            ))
            : 'No news!'
        }
    </NewsDetailsWrapper>
);

export default NewsDetails;