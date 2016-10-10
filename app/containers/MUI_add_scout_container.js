import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import { indigo500 } from 'material-ui/styles/colors';
import MenuItem from 'material-ui/MenuItem';
import { Checkbox, DatePicker, TextField, SelectField } from 'redux-form-material-ui';
import { getScoutToUpdate, addScoutResponseAction, updateScout, clearUpdateScout } from '../actions/index';
import validate from '../utils/add_scout_validation';

const style = {
  margin: 12,
};

const styles = {
  underlineFocusStyle: {
    borderColor: indigo500,
  },
  floatingLabelFocusStyle: {
    color: indigo500,
  },
};

class AddScoutContainer extends Component {
  constructor(props) {
    super(props);

    this.doSubmit = this.doSubmit.bind(this);
  }

  componentWillMount() {
    if (this.props.params.id) {
      this.props.getScoutToUpdate(this.props.params.id);
    } else {
      this.props.clearUpdateScout();
    }
  }

  doSubmit(values) {
    if (!this.props.params.id) {
      this.props.addScoutResponseAction(values);
      this.props.reset();
      browserHistory.push('/scouts/add-confirm');
    } else {
      this.props.updateScout(values, this.props.params.id);
      browserHistory.push('/scouts/update-confirm');
      this.props.reset();
    }
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.doSubmit)}>
        <div className="row">
          <div className="col-sm-4">
            <fieldset>
              <legend>Scout Info</legend>
              <div className="form-group">
                <Field name="scoutFirstName" component={TextField} floatingLabelText="First Name" underlineFocusStyle={styles.underlineFocusStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} />
                <Field name="scoutLastName" component={TextField} floatingLabelText="Last Name" underlineFocusStyle={styles.underlineFocusStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} />
                <Field component={DatePicker} name="birthday" floatingLabelText="Birthday" defaultValue={null} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} />
                <Field name="grade" component={TextField} floatingLabelText="Grade" underlineFocusStyle={styles.underlineFocusStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} />
                <Field name="schoolDistrict" component={TextField} floatingLabelText="School District" underlineFocusStyle={styles.underlineFocusStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} />
                <Field name="den" hintText="Den" component={SelectField} floatingLabelText="Den" floatingLabelFocusStyle={styles.floatingLabelFocusStyle} underlineFocusStyle={styles.underlineFocusStyle} >
                  <MenuItem value="Lion" primaryText="Lion" />
                  <MenuItem value="Tiger" primaryText="Tiger" />
                  <MenuItem value="Wolf" primaryText="Wolf" />
                  <MenuItem value="Bear" primaryText="Bear" />
                  <MenuItem value="Webelos 1" primaryText="Webelos 1" />
                  <MenuItem value="Webelos 2" primaryText="Webelos 2" />
                </Field>
              </div>
            </fieldset>
            <fieldset>
              <legend>Scout Address</legend>
              <div className="form-group">
                <Field name="scoutStreetAddress" component={TextField} type="text" floatingLabelText="Street Address" underlineFocusStyle={styles.underlineFocusStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} />
                <Field name="scoutMailAddress" component={TextField} type="text" floatingLabelText="Mailing Address" underlineFocusStyle={styles.underlineFocusStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} />
                <Field name="scoutCity" component={TextField} type="text" floatingLabelText="City" underlineFocusStyle={styles.underlineFocusStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} />
                <Field name="scoutState" component={TextField} type="text" floatingLabelText="State" underlineFocusStyle={styles.underlineFocusStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} />
                <Field name="scoutZipCode" component={TextField} type="text" floatingLabelText="Zip Code" underlineFocusStyle={styles.underlineFocusStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} />
              </div>
            </fieldset>
            <fieldset>
              <legend>Scout Info</legend>
              <div className="form-group">
                <Field name="picturesAllowed" component={Checkbox} label="Allow Pictures" iconStyle={{
                  fill: indigo500
                }} />
                <Field name="dues" component={Checkbox} label="Dues Paid" iconStyle={{
                  fill: indigo500
                }} />
                <Field name="book" component={Checkbox} label="Book Received" iconStyle={{
                  fill: indigo500
                }} />
                <Field name="boat" component={Checkbox} label="Boat Received" iconStyle={{
                  fill: indigo500
                }} />
                <Field name="car" component={Checkbox} label="Car Received" iconStyle={{
                  fill: indigo500
                }} />
                <Field name="notes" component={TextField} floatingLabelText="Notes" multiLine={true} rows={3} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} />
              </div>
            </fieldset>
          </div>
          <div className="col-sm-4">
            <fieldset>
              <legend>Parent #1 Info</legend>
              <div className="form-group">
                <Field name="parent1FirstName" component={TextField} type="text" floatingLabelText="First Name" underlineFocusStyle={styles.underlineFocusStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} />
                <Field name="parent1LastName" component={TextField} type="text" floatingLabelText="Last Name" underlineFocusStyle={styles.underlineFocusStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} />
                <Field name="parent1RelationToScout" component={TextField} type="text" floatingLabelText="Relation to Scout" underlineFocusStyle={styles.underlineFocusStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} />
              </div>
            </fieldset>
            <fieldset>
              <legend>Parent #1 Contact</legend>
              <div className="form-group">
                <Field name="parent1Email" component={TextField} type="email" floatingLabelText="Email" underlineFocusStyle={styles.underlineFocusStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} />
                <Field name="parent1PhoneNumberMobile" component={TextField} type="tel" floatingLabelText="Mobile Phone" underlineFocusStyle={styles.underlineFocusStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} />
                <Field name="parent1PhoneNumberHome" component={TextField} type="tel" floatingLabelText="Home Phone" underlineFocusStyle={styles.underlineFocusStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} />
                <Field name="parent1PhoneNumberWork" component={TextField} type="tel" floatingLabelText="Work Phone" underlineFocusStyle={styles.underlineFocusStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} />
                <Field name="parent1Notes" component={TextField} floatingLabelText="Notes" multiLine={true} rows={3} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} />
              </div>
            </fieldset>
            <fieldset>
              <legend>Parent #1 Address</legend>
              <div className="form-group">
                <Field name="parent1AddressSameAsScout" component={Checkbox} label="Address same as Scout" iconStyle={{
                  fill: indigo500
                }}/>
                <Field name="parent1StreetAddress" component={TextField} type="text" floatingLabelText="Street Address" underlineFocusStyle={styles.underlineFocusStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} />
                <Field name="parent1MailAddress" component={TextField} type="text" floatingLabelText="Mailing Address" underlineFocusStyle={styles.underlineFocusStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} />
                <Field name="parent1City" component={TextField} type="text" floatingLabelText="City" underlineFocusStyle={styles.underlineFocusStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} />
                <Field name="parent1State" component={TextField} type="text" floatingLabelText="State" underlineFocusStyle={styles.underlineFocusStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} />
                <Field name="parent1ZipCode" component={TextField} type="text" floatingLabelText="Zip Code" underlineFocusStyle={styles.underlineFocusStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} />
              </div>
            </fieldset>
          </div>
          <div className="col-sm-4">
            <fieldset>
              <legend>Parent #2 Info</legend>
              <div className="form-group">
                <Field name="parent2FirstName" component={TextField} type="text" floatingLabelText="First Name" underlineFocusStyle={styles.underlineFocusStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} />
                <Field name="parent2LastName" component={TextField} type="text" floatingLabelText="Last Name" underlineFocusStyle={styles.underlineFocusStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} />
                <Field name="parent2RelationToScout" component={TextField} type="text" floatingLabelText="Relation to Scout" underlineFocusStyle={styles.underlineFocusStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} />
              </div>
            </fieldset>
            <fieldset>
              <legend>Parent #2 Contact</legend>
              <div className="form-group">
                <Field name="parent2Email" component={TextField} type="email" floatingLabelText="Email" underlineFocusStyle={styles.underlineFocusStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} />
                <Field name="parent2PhoneNumberMobile" component={TextField} type="tel" floatingLabelText="Mobile Phone" underlineFocusStyle={styles.underlineFocusStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} />
                <Field name="parent2PhoneNumberHome" component={TextField} type="tel" floatingLabelText="Home Phone" underlineFocusStyle={styles.underlineFocusStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} />
                <Field name="parent2PhoneNumberWork" component={TextField} type="tel" floatingLabelText="Work Phone" underlineFocusStyle={styles.underlineFocusStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} />
                <Field name="parent2Notes" component={TextField} floatingLabelText="Notes" multiLine={true} rows={3} underlineFocusStyle={styles.underlineFocusStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} />
              </div>
            </fieldset>
            <fieldset>
              <legend>Parent #2 Address</legend>
              <div className="form-group">
                <Field name="parent2AddressSameAsScout" component={Checkbox} label="Address same as Scout" iconStyle={{
                  fill: indigo500
                }}/>
                <Field name="parent2StreetAddress" component={TextField} type="text" floatingLabelText="Street Address" underlineFocusStyle={styles.underlineFocusStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} />
                <Field name="parent2MailAddress" component={TextField} type="text" floatingLabelText="Mailing Address" underlineFocusStyle={styles.underlineFocusStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} />
                <Field name="parent2City" component={TextField} type="text" floatingLabelText="City" underlineFocusStyle={styles.underlineFocusStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} />
                <Field name="parent2State" component={TextField} type="text" floatingLabelText="State" underlineFocusStyle={styles.underlineFocusStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} />
                <Field name="parent2ZipCode" component={TextField} type="text" floatingLabelText="Zip Code" underlineFocusStyle={styles.underlineFocusStyle} floatingLabelFocusStyle={styles.floatingLabelFocusStyle} />
              </div>
            </fieldset>
          </div>
        </div>

        <div className="form-buttons-container">
          <RaisedButton type="submit" disabled={this.props.pristine || this.props.submitting} label="Submit" style={style} labelColor={'#FFF'} backgroundColor={indigo500} />
          <RaisedButton type="button" disabled={this.props.pristine || this.props.submitting} secondary onClick={this.props.reset} label="Reset" style={style} />
        </div>

      </form>
    );
  }
}

AddScoutContainer.propTypes = {
  getScoutToUpdate: PropTypes.func,
  addScoutResponseAction: PropTypes.func,
  updateScout: PropTypes.func,
  clearUpdateScout: PropTypes.func,
  reset: PropTypes.func,
};

const mapStateToProps = ({ editScout }) => ({ initialValues: editScout });

const mapDispatchToProps = dispatch => (bindActionCreators({
  addScoutResponseAction,
  updateScout,
  getScoutToUpdate,
  clearUpdateScout,
}, dispatch));

const form = reduxForm({ form: 'addScout', enableReinitialize: true, validate });

AddScoutContainer = connect(mapStateToProps, mapDispatchToProps)(form(AddScoutContainer));

export default AddScoutContainer;
