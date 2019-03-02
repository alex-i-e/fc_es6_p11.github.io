// @flow
import React, { LegacyRef, Component, Ref, RefObject, SyntheticEvent } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { DatePicker, Input, message, notification } from 'antd';
import { addNewBlog } from '../../../../../../../actions/blogActions';
import InputField from '../../../../../../shared/Input/InputField';
import ActionLink from '../../../../../../shared/ActionLink/ActionLink';
import { Moment } from 'moment';

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

export type BlogFormProps = {
  addNewBlog: Function;
};
export type BlogFormState = {
  validForm: boolean;
};

export class BlogForm extends Component<BlogFormProps, BlogFormState> {
  public authorInput: RefObject<Input>;
  public titleInput: RefObject<Input>;
  public bodyInput: RefObject<Input>;
  public dateInput: RefObject<Date>;
  public dateInputString: Moment;

  constructor(props: any) {
    super(props);

    this.state = {
      validForm: false
    };

    this.authorInput = React.createRef();
    this.titleInput = React.createRef();
    this.bodyInput = React.createRef();
    this.dateInput = React.createRef();

    this.onSubmitPost = this.onSubmitPost.bind(this);
    this.onChangeDatePicker = this.onChangeDatePicker.bind(this);
    this.checkFormValidate = this.checkFormValidate.bind(this);
    this.onChangeAuthor = this.onChangeAuthor.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeBody = this.onChangeBody.bind(this);
  }

  onChangeAuthor() {
    return this.checkFormValidate('author');
  }

  onChangeTitle() {
    return this.checkFormValidate('title');
  }

  onChangeBody() {
    return this.checkFormValidate('body');
  }

  onChangeDatePicker(date: Moment) {
    this.dateInputString = date;
  }

  onSubmitPost(e: any) {
    e.preventDefault();
    e.stopPropagation();
    if (!(this.authorInput as any).current!.state.value) {
      // eslint-disable-next-line
      openNotification();
      return false;
    }

    this.props.addNewBlog({
      id: `${Math.floor(Math.random() * 10000)}`,
      author: (this.authorInput as any).current!.state.value,
      title: (this.titleInput as any).current!.state.value,
      body: (this.bodyInput as any).current!.state.value,
      date: (this.dateInput && `${(this.dateInput as any).format()}`) || new Date()
    });

    success();

    return true;
  }

  checkFormValidate(type: string) {
    return (e: SyntheticEvent<HTMLInputElement, KeyboardEvent>) => {
      const currentInputValue = e.currentTarget.value;
      const author = (this.authorInput as any).current!.state.value;
      const title = (this.titleInput as any).current!.state.value;
      const body = (this.bodyInput as any).current!.state.value;
      const formState = {
        author,
        title,
        body
      };

      this.setState({
        validForm: !Object.values({ ...formState, ...{ [type]: currentInputValue } }).some(
          (item: any) => !item
        )
      });
    };
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
            <ActionLink urlState="/main" titleText="Ctrl + X">
              Back
            </ActionLink>
          </ButtonSector>
        </FormBlock>
      </FormWrapper>
    );
  }
}

export default connect(
  null,
  { addNewBlog }
)(BlogForm);
