const GroceryCard = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden w-80 p-4">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHYumxH7lya9c2nPY3E3y8t9-GbbcmZGnQeQ&s"
        alt="Product Image"
        className="w-full h-48 object-cover border border-gray-300 rounded"
      />
      <div className="mt-4">
        <h3 className="text-lg font-bold text-gray-800">Product Name</h3>
        <p className="text-gray-700">
          Price: <span className="font-semibold">₹100</span>
        </p>
        <button
          onClick={() =>
            console.log("Add to Cart functionality needs to be implemented.")
          }
          className="mt-4 w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default GroceryCard;
