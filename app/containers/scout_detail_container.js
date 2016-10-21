import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import ScoutDetail from '../components/scout_detail';
import ConfirmToolbar from '../components/confirm_toolbar';
import ErrorDisplay from './error_container';


class ScoutDetailContainer extends Component {
  componentWillMount() {
    this.props.getScoutDetail(this.props.params.id);
  }

  render() {
    const { scoutDetail, error } = this.props;
    if (!scoutDetail.scout) {
      if (error) {
        return <ErrorDisplay />;
      }
      return <div>No Scout</div>;
    }

    return (
      <div>
        <div className="row">
          <ConfirmToolbar
            scout={this.props.scoutDetail.scout}
            removeScout={this.props.removeScout}
          />
        </div>
        <div className="row">
          <ScoutDetail
            scout={this.props.scoutDetail.scout}
            removeScout={this.props.removeScout}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ scoutDetail, error }) => (
  { scoutDetail, error }
);

ScoutDetailContainer.propTypes = {
  getScoutDetail: PropTypes.func,
  scoutDetail: PropTypes.object,
  removeScout: PropTypes.func,
  params: PropTypes.object,
  id: PropTypes.number,
  error: PropTypes.string,
};

export default connect(mapStateToProps, actions)(ScoutDetailContainer);
