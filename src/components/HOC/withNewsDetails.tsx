import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getDisplayName } from './utils';

const withNewsDetails = WrapperComponent => {
  class WithNewsDetails extends Component {
    static withNewsDetailsAction() {
      // eslint-disable-next-line
      console.log('>>> withNewsDetailsAction');
    }

    render() {
      return (
        <WrapperComponent
          withNewsDetailsAction={WithNewsDetails.withNewsDetailsAction}
          {...this.props}
        />
      );
    }
  }

  WithNewsDetails.displayName = `WithNewsDetails(${getDisplayName(WrapperComponent)})`;

  return WithNewsDetails;
};

export default compose(
  connect(
    null,
    null
  ),
  withNewsDetails
);
