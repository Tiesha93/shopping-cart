import { useContext } from "react";
import CartContext from "../context/cart/CartContext";

function CartItem({ item }) {
  const { addToCart, removeItem } = useContext(CartContext);

  return (
    <li className="CartItem__item">
      <img src={item.image} alt="" />
      <div className="d-flex justify-content-center">
        {item.name} {"$" + item.price}
      </div>
      <div className="buttons d-flex justify-content-center">
        <button
          className="px-4 py-2 bg-gray-800 text-black text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
          onClick={() => {
            addToCart(item);
          }}
        >
          +
        </button>
        <p className="text-black my-2 px-1">{item.quantity}</p>
        <button
          className="px-4 py-2 bg-gray-800 text-black text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
          onClick={() => {
            removeItem(item);
          }}
        >
          -
        </button>
      </div>
    </li>
  );
}

export default CartItem;
