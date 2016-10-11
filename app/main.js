import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { compose, createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import reduxPromise from 'redux-promise';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { indigo500 } from 'material-ui/styles/colors';
import injectTapEventPlugin from 'react-tap-event-plugin';
import routes from './routes';
import { loadState, saveState } from './localStorage';

import reducers from './reducers/index';

injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: indigo500,
  },
});


const applyMiddlewares = applyMiddleware(
  reduxPromise
);

const createStoreWithMiddleware = compose(
  applyMiddlewares,
  window.devToolsExtension ? window.devToolsExtension() : f => f
);


const persistedState = loadState();

const store = (createStoreWithMiddleware(createStore)(
    reducers,
    persistedState
));

store.subscribe(() => {
  saveState(store.getState());
});


ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <Provider store={store}>
      <Router history={browserHistory} routes={routes} />
    </Provider>
  </MuiThemeProvider>
  , document.querySelector('.root'));
