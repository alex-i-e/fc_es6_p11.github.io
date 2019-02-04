import PropTypes from 'prop-types';
import React, { Component, Fragment, useEffect, useState } from 'react';
import { Route, Router, Switch } from 'react-router';
import styled from 'styled-components';
import { AgGridReact } from 'ag-grid-react';
import { themes } from '../../context/theme-context';
import { history } from '../../store';
import { affixScriptToHead, onLoadCallback } from '../../webApi/initGoogleMap';
import withToggleAndTheme from '../HOC/withToggleAndTheme';
import BlogSector from './BlogSector/BlogSector';
import NavigatorSector from './NavigatorSector/NavigatorSector';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

const Map = styled.div`
  height: 400px;
`;

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
        // eslint-disable-next-line
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

const News = ({ initialTableProps }) => {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const [rows, setRowsCount] = useState(initialTableProps.rowData);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  }, [count]);

  const addExtraRow = (fillNumber = 1) => {
    setRowsCount(
      Array.concat(
        rows,
        Array(fillNumber).fill({ make: 'Toyota', model: 'Celica', price: 35000 }, 0)
      )
    );
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <button type="button" onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <button type="button" onClick={() => addExtraRow(1)}>
        Fill 1+
      </button>
      <button type="button" onClick={() => addExtraRow(100)}>
        Fill 100+
      </button>
      <button type="button" onClick={() => addExtraRow(10000)}>
        Fill 10000+
      </button>
      <button type="button" onClick={() => addExtraRow(1000000)}>
        Fill 1000000+
      </button>
      <div
        className="ag-theme-balham"
        style={{
          height: '500px',
          width: 'auto'
        }}
      >
        <AgGridReact columnDefs={initialTableProps.columnDefs} rowData={rows} />
      </div>
    </div>
  );
};
News.propTypes = {
  initialTableProps: PropTypes.shape({
    columnDefs: PropTypes.arrayOf({
      headerName: PropTypes.string,
      field: PropTypes.string
    }),
    rowData: PropTypes.arrayOf({
      make: PropTypes.string,
      model: PropTypes.string,
      price: PropTypes.string
    })
  }).isRequired
};

const InitPage = () => {
  return <div>Init Page</div>;
};

const NoMatch = () => <div>Url does not exist!</div>;

const MainSector = () => {
  const tableProps = {
    columnDefs: [
      { headerName: 'Make', field: 'make' },
      { headerName: 'Model', field: 'model' },
      { headerName: 'Price', field: 'price' }
    ],
    rowData: [
      { make: 'Toyota', model: 'Celica', price: 35000 },
      { make: 'Ford', model: 'Mondeo', price: 32000 },
      { make: 'Porsche', model: 'Boxter', price: 72000 }
    ]
  };

  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={InitPage} />
        <Route path="/main" component={withToggleAndTheme(MainPage)} />
        <Route path="/base" component={withRouterComponent} />
        <Route path="/about" component={About} />
        <Route path="/news" render={() => <News initialTableProps={tableProps} />} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
};

export default MainSector;
