import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions'
import ScoutDetail from '../components/scout_detail';
import ConfirmToolbar from '../components/confirm_toolbar';
import ErrorDisplay from './error_container';


const ConfirmScoutContainer = ({ editScout, error, removeScout }) => {

  if (!editScout.scoutToUpdate) {
    if (error) {
      return <ErrorDisplay />;
    }
    return <div>No Scout</div>;
  }
  return (
    <div>
      <div className="row">
        <ConfirmToolbar scout={editScout.scoutToUpdate} removeScout={removeScout} />
      </div>
      <div className="row">
        <ScoutDetail scout={editScout.scoutToUpdate} removeScout={removeScout} />
      </div>
    </div>
  );
};


ConfirmScoutContainer.propTypes = {
  editScout: PropTypes.object,
  removeScout: PropTypes.func,
  error: PropTypes.string,
};


const mapStateToProps = ({ editScout, error }) => (
  { editScout, error }
);

export default connect(mapStateToProps, actions)(ConfirmScoutContainer);
