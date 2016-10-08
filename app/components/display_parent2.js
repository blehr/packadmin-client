import React, { Component, PropTypes } from 'react';
import Parent2Address from './parent2_address';

const DisplayParent2 = ({scout}) => {
  if (!scout.parent2FirstName) {
    return null;
  } else {
    return (
      <div>
        <div className="card-row">
          <div className="card-column-1">
            <h5><i className="fa fa-user" aria-hidden="true"></i> {scout.parent2FirstName} {scout.parent2LastName}</h5>
            <Parent2Address scout={scout} />
          </div>
          <div className="card-column-2">
            <div className="margin-b-10">{scout.parent2RelationToScout}</div>
            {(() => { if (scout.parent2PhoneNumberMobile) return <p>M: <i className="fa fa-mobile"></i> {scout.parent2PhoneNumberMobile}</p>;})()}
            {(() => { if (scout.parent2PhoneNumberHome) return <p>H: <i className="fa fa-home"></i> {scout.parent2PhoneNumberHome}</p>;})()}
            {(() => { if (scout.parent2PhoneNumberWork) return <p>W: <i className="fa fa-briefcase"></i> {scout.parent2PhoneNumberWork}</p>;})()}
          </div>
        </div>
        <div className="card-notes">
          <p>{scout.parent2RelationToScout} Notes: {scout.parent2Notes}</p>
        </div>
      </div>
    );
  }
};

export default DisplayParent2;
