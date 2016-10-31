import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { displayBirthday } from '../utils/util';

const LeaderItem = ({ leader }) => (
  <Link to={`/leaders/detail/${leader._id}`} >
    <div className="roster-item">

      <h4><i className="fa fa-user" /> { leader.firstName } { leader.lastName } </h4>
        <div>
          <p>{ leader.position }</p>
          { leader.email && <p><i className="fa fa-envelope-o" /> {leader.email}</p> }
          { leader.mobilePhone && <p>M: <i className="fa fa-mobile" /> {leader.mobilePhone}</p> }
          { leader.homePhone && <p>M: <i className="fa fa-home" /> {leader.homePhone}</p> }
          { leader.workPhone && <p>M: <i className="fa fa-briefcase" /> {leader.workPhone}</p> }
        </div>
        <div>
          { leader.driversLicense &&
            <p><i className="fa fa-car" /> {leader.driversLicense}</p> }
        </div>
        { leader.youthProtection &&
          <p>
            Youth <i className="fa fa-child" /> Protection: {displayBirthday(leader.youthProtection)}
          </p>
      }
      </div>
  </Link>
);

LeaderItem.propTypes = {
  leader: PropTypes.object,
};

export default LeaderItem;
