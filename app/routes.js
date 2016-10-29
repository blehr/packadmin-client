import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';

import AddScoutContainer from './containers/add_scout_container';
import ScoutDetailContainer from './containers/scout_detail_container';
import RosterContainer from './containers/roster_container';
import Signup from './containers/signup';
import Signin from './containers/signin';
import Home from './components/home';
import Profile from './containers/profile';
import requireAuth from './containers/require_auth';

import Advancement from './containers/adv_container';

export default (
  <Route path="/" component={App} >
    <IndexRoute component={Home} />
    <Route path="/signup" component={Signup} />
    <Route path="/signin" component={Signin} />
    <Route path="/profile" component={requireAuth(Profile)} />
    <Route path="/tiger" component={Advancement} />
    <Route path="/scouts" component={requireAuth(RosterContainer)} />
    <Route path="/scouts/add" component={requireAuth(AddScoutContainer)} />
    <Route path="/scouts/update/:id" component={requireAuth(AddScoutContainer)} />
    <Route path="/scouts/detail/:id" component={requireAuth(ScoutDetailContainer)} />
    <Route path="/scouts/detail/:id/advancement" component={requireAuth(Advancement)} />
    <Route path="/scouts/add-confirm" component={requireAuth(ScoutDetailContainer)} />
    <Route path="/scouts/update-confirm" component={requireAuth(ScoutDetailContainer)} />
  </Route>
);
