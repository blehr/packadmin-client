import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { blue500 } from 'material-ui/styles/colors';
import injectTapEventPlugin from 'react-tap-event-plugin';
import routes from './routes';

import storeConfig from './store';

injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: blue500,
  },
});

const store = storeConfig();

ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <Provider store={store}>
      <Router history={browserHistory} routes={routes} />
    </Provider>
  </MuiThemeProvider>
  , document.querySelector('.root'));
