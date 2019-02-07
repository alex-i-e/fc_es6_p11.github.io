// @flow
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { DatePicker, notification, message } from 'antd';
import { addNewBlog } from '../../../../../../../actions/blogActions';
import InputField from '../../../../../../shared/Input/InputField';
import ActionLink from '../../../../../../shared/ActionLink/ActionLink';

const FormWrapper = styled.div`
  margin: 8px;
`;
const FormBlock = styled.form`
  display: flex;
  flex-flow: column;
`;
const ButtonSector = styled.div`
  display: flex;
  flex-flow: column;
  align-items: stretch;
  margin: 16px 0px;
`;
const key = 'updatable';
const openNotification = () => {
  notification.open({
    key,
    message: 'Blog info',
    description: "Blog wasn't added!"
  });
  setTimeout(() => {
    notification.open({
      key,
      message: 'Blog info',
      description: 'Please, try to fill in all required fields!'
    });
  }, 2000);
};
const success = () => {
  message.success('Blog was successfully added!');
};

export class BlogForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      validForm: false
    };

    this.authorInput = React.createRef();
    this.titleInput = React.createRef();
    this.bodyInput = React.createRef();
    this.dateInputString = '';

    this.onSubmitPost = this.onSubmitPost.bind(this);
    this.onChangeDatePicker = this.onChangeDatePicker.bind(this);
    this.onChangeInput = this.onChangeInput.bind(this);
    this.onChangeAuthor = this.onChangeAuthor.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeBody = this.onChangeBody.bind(this);
  }

  onChangeAuthor() {
    return this.onChangeInput('author');
  }

  onChangeTitle() {
    return this.onChangeInput('title');
  }

  onChangeBody() {
    return this.onChangeInput('body');
  }

  onChangeInput(type) {
    return e => {
      const currentInputValue = e.target.value;
      const author = this.authorInput.current.state.value;
      const title = this.titleInput.current.state.value;
      const body = this.bodyInput.current.state.value;
      const formState = {
        author,
        title,
        body
      };

      this.setState({
        validForm: !Object.values({ ...formState, ...{ [type]: currentInputValue } }).some(
          item => !item
        )
      });
    };
  }

  onChangeDatePicker(date) {
    this.dateInputString = date;
  }

  onSubmitPost(e: Event) {
    e.preventDefault();
    e.stopPropagation();
    if (!this.authorInput.current.state.value) {
      // eslint-disable-next-line
      openNotification();
      return false;
    }

    this.props.addNewBlog({
      id: `${Math.floor(Math.random() * 10000)}`,
      author: this.authorInput.current.state.value,
      title: this.titleInput.current.state.value,
      body: this.bodyInput.current.state.value,
      date: (this.dateInput && `${this.dateInput.format()}`) || new Date()
    });

    success();

    return true;
  }

  render() {
    const { validForm } = this.state;
    return (
      <FormWrapper>
        <FormBlock onSubmit={this.onSubmitPost}>
          <InputField
            labelValue="Author"
            ref={this.authorInput}
            placeholder="ex. Some authors name"
            type="text"
            required
            id="blog-author"
            onChange={this.onChangeAuthor()}
          />
          <InputField
            labelValue="Title"
            ref={this.titleInput}
            placeholder="ex. Awesome title"
            type="text"
            id="blog-title"
            required
            onChange={this.onChangeTitle()}
          />
          <InputField
            labelValue="Body"
            ref={this.bodyInput}
            placeholder="ex. Body description ..."
            type="textarea"
            rows="4"
            id="blog-body"
            required
            onChange={this.onChangeBody()}
          />
          <label htmlFor="blog-date">
            {'Date'}
            <DatePicker
              onChange={this.onChangeDatePicker}
              ref={this.dateInput}
              id="blog-date"
              placeholder="2015/01/01"
            />
          </label>
          <ButtonSector>
            <ActionLink
              type="primary"
              htmlType="submit"
              urlState="/main"
              onClick={this.onSubmitPost}
              disabled={!validForm}
            >
              Submit
            </ActionLink>
            <ActionLink urlState="/main">Back</ActionLink>
          </ButtonSector>
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
