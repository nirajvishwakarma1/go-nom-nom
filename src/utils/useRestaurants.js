import { useState, useEffect } from "react";
import { API_URL } from "./constants";

const useRestaurants = () => {
  // Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    getAllRestaurants();

    return () => controller.abort();
  }, []);

  const filterRestaurantsData = (data) => {
    return data?.data?.cards
      .filter((card) => card?.card?.card?.id === "restaurant_grid_listing_v2")
      .map(
        (restaurant) =>
          restaurant?.card?.card?.gridElements?.infoWithStyle?.restaurants
      )[0]
      .map((restaurant) => restaurant?.info);
  };

  const getAllRestaurants = async () => {
    const data = await fetch(API_URL);
    const jsonData = await data.json();
    const allRestaurants = filterRestaurantsData(jsonData);
    setRestaurants(allRestaurants);
    setFilteredRestaurants(allRestaurants);
  };

  const getMatchingRestaurants = (searchTerm) => {
    searchTerm = searchTerm.trim().toLowerCase();
    if (!searchTerm) return setFilteredRestaurants(restaurants);

    const matchingRestaurants = restaurants.filter(
      (restaurant) =>
        restaurant.name.toLowerCase().includes(searchTerm) ||
        restaurant.cuisines.some((cuisine) =>
          cuisine.toLowerCase().includes(searchTerm)
        )
    );
    return setFilteredRestaurants(matchingRestaurants);
  };

  // Function to filter top-rated restaurants (rating > 4)
  const filterTopRatedRestaurants = () => {
    setFilteredRestaurants(
      restaurants.filter((restaurant) => restaurant.avgRating > 4)
    );
  };

  // Function to reset the filter (show all restaurants)
  const showAllRestaurants = () => {
    setFilteredRestaurants(restaurants);
  };

  return {
    restaurants,
    filteredRestaurants,
    searchText,
    setSearchText,
    getMatchingRestaurants,
    filterTopRatedRestaurants,
    showAllRestaurants,
  };
};

export default useRestaurants;
