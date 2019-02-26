// import React, { Component } from 'react';
import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getDisplayName } from './utils';

type WithNewsDetailsType = {
  withNewsDetailsAction: Function
}

const withNewsDetails = <P extends WithNewsDetailsType>(WrapperComponent: React.ComponentType<P>) => {
  class WithNewsDetails extends Component<P, null> { // P => Subtract<P, WithNewsDetailsType>
    static withNewsDetailsAction() {
      // eslint-disable-next-line
      console.log('>>> withNewsDetailsAction');
    }
    static displayName = `WithNewsDetails(${getDisplayName(WrapperComponent)})`;

    render() {
      return (
        <WrapperComponent
          withNewsDetailsAction={WithNewsDetails.withNewsDetailsAction}
          {...this.props}
        />
      );
    }
  }

  return WithNewsDetails;
};

export default compose(
  connect(
    null,
    null
  ),
  withNewsDetails
);
