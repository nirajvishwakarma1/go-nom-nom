import React, { useRef, useState } from "react";

const FocusInput = () => {
  const inputRef = useRef(null);
  const [currentValue, setCurrentValue] = useState(0);

  const handleChange = () => {
    setCurrentValue(inputRef.current.value);
  };

  const defaultValue = 0;

  return (
    <div className="bg-gray-200 p-6 m-4 border border-gray-300 rounded-lg shadow-md text-center">
      <input
        ref={inputRef}
        type="text"
        placeholder="Type here..."
        defaultValue={defaultValue}
        onChange={handleChange}
        className="w-full p-2 mb-4 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={() => inputRef.current.focus()}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Focus Input
      </button>
      <p className="mt-4 text-lg font-semibold text-gray-700">
        Current value: <span className="text-blue-500">{currentValue}</span>
      </p>
    </div>
  );
};

export default FocusInput;
