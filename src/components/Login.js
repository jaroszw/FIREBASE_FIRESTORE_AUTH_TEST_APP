import React, { useState } from 'react';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';

import { FormWrapper, StyledForm } from '../containers/index';
import Input from '../containers/Input';
import Heading from '../containers/Heading';

import { firestore, auth, SignInWithGoogle } from '../Firebase/config';

const initialValues = {
  firstName: '',
  email: '',
  password: '',
};

const createUserProile = async (userAuth, additionalData = {}) => {
  if (!userAuth) return;
  const { uid } = userAuth;

  const userRef = firestore.doc(`users/${uid}`);
  console.log(userRef);
  const snapShot = await userRef.get();
  console.log(snapShot);

  if (!snapShot.exist) {
    console.log('NI MA');
  }

  return userRef;
};

const onSubmit = async ({ email, password, firstName }) => {
  const { user } = await auth.createUserWithEmailAndPassword(email, password);
  const additinalData = { firstName };
  createUserProile(user, additinalData);
};

const validateSchema = Yup.object({
  email: Yup.string().email('Wrong format').required('Email is required'),
  password: Yup.string()
    .required('Password is requied')
    .min(6, 'your password is to short'),
});

const Login = () => {
  return (
    <FormWrapper>
      <Heading color="light" bold size="h1">
        Loggin In
      </Heading>
      <Formik
        validateSchema={validateSchema}
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        {({ isSubmiting, isValid }) => {
          return (
            <StyledForm>
              <Field
                type="text"
                name="firstName"
                id="firstName"
                placeholder="firstName"
                component={Input}
              />
              <Field
                type="email"
                name="email"
                id="email"
                placeholder="email"
                component={Input}
              />
              <Field
                type="password"
                name="password"
                id="password"
                placeholder="password"
                component={Input}
              />
              <button
                type="submit"
                style={{ padding: '10px', cursor: 'pointer' }}
              >
                Submit
              </button>
            </StyledForm>
          );
        }}
      </Formik>
      <button
        style={{
          padding: '10px',
          cursor: 'pointer',
          width: '100%',
          marginTop: '5px',
        }}
        onClick={SignInWithGoogle}
      >
        Sing In With Google
      </button>
    </FormWrapper>
  );
};

export default Login;
