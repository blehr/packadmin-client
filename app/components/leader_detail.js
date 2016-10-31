import React, { PropTypes } from 'react';
import { getAge, displayBirthday } from '../utils/util';


const LeaderDetail = (props) => {
  (() => { window.scrollTo(0, 0); })();
  const { leader } = props;
  return (
    <div className="col-sm-6 col-sm-offset-3">
      <div className="card">
        <div className="card-row" >
          <h4 className="scout-link-name">
            <i className="fa fa-user" />
            {leader.firstName} {leader.lastName}
          </h4>
        </div>

        <div className="card-row">
          <div className="card-column-1">
            <p>{leader.position}</p>
            <address>
              { leader.streetAddress && <div>{leader.streetAddress}</div> }

              { leader.mailAddress && <div>{leader.mailAddress}</div> }

              { leader.city &&
                <div>{leader.city}, {leader.state} {leader.zipCode}</div> }
            </address>
            { leader.mobilePhone && <p><i className="fa fa-mobile" /> {leader.mobilePhone}</p> }
            { leader.homePhone && <p><i className="fa fa-home" /> {leader.homePhone}</p> }
            { leader.workPhone && <p><i className="fa fa-briefcase" /> {leader.workPhone}</p> }
            { leader.email && <p><a href={`mailto:${leader.email}`} >{leader.email}</a></p> }

          </div>
          <div className="card-column-2">
            { leader.birthday &&
              <p>
                <i className="fa fa-birthday-cake" /> {displayBirthday(leader.birthday)}
              </p>
            }
            <p>Age: {getAge(leader.birthday)}</p>
            { leader.driversLicense &&
              <p><i className="fa fa-car" /> {leader.driversLicense}</p> }
          </div>
        </div>
        <div className="card-notes">
          { leader.youthProtection &&
            <p>
              Youth <i
                className="fa fa-child"
                    /> Protection: {displayBirthday(leader.youthProtection)}
            </p>
          }
          <p>Leader Notes: {leader.notes}</p>
        </div>
      </div>
    </div>
  );
};

LeaderDetail.propTypes = {
  leader: PropTypes.object,
};

export default LeaderDetail;
