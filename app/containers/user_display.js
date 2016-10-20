import React, { Component, Proptypes } from 'react'
import { connect } from 'react-redux';

const UserDisplay = ({ user }) => {
  if (user.profile && user.profile.name) {
    return (
      <div>
        <h4>{user.profile.name} Pack {user.profile.packNumber}</h4>
      </div>
    );
  }
  return null;
};
  
const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps)(UserDisplay);