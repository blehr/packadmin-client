import React, { Component, PropTypes } from 'react';
import { trueOrFalse, getAge, displayBirthday } from '../utils/util';
import DisplayParent1 from './display_parent1';
import DisplayParent2 from './display_parent2';
import ScoutLink from './scout_link';

const ScoutDetail = props => {
    const { scout, removeScout } = props;
    return (
      <div className="col-sm-6 col-sm-offset-3">
        <div className="card">
          <ScoutLink scout={scout} removeScout={removeScout} />
          
          <div className="card-row">
            <div className="card-column-1">
              <address>
                {(() => { if (scout.scoutStreetAddress)  return <div >{scout.scoutStreetAddress}</div>; })()}
                {(() => { if (scout.scoutMailAddress)  return <div >{scout.scoutMailAddress}</div>; })()}
                {(() => { if (scout.scoutCity) return <div >{scout.scoutCity}, {scout.scoutState} {scout.scoutZipCode}</div>; })}
              </address>
              <p><i className="fa fa-birthday-cake"></i> {displayBirthday(scout.birthday)}</p>
              <p>Age: {getAge(scout.birthday)}</p>
              <p>Grade: {scout.grade}</p>
              {(() => { if (scout.schoolDistrict) return <p><i className="fa fa-graduation-cap"></i> {scout.schoolDistrict}</p>; })}
            </div>
            <div className="card-column-2">
              <p><i className="fa fa-users" aria-hidden="true"></i> {scout.den}</p>
              <p>{trueOrFalse(scout.picturesAllowed)} Allow Pictures</p>
              <p>{trueOrFalse(scout.dues)} Dues Paid</p>
              <p>{trueOrFalse(scout.book)} Book Received</p>
              <p>{trueOrFalse(scout.boat)} Boat Received</p>
              <p>{trueOrFalse(scout.car)} Car Received</p>
            </div>
          </div>
          <div className="card-notes">
            <p>Scout Notes: {scout.notes}</p>
          </div>
          <hr/>
          <DisplayParent1 scout={scout} />
          <hr/>
          <DisplayParent2 scout={scout} />
        </div>
      </div>
    );
};

ScoutDetail.propTypes = {
  scout: PropTypes.object,
  removeScout: PropTypes.func
};

export default ScoutDetail;