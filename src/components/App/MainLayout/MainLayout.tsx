import React, { lazy, Suspense } from 'react';
import { Route, Router, Switch } from 'react-router';
import { history } from '../../../store';
import withGoogleMap from '../../HOC/withGoogleMap';

const Loading = () => <div>Loading...</div>;
const LazyInitPage = lazy(() => import('./InitPage/InitPage'));
const LazyAboutPage = lazy(() => import('./AboutPage/AboutPage'));
const LazyMainPage = lazy(() => import('./MainPage/MainPage'));
const LazyBasePage = lazy(() => import('./BasePage/BasePage'));
const LazyNoMatchPage = lazy(() => import('./NoMatchPage/NoMatchPage'));
const LazyNewsPage = lazy(() => import('./NewsPage/NewsPage'));

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
      <Suspense fallback={Loading}>
        <Switch>
          <Route exact path="/" component={LazyInitPage} />
          <Route path="/main" component={LazyMainPage} />
          <Route path="/base" component={withGoogleMap(LazyBasePage)} />
          <Route path="/about" component={LazyAboutPage} />
          <Route path="/news" render={() => <LazyNewsPage initialTableProps={tableProps} />} />
          <Route component={LazyNoMatchPage} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default MainSector;
