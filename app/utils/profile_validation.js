const profileValidate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = 'Required';
  }

  if (!values.packNumber) {
    errors.packNumber = 'Required';
  }

  return errors;
};


export default profileValidate;
