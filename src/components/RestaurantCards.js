import RestaurantCard from "./RestaurantCard";
import useRestaurants from "../utils/useRestaurants";
import ShimmerRestarants from "../components/ShimmerRestaurants";

const RestaurantCards = () => {
  // use custom hook to manage restaurants data
  const {
    restaurants,
    filteredRestaurants,
    searchText,
    setSearchText,
    getMatchingRestaurants,
    filterTopRatedRestaurants,
    showAllRestaurants,
  } = useRestaurants();

  // Conditional rendering
  return 0 === restaurants.length ? (
    <ShimmerRestarants />
  ) : (
    <div className="container mx-auto px-4 py-6">
      {/* Search Bar */}
      <div className="flex flex-col md:flex-row item-center gap-3 mb-6 w-full">
        <input
          type="text"
          placeholder="Search restaurants by name or cuisine..."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            getMatchingRestaurants(e.target.value);
          }}
          className="w-full md p-2 border border-gray-300 rounded-md focus:ring-blue-400"
        />
      </div>

      {/* Filters */}
      <div className="flex justify-end gap-4 mb-6">
        <button
          onClick={filterTopRatedRestaurants}
          className="px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 leading-none"
        >
          Top Rated
        </button>
        <button
          onClick={showAllRestaurants}
          className="px-3 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 leading-none"
        >
          Show All
        </button>
      </div>

      {/* Restaurant Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredRestaurants.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.id} restaurantData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantCards;
