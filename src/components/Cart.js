import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { clearCart } from "../utils/cartSlice";
import { Link } from "react-router";

const Cart = () => {
  // Make sure to subscribe to right portion of store
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="py-10 px-20">
      <h1 className="text-3xl font-bold mb-10">Cart</h1>
      <div className="flex">
        <div className="size-7/10">
          {cartItems.length === 0 && (
            <h3 className="text-center font-bold text-2xl text-gray-700">
              Cart is empty, click{" "}
              <Link to="/" className="text-blue-500">
                here
              </Link>{" "}
              to add items to cart.
            </h3>
          )}
          {cartItems.map((item) => (
            <CartItem key={item.id} data={item} />
          ))}
          {cartItems.length > 0 && (
            <p>
              <button
                className="bg-red-700 text-gray-200 rounded text-sm px-3 pt-1 pb-1.5 cursor-pointer"
                onClick={handleClearCart}
              >
                Clear Cart
              </button>
            </p>
          )}
        </div>
        <div className="size-3/10">lorem ipsum</div>
      </div>
    </div>
  );
};

export default Cart;
