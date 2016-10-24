import React, { Component, PropTypes } from 'react';
import { DatePicker } from 'redux-form-material-ui';
import { Field, reduxForm } from 'redux-form';
import Tiger from '../json/tiger.json';

class Advancement extends Component {
  componentWillMount() {
    console.log(Tiger);
  }
  render() {
    const elem = Tiger.Requirements.map(req => (
      <div key={req} className="adv-div">
        <span className="adv-label">{req}</span>
        <Field
          name={req}
          component={DatePicker}
          defaultValue={null}
        />
      </div>
    ));
    const elemElective = Tiger.Electives.map(req => (
      <div key={req} className="adv-div" >
        <span className="adv-label">{req}</span>
        <Field
          name={req}
          component={DatePicker}
          defaultValue={null}
        />
      </div>
    ));
    return (
      <div className="row">
        <form>
          <div className="col-sm-6 col-sm-offset-3">
            <fieldset>
              <legend>Tiger Requirements</legend>
              <div className="form-group adv-form-group">
                {elem}
              </div>
            </fieldset>


            <fieldset>
              <legend>Tiger Electives</legend>
              <div className="form-group adv-form-group">
                {elemElective}
              </div>
            </fieldset>
          </div>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'tiger',
})(Advancement);
