import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { displayBirthday } from '../utils/util';

const LeaderItem = ({ leader }) => (
  <Link to={`/leaders/detail/${leader._id}`} >
    <div className="roster-item">
      <div className="flex-container">
        <h4>{ leader.firstName } { leader.lastName } </h4>
        <span>{ leader.position }</span>
      </div>
      <div className="flex-container check-labels">
        <div>
          { leader.email && <p>{leader.email}</p> }
          { leader.mobilePhone && <p>{leader.mobilePhone}</p> }
          <p></p>
        </div>
        <div>
          { leader.driversLicense && <p>{leader.driversLicense}</p> }
          { leader.youthProtection && <p>YP {displayBirthday(leader.youthProtection)}</p> }
        </div>
      </div>
    </div>
  </Link>
);

LeaderItem.propTypes = {
  leader: PropTypes.object,
};

export default LeaderItem;
