import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { addNewBlog } from '../../../../actions/blogActions';

export const BtnWrapper = styled.button`
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  display: none;
  cursor: pointer;
  position: relative;
  top: 4px;
  right: 4px;
  width: 30px;
  height: 20px;
  border-radius: 20px;
  border-width: 0;
  box-shadow: -3px 1px 9px 0px #adadad;

  &::before {
    content: '👍';
  }

  &:hover {
    animation: 3s colorLink ease backwards;
    box-shadow: -3px 1px 15px 0px;
  }
`;

export class AddBlog extends Component {
  constructor(props) {
    super(props);

    this.onClickAction = this.onClickAction.bind(this);
  }

  onClickAction(e) {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }

    this.props.addNewBlog({
      id: `${Math.floor(Math.random() * 10000)}`,
      author: `${this.props.topic.source.name} - ${this.props.topic.author}`,
      title: this.props.topic.title,
      body: this.props.topic.description,
      image: this.props.topic.urlToImage,
      date: this.props.topic.publishedAt
    });
  }

  render() {
    return <BtnWrapper title="Add to Blog!" onClick={this.onClickAction} />;
  }
}

AddBlog.propTypes = {
  addNewBlog: PropTypes.func.isRequired,
  topic: PropTypes.shape({
    source: PropTypes.shape({
      name: PropTypes.string
    }),
    author: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    urlToImage: PropTypes.string,
    publishedAt: PropTypes.string
  }).isRequired
};

export default connect(
  null,
  { addNewBlog }
)(AddBlog);
