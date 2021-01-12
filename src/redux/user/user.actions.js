import { userTypes } from "./user.types";

export const signUpWithEmail = (user) => ({
  type: userTypes.SIGN_IN_WITH_EMAIL,
  action: user,
});

export const setCurrentUser = (user) => ({
  type: userTypes.SET_CURRENT_USER,
  payload: user,
});
