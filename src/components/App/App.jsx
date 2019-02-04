import React, { useEffect, useReducer } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import { changeTheme } from '../../actions/theme';
import { ThemeContext, themes } from '../../context/theme-context';
import changeThemeReducer from '../../reducers/group/theme';
import { store } from '../../store';
import MainSector from '../MainSector/MainSector';
import NewsBlock from '../NewsBlock/NewsBlock';
import ErrorBoundary from '../shared/ErrorBoudary/ErrorBoundary';
import ThemeContainer from '../ThemeContainer/ThemeContainer';

const AppBlock = styled.div`
  text-align: center;
`;
const Header = styled.header`
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
const NewsWrapper = styled(NewsBlock)`
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
const TopMenu = styled.div`
  position: fixed;
  width: 100%;
  height: 40px;
  background-color: #080015;
  color: snow;
  display: flex;
  flex-flow: row;
  align-content: center;
  justify-items: left;
  align-items: center;
`;
const MenuItem = styled.div`
  margin-left: 10px;
  width: 70px;
  text-overflow: ellipsis;
  text-decoration: none;
`;

const NavLinkWrapper = styled(NavLink)`
  text-decoration: none;

  &:focus {
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    border-radius: 4px;
    padding: 2px 4px;
  }
`;

const Menu = () => {
  return (
    <TopMenu>
      <MenuItem>
        <NavLinkWrapper to="/main">Main info</NavLinkWrapper>
      </MenuItem>
      <MenuItem>
        <NavLinkWrapper to="/base">Base</NavLinkWrapper>
      </MenuItem>
      <MenuItem>
        <NavLinkWrapper to="/about">About</NavLinkWrapper>
      </MenuItem>
      <MenuItem>
        <NavLinkWrapper to="/news">News</NavLinkWrapper>
      </MenuItem>
    </TopMenu>
  );
};

// {logo} // TODO : provide logo through SSR
export const App = () => {
  const [{ value }, dispatch] = useReducer(
    changeThemeReducer,
    store.getState().theme,
    changeTheme(themes.light)
  );
  
  useEffect(() => {
    // eslint-disable-next-line
    console.log(' state => ', value);
  });
  
  function toggleTheme(e) {
    const color = e.target.value;
    dispatch(changeTheme(themes[color] || themes.green));
  }
  
  return (
    <ThemeContext.Provider
      value={{
        theme: value,
        toggleTheme
      }}
    >
      <AppBlock>
        <GlobalStyle />
        <Menu />
        <Header>
          <AnimateLogo src="./favicon.ico" alt="logo" />
          <Title>Blog</Title>
          <NewsWrapper />
          <ThemeContainer />
        </Header>
        <Chapter>Welcome to Blog Maker!</Chapter>
        <ErrorBoundary>
          <MainSector />
        </ErrorBoundary>
      </AppBlock>
    </ThemeContext.Provider>
  );
};

export default connect(
  state => ({
    initTheme: state.theme.value
  }),
  { changeTheme }
)(App);
