import { useMemo } from "react";
import ProductCard from "./ProductCard";
import EmptyState from "./EmptyState";

const ProductList = ({ products, search, category, sort }) => {
  const filtered = useMemo(() => {
    let data = [...products];

    if (search) {
      data = data.filter(p =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category) {
      data = data.filter(p => p.category === category);
    }

    if (sort === "low") {
      data.sort((a, b) => a.price - b.price);
    }
    if (sort === "high") {
      data.sort((a, b) => b.price - a.price);
    }

    return data;
  }, [products, search, category, sort]);

  if (filtered.length === 0) {
    return <EmptyState text="No products found" />;
  }

  return (
    <div className="grid">
      {filtered.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
