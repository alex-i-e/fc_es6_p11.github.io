import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { addNewBlog } from '../../../../../../../actions/blogActions';
import ActionLink from '../../../../../../shared/ActionLink/ActionLink';
import InputField from '../../../../../../shared/Input/InputField';

const FormWrapper = styled.div`
  margin: 8px;
`;
const FormBlock = styled.form`
  display: flex;
  flex-flow: column;
`;

export class BlogForm extends Component {
  constructor(props) {
    super(props);

    this.newBlog = {
      author: { value: '' },
      title: { value: '' },
      body: { value: '' },
      date: { value: '' }
    };

    this.authorInput = React.createRef();
    this.titleInput = React.createRef();
    this.bodyInput = React.createRef();
    this.dateInput = React.createRef();

    this.onSubmitPost = this.onSubmitPost.bind(this);
  }

  onSubmitPost(e) {
    if (!this.authorInput.current.value) {
      e.preventDefault();
      // eslint-disable-next-line
      alert('Required fields need to fill');

      return false;
    }

    this.props.addNewBlog({
      id: `${Math.floor(Math.random() * 10000)}`,
      author: this.authorInput.current.value,
      title: this.titleInput.current.value,
      body: this.bodyInput.current.value,
      date: this.dateInput.current.value || new Date()
    });

    return true;
  }

  render() {
    return (
      <FormWrapper>
        <FormBlock onSubmit={this.onSubmitPost}>
          <InputField
            labelValue="Author *"
            ref={this.authorInput}
            placeholder="ex. Some authors name"
            type="text"
            required
            id="blog-author"
          />
          <InputField
            labelValue="Title"
            ref={this.titleInput}
            placeholder="ex. Awesome title"
            type="text"
            id="blog-title"
          />
          <InputField
            labelValue="Body"
            ref={this.bodyInput}
            placeholder="ex. Body description ..."
            type="textarea"
            rows="4"
            id="blog-body"
          />
          <InputField
            labelValue="Date"
            ref={this.dateInput}
            placeholder="ex. 01.01.2000"
            type="date"
            id="blog-date"
          />
          <ActionLink urlState="/main" onSubmitPost={this.onSubmitPost}>
            Submit
          </ActionLink>
          <ActionLink urlState="/main">Back</ActionLink>
        </FormBlock>
      </FormWrapper>
    );
  }
}

BlogForm.propTypes = {
  addNewBlog: PropTypes.func.isRequired
};

export default connect(
  null,
  { addNewBlog }
)(BlogForm);
