import React, { PropTypes } from 'react';
import { trueOrFalse } from '../utils/util';

const Parent2Address = ({ scout }) => {
  if (scout.parent2FirstName) {
    if (scout.parent2AddressSameAsScout) {
      return (
        <div>
          <div>{trueOrFalse(scout.parent2AddressSameAsScout)} Same Address as Scout</div>
          { scout.parent2Email && <div>
            <i className="fa fa-envelope-o" />
            <a href={`mailto:${scout.parent2Email}`} > {scout.parent2Email}
            </a>
          </div> }
        </div>
      );
    }
    return (
      <address>
        <div>{scout.parent2StreetAddress}</div>
        { scout.parent2MailAddress && <div>{scout.parent2MailAddress}</div> }

        { scout.parent2City &&
          <div>{scout.parent2City}, {scout.parent2State} {scout.parent2ZipCode}</div> }

        { scout.parent2Email && <div>
          <i className="fa fa-envelope-o" />
          <a href={`mailto:${scout.parent2Email}`} > {scout.parent2Email}</a>
        </div> }
      </address>
    );
  }
  return null;
};

Parent2Address.propTypes = {
  scout: PropTypes.object,
};

export default Parent2Address;
