import React, { useEffect, useState } from "react";
import Product from "../Products/Product";
import "./Shop.css";
import ShoppingCart from "../Shopping-Cart/ShoppingCart";
import { addToDb } from "../../utilities/fakedb";
import useProducts from "../../../SharedAPI/useProducts";
const Shop = () => {
  const [products, setProduct] = useProducts([]); //custom hooks applied
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    // console.log(product);
    //cart.push(product);

    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.id);
    // console.log(newCart[0].name);
  }

  return (
    <div className="shop-container">
      <div className="product-container">
        {/* <h1>Products Container</h1>{" "} */}
        {products.map((product) => (
          <Product
            product={product}
            key={product.id}
            addToCart={addToCart}
          ></Product>
        ))}
      </div>

      <div className="cart-container">
        <ShoppingCart cart={cart}></ShoppingCart>
      </div>
    </div>
  );
};

export default Shop;
