import React, { Component, PropTypes } from 'react';
import { trueOrFalse } from '../utils/util';

const Parent1Address = ({scout}) => {
  if (scout.parent1FirstName) {
    if (scout.parent1AddressSameAsScout) {
      return (
        <div>
          <div>{trueOrFalse(scout.parent1AddressSameAsScout)} Same Address as Scout</div>
          {(() => { if (scout.parent1Email) return <div><i className="fa fa-envelope-o"></i> <a href={"mailto:" + scout.parent1Email} >{scout.parent1Email}</a></div>;})()}
        </div>
      );
    } else {
      return (
        <address>
          <div>{scout.parent1StreetAddress}</div>
          {(() => { if (scout.parent1MailAddress)  return <div >{scout.parent1MailAddress}</div>; })()}
          {(() => { if (scout.parent1City)  return <div >{scout.parent1City}, {scout.parent1State} {scout.parent1ZipCode}</div>; })()}
          {(() => { if (scout.parent1Email) return <div><i className="fa fa-envelope-o"></i> <a href={"mailto:" + scout.parent1Email} >{scout.parent1Email}</a></div>;})()}
        </address>
      );
    }
  }
};

export default Parent1Address;
