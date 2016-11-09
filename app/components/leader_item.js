import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { displayBirthday } from '../utils/util';

const LeaderItem = ({ leader }) => (
  <Link to={`/leaders/detail/${leader._id}`} >
    <div className="roster-item">

      <h4><i className="fa fa-user" /> { leader.firstName } { leader.lastName } </h4>
      <div className="inner-leader-item">
        <p>{ leader.position }</p>
        { leader.mobilePhone && <p><i className="fa fa-mobile" /> {leader.mobilePhone}</p> }

        { leader.email && <p><i className="fa fa-envelope-o" /> {leader.email}</p> }

        { leader.youthProtection &&
          <p>
            Youth <i
              className="fa fa-child"
                  /> Protection: {displayBirthday(leader.youthProtection)}
          </p>
        }
      </div>
    </div>
  </Link>
);

LeaderItem.propTypes = {
  leader: PropTypes.object,
};

export default LeaderItem;
