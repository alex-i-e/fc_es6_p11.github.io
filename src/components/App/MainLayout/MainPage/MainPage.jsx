import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import styled from 'styled-components';
import BlogSector from './BlogSector/BlogSector';
import NavigatorSector from './NavigatorSector/NavigatorSector';
import { themes, ThemeContext } from '../../../../context/theme-context';

const StyledMainPage = styled.div`
  background-color: ${props => props.theme.background};
`;

export const MainPage = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <StyledMainPage className="container main-sector" theme={themeContext.theme}>
      <BlogSector />
      <NavigatorSector />
    </StyledMainPage>
  );
};

MainPage.propTypes = {
  theme: PropTypes.shape({
    foreground: PropTypes.string,
    background: PropTypes.string
  })
};
MainPage.defaultProps = {
  theme: themes.light
};

export default MainPage;
