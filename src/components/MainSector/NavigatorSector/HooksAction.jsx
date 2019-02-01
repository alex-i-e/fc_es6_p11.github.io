import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const HooksActionWrapper = styled.div`
  margin: 8px;
`;

class HooksAction extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <HooksActionWrapper>
        <button>Action</button>
      </HooksActionWrapper>
    );
  }
}

export default connect(
  null,
  null
)(HooksAction);
