import CategoryMenu from "./CategoryMenu";

const RestaurantCategoryMenu = ({ catItem, showItems, setShowIndex }) => {
  const toggleAccBody = () => {
    setShowIndex();
  };

  return (
    <div className="border border-gray-300 rounded-md overflow-hidden first:mt-10">
      <div
        className="acc-heading flex justify-between items-center p-4 bg-gray-100 cursor-pointer"
        onClick={toggleAccBody}
      >
        <h3 className="font-semibold text-lg">
          {catItem.title} ({catItem.itemCards.length})
        </h3>
        <i className="carat transition-transform duration-300">🔻</i>
      </div>
      {showItems && <CategoryMenu data={catItem} />}
    </div>
  );
};

export default RestaurantCategoryMenu;
