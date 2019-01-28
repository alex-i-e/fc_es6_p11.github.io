import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {compose} from 'redux';
import {toggleNewsDetails} from '../../actions/blogActions';
import {getDisplayName} from './withToggle';

const withNewsDetails = (WrapperComponent) => {
    class WithNewsDetails extends Component {
        constructor(props) {
            super(props);
            this.withNewsDetailsAction = this.withNewsDetailsAction.bind(this);
        }

        withNewsDetailsAction(e) {
            console.log('>>> withNewsDetailsAction');
        };

        render() {
            return <WrapperComponent
                withNewsDetailsAction={this.withNewsDetailsAction}
                {...this.props}
            />;
        }
    }

    WithNewsDetails.displayName = `WithNewsDetails(${getDisplayName(WrapperComponent)})`;

    return WithNewsDetails;
};

export default compose(
    connect(
        null,
        {toggleNewsDetails}
    ),
    withNewsDetails
);