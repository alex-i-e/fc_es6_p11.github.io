import React from 'react';
import { Route, Router, Switch } from 'react-router';
import { history } from '../../../store';
import withToggleAndTheme from '../../HOC/withToggleAndTheme';
import withGoogleMap from '../../HOC/withGoogleMap';
import AboutPage from './AboutPage/AboutPage';
import NewsPage from './NewsPage/NewsPage';
import MainPage from './MainPage/MainPage';
import BasePage from './BasePage/BasePage';
import InitPage from './InitPage/InitPage';
import NoMatchPage from './NoMatchPage/NoMatchPage';

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
        <Route path="/base" component={withGoogleMap(BasePage)} />
        <Route path="/about" component={AboutPage} />
        <Route path="/news" render={() => <NewsPage initialTableProps={tableProps} />} />
        <Route component={NoMatchPage} />
      </Switch>
    </Router>
  );
};

export default MainSector;
