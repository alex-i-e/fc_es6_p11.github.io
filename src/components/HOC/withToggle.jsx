import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

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

const withToggleWrapper = WrapperComponent => {
  class WithToggle extends Component {
    static withToggleAction() {
      console.log('>>> withToggleAction');
    }

    render() {
      return <WrapperComponent withToggleAction={WithToggle.withToggleAction} {...this.props} />;
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
