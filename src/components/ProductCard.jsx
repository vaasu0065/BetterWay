import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { dispatch } = useContext(CartContext);

  return (
    <div className="card">
      <img src={product.image} alt={product.name} />

      <div className="card-body">
        <h3>{product.name}</h3>
        <p className="category">{product.category}</p>
        <p className="price">₹{product.price}</p>

        <span className={product.stock > 0 ? "badge in" : "badge out"}>
          {product.stock > 0 ? "In Stock" : "Out of Stock"}
        </span>

        <button
          disabled={product.stock === 0}
          onClick={() =>
            dispatch({ type: "ADD_TO_CART", payload: product })
          }
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
