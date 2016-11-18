const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = 'Required';
  }

  if (!values.rank) {
    errors.rank = 'Required';
  }

  return errors;
};


export default validate;
