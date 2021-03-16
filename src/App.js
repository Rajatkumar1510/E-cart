import React, { useState } from "react";
import data from "./data.json";
import Product from "./components/Product";
const App = () => {
  // const [products, setProducts] = useState([]);
  return (
    <div className="grid-container">
      <header>
        <a href="/"> Shopping Cart</a>
      </header>
      <main>
        <div className="content">
          <div className="main">
            <Product items={data.products} />
          </div>
          <div className="sidebar">Cart items</div>
        </div>
      </main>
      <footer>All rights reserved</footer>
    </div>
  );
};

export default App;
