import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import { TextField } from 'redux-form-material-ui';
import SigninValidate from '../utils/signin_validation';
import ErrorDisplay from './error_container';
import * as actions from '../actions';

const style = {
  margin: 12,
};

class Signin extends Component {
  constructor(props) {
    super(props);
    this.doSubmit = this.doSubmit.bind(this);
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  componentWillUnmount() {
    this.props.clearError();
  }

  doSubmit(values) {
    this.props.signinUser(values);
  }
  render() {
    return (
      <div className="row">
        <div className="col-sm-12">
          <div className="welcome-card">
            <div className="form-flex-container">
              <div className="form form-flex-item">
                <form onSubmit={this.props.handleSubmit(this.doSubmit)}>
                  <fieldset className="form-group">
                    <legend>Sign In!</legend>
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
                    <Link to='/request'>Forgot Password?</Link>
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
                <p className="small">By registering at packadmin.com you are agreeing to the privacy policy.</p>
                <Link to='/privacy'><p className="text-danger text-center">The Pack Admin Privacy Policy</p></Link>
              </div>
            </div>
            <ErrorDisplay />
          </div>
        </div>
      </div>
    );
  }
}

Signin.propTypes = {
  handleSubmit: PropTypes.func,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
  signinUser: PropTypes.func,
  clearError: PropTypes.func,
};


const mapStateToProps = ({ auth }) => ({
  auth,
});

const form = reduxForm({ form: 'signin', validate: SigninValidate });

Signin = connect(mapStateToProps, actions)(form(Signin));

export default Signin;
