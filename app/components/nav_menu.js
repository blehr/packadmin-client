import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton/IconButton';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import Tab from './tab';

const NavMenu = () => (
  <div>
    <IconMenu
      iconButtonElement={<IconButton><MenuIcon color="#FFF" /></IconButton>}
      listStyle={{ listStyle: 'none' }}
      anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
      targetOrigin={{ horizontal: 'left', vertical: 'top' }}
    >
      <Tab to="/" onlyActiveOnIndex index ><MenuItem primaryText="Home" /></Tab>
      <Tab to="/scouts"><MenuItem primaryText="Roster" /></Tab>
      <Tab to="/scouts/add" ><MenuItem primaryText="Add Scouts" /></Tab>
      <MenuItem primaryText="Profile" />
      <MenuItem primaryText="Sign out" />
    </IconMenu>
  </div>
);

export default NavMenu;
