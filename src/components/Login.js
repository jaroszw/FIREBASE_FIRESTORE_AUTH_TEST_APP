import React, { useEffect } from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

import { FormWrapper, StyledForm } from '../containers/index';
import Input from '../containers/Input';
import Heading from '../containers/Heading';

import { firestore, auth } from '../Firebase/config';

const email = 'jaroszw@gmail.com';
const password = 'haslotestowe';

const initialValues = {
  email: '',
  password: '',
};

const onSubmit = (e) => {
  e.preventDefault();
  console.log(email, password);
  // const handleLogin = ({ email, password }) => {
  //   auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
  //     console.log(userAuth);
  //   });
  // };
};

const validateSchema = Yup.object({
  email: Yup.string().email('Wrong format').required('Email is required'),
  password: Yup.string().required('Password is requied'),
});

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    
  };

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
              <button type="submit">Submit</button>
            </StyledForm>
          );
        }}
      </Formik>
    </FormWrapper>
  );
};

export default Login;
