import React, {Component} from 'react';
import {connect} from 'react-redux';
import MainSector from './MainSector/MainSector';
import styled, {keyframes} from 'styled-components';
import {ThemeContext, themes} from '../context/theme-context';
import {changeTheme} from '../actionCreators/theme';


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
import {createGlobalStyle} from 'styled-components';
import NewsBlock from './NewsBlock/NewsBlock';
import ThemeContainer from './ThemeContainer/ThemeContainer';

const GlobalStyle = createGlobalStyle`
    body {
      margin: 0;
      padding: 0;
      font-family: sans-serif;
    }
`;

// {logo} // TODO : provide logo through SSR
class App extends Component {
    constructor(props) {
        super(props);
        const defaultTheme = themes.green;

        this.toggleTheme = (e) => {
            const color = e.currentTarget.value;
            this.props.changeTheme(themes[color] || defaultTheme);
        };
    }

    render() {
        return (
            <ThemeContext.Provider value={{
                theme: this.props.initTheme,
                toggleTheme: this.toggleTheme,
            }}>
                <AppBlock>
                    <GlobalStyle/>
                    <Header>
                        <AnimateLogo src='' alt="logo"/>
                        <Title>Blog on React</Title>
                        <NewsWrapper/>
                        <ThemeContainer/>
                    </Header>
                    <Chapter>
                        Welcome to Blog Maker!
                    </Chapter>
                    <MainSector/>
                </AppBlock>
            </ThemeContext.Provider>
        );
    }
};

export default connect(
    (state) => ({
        initTheme: state.theme.value
    }),
    {changeTheme}
)(App);
