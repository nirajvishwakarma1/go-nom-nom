import ExUseContext from "./ExUseContext";
import ExRef from "./ExRef";
import { useEffect, useState } from "react";

const Test = () => {
  const [count1, setCount1] = useState(1);
  const [count2, setCount2] = useState(2);
  const [count3, setCount3] = useState(3);

  useEffect(() => {
    const interval1 = setInterval(() => {
      setCount1((prevCount) => prevCount + 1);
    }, 1000);
    console.log("useEffect rendered");

    return () => {
      clearInterval(interval1);
      console.log("Component <Test /> unmounted.");
      console.log("interval1 cleared.");
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      {console.log(count1)}
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Test</h1>
        <p className="text-lg text-gray-700">
          count1: <strong className="text-blue-500">{count1}</strong>
        </p>
        <ExUseContext />
        <div className="mt-4">
          <ExRef />
        </div>
      </div>
    </div>
  );
};

export default Test;
