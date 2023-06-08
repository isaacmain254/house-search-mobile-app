import { onAuthStateChanged } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebaseConfig";

export const AuthObserverContext = createContext("");

const AuthObserverProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("");
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        console.log(currentUser.uid);
        console.log(`You logged in as ${currentUser.email}`);
        console.log(`your user name is : ${currentUser.name}`);
      } else {
        console.log("There is no logged in user");
      }
    });
  });
  return (
    <AuthObserverContext.Provider value={currentUser}>
      {children}
    </AuthObserverContext.Provider>
  );
};

export default AuthObserverProvider;
