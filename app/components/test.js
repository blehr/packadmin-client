import React, { Component, PropTypes } from 'react';
import { denArray, displayBirthday, getDen } from '../utils/util';
import bobcat from '../json/bobcat.json';
import lion from '../json/lion.json';
import tiger from '../json/tiger.json';
import wolf from '../json/wolf.json';
import bear from '../json/bear.json';
import webelos from '../json/webelos.json';

class Test extends Component {
  
  createDenAchievementLists(obj) {
    let keyValues = 0;
    const groupKeys = Object.keys(obj);
    groupKeys.shift();
    const elem = [];
    groupKeys.map(key => {
      obj[key].map(item => {
        elem.push(
          <div key={keyValues++}>
            <span>{item.name}</span>
          </div>
        );
      });
    });
    return elem;
  }
  
  
  render() {
    let keyValues = 0;
    const groupKeys = Object.keys(tiger);
    groupKeys.shift();
    const elem = [];
    groupKeys.map(key => {
      return tiger[key].map(item => {
        elem.push(
          <div key={keyValues}>
            <span>{item.name}</span>
          </div>
        );
        keyValues++;
      });
    });
    console.log('elem', elem);
    return (
      <div>
      {elem}
      </div>
    );
  }
}
export default Test;
