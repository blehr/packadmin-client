import React, { PropTypes } from 'react';
import PdfAdvancement from '../components/pdf_advancement';
import { displayBirthday, trueOrFalse, getAge } from '../utils/util';

const PdfScout = ({ scout, showAdv }) => (
  <div className="pdf-container" >
    <div className="pdf-col-div-1">
      <p><strong><i
        className="fa fa-user"
        aria-hidden="true"
      /> {scout.scoutFirstName} {scout.scoutLastName} </strong></p>

      <address>
        { scout.scoutStreetAddress && <div>{scout.scoutStreetAddress}</div> }

        { scout.scoutMailAddress && <div>{scout.scoutMailAddress}</div> }

        { scout.scoutCity &&
          <div>{scout.scoutCity}, {scout.scoutState} {scout.scoutZipCode}</div> }
      </address>
      <p>
        <i className="fa fa-birthday-cake" /> {displayBirthday(scout.birthday)}
      </p>
      <p>Age: {getAge(scout.birthday)}</p>
      <p>Grade: {scout.grade}</p>
      { scout.schoolDistrict &&
        <p><i className="fa fa-graduation-cap" /> {scout.schoolDistrict}</p> }
    </div>
    <div className="pdf-col-div-2">
      <p><i className="fa fa-users" aria-hidden="true" /> {scout.den}</p>
      <p>{trueOrFalse(scout.picturesAllowed)} Allow Pictures</p>
      <p>{trueOrFalse(scout.dues)} Dues Paid</p>
      <p>{trueOrFalse(scout.book)} Book Received</p>
      <p>{trueOrFalse(scout.boat)} Boat Received</p>
      <p>{trueOrFalse(scout.car)} Car Received</p>
    </div>
    <div className="pdf-notes">
      <p>Scout Notes: {scout.notes}</p>
    </div>

    <div className="pdf-col-div-1">
      <p>
        <i
          className="fa fa-user"
          aria-hidden="true"
        /> {scout.parent1FirstName} {scout.parent1LastName}
      </p>

      <address>
        <div>{trueOrFalse(scout.parent1AddressSameAsScout)} Same Address as Scout</div>
        <div>{scout.parent1StreetAddress}</div>
        { scout.parent1MailAddress && <div>{scout.parent1MailAddress}</div> }

        { scout.parent1City &&
          <div>{scout.parent1City}, {scout.parent1State} {scout.parent1ZipCode}</div> }

        { scout.parent1Email && <div>
          <i className="fa fa-envelope-o" />
          <a href={`mailto:${scout.parent1Email}`} > {scout.parent1Email}</a>
        </div> }

      </address>
    </div>
    <div className="pdf-col-div-2">

      <div className="margin-b-10">{scout.parent1RelationToScout}</div>
      { scout.parent1PhoneNumberMobile &&
        <p>M: <i className="fa fa-mobile" /> {scout.parent1PhoneNumberMobile}</p> }

      { scout.parent1PhoneNumberHome &&
        <p>H: <i className="fa fa-home" /> {scout.parent1PhoneNumberHome}</p> }

      { scout.parent1PhoneNumberWork &&
        <p>W: <i className="fa fa-briefcase" /> {scout.parent1PhoneNumberWork}</p> }
    </div>


    <div className="pdf-notes">
      <p>{scout.parent1RelationToScout} Notes: {scout.parent1Notes}</p>
    </div>

    { scout.parent2FirstName &&
      <div>
        <div className="pdf-col-div-1">
          <p>
            <i
              className="fa fa-user"
              aria-hidden="true"
            /> {scout.parent2FirstName} {scout.parent2LastName}
          </p>

          <address>
            <div>{trueOrFalse(scout.parent2AddressSameAsScout)} Same Address as Scout</div>
            <div>{scout.parent2StreetAddress}</div>
            { scout.parent2MailAddress && <div>{scout.parent2MailAddress}</div> }

            { scout.parent2City &&
              <div>{scout.parent2City}, {scout.parent2State} {scout.parent2ZipCode}</div> }

            { scout.parent2Email && <div>
              <i className="fa fa-envelope-o" />
              <a href={`mailto:${scout.parent2Email}`} > {scout.parent2Email}</a>
            </div> }

          </address>
        </div>
        <div className="pdf-col-div-2">

          <div className="margin-b-10">{scout.parent2RelationToScout}</div>
          { scout.parent2PhoneNumberMobile &&
            <p>M: <i className="fa fa-mobile" /> {scout.parent2PhoneNumberMobile}</p> }

          { scout.parent2PhoneNumberHome &&
            <p>H: <i className="fa fa-home" /> {scout.parent2PhoneNumberHome}</p> }

          { scout.parent2PhoneNumberWork &&
            <p>W: <i className="fa fa-briefcase" /> {scout.parent2PhoneNumberWork}</p> }
        </div>


        <div className="pdf-notes">
          <p>{scout.parent2RelationToScout} Notes: {scout.parent2Notes}</p>
        </div>
      </div>
    }

    { showAdv && <PdfAdvancement scout={scout} />}


  </div>
);

PdfScout.propTypes = {
  scout: PropTypes.object,
};


export default PdfScout;
