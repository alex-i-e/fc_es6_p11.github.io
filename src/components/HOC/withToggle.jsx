import React, {Component} from 'react';
import {connect} from 'react-redux';
import {toggleBlogCreator} from '../../actionCreators/blogForm';
import PropTypes from 'prop-types';

// const enhance = compose(
//     withRouter,
//     withStyles(styles, 'some style'),
//     connect(mapStateToProps, mapDispatchToProps),
//     ....
//
//     export default enhance(MyComponent);

const withToggle = (WrapperComponent) => {

    return class HH extends Component {

        constructor(props) {
            super(props);
            this.onSubmitPost = this.onSubmitPost.bind(this);
        }

        componentWillmount() {
        }

        componentDidUnmount() {
        }

        onSubmitPost(e) {
            this.props.toggleBlogCreator(!this.props.isFormOpen);
        };

        render() {
            return <WrapperComponent {...this.props}
                                     onClick={this.onSubmitPost}/>;
        }
    };
};

withToggle.propTypes = {
    toggleBlogCreator: PropTypes.func
};

export default connect(
    (state) => ({
        isFormOpen: state.blog.isOpenNewBlogForm,
    }),
    {toggleBlogCreator}
)(withToggle);