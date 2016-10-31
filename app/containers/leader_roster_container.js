import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import ErrorDisplay from '../containers/error_container';
import * as actions from '../actions';
import LeaderRoster from '../components/leader_roster';
import LoadingComponent from './loading_container';

const style = {
  margin: 'auto',
  marginTop: '12px',
  marginBottom: '12px',
};

class LeaderRosterContainer extends Component {
  componentWillMount() {
    this.props.getLeaders();
  }
  render() {
    if (!this.props.leaders.leaders || this.props.leaders.leaders.length === 0) {
      if (this.props.error) {
        return <ErrorDisplay />;
      }
      return (
        <div style={{ position: 'relative' }}>
          <LoadingComponent />
          <div className="row">
            <div className="col-sm-12 text-center">
              <Link to="/leaders/add" >
                <RaisedButton
                  type="button"
                  label="Add Leader"
                  style={style}
                  labelColor={'#FFF'}
                  primary
                />
              </Link>
            </div>
          </div>
          <div>No Leaders</div>
        </div>
      );
    }
    return (
      <div>
        <div className="row">
          <div className="col-sm-12 text-center">
            <Link to="/leaders/add" >
              <RaisedButton
                type="button"
                label="Add Leader"
                style={style}
                labelColor={'#FFF'}
                primary
              />
            </Link>
          </div>
        </div>
        <div className="row">
          <LeaderRoster
            leaders={this.props.leaders.leaders}
          />
        </div>
      </div>
    );
  }
}

LeaderRosterContainer.propTypes = {
  leaders: PropTypes.object,
  error: PropTypes.string,
  getLeaders: PropTypes.func,
};


const mapStateToProps = ({ leaders, error }) => (
  { leaders, error }
);


export default connect(mapStateToProps, actions)(LeaderRosterContainer);
