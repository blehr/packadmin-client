import React, { Component, PropTypes } from 'react';
import { displayBirthday, Ranks, getRankObj } from '../utils/util';

class PdfAdvancement extends Component {
  createDenAchievementLists(scout, customDens) {
    const elem = [];
    let keyValues = 0;
    let rank = '';
    if (customDens.length > 0) {
      customDens.forEach((den) => {
        if (scout.den === den.name) {
          rank = den.rank;
        } else {
          Ranks.forEach((denItem) => {
            if (scout.den === denItem.name) { rank = denItem.rank; }
          });
        }
      });
    }

    if (customDens.length === 0) {
      Ranks.forEach((den) => {
        if (scout.den === den.rank) { rank = den.rank; }
      });
    }

    const den = getRankObj(rank);
    let tableBody = [];
    const denHeadings = Object.keys(den);
    denHeadings.shift();
    denHeadings.map((heading) => {
      tableBody = den[heading].map((item) => {
        const scoutDen = rank.toLowerCase();
        return (
          <tr key={keyValues += 1}>
            <td>{item.name}</td>
            <td>{
              scout[scoutDen] &&
              scout[scoutDen][item.formName] &&
                <strong className="adv-item">
                  {displayBirthday(scout[scoutDen][item.formName])}
                </strong>
              }</td>
          </tr>
        );
      });
      const table = (
        <div className={den.Den} key={keyValues += 1}>
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
      <div>
        {this.createDenAchievementLists(this.props.scout, this.props.customDens)}
        <span className="end-of-file">
          * end of file {this.props.scout.scoutFirstName} {this.props.scout.scoutLastName}
        </span>
      </div>
    );
  }
}

PdfAdvancement.propTypes = {
  customDens: PropTypes.array,
  scout: PropTypes.object,
};

export default PdfAdvancement;
