const Contact = () => {
  return (
    <div className="py-8 px-4 bg-gray-100 min-h-[80vh]">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Contact</h2>
      <div className="w-6/12">
        <form>
          <p className="mt-5">
            Fullname:
            <br />
            <input
              type="text"
              name="fullname"
              placeholder="Fullname"
              className="border-1 border-gray-300 px-3 py-2 w-100 rounded"
            />
          </p>
          <p className="mt-5">
            Email:
            <br />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="border-1 border-gray-300 px-3 py-2 w-100 rounded"
            />
          </p>
          <p className="mt-5">
            <button className="bg-gray-700 hover:bg-gray-800 cursor-pointer text-white px-3 py-2 rounded">
              Submit
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Contact;
