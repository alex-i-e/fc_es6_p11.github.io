import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addNewBlog} from '../../../../../actionCreators/blogForm';
import ActionLink from '../../../../shared/ActionLink/ActionLink';
import styled from 'styled-components';
import InputField from '../../../../shared/Input/InputField';

const FormWrapper = styled.div`
    margin: 8px;
`;
const FormBlock = styled.form`
    display: flex;
    flex-flow: column;
`;

class BlogForm extends Component {

    constructor(props) {
        super(props);

        this.newBlog = {
            author: {value: ''},
            title: {value: ''},
            body: {value: ''},
            date: {value: ''},
        };

        this.authorInput = React.createRef();
        this.titleInput = React.createRef();
        this.bodyInput = React.createRef();
        this.dateInput = React.createRef();

        this.onSubmitPost = this.onSubmitPost.bind(this);
    }

    render() {
        const blog = this.newBlog;

        return (
            <FormWrapper>
                <FormBlock onSubmit={this.onSubmitPost}>
                    <InputField labelValue={'Author *'}
                                ref={this.authorInput}
                                placeholder={'ex. Some author\'s name'}
                                type="text"
                                required
                                id="blog-author"/>
                    <InputField labelValue={'Title'}
                                ref={this.titleInput}
                                placeholder={'ex. Awesome title'}
                                type="text"
                                id="blog-title"/>
                    <InputField labelValue={'Body'}
                                ref={this.bodyInput}
                                placeholder={'ex. Body description ...'}
                                type="textarea"
                                rows="4"
                                id="blog-body"/>
                    <InputField labelValue={'Date'}
                                ref={this.dateInput}
                                placeholder={'ex. 01.01.2000'}
                                type="date"
                                id="blog-date"/>
                    <ActionLink urlState="/main"
                                onSubmitPost={this.onSubmitPost}>
                        Submit
                    </ActionLink>
                    <ActionLink urlState="/main">
                        Back
                    </ActionLink>
                </FormBlock>
            </FormWrapper>
        );
    }

    onSubmitPost(e) {
        if (!this.authorInput.current.value) {
            e.preventDefault();
            alert('Required fields need to fill');

            return false;
        }

        this.props.addNewBlog({
            author: this.authorInput.current.value,
            title: this.titleInput.current.value,
            body: this.bodyInput.current.value,
            date: this.dateInput.current.value || new Date(),
        });

        return true;
    };
}

export default connect(
    null,
    {addNewBlog}
)(BlogForm);