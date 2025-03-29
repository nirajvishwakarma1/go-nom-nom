import { useState } from "react";
import { CDN_URL } from "../utils/constants";
import { useParams } from "react-router";
import RestaurantCategoryMenu from "./RestaurantCategoryMenu";
import useRestaurantData from "../utils/useReastaurantData";
import ShimmerRestaurant from "./ShimmerRestaurant";

const RestaurantDetails = () => {
  const [showIndex, setShowIndex] = useState(0);

  console.log("showIndex:", showIndex);

  const { id } = useParams();
  const restaurantData = useRestaurantData(id);

  if (!restaurantData) return <ShimmerRestaurant />;

  // Heading
  const [heading] = restaurantData.cards
    .filter((card) =>
      card?.card?.card["@type"].toLowerCase().includes("textboxv2")
    )
    .map((card) => card.card.card.text);

  // Restaurant Data
  const [restaurant] = restaurantData.cards
    .filter((card) =>
      card?.card?.card["@type"]
        .toLowerCase()
        .includes("swiggy.presentation.food.v2.restaurant")
    )
    .map((card) => card?.card?.card?.info);

  // Regulare data
  const [regular] = restaurantData.cards
    .filter((card) => card?.groupedCard?.cardGroupMap?.REGULAR)
    .map((card) => card?.groupedCard?.cardGroupMap?.REGULAR.cards);

  const itemCategoryArr = regular
    .filter((item) =>
      item?.card?.card["@type"]
        .toLowerCase()
        .includes("swiggy.presentation.food.v2.itemcategory")
    )
    .map((item) => item?.card?.card);

  const {
    name,
    areaName,
    locality,
    city,
    cuisines,
    costForTwoMessage,
    avgRating,
    totalRatingsString,
    sla,
    isOpen,
    cloudinaryImageId: img,
  } = restaurant;

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row gap-6 items-start">
        {/* Restaurant Image - Left Side */}
        <div className="w-full md:w-1/4">
          <img
            src={`${CDN_URL}${img}`}
            alt={name}
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Restaurant Details - Right Side */}
        <div className="w-full md:w-3/4 flex flex-col justify-center">
          <h1 className="text-3xl font-bold">{heading || name}</h1>
          <p className="text-gray-500">
            {areaName}, {locality}, {city}
          </p>
          <p className="text-gray-600">Cuisines: {cuisines.join(", ")}</p>
          <p className="text-lg font-semibold">{costForTwoMessage}</p>

          {/* Rating */}
          <div className="flex items-center gap-2 mt-3">
            <span className="bg-green-500 text-white pl-2 pr-1 py-0.5 rounded text-sm">
              {avgRating} ⭐
            </span>
            <small className="text-gray-500">{totalRatingsString}</small>
          </div>

          {/* Delivery Time */}
          <p className="mt-3 text-gray-600">
            Delivery Time: {sla.deliveryTime} mins
          </p>

          {/* Open/Closed Status */}
          <p
            className={`mt-3 font-semibold ${
              isOpen ? "text-green-600" : "text-red-600"
            } mb-10`}
          >
            {isOpen ? "Open Now" : "Closed"}
          </p>

          {/* Item Category */}
          {itemCategoryArr.map((item, index) => (
            // Controlled Component
            <RestaurantCategoryMenu
              key={item.categoryId}
              catItem={item}
              showItems={showIndex === index}
              setShowIndex={() => setShowIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetails;
