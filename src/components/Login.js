import React, { useEffect } from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";

import { FormWrapper, StyledForm } from "../containers/index";
import Input from "../containers/Input";
import Heading from "../containers/Heading";

import { auth, SignInWithGoogle } from "../Firebase/config";
import { handleUserProfile } from "../Firebase/utils";

const initialValues = {
  displayName: "",
  email: "",
  password: "",
};

const onSubmit = async (values) => {
  const { email, password, displayName } = values;
  const { user } = await auth.createUserWithEmailAndPassword(email, password);
  const additinalData = { displayName };
  await handleUserProfile(user, additinalData);
};

const validateSchema = Yup.object({
  email: Yup.string().email("Wrong format").required("Email is required"),
  password: Yup.string()
    .required("Password is requied")
    .min(6, "your password is to short"),
});

const mapState = ({ user }) => ({
  user: user.currentUser,
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
                name="displayName"
                id="displayName"
                placeholder="displayName"
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
                style={{ padding: "10px", cursor: "pointer" }}
              >
                Submit
              </button>
            </StyledForm>
          );
        }}
      </Formik>
      <button
        style={{
          padding: "10px",
          cursor: "pointer",
          width: "100%",
          marginTop: "5px",
        }}
        onClick={SignInWithGoogle}
      >
        Sing In With Google
      </button>
      <button
        style={{
          padding: "10px",
          cursor: "pointer",
          width: "100%",
          marginTop: "5px",
        }}
        onClick={auth.signOut()}
      >
        Sign Out
      </button>
    </FormWrapper>
  );
};

export default Login;
