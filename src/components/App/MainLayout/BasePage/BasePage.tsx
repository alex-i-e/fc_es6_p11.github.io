import React, { Fragment } from 'react';
import styled from 'styled-components';

const Map = styled.div`
  height: 400px;
`;

export const BasePage = () => {
  return (
    <Fragment>
      <div>Base</div>
      <Map id="map" />
    </Fragment>
  );
};

export default BasePage;
