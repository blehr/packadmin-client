import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { TextField } from 'redux-form-material-ui';
import * as actions from '../actions';
import CreateDens from './create_dens_container';
import StandardDens from '../components/standard_dens';
import DisplayCustomDens from '../components/display_custom_dens';


class Settings extends Component {
  constructor(props) {
    super(props);

    this.deleteDen = this.deleteDen.bind(this);
  }
  deleteDen(den) {
    this.props.deleteCustomDen(den);
  }

  render() {
    return (
      <div className="row">
        <div className="col-sm-12">
          <div className="welcome-card">
            <div className="add-dens-flex-container">
              <div className="add-dens-flex-col">
                <CreateDens />
              </div>
              <div className="add-dens-flex-col">
                <legend>Your Dens</legend>

                {
                    (this.props.user.profile.customDens.length === 0) &&
                      <StandardDens />
                }
                {
                    this.props.user.profile.customDens &&
                    this.props.user.profile.customDens.length > 0 &&
                      <DisplayCustomDens
                        customDens={this.props.user.profile.customDens}
                        deleteDen={this.deleteDen}
                      />
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Settings.propTypes = {
  user: PropTypes.object,
  deleteCustomDen: PropTypes.func,
};

const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps, actions)(Settings);
