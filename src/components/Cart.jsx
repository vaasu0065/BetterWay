import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import EmptyState from "./EmptyState";

const Cart = () => {
  const { cart, dispatch } = useContext(CartContext);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return <EmptyState text="Your cart is empty 🛒" />;
  }

  return (
    <div className="cart">
      <h2>🛒 Shopping Cart</h2>

      {cart.map(item => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} />

          <div className="cart-info">
            <h4>{item.name}</h4>
            <p>₹{item.price}</p>
          </div>

          <input
            type="number"
            min="1"
            value={item.quantity}
            onChange={e =>
              dispatch({
                type: "UPDATE_QTY",
                payload: { id: item.id, qty: Number(e.target.value) },
              })
            }
          />

          <button
            className="remove-btn"
            onClick={() =>
              dispatch({ type: "REMOVE_FROM_CART", payload: item.id })
            }
          >
            Remove
          </button>
        </div>
      ))}

      <div className="cart-total">
        <h3>Total</h3>
        <h2>₹{total}</h2>
      </div>
    </div>
  );
};

export default Cart;
