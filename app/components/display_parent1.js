import React, { PropTypes } from 'react';
import Parent1Address from './parent1_address';

const DisplayParent1 = ({ scout }) => {
  if (!scout.parent1FirstName) {
    return null;
  }
  return (
    <div>
      <div className="card-row">
        <div className="card-column-1">
          <h5>
            <i
              className="fa fa-user"
              aria-hidden="true"
            />{scout.parent1FirstName} {scout.parent1LastName}
          </h5>
          <Parent1Address scout={scout} />
        </div>
        <div className="card-column-2">
          <div className="margin-b-10">{scout.parent1RelationToScout}</div>
          { scout.parent1PhoneNumberMobile &&
            <p>M: <i className="fa fa-mobile" /> {scout.parent1PhoneNumberMobile}</p> }

          { scout.parent1PhoneNumberHome &&
            <p>H: <i className="fa fa-home" /> {scout.parent1PhoneNumberHome}</p> }

          { scout.parent1PhoneNumberWork &&
            <p>W: <i className="fa fa-briefcase" /> {scout.parent1PhoneNumberWork}</p> }

        </div>
      </div>
      <div className="card-notes">
        <p>{scout.parent1RelationToScout} Notes: {scout.parent1Notes}</p>
      </div>
    </div>
  );
};

DisplayParent1.propTypes = {
  scout: PropTypes.object,
};

export default DisplayParent1;
