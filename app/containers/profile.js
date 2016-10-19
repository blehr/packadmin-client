import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import { TextField } from 'redux-form-material-ui';
import ErrorDisplay from './error_container';
import * as actions from '../actions';
import ProfileValidate from '../utils/profile_validation';

const style = {
  margin: 12,
};


class Profile extends Component {
  constructor(props) {
    super(props);

    this.doSubmit = this.doSubmit.bind(this);
  }
  componentWillMount() {
    this.props.getUser();
  }

  doSubmit(values) {
    console.log(values);
    this.props.updateUser(values);
  }
  render() {
    return (
       <form onSubmit={this.props.handleSubmit(this.doSubmit)}>
        <div className="row">
          <div className="col-sm-12">
            <div className="welcome-card">
              <div className="form-flex-container">
                <div className="form form-flex-item">
                  <fieldset className="form-group">
                    <legend>Profile</legend>
                    <Field
                      name="name"
                      component={TextField}
                      floatingLabelText="Name: First and Last"
                      type="text"
                    />
                    <Field
                      name="packNumber"
                      component={TextField}
                      floatingLabelText="Pack Number"
                      type="text"
                    />
                  </fieldset>
                  <div className="form-buttons-container">
                    <ErrorDisplay />
                    <RaisedButton
                      type="submit"
                      disabled={this.props.pristine || this.props.submitting}
                      label="Submit"
                      style={style}
                      labelColor={'#FFF'}
                      primary
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

const mapStateToProps = ({ error, user }) => ({
  error,
  initialValues: user.profile,
});

const form = reduxForm({ form: 'profile', enableReinitialize: true, validate: ProfileValidate });

Profile = connect(mapStateToProps, actions)(form(Profile));

export default Profile;

