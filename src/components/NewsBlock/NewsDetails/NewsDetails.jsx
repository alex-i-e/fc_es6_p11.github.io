import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Topic } from '../../MainSector/BlogSector/BlogListItem/BlogListItem';
import AddBlog from './AddBlog/AddBlog';

const NewsDetailsWrapper = styled.div`
  height: 0;
  width: inherit;
  display: flex;
  flex-flow: column;
  position: relative;

  background-color: rgba(255, 255, 255, 1);
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

const NewsDetails = props => (
  <NewsDetailsWrapper className={props.classAnimation}>
    {props.news.length
      ? props.news.map(item => (
        <NewsHoverItem key={item.id} href={item.url} target="_blank">
          <Topic className="newsTopic">
            <Img src={item.urlToImage} alt="news" />
            <AddBlog topic={item} />
          </Topic>
          <Title>{item.title}</Title>
        </NewsHoverItem>
      ))
      : 'No news!'}
  </NewsDetailsWrapper>
);

NewsDetails.propTypes = {
  classAnimation: PropTypes.string.isRequired,
  news: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      url: PropTypes.string,
      urlToImage: PropTypes.string,
      author: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      source: PropTypes.shape({
        name: PropTypes.string
      }),
      publishAt: PropTypes.string
    })
  ).isRequired
};

export default NewsDetails;
