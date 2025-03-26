import React, { useContext, createContext, use } from "react";

const ThemeContext = createContext("light");
// console.log(useContext(ThemeContext));

const ThemeDisplay = () => {
  const theme = useContext(ThemeContext);
  return (
    <p className="text-lg font-semibold text-gray-700">
      Current Theme: <span className="text-blue-500">{theme}</span>
    </p>
  );
};

const ExUseContext = () => (
  <ThemeContext.Provider value="dark">
    <div className="flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Theme Context</h2>
        <ThemeDisplay />
      </div>
    </div>
  </ThemeContext.Provider>
);

export default ExUseContext;
