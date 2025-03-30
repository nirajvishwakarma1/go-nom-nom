import CategoryMenu from "./CategoryMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";

const RestaurantCategoryMenu = ({ catItem, showItems, setShowIndex }) => {
  const toggleAccBody = () => {
    setShowIndex();
  };

  return (
    <div className="border border-gray-300 overflow-hidden first:mt-10">
      <div
        className="acc-heading flex justify-between items-center p-4 bg-gray-100 cursor-pointer"
        onClick={toggleAccBody}
      >
        <h3 className="font-semibold text-lg">
          {catItem.title} ({catItem.itemCards.length})
        </h3>
        <i className="carat transition-transform duration-300">
          {showItems ? (
            <FontAwesomeIcon icon={faCaretUp} />
          ) : (
            <FontAwesomeIcon icon={faCaretDown} />
          )}
        </i>
      </div>
      {showItems && <CategoryMenu data={catItem} />}
    </div>
  );
};

export default RestaurantCategoryMenu;
