import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';
import { TextField } from 'redux-form-material-ui';
import NewPasswordValidate from '../utils/new_password_validation';
import ErrorDisplay from './error_container';
import * as actions from '../actions';

const style = {
  margin: 12,
};

class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.doSubmit = this.doSubmit.bind(this);
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.checkToken(this.props.params.token);
  }

  doSubmit(values) {
    const data = {};
    data.values = values;
    data.token = this.props.auth.resetToken;
    this.props.submitResetPassword(data);
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
                    <legend>Password Reset</legend>
                    <Field
                      name="password"
                      component={TextField}
                      floatingLabelText="Password"
                      type="password"
                    />
                    <Field
                      name="confirmPassword"
                      component={TextField}
                      floatingLabelText="Confirm Password"
                      type="password"
                    />
                  </fieldset>
                  <div className="form-buttons-container">
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
              <ErrorDisplay />
            </div>
          </div>
        </div>
      </form>
    );
  }
}

ResetPassword.propTypes = {
  auth: PropTypes.object,
  params: PropTypes.object,
  handleSubmit: PropTypes.func,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
  checkToken: PropTypes.func,
  submitResetPassword: PropTypes.func,
};

const mapStateToProps = ({ auth }) => ({
  auth,
});

ResetPassword = reduxForm({ form: 'resetPassword', validate: NewPasswordValidate })(ResetPassword);

ResetPassword = connect(mapStateToProps, actions)(ResetPassword);

export default ResetPassword;
