import React, { Component, PropTypes } from 'react';
import { denArray, displayBirthday, getDen } from '../utils/util';

class Test extends Component {
  createDenAchievementLists(denArray, scout) {
    const elem = [];
    let keyValues = 0;
    denArray.forEach((den) => {
      elem.push(<h2 key={keyValues++}>{den.Den}</h2>);
      const denHeadings = Object.keys(den);
      denHeadings.shift();
      denHeadings.forEach((heading) => {
        elem.push(<h3 key={keyValues++}>{heading}</h3>);
        den[heading].forEach((item) => {
          const denString = getDen(den.Den);
          const scoutDen = denString.denString;

          elem.push(
            <div key={keyValues++}>
              <span>{item.name} {
                scout[scoutDen] &&
                scout[scoutDen][item.formName] &&
                  <strong className="text-danger">
                    {displayBirthday(scout[scoutDen][item.formName])}
                  </strong>
                }
              </span>
            </div>
          );
        });
      });
    });

    return elem;
  }

  render() {
    return (
      <div>
        {this.createDenAchievementLists(denArray, this.props.scout)}
      </div>
    );
  }
}

Test.propTypes = {
  scout: PropTypes.object,
};

export default Test;
