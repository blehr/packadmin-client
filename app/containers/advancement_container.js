import React, { Component, PropTypes } from 'react';
import { DatePicker } from 'redux-form-material-ui';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import * as actions from '../actions';
import bobcat from '../json/bobcat.json';
import lion from '../json/lion.json';
import tiger from '../json/tiger.json';
import wolf from '../json/wolf.json';
import bear from '../json/bear.json';
import webelos from '../json/webelos.json';

const style = {
  margin: 12,
};

class Advancement extends Component {
  constructor(props) {
    super(props);
    this.doSubmit = this.doSubmit.bind(this);
  }
  getDen(x) {
    switch (x) {
      case 'bobcat':
        return bobcat;
      case 'lion':
        return lion;
      case 'tiger':
        return tiger;
      case 'wolf':
        return wolf;
      case 'bear':
        return bear;
      case 'webelos':
        return webelos;
      default:
        return null;
    }
  }
  doSubmit(values) {
    this.props.postBobcat(values);
  }
  render() {
    const { adv } = this.props;

    const den = this.getDen(adv.advDen);
    let elemReq = '';
    let elemArrow = '';
    let elemElective = '';
    let elemOthers = '';
    if (den.Requirements) {
      elemReq = den.Requirements.map(item => (
        <div key={item.formName} className="adv-div">
          <span className="adv-label">{item.name}</span>
          <Field
            name={item.formName}
            component={DatePicker}
            defaultValue={null}
          />
        </div>
      ));
    }
    if (den['Arrow of Light']) {
      elemArrow = den['Arrow of Light'].map(item => (
        <div key={item.formName} className="adv-div" >
          <span className="adv-label">{item.name}</span>
          <Field
            name={item.formName}
            component={DatePicker}
            defaultValue={null}
          />
        </div>
      ));
    }
    if (den.Electives) {
      elemElective = den.Electives.map(item => (
        <div key={item.formName} className="adv-div" >
          <span className="adv-label">{item.name}</span>
          <Field
            name={item.formName}
            component={DatePicker}
            defaultValue={null}
          />
        </div>
      ));
    }
    if (den.Others) {
      elemOthers = den.Others.map(item => (
        <div key={item.formName} className="adv-div" >
          <span className="adv-label">{item.name}</span>
          <Field
            name={item.formName}
            component={DatePicker}
            defaultValue={null}
          />
        </div>
      ));
    }

    return (
      <div className="row">
        <form onSubmit={this.props.handleSubmit(this.doSubmit)}>
          <div className="col-sm-8 col-sm-offset-2">
            <fieldset>
              <legend>{den.Den} Requirements</legend>
              <div className="form-group adv-form-group">
                {elemReq}
              </div>
            </fieldset>
            {
              (() => {
                if (elemArrow !== '') {
                  return (
                    <fieldset>
                      <legend>{den.Den} Arrow of Light</legend>
                      <div className="form-group adv-form-group">
                        {elemArrow}
                      </div>
                    </fieldset>
                );
                }
                return null;
              }
              )()
            }
            {
              (() => {
                if (elemElective !== '') {
                  return (
                    <fieldset>
                      <legend>{den.Den} Electives</legend>
                      <div className="form-group adv-form-group">
                        {elemElective}
                      </div>
                    </fieldset>
                );
                }
                return null;
              }
              )()
            }
            {
              (() => {
                if (elemOthers !== '') {
                  return (
                    <fieldset>
                      <legend>{den.Den} Others</legend>
                      <div className="form-group adv-form-group">
                        {elemOthers}
                      </div>
                    </fieldset>
                );
                }
                return null;
              }
              )()
            }
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
        </form>
      </div>
    );
  }
}

Advancement.propTypes = {
  adv: PropTypes.Object,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
  handleSubmit: PropTypes.func,
  postBobcat: PropTypes.func,
  setAdvancement: PropTypes.func,
};

const mapStateToProps = ({ adv }) => ({
  adv,
});

const form = reduxForm({
  form: 'tiger',
});

Advancement = connect(mapStateToProps, actions)(form(Advancement));

export default Advancement;
