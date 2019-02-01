import React, { Component, Fragment, useState } from 'react';
import { Route, Router, Switch } from 'react-router';
import styled from 'styled-components';
import { ThemeContext } from '../../context/theme-context';
import { history } from '../../store';
import { affixScriptToHead, onLoadCallback } from '../../webApi/initGoogleMap';
import BlogSector from './BlogSector/BlogSector';
import NavigatorSector from './NavigatorSector/NavigatorSector';

const Map = styled.div`
  height: 400px;
`;

export const MainPage = () => (
  <ThemeContext.Consumer>
    {({ theme }) => (
      <div className="container main-sector" style={{ backgroundColor: theme.background }}>
        <BlogSector />
        <NavigatorSector />
      </div>
    )}
  </ThemeContext.Consumer>
);
const Base = () => {
  return (
    <Fragment>
      <div>Base</div>
      <Map id="map" />
    </Fragment>
  );
};
const withRouterWrapper = WrappedComponent => {
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
      
      return <WrappedComponent {...this.props} />;
    }
  }
  
  return routerWrapper;
};

const withRouterComponent = withRouterWrapper(Base);

const About = () => <div>About</div>;

function News() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button type="button" onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

const InitPage = () => <div>Init Page</div>;

const NoMatch = () => <div>Url does not exist!</div>;

const MainSector = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={InitPage} />
      <Route path="/main" component={MainPage} />
      <Route path="/base" component={withRouterComponent} />
      <Route path="/about" component={About} />
      <Route path="/news" component={News} />
      <Route component={NoMatch} />
    </Switch>
  </Router>
);

export default MainSector;
