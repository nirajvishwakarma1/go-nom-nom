import React, { useRef, useState } from "react";

const FocusInput = () => {
  const inputRef = useRef(null);
  const [currentValue, setCurrentValue] = useState(0);

  const handleChange = () => {
    setCurrentValue(inputRef.current.value);
  };

  const defaultValue = 0;

  return (
    <div
      style={{
        backgroundColor: "#EEE",
        padding: "20px",
        margin: "10px",
        border: "1px solid #CCC",
      }}
    >
      <input
        ref={inputRef}
        type="text"
        placeholder="Type here..."
        defaultValue={defaultValue}
        onChange={handleChange}
      />
      <button onClick={() => inputRef.current.focus()}>Focus Input</button>
      <p>Current value: {currentValue}</p>
    </div>
  );
};

export default FocusInput;
