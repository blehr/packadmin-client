import React, { PropTypes } from 'react';
import { getAge, displayBirthday } from '../utils/util';


const PdfLeaderDetail = (props) => {
  const { leader } = props;
  return (
    <div className="pdf-container">
      <div className="pdf-col-div-1">
        <p><strong>
          <i className="fa fa-user" />
          {leader.firstName} {leader.lastName}
        </strong></p>
        <p>{leader.position}</p>
        <address>
          { leader.streetAddress && <div>{leader.streetAddress}</div> }

          { leader.mailAddress && <div>{leader.mailAddress}</div> }

          { leader.city &&
            <div>{leader.city}, {leader.state} {leader.zipCode}</div> }
        </address>
        { leader.email && <p><a href={`mailto:${leader.email}`} >{leader.email}</a></p> }
        { leader.youthProtection &&
          <p>
            Youth <i
              className="fa fa-child"
                  /> Protection: {displayBirthday(leader.youthProtection)}
          </p>
        }
      </div>
      <div className="pdf-col-div-2">
        { leader.birthday &&
          <p>
            <i className="fa fa-birthday-cake" /> {displayBirthday(leader.birthday)}
          </p>
        }
        <p>Age: {getAge(leader.birthday)}</p>
        { leader.mobilePhone && <p><i className="fa fa-mobile" /> {leader.mobilePhone}</p> }
        { leader.homePhone && <p><i className="fa fa-home" /> {leader.homePhone}</p> }
        { leader.workPhone && <p><i className="fa fa-briefcase" /> {leader.workPhone}</p> }
        { leader.driversLicense &&
          <p><i className="fa fa-car" /> {leader.driversLicense}</p> }
      </div>
      <div className="pdf-notes">

        <p>Leader Notes: {leader.notes}</p>
      </div>
    </div>
  );
};

PdfLeaderDetail.propTypes = {
  leader: PropTypes.object,
};

export default PdfLeaderDetail;
