import { CDN_URL } from "../utils/constants";
import CategoryMenuItemsList from "./CategoryMenuItemsList";

const CategoryMenu = ({ data }) => {
  const { categoryId, image, title, itemCards } = data;
  const items = itemCards.map((item) => item.card.info);
  return (
    <div className="acc-body p-4">
      {items.map((item) => (
        <CategoryMenuItemsList key={item.id} data={item} />
      ))}
    </div>
  );
};

export default CategoryMenu;
