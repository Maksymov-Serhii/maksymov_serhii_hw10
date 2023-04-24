import React from "react";
import './Products.css'
import Menu from "../Menu/Menu";
import { NavLink } from "react-router-dom";

const Products = () => {
  const productsIds = [1, 2, 3, 4, 5];

  return (  
    <div className="products-page">
      <Menu />
      <h2>Купуй у нас за найкращими цінами</h2>
      <ul className="products-list">
        {productsIds.map(productId => {
          return (
            <li key={productId}>
              <NavLink to={`/products/${productId}`}>
                Товар {productId}
              </NavLink>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Products;
