import React, { Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getScoutDetail, removeScout } from '../actions/index';
import ScoutDetail from '../components/scout_detail';
import ConfirmToolbar from '../components/confirm_toolbar';


class ScoutDetailContainer extends Component {
  static propTypes = {
    scoutDetail: PropTypes.object,
    removeScout: PropTypes.func
  }
  
  constructor(props) {
    super(props);
  }
  
  componentWillMount() {
    this.props.getScoutDetail(this.props.params.id);
  }
 
  render() {
    const { scoutDetail } = this.props;
    if (!scoutDetail.data) {
      return <div>No Scout</div>;
   
    } else {

        return (
          <div className="row">
            <ConfirmToolbar scout={scoutDetail.data} removeScout={this.props.removeScout} />
            <ScoutDetail scout={scoutDetail.data} removeScout={this.props.removeScout} /> 
          </div>
        );
    }
  }
}




const mapStateToProps = function({ scoutDetail }) {
  return { scoutDetail };
};

const mapDispatchToProps = function(dispatch) {
  return bindActionCreators({  getScoutDetail,  removeScout }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ScoutDetailContainer);