import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getScoutDetail, removeScout } from '../actions/index';
import ScoutDetail from '../components/scout_detail';
import ConfirmToolbar from '../components/confirm_toolbar';


class ScoutDetailContainer extends Component {
  componentWillMount() {
    this.props.getScoutDetail(this.props.params.id);
  }

  render() {
    const { scoutDetail } = this.props;
    if (!scoutDetail.data) {
      return <div>No Scout</div>;
    }

    return (
      <div>
        <div className="row">
          <ConfirmToolbar
            scout={this.props.scoutDetail.data}
            removeScout={this.props.removeScout}
          />
        </div>
        <div className="row">
          <ScoutDetail
            scout={this.props.scoutDetail.data}
            removeScout={this.props.removeScout}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ scoutDetail }) => (
  { scoutDetail }
);

const mapDispatchToProps = dispatch => (
  bindActionCreators({ getScoutDetail, removeScout }, dispatch)
);

ScoutDetailContainer.propTypes = {
  getScoutDetail: PropTypes.func,
  scoutDetail: PropTypes.object,
  removeScout: PropTypes.func,
  params: PropTypes.object,
  id: PropTypes.number,
};

export default connect(mapStateToProps, mapDispatchToProps)(ScoutDetailContainer);
