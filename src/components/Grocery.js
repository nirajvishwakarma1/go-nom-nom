import GroceryCard from "./GroceryCard";

const Grocery = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <GroceryCard />
        <GroceryCard />
        <GroceryCard />
        <GroceryCard />
        <GroceryCard />
        <GroceryCard />
        <GroceryCard />
        <GroceryCard />
      </div>
    </div>
  );
};

export default Grocery;
