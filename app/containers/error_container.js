import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class ErrorDisplay extends Component {
  componentWillUnmount() {
    // this.props.clearError();
    // console.log('error unmount');
  }
  render() {
    if (this.props.error) {
      return (
        <div className="alert alert-danger text-center" >
          <strong>Looks like there is a problem. </strong><br />
          {this.props.error}
        </div>
      );
    }
    return null;
  }
}

ErrorDisplay.propTypes = {
  error: PropTypes.string,
  clearError: PropTypes.func,
};

const mapStateToProps = ({ error }) => (
  { error }
);

export default connect(mapStateToProps, actions)(ErrorDisplay);
