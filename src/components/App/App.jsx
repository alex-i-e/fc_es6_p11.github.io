// @flow

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import { Menu, Icon } from 'antd';
import { changeTheme } from '../../actions/theme';
import { ThemeContext, themes } from '../../context/theme-context';
import { KeyDownEventContext } from '../../context/keyPress-context';
import MainLayout from './MainLayout/MainLayout';
import NewsHeader from './NewsHeader/NewsHeader';
import ErrorBoundary from '../shared/ErrorBoudary/ErrorBoundary';
import ThemeContainer from './ThemeContainer/ThemeContainer';
import withKeyboardTooltip from '../HOC/withKeyboardTooltip';

const AppBlock = styled.div`
  text-align: center;
`;
const Header = styled.header`
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`;
const HeaderMain = styled.header`
  display: flex;
  flex-flow: column-reverse;
  align-items: center;
  justify-content: center;
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`;
const Title = styled.h1`
  font-size: 1.5em;
`;
const Chapter = styled.p`
  font-size: large;
`;
const rotate = keyframes`
    0% {
        opacity: 0;
        transform: rotate(0deg);
    }
    100% {
        opacity: 1;
        transform: rotate(360deg);
    }
`;
const AnimateLogo = styled.img`
  animation: ${rotate} 5s infinite linear;
`;
const NewsWrapper = styled(NewsHeader)`
  color: #adadad;
  width: 100%;
`;
const GlobalStyle = createGlobalStyle`
    body {
      margin: 0;
      padding: 0;
      font-family: sans-serif;
    }
`;
const StyledMenu = styled(Menu)`
  position: fixed;
  top: 0;
  width: 100%;
`;

const NavLinkWithTooltip = withKeyboardTooltip(NavLink);

const CustomMenu = () => {
  const [menuItem, setMenuItem] = useState(null);

  const handleClick = e => {
    setMenuItem(e.key);
  };

  return (
    <StyledMenu onClick={handleClick} selectedKeys={[menuItem]} mode="horizontal">
      <Menu.Item key="main">
        <NavLinkWithTooltip to="/main" titleText="Ctrl + M">
          <Icon type="mail" />
          Main info
        </NavLinkWithTooltip>
      </Menu.Item>
      <Menu.Item key="base">
        <NavLinkWithTooltip to="/base" titleText="Ctrl + B">
          <Icon type="check-circle" />
          Base
        </NavLinkWithTooltip>
      </Menu.Item>
      <Menu.Item key="about">
        <NavLinkWithTooltip to="/about" titleText="Ctrl + I">
          <Icon type="info-circle" />
          About
        </NavLinkWithTooltip>
      </Menu.Item>
      <Menu.Item key="news">
        <NavLinkWithTooltip to="/news" titleText="Ctrl + Y">
          <Icon type="question-circle" />
          News
        </NavLinkWithTooltip>
      </Menu.Item>
    </StyledMenu>
  );
};

// {logo} // TODO : provide logo through SSR
export const App = ({ initTheme, changeThemeAction }) => {
  const [keyEvent, setKeyEvent] = useState(null);
  const [visible, setVisible] = useState(false);

  function toggleTheme(color) {
    changeThemeAction(themes[color] || themes.light);
  }

  const onKeyDown = (e: KeyboardEvent) => {
    setVisible(e.ctrlKey ? true : e.code !== 'Escape');
    setKeyEvent(e);
  };

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown, false);

    return () => {
      document.removeEventListener('keydown', onKeyDown, false);
    };
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme: initTheme,
        toggleTheme
      }}
    >
      <KeyDownEventContext.Provider
        value={{
          keyDownEvent: keyEvent,
          tooltipVisibility: visible
        }}
      >
        <AppBlock onKeyDown={onKeyDown}>
          <GlobalStyle />
          <Header>
            <CustomMenu />
            <ThemeContainer />
            <HeaderMain>
              <AnimateLogo src="./favicon.ico" alt="logo" />
              <Title>Blog</Title>
            </HeaderMain>
            <NewsWrapper />
          </Header>
          <Chapter>Welcome to Blog Maker!</Chapter>
          <ErrorBoundary>
            <MainLayout />
          </ErrorBoundary>
        </AppBlock>
      </KeyDownEventContext.Provider>
    </ThemeContext.Provider>
  );
};

App.propTypes = {
  changeThemeAction: PropTypes.func.isRequired,
  initTheme: PropTypes.shape({
    foreground: PropTypes.string,
    background: PropTypes.string
  }).isRequired
};

export default connect(
  state => ({
    initTheme: state.theme.value
  }),
  {
    changeThemeAction: changeTheme
  }
)(App);
