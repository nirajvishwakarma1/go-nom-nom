import { useRouteError } from "react-router";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h2 className="text-3xl font-bold text-red-600">Oops!!!</h2>
      <p className="text-lg mt-2">Something went wrong.</p>
      <p className="mt-4 text-gray-700">
        <strong className="text-red-500">{err.status}</strong>: {err.statusText}
      </p>
    </div>
  );
};

export default Error;
