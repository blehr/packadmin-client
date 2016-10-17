import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';


class Signout extends Component {
  componentWillMount() {
    this.props.signoutUser();
  }
  render() {
    return (
      <div>Bye Bye!</div>
    );
  }
}

Signout.propTypes = {
  signoutUser: PropTypes.func,
};

export default connect(null, actions)(Signout);
