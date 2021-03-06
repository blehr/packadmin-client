import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import { Checkbox, DatePicker, TextField, SelectField } from 'redux-form-material-ui';
import ErrorDisplay from './error_container';
import LoadingComponent from './loading_container';
import * as actions from '../actions';
import validate from '../utils/add_scout_validation';

const style = {
  margin: 12,
};

class AddScoutContainer extends Component {
  constructor(props) {
    super(props);

    this.doSubmit = this.doSubmit.bind(this);
  }
  componentWillMount() {
    if (this.props.params.id) {
      this.props.getScoutDetail(this.props.params.id, this.props.user.profile.customDens);
    } else {
      this.props.clearScoutDetail();
    }
  }

  doSubmit(values) {
    if (!this.props.params.id) {
      this.props.addScout(values);
    } else {
      this.props.updateScout(values, this.props.params.id);
    }
  }

  render() {
    const { scouts, error, user } = this.props;
    if (this.props.params.id) {
      if (!scouts.scoutDetail) {
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
    let elem = [];
    if (user.profile.customDens.length > 0) {
      elem = user.profile.customDens.map(den => (
        <MenuItem value={den.name} primaryText={den.name} key={den.name} />
      ));
    } else {
      elem = [
        <MenuItem value={'Lion'} primaryText="Lion" key="Lion" />,
        <MenuItem value={'Tiger'} primaryText="Tiger" key="Tiger" />,
        <MenuItem value={'Wolf'} primaryText="Wolf" key="Wolf" />,
        <MenuItem value={'Bear'} primaryText="Bear" key="Bear" />,
        <MenuItem value={'Webelos 1'} primaryText="Webelos 1" key="Webelos 1" />,
        <MenuItem value={'Webelos 2'} primaryText="Webelos 2" key="Webelos 2" />,
      ];
    }

    return (
      <form onSubmit={this.props.handleSubmit(this.doSubmit)}>
        <div className="row">
          <div className="col-sm-4">
            <fieldset>
              <legend>Scout Info</legend>
              <div className="form-group">
                <Field
                  name="scoutFirstName"
                  component={TextField}
                  floatingLabelText="First Name"
                />
                <Field
                  name="scoutLastName"
                  component={TextField}
                  floatingLabelText="Last Name"
                />
                <Field
                  component={DatePicker}
                  name="birthday"
                  floatingLabelText="Birthday"
                  defaultValue={null}
                />
                <Field
                  name="grade"
                  component={TextField}
                  floatingLabelText="Grade"
                />
                <Field
                  name="schoolDistrict"
                  component={TextField}
                  floatingLabelText="School District"
                />
                <Field
                  name="den"
                  hintText="Den"
                  component={SelectField}
                  floatingLabelText="Den"
                >
                  {elem}
                </Field>
              </div>
            </fieldset>
            <fieldset>
              <legend>Scout Address</legend>
              <div className="form-group">
                <Field
                  name="scoutStreetAddress"
                  component={TextField}
                  type="text"
                  floatingLabelText="Street Address"
                />
                <Field
                  name="scoutMailAddress"
                  component={TextField}
                  type="text"
                  floatingLabelText="Mailing Address"
                />
                <Field
                  name="scoutCity"
                  component={TextField}
                  type="text"
                  floatingLabelText="City"
                />
                <Field
                  name="scoutState"
                  component={TextField}
                  type="text"
                  floatingLabelText="State"
                />
                <Field
                  name="scoutZipCode"
                  component={TextField}
                  type="text"
                  floatingLabelText="Zip Code"
                />
              </div>
            </fieldset>
            <fieldset>
              <legend>Scout Info</legend>
              <div className="form-group">
                <Field
                  name="picturesAllowed"
                  component={Checkbox}
                  label="Allow Pictures"
                />
                <Field
                  name="dues"
                  component={Checkbox}
                  label="Dues Paid"
                />
                <Field
                  name="book"
                  component={Checkbox}
                  label="Book Received"
                />
                <Field
                  name="boat"
                  component={Checkbox}
                  label="Boat Received"
                />
                <Field
                  name="car"
                  component={Checkbox}
                  label="Car Received"
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
          <div className="col-sm-4">
            <fieldset>
              <legend>Guardian #1 Info</legend>
              <div className="form-group">
                <Field
                  name="parent1FirstName"
                  component={TextField}
                  type="text"
                  floatingLabelText="First Name"
                />
                <Field
                  name="parent1LastName"
                  component={TextField}
                  type="text"
                  floatingLabelText="Last Name"
                />
                <Field
                  name="parent1RelationToScout"
                  component={TextField}
                  type="text"
                  floatingLabelText="Relation to Scout"
                />
              </div>
            </fieldset>
            <fieldset>
              <legend>Guardian #1 Contact</legend>
              <div className="form-group">
                <Field
                  name="parent1Email"
                  component={TextField}
                  type="email"
                  floatingLabelText="Email"
                />
                <Field
                  name="parent1PhoneNumberMobile"
                  component={TextField}
                  type="tel"
                  floatingLabelText="Mobile Phone"
                />
                <Field
                  name="parent1PhoneNumberHome"
                  component={TextField}
                  type="tel"
                  floatingLabelText="Home Phone"
                />
                <Field
                  name="parent1PhoneNumberWork"
                  component={TextField}
                  type="tel"
                  floatingLabelText="Work Phone"
                />
                <Field
                  name="parent1Notes"
                  component={TextField}
                  floatingLabelText="Notes"
                  multiLine
                  rows={3}
                />
              </div>
            </fieldset>
            <fieldset>
              <legend>Guardian #1 Address</legend>
              <div className="form-group">
                <Field
                  name="parent1AddressSameAsScout"
                  component={Checkbox}
                  label="Address same as Scout"
                />
                <Field
                  name="parent1StreetAddress"
                  component={TextField}
                  type="text"
                  floatingLabelText="Street Address"
                />
                <Field
                  name="parent1MailAddress"
                  component={TextField}
                  type="text"
                  floatingLabelText="Mailing Address"
                />
                <Field
                  name="parent1City"
                  component={TextField}
                  type="text"
                  floatingLabelText="City"
                />
                <Field
                  name="parent1State"
                  component={TextField}
                  type="text"
                  floatingLabelText="State"
                />
                <Field
                  name="parent1ZipCode"
                  component={TextField}
                  type="text"
                  floatingLabelText="Zip Code"
                />
              </div>
            </fieldset>
          </div>
          <div className="col-sm-4">
            <fieldset>
              <legend>Guardian #2 Info</legend>
              <div className="form-group">
                <Field
                  name="parent2FirstName"
                  component={TextField}
                  type="text"
                  floatingLabelText="First Name"
                />
                <Field
                  name="parent2LastName"
                  component={TextField}
                  type="text"
                  floatingLabelText="Last Name"
                />
                <Field
                  name="parent2RelationToScout"
                  component={TextField}
                  type="text"
                  floatingLabelText="Relation to Scout"
                />
              </div>
            </fieldset>
            <fieldset>
              <legend>Guardian #2 Contact</legend>
              <div className="form-group">
                <Field
                  name="parent2Email"
                  component={TextField}
                  type="email"
                  floatingLabelText="Email"
                />
                <Field
                  name="parent2PhoneNumberMobile"
                  component={TextField}
                  type="tel"
                  floatingLabelText="Mobile Phone"
                />
                <Field
                  name="parent2PhoneNumberHome"
                  component={TextField}
                  type="tel"
                  floatingLabelText="Home Phone"
                />
                <Field
                  name="parent2PhoneNumberWork"
                  component={TextField}
                  type="tel" floatingLabelText="Work Phone"
                />
                <Field
                  name="parent2Notes"
                  component={TextField}
                  floatingLabelText="Notes"
                  multiLine
                  rows={3}
                />
              </div>
            </fieldset>
            <fieldset>
              <legend>Guardian #2 Address</legend>
              <div className="form-group">
                <Field
                  name="parent2AddressSameAsScout"
                  component={Checkbox}
                  label="Address same as Scout"
                />
                <Field
                  name="parent2StreetAddress"
                  component={TextField}
                  type="text"
                  floatingLabelText="Street Address"
                />
                <Field
                  name="parent2MailAddress"
                  component={TextField}
                  type="text"
                  floatingLabelText="Mailing Address"
                />
                <Field
                  name="parent2City"
                  component={TextField}
                  type="text"
                  floatingLabelText="City"
                />
                <Field
                  name="parent2State"
                  component={TextField}
                  type="text"
                  floatingLabelText="State"
                />
                <Field
                  name="parent2ZipCode"
                  component={TextField}
                  type="text"
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

AddScoutContainer.propTypes = {
  clearScoutDetail: PropTypes.func,
  error: PropTypes.string,
  user: PropTypes.object,
  scouts: PropTypes.Objcet,
  getScoutDetail: PropTypes.func,
  addScout: PropTypes.func,
  updateScout: PropTypes.func,
  reset: PropTypes.func,
  params: PropTypes.object,
  id: PropTypes.number,
  handleSubmit: PropTypes.func,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
};

const mapStateToProps = ({ scouts, error, user }) => ({
  error,
  scouts,
  user,
  initialValues: scouts.scoutDetail,
});


AddScoutContainer = reduxForm({ form: 'addScout', enableReinitialize: true, validate })(AddScoutContainer);

AddScoutContainer = connect(mapStateToProps, actions)(AddScoutContainer);

export default AddScoutContainer;
