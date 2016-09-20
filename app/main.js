import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { compose, createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import promise from 'redux-promise';
import routes from './routes';

import reducers from './reducers';


const applyMiddlewares = applyMiddleware(
  promise
);

const createStoreWithMiddleware = compose(applyMiddlewares, window.devToolsExtension ? window.devToolsExtension() : f => f);

const store = (createStoreWithMiddleware(createStore)(
    reducers
));


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('.root'));