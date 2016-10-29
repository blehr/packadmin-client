import React, { PropTypes } from 'react';
import Parent2Address from './parent2_address';

const DisplayParent2 = ({ scout }) => {
  if (!scout.parent2FirstName) {
    return null;
  }
  return (
    <div>
      <hr />
      <div className="card-row">
        <div className="card-column-1">
          <h5>
            <i
              className="fa fa-user"
              aria-hidden="true"
            />{scout.parent2FirstName} {scout.parent2LastName}
          </h5>
          <Parent2Address scout={scout} />
        </div>
        <div className="card-column-2">
          <div className="margin-b-10">{scout.parent2RelationToScout}</div>
          { scout.parent2PhoneNumberMobile && <p>M: <i className="fa fa-mobile" /> {scout.parent2PhoneNumberMobile}</p> }
            
          { scout.parent2PhoneNumberHome && <p>H: <i className="fa fa-home" /> {scout.parent2PhoneNumberHome}</p> }
           
          { scout.parent2PhoneNumberWork && <p>W: <i className="fa fa-briefcase" /> {scout.parent2PhoneNumberWork}</p> }
        </div>
      </div>
      <div className="card-notes">
        <p>{scout.parent2RelationToScout} Notes: {scout.parent2Notes}</p>
      </div>
    </div>
  );
};

DisplayParent2.propTypes = {
  scout: PropTypes.object,
};


export default DisplayParent2;
