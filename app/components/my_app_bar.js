import React from 'react';
import { withRouter } from 'react-router';
import NavMenu from './nav_menu';
import ScoutSort from './scout_sort';
import MyMenu from './my_menu';

const MyAppBar = () => (
  <div className="my-app-bar">
    <NavMenu />
    <MyMenu />
    <div className="dropdown">
      {(() => { if (location.pathname === '/scouts') { return <ScoutSort />; } return null; })()}
    </div>
  </div>
);

MyAppBar.contextTypes = {
  location: React.PropTypes.object,
};

export default withRouter(MyAppBar);
