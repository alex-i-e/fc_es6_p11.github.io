import 'babel-polyfill';
import 'normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';
import 'rxjs';
import Root from './components/Root/Root';
import { configureStore } from './configureStore';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import NotificationFactory from './webApi/notification';

NotificationFactory.requestDesktopNotificationPermission();

const store = configureStore();

// render / hydrate
ReactDOM.hydrate(<Root store={store} />, document.getElementById('root'));

registerServiceWorker();
