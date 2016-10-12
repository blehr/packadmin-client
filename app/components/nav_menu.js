import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { Link } from 'react-router';

const NavMenu = () => (
  <div className="nav-menu">
    <IconMenu
      iconButtonElement={<IconButton><MoreVertIcon color="#FFF" /></IconButton>}
      listStyle={{ listStyle: 'none' }}
      anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
      targetOrigin={{ horizontal: 'left', vertical: 'top' }}
    >
      <Link to="/" onlyActiveOnIndex index ><MenuItem primaryText="Home" /></Link>
      <Link to="/scouts"><MenuItem primaryText="Roster" /></Link>
      <Link to="/scouts/add" ><MenuItem primaryText="Add Scouts" /></Link>
      <MenuItem primaryText="Profile" />
      <MenuItem primaryText="Sign out" />
    </IconMenu>
  </div>
);

export default NavMenu;
