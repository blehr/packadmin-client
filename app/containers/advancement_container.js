import React, { Component, PropTypes } from 'react';
import { DatePicker } from 'redux-form-material-ui';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import * as actions from '../actions';
import SelectDevAdv from '../components/select_den_advancement';
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
  componentDidMount() {
    if (!this.props.scouts.allScouts) {
      setTimeout(() => {
        this.props.getScoutDetail(this.props.params.id);
      }, 2000);
    } else {
      this.props.getScoutDetail(this.props.params.id);
    }
    if (!this.props.scouts.singleScout) {
      setTimeout(() => {
        this.props.setAdvancement(this.props.scouts.singleScout.den);
      }, 4000);
    } else {
      this.props.setAdvancement(this.props.scouts.singleScout.den);
    }
  }
  getDen(x) {
    switch (x) {
      case 'Bobcat':
        return bobcat;
      case 'Lion':
        return lion;
      case 'Tiger':
        return tiger;
      case 'Wolf':
        return wolf;
      case 'Bear':
        return bear;
      case 'Webelos 1':
      case 'Webelos 2':
        return webelos;
      default:
        return null;
    }
  }
  doSubmit(values) {
    const obj = {};
    const den = this.getDen(this.props.adv.advDen);
    const denKeys = Object.keys(den);
    denKeys.shift();
    denKeys.map((key) => {
      den[key].map((item) => {
        let itemName = item.formName;
        if (values[itemName]) {
          obj[itemName] = values[itemName];
          console.log(obj);
        }
      });
    });




    // console.log(obj);


    // obj[den] = values;
    // const denObj = Object.keys(obj);
    // const thisDen = denObj[0];
    // this.props.updateScout(thisDen, this.props.params.id);
  }
  render() {
    const { adv, scouts } = this.props;

    const den = this.getDen(adv.advDen);
    console.log(den);
    let elemReq = '';
    let elemArrow = '';
    let elemElective = '';
    let elemOthers = '';
    if (den.Requirements) {
      elemReq = den.Requirements.map(item => (
        <div key={item.formName} className="adv-div">
          <div className="label-adv">{item.name}</div>
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
          <div className="label-adv">{item.name}</div>
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
          <span className="label-adv">{item.name}</span>
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
          <span className="label-adv">{item.name}</span>
          <Field
            name={item.formName}
            component={DatePicker}
            defaultValue={null}
          />
        </div>
      ));
    }

    return (
      <div>
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3" >
            <div className="">
              <h4 className="text-center adv-scout-name">
                <i className="fa fa-user" />
                {scouts.singleScout.scoutFirstName} {scouts.singleScout.scoutLastName}
                <span style={{ marginLeft: '20px' }}>{scouts.singleScout.den} Den</span>
              </h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3" >
            <div className="select-den-advancement-div">
              <SelectDevAdv />
            </div>
          </div>
        </div>
        <div className="row">
          <form onSubmit={this.props.handleSubmit(this.doSubmit)}>
            <div className="col-sm-6 col-sm-offset-3 advancement-col">
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
      </div>
    );
  }
}

Advancement.propTypes = {
  adv: PropTypes.Object,
  scouts: PropTypes.Object,
  params: PropTypes.Object,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
  getScoutDetail: PropTypes.func,
  handleSubmit: PropTypes.func,
  updateScout: PropTypes.func,
  setAdvancement: PropTypes.func,
};

const mapStateToProps = ({ adv, scouts }) => ({
  adv,
  scouts,
  initialValues: scouts.singleScout,
});

const form = reduxForm({
  form: 'advancement',
  enableReinitialize: true,
});

Advancement = connect(mapStateToProps, actions)(form(Advancement));

export default Advancement;
