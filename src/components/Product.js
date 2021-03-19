import React from "react";

const Product = ({ items }) => {
  // console.log(items);
  return (
    <>
      <ul className="products">
        {items.map((item) => {
          return (
            <li key={item._id}>
              <div className="product">
                <a href={"#" + item._id}>
                  <img src={item.image} alt={item.title} />
                  <p>{item.title}</p>
                </a>
                <div className="product-price">
                  <div>${item.price}</div>
                  <button className="button primary">Add to Cart</button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Product;
