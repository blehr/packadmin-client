import React, { Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeScout } from '../actions/index';
import ScoutDetail from '../components/scout_detail';
import ConfirmToolbar from '../components/confirm_toolbar';


class ConfirmScoutContainer extends Component {
  static propTypes = {
    editScout: PropTypes.object,
    removeSscout: PropTypes.func
  }
  
  constructor(props) {
    super(props);
  }
  
  render() {
    const { editScout } = this.props;
    
    return (
      <div className="row">
        <ConfirmToolbar scout={editScout} removeScout={this.props.removeScout} />
        <ScoutDetail scout={editScout} removeScout={this.props.removeScout} /> 
      </div>
    );
  }
}


const mapStateToProps = function({ editScout }) {
  return { editScout };
};

const mapDispatchToProps = function(dispatch) {
  return bindActionCreators({ removeScout }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmScoutContainer);