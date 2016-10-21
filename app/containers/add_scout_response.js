import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import ScoutDetail from '../components/scout_detail';
import * as actions from '../actions';
import ConfirmToolbar from '../components/confirm_toolbar';
import ErrorDisplay from './error_container';


const AddScoutContainer = (props) => {
  const { scoutDetail, removeScout, error } = props;
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

AddScoutContainer.propTypes = {
  scoutDetail: PropTypes.obj,
  removeScout: PropTypes.func,
  error: PropTypes.string,
};


const mapStateToProps = ({ scoutDetail, error }) => (
  { scoutDetail, error }
);

export default connect(mapStateToProps, actions)(AddScoutContainer);
