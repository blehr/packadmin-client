import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import { DatePicker, TextField } from 'redux-form-material-ui';
import ErrorDisplay from './error_container';
import LoadingComponent from './loading_container';
import * as actions from '../actions';
import leaderValidate from '../utils/add_leader_validation';

const style = {
  margin: 12,
};

class AddLeader extends Component {
  constructor(props) {
    super(props);

    this.doSubmit = this.doSubmit.bind(this);
  }
  componentDidMount() {
    if (this.props.params.id) {
      this.props.getLeader(this.props.params.id);
    } else {
      this.props.clearLeaders();
    }
  }

  doSubmit(values) {
    if (!this.props.params.id) {
      this.props.addLeader(values);
    } else {
      this.props.updateLeader(values, this.props.params.id);
    }
  }
  render() {
    const { leaders, error } = this.props;
    if (this.props.params.id) {
      if (!leaders.leaders || leaders.leaders.length !== 1) {
        if (error) {
          return <ErrorDisplay />;
        }
        return (
          <div style={{ position: 'relative' }}>
            <LoadingComponent />
          </div>
        );
      }
    }
    return (
      <form onSubmit={this.props.handleSubmit(this.doSubmit)}>
        <div className="row">
          <div className="col-sm-6">
            <fieldset>
              <legend>Leader Info</legend>
              <div className="form-group">
                <Field
                  name="firstName"
                  component={TextField}
                  floatingLabelText="First Name"
                />
                <Field
                  name="lastName"
                  component={TextField}
                  floatingLabelText="Last Name"
                />
                <Field
                  name="position"
                  component={TextField}
                  floatingLabelText="Position"
                />
                <Field
                  component={DatePicker}
                  name="birthday"
                  floatingLabelText="Birthday"
                  defaultValue={null}
                />
                <Field
                  name="driversLicense"
                  component={TextField}
                  floatingLabelText="Drivers License"
                />
                <Field
                  name="youthProtection"
                  component={DatePicker}
                  floatingLabelText="Youth Protection"
                  defaultValue={null}
                />
                <Field
                  name="notes"
                  component={TextField}
                  floatingLabelText="Notes"
                  multiLine
                  rows={3}
                />
              </div>
            </fieldset>
          </div>
          <div className="col-sm-6">
            <fieldset>
              <legend>Contact</legend>
              <div className="form-group">
                <Field
                  name="email"
                  component={TextField}
                  floatingLabelText="Email"
                />
                <Field
                  name="mobilePhone"
                  component={TextField}
                  floatingLabelText="Mobile Phone"
                />
                <Field
                  name="homePhone"
                  component={TextField}
                  floatingLabelText="Home Phone"
                />
                <Field
                  name="workPhone"
                  component={TextField}
                  floatingLabelText="Work Phone"
                />
                <Field
                  name="streetAddress"
                  component={TextField}
                  floatingLabelText="Street Address"
                />
                <Field
                  name="mailAddress"
                  component={TextField}
                  floatingLabelText="Mailing Address"
                />
                <Field
                  name="city"
                  component={TextField}
                  floatingLabelText="city"
                />
                <Field
                  name="state"
                  component={TextField}
                  floatingLabelText="State"
                />
                <Field
                  name="zipCode"
                  component={TextField}
                  floatingLabelText="Zip Code"
                />
              </div>
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
          <RaisedButton
            type="button"
            disabled={this.props.pristine || this.props.submitting}
            secondary
            onClick={this.props.reset}
            label="Reset"
            style={style}
          />
        </div>
      </form>
    );
  }
}

AddLeader.propTypes = {
  handleSubmit: PropTypes.func,
  getLeader: PropTypes.func,
  clearLeaders: PropTypes.func,
  addLeader: PropTypes.func,
  updateLeader: PropTypes.func,
  leaders: PropTypes.array,
  params: PropTypes.object,
  error: PropTypes.object,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
  reset: PropTypes.func,
};

const mapStateToProps = ({ leaders }) => ({
  leaders,
});

const form = reduxForm({ form: 'addLeader', enableReinitialize: true, leaderValidate });

AddLeader = connect(mapStateToProps, actions)(form(AddLeader));

export default AddLeader;
