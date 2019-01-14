import React from 'react';
import BlogSector from './BlogSector/BlogSector';
import NavigatorSector from './NavigatorSector/NavigatorSector';
import {ThemeContext} from '../../context/theme-context';
import {Router, Switch, Route} from 'react-router';
import {history} from '../../store';
import styled from 'styled-components';
import BlogForm from './NavigatorSector/BlogMakerSector/BlogForm/BlogForm';

const Content = styled.div`
`;

const MainPage = (props) => (
    <ThemeContext.Consumer>
        {({theme}) => (
            <div className="container main-sector"
                 style={{backgroundColor: theme.background}}>
                <BlogSector/>
                <NavigatorSector/>
            </div>
        )}
    </ThemeContext.Consumer>
);
const Base = (props) => {
    return (
        <div>Base</div>
    );
};
const About = (props) => {
    return (
        <div>About</div>
    );
};
const News = (props) => {
    return (
        <div>News</div>
    );
};
const InitPage = (props) => {
    return (
        <div>Init Page</div>
    );
};
const NoMatch = (props) => {
    return (
        <div>Url doesn't exist!</div>
    );
};

const MainSector = (props) => (
    <Content>
        <Router history={history}>
            <Switch>
                {/*<Route path="/edit" component={MainPage}/>*/}
                <Route path="/main" component={MainPage}/>
                <Route path="/base" component={Base}/>
                <Route path="/about" component={About}/>
                <Route path="/news" component={News}/>
                <Route path="/" exact component={InitPage}/>
                <Route component={NoMatch}/>
            </Switch>
        </Router>
    </Content>
);

export default MainSector;