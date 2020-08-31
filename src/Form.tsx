import { useFormik } from 'formik';
import React, { useEffect } from 'react';
import './Form.css';
import { InputTag } from './InputTag';
import { validationSchema } from './model';
// @ts-ignore
import CKEditor from '@ckeditor/ckeditor5-react';
// @ts-ignore
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// @ts-ignore
import BalloonEditor from '@ckeditor/ckeditor5-build-balloon';
// @ts-ignore
import sanitize from 'sanitize-html';

const ValidatedLoginForm = () => {
  const {
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
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

  const htmlContent = `<p>Hello every....</p>`;
  const anotherContent = `<img href='asdf' />`;
  const longContent = `<div class="headline">
  <h1>StudyBass Fundamentals One</h1>
</div>
<div class="curr-header">
  <div class="curr-header-img">
  <image src="https://b570f299d8a96ff32c59-2e725a51007a5cce3182c57bd45640f2.ssl.cf1.rackcdn.com/images/SBFI-large.png" />
  </div>
                                                                                                          <h2>Curriculum Overview</h2>
  <h3 id="lesson-link">8 Blocks | 56 Lessons</h3>
  <p>Welcome new StudyBasser! In this first curriculum my intention is to put you on the right track to be <i>not a bass player</i>, but a <u><b>bass-playing musician</b></u>. The way you <i>think</i> about music and learning music has a big effect on how fast and well it goes for you. This curriculum gets you thinking right. The lessons start with a fair amount of important reading. Then we start playing!</p>
<div style="clear: both;">
<h4>In this StudyBass curriculum you will learn:</h4>
<ul>
 <li>A broad overview of music</li>
 <li>The role of the bass</li>
 <li>Essential beginning music theory</li>
 <li>Basic bass technique</li>
 <li>Reading music notation, bass tab and StudyBass AlphaTab</li>
 <li>Tips on practicing</li>
 <li>Simple bass note patterns used in most basslines</li>
 <li>Essential basic rhythm skills</li>
 <li>Beginning intervals</li>
</ul>
</div>`;
  console.log(
    `here is result: ${sanitize(longContent, {
      allowedTags: [],
      allowedAttributes: {},
    })}`
  );
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
      <CKEditor
        editor={BalloonEditor}
        data={longContent}
        onInit={(editor: any) => {}}
        disabled="true"
        // config={
        //   {
       
        //     isReadOnly: true,
        //   }
        // }
      />
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
