import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
  signInWithEmailAndPassword
} from "firebase/auth";
import { auth } from "../../firebaseConfig";

export const UserContext = createContext("");

export const UserAuthProvider = ({ children }) => {
  const createUser = (email, password, fname, lname, phone) => {
    return createUserWithEmailAndPassword(auth, email, password).then(cred => {
      if (auth.currentUser) {
        updateProfile(auth.currentUser, {
          displayName: fname
        });
      }
    });
  };

  // Sign in Area
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const [user, setUser] = useState({});
  useEffect(() => {
    const currentUser = onAuthStateChanged(
      auth,
      currentUser => {
        setUser(currentUser);
      },
      []
    );
    return () => {
      currentUser();
    };
  });

  const logout = () => {
    signOut(auth);
  };

  return (
    <UserContext.Provider value={{ createUser, user, logout, signIn }}>
      {children}
    </UserContext.Provider>
  );
};

// export const userAuth = () =>{
//     return useContext(UserContext)
// }
