import React from 'react';
import AppBar from 'material-ui/AppBar';
import NavMenu from './nav_menu';
import ScoutSort from './scout_sort';

const AppBarNav = () => (
  <AppBar
    title="Scout Admin"
    iconElementLeft={<NavMenu />}
    iconElementRight={<ScoutSort />}
  />
);

export default AppBarNav;
