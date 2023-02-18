import React, { useState, createContext, useContext } from "react";

export const GlobalConText = createContext();

export const GlobalProvider = ({ children }) => {
  const [clicked, setClicked] = useState(false);
  const [showPass, setShowPass] = useState(false);
  
  const [isLoading, setIsLoading] = useState(false);
  return (
    <GlobalConText.Provider
      value={{
        click: [clicked, setClicked],
        showPassword: [showPass, setShowPass],
        Loading: [isLoading, setIsLoading]
      }}
    >
      {children}
    </GlobalConText.Provider>
  );
};
