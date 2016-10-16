import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';
import { TextField } from 'redux-form-material-ui';
import ErrorDisplay from './error_container';
import SignupValidate from '../utils/signup_validation';

const style = {
  margin: 12,
};

class Signup extends Component {
  constructor(props) {
    super(props);
    this.doSubmit = this.doSubmit.bind(this);
  }
  componentWillMount() {

  }
  doSubmit() {

  }
  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.doSubmit)}>
        <div className="row">
          <div className="col-sm-4 col-sm-offset-4">
            <fieldset className="form-group">
              <legend>Sign Up!</legend>
              <Field
                name="name"
                component={TextField}
                floatingLabelText="Name"
                type="text"
              />
              <Field
                name="packNumber"
                component={TextField}
                floatingLabelText="Pack Number"
                type="text"
              />
              <Field
                name="email"
                component={TextField}
                floatingLabelText="Email"
                type="email"
              />
              <Field
                name="password"
                component={TextField}
                floatingLabelText="Password"
                type="password"
              />
              <Field
                name="passwordConfirm"
                component={TextField}
                floatingLabelText="Confirm Password"
                type="password"
              />
            </fieldset>
          </div>
        </div>
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
      </form>
    );
  }
}

Signup.propTypes = {
  handleSubmit: PropTypes.func,
  pristine: PropTypes.string,
  submitting: PropTypes.string,
};

export default reduxForm({ form: 'signup', validate: SignupValidate })(Signup);
