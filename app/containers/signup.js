import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import { TextField } from 'redux-form-material-ui';
import ErrorDisplay from './error_container';
import SignupValidate from '../utils/signup_validation';
import * as actions from '../actions';

const style = {
  margin: 12,
};

class Signup extends Component {
  constructor(props) {
    super(props);

    this.doHandleSubmit = this.doHandleSubmit.bind(this);
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  componentWillUnmount() {
    this.props.clearError();
  }
  doHandleSubmit(values) {
    this.props.signupUser(values);
  }

  render() {
    return (
      <div className="row">
        <div className="col-sm-12">
          <div className="welcome-card">
            <div className="form-flex-container">
              <div className="form form-flex-item">
                <form onSubmit={this.props.handleSubmit(this.doHandleSubmit)}>
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
                </form>
                <ErrorDisplay />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Signup.propTypes = {
  handleSubmit: PropTypes.func,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
  signupUser: PropTypes.func,
  clearError: PropTypes.func,
};


const mapStateToProps = ({ auth }) => (
  { auth }
);

const form = reduxForm({ form: 'signup', validate: SignupValidate });

Signup = connect(mapStateToProps, actions)(form(Signup));

export default Signup;
