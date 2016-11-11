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

class RequestPassword extends Component {
  constructor(props) {
    super(props);
    this.doSubmit = this.doSubmit.bind(this);
  }
  componentDidMount() {

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
                    <div>
                      <small>
                        An email will be sent with instructions on resetting your password.
                      </small>
                    </div>
                    <Field
                      name="email"
                      component={TextField}
                      floatingLabelText="Email"
                      type="email"
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

RequestPassword.propTypes = {
  params: PropTypes.object,
  handleSubmit: PropTypes.func,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
  checkToken: PropTypes.func,
  requestPasswordReset: PropTypes.func,
};

RequestPassword = reduxForm({ form: 'requestPassword' })(RequestPassword);

RequestPassword = connect(null, actions)(RequestPassword);

export default RequestPassword;
