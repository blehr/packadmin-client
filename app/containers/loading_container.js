import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const LoadingComponent = ({ loading }) => {
  if (loading) {
    return (
      <div className="loader">
        <div><i className="fa fa-spinner fa-pulse fa-5x fa-fw" aria-hidden="true" /></div>
      </div>
    );
  }
  return null;
};

LoadingComponent.propTypes = {
  loading: PropTypes.bool,
};

const mapStateToProps = ({ loading }) => ({
  loading,
});

export default connect(mapStateToProps)(LoadingComponent);
