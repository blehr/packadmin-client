import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class ErrorDisplay extends Component {

  render() {
    if (this.props.error !== '') {
      const keys = Object.keys(this.props.error);
      let message = '';
      keys.map((property) => {
        message += this.props.error[property].message;
        return message;
      });
      return (
        <div className="alert alert-danger" >
          <strong>Looks like there is a problem </strong>
          {message}
        </div>
      );
    }
    return null;
  }
}

ErrorDisplay.propTypes = {
  error: PropTypes.object,
};

const mapStateToProps = ({ error }) => (
  { error }
);

export default connect(mapStateToProps, actions)(ErrorDisplay);
