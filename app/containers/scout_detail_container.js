import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import ScoutDetail from '../components/scout_detail';
import ConfirmToolbar from '../components/confirm_toolbar';
import ErrorDisplay from './error_container';
import LoadingComponent from './loading_container';
import AdvDisplay from '../components/scout_adv_display';
import Test from '../components/test';


class ScoutDetailContainer extends Component {
  componentDidMount() {
    if (this.props.scouts.allScouts.length !== 1) {
      setTimeout(() => {
        this.props.getScoutDetail(this.props.params.id);
      }, 1000);
    } else {
      this.props.getScoutDetail(this.props.params.id);
    }
  }

  render() {
    const { scouts, error } = this.props;
    if (!scouts.allScouts || scouts.allScouts.length !== 1) {
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
            scout={scouts.allScouts[0]}
            removeScout={this.props.removeScout}
          />
        </div>
        <div className="row">
          <LoadingComponent />
          <ScoutDetail
            scout={scouts.allScouts[0]}
            removeScout={this.props.removeScout}
          />
        </div>
        <div className="row">
          <Test scout={scouts.allScouts[0]} />
          {/* <AdvDisplay scout={scouts.allScouts[0]} /> */}
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
