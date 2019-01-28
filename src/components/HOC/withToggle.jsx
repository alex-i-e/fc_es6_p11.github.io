import React, {Component} from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
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
            this.withToggleAction = this.withToggleAction.bind(this);
        }

        withToggleAction(e) {
            console.log('>>> withToggleAction');
        };

        render() {
            return <WrapperComponent
                withToggleAction={this.withToggleAction}
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
        null
    ),
    withToggleWrapper
);