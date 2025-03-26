const ShimmerRestarants = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold text-center mb-4">
        Loading Restaurants...
      </h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {Array(8) // Show 6 shimmer cards
          .fill("")
          .map((_, index) => (
            <div
              key={index}
              className="bg-gray-200 animate-pulse rounded-lg shadow-md p-4 h-56"
            >
              {/* Image Placeholder */}
              <div className="h-32 bg-gray-300 rounded-md"></div>

              {/* Text Placeholder */}
              <div className="mt-3 space-y-2">
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                <div className="h-3 bg-gray-300 rounded w-1/2"></div>
                <div className="h-3 bg-gray-300 rounded w-5/6"></div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ShimmerRestarants;
