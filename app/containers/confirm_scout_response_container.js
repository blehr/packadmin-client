import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeScout } from '../actions/index';
import ScoutDetail from '../components/scout_detail';
import ConfirmToolbar from '../components/confirm_toolbar';


const ConfirmScoutContainer = ({ editScout, removeScout }) => (
  <div>
    <div className="row">
      <ConfirmToolbar scout={editScout} removeScout={removeScout} />
    </div>
    <div className="row">
      <ScoutDetail scout={editScout} removeScout={removeScout} />
    </div>
  </div>
);

ConfirmScoutContainer.propTypes = {
  editScout: PropTypes.object,
  removeScout: PropTypes.func,
};


const mapStateToProps = ({ editScout }) => (
  { editScout }
);

const mapDispatchToProps = dispatch => (
  bindActionCreators({ removeScout }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmScoutContainer);
