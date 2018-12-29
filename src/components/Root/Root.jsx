import React from 'react';
import {Provider} from 'react-redux';
import App from '../App';
import {history} from '../../store';
import {BrowserRouter, Router} from 'react-router-dom';

const Root = ({store}) => (
    <Provider store={store}>
        <Router history={history}>
            <App/>
        </Router>
    </Provider>
);

export default Root;

