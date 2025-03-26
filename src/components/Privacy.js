const Privacy = () => {
  const lorem =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  return (
    <div className="py-8 px-4 bg-gray-100">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Privacy Policy</h2>
      <p className="text-lg text-gray-600">{Array(10).fill(lorem).join(" ")}</p>
    </div>
  );
};

export default Privacy;
