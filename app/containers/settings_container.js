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
            <div className="help-text">
              <h2 className="text-center">Thank You, for using The Pack Admin!</h2>
              <p><span className="text-danger">Before deleting a den</span> that you have created, first add the new den and edit the scouts in the old den to be a memeber of the new den before deleting the old one.</p>

              <p>If you decide to <span className="text-danger">create dens after using the default dens</span> and adding scouts to them. First recreate all of the default dens and then the new dens. Now you can move scouts into the new dens and then delete the former.</p>
              <p>Default Dens: Lion, Tiger, Wolf, Bear, Webelos 1, Webelos 2</p>
            </div>
            <div className="add-dens-flex-container">
              <div className="add-dens-flex-col">
                <CreateDens />
              </div>
              <div className="add-dens-flex-col">
                <legend style={{ marginBottom: '36px' }}>Your Dens</legend>

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
