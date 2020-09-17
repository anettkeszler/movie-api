import React, { useState, createContext } from "react";

export const ThemeContext = createContext(["dark", () => {}]);

export const ThemeProvider = (props) => {
  const themeHook = useState("dark");
  return (
    <ThemeContext.Provider value={themeHook}>
      {props.children}
    </ThemeContext.Provider>
  );
};
