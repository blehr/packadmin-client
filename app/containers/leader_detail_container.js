import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import LeaderDetail from '../components/leader_detail';
import LeaderConfirmToolbar from '../components/leader_confirm_toolbar';
import ErrorDisplay from './error_container';
import LoadingComponent from './loading_container';


class LeaderDetailContainer extends Component {
  componentDidMount() {
    if (this.props.params.id) {
      if (this.props.leaders.leaders.length !== 1) {
        setTimeout(() => {
          this.props.getLeader(this.props.params.id);
        }, 1000);
      } else {
        this.props.getLeader(this.props.params.id);
      }
    }
  }

  render() {
    const { leaders, error } = this.props;
    if (!leaders.leaders || leaders.leaders.length !== 1) {
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
          <LeaderConfirmToolbar
            leader={leaders.leaders[0]}
            removeLeader={this.props.removeLeader}
          />
        </div>
        <div className="row">
          <LoadingComponent />
          <LeaderDetail
            leader={leaders.leaders[0]}
            removeLeader={this.props.removeLeader}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ leaders, error }) => ({
  leaders,
  error,
});

LeaderDetailContainer.propTypes = {
  getLeader: PropTypes.func,
  leaders: PropTypes.object,
  removeLeader: PropTypes.func,
  params: PropTypes.object,
  id: PropTypes.number,
  error: PropTypes.string,
};

export default connect(mapStateToProps, actions)(LeaderDetailContainer);
