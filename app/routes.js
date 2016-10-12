import React from 'react';
import { Route } from 'react-router';
import App from './components/app';

import MUIAddScoutContainer from './containers/MUI_add_scout_container';
import AddScoutResponse from './containers/add_scout_response';
import ScoutDetailContainer from './containers/scout_detail_container';
import ConfirmScoutResponse from './containers/confirm_scout_response_container';
import RosterContainer from './containers/roster_container';

export default (
  <Route path="/" component={App} >
    <Route path="/scouts" component={RosterContainer} />
    <Route path="/scouts/add" component={MUIAddScoutContainer} />
    <Route path="/scouts/update/:id" component={MUIAddScoutContainer} />
    <Route path="/scouts/detail/:id" component={ScoutDetailContainer} />
    <Route path="/scouts/add-confirm" component={AddScoutResponse} />
    <Route path="/scouts/update-confirm" component={ConfirmScoutResponse} />
  </Route>
);
