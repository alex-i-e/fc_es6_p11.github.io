import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { toggleNewsDetails } from '../../actions/blogActions';
import { getDisplayName } from './withToggleAndTheme';

const withNewsDetails = WrapperComponent => {
  class WithNewsDetails extends Component {
    constructor(props) {
      super(props);
      this.withNewsDetailsAction = this.withNewsDetailsAction.bind(this);
    }

    withNewsDetailsAction(e) {
      console.log('>>> withNewsDetailsAction');
    }

    render() {
      return (
        <WrapperComponent withNewsDetailsAction={this.withNewsDetailsAction} {...this.props} />
      );
    }
  }

  WithNewsDetails.displayName = `WithNewsDetails(${getDisplayName(WrapperComponent)})`;

  return WithNewsDetails;
};

export default compose(
  connect(
    null,
    { toggleNewsDetails }
  ),
  withNewsDetails
);
