import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../firebase/firebase.config";
import axios from "axios";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  // sign up new user
  function userSignup(email, pass) {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, pass);
  }
  // update user profile
  function updateUserProfile(name) {
    setIsLoading(false);
    return updateProfile(auth.currentUser, {
      displayName: name,
    });
  }
  // user sign in
  function userSignIn(email, pass) {
    return signInWithEmailAndPassword(auth, email, pass);
  }
  // sign out user
  function signOutUser() {
    return signOut(auth);
  }
  // user  observer
  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: userEmail };
      setUser(currentUser);
      setIsLoading(false);
      // setting and deleting token
      if (currentUser) {
        axios
          .post("http://localhost:5000/jwt", loggedUser, {
            withCredentials: true,
          })
          .then((res) => console.log(res.data));
      } else {
        axios
          .post("http://localhost:5000/logout", loggedUser, {
            withCredentials: true,
          })
          .then((res) => console.log(res.data));
      }
    });
    return () => unsubcribe();
  }, [user?.email]);
  // console.log(user);
  const authInfo = {
    user,
    isLoading,
    userSignup,
    updateUserProfile,
    userSignIn,
    signOutUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
