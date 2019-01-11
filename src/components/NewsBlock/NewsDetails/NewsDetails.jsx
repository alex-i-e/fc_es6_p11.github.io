import React from 'react';

import styled from 'styled-components';

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
const NewsHoverItem = styled.div`
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
                <NewsHoverItem key={index}>
                    <Img src={item.urlToImage} alt="news"/>
                    <Title>{item.title}</Title>
                </NewsHoverItem>
            ))
            : 'No news!'
        }
    </NewsDetailsWrapper>
);

export default NewsDetails;