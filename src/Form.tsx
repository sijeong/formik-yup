import React, { useEffect, useRef, memo } from 'react';
import { Formik, useFormik, Field } from 'formik';
import { validationSchema } from './model';
import './Form.css';
import { InputTag } from './InputTag';

const ValidatedLoginForm = () => {
  const {
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    isValid,
    validateForm,
  } = useFormik({
    initialValues: { email: '', password: '', memo: '' },
    validationSchema,
    onSubmit: () => {},
  });
  useEffect(() => {
    (() => validateForm())();
  }, [validateForm]);

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="text"
        placeholder="Enter your email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.email && touched.email ? 'error' : undefined}
      />
      {errors.email && touched.email && (
        <div className="input-feedback">{errors.email}</div>
      )}
      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        placeholder="Enter your password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.email && touched.email ? 'error' : undefined}
      />
      {errors.password && touched.password && (
        <div className="input-feedback">{errors.password}</div>
      )}
      <textarea
        placeholder="aaa"
        name="memo"
        value={values.memo}
        onChange={handleChange}
        onBlur={handleBlur}></textarea>
      <InputTag />
      {/* <ReactTags handleAddition={() => handleAddition} handleDelete={() => handleDelete} /> */}
      <button type="submit" disabled={isSubmitting || !isValid}>
        Login
      </button>
    </form>
  );
  // const form = useRef()

  // useEffect(() => {
  //   if(form.current){
  //     form.current!.getFormikActions().validateForm()
  //   }
  // }, [])
  // return (
  //   <div>
  //     <h1>Validated Form Component</h1>
  //     <Formik
  //       initialValues={{ email: '', password: '' }}
  //       validationSchema={validationSchema}
  //       onSubmit={(values, { setSubmitting }) => {
  //         setTimeout(() => {
  //           console.log('Logging in ', values);
  //           setSubmitting(false);
  //         }, 500);
  //       }}>
  //       {(props) => {
  //         const {
  //           values,
  //           touched,
  //           errors,
  //           isSubmitting,
  //           handleChange,
  //           handleBlur,
  //           handleSubmit,
  //           isValid,
  //           validateForm,
  //           isInitialValid,
  //           initialErrors,
  //         } = props;

  //         // if (!isValid) {
  //         //   validateForm();
  //         // }
  //         return (
  //           <form onSubmit={handleSubmit}>
  //             <label htmlFor="email">Email</label>
  //             <input
  //               id="email"
  //               name="email"
  //               type="text"
  //               placeholder="Enter your email"
  //               value={values.email}
  //               onChange={handleChange}
  //               onBlur={handleBlur}
  //               className={errors.email && touched.email ? 'error' : undefined}
  //             />
  //             {errors.email && touched.email && (
  //               <div className="input-feedback">{errors.email}</div>
  //             )}
  //             <label htmlFor="password">Password</label>
  //             <input
  //               id="password"
  //               name="password"
  //               type="password"
  //               placeholder="Enter your password"
  //               value={values.password}
  //               onChange={handleChange}
  //               onBlur={handleBlur}
  //               className={errors.email && touched.email ? 'error' : undefined}
  //             />
  //             {errors.password && touched.password && (
  //               <div className="input-feedback">{errors.password}</div>
  //             )}
  //             <InputTag />
  //             {/* <ReactTags handleAddition={() => handleAddition} handleDelete={() => handleDelete} /> */}
  //             <button type="submit" disabled={isSubmitting || !isValid}>
  //               Login
  //             </button>
  //           </form>
  //         );
  //       }}
  //     </Formik>
  //   </div>
  // );
};

export default ValidatedLoginForm;
