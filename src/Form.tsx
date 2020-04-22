import React, { useState } from 'react';
import { Formik } from 'formik';
import { validationSchema } from './model';
import './Form.css';
import { InputTag } from './InputTag';

const ValidatedLoginForm = () => {
  return (
    <div>
      <h1>Validated Form Component</h1>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log('Logging in ', values);
            setSubmitting(false);
          }, 500);
        }}>
        {(props) => {
          const {
            values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
          } = props;

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
              <InputTag />
              {/* <ReactTags handleAddition={() => handleAddition} handleDelete={() => handleDelete} /> */}
              <button type="submit" disabled={isSubmitting}>
                Login
              </button>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default ValidatedLoginForm;
