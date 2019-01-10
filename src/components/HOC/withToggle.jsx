import React, {Component} from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {toggleBlogCreator} from '../../actionCreators/blogForm';
import PropTypes from 'prop-types';

// const enhance = compose(
//     connect(mapStateToProps, mapDispatchToProps),
//     withRouter,
//     withStyles(styles, 'some style'),
//     ....
//
//     export default enhance(MyComponent);

export function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

const withToggleWrapper = (WrapperComponent) => {
    class WithToggle extends Component {
        constructor(props) {
            super(props);
            this.toggleForm = this.toggleForm.bind(this);
        }

        toggleForm(e) {
            console.log('>>> toggleForm');
        };

        render() {
            return <WrapperComponent
                toggleForm={this.toggleForm}
                theme={true}
                {...this.props}
            />;
        }
    }

    WithToggle.displayName = `WithToggle(${getDisplayName(WrapperComponent)})`;

    return WithToggle;
};

withToggleWrapper.propTypes = {
    toggleBlogCreator: PropTypes.func
};

export default compose(
    connect(
        null,
        {toggleBlogCreator}
    ),
    withToggleWrapper
);