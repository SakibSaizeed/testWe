import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const SingleProduct = ({ product }) => {
  const { title, url, thumbnailUrl, sale_price, short_desc, id } = product;
  const navigate = useNavigate();
  const handleBuy = () => {
    navigate("/login");
  };
  return (
    <div className="card w-96  bg-slate-900 shadow-2xl">
      <figure className="px-10 pt-10">
        <img src={thumbnailUrl} alt="Menu" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        {/* <p>test</p> */}
        <div className="card-actions">
          <button className="btn btn-primary" onClick={handleBuy}>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
