import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import ScoutDetail from '../components/scout_detail';
import ConfirmToolbar from '../components/confirm_toolbar';
import ErrorDisplay from './error_container';
import LoadingComponent from './loading_container';


const ConfirmScoutContainer = ({ scouts, error, removeScout }) => {
  if (!scouts.allScouts || scouts.allScouts.length !== 1) {
    if (error) {
      return <ErrorDisplay />;
    }
    return (
      <div style={{ position: 'relative' }}>
        <LoadingComponent />
      </div>
    );
  }
  return (
    <div>
      <div className="row">
        <ConfirmToolbar scout={scouts.allScouts[0]} removeScout={removeScout} />
      </div>
      <div className="row">
        <ScoutDetail scout={scouts.allScouts[0]} removeScout={removeScout} />
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
