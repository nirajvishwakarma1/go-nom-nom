const ShimmerRestaurant = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row gap-6 items-start animate-pulse">
        {/* Image Placeholder - Left */}
        <div className="w-full md:w-1/4 h-64 bg-gray-300 rounded-lg"></div>

        {/* Details Placeholder - Right */}
        <div className="w-full md:w-3/4 space-y-4">
          <div className="h-6 bg-gray-300 rounded w-3/4"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6"></div>
          <div className="h-4 bg-gray-300 rounded w-2/3"></div>

          {/* Ratings & Delivery Time */}
          <div className="h-6 bg-gray-300 rounded w-1/4"></div>
          <div className="h-4 bg-gray-300 rounded w-1/3"></div>
          <div className="h-4 bg-gray-300 rounded w-1/4"></div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerRestaurant;
