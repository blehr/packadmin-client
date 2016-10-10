import React, { PropTypes } from 'react';
import { trueOrFalse } from '../utils/util';

const Parent2Address = ({ scout }) => {
  let address = '';
  if (scout.parent2FirstName) {
    if (scout.parent2AddressSameAsScout) {
      address = (
        <div>
          <div>{trueOrFalse(scout.parent2AddressSameAsScout)} Same Address as Scout</div>
          {(() => { if (scout.parent2Email) return <div><i className="fa fa-envelope-o" /> <a href={`mailto:${scout.parent2Email}`} >{scout.parent2Email}</a></div>; })()}
        </div>
      );
    }
    address = (
      <address>
        <div>{scout.parent2StreetAddress}</div>
        {(() => { if (scout.parent2MailAddress)  return <div >{scout.parent2MailAddress}</div>; })()}
        {(() => { if (scout.parent2City)  return <div >{scout.parent2City}, {scout.parent2State} {scout.parent2ZipCode}</div>; })()}
        {(() => { if (scout.parent2Email) return <div><i className="fa fa-envelope-o" /> <a href={`mailto:${scout.parent2Email}`} >{scout.parent2Email}</a></div>; })()}
      </address>
    );
  }

  return address;
};

Parent2Address.propTypes = {
  scout: PropTypes.obj,
};

export default Parent2Address;
