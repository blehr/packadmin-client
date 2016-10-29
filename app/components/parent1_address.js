import React, { PropTypes } from 'react';
import { trueOrFalse } from '../utils/util';

const Parent1Address = ({ scout }) => {
  if (scout.parent1FirstName) {
    if (scout.parent1AddressSameAsScout) {
      return (
        <div>
          <div>{trueOrFalse(scout.parent1AddressSameAsScout)} Same Address as Scout</div>
          { scout.parent1Email && <div>
            <i className="fa fa-envelope-o" />
            <a href={`mailto:${scout.parent1Email}`} > {scout.parent1Email}
            </a>
          </div> }
            
        </div>
      );
    }
    return (
      <address>
        <div>{scout.parent1StreetAddress}</div>
        { scout.parent1MailAddress && <div>{scout.parent1MailAddress}</div> }
          
        { scout.parent1City && <div>{scout.parent1City}, {scout.parent1State} {scout.parent1ZipCode}</div> }
         
        { scout.parent1Email && <div>
          <i className="fa fa-envelope-o" />
          <a href={`mailto:${scout.parent1Email}`} > {scout.parent1Email}</a>
        </div> }
          
      </address>
    );
  }
  return null;
};

Parent1Address.propTypes = {
  scout: PropTypes.object,
};

export default Parent1Address;
