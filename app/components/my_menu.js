import React, { PropTypes } from 'react';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router';
import { connect } from 'react-redux';

const MyMenu = ({ auth, loc }) => {
  if (auth.authenticated) {
    return (
      <div className="my-menu">
        <Link to="/" className="home-link" ><FlatButton label="Home" labelStyle={{ color: '#FFF' }} /></Link>
        <Link to="/scouts" className={loc === '/scouts' ? 'roster-link' : ''} ><FlatButton label="Roster" labelStyle={{ color: '#FFF' }} /></Link>
        <Link to="/scouts/add" className="add-scout-link" ><FlatButton label="Add Scouts" labelStyle={{ color: '#FFF' }} /></Link>
      </div>
    );
  }
  return (
    <div className="my-menu">
      <Link to="/" className="home-link" ><FlatButton label="Home" labelStyle={{ color: '#FFF' }} /></Link>
      <Link to="/signin" ><FlatButton label="Sign In" labelStyle={{ color: '#FFF' }} /></Link>
      <Link to="/signup" ><FlatButton label="SIgn Up" labelStyle={{ color: '#FFF' }} /></Link>
    </div>
  );
};

MyMenu.propTypes = {
  auth: PropTypes.object,
  loc: PropTypes.string,
};

const mapStateToProps = ({ auth }) => ({
  auth,
});

export default connect(mapStateToProps)(MyMenu);
