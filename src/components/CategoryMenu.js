import CategoryMenuItem from "./CategoryMenuItem";

const CategoryMenu = ({ data }) => {
  const { itemCards } = data;
  const items = itemCards.map((item) => item.card.info);
  return (
    <div className="acc-body p-4">
      {items.map((item) => (
        <CategoryMenuItem key={item.id} data={item} />
      ))}
    </div>
  );
};

export default CategoryMenu;
