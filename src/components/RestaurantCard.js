import { CDN_URL } from "../utils/constants";
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const RestaurantCard = (props) => {
  const {
    id,
    name,
    cuisines,
    cloudinaryImageId,
    areaName,
    avgRating,
    costForTwo,
    isOpen,
    sla,
    promoted = id == 438959 && "promoted",
  } = props.restaurantData;
  return (
    <div>
      <div
        className={`relative bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 overflow-hidden border-2 ${
          promoted ? "border-yellow-400" : "border-gray-200"
        }`}
      >
        {/* Promoted Badge */}
        {promoted && (
          <span className="absolute top-2 left-2 bg-black text-white text-xs font-bold px-2 py-1 rounded shadow-black">
            ⭐ Promoted
          </span>
        )}

        <Link to={`/restaurant/${id}`} className="block">
          {/* Image */}
          <img
            src={CDN_URL + cloudinaryImageId}
            alt={name}
            className="w-full h-40 object-cover"
          />

          {/* Card Content */}
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800 truncate">
              {name}
            </h3>
            <p className="text-sm text-gray-600">
              Rating: {avgRating} | {costForTwo}
            </p>
            <p className="text-sm text-gray-500 truncate">
              {cuisines.join(", ")}
            </p>
            <p className="text-sm text-gray-700 flex items-center gap-1">
              <FontAwesomeIcon icon={faLocationDot} /> {areaName}
            </p>
            <p
              className={`text-sm font-semibold ${
                isOpen ? "text-green-600" : "text-red-600"
              }`}
            >
              {isOpen ? "Open" : "Closed"}
            </p>
            <p className="text-sm text-gray-600">
              🚚 {sla.deliveryTime} minutes
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default RestaurantCard;
