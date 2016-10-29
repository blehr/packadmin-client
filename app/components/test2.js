import React, { Component, PropTypes } from 'react';
import ShowRank from './show_rank_adv';
import { denArray, displayBirthday, getDen } from '../utils/util';

class Test extends Component {
  createDenAchievementLists(denArray, scout) {
    const elem = [];
    let keyValues = 0;
    denArray.forEach((den) => {
      let tableBody = [];
      const denHeadings = Object.keys(den);
      denHeadings.shift();
      denHeadings.map((heading) => {
        tableBody = den[heading].map((item) => {
          const denString = getDen(den.Den);
          const scoutDen = denString.denString;

          return (
            <tr key={keyValues++}>
              <td>{item.name}</td>
              <td>{
                scout[scoutDen] &&
                scout[scoutDen][item.formName] &&
                  <strong className="text-danger">
                    {displayBirthday(scout[scoutDen][item.formName])}
                  </strong>
                }</td>
            </tr>
          );
        });
        const table = (
        <div className={den.Den}  key={keyValues++}>
          <h3>{den.Den}</h3>
          <table className="table table-striped table-condensed">
            <tbody>
              <tr>
                <th>{heading}</th>
                <th className="cell-2">Completed</th>
              </tr>
              {tableBody}
            </tbody>
          </table>
        </div>
      );
      elem.push(table);
        
      });
      
    });
    
    console.log(elem);
    return elem;
  }

  render() {
    return (
      <div className="col-sm-6 col-sm-offset-3 adv-display-div">
        <ShowRank />
        {this.createDenAchievementLists(denArray, this.props.scout)}
      </div>
    );
  }
}

Test.propTypes = {
  scout: PropTypes.object,
};

export default Test;
