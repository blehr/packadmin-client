import React, { PropTypes } from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { Link } from 'react-router';
import { connect } from 'react-redux';

const NavMenu = ({ auth }) => (
  <div className="nav-menu">
    <IconMenu
      iconButtonElement={<IconButton><MoreVertIcon color="#FFF" /></IconButton>}
      listStyle={{ listStyle: 'none' }}
      anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
      targetOrigin={{ horizontal: 'left', vertical: 'top' }}
    >
      <Link to="/" onlyActiveOnIndex index ><MenuItem primaryText="Home" /></Link>
      { auth.authenticated && <Link to="/scouts"><MenuItem primaryText="Roster" /></Link> }
      { auth.authenticated && <Link to="/scouts/add" ><MenuItem primaryText="Add Scouts" /></Link> }
      { !auth.authenticated && <Link to="/signin" ><MenuItem primaryText="Sign in" /></Link> }
      { !auth.authenticated && <Link to="/signup" ><MenuItem primaryText="Sign up" /></Link> }
      { auth.authenticated && <Link to="/profile" ><MenuItem primaryText="Profile" /></Link> }
      { auth.authenticated && <Link to="/signout" ><MenuItem primaryText="Sign out" /></Link> }
    </IconMenu>
  </div>
);

NavMenu.propTypes = {
  auth: PropTypes.object,
};

const mapStateToProps = ({ auth }) => ({
  auth,
});

export default connect(mapStateToProps)(NavMenu);
