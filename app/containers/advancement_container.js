import React, { Component, PropTypes } from 'react';
import { DatePicker } from 'redux-form-material-ui';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import * as actions from '../actions';
import SelectDevAdv from '../components/select_den_advancement';
import { getDen } from '../utils/util';

const style = {
  margin: 12,
};

class Advancement extends Component {
  constructor(props) {
    super(props);
    this.doSubmit = this.doSubmit.bind(this);
  }
  componentDidMount() {
    if (this.props.scouts.allScouts.length !== 1) {
      setTimeout(() => {
        this.props.getScoutDetail(this.props.params.id);
      }, 1000);
    }
  }
  doSubmit(values) {
    const obj = {};
    const den = getDen(this.props.scouts.advDen);
    const title = den.denString;
    obj[title] = {};
    const denKeys = Object.keys(den.denObj);
    denKeys.shift();
    denKeys.map((key) => {
      den.denObj[key].map((item) => {
        const itemName = item.formName;
        if (values[itemName]) {
          obj[title][itemName] = values[itemName];
        }
      });
    });
    this.props.updateScout(obj, this.props.params.id);
  }
  render() {
    const { scouts } = this.props;
    const den = getDen(scouts.advDen);
    let elemReq = '';
    let elemArrow = '';
    let elemElective = '';
    let elemOthers = '';
    if (scouts.allScouts.length !== 1) {
      return <h2>Loading...</h2>;
    }
    if (den.denObj.Requirements) {
      elemReq = den.denObj.Requirements.map(item => (
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
    if (den.denObj['Arrow of Light']) {
      elemArrow = den.denObj['Arrow of Light'].map(item => (
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
    if (den.denObj.Electives) {
      elemElective = den.denObj.Electives.map(item => (
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
    if (den.denObj.Others) {
      elemOthers = den.denObj.Others.map(item => (
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
                {scouts.allScouts[0].scoutFirstName} {scouts.allScouts[0].scoutLastName}
                <span style={{ marginLeft: '20px' }}>{scouts.allScouts[0].den} Den</span>
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
                <legend>{den.denObj.Den} Requirements</legend>
                <div className="form-group adv-form-group">
                  {elemReq}
                </div>
              </fieldset>
              {
                (() => {
                  if (elemArrow !== '') {
                    return (
                      <fieldset>
                        <legend>{den.denObj.Den} Arrow of Light</legend>
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
                        <legend>{den.denObj.Den} Electives</legend>
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
                        <legend>{den.denObj.Den} Others</legend>
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
  denAdvData: PropTypes.func,
  setAdvancement: PropTypes.func,
};


const mapStateToProps = ({ scouts }) => ({
  scouts,
  initialValues: scouts.advData,
});

const form = reduxForm({
  form: 'advancement',
  enableReinitialize: true,
});

Advancement = connect(mapStateToProps, actions)(form(Advancement));

export default Advancement;
