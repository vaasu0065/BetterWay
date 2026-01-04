import { useState } from "react";
import products from "./data/products";
import ProductList from "./components/ProductList";
import Filters from "./components/Filters";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";

const App = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");

  const clear = () => {
    setSearch("");
    setCategory("");
    setSort("");
  };

  return (
  <>
    <Navbar />

    <div className="app layout">
      {/* LEFT SIDE */}
      <div className="main-content">
        <Filters
          search={search}
          setSearch={setSearch}
          category={category}
          setCategory={setCategory}
          sort={sort}
          setSort={setSort}
          clear={clear}
        />

        <ProductList
          products={products}
          search={search}
          category={category}
          sort={sort}
        />
      </div>

      {/* RIGHT SIDE */}
      <Cart />
    </div>
  </>
);

};

export default App;
