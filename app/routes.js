import React from 'react';
import { Route } from 'react-router';
import App from './components/app';

import AddScoutContainer from './containers/add_scout_container';
import AddScoutResponse from './containers/add_scout_response';
import ScoutDetailContainer from './containers/scout_detail_container';
import ConfirmScoutResponse from './containers/confirm_scout_response_container';
import RosterContainer from './containers/roster_container';
import Signup from './containers/signup';
import Signin from './containers/signin';
import Signout from './containers/signout';
import RequireAuth from './containers/require_auth';

export default (
  <Route path="/" component={App} >
    <Route path="/signup" component={Signup} />
    <Route path="/signin" component={Signin} />
    <Route path="/signout" component={Signout} />
    <Route path="/scouts" component={RequireAuth(RosterContainer)} />
    <Route path="/scouts/add" component={RequireAuth(AddScoutContainer)} />
    <Route path="/scouts/update/:id" component={RequireAuth(AddScoutContainer)} />
    <Route path="/scouts/detail/:id" component={RequireAuth(ScoutDetailContainer)} />
    <Route path="/scouts/add-confirm" component={RequireAuth(AddScoutResponse)} />
    <Route path="/scouts/update-confirm" component={RequireAuth(ConfirmScoutResponse)} />
  </Route>
);
