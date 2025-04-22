import React from "react";
import "./shop.css";
import product from "../data/data";
import { toast, ToastContainer } from "react-toastify";
const Shop = (props) => {
  const handleAddToCart = (id) => {
    props.setProductId(id);
    toast.success("Added Sucessfull");
  };

  return (
    <div className="container-fluid px-5 top">
      <div className="row gap-4">
        <ToastContainer position="top-center" autoClose={1000} />
        {product.map((product) => {
          return (
            <div className="col-2 border rounded" key={product.id}>
              <div className="main">
                <img src={product.image} alt="" className="product-size" />
              </div>
              <div>
                <div className="content">
                  <p className="m-0">{product.model}</p>
                  <p className="m-0">{product.brand}</p>
                </div>
                <div className="content">
                  <p className="m-0">${product.price}</p>
                  <p>Quantity : {product.quantity}</p>
                </div>
                <button
                  className="btn-cart"
                  onClick={() => handleAddToCart(product.id)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
