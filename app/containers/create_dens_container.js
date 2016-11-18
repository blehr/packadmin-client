import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { TextField, SelectField } from 'redux-form-material-ui';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import * as actions from '../actions';
import CreateDensValidation from '../utils/create_dens_validation';

const style = {
  maargin: '12px',
};

class CreateDens extends Component {
  constructor(props) {
    super(props);
    this.doSubmit = this.doSubmit.bind(this);
  }
  doSubmit(values) {
    this.props.newCustomDen(values);
    this.props.reset();
  }
  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.doSubmit)}>
        <fieldset className="form-group" >
          <legend>Create Additional Dens</legend>
          <Field
            name="name"
            component={TextField}
            floatingLabelText="Den Name"
            type="text"
          />
          <Field
            name="rank"
            hintText="Den Rank"
            component={SelectField}
            floatingLabelText="Den Rank"
          >
            <MenuItem value="Lion" primaryText="Lion" />
            <MenuItem value="Tiger" primaryText="Tiger" />
            <MenuItem value="Wolf" primaryText="Wolf" />
            <MenuItem value="Bear" primaryText="Bear" />
            <MenuItem value="Webelos 1" primaryText="Webelos 1" />
            <MenuItem value="Webelos 2" primaryText="Webelos 2" />
          </Field>
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
    );
  }
}

CreateDens.propTypes = {
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
  handleSubmit: PropTypes.func,
  newCustomDen: PropTypes.func,
};

CreateDens = reduxForm({ form: 'createDen', validate: CreateDensValidation })(CreateDens);

export default connect(null, actions)(CreateDens);
