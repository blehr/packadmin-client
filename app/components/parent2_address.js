import React, { Component, PropTypes } from 'react';
import { trueOrFalse } from '../utils/util';

const Parent2Address = ({scout}) => {
  if (scout.parent2FirstName) {
    if (scout.parent2AddressSameAsScout) {
      return (
        <div>
          <div>{trueOrFalse(scout.parent2AddressSameAsScout)} Same Address as Scout</div>
          {(() => { if (scout.parent2Email) return <div><i className="fa fa-envelope-o"></i> <a href={"mailto:" + scout.parent2Email} >{scout.parent2Email}</a></div>;})()}
        </div>
      );
    } else {
      return (
        <address>
          <div>{scout.parent2StreetAddress}</div>
          {(() => { if (scout.parent2MailAddress)  return <div >{scout.parent2MailAddress}</div>; })()}
          {(() => { if (scout.parent2City)  return <div >{scout.parent2City}, {scout.parent2State} {scout.parent2ZipCode}</div>; })()}
          {(() => { if (scout.parent2Email) return <div><i className="fa fa-envelope-o"></i> <a href={"mailto:" + scout.parent2Email} >{scout.parent2Email}</a></div>;})()}
        </address>
      );
    }
  }
};
    
export default Parent2Address;
