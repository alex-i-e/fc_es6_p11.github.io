import React, {Component} from 'react';
import {connect} from 'react-redux';
import FilterLink from '../../../../ActionLink/ActionLink';
import {toggleBlogCreator} from '../../../../../actionCreators/blogForm';

class BlogButton extends Component {
    constructor(props) {
        super(props);
        this.onSubmitPost = this.onSubmitPost.bind(this);
    }

    render() {
        return (
            <FilterLink urlstate="edit"
                        onSubmitPost={this.onSubmitPost}>
                Create new Post
            </FilterLink>
        );
    }

    // TODO : add hoc-component for Submit Button on home/edit
    onSubmitPost(e) {
        this.props.toggleBlogCreator(!this.props.isFormOpen);
    };
}

export default connect(
    (state) => ({
        isFormOpen: state.blog.isOpenNewBlogForm,
    }),
    {toggleBlogCreator}
)(BlogButton);