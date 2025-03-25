import React, { useContext, createContext, use } from "react";

const ThemeContext = createContext("light");
// console.log(useContext(ThemeContext));

const ThemeDisplay = () => {
  const theme = useContext(ThemeContext);
  return <p>Current Theme: {theme}</p>;
};

const ExUseContext = () => (
  <ThemeContext.Provider value="dark">
    <ThemeDisplay />
  </ThemeContext.Provider>
);

export default ExUseContext;
