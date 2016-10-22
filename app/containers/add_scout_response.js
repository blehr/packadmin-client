import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import ScoutDetail from '../components/scout_detail';
import * as actions from '../actions';
import ConfirmToolbar from '../components/confirm_toolbar';
import ErrorDisplay from './error_container';


const AddScoutContainer = (props) => {
  const { scouts, removeScout, error } = props;
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

AddScoutContainer.propTypes = {
  scouts: PropTypes.obj,
  removeScout: PropTypes.func,
  error: PropTypes.string,
};


const mapStateToProps = ({ scouts, error }) => (
  { scouts, error }
);

export default connect(mapStateToProps, actions)(AddScoutContainer);
