import React, { Component, PropTypes } from 'react';
import { DatePicker } from 'redux-form-material-ui';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import * as actions from '../actions';
import SelectDenAdv from '../components/select_den_advancement';
import LoadingComponent from './loading_container';
import { getRankObj, ranks } from '../utils/util';

const style = {
  margin: 12,
};

class Advancement extends Component {
  constructor(props) {
    super(props);
    this.doSubmit = this.doSubmit.bind(this);
  }
  componentDidMount() {
    // if (!this.props.scouts.scoutDetail) {
      setTimeout(() => {
        this.props.getScoutDetail(this.props.params.id);
      }, 1000);
    }
  // }
  doSubmit(values) {
    const obj = {};
    const den = getRankObj(this.props.scouts.advDen);
    const title = den.Den.toLowerCase();
    obj[title] = {};
    const denKeys = Object.keys(den);
    denKeys.shift();
    denKeys.map((key) => {
      den[key].map((item) => {
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
    const den = getRankObj(scouts.advDen);
    let elemReq = '';
    let elemArrow = '';
    let elemElective = '';
    let elemOthers = '';
    if (!scouts.scoutDetail) {
      return <h2>Loading...</h2>;
    }
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
        {this.props.loading && <LoadingComponent />}
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3" >
            <div className="">
              <h4 className="text-center adv-scout-name">
                <i className="fa fa-user" />
                {scouts.scoutDetail.scoutFirstName} {scouts.scoutDetail.scoutLastName}
                <span style={{ marginLeft: '20px' }}>{scouts.scoutDetail.den} Den</span>
              </h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3" >
            <div className="select-den-advancement-div">
              <SelectDenAdv />
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
              { elemArrow &&
                <fieldset>
                  <legend>{den.Den} Arrow of Light</legend>
                  <div className="form-group adv-form-group">
                    {elemArrow}
                  </div>
                </fieldset>
              }
              { elemElective &&
                <fieldset>
                  <legend>{den.Den} Electives</legend>
                  <div className="form-group adv-form-group">
                    {elemElective}
                  </div>
                </fieldset>
              }
              { elemOthers &&
                <fieldset>
                  <legend>{den.Den} Others</legend>
                  <div className="form-group adv-form-group">
                    {elemOthers}
                  </div>
                </fieldset>
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
  loading: PropTypes.bool,
  scouts: PropTypes.Object,
  params: PropTypes.Object,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
  getScoutDetail: PropTypes.func,
  handleSubmit: PropTypes.func,
  updateScout: PropTypes.func,
};


const mapStateToProps = ({ scouts, user, loading }) => ({
  user,
  scouts,
  loading,
  initialValues: scouts.advData,
});

const form = reduxForm({
  form: 'advancement',
  enableReinitialize: true,
});

Advancement = connect(mapStateToProps, actions)(form(Advancement));

export default Advancement;
