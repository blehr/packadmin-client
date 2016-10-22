import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions'
import ScoutDetail from '../components/scout_detail';
import ConfirmToolbar from '../components/confirm_toolbar';
import ErrorDisplay from './error_container';


const ConfirmScoutContainer = ({ scouts, error, removeScout }) => {

  if (!scouts.singleScout) {
    if (error) {
      return <ErrorDisplay />;
    }
    return <div>No Scout</div>;
  }
  return (
    <div>
      <div className="row">
        <ConfirmToolbar scout={scouts.singleScout} removeScout={removeScout} />
      </div>
      <div className="row">
        <ScoutDetail scout={scouts.singleScout} removeScout={removeScout} />
      </div>
    </div>
  );
};


ConfirmScoutContainer.propTypes = {
  scouts: PropTypes.object,
  removeScout: PropTypes.func,
  error: PropTypes.string,
};


const mapStateToProps = ({ scouts, error }) => (
  { scouts, error }
);

export default connect(mapStateToProps, actions)(ConfirmScoutContainer);
