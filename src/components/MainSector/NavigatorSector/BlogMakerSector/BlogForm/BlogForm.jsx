import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addNewBlog, toggleBlogCreator} from '../../../../../actionCreators/blogForm';
import FilterLink from '../../../../ActionLink/ActionLink';
import styled from 'styled-components';
import {compose} from 'redux';
import withToggle from '../../../../HOC/withToggle';
import BlogButton from '../BlogButton/BlogButton';
import {Route} from 'react-router';

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
                    <BlogButton urlState="home"
                                onSubmitPost={this.onSubmitPost}>
                        Submit POST
                    </BlogButton>
                </FormBlock>
            </FormWrapper>
        );
    }

    onSubmitPost(e) {
        if (!this.newBlog.author.value) {
            e.preventDefault();
            alert('Required fields need to fill');
            return;
        }

        this.props.addNewBlog({
            author: this.newBlog.author.value,
            title: this.newBlog.title.value,
            body: this.newBlog.body.value,
            date: this.newBlog.date.value,
        });

        this.props.toggleBlogCreator(!this.props.isFormOpen);
    };
}

export default connect(
    (state) => ({
        isFormOpen: state.blog.isOpenNewBlogForm,
    }),
    {addNewBlog, toggleBlogCreator}
)(BlogForm);