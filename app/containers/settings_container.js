import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { TextField } from 'redux-form-material-ui';
import * as actions from '../actions';
import CreateDens from './create_dens_container';


class Settings extends Component {
  
  render() {
    return (
       <div className="row">
        <div className="col-sm-12">
          <div className="welcome-card">
            <div className="form-flex-container">
              <div className="form form-flex-item">
                <CreateDens />
                
              </div>
              <div className="form-flex-item">
                <legend>Your Dens</legend>
                <div className="list-group">
                  
                  {
                    this.props.user.profile.customDens.length  === 0 &&
                      [<tr>
                        <td>Lion</td>
                        <td>Lion</td>
                      </tr>,
                      <tr>
                        <td>Tiger</td>
                        <td>Tiger</td>
                      </tr>,
                      <tr>
                        <td>Wolf</td>
                        <td>Wolf</td>
                      </tr>,
                      <tr>
                        <td>Bear</td>
                        <td>Bear</td>
                      </tr>,
                      <tr>
                        <td>Webelos 1</td>
                        <td>Webelos 1</td>
                      </tr>,
                      <tr>
                        <td>Webelos 2</td>
                        <td>Webelos 2</td>
                      </tr>]
                  }
                  { 
                    this.props.user.profile.customDens && this.props.user.profile.customDens.length > 0 &&
                    this.props.user.profile.customDens.map(den => {
                      return (
                        <div className="list-item custom-den-item" key={den.name} >
                          <span>{den.name}</span>
                          <span>{den.rank}</span>
                          <span className="text-right"><span><i className="fa fa-trash-o" /></span></span>
                        </div>
                      );
                    }) 
                  }
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps, actions)(Settings);
