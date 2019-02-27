/* eslint-disable react/prop-types */
import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { history } from '../../store';
import App from '../App/App';
import { GeneralStore } from '../../reducers';
import { Store } from 'redux';

const Root = ({ store }: { store: Store<GeneralStore> }) => (
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
);

export default Root;
