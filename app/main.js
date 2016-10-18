import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { compose, createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import reduxPromise from 'redux-promise';
import reduxThunk from 'redux-thunk';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { blue500 } from 'material-ui/styles/colors';
import injectTapEventPlugin from 'react-tap-event-plugin';
import routes from './routes';
import { AUTH_USER } from './actions';

import reducers from './reducers/index';

injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: blue500,
  },
});


const applyMiddlewares = applyMiddleware(
  reduxPromise,
  reduxThunk
);

const createStoreWithMiddleware = compose(
  applyMiddlewares,
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = (createStoreWithMiddleware(createStore)(
    reducers,
));

const token = localStorage.getItem('token');

if (token) {
  store.dispatch({ type: AUTH_USER });
}

ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <Provider store={store}>
      <Router history={browserHistory} routes={routes} />
    </Provider>
  </MuiThemeProvider>
  , document.querySelector('.root'));
