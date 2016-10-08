import {
  Field,
  reduxForm
}
from 'redux-form';


const validate = values => {
  const errors = {};
  
  if(!values.scoutFirstName) {
    errors.scoutFirstName = 'Required';
  }
  
   if(!values.scoutLastName) {
    errors.scoutLastName = 'Required';
  }
  
   if(!values.birthday) {
    errors.birthday = 'Required';
  }
  
  if(!values.den || values.den === '') {
    errors.den = 'Required';
  }
  
  if(!values.parent1FirstName) {
    errors.parent1FirstName = 'Required';
  }
  
   if(!values.parent1LastName) {
    errors.parent1LastName = 'Required';
  }
  
   if(!values.parent1RelationToScout) {
    errors.parent1RelationToScout = 'Required';
  }
  
  return errors;
};


export default validate;