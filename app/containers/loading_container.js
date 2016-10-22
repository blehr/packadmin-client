import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const LoadingComponent = ({ loading }) => {
  if (loading) {
    return (
      <div>
        <h3>Loading...</h3>
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
