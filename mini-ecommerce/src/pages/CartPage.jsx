import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, clearCart } from "../features/cart/cartSlice";

function CartPage() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  if (items.length === 0) return <p>Cart is empty</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Cart</h1>
      {items.map((item) => (
        <div key={item.id} className="flex items-center mb-2">
          <img src={item.image} alt={item.title} className="w-16 h-16 object-contain mr-4" />
          <div className="flex-1">
            <p>{item.title}</p>
            <p>
              ${item.price} x {item.quantity}
            </p>
          </div>
          <button
            className="bg-red-500 text-white px-2 py-1 rounded"
            onClick={() => dispatch(removeItem(item.id))}
          >
            Remove
          </button>
        </div>
      ))}
      <button
        className="mt-4 bg-gray-700 text-white px-4 py-2 rounded"
        onClick={() => dispatch(clearCart())}
      >
        Clear Cart
      </button>
    </div>
  );
}

export default CartPage;
