import React, {Component} from 'react';
import {connect} from 'react-redux';
import FilterLink from '../../../../ActionLink/ActionLink';
import {toggleBlogCreator} from '../../../../../actionCreators/blogForm';
import withToggle from '../../../../HOC/withToggle';
import {compose} from 'redux';
import PropTypes from 'prop-types';

class BlogButton extends Component {
    constructor(props) {
        super(props);
        this.onSubmitPost = this.onSubmitPost.bind(this);
    }

    // TODO : add hoc-component for Submit Button on home/edit
    onSubmitPost(e) {
        this.props.toggleBlogCreator(!this.props.isFormOpen);
    };

    render() {
        return (
            <FilterLink
                onSubmitPost={this.onSubmitPost} {...this.props}>
            </FilterLink>
        );
    }
}

BlogButton.propTypes = {
    isFormOpen: PropTypes.bool.isRequired,
    toggleBlogCreator: PropTypes.func.isRequired,
    onSubmitPost: PropTypes.func
};

export default connect(
    (state) => ({
        isFormOpen: state.blog.isOpenNewBlogForm,
    }),
    {toggleBlogCreator}
)(BlogButton);