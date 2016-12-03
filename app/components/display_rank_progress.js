import React, { Component, PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';
import ShowRank from './show_rank_adv';
import { displayBirthday, getRankObj, Ranks } from '../utils/util';

const style = {
  // margin: 12,
};

class DisplayRankProgress extends Component {
  createDenAchievementLists(theDen, scout, customDens) {
    const elem = [];
    let keyValues = 0;
    let rank = '';
    if (customDens.length > 0) {
      customDens.forEach((den) => {
        if (theDen === den.rank) {
          rank = den.rank;
        } else {
          Ranks.forEach((denItem) => {
            if (theDen === denItem.name) { rank = denItem.rank; }
          });
        }
      });
    }

    if (customDens.length === 0) {
      Ranks.forEach((den) => {
        if (theDen === den.rank) { rank = den.rank; }
      });
    }

    const den = getRankObj(rank);
    let tableBody = [];
    const denHeadings = Object.keys(den);
    denHeadings.shift();
    denHeadings.map((heading) => {
      tableBody = den[heading].map((item) => {
        const scoutDen = theDen.toLowerCase();
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
      <div className="col-sm-6 col-sm-offset-3 adv-display-div">
        <div className="rank-adv-div">
          <ShowRank
            activeDen={this.props.activeDen}
            customDens={this.props.customDens}
            changeAdvDen={this.props.changeAdvDen}
          />
          <Link to={`/scouts/detail/${this.props.scout._id}/advancement`} >
            <RaisedButton
              type="button"
              label="Add Advancements"
              style={style}
              labelColor={'#FFF'}
              primary
            />
          </Link>
        </div>
        <div className="card">
          {this.createDenAchievementLists(
            this.props.activeDen,
            this.props.scout,
            this.props.customDens
          )}
        </div>
      </div>
    );
  }
}

DisplayRankProgress.propTypes = {
  changeAdvDen: PropTypes.func,
  scout: PropTypes.object,
  customDens: PropTypes.array,
  activeDen: PropTypes.string,
};

export default DisplayRankProgress;
