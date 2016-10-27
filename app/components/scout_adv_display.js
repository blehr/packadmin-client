import React, { Component, PropTypes } from 'react';
import { denArray, displayBirthday, getDen } from '../utils/util';
import bobcat from '../json/bobcat.json';
import lion from '../json/lion.json';
import tiger from '../json/tiger.json';
import wolf from '../json/wolf.json';
import bear from '../json/bear.json';
import webelos from '../json/webelos.json';


class AdvDisplay extends Component {
  componentDidMount() {

  }
  render() {
    let orderKey = 0;
    const { scout } = this.props;
    const keys = Object.keys(scout);
    const scoutAdv = [];
    keys.forEach((key) => {
      denArray.forEach((den) => {
        if (key === den) {
          scoutAdv.push(scout[den]);
        }
      });
    });
    const elem = [];
    scoutAdv.forEach((adv) => {
      const advKeys = Object.keys(adv);
      console.log('advKeys', advKeys, 'adv', adv, 'scoutAdv', scoutAdv);
      advKeys.forEach((key) => {
        if (key !== '_id') {
          elem.push(<div key={orderKey} >{key} {displayBirthday(adv[key])} </div>);
          orderKey++;
        }
      });
    });
    console.log(elem);
    return (
      <div className="card">
        <div>
          {elem}
        </div>
      </div>
    );
  }
}

AdvDisplay.propTypes = {
  scout: PropTypes.Object,
};

export default AdvDisplay;
