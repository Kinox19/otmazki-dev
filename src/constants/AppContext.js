import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState("");

  const updateInputValue = (value) => {
    setInputValue(value);
  };

  return (
    <AppContext.Provider value={{ inputValue, updateInputValue }}>
      {children}
    </AppContext.Provider>
  );
};