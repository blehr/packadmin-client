import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import PdfAdvancement from '../components/pdf_advancement';
import { displayBirthday, trueOrFalse, getAge } from '../utils/util';


const PdfContainer = ({ scouts }) => {
  
  const elem = scouts.allScouts.map((scout) => {
    return (
      <div className="pdf-container" key={scout._id}>
        <h2>{scout.scoutFirstName} {scout.scoutLastName} <span> {scout.den} Den</span></h2>
        <p>{scout.den}</p>
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
        <p><i className="fa fa-users" aria-hidden="true" /> {scout.den}</p>
        <p>{trueOrFalse(scout.picturesAllowed)} Allow Pictures</p>
        <p>{trueOrFalse(scout.dues)} Dues Paid</p>
        <p>{trueOrFalse(scout.book)} Book Received</p>
        <p>{trueOrFalse(scout.boat)} Boat Received</p>
        <p>{trueOrFalse(scout.car)} Car Received</p>

        <div className="card-notes">
          <p>Scout Notes: {scout.notes}</p>
        </div>
        
        <h5>
          <i
            className="fa fa-user"
            aria-hidden="true"
          />{scout.parent1FirstName} {scout.parent1LastName}
        </h5>
          
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
        
        <div className="margin-b-10">{scout.parent1RelationToScout}</div>
        { scout.parent1PhoneNumberMobile &&
          <p>M: <i className="fa fa-mobile" /> {scout.parent1PhoneNumberMobile}</p> }

        { scout.parent1PhoneNumberHome &&
          <p>H: <i className="fa fa-home" /> {scout.parent1PhoneNumberHome}</p> }

        { scout.parent1PhoneNumberWork &&
          <p>W: <i className="fa fa-briefcase" /> {scout.parent1PhoneNumberWork}</p> }

        <div className="card-notes">
          <p>{scout.parent1RelationToScout} Notes: {scout.parent1Notes}</p>
        </div>
        
        { scout.parent2FirstName && 
          <div>
            <h5>
              <i
                className="fa fa-user"
                aria-hidden="true"
              />{scout.parent2FirstName} {scout.parent2LastName}
            </h5>
              
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
            
            <div className="margin-b-10">{scout.parent2RelationToScout}</div>
            { scout.parent2PhoneNumberMobile &&
              <p>M: <i className="fa fa-mobile" /> {scout.parent2PhoneNumberMobile}</p> }
    
            { scout.parent2PhoneNumberHome &&
              <p>H: <i className="fa fa-home" /> {scout.parent2PhoneNumberHome}</p> }
    
            { scout.parent2PhoneNumberWork &&
              <p>W: <i className="fa fa-briefcase" /> {scout.parent2PhoneNumberWork}</p> }
    
            <div className="card-notes">
              <p>{scout.parent2RelationToScout} Notes: {scout.parent2Notes}</p>
            </div>
          </div>
        }
        
        <PdfAdvancement scout={scout} />
        
        <hr />
        
      </div>
    );
  });
  
  return (
    <div>
      {elem}
    </div>
  );
  
  
};

const mapStateToProps = ({ scouts }) => ({
  scouts,
});

export default connect(mapStateToProps)(PdfContainer);