/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { useEffect } from "react";

const AppContext = createContext();

function ContextProvider({ children }) {
  const [loggedInUser, setLoggedInUser] = useState(() => {
    const savedUser = localStorage.getItem("loggedInUser");
    return savedUser ? JSON.parse(savedUser) : [];
});

  useEffect(() => {
    
    localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
  }, [loggedInUser]);

  const values = {
    loggedInUser,
    setLoggedInUser,
  };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

export { AppContext, ContextProvider };