import React from "react";
import { useNavigate } from "react-router-dom";
import "./ShoppingCart.css";

const ShoppingCart = (props) => {
  const { cart } = props;
  let total = 0;
  let shipping = 0;
  let tax = 0;
  let grandTotal = 0;
  for (const selected of cart) {
    //console.log(selected);
    total = total + selected.price;
    shipping += selected.shipping;
    tax = parseFloat((total * 0.1).toFixed(2));

    grandTotal = total + shipping + tax;
  }
  const navigate = useNavigate();
  return (
    <div className="calculation-area">
      <h2>Order Summary</h2>
      <p>Selected Items: {cart.length}</p>
      <p>Total Price: ${total}</p>
      {/* <p>Shipping_charge: ${shipping}</p> */}
      <p>Tax: ${tax}</p>
      <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
      <br />
      <button onClick={() => navigate("/shipment")}>Order Proceed</button>
    </div>
  );
};

export default ShoppingCart;
