import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';

import AddScoutContainer from './containers/add_scout_container';
import AddScoutResponse from './containers/add_scout_response';
import ScoutDetailContainer from './containers/scout_detail_container';
import ConfirmScoutResponse from './containers/confirm_scout_response_container';
import RosterContainer from './containers/roster_container';
import Signup from './containers/signup';
import Signin from './containers/signin';
import Signout from './containers/signout';
import Home from './components/home';
import requireAuth from './containers/require_auth';

export default (
  <Route path="/" component={App} >
    <IndexRoute component={Home} />
    <Route path="/signup" component={Signup} />
    <Route path="/signin" component={Signin} />
    <Route path="/signout" component={Signout} />
    <Route path="/scouts" component={requireAuth(RosterContainer)} />
    <Route path="/scouts/add" component={requireAuth(AddScoutContainer)} />
    <Route path="/scouts/update/:id" component={requireAuth(AddScoutContainer)} />
    <Route path="/scouts/detail/:id" component={requireAuth(ScoutDetailContainer)} />
    <Route path="/scouts/add-confirm" component={requireAuth(AddScoutResponse)} />
    <Route path="/scouts/update-confirm" component={requireAuth(ConfirmScoutResponse)} />
  </Route>
);
