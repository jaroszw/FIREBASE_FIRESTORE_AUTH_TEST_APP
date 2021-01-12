import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import LoginPage from "./pages/Login";
import { auth } from "./Firebase/config";
import { handleUserProfile } from "./Firebase/utils";
import { setCurrentUser } from "./redux/user/user.actions";

import ShowUp from "./components/showUp";

const mapState = (state) => ({
  user: state.user.currentUser,
});

const App = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(mapState);

  useEffect(() => {
    const authListener = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await handleUserProfile(userAuth);
        console.log(userRef);
        userRef.onSnapshot((snapshot) => {
          console.log();
          dispatch(setCurrentUser({ id: snapshot.id, ...snapshot.data() }));
        });
      }
      dispatch(setCurrentUser(userAuth));
    });
    return () => {
      authListener();
    };
  }, []);

  console.log(user);

  return (
    <div className="App">
      {user ? <ShowUp /> : null}
      <LoginPage />
    </div>
  );
};

export default App;
