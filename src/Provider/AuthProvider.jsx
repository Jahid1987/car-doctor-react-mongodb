import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import auth from "../firebase/firebase.config";
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
  // user  observer
  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsLoading(false);
    });
    return () => unsubcribe();
  }, []);
  console.log(user);
  const authInfo = {
    user,
    isLoading,
    userSignup,
    updateUserProfile,
    userSignIn,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
