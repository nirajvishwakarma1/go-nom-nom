import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CDN_URL } from "../utils/constants";
import { faI, faInr } from "@fortawesome/free-solid-svg-icons";

const CategoryMenuItemsList = ({ data }) => {
  const {
    name,
    price,
    category,
    description,
    imageId,
    itemAttribute: { vegClassifier },
    ratings: {
      aggregatedRating: { rating, ratingCount },
    },
    type,
  } = data;
  return (
    <div className="flex flex-row-reverse border-b-1 border-gray-300 last:border-0 pb-5 mb-5">
      <div className="size-2/10">
        {imageId && <img src={CDN_URL + imageId} />}
      </div>
      <div className="size-8/10">
        <h4 className="font-bold text-gray-700 mb-1">{name}</h4>
        <p className="text-xs text-gray-600">
          <FontAwesomeIcon icon={faInr} className="text-xs font-normal" />
          {` ${(price / 100).toFixed(2)}`}
        </p>
        <p className="text-sm text-gray-700 mt-4">
          {vegClassifier.toLowerCase() === "veg" ? "🟢 Veg" : "🔴 Non-veg"}
        </p>
        <div className="flex items-center gap-2 mt-3">
          <span className="bg-green-500 text-xs text-white pl-2 pr-0.5 pt-0.25 pb-0.5 rounded text-sm">
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

export default CategoryMenuItemsList;
