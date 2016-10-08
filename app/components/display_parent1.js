import React, { Component, PropTypes } from 'react';
import Parent1Address from './parent1_address';

const DisplayParent1 = ({scout}) => {
  if (!scout.parent1FirstName) {
    return null;
  } else {
    return (
      <div>
        <div className="card-row">
          <div className="card-column-1">
            <h5><i className="fa fa-user" aria-hidden="true"></i> {scout.parent1FirstName} {scout.parent1LastName}</h5>
            <Parent1Address scout={scout} />
          </div>
          <div className="card-column-2">
            <div className="margin-b-10">{scout.parent1RelationToScout}</div>
            {(() => { if (scout.parent1PhoneNumberMobile) return <p>M: <i className="fa fa-mobile"></i> {scout.parent1PhoneNumberMobile}</p>;})()}
            {(() => { if (scout.parent1PhoneNumberHome) return <p>H: <i className="fa fa-home"></i> {scout.parent1PhoneNumberHome}</p>;})()}
            {(() => { if (scout.parent1PhoneNumberWork) return <p>W: <i className="fa fa-briefcase"></i> {scout.parent1PhoneNumberWork}</p>;})()}
          </div>
        </div>
        <div className="card-notes">
          <p>{scout.parent1RelationToScout} Notes: {scout.parent1Notes}</p>
        </div>
      </div>
    );
  }
};

export default DisplayParent1;