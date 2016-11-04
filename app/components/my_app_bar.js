import React from 'react';
import { withRouter } from 'react-router';
import NavMenu from './nav_menu';
import ScoutSort from './scout_sort';
import MyMenu from './my_menu';

const MyAppBar = () => (
  <div className="my-app-bar">
    <NavMenu />
    <MyMenu loc={location.pathname} />
    <div className={location.pathname !== '/scouts' ? 'dropdown-small' : 'dropdown'}>
      {(() => { if (location.pathname === '/scouts' || location.pathname === '/scouts/pdf') { return <ScoutSort />; } return null; })()}
    </div>
  </div>
);

MyAppBar.contextTypes = {
  location: React.PropTypes.object,
};

export default withRouter(MyAppBar);
