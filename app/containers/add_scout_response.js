import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ScoutDetail from '../components/scout_detail';
import { removeScout } from '../actions/index';
import ConfirmToolbar from '../components/confirm_toolbar';


const AddScoutContainer = (props) => {
  const { scoutDetail, removeScout } = props;
 
  if (!scoutDetail.data ) {
    return <div>No Scout</div>;
  } else {
    return (
      <div className="row">
        <ConfirmToolbar scout={scoutDetail.data} removeScout={removeScout} />
        <ScoutDetail scout={scoutDetail.data} removeScout={removeScout} /> 
      </div> 
    );
  }
  
};

AddScoutContainer.propTypes = {
  scoutDetail: PropTypes.object,
  removeScout: PropTypes.func
};


const mapStateToProps = function({ scoutDetail }) {
  return { scoutDetail };
};

const mapDispatchToProps = function(dispatch) {
    return bindActionCreators({ removeScout }, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(AddScoutContainer);
