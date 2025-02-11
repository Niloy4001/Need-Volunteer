import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // login or register by google
  const logInByGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  //sign in by email and password
  const signInByEmailPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Log In by Email and Password
  const logInByEmailPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // log out
  const logOut = () => {
    return signOut(auth);
  };

  //   update user profile
  const manageProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  //   Get the current sign in user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser?.email) {
        setUser(currentUser);
        await axios.post(
          "https://need-volunteer-server.vercel.app/jwt",
          { email: currentUser?.email },
          { withCredentials: true }
        );
        setLoading(false);
        
      } else {
        setUser(null);
        await axios.get("https://need-volunteer-server.vercel.app/logout", {
          withCredentials: true,
        });
        setLoading(false);
      }
    }
  
  );

    return () => {
      unsubscribe();
    };
  }, []);
  const info = {
    user,
    loading,
    logInByGoogle,
    signInByEmailPassword,
    logOut,
    logInByEmailPassword,
    manageProfile,
  };

  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
