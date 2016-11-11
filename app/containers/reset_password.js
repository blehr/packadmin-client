import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';
import { TextField } from 'redux-form-material-ui';
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
    this.props.requestPasswordReset(values);
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
                    <legend>Enter Email</legend>
                    <div><small>An email will be sent with instructions on resetting your password.</small></div>
                    <Field
                      name="password"
                      component={TextField}
                      floatingLabelText="Password"
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
  handleSubmit: PropTypes.func,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
  signinUser: PropTypes.func,
  clearApiError: PropTypes.func,
};

ResetPassword = reduxForm({ form: 'resetPassword' })(ResetPassword);

ResetPassword = connect(null, actions)(ResetPassword);

export default ResetPassword;

