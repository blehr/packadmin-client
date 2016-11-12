import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { blue500 } from 'material-ui/styles/colors';
import ga from 'react-ga';
import injectTapEventPlugin from 'react-tap-event-plugin';
import routes from './routes';

import storeConfig from './store';

injectTapEventPlugin();


ga.initialize('UA-87266467-1');

const logPageView = () => {
  ga.pageview(window.location.pathname);
};

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: blue500,
  },
});

const store = storeConfig();

ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <Provider store={store}>
      <Router history={browserHistory} routes={routes} onUpdate={logPageView} />
    </Provider>
  </MuiThemeProvider>
  , document.querySelector('.root'));
