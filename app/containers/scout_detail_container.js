import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import * as actions from '../actions';
import ScoutDetail from '../components/scout_detail';
import ConfirmToolbar from '../components/confirm_toolbar';
import ErrorDisplay from './error_container';
import LoadingComponent from './loading_container';
import DisplayRankProgress from '../components/display_rank_progress';


class ScoutDetailContainer extends Component {
  constructor(props) {
    super(props);

    this.handleOnClickEdit = this.handleOnClickEdit.bind(this);
    this.handleOnClickDelete = this.handleOnClickDelete.bind(this);
  }
  componentDidMount() {
    if (this.props.params.id) {
      setTimeout(() => {
        this.props.getScoutDetail(this.props.params.id);
      }, 500);
    }
  }
  handleOnClickEdit() {
    browserHistory.push(`/scouts/update/${this.props.scouts.scoutDetail._id}`);
  }
  handleOnClickDelete() {
    this.props.removeScout(this.props.scouts.scoutDetail._id);
  }

  render() {
    const { scouts, error, user } = this.props;
    if (!scouts.scoutDetail || !scouts.scoutDetail.scoutFirstName) {
      if (error) {
        return <ErrorDisplay />;
      }
      return (
        <LoadingComponent />
      );
    }

    return (
      <div>
        <div className="row">
          <ConfirmToolbar
            id={scouts.scoutDetail._id}
            edit={this.handleOnClickEdit}
            remove={this.handleOnClickDelete}
          />
        </div>
        <div className="row">
          {this.props.loading && <LoadingComponent />}
          <ScoutDetail
            scout={scouts.scoutDetail}
          />
        </div>
        <div className="row">
          <DisplayRankProgress
            scout={scouts.scoutDetail}
            activeDen={scouts.advDen}
            customDens={user.profile.customDens}
            changeAdvDen={this.props.setAdvancement}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ scouts, error, user, loading }) => ({
  loading,
  user,
  scouts,
  error,
});

ScoutDetailContainer.propTypes = {
  loading: PropTypes.bool,
  setAdvancement: PropTypes.func,
  getScoutDetail: PropTypes.func,
  scouts: PropTypes.object,
  removeScout: PropTypes.func,
  params: PropTypes.object,
  user: PropTypes.object,
  id: PropTypes.number,
  error: PropTypes.string,
};

export default connect(mapStateToProps, actions)(ScoutDetailContainer);
