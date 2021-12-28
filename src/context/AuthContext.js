import React from 'react'
import { createContext, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../auth/firebase";
import { useEffect } from "react";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {

    onAuthStateChanged(auth, (currentUser) => {

      setCurrentUser(currentUser);

    });
  }, []);


  return (
    <AuthContext.Provider value={{ currentUser }}>
      {props.children}

    </AuthContext.Provider>
  );
};
export default AuthContextProvider;