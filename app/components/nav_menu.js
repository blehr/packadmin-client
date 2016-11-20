import React, { PropTypes } from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions';

const NavMenu = ({ auth, signoutUser }) => (
  <div className="nav-menu">
    <IconMenu
      iconButtonElement={<IconButton><MoreVertIcon color="#FFF" /></IconButton>}
      listStyle={{ listStyle: 'none' }}
      anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
      targetOrigin={{ horizontal: 'left', vertical: 'top' }}
    >
      <Link to="/" onlyActiveOnIndex index ><MenuItem primaryText="Home" /></Link>
      { auth.authenticated && <Link to="/welcome" ><MenuItem primaryText="Welcome" /></Link> }
      { auth.authenticated && <Link to="/scouts"><MenuItem primaryText="Roster" /></Link> }
      { auth.authenticated && <Link to="/scouts/add" ><MenuItem primaryText="Add Scouts" /></Link> }
      { auth.authenticated && <Link to="/leaders" ><MenuItem primaryText="Leaders" /></Link> }
      { auth.authenticated &&
        <Link to="/scouts/pdf"><MenuItem primaryText="Download Scouts" /></Link> }
      { auth.authenticated &&
        <Link to="/leaders/pdf"><MenuItem primaryText="Download Leaders" /></Link> }
      { auth.authenticated &&
        <Link to="/create-dens" ><MenuItem primaryText="Create Dens" /></Link> }
      { !auth.authenticated && <Link to="/signin" ><MenuItem primaryText="Sign in" /></Link> }
      { !auth.authenticated && <Link to="/signup" ><MenuItem primaryText="Sign up" /></Link> }
      { auth.authenticated && <Link to="/profile" ><MenuItem primaryText="Profile" /></Link> }
      { auth.authenticated &&
        <MenuItem primaryText="Sign out" onTouchTap={() => signoutUser()} /> }
    </IconMenu>
  </div>
);

NavMenu.propTypes = {
  auth: PropTypes.object,
  signoutUser: PropTypes.func,
};

const mapStateToProps = ({ auth }) => ({
  auth,
});

export default connect(mapStateToProps, actions)(NavMenu);
