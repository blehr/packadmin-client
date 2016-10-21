import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ErrorDisplay from '../containers/error_container';
import * as actions from '../actions';
import Roster from '../components/roster';

class RosterContainer extends Component {
  componentDidMount() {
    this.props.getAllScouts();
    // this.props.clearScoutDetail();
  }

  render() {
    if (!this.props.allScouts.scouts || this.props.allScouts.scouts.length === 0) {
      if (this.props.error) {
        return <ErrorDisplay />;
      }
      return <div>No Scout</div>;
    }
    return (
      <div>
        <div className="row">
          <Roster
            scouts={this.props.allScouts.scouts}
            handleClick={this.onHandleClick}
            filter={this.props.sortedBy}
          />
        </div>
      </div>
    );
  }
}

RosterContainer.propTypes = {
  allScouts: PropTypes.object,
  sortedBy: PropTypes.string,
  getAllScouts: PropTypes.func,
  clearScoutDetail: PropTypes.func,
  error: PropTypes.string,
};


const mapStateToProps = ({ allScouts, sortedBy, error }) => (
  { allScouts, sortedBy, error }
);


export default connect(mapStateToProps, actions)(RosterContainer);
