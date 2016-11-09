import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import * as actions from '../actions';
import LeaderDetail from '../components/leader_detail';
import ConfirmToolbar from '../components/confirm_toolbar';
import ErrorDisplay from './error_container';
import LoadingComponent from './loading_container';


class LeaderDetailContainer extends Component {
  constructor(props) {
    super(props);

    this.handleOnClickEdit = this.handleOnClickEdit.bind(this);
    this.handleOnClickDelete = this.handleOnClickDelete.bind(this);
  }
  componentDidMount() {
    if (this.props.params.id) {
      if (this.props.leaders.leaders.length < 1) {
        setTimeout(() => {
          this.props.getLeader(this.props.params.id);
        }, 1000);
      } else {
        this.props.getLeader(this.props.params.id);
      }
    }
  }
  handleOnClickEdit() {
    browserHistory.push(`/leaders/update/${this.props.leaders.leaderDetail._id}`);
  }
  handleOnClickDelete() {
    this.props.removeLeader(this.props.leaders.leaderDetail._id);
  }

  render() {
    const { leaders, error } = this.props;
    if (!leaders.leaders || !leaders.leaderDetail.firstName) {
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
            id={leaders.leaderDetail._id}
            edit={this.handleOnClickEdit}
            remove={this.handleOnClickDelete}
          />
        </div>
        <div className="row">
          <LoadingComponent />
          <LeaderDetail
            leader={leaders.leaderDetail}
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
