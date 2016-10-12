import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ScoutDetail from '../components/scout_detail';
import { removeScout } from '../actions/index';
import ConfirmToolbar from '../components/confirm_toolbar';


const AddScoutContainer = (props) => {
  const { scoutDetail, removeScout } = props;
  if (!scoutDetail.data) {
    return <div>No Scout</div>;
  }
  return (
    <div>
      <div className="row">
        <ConfirmToolbar scout={scoutDetail.data} removeScout={removeScout} />
      </div>
      <div className="row">
        <ScoutDetail scout={scoutDetail.data} removeScout={removeScout} />
      </div>
    </div>
  );
};

AddScoutContainer.propTypes = {
  scoutDetail: PropTypes.obj,
  removeScout: PropTypes.func,
};


const mapStateToProps = ({ scoutDetail }) => (
  { scoutDetail }
);

const mapDispatchToProps = dispatch => (
  bindActionCreators({ removeScout }, dispatch)
);


export default connect(mapStateToProps, mapDispatchToProps)(AddScoutContainer);
