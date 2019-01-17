import React, {Component, Fragment} from 'react';
import BlogSector from './BlogSector/BlogSector';
import NavigatorSector from './NavigatorSector/NavigatorSector';
import {ThemeContext} from '../../context/theme-context';
import {Router, Switch, Route, withRouter} from 'react-router';
import {history} from '../../store';
import styled from 'styled-components';
import initGoogleMap, {prefixScript, affixScriptToHead, onLoadCallback} from '../../webApi/initGoogleMap';

const Content = styled.div`
`;
const Map = styled.div`
    height: 400px;
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
        <Fragment>
            <div>Base</div>
            <Map id='map'></Map>
        </Fragment>

    );
};
const withRouterWrapper = (WrappedComponent) => {

    const API_KEY = 'AIzaSyCKA-4G14Aehm3qsiejmYsk3E6aSH2cKNI';

    class routerWrapper extends Component {

        componentDidMount() {
            affixScriptToHead(
                `https://maps.googleapis.com/maps/api/js?key=${API_KEY}`, // &callback=initMap
                onLoadCallback
            )
                .then(data => data())
                .then(data => console.log(' >>>', data));
        }

        render() {
            // withRouter props
            // const {match, location, history} = this.props;

            return (
                <WrappedComponent {...this.props}/>
            );
        }
    }

    return routerWrapper;

};

const withRouterComponent = withRouterWrapper(Base);

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
                <Route path="/main" component={MainPage}/>
                <Route path="/base" component={withRouterComponent}/>
                <Route path="/about" component={About}/>
                <Route path="/news" component={News}/>
                <Route path="/" exact component={InitPage}/>
                <Route component={NoMatch}/>
            </Switch>
        </Router>
    </Content>
);

export default MainSector;