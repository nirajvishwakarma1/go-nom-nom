import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CDN_URL } from "../utils/constants";
import { faInr } from "@fortawesome/free-solid-svg-icons";

const CartItem = ({ data }) => {
  console.log(data);
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

  return (
    <div className="flex flex-row-reverse border-b-1 border-gray-300 last:border-0 pb-5 mb-5">
      <div className="size-2/10">
        {imageId && (
          <img
            src={CDN_URL + imageId}
            className="border-1 rounded-lg border-gray-300 drop-shadow-lg"
          />
        )}
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
      </div>
    </div>
  );
};

export default CartItem;
