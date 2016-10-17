import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RaisedButton from 'material-ui/RaisedButton';
import { TextField } from 'redux-form-material-ui';
import SignupValidate from '../utils/signup_validation';
import { signupUser } from '../actions/index';

const style = {
  margin: 12,
};

class Signup extends Component {
  constructor(props) {
    super(props);

    this.doHandleSubmit = this.doHandleSubmit.bind(this);
  }
  doHandleSubmit(values) {
    this.props.signupUser(values);
  }
  renderAlert() {
    if (this.props.auth.error) {
      return (
        <div className="alert alert-danger" >
          <strong>Looks like there is a problem </strong><br />
          {this.props.auth.error}
        </div>
      );
    }
    return null;
  }
  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.doHandleSubmit)}>
        <div className="row">
          <div className="col-sm-4 col-sm-offset-4">
            <fieldset className="form-group">
              <legend>Sign Up!</legend>
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
                name="confirmPassword"
                component={TextField}
                floatingLabelText="Confirm Password"
                type="password"
              />
            </fieldset>
          </div>
        </div>
        <div className="form-buttons-container">
          {this.renderAlert()}
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
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
  signupUser: PropTypes.func,
  auth: PropTypes.object,
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({ signupUser }, dispatch)
);

const mapStateToProps = ({ auth }) => (
  { auth }
);

const form = reduxForm({ form: 'signup', validate: SignupValidate });

Signup = connect(mapStateToProps, mapDispatchToProps)(form(Signup));

export default Signup;
