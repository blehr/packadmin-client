const newPasswordValidate = (values) => {
  const errors = {};

  if (!values.password) {
    errors.password = 'Required';
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = 'Required';
  }

  if (values.password !== values.confirmPassword) {
    errors.password = 'Password do not match';
  }

  return errors;
};


export default newPasswordValidate;
