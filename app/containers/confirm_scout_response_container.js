import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions'
import ScoutDetail from '../components/scout_detail';
import ConfirmToolbar from '../components/confirm_toolbar';
import ErrorDisplay from './error_container';


const ConfirmScoutContainer = ({ scoutDetail, error, removeScout }) => {

  if (!scoutDetail.scout) {
    if (error) {
      return <ErrorDisplay />;
    }
    return <div>No Scout</div>;
  }
  return (
    <div>
      <div className="row">
        <ConfirmToolbar scout={scoutDetail.scout} removeScout={removeScout} />
      </div>
      <div className="row">
        <ScoutDetail scout={scoutDetail.scout} removeScout={removeScout} />
      </div>
    </div>
  );
};


ConfirmScoutContainer.propTypes = {
  scoutDetail: PropTypes.object,
  removeScout: PropTypes.func,
  error: PropTypes.string,
};


const mapStateToProps = ({ scoutDetail, error }) => (
  { scoutDetail, error }
);

export default connect(mapStateToProps, actions)(ConfirmScoutContainer);
