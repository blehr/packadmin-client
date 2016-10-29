import React, { Component, PropTypes } from 'react';
import ShowRank from './show_rank_adv';
import { displayBirthday, getDen } from '../utils/util';

class DisplayRankProgress extends Component {
  createDenAchievementLists(theDen, scout) {
    const elem = [];
    let keyValues = 0;
    const den = getDen(theDen);
      let tableBody = [];
      const denHeadings = Object.keys(den.denObj);
      denHeadings.shift();
      denHeadings.map((heading) => {
        tableBody = den.denObj[heading].map((item) => {
          const scoutDen = den.denString;
          return (
            <tr key={keyValues++}>
              <td>{item.name}</td>
              <td>{
                scout[scoutDen] &&
                scout[scoutDen][item.formName] &&
                  <strong className="text-success">
                    {displayBirthday(scout[scoutDen][item.formName])}
                  </strong>
                }</td>
            </tr>
          );
        });
        const table = (
        <div className={den.Den}  key={keyValues++}>
          <h3>{den.Den}</h3>
          <table className="table table-striped table-condensed table-hover">
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
    return elem;
  }

  render() {
    return (
      <div className="col-sm-6 col-sm-offset-3 adv-display-div">
        <ShowRank />
        {this.createDenAchievementLists(this.props.activeDen, this.props.scout)}
      </div>
    );
  }
}

DisplayRankProgress.propTypes = {
  scout: PropTypes.object,
};

export default DisplayRankProgress;
