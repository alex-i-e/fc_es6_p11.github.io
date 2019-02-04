import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { createStore } from 'redux';
import App from './src/components/App/App';
import reducer from './src/reducers/reducer';
import serverTemplate from './src/serverTemplate';

const app = express();

app.get('/', function (req, res) {
  // Create a new Redux store instance
  const store = createStore(reducer);
  
  const context = {};
  const appString = renderToString(
    <Provider store={store}>
      <StaticRouter
        location={req.url}
        context={context}>
        <App />
      </StaticRouter>
    </Provider>
  );
  
  // Grab the initial state from our Redux store
  const preloadedState = store.getState();
  
  // context.url will contain the URL to redirect to if a <Redirect> was used
  if (context.url) {
    res.writeHead(302, {
      Location: context.url
    });
    res.end();
  } else {
    // Send the rendered page back to the client
    res.send(serverTemplate(appString, preloadedState));
    res.end();
  }
  
});

app.use('/static', express.static('./build/static'));

app.listen(9000);
// eslint-disable-next-line
console.log('GOOD: /localhost:9000');