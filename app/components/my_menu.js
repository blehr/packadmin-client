import React, { PropTypes } from 'react';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router';
import { connect } from 'react-redux';

const MyMenu = ({ auth }) => {
  if (auth.authenticated) {
    return (
      <div className="my-menu">
        <Link to="/" ><FlatButton label="Home" labelStyle={{ color: '#FFF' }} /></Link>
        <Link to="/scouts" ><FlatButton label="Roster" labelStyle={{ color: '#FFF' }} /></Link>
        <Link to="/scouts/add" ><FlatButton label="Add Scouts" labelStyle={{ color: '#FFF' }} /></Link>
      </div>
    );
  }
  return (
    <div className="my-menu">
      <Link to="/" ><FlatButton label="Home" labelStyle={{ color: '#FFF' }} /></Link>
      <Link to="/signin" ><FlatButton label="Sign In" labelStyle={{ color: '#FFF' }} /></Link>
      <Link to="/signup" ><FlatButton label="SIgn Up" labelStyle={{ color: '#FFF' }} /></Link>
    </div>
  );
};

MyMenu.propTypes = {
  auth: PropTypes.object,
};

const mapStateToProps = ({ auth }) => ({
  auth,
});

export default connect(mapStateToProps)(MyMenu);
