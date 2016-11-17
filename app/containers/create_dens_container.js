import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { TextField } from 'redux-form-material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import * as actions from '../actions';

const style = {
  maargin: '12px',
};

class CreateDens extends Component {
  constructor(props) {
    super(props);
    this.doSubmit = this.doSubmit.bind(this);
  }
  doSubmit(values) {
    // this.props.signinUser(values);
  }
  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.doSubmit)}>
        <fieldset className="form-group" >
          <legend>Create Additional Dens</legend>
          <Field
            name="denName"
            component={TextField}
            floatingLabelText="Den Name"
            type="text"
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
    );
  }
}

CreateDens.propTypes = {
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
  handleSubmit: PropTypes.func,
};

CreateDens = reduxForm({ form: 'createDen' })(CreateDens);

export default connect(null, actions)(CreateDens);
