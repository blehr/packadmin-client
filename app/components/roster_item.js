import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { trueOrFalse } from '../utils/util';

const RosterItem = ({ scout }) => (
  <Link to={`/scouts/detail/${scout._id}`} >
    <div className="roster-item">
      <div className="flex-container">
        <h4>{ scout.scoutFirstName } { scout.scoutLastName } </h4>
        <span>{ scout.den }</span>
      </div>
      <div className="flex-container check-labels">
        <div>
          <p>{trueOrFalse(scout.picturesAllowed)} Allow Pictures</p>
          <p>{trueOrFalse(scout.dues)} Dues Paid</p>
          <p>{trueOrFalse(scout.book)} Book Received</p>
        </div>
        <div>
          <p>{trueOrFalse(scout.boat)} Boat Received</p>
          <p>{trueOrFalse(scout.car)} Car Received</p>
        </div>
      </div>
    </div>
  </Link>
);

RosterItem.propTypes = {
  scout: PropTypes.object,
};

export default RosterItem;
