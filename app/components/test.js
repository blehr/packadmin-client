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
            <div key={keyValues++} style={{ width: '100%' }} >
              <p >
                {item.name}
              </p> {
                scout[scoutDen] &&
                scout[scoutDen][item.formName] &&
                  <p className="text-danger pull-right" >
                    {displayBirthday(scout[scoutDen][item.formName])}
                  </p>
                }
              {/* </span> */}
            </div>
          );
        });
      });
    });

    return elem;
  }

  render() {
    return (
      <div className="col-sm-6 col-sm-offset-3">
        <div className="card">
          <div className="adv-column">
            {this.createDenAchievementLists(denArray, this.props.scout)}
          </div>
        </div>
      </div>
    );
  }
}

Test.propTypes = {
  scout: PropTypes.object,
};

export default Test;
