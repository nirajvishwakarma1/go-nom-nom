import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CDN_URL } from "../utils/constants";
import { faInr, faPlus } from "@fortawesome/free-solid-svg-icons";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const CategoryMenuItem = ({ data }) => {
  const dispatch = useDispatch();

  const {
    name,
    price,
    defaultPrice,
    category,
    description,
    imageId,
    itemAttribute: { vegClassifier },
    ratings: {
      aggregatedRating: { rating, ratingCount },
    },
  } = data;

  const handleAddItem = (item) => {
    // Dispatch an action
    dispatch(addItem(item));
  };

  return (
    <div className="flex flex-row-reverse border-b-1 border-gray-300 last:border-0 pb-5 mb-5">
      <div className="size-2/10">
        {imageId && (
          <img
            src={CDN_URL + imageId}
            className="border-1 border-gray-300 drop-shadow-lg"
          />
        )}
        <button
          className="px-4 py-2 bg-gray-800 text-white hover:bg-gray-900 relative top-[-50] left-[35%] text-sm cursor-pointer"
          onClick={() => handleAddItem(data)}
        >
          <FontAwesomeIcon icon={faPlus} /> Add
        </button>
      </div>
      <div className="size-8/10">
        <h4 className="font-bold text-gray-700 mb-1">{name}</h4>
        <p className="text-xs text-gray-600">
          <FontAwesomeIcon icon={faInr} className="text-xs font-normal" />
          {` ${((price ? price : defaultPrice) / 100).toFixed(2)}`}
        </p>
        <p className="text-sm text-gray-700 mt-4">
          {vegClassifier.toLowerCase() === "veg" ? "🟢 Veg" : "🔴 Non-veg"}
        </p>
        <div className="flex items-center gap-2 mt-3">
          <span className="bg-green-500 text-sm text-white pl-2 pr-0.5 pt-0.25 pb-0.5 rounded">
            {rating} ⭐
          </span>
          <small className="text-gray-500">{ratingCount}</small>
        </div>
        <p className="text-sm text-gray-700">Category: {category}</p>
        <p className="text-sm text-gray-700 mt-4 font-medium">
          {description && "Description:"}
        </p>
        <p className="text-sm text-gray-700">{description && description}</p>
      </div>
    </div>
  );
};

export default CategoryMenuItem;
