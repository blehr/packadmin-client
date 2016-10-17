const signupValidate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = 'Required';
  }

  if (!values.email) {
    errors.email = 'Required';
  }

  if (!values.password) {
    errors.password = 'Required';
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = 'Required';
  }

  if (!values.packNumber) {
    errors.packNumber = 'Required';
  }

  if (values.password !== values.confirmPassword) {
    errors.password = 'Password do not match';
  }

  return errors;
};


export default signupValidate;
