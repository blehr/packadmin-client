import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllScouts, getScoutDetail } from '../actions/index';
import Roster from '../components/roster';

class RosterContainer extends Component {
  componentDidMount() {
    this.props.getAllScouts();
  }

  render() {
    if (!this.props.allScouts.data) {
      return <div>No Scout</div>;
    }
    return (
      <div>
        <div className="row">
          <Roster
            scouts={this.props.allScouts.data}
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
};


const mapStateToProps = ({ allScouts, sortedBy }) => (
  { allScouts, sortedBy }
);

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    getAllScouts,
    getScoutDetail,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(RosterContainer);
