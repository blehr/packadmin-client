const leaderValidate = (values) => {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = 'Required';
  }

  if (!values.lastName) {
    errors.lastName = 'Required';
  }

  if (!values.position || values.position === '') {
    errors.position = 'Required';
  }


  return errors;
};


export default leaderValidate;
