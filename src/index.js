import 'babel-polyfill'; // TODO; add polyfill to project
import ReactDOM from 'react-dom';
import React from 'react';
import {configureStore} from './configureStore';
import Root from './components/Root/Root';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import 'rxjs';
import NotificationFactory from './webApi/notification';

const notification = new NotificationFactory();
notification.requestDesktopNotificationPermission();

const store = configureStore();

// render / hydrate
ReactDOM.hydrate(
    <Root store={store}/>,
    document.getElementById('root')
);

registerServiceWorker();
