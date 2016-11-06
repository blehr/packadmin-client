import React, { Component, PropTypes } from 'react';
import { displayBirthday, getDen } from '../utils/util';

class PdfAdvancement extends Component {
  createDenAchievementLists(scout) {
    const elem = [];
    let keyValues = 0;
    const den = getDen(scout.den);
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
                <strong className="adv-item">
                  {displayBirthday(scout[scoutDen][item.formName])}
                </strong>
              }</td>
          </tr>
        );
      });
      const table = (
        <div className={den.Den} key={keyValues++}>
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
        {this.createDenAchievementLists(this.props.scout)}
        <span className="end-of-file">
          * end of file {this.props.scout.scoutFirstName} {this.props.scout.scoutLastName}
        </span>
      </div>
    );
  }
}

PdfAdvancement.propTypes = {
  scout: PropTypes.object,
};

export default PdfAdvancement;
