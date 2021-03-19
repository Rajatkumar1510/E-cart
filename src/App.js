import React, { useState } from "react";
import data from "./data.json";
import Product from "./components/Product";
import Filter from "./components/Filter";
const App = () => {
  const [products, setProducts] = useState(data.products);
  const [size, setSize] = useState("");
  const [sort, setSort] = useState("");

  const filterProducts = (e) => {
    console.log(e.target.value);
    if (e.target.value === "") {
      setSize(e.target.value);
      setProducts(products);
    } else {
      setSize(e.target.value);
      setProducts(
        products.filter((product) => {
          console.log(product);
          return product.availableSizes.indexOf(e.target.value) >= 0;
        })
      );
    }
  };

  const sortProducts = (e) => {
    console.log(e.target.value);
    setSort(e.target.value);
    setProducts();
    setProducts();
  };
  return (
    <div className="grid-container">
      <header>
        <a href="/"> Shopping Cart</a>
      </header>
      <main>
        <div className="content">
          <div className="main">
            <Filter
              count={products.length}
              size={size}
              sort={sort}
              sortProducts={sortProducts}
              filterProducts={filterProducts}
            />
            <Product items={products} />
          </div>
          <div className="sidebar">Cart items</div>
        </div>
      </main>
      <footer>All rights reserved</footer>
    </div>
  );
};

export default App;
