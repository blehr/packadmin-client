import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ScoutDetail from '../components/scout_detail';
import { removeScout } from '../actions/index';
import ConfirmToolbar from '../components/confirm_toolbar';
import ErrorDisplay from './error_container';


const AddScoutContainer = (props) => {
  const { scoutDetail, removeScout, error } = props;
  if (!scoutDetail.scoutDetail) {
    if (error) {
      return <ErrorDisplay />;
    }
    return <div>No Scout</div>;
  }
  return (
    <div>
      <div className="row">
        <ConfirmToolbar scout={scoutDetail.scoutDetail} removeScout={removeScout} />
      </div>
      <div className="row">
        <ScoutDetail scout={scoutDetail.scoutDetail} removeScout={removeScout} />
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

const mapDispatchToProps = dispatch => (
  bindActionCreators({ removeScout }, dispatch)
);


export default connect(mapStateToProps, mapDispatchToProps)(AddScoutContainer);
