import PropTypes from 'prop-types';
import React from 'react';
import BlogSector from './BlogSector/BlogSector';
import NavigatorSector from './NavigatorSector/NavigatorSector';
import { themes } from '../../../../context/theme-context';

export const MainPage = ({ theme }) => (
  <div className="container main-sector" style={{ backgroundColor: theme.background }}>
    <BlogSector />
    <NavigatorSector />
  </div>
);
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
