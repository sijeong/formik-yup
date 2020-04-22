import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
  firstName: yup.string().required('Required'),
  lastName: yup.string().required('Required'),
});

export const Register = () => {
//   const validate = (values) => {
//     const errors = {};
//     if (!values.firstName) {
//       errors.firstName = 'Required';
//     }
//     if (!values.lastName) {
//       errors.lastName = 'Required';
//     }

//     return errors;
//   };

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="firstName"
        onChange={handleChange}
        value={values.firstName}
      />
      {errors.firstName ? errors.firstName : null}
      <input name="lastName" onChange={handleChange} value={values.lastName} />
      {errors.lastName ? errors.lastName : null}
      <button type="submit">Submit</button>
    </form>
  );
};
