import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeScout } from '../actions/index';
import ScoutDetail from '../components/scout_detail';
import ConfirmToolbar from '../components/confirm_toolbar';


class ConfirmScoutContainer extends Component {
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
