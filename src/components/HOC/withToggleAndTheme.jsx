import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { ThemeContext } from '../../context/theme-context';

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

const withToggleAndThemeWrapper = WrapperComponent => {
  const WithToggle = (props) => {
    const themeContext = useContext(ThemeContext);
    
    function withToggleAction() {
      // eslint-disable-next-line
      console.log('>>> withToggleAction');
    }
    
    return (
      <WrapperComponent
        withToggleAction={withToggleAction}
        theme={themeContext.theme}
        {...props}
      />);
  };
  
  WithToggle.displayName = `WithToggle(${getDisplayName(WrapperComponent)})`;
  
  return WithToggle;
};

withToggleAndThemeWrapper.propTypes = {
  toggleBlogCreator: PropTypes.func
};

export default compose(
  connect(
    null,
    null
  ),
  withToggleAndThemeWrapper
);
