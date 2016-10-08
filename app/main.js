import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { compose, createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import routes from './routes';
import reduxPromise from 'redux-promise';
import reducers from './reducers/index';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {indigo500} from 'material-ui/styles/colors';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: indigo500
  }
});


const applyMiddlewares = applyMiddleware(
  reduxPromise
);

const createStoreWithMiddleware = compose(applyMiddlewares, window.devToolsExtension ? window.devToolsExtension() : f => f);


const store = (createStoreWithMiddleware(createStore)(
    reducers
));


ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <Provider store={store}>
      <Router history={browserHistory} routes={routes} />
    </Provider>
  </MuiThemeProvider>
  , document.querySelector('.root'));