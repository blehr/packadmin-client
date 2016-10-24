import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import ScoutDetail from '../components/scout_detail';
import ConfirmToolbar from '../components/confirm_toolbar';
import ErrorDisplay from './error_container';
import LoadingComponent from './loading_container';


class ScoutDetailContainer extends Component {
  componentDidMount() {
    if (!this.props.scouts.allScouts) {
      setTimeout(() => {
        this.props.getScoutDetail(this.props.params.id);
      }, 2000);
    } else {
      this.props.getScoutDetail(this.props.params.id);
    }
  }

  render() {
    const { scouts, error } = this.props;
    if (!scouts.singleScout || !scouts.singleScout.scoutFirstName) {
      if (error) {
        return <ErrorDisplay />;
      }
      return (
        <div style={{ position: 'relative' }}>
          <LoadingComponent />
        </div>
      );
    }

    return (
      <div>
        <div className="row">
          <ConfirmToolbar
            scout={this.props.scouts.singleScout}
            removeScout={this.props.removeScout}
          />
        </div>
        <div className="row">
          <LoadingComponent />
          <ScoutDetail
            scout={this.props.scouts.singleScout}
            removeScout={this.props.removeScout}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ scouts, error }) => (
  { scouts, error }
);

ScoutDetailContainer.propTypes = {
  getScoutDetail: PropTypes.func,
  scouts: PropTypes.object,
  removeScout: PropTypes.func,
  params: PropTypes.object,
  id: PropTypes.number,
  error: PropTypes.string,
};

export default connect(mapStateToProps, actions)(ScoutDetailContainer);
