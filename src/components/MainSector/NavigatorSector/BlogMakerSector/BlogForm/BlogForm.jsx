import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addNewBlog} from '../../../../../actionCreators/blogForm';
import ActionLink from '../../../../ActionLink/ActionLink';
import styled from 'styled-components';

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

        this.onSubmitPost = this.onSubmitPost.bind(this);
    }

    render() {
        return (
            <FormWrapper>
                <FormBlock onSubmit={this.onSubmitPost}>
                    <label required htmlFor="blog-author">Author:</label>
                    <input ref={(node) => {
                        this.newBlog.author = node;
                    }}
                           type="text"
                           id="blog-author"/>

                    <label required htmlFor="blog-title">Title:</label>
                    <input ref={(node) => {
                        this.newBlog.title = node;
                    }}
                           type="text"
                           id="blog-title"/>

                    <label htmlFor="blog-body">Body:</label>
                    <input ref={(node) => {
                        this.newBlog.body = node;
                    }}
                           type="text"
                           id="blog-body"/>

                    <label htmlFor="blog-date">Date:</label>
                    <input ref={(node) => {
                        this.newBlog.date = node;
                    }}
                           type="date"
                           id="blog-date"/>
                    <ActionLink urlState="/main"
                                onSubmitPost={this.onSubmitPost}>
                        Submit POST
                    </ActionLink>
                    <ActionLink urlState="/main">
                        Back
                    </ActionLink>
                </FormBlock>
            </FormWrapper>
        );
    }

    onSubmitPost(e) {
        if (!this.newBlog.author.value) {
            e.preventDefault();
            alert('Required fields need to fill');

            return false;
        }

        this.props.addNewBlog({
            author: this.newBlog.author.value,
            title: this.newBlog.title.value,
            body: this.newBlog.body.value,
            date: this.newBlog.date.value,
        });

        return true;
    };
}

export default connect(
    null,
    {addNewBlog}
)(BlogForm);