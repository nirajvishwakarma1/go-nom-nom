import { CDN_URL } from "../utils/constants";
import { useParams } from "react-router";
import useRestaurantData from "../utils/useReastaurantData";
import ShimmerRestaurant from "./ShimmerRestaurant";

const RestaurantDetails = () => {
  const { id } = useParams();
  const restaurantData = useRestaurantData(id);

  if (!restaurantData) return <ShimmerRestaurant />;

  console.log(restaurantData);

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
  } = restaurantData;

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
          <h1 className="text-3xl font-bold">{name}</h1>
          <p className="text-gray-500">
            {areaName}, {locality}, {city}
          </p>
          <p className="text-gray-600">Cuisines: {cuisines.join(", ")}</p>
          <p className="text-lg font-semibold">{costForTwoMessage}</p>

          {/* Rating */}
          <div className="flex items-center gap-2 mt-3">
            <span className="bg-green-500 text-white px-3 py-1 rounded text-sm">
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
            }`}
          >
            {isOpen ? "Open Now" : "Closed"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetails;
